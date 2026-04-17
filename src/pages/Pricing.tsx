import { motion } from 'motion/react';
import { Check, CreditCard, Clock } from 'lucide-react';
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
      {/* --- Payment & Cancellation Info - BEFORE PRICES --- */}
      <section className="py-12 md:py-16 bg-brand-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-sm rounded-[32px] p-8 border border-brand-primary/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-muted rounded-full flex items-center justify-center text-brand-secondary">
                  <CreditCard size={24} />
                </div>
                <h4 className="text-xl font-serif text-brand-primary">Paiements & réservations</h4>
              </div>
              <ul className="space-y-4 text-sm text-brand-primary/70 leading-relaxed">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                  <span>La réservation se fait directement en ligne sur le site, via la page Réservation.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                  <span>Un e-mail de confirmation vous sera envoyé avec tous les détails du cours (date, lieu, tenue conseillée, etc.).</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                  <span className="font-medium text-brand-primary">Les places sont uniquement confirmées après envoi de la preuve de paiement (capture d'écran du dépôt Orange Money ou Wave) au +225 07 17 61 63 43.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                  <span>Si vous ne pouvez pas effectuer le paiement, envoyez un message au même numéro sur WhatsApp.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/50 backdrop-blur-sm rounded-[32px] p-8 border border-brand-primary/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-muted rounded-full flex items-center justify-center text-brand-secondary">
                  <Clock size={24} />
                </div>
                <h4 className="text-xl font-serif text-brand-primary">Abonnements & annulations</h4>
              </div>
              <ul className="space-y-4 text-sm text-brand-primary/70 leading-relaxed">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                  <span>Une fois votre abonnement activé, réservez vos séances à l'avance sur le site. Les effectifs sont limités.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                  <span>Si vous ne pouvez pas assister à une séance, pensez à l'annuler pour libérer la place.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                  <span><strong className="text-brand-primary">Abonnés :</strong> annulation au minimum 5 heures avant le début du cours.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                  <span><strong className="text-brand-primary">Nouvelles participantes :</strong> annulation au moins 24 heures à l'avance.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                  <span>Report possible une seule fois en cas d'urgence (via WhatsApp ou appel). Passé ces délais, la séance sera considérée comme due.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Pricing Section - 4 OFFRES EN AVANT --- */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle eyebrow="Investissez en vous" title="Nos Tarifs" centered />
          <p className="text-center text-brand-primary/70 mb-12 max-w-2xl mx-auto text-sm md:text-base">
            Les tarifs ci-dessous s'appliquent <strong className="text-brand-primary">uniquement aux cours de Pole Dance</strong>.<br/>
            Les cours de Kompa et Kizomba sont disponibles sur demande.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 overflow-x-auto">
            {/* Cours de découverte - with border */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-brand-bg border border-brand-primary rounded-[20px] p-6 flex flex-col min-w-[260px]"
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold text-brand-primary mb-2">Cours découverte</h3>
                <p className="text-brand-primary/50 text-xs">First-time offer, 1 session</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-serif font-bold text-brand-primary">10 000 <small className="text-xs font-sans font-normal">FCFA</small></span>
              </div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2 text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Réservé aux débutantes</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Matériel fourni</span>
                </div>
              </div>
              <a href="https://calendly.com/reservations-cours/decouverte-pole-dance" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-full border border-brand-primary text-brand-primary font-semibold text-sm uppercase text-center hover:bg-brand-primary hover:text-white transition-all block">
                Réserver
              </a>
            </motion.div>

            {/* Séance à l'unité - tan light */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-brand-tan-light rounded-[20px] p-6 flex flex-col min-w-[260px]"
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold text-brand-primary mb-2">Séance à l'unité</h3>
                <p className="text-brand-primary/50 text-xs">Single session</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-serif font-bold text-brand-primary">15 000 <small className="text-xs font-sans font-normal">FCFA</small></span>
              </div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2 text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Accès à tous les cours</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Matériel fourni</span>
                </div>
              </div>
              <a href={getWhatsAppMessage('Séance à l\'unité Pole Dance', '15 000')} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-full border border-brand-primary text-brand-primary font-semibold text-sm uppercase text-center hover:bg-brand-primary hover:text-white transition-all block">
                Réserver
              </a>
            </motion.div>

            {/* Abonnements - dark card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-brand-primary rounded-[20px] p-6 flex flex-col relative min-w-[260px]"
            >
              <div className="absolute top-4 right-4 bg-brand-tan text-brand-primary text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                CARTES
              </div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Bestsellers
              </div>
              <div className="mb-6 mt-2">
                <h3 className="text-lg font-bold text-white mb-2">Abonnements</h3>
                <p className="text-white/50 text-xs">Progression régulière</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/70">4 séances</span>
                  <span className="text-xl font-bold text-white">50 000 FCA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/70">8 séances</span>
                  <span className="text-xl font-bold text-white">80 000 FCA</span>
                </div>
                <div className="flex justify-between items-center bg-brand-tan/20 -mx-2 px-2 py-2 rounded-lg">
                  <span className="text-sm text-white font-semibold">12 séances +1 gratuit</span>
                  <span className="text-xl font-bold text-white">120 000 FCA</span>
                </div>
              </div>
              <a href={getWhatsAppMessage('Abonnement Pole Dance', '120 000')} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-full bg-brand-tan text-brand-primary font-semibold text-sm uppercase text-center hover:opacity-85 transition-all block mt-auto">
                S'abonner
              </a>
            </motion.div>

            {/* Package fitness - muted brown-gray */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#8C7B6E] rounded-[20px] p-6 flex flex-col text-white min-w-[260px]"
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-2">Package fitness</h3>
                <p className="text-white/50 text-xs">Salle de sport</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-serif font-bold text-white">80 000 <small className="text-xs font-sans font-normal">FCFA</small></span>
                <span className="text-white/50 text-xs ml-2">(1 mois)</span>
              </div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2 text-sm text-white/70">
                  <Check size={16} className="text-brand-tan shrink-0 mt-0.5" />
                  <span>Accès illimité salle</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-white/70">
                  <Check size={16} className="text-brand-tan shrink-0 mt-0.5" />
                  <span>4 séances Pole Dance</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-white/70">
                  <Check size={16} className="text-brand-tan shrink-0 mt-0.5" />
                  <span>Sans coach</span>
                </div>
              </div>
              <a href={getWhatsAppMessage('Package fitness', '80 000')} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-full border border-white text-white font-semibold text-sm uppercase text-center hover:bg-white hover:text-brand-primary transition-all block">
                Réserver
              </a>
            </motion.div>
          </div>

{/* --- COURS PRIVES --- */}
          <div className="mt-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[16px] p-8 md:p-10 shadow-sm border border-brand-primary/5 max-w-2xl mx-auto"
            >
              <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-2 text-center">Cours Privés</h3>
              <p className="text-brand-primary/50 text-sm mb-6 text-center">Coaching personnalisé 1 teacher / 1 élève</p>
              <div className="mb-6 text-center">
                <span className="text-2xl font-bold text-brand-primary italic">Sur demande</span>
              </div>
              <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0" />
                  1 teacher / 1 ��lève
                </li>
                <li className="flex items-center gap-2 text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0" />
                  Horaire adapté à votre emploi du temps
                </li>
                <li className="flex items-center gap-2 text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0" />
                  Contenu personnalisé
                </li>
              </ul>
              <div className="flex justify-end">
                <a href={getWhatsAppMessage('Cours Privés Pole Dance', 'Sur demande')} target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-85 hover:-translate-y-px transition-all inline-flex items-center gap-2">
                  Demander un devis <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
