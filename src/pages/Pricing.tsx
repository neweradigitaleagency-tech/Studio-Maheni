import React from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, CreditCard, Clock, Sparkles, Plus, ChevronRight } from 'lucide-react';
import { SectionTitle } from '../components/Shared';

const WHATSAPP_NUMBER = '2250717616343';

const getWhatsAppMessage = (service: string, price: string) => {
  const message = encodeURIComponent(
    `Coucou ! 🌸\n\nJe suis intéressé(e) par ${service} au prix de ${price}.\n\nMerci de me donner les disponibilités et la marche à suivre pour réserver ! 💃`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

const InfoCard = ({ icon, title, items, isOpen, onToggle }: { icon: React.ReactNode, title: string, items: Array<string | { text: string, highlight?: boolean }>, isOpen: boolean, onToggle: () => void }) => {
  return (
    <div className="bg-white rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden self-start">
      <button
        className="w-full flex justify-between items-start p-8 text-left"
        onClick={onToggle}
      >
        <div className="flex items-start gap-4 flex-1">
          <div className="w-14 h-14 bg-brand-tan-light rounded-2xl flex items-center justify-center shrink-0">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-brand-primary">{title}</h3>
        </div>
        <div className="shrink-0 ml-4">
          <Plus size={20} className={`text-brand-primary transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
        </div>
      </button>
      <div className={`transition-all duration-300 ease-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="space-y-4 px-8 pb-8">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-secondary rounded-full mt-2.5 shrink-0"></span>
              <span className="leading-relaxed">
                {typeof item === 'string' ? (
                  <span className="text-brand-primary/70">{item}</span>
                ) : (
                  <span className={item.highlight ? 'text-brand-primary font-semibold' : 'text-brand-primary/70'}>{item.text}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'cours de découverte',
    price: '10 000',
    currency: 'CFA',
    badge: null,
    bgColor: 'bg-white',
    borderColor: 'border-brand-primary/10',
    textColor: 'text-brand-primary',
    secondaryTextColor: 'text-brand-primary/60',
    accentColor: 'text-brand-primary',
    buttonBg: 'bg-white',
    buttonBorder: 'border-brand-primary',
    buttonText: 'text-brand-primary',
    buttonHoverBg: 'hover:bg-brand-primary',
    buttonHoverText: 'hover:text-white',
    features: [
       { label: '1 Cours découverte', included: true },
    ],
    cta: 'Réserver',
  },
  {
    id: 'unit',
    name: 'Unit',
    tagline: 'Séance unique',
    price: '15 000',
    currency: 'FCA',
    badge: null,
    bgColor: 'bg-brand-tan-light',
    borderColor: 'border-transparent',
    textColor: 'text-brand-primary',
    secondaryTextColor: 'text-brand-primary/70',
    accentColor: 'text-brand-primary',
    buttonBg: 'bg-brand-primary',
    buttonBorder: 'border-transparent',
    buttonText: 'text-white',
    buttonHoverBg: 'hover:opacity-85',
    buttonHoverText: '',
    features: [
       { label: 'Accès à tous les cours', included: true },
       { label: 'Matériel fourni', included: true },
    ],
    cta: 'Réserver',
  },
  {
    id: 'performance',
    name: 'Performance',
    tagline: 'abonnement',
    price: '50 000',
    currency: 'FCA',
    badge: 'Le + populaire',
    bgColor: 'bg-brand-primary',
    borderColor: 'border-transparent',
    textColor: 'text-white',
    secondaryTextColor: 'text-brand-bg/60',
    accentColor: 'text-brand-accent',
    buttonBg: 'bg-brand-secondary',
    buttonBorder: 'border-transparent',
    buttonText: 'text-brand-primary',
    buttonHoverBg: 'hover:opacity-85',
    buttonHoverText: '',
features: [],
    options: [
       { sessions: '4 Séances', duration: '1 mois', price: '50 000 FCA' },
       { sessions: '8 Séances', duration: '2 mois', price: '80 000 FCA' },
       { sessions: '12 Séances', duration: '3 mois', price: '120 000 FCA', featured: true },
    ],
    cta: "S'abonner",
  },
  {
    id: 'elite',
    name: 'Elite',
    tagline: 'Sport + Pole',
    price: '80 000',
    currency: 'FCA/mois',
    badge: null,
    bgColor: 'bg-brand-secondary',
    borderColor: 'border-transparent',
    textColor: 'text-brand-primary',
    secondaryTextColor: 'text-brand-primary/70',
    accentColor: 'text-brand-primary',
    buttonBg: 'bg-transparent',
    buttonBorder: 'border-brand-primary',
    buttonText: 'text-brand-primary',
    buttonHoverBg: 'hover:bg-brand-primary',
    buttonHoverText: 'hover:text-white',
    features: [
       { label: 'Accès illimité salle', included: true },
       { label: '4 séances Pole incluses', included: true },
       { label: 'Sans coach', included: true },
    ],
    cta: 'Réserver',
  },
];

export const Pricing = () => {
  const [openInfoCard, setOpenInfoCard] = useState<number | null>(null);
  return (
    <div className="pt-24 bg-brand-bg">
      {/* --- Infos Pratiques Section --- */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-[80%] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="Infos pratiques" centered />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-start">
            {[0, 1].map((cardIndex) => (
              <motion.div
                key={cardIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: cardIndex * 0.2, duration: 0.5 }}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              >
                <InfoCard
                  icon={cardIndex === 0
                    ? <motion.div whileHover={{ scale: 1.1, rotate: 5 }}><CreditCard size={24} className="text-brand-primary" /></motion.div>
                    : <motion.div whileHover={{ scale: 1.1 }}><Clock size={24} className="text-brand-primary" /></motion.div>
                  }
                  title={cardIndex === 0 ? "Paiements & réservations" : "Abonnements & annulations"}
                  items={cardIndex === 0
                     ? [
                          'La réservation se fait directement en ligne sur le site, via la page Réservation.',
                          'Un e-mail de confirmation vous sera envoyé avec tous les détails du cours (date, lieu, tenue conseillée, etc.).',
                          'Les places sont uniquement confirmées après envoi de la preuve de paiement (capture d\'écran du dépôt Orange Money ou Wave) au +225 07 17 61 63 43.',
                          'Si vous ne pouvez pas effectuer le paiement, envoyez un message au même numéro sur WhatsApp.',
                        ]
                      : [
                          'Une fois votre abonnement activé, réservez vos séances à l\'avance sur le site. Les effectifs sont limités.',
                          'Si vous ne pouvez pas assister à une séance, pensez à l\'annuler pour libérer la place.',
                          { text: 'Abonnés : annulation au minimum 5 heures avant le début du cours.', highlight: true },
                          { text: 'Nouvelles participantes : annulation au moins 24 heures à l\'avance.', highlight: true },
                          'Report possible une seule fois en cas d\'urgence (via WhatsApp ou appel). Passé ces délais, la séance sera considérée comme due.',
                        ]
                  }
                  isOpen={openInfoCard === cardIndex}
                  onToggle={() => setOpenInfoCard(openInfoCard === cardIndex ? null : cardIndex)}
                />
              </motion.div>
            ))}
          </div>

          {/* Main CTA Button */}
        </div>
      </section>

      {/* --- Pricing Section - Modern Cards --- */}
      <section className="py-12 md:py-20 bg-brand-bg relative overflow-hidden">
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-tan/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="Nos Tarifs" centered />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-brand-primary/60 mb-12 max-w-2xl mx-auto"
          >
            Choisissez la formule qui vous convient le mieux.
          </motion.p>

          {/* Pricing Cards Grid */}
          <div className="grid gap-4 sm:gap-6" style={{ gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto auto' }}>
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                style={{
                  gridColumn: plan.id === 'starter' ? '1' : plan.id === 'unit' ? '2' : plan.id === 'elite' ? '1 / 3' : '3',
                  gridRow: plan.id === 'starter' ? '1' : plan.id === 'unit' ? '1' : plan.id === 'elite' ? '2' : '1 / 3'
                }}
                className={`
                  ${plan.bgColor} ${plan.borderColor}
                  rounded-2xl sm:rounded-[24px] p-5 sm:p-6 lg:p-8
                  flex flex-col relative
                  border-2
                  shadow-lg
                  transition-all duration-300
                  ${plan.id === 'performance' ? 'sm:scale-[1.02] sm:-translate-y-2' : ''}
                `}
              >
                {/* Badge */}
                {plan.badge && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                  >
                    <span className={`
                      inline-flex items-center gap-1.5
                      bg-brand-secondary text-brand-primary
                      text-xs font-bold uppercase tracking-wider
                      px-4 py-2 rounded-full
                      shadow-lg
                    `}>
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      >
                        <Sparkles size={12} />
                      </motion.div>
                      {plan.badge}
                    </span>
                  </motion.div>
                )}

                {/* Header */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="mb-6 mt-2"
                >
                  <h3 className={`text-xl lg:text-2xl font-medium ${plan.textColor} mb-1`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.secondaryTextColor}`}>
                    {plan.tagline}
                  </p>
                </motion.div>

                {/* Price & Options */}
                {plan.options ? (
                  <div className="space-y-3 mb-6">
                    {plan.options.map((option, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.05 }}
                        className="flex justify-between items-center p-3 rounded-xl bg-transparent"
                      >
                        <div>
                          <span className={`text-sm ${plan.id === 'performance' ? 'text-white/70' : 'text-brand-primary/60'}`}>
                            {option.sessions}
                          </span>
                          <span className={`text-xs ${plan.id === 'performance' ? 'text-white/40' : 'text-brand-primary/40'} ml-1`}>
                            ({option.duration})
                          </span>
                        </div>
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className={`font-semibold ${plan.textColor}`}
                        >
                          {option.price}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="mb-6"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl lg:text-4xl font-medium ${plan.textColor}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ${plan.secondaryTextColor}`}>
                        {plan.currency}
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Features */}
                <div className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className={`
                          w-6 h-6 rounded-full flex items-center justify-center shrink-0
                          ${plan.id === 'performance' ? 'bg-brand-secondary/20' : 'bg-brand-primary/10'}
                        `}>
                        <Check
                          size={14}
                          className={plan.id === 'performance' ? 'text-brand-secondary' : 'text-brand-primary'}
                        />
                      </motion.div>
                      <span className={`text-sm ${plan.id === 'performance' ? 'text-brand-bg/80' : 'text-brand-primary/70'}`}>
                        {feature.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  className="mt-auto pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.a
                    href={plan.id === 'starter'
                      ? 'https://calendly.com/reservations-cours/decouverte-pole-dance?back=1&month=2026-04'
                      : getWhatsAppMessage(
                          plan.name === 'Performance' ? 'Abonnement Performance' : `Plan ${plan.name}`,
                          plan.options ? 'Selon formule' : `${plan.price} ${plan.currency}`
                        )
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      block w-full py-4 text-center
                      rounded-full font-semibold text-sm
                      border-2 transition-all duration-300
                      ${plan.buttonBg} ${plan.buttonBorder}
                      ${plan.buttonText}
                      ${plan.buttonHoverBg} ${plan.buttonHoverText}
                    `}
                  >
                    {plan.cta}
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Cours Privés Section --- */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-white rounded-[24px] p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-secondary/5 rounded-full blur-2xl" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center md:text-left"
              >
                <h2 className="text-2xl md:text-3xl font-medium text-brand-primary mb-3">Cours privés</h2>
                 <p className="text-brand-primary/60 max-w-md">
                    Déjà fait ton cours de découverte ? On te guide sur WhatsApp pour tes prochaines séances.
                  </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.a
                   href={getWhatsAppMessage('Cours Privés', 'Sur demande')}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(201, 168, 130, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-brand-secondary text-brand-primary px-8 py-4 rounded-full font-semibold hover:opacity-85 transition-all duration-300 shrink-0 inline-flex items-center gap-2"
                >
                  Demander un devis <ChevronRight size={18} />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
