import { motion } from 'motion/react';
import { ChevronRight, MapPin, Users, Circle, Building2, PartyPopper } from 'lucide-react';
import { SectionTitle } from '../components/Shared';

const WHATSAPP_NUMBER = '2250717616343';

const getWhatsAppMessage = (service: string) => {
  const messages: Record<string, string> = {
    'pole-dance': `Coucou ! 👋🏾\n\nJe suis intéressé(e) par un cours de Pole Dance.\n\nPouvez-vous me donner les disponibilitées et tarifs ?`,
    'kompa': `Coucou ! 💃🏾\n\nJe suis intéressé(e) par les cours de Kompa.\n\nQuand sont les prochaines séances ?`,
    'kizomba': `Coucou ! 💃🏾\n\nJe suis intéressé(e) par les cours de Kizomba.\n\nQuand sont les prochaines séances ?`,
    'location': `Coucou ! 📸\n\nJe voudrais louer votre salle pour :\n\n[Décrivez votre événement]\n\nMerci !`,
    'default': `Coucou ! 👋🏾\n\nJe suis intéressé(e) par vos services.\n\nMerci de me donner plus d'informations !`,
  };
  const message = messages[service] || messages['default'];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const Services = () => {
  return (
    <div className="pt-24">
      {/* --- Header --- */}
      <section className="py-12 md:py-16">
        <div className="max-w-[80%] mx-auto px-6 text-center">
          <SectionTitle title="Nos Services" centered />
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section className="py-12 md:py-16">
        <div className="max-w-[80%] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pole Dance */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-brand-primary rounded-[24px] overflow-hidden relative group min-h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1000"
                alt="Pole Dance"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-serif text-white mb-3">Pole Dance</h3>
                <p className="text-white/70 max-w-sm mb-4">
                  Alliez force athlétique et grâce artistique. Un entraînement complet qui sculpte le corps et libère l'esprit.
                </p>
                <a 
                  href={getWhatsAppMessage('pole-dance')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors"
                >
                  En savoir plus <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>

            {/* Kompa */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-brand-secondary rounded-[24px] p-8 flex flex-col justify-end min-h-[300px]"
            >
              <h3 className="text-2xl font-bold text-brand-primary mb-3">Kompa</h3>
              <p className="text-brand-primary/70 mb-4">
                Plongez dans les rythmes envoûtants d'Haïti. Une danse sociale vibrante et pleine d'énergie.
              </p>
              <a 
                href={getWhatsAppMessage('kompa')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:opacity-70 transition-colors"
              >
                En savoir plus <ChevronRight size={18} />
              </a>
            </motion.div>

            {/* Kizomba */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-brand-tan-light rounded-[24px] p-8 flex flex-col justify-end min-h-[300px]"
            >
              <h3 className="text-2xl font-bold text-brand-primary mb-3">Kizomba</h3>
              <p className="text-brand-primary/70 mb-4">
                La fluidité et la connexion. Une danse douce et technique.
              </p>
              <a 
                href={getWhatsAppMessage('kizomba')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:opacity-70 transition-colors"
              >
                En savoir plus <ChevronRight size={18} />
              </a>
            </motion.div>

            {/* Location Salle */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-brand-primary/10 rounded-[24px] p-8 flex flex-col justify-end min-h-[300px] border border-brand-primary/10"
            >
              <h3 className="text-2xl font-bold text-brand-primary mb-3">Location salle</h3>
              <p className="text-brand-primary/70 mb-4">
                Un espace pour vos événements. Vous organisez un anniversaire, enterrement, shooting photo, workshop ? Louez notre salle equipped pour créer un moment inoubliable.
              </p>
              <ul className="text-sm text-brand-primary/60 mb-4 space-y-2">
                <li>• Situé à Abidjan, Riviera Palmeraie</li>
                <li>• Capacité adaptée à vos besoins</li>
                <li>• Horaires flexibles</li>
              </ul>
              <a 
                href={getWhatsAppMessage('location')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:opacity-70 transition-colors"
              >
                Demander un devis <ChevronRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Workshops --- */}
      <section className="py-12 md:py-16 bg-brand-muted/20">
        <div className="max-w-[80%] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">Nos Workshops</h2>
          <p className="text-brand-primary/60 mb-8 max-w-xl mx-auto">
            Des sessions intensives pour approfondir votre pratique.
          </p>
          <div className="bg-brand-tan/30 rounded-[24px] p-8 max-w-md mx-auto">
            <p className="text-brand-primary">
              Prochainement<br/>
              Nous n'avons pas de workshops disponibles pour le moment. Restez connectées !
            </p>
          </div>
        </div>
      </section>

      {/* --- CTA Finale --- */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-4 md:mb-6">Tu veux tester la pole dance ?</h2>
          <p className="text-brand-primary/70 text-lg mb-8 md:mb-10">
            Commence par un cours découverte ✨
          </p>
          <a 
            href={getWhatsAppMessage('pole-dance')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary text-brand-bg px-10 py-4 rounded-full font-semibold hover:opacity-85 hover:-translate-y-px transition-all inline-flex items-center justify-center gap-2"
          >
            Réserver <ChevronRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
};