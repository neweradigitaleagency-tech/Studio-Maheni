import { motion } from 'motion/react';
import { Check, CreditCard, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/Shared';

export const Pricing = () => {
  return (
    <div className="pt-24">
      {/* --- Payment & Cancellation Info - BEFORE PRICES --- */}
      <section className="py-16 md:py-24 bg-brand-muted/20">
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
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle eyebrow="Investissez en vous" title="Nos Tarifs" centered />
          <p className="text-center text-brand-primary/70 mb-12 max-w-2xl mx-auto text-sm md:text-base">
            Les tarifs ci-dessous s'appliquent <strong className="text-brand-primary">uniquement aux cours de Pole Dance</strong>.<br/>
            Les cours de Kompa et Kizomba sont disponibles sur demande.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {/* Cours de découverte */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm border border-brand-primary/5 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-serif text-brand-primary mb-2">Cours de découverte</h3>
                <p className="text-brand-primary/50 text-xs">Pour celles qui n'ont jamais pratiqué</p>
              </div>
              <div className="mb-6">
                <span className="text-2xl md:text-3xl font-serif font-bold text-brand-primary">10 000 <small className="text-xs font-sans font-normal">FCFA</small></span>
                <span className="text-brand-primary/50 text-xs ml-2">(1 cours)</span>
              </div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2 text-xs md:text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Réservé aux débutantes</span>
                </div>
                <div className="flex items-start gap-2 text-xs md:text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Matériel fourni au studio</span>
                </div>
              </div>
              <a href="https://calendly.com/reservations-cours/decouverte-pole-dance" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-2xl border border-brand-primary/10 text-brand-primary font-bold text-xs tracking-widest uppercase text-center hover:bg-brand-muted transition-all block">
                Réserver
              </a>
            </motion.div>

            {/* Séance à l'unité */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm border border-brand-primary/5 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-serif text-brand-primary mb-2">Séance à l'unité</h3>
                <p className="text-brand-primary/50 text-xs">Pour celles qui veulent faire une par une</p>
              </div>
              <div className="mb-6">
                <span className="text-2xl md:text-3xl font-serif font-bold text-brand-primary">15 000 <small className="text-xs font-sans font-normal">FCFA</small></span>
                <span className="text-brand-primary/50 text-xs ml-2">(1 séance)</span>
              </div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2 text-xs md:text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Accès à tous les cours collectifs</span>
                </div>
                <div className="flex items-start gap-2 text-xs md:text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Matériel fourni au studio</span>
                </div>
              </div>
              <a href="https://calendly.com/reservations-cours/decouverte-pole-dance" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-2xl border border-brand-primary/10 text-brand-primary font-bold text-xs tracking-widest uppercase text-center hover:bg-brand-muted transition-all block">
                Réserver
              </a>
            </motion.div>

            {/* Carte 4 séances */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm border border-brand-primary/5 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-serif text-brand-primary mb-2">Carte 4 séances</h3>
                <p className="text-brand-primary/50 text-xs">Valable 1 mois</p>
              </div>
              <div className="mb-6">
                <span className="text-2xl md:text-3xl font-serif font-bold text-brand-primary">50 000 <small className="text-xs font-sans font-normal">FCFA</small></span>
                <span className="text-brand-primary/50 text-xs ml-2">(1 mois)</span>
              </div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2 text-xs md:text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>4 séances</span>
                </div>
                <div className="flex items-start gap-2 text-xs md:text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Valable 1 mois</span>
                </div>
              </div>
              <a href="https://calendly.com/reservations-cours/decouverte-pole-dance" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-2xl border border-brand-primary/10 text-brand-primary font-bold text-xs tracking-widest uppercase text-center hover:bg-brand-muted transition-all block">
                Réserver
              </a>
            </motion.div>

            {/* Carte 8 séances */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm border border-brand-primary/5 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-serif text-brand-primary mb-2">Carte 8 séances</h3>
                <p className="text-brand-primary/50 text-xs">Valable 2 mois</p>
              </div>
              <div className="mb-6">
                <span className="text-2xl md:text-3xl font-serif font-bold text-brand-primary">80 000 <small className="text-xs font-sans font-normal">FCFA</small></span>
                <span className="text-brand-primary/50 text-xs ml-2">(2 mois)</span>
              </div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2 text-xs md:text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>8 séances</span>
                </div>
                <div className="flex items-start gap-2 text-xs md:text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Valable 2 mois</span>
                </div>
              </div>
              <a href="https://calendly.com/reservations-cours/decouverte-pole-dance" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-2xl border border-brand-primary/10 text-brand-primary font-bold text-xs tracking-widest uppercase text-center hover:bg-brand-muted transition-all block">
                Réserver
              </a>
            </motion.div>
          </div>

          {/* --- AUTRES OFFRES --- */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Carte 12 séances */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-brand-primary rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-xl shadow-brand-primary/20 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-brand-secondary text-brand-bg text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">
                Bestseller
              </div>
              <div className="mb-6 mt-2">
                <h3 className="text-lg md:text-xl font-serif text-brand-bg mb-2">Carte 12 séances</h3>
                <p className="text-brand-bg/50 text-xs">Valable 3 mois + 1 cours gratuit</p>
              </div>
              <div className="mb-6">
                <span className="text-2xl md:text-3xl font-serif font-bold text-brand-bg">120 000 <small className="text-xs font-sans font-normal">FCFA</small></span>
              </div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2 text-xs md:text-sm text-brand-bg/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>12 séances + 1 gratuite</span>
                </div>
                <div className="flex items-start gap-2 text-xs md:text-sm text-brand-bg/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Valable 3 mois</span>
                </div>
                <div className="flex items-start gap-2 text-xs md:text-sm text-brand-bg/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Économisez 30 000 CFA</span>
                </div>
              </div>
              <a href="https://calendly.com/reservations-cours/decouverte-pole-dance" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-2xl bg-brand-secondary text-brand-bg font-bold text-xs tracking-widest uppercase text-center hover:bg-brand-accent transition-all block">
                S'abonner
              </a>
            </motion.div>

            {/* Salle + Pole */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm border border-brand-primary/5 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-serif text-brand-primary mb-2">Package salle + pole</h3>
                <p className="text-brand-primary/50 text-xs">Salle de sport + Pole Dance</p>
              </div>
              <div className="mb-6">
                <span className="text-2xl md:text-3xl font-serif font-bold text-brand-primary">80 000 <small className="text-xs font-sans font-normal">FCFA</small></span>
                <span className="text-brand-primary/50 text-xs ml-2">(1 mois)</span>
              </div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2 text-xs md:text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Accès illimité salle de sport</span>
                </div>
                <div className="flex items-start gap-2 text-xs md:text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>4 séances Pole Dance</span>
                </div>
                <div className="flex items-start gap-2 text-xs md:text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>Sans coach</span>
                </div>
              </div>
              <a href="https://calendly.com/reservations-cours/decouverte-pole-dance" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-2xl border border-brand-primary/10 text-brand-primary font-bold text-xs tracking-widest uppercase text-center hover:bg-brand-muted transition-all block">
                Réserver
              </a>
            </motion.div>
          </div>

          {/* --- COURS PRIVES --- */}
          <div className="mt-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-sm border border-brand-primary/5 max-w-2xl mx-auto text-center"
            >
              <h3 className="text-xl md:text-2xl font-serif text-brand-primary mb-2">Cours Privés</h3>
              <p className="text-brand-primary/50 text-sm mb-6">Coaching personnalisé 1 teacher / 1 élève</p>
              <div className="mb-6">
                <span className="text-2xl font-serif font-bold text-brand-primary italic">Sur demande</span>
              </div>
              <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-brand-primary/70">
                  <Check size={16} className="text-brand-secondary shrink-0" />
                  1 teacher / 1 élève
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
              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-primary text-brand-bg px-8 py-3 rounded-full font-medium hover:bg-brand-secondary transition-all">
                Demander un devis <CreditCard size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};