import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../../logo.svg';
import { Chatbot } from './Chatbot';

const WHATSAPP_NUMBER = '2250717616343';

const getWhatsAppMessage = (service: string) => {
  const messages: Record<string, string> = {
    '/': `Coucou ! 👋🏾\n\nJe suis intéressé(e) par un cours de découverte de Pole Dance Studio Maheni.\n\nMerci de me donner les disponibilités et la marche à suivre pour réserver ! 😊`,
    '/services': `Coucou ! 👬🏾\n\nJe suis intéressé(e) par vos cours de Pole Dance.\n\nPouvez-vous me donner plus d'informations sur les différentes formules et disponibilités ?\n\nMerci ! 😊`,
    '/pricing': `Coucou ! 👬🏾\n\nJe souhaiterais m'abonner à vos cours de Pole Dance.\n\nQuelle formule vous me recommandez et comment procéder ?\n\nMerci d'avance ! 😊`,
    '/gallery': `Coucou ! 📸\n\nJ'adore vos photos ! Je voulais savoir si vous proposez des séances photo ou shooting.\n\nMerci ! 😊`,
    '/faq': `Coucou ! 👋🏾\n\nJ'ai une question qui n'est pas dans la FAQ :\n\n[Écrivez votre question ici]\n\nMerci ! 😊`,
    '/contact': `Coucou ! 👋🏾\n\nJe vous contacte pour :\n\n[Décrivez votre demande]\n\nMerci ! 😊`,
  };
  const message = messages[service] || messages['/'];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

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
    { name: 'Nos services', href: '/services' },
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
            <motion.div key={link.name} whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
              <Link 
                to={link.href} 
                className={`text-sm font-medium block transition-colors ${location.pathname === link.href ? 'text-brand-secondary' : 'text-brand-primary/80 hover:text-brand-secondary'}`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <div className="flex flex-col items-end">
            <a 
              href={getWhatsAppMessage(location.pathname)}
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
                <motion.div key={link.name} whileTap={{ scale: 0.98 }}>
                  <Link 
                    to={link.href} 
                    className={`text-lg font-medium py-2 border-b border-brand-primary/5 block ${location.pathname === link.href ? 'text-brand-secondary' : 'text-brand-primary'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col items-center pt-4">
                <a 
                  href={getWhatsAppMessage(location.pathname)}
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
