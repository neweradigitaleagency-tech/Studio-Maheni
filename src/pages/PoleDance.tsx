import { motion } from 'motion/react';
import { ChevronRight, MapPin, Users, Circle, Building2, PartyPopper, Heart, Sparkles } from 'lucide-react';
import { SectionTitle } from '../components/Shared';
import { Link } from 'react-router-dom';

export const PoleDance = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24">
      {/* --- Cours de Pole Dance --- */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle eyebrow="Cours" title="Pole Dance" centered />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-brand-primary rounded-[24px] md:rounded-[32px] overflow-hidden relative group min-h-[400px] md:min-h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1000" 
                alt="Pole Dance" 
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <h3 className="text-3xl md:text-4xl font-medium text-brand-bg mb-3 md:mb-4">Cours de Pole Dance</h3>
                <p className="text-brand-bg/70 max-w-sm mb-4 md:mb-6 text-sm md:text-base">
                  Des cours pour niveau débutant/inter à toutes pour développer force, confiance et féminité.
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col gap-6 md:gap-8">
              <div className="bg-brand-muted/20 rounded-[24px] md:rounded-[32px] p-6 md:p-8">
                <div className="flex items-center gap-2 text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3">
                  <MapPin size={14} /> Location
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-brand-primary mb-3">Cours collectifs & privés</h3>
                <p className="text-brand-primary/60 text-sm md:text-base">
                  Découvrez nos formules adaptées à toutes. Débutez ou progressez selon votre niveau.
                </p>
              </div>

              <div className="bg-brand-secondary/10 rounded-[24px] md:rounded-[32px] p-6 md:p-8">
                <div className="flex items-center gap-2 text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3">
                  <Users size={14} /> Pratiquez
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-brand-primary mb-3">Entrainez-vous seule</h3>
                <p className="text-brand-primary/60 text-sm md:text-base">
                  Selon les disponibilités de la salle de pole dance ou louez notre podium pour des shootings, clips, events...
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-brand-primary text-brand-bg px-8 py-4 rounded-full font-medium hover:bg-brand-secondary transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              Réserver un cours <ChevronRight size={18} />
            </button>
            <Link 
              to="/faq" 
              className="bg-white border border-brand-primary/20 text-brand-primary px-8 py-4 rounded-full font-medium hover:bg-brand-primary/5 transition-all inline-flex items-center justify-center gap-2"
            >
              En savoir plus sur la pole dance
            </Link>
          </div>
        </div>
      </section>

      {/* --- Workshops --- */}
      <section className="py-12 md:py-16 bg-brand-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-xl">
              <SectionTitle eyebrow="Événements" title="Nos Workshops" />
<p className="text-brand-primary/60 text-base md:text-lg">
                Kompa, Kizomba, Heels et plus encore. Proposés de temps en temps. Pour connaître les dates et horaires, suivez-nos réseaux sociaux ou rejoignez notre <a href="https://chat.whatsapp.com/CUt3PyGxD4u3Fl293fJsIy" target="_blank" rel="noopener noreferrer" className="text-brand-secondary font-medium hover:underline">communauté WhatsApp</a> pour rester informé de nos actuelles.
              </p>
            </div>
            <div className="bg-white px-6 py-4 rounded-2xl border border-brand-primary/5 w-full md:w-auto">
              <span className="text-brand-primary font-bold text-sm uppercase tracking-widest">Suivez-nous</span>
              <p className="text-brand-primary/40 text-xs mt-1">Sur nos réseaux sociaux ou WhatsApp pour rester informée des dates et horaires.</p>
            </div>
          </div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-brand-primary rounded-[24px] md:rounded-[32px] overflow-hidden relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=1000" 
              alt="Workshop" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent" />
            <div className="relative z-10 p-6 md:p-10">
              <h3 className="text-2xl md:text-3xl font-medium text-brand-bg mb-3">Des surprises toute l'année</h3>
              <p className="text-brand-bg/70 max-w-lg mb-6 text-sm md:text-base">
                Nous vous réservons plein de surprises tout au long de l'année !
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Événements Privés --- */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle eyebrow="Événements" title="Événements Privés" centered />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm border border-brand-primary/5"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4">
                <Circle size={24} className="text-brand-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-brand-primary mb-2">Mariage</h3>
              <p className="text-brand-primary/60 text-sm">
                Chorégraphie personnalis��e pour votre ouverture de bal.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm border border-brand-primary/5"
            >
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Building2 size={24} className="text-brand-secondary" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-brand-primary mb-2">Entreprises</h3>
              <p className="text-brand-primary/60 text-sm">
                Activités originales pour vos équipes et team building.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm border border-brand-primary/5"
            >
              <div className="w-12 h-12 bg-brand-muted/30 rounded-full flex items-center justify-center mb-4">
                <PartyPopper size={24} className="text-brand-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-brand-primary mb-2">Anniversaire / EVJF</h3>
              <p className="text-brand-primary/60 text-sm">
                Moment fun, entre amies, dans une ambiance inoubliable.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-brand-primary rounded-[24px] md:rounded-[32px] p-6 md:p-8"
            >
              <div className="w-12 h-12 bg-brand-bg/20 rounded-full flex items-center justify-center mb-4">
                <Sparkles size={24} className="text-brand-bg" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-brand-bg mb-2">Cours Découverte</h3>
              <p className="text-brand-bg/70 text-sm">
                Testez la pole dance avec un cours découverte !
              </p>
            </motion.div>
          </div>

          <div className="mt-10 md:mt-14 text-center">
            <button 
              onClick={scrollToContact}
              className="bg-brand-primary text-brand-bg px-8 py-4 rounded-full font-medium hover:bg-brand-secondary transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              Demander un devis <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* --- CTA Finale --- */}
      <section className="py-12 md:py-16 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-brand-bg mb-4 md:mb-6">Tu veux tester la pole dance ?</h2>
          <p className="text-brand-bg/70 text-lg mb-8 md:mb-10">
            Commence par un cours découverte ✨
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-brand-bg text-brand-primary px-10 py-4 rounded-full font-medium hover:bg-brand-secondary hover:text-brand-bg transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            Réserver <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};