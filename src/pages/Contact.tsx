import { Phone, Mail, MapPin, Instagram, Music2 } from 'lucide-react';
import { SectionTitle } from '../components/Shared';
import Logo from '../../logo.svg';

export const Contact = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* --- Contact Section --- */}
      <section className="py-16 md:py-24 bg-brand-muted/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionTitle eyebrow="Contact" title="Parlons de votre projet" centered />
          <p className="text-brand-primary/60 text-base md:text-lg mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">
            Une question sur nos cours, nos tarifs ou nos événements ? <br className="hidden md:block" />
            N'hésitez pas à nous contacter par le moyen qui vous convient le mieux.
          </p>

          <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 lg:gap-24">
            
            {/* Left Info */}
            <div className="flex flex-col gap-8 items-center md:items-end text-center md:text-right order-2 md:order-1">
              <div className="group">
                <div className="text-[10px] md:text-xs font-bold text-brand-primary/40 uppercase tracking-widest mb-2">Téléphone / WhatsApp</div>
                <a href="tel:+2250717616343" className="text-lg md:text-xl font-medium text-brand-primary hover:text-brand-secondary transition-colors flex items-center gap-3 justify-center md:justify-end">
                  <Phone size={20} className="text-brand-secondary" /> +225 07 17 61 63 43
                </a>
              </div>
              <div className="group">
                <div className="text-[10px] md:text-xs font-bold text-brand-primary/40 uppercase tracking-widest mb-2">Email</div>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=studio.maheni@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-medium text-brand-primary hover:text-brand-secondary transition-colors flex items-center gap-3 justify-center md:justify-end"
                >
                  <Mail size={20} className="text-brand-secondary" /> studio.maheni@gmail.com
                </a>
              </div>
            </div>

            {/* Center Logo */}
            <div className="relative shrink-0 order-1 md:order-2 mb-4 md:mb-0">
              <div className="w-36 h-36 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-brand-primary/20 relative z-10 p-4">
                <img src={Logo} alt="Studio Maheni" className="w-full h-full object-contain" />
              </div>
              <div className="absolute -inset-4 border border-brand-primary/10 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-8 border border-brand-primary/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            {/* Right Info */}
            <div className="flex flex-col gap-8 items-center md:items-start text-center md:text-left order-3">
              <div className="group">
                <div className="text-[10px] md:text-xs font-bold text-brand-primary/40 uppercase tracking-widest mb-2">Localisation</div>
                <a 
                  href="https://maps.app.goo.gl/w72QuJYNb5jmfDTZ8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-medium text-brand-primary hover:text-brand-secondary transition-colors flex items-center gap-3 justify-center md:justify-start"
                >
                  <MapPin size={20} className="text-brand-secondary" /> New Gym, Abidjan
                </a>
              </div>
              <div className="group">
                <div className="text-[10px] md:text-xs font-bold text-brand-primary/40 uppercase tracking-widest mb-2">Réseaux Sociaux</div>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a 
                    href="https://www.instagram.com/studio.maheni/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-brand-primary hover:bg-brand-secondary hover:text-white transition-all shadow-sm"
                  >
                    <Instagram size={18} className="md:w-5 md:h-5" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@studio.maheni?is_from_webapp=1&sender_device=pc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-brand-primary hover:bg-brand-secondary hover:text-white transition-all shadow-sm"
                  >
                    <Music2 size={18} className="md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
