import { motion } from 'motion/react';
import { Check, CreditCard, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/Shared';

export const Pricing = () => {
  return (
    <div className="pt-24">
      {/* --- Pricing Section --- */}
      <section className="py-16 md:py-24 bg-brand-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle eyebrow="Investissez en vous" title="Nos Tarifs" centered />
          <p className="text-center text-brand-primary/70 mb-12 max-w-2xl mx-auto text-sm md:text-base">
            Les tarifs ci-dessous s'appliquent <strong className="text-brand-primary">uniquement aux cours de Pole Dance</strong>.<br/>
            Les cours de Kompa et Kizomba sont disponibles sur demande.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            {/* Starter - Séances Uniques */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[24px] md:rounded-[40px] p-6 md:p-10 shadow-sm border border-brand-primary/5 flex flex-col"
            >
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl font-serif text-brand-primary mb-2">Starter</h3>
                <p className="text-brand-primary/50 text-xs md:text-sm">Pour découvrir et débuter</p>
              </div>
              <div className="mb-6 md:mb-8 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-brand-primary/70 text-sm">Découverte</span>
                  <span className="text-xl md:text-2xl font-serif font-bold text-brand-primary">10 000 <small className="text-xs font-sans font-normal">FCFA</small></span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-brand-primary/70 text-sm">Unité</span>
                  <span className="text-xl md:text-2xl font-serif font-bold text-brand-primary">15 000 <small className="text-xs font-sans font-normal">FCFA</small></span>
                </div>
              </div>
              <div className="space-y-4 mb-8 md:mb-10 flex-grow">
                <div className="flex items-start gap-3 text-xs md:text-sm text-brand-primary/70">
                  <Check size={18} className="text-brand-secondary shrink-0" />
                  <span>Accès à tous les cours collectifs</span>
                </div>
                <div className="flex items-start gap-3 text-xs md:text-sm text-brand-primary/70">
                  <Check size={18} className="text-brand-secondary shrink-0" />
                  <span>Matériel fourni au studio</span>
                </div>
                <div className="flex items-start gap-3 text-xs md:text-sm text-brand-primary/70">
                  <Check size={18} className="text-brand-secondary shrink-0" />
                  <span>Valable pour 1 séance</span>
                </div>
              </div>
              <a href="https://calendly.com/reservations-cours/decouverte-pole-dance" target="_blank" rel="noopener noreferrer" className="w-full py-3 md:py-4 rounded-2xl border border-brand-primary/10 text-brand-primary font-bold text-xs md:text-sm tracking-widest uppercase text-center hover:bg-brand-muted transition-all block">
                Réserver (Découverte)
              </a>
              <p className="text-center text-[10px] md:text-xs text-brand-primary/50 mt-3">Pour plus d'infos, WhatsApp</p>
            </motion.div>

            {/* Performance - Cartes (Most Popular) */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-brand-primary rounded-[24px] md:rounded-[40px] p-6 md:p-10 shadow-xl shadow-brand-primary/20 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-brand-secondary text-brand-bg text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2 py-1 md:px-3 md:py-1 rounded-full">
                Plus Populaire
              </div>
              <div className="mb-6 md:mb-8 mt-4 md:mt-0">
                <h3 className="text-xl font-serif text-brand-bg mb-2">Performance</h3>
                <p className="text-brand-bg/50 text-xs md:text-sm">Progression régulière</p>
              </div>
              <div className="mb-6 md:mb-8 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-brand-bg/70 text-sm">4 Séances</span>
                  <span className="text-xl md:text-2xl font-serif font-bold text-brand-bg">50 000 <small className="text-xs font-sans font-normal">FCFA</small></span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-brand-bg/70 text-sm">8 Séances</span>
                  <span className="text-xl md:text-2xl font-serif font-bold text-brand-bg">80 000 <small className="text-xs font-sans font-normal">FCFA</small></span>
                </div>
                <div className="flex justify-between items-end border-t border-brand-bg/10 pt-4">
                  <span className="text-brand-bg font-medium text-sm">12 Séances</span>
                  <span className="text-2xl md:text-3xl font-serif font-bold text-brand-bg">120 000 <small className="text-xs font-sans font-normal">FCFA</small></span>
                </div>
              </div>
              <div className="space-y-4 mb-8 md:mb-10 flex-grow">
                <div className="flex items-start gap-3 text-xs md:text-sm text-brand-bg/70">
                  <Check size={18} className="text-brand-secondary shrink-0" />
                  <span>Tarif préférentiel par séance</span>
                </div>
                <div className="flex items-start gap-3 text-xs md:text-sm text-brand-bg/70">
                  <Check size={18} className="text-brand-secondary shrink-0" />
                  <span>Accès prioritaire aux réservations</span>
                </div>
                <div className="flex items-start gap-3 text-xs md:text-sm text-brand-bg/70">
                  <Check size={18} className="text-brand-secondary shrink-0" />
                  <span>Validité 2 à 3 mois</span>
                </div>
                <div className="flex items-start gap-3 text-xs md:text-sm text-brand-bg/70">
                  <Check size={18} className="text-brand-secondary shrink-0" />
                  <span>+2 Self Practice offerts (Carte 12)</span>
                </div>
              </div>
              <a href="https://calendly.com/reservations-cours/decouverte-pole-dance" target="_blank" rel="noopener noreferrer" className="w-full py-3 md:py-4 rounded-2xl bg-brand-secondary text-brand-bg font-bold text-xs md:text-sm tracking-widest uppercase text-center hover:bg-brand-accent transition-all block">
                S'abonner (Découverte)
              </a>
              <p className="text-center text-[10px] md:text-xs text-brand-bg/60 mt-3">Pour plus d'infos, WhatsApp</p>
            </motion.div>

            {/* Elite - Packages & Privés */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[24px] md:rounded-[40px] p-6 md:p-10 shadow-sm border border-brand-primary/5 flex flex-col md:col-span-2 lg:col-span-1"
            >
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl font-serif text-brand-primary mb-2">Elite</h3>
                <p className="text-brand-primary/50 text-xs md:text-sm">Expérience sur-mesure</p>
              </div>
              <div className="mb-6 md:mb-8 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-brand-primary/70 text-sm">Sport + Pole</span>
                  <span className="text-xl md:text-2xl font-serif font-bold text-brand-primary">80 000 <small className="text-xs font-sans font-normal">FCFA</small></span>
                </div>
                <div className="flex justify-between items-end border-t border-brand-primary/5 pt-4">
                  <span className="text-brand-primary/70 text-sm">Cours Privé</span>
                  <span className="text-lg md:text-xl font-serif font-bold text-brand-primary italic">Sur demande</span>
                </div>
              </div>
              <div className="space-y-4 mb-8 md:mb-10 flex-grow">
                <div className="flex items-start gap-3 text-xs md:text-sm text-brand-primary/70">
                  <Check size={18} className="text-brand-secondary shrink-0" />
                  <span>Accès illimité salle de sport</span>
                </div>
                <div className="flex items-start gap-3 text-xs md:text-sm text-brand-primary/70">
                  <Check size={18} className="text-brand-secondary shrink-0" />
                  <span>4 séances de Pole incluses</span>
                </div>
                <div className="flex items-start gap-3 text-xs md:text-sm text-brand-primary/70">
                  <Check size={18} className="text-brand-secondary shrink-0" />
                  <span>Coaching personnalisé (Privé)</span>
                </div>
                <div className="flex items-start gap-3 text-xs md:text-sm text-brand-primary/70">
                  <Check size={18} className="text-brand-secondary shrink-0" />
                  <span>Horaires flexibles</span>
                </div>
              </div>
              <Link to="/contact" className="w-full py-3 md:py-4 rounded-2xl border border-brand-primary/10 text-brand-primary font-bold text-xs md:text-sm tracking-widest uppercase text-center hover:bg-brand-muted transition-all block">
                Nous contacter
              </Link>
            </motion.div>
          </div>

          {/* --- Payment & Cancellation Info --- */}
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
    </div>
  );
};
