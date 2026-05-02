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
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle eyebrow="Cours" title="Pole Dance" centered />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="bg-brand-primary rounded-[24px] md:rounded-[32px] overflow-hidden relative group min-h-[400px] md:min-h-[500px] shadow-lg"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1000"
                alt="Pole Dance"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7 }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 p-6 md:p-10"
              >
                <h3 className="text-3xl md:text-4xl font-medium text-brand-bg mb-3 md:mb-4">Cours de Pole Dance</h3>
                <p className="text-brand-bg/70 max-w-sm mb-4 md:mb-6 text-sm md:text-base">
                  Des cours pour niveau débutant/inter à toutes pour développer force, confiance et féminité.
                </p>
              </motion.div>
            </motion.div>

            <div className="flex flex-col gap-6 md:gap-8">
              {[
                { icon: MapPin, label: 'Location', title: 'Cours collectifs & privés', desc: 'Découvrez nos formules adaptées à toutes. Débutez ou progressez selon votre niveau.', color: 'bg-brand-muted/20' },
                { icon: Users, label: 'Pratiquez', title: 'Entraînez-vous seule', desc: 'Selon les disponibilités de la salle de pole dance ou louez notre podium pour des shootings, clips, events...', color: 'bg-brand-secondary/10' }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  className={`${card.color} rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300`}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                    className="flex items-center gap-2 text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3"
                  >
                    <card.icon size={14} /> {card.label}
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-medium text-brand-primary mb-3">{card.title}</h3>
                  <p className="text-brand-primary/60 text-sm md:text-base">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(44, 26, 14, 0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-primary text-brand-bg px-8 py-4 rounded-full font-medium hover:bg-brand-secondary transition-all inline-flex items-center justify-center gap-2 cursor-pointer duration-300"
            >
              Réserver un cours <ChevronRight size={18} />
            </motion.button>
            <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
              <Link
                to="/faq"
                className="bg-white border border-brand-primary/20 text-brand-primary px-8 py-4 rounded-full font-medium hover:bg-brand-primary/5 transition-all inline-flex items-center justify-center gap-2"
              >
                En savoir plus sur la pole dance
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Workshops --- */}
      <section className="py-12 md:py-16 bg-brand-muted/20 relative overflow-hidden">
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-brand-tan/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8"
          >
            <div className="max-w-xl">
              <SectionTitle eyebrow="Événements" title="Nos Workshops" />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-brand-primary/60 text-base md:text-lg"
              >
                Kompa, Kizomba, Heels et plus encore. Proposés de temps en temps. Pour connaître les dates et horaires, suivez-nos réseaux sociaux ou rejoignez notre <motion.a
                  href="https://chat.whatsapp.com/CUt3PyGxD4u3Fl293fJsIy"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className="text-brand-secondary font-medium hover:underline inline-block"
                >
                  communauté WhatsApp
                </motion.a> pour rester informé de nos actuelles.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="bg-white px-6 py-4 rounded-2xl border border-brand-primary/5 w-full md:w-auto shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-brand-primary font-bold text-sm uppercase tracking-widest">Suivez-nous</span>
              <p className="text-brand-primary/40 text-xs mt-1">Sur nos réseaux sociaux ou WhatsApp pour rester informée des dates et horaires.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            className="bg-brand-primary rounded-[24px] md:rounded-[32px] overflow-hidden relative group shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=1000"
              alt="Workshop"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.7 }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10 p-6 md:p-10"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-brand-bg mb-3">Des surprises toute l'année</h3>
              <p className="text-brand-bg/70 max-w-lg mb-6 text-sm md:text-base">
                Nous vous réservons plein de surprises tout au long de l'année !
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Événements Privés --- */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-brand-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle eyebrow="Événements" title="Événements Privés" centered />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               { icon: Circle, color: 'bg-brand-primary/10', iconColor: 'text-brand-primary', title: 'Mariage', desc: 'Chorégraphie personnalisée pour votre ouverture de bal.' },
               { icon: Building2, color: 'bg-brand-secondary/10', iconColor: 'text-brand-secondary', title: 'Entreprises', desc: 'Activités originales pour vos équipes et team building.' },
               { icon: PartyPopper, color: 'bg-brand-muted/30', iconColor: 'text-brand-primary', title: 'Anniversaire / EVJF', desc: 'Moment fun, entre amies, dans une ambiance inoubliable.' },
               { icon: Sparkles, color: 'bg-brand-bg/20', iconColor: 'text-brand-bg', title: 'Cours Découverte', desc: 'Testez la pole dance avec un cours découverte !', dark: true }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className={`rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-lg hover:shadow-xl border border-brand-primary/5 transition-shadow duration-300 ${item.dark ? 'bg-brand-primary' : 'bg-white'}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mb-4`}
                >
                  <item.icon size={24} className={item.iconColor} />
                </motion.div>
                <h3 className={`text-lg md:text-xl font-medium mb-2 ${item.dark ? 'text-brand-bg' : 'text-brand-primary'}`}>{item.title}</h3>
                <p className={`text-sm ${item.dark ? 'text-brand-bg/70' : 'text-brand-primary/60'}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 md:mt-14 text-center"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(44, 26, 14, 0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-primary text-brand-bg px-8 py-4 rounded-full font-medium hover:bg-brand-secondary transition-all inline-flex items-center justify-center gap-2 cursor-pointer duration-300"
            >
              Demander un devis <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* --- CTA Finale --- */}
      <section className="py-12 md:py-16 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary/10 to-brand-primary pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-medium text-brand-bg mb-4 md:mb-6"
          >
            Tu veux tester la pole dance ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-bg/70 text-lg mb-8 md:mb-10"
          >
            Commence par un cours découverte ?
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.98 }}
            className="bg-brand-bg text-brand-primary px-10 py-4 rounded-full font-medium hover:bg-brand-secondary hover:text-brand-bg transition-all inline-flex items-center justify-center gap-2 cursor-pointer duration-300"
          >
            Réserver <ChevronRight size={18} />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};
