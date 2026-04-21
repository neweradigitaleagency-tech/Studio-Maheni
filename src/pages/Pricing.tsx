import { motion } from 'motion/react';
import { Check, ChevronRight, CreditCard, Clock, Sparkles } from 'lucide-react';
import { SectionTitle } from '../components/Shared';

const WHATSAPP_NUMBER = '2250717616343';

const getWhatsAppMessage = (service: string, price: string) => {
  const message = encodeURIComponent(
    `Coucou ! 👋🏾\n\nJe suis intéressé(e) par ${service} au prix de ${price}.\n\nMerci de me donner les disponibilités et la marche à suivre pour réserver ! 😊`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Pour découvrir',
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
    tagline: 'Progression régulière',
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
    features: [
      { label: '+2 Self Practice offerts', included: true, highlight: true },
    ],
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
  return (
    <div className="pt-24 bg-brand-bg">
      {/* --- Infos Pratiques Section --- */}
      <section className="py-16">
        <div className="max-w-[80%] mx-auto px-6">
          <SectionTitle title="Infos pratiques" centered />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Card 1: Paiements & Réservations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-tan-light rounded-2xl flex items-center justify-center mb-6">
                <CreditCard size={24} className="text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold text-brand-primary mb-4">Paiements & réservations</h3>
              <ul className="space-y-4">
                {[
                  'La réservation se fait directement en ligne sur le site, via la page Réservation.',
                  'Un e-mail de confirmation vous sera envoyé avec tous les détails du cours (date, lieu, tenue conseillée, etc.).',
                  'Les places sont uniquement confirmées après envoi de la preuve de paiement (capture d\'écran du dépôt Orange Money ou Wave) au +225 07 17 61 63 43.',
                  'Si vous ne pouvez pas effectuer le paiement, envoyez un message au même numéro sur WhatsApp.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-secondary rounded-full mt-2.5 shrink-0"></span>
                    <span className="text-brand-primary/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2: Abonnements & Annulations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-tan-light rounded-2xl flex items-center justify-center mb-6">
                <Clock size={24} className="text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold text-brand-primary mb-4">Abonnements & annulations</h3>
              <ul className="space-y-4">
                {[
                  'Une fois votre abonnement activé, réservez vos séances à l\'avance sur le site. Les effectifs sont limités.',
                  'Si vous ne pouvez pas assister à une séance, pensez à l\'annuler pour libérer la place.',
                  { text: 'Abonnées : annulation au minimum 5 heures avant le début du cours.', highlight: true },
                  { text: 'Nouvelles participantes : annulation au moins 24 heures à l\'avance.', highlight: true },
                  'Report possible une seule fois en cas d\'urgence (via WhatsApp ou appel). Passé ces délais, la séance sera considérée comme due.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-secondary rounded-full mt-2.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      {typeof item === 'string' ? (
                        <span className="text-brand-primary/70">{item}</span>
                      ) : (
                        <span className="text-brand-primary font-semibold">{item.text}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Pricing Section - Modern Cards --- */}
      <section className="py-12 md:py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Nos Tarifs" centered />
          <p className="text-center text-brand-primary/60 mb-12 max-w-2xl mx-auto">
            Choisissez la formule qui vous convient le mieux.
          </p>


          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`
                  ${plan.bgColor} ${plan.borderColor} 
                  rounded-[24px] p-6 lg:p-8 
                  flex flex-col relative
                  border-2
                  shadow-lg hover:shadow-xl
                  transition-all duration-300
                  ${plan.id === 'performance' ? 'lg:scale-105 lg:-translate-y-4' : ''}
                `}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`
                      inline-flex items-center gap-1.5
                      bg-brand-accent text-white
                      text-xs font-bold uppercase tracking-wider
                      px-4 py-2 rounded-full
                      shadow-lg
                    `}>
                      <Sparkles size={12} />
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6 mt-2">
                  <h3 className={`text-xl lg:text-2xl font-bold ${plan.textColor} mb-1`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.secondaryTextColor}`}>
                    {plan.tagline}
                  </p>
                </div>

                {/* Price & Options */}
                {plan.options ? (
                  <div className="space-y-3 mb-6">
                    {plan.options.map((option, idx) => (
                      <div 
                        key={idx}
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
                        <span className={`font-semibold ${plan.textColor}`}>
                          {option.price}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl lg:text-4xl font-bold ${plan.textColor}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ${plan.secondaryTextColor}`}>
                        {plan.currency}
                      </span>
                    </div>
                  </div>
                )}

                {/* Features */}
                <div className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`
                        w-6 h-6 rounded-full flex items-center justify-center shrink-0
                        ${plan.id === 'performance' ? 'bg-brand-secondary/20' : 'bg-brand-primary/10'}
                      `}>
                        <Check
                          size={14}
                          className={plan.id === 'performance' ? 'text-brand-secondary' : 'text-brand-primary'}
                        />
                      </div>
                      <span className={`text-sm ${plan.id === 'performance' ? 'text-brand-bg/80' : 'text-brand-primary/70'}`}>
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-4">
                  <a
                    href={getWhatsAppMessage(
                      plan.name === 'Performance' ? 'Abonnement Performance' : `Plan ${plan.name}`,
                      plan.options ? 'Selon formule' : `${plan.price} ${plan.currency}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- Cours Privés Section --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 bg-white rounded-[24px] p-8 md:p-12 shadow-lg"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-3">Cours privés</h2>
                <p className="text-brand-primary/60 max-w-md">
                  Déjà fait ton cours de découverte ? On te guide sur WhatsApp pour tes prochaines séances.
                </p>
              </div>
              <a
                href={getWhatsAppMessage('Cours Privés', 'Sur demande')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent text-white px-8 py-4 rounded-full font-semibold hover:opacity-85 transition-all shrink-0"
              >
                Demander un devis
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};