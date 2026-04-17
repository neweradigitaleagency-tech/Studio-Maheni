import { motion } from 'motion/react';
import { Check, ChevronRight } from 'lucide-react';
import { SectionTitle } from '../components/Shared';

const WHATSAPP_NUMBER = '2250717616343';

const getWhatsAppMessage = (service: string, price: string) => {
  const message = encodeURIComponent(
    `Coucou ! 👋🏾\n\nJe suis intéressé(e) par vos services et je voudrais réserver :\n\n📌 Service : ${service}\n💰 Prix : ${price}\n\nMerci de me donner plus d'informations sur les disponibilités et la marche à suivre pour réserver ! 😊`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const Pricing = () => {
  return (
    <div className="pt-24">
      {/* --- Pricing Section - New 3 Cards Layout --- */}
      <section className="py-12 md:py-16">
        <div className="max-w-[60%] mx-auto px-6">
          <SectionTitle title="Nos Tarifs" centered />
          <p className="text-center text-brand-primary/70 mb-12 max-w-2xl mx-auto text-sm md:text-base">
            Les cours de Kōmpa et Kizomba sont disponibles sur demande.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {/* Card 1: Starter */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white border border-brand-primary/10 rounded-[20px] p-6 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-brand-primary mb-2">Starter</h3>
                <p className="text-brand-primary/50 text-sm">Pour découvrir et débutants</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-brand-primary/70">Découverte</span>
                  <span className="text-lg font-bold font-serif text-brand-primary">10 000 FCA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-brand-primary/70">Unité</span>
                  <span className="text-lg font-bold font-serif text-brand-primary">15 000 FCA</span>
                </div>
              </div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2 text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Accès à tous les cours collectifs</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Matériel fourni au studio</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Valable pour 1 séance</span>
                </div>
              </div>
              <div className="text-center">
                <a href="https://calendly.com/reservations-cours/decouverte-pole-dance" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-full border border-brand-primary text-brand-primary font-semibold text-sm uppercase text-center hover:bg-brand-primary hover:text-white transition-all block">
                  Réserver ( Découverte )
                </a>
                <span className="text-xs text-brand-primary/40 mt-2 block">Pour plus d'infos, WhatsApp</span>
              </div>
            </motion.div>

            {/* Card 2: Performance - Featured (Dark, Taller) */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-brand-primary rounded-[20px] p-6 flex flex-col relative md:-mt-4 md:mb-4"
            >
              <div className="absolute top-4 right-4 bg-brand-tan text-brand-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Plus Populaire
              </div>
              <div className="mb-6 mt-2">
                <h3 className="text-xl font-serif font-bold text-white mb-2">Performance</h3>
                <p className="text-white/60 text-sm">Progression régulière</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/70">4 Séances</span>
                  <span className="text-lg font-bold font-serif text-white">50 000 FCA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/70">8 Séances</span>
                  <span className="text-lg font-bold font-serif text-white">80 000 FCA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/70">12 Séances</span>
                  <span className="text-lg font-bold font-serif text-white">120 000 FCA</span>
                </div>
              </div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2 text-sm text-white/70">
                  <Check size={16} className="text-brand-tan shrink-0 mt-0.5" />
                  <span>Tarif préférentiel par séance</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-white/70">
                  <Check size={16} className="text-brand-tan shrink-0 mt-0.5" />
                  <span>Accès prioritaire aux réservations</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-white/70">
                  <Check size={16} className="text-brand-tan shrink-0 mt-0.5" />
                  <span>Validité 2 à 3 mois</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-white/70">
                  <Check size={16} className="text-brand-tan shrink-0 mt-0.5" />
                  <span>+2 Self Practice offerts (Carte 12)</span>
                </div>
              </div>
              <div className="text-center">
                <a href={getWhatsAppMessage('Performance Pole Dance', '120 000')} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-full bg-brand-tan text-brand-primary font-semibold text-sm uppercase text-center hover:opacity-85 transition-all block">
                  S'abonner
                </a>
                <span className="text-xs text-white/50 mt-2 block">Pour plus d'infos, WhatsApp</span>
              </div>
            </motion.div>

            {/* Card 3: Elite */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white border border-brand-primary/10 rounded-[20px] p-6 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-brand-primary mb-2">Elite</h3>
                <p className="text-brand-primary/50 text-sm">Expérience sur-mesure</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-brand-primary/70">Sport + Pole</span>
                  <span className="text-lg font-bold font-serif text-brand-primary">80 000 FCA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-brand-primary/70">Cours Privé</span>
                  <span className="text-lg font-serif italic text-brand-primary">Sur demande</span>
                </div>
              </div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2 text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Accès illimité salle de sport</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>4 séances de Pole incluses</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Coaching personnalisé (Privé)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Horaires flexibles</span>
                </div>
              </div>
              <div className="text-center">
                <a href={getWhatsAppMessage('Elite Package', 'Sur demande')} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-full border border-brand-primary text-brand-primary font-semibold text-sm uppercase text-center hover:bg-brand-primary hover:text-white transition-all block">
                  Nous Contacter
                </a>
                <span className="text-xs text-brand-primary/40 mt-2 block">Pour plus d'infos, WhatsApp</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
