import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../../logo.svg';
import { Chatbot } from './Chatbot';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Services', href: '/services' },
    { name: 'Tarifs', href: '/pricing' },
    { name: 'Galerie', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-bg/90 backdrop-blur-md py-3 md:py-4 shadow-sm' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img src={Logo} alt="Studio Maheni" className="h-14 md:h-18 object-contain group-hover:scale-105 transition-transform duration-500 [&>*]:fill-brand-primary" style={{filter: "brightness(0) saturate(100%) invert(23%) sepia(24%) saturate(1112%) hue-rotate(347deg) brightness(95%) contrast(88%)"}}/>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-medium transition-colors ${location.pathname === link.href ? 'text-brand-secondary' : 'text-brand-primary/80 hover:text-brand-secondary'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col items-end">
            <a 
              href="https://calendly.com/reservations-cours/decouverte-pole-dance" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-primary text-brand-bg px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-secondary transition-all"
            >
              Réservez
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-brand-primary p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-bg shadow-xl py-6 px-6 lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`text-lg font-medium py-2 border-b border-brand-primary/5 ${location.pathname === link.href ? 'text-brand-secondary' : 'text-brand-primary'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col items-center pt-4">
                <a 
                  href="https://calendly.com/reservations-cours/decouverte-pole-dance" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-primary text-brand-bg px-6 py-3.5 rounded-full text-center font-medium w-full text-sm"
                >
                  Réservez
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="py-12 bg-brand-primary text-brand-bg/40 border-t border-brand-bg/5 mt-auto">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <Link to="/" className="flex items-center group">
        <img src={Logo} alt="Studio Maheni" className="h-14 md:h-18 object-contain group-hover:scale-105 transition-transform duration-500 brightness-0 invert" />
      </Link>
      <div className="text-sm font-medium">
        &copy; {new Date().getFullYear()} Studio Maheni. Tous droits réservés.
      </div>
      <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
        <a href="#" className="hover:text-brand-bg transition-colors">Mentions Légales</a>
        <a href="#" className="hover:text-brand-bg transition-colors">Confidentialité</a>
      </div>
    </div>
  </footer>
);

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-secondary/30">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/2250717616343" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D430] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};
