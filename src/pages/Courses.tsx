import { motion } from 'motion/react';
import { ChevronRight, Play, Users, Calendar, MapPin } from 'lucide-react';
import { SectionTitle } from '../components/Shared';
import { Link } from 'react-router-dom';

export const Courses = () => {
  return (
    <div className="pt-24">
      {/* --- Nos Cours Section --- */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle eyebrow="Nos Services" title="Nos Cours" centered />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
            {/* Pole Dance - Large */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="md:col-span-2 md:row-span-2 bg-brand-primary rounded-[24px] md:rounded-[32px] overflow-hidden relative group min-h-[400px] md:min-h-0"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1000"
                alt="Pole Dance"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7 }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 p-6 md:p-10"
              >
                <h3 className="text-3xl md:text-4xl font-medium text-brand-bg mb-3 md:mb-4">Pole Dance</h3>
                <p className="text-brand-bg/70 max-w-sm mb-4 md:mb-6 text-sm md:text-base">
                  Alliez force athlétique et grâce artistique. Un entraînement complet qui sculpte le corps et libère l'esprit.
                </p>
                <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                  <Link to="/pole-dance" className="text-brand-bg font-medium text-xs md:text-sm tracking-widest uppercase flex items-center gap-2 group/btn">
                    En savoir plus <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Kompa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="md:col-span-2 bg-brand-secondary rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group min-h-[250px] md:min-h-0"
            >
              <div className="relative z-10">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl font-medium text-brand-bg mb-2"
                >
                  Kompa
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-brand-bg/80 text-xs md:text-sm max-w-xs"
                >
                  Plongez dans les rythmes envoûtants d'Haïti. Une danse sociale vibrante et pleine d'énergie.
                </motion.p>
              </div>
              <div className="relative z-10 flex justify-between items-end mt-6 md:mt-0">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-bg/20 backdrop-blur-md rounded-full flex items-center justify-center text-brand-bg">
                    <Play size={20} />
                  </div>
                </motion.div>
                <span className="text-brand-bg/40 font-medium italic text-5xl md:text-6xl">02</span>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 0.2, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
              >
                <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=500" alt="Dance" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            </motion.div>

            {/* Kizomba */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="md:col-span-2 bg-brand-muted rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex flex-col justify-between group min-h-[200px] md:min-h-0 relative overflow-hidden"
            >
              <div className="relative z-10">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl font-medium text-brand-primary mb-2"
                >
                  Kizomba
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-brand-primary/60 text-xs md:text-sm"
                >
                  La fluidité et la connexion. Une danse douce et technique.
                </motion.p>
              </div>
              <div className="flex justify-between items-end mt-6 md:mt-0 relative z-10">
                <motion.div whileHover={{ scale: 1.2, rotate: -10 }} transition={{ type: 'spring', stiffness: 400 }}>
                  <Users size={24} className="text-brand-secondary" />
                </motion.div>
                <span className="text-brand-primary/10 font-medium italic text-4xl md:text-5xl">03</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Événements Section (Location) --- */}
      <section className="py-12 md:py-16 bg-brand-muted/20 relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle eyebrow="Événements" title="Louez Notre Salle" centered />
          </motion.div>

          <div className="max-w-4xl mx-auto mt-10 md:mt-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg hover:shadow-xl border border-brand-primary/5 transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-2">
                <motion.div
                  className="aspect-video md:aspect-auto overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000"
                    alt="Location salle"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl font-medium text-brand-primary mb-3"
                  >
                    Un espace pour vos événements
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-brand-primary/60 text-sm md:text-base mb-6"
                  >
                    Vous organisez un événement privé (anniversaire, entersement, shooting photo, workshop...) ?
                    Louez notre salle équipés pour créer un moment inoubliable.
                  </motion.p>
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2 mb-6"
                  >
                    {[
                       { icon: MapPin, text: 'Situé à Abidjan, Riviera Palmeraie' },
                       { icon: Users, text: 'Capacité adaptée à vos besoins' },
                      { icon: Calendar, text: 'Horaires flexibles' }
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-2 text-brand-primary/70 text-sm"
                      >
                        <item.icon size={16} className="text-brand-secondary shrink-0" />
                        {item.text}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(44, 26, 14, 0.2)' }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-brand-primary text-brand-bg px-6 py-3 rounded-full font-medium hover:bg-brand-secondary transition-all inline-flex items-center justify-center gap-2 w-fit"
                  >
                    Demander un devis <ChevronRight size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Workshop Section --- */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-brand-tan/5 rounded-full blur-3xl" />

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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-brand-primary/60 text-base md:text-lg"
              >
                Des sessions intensives pour approfondir votre pratique.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="bg-brand-muted/50 px-6 py-4 rounded-2xl border border-brand-primary/5 w-full md:w-auto"
            >
              <span className="text-brand-primary font-bold text-sm uppercase tracking-widest">Prochainement</span>
               <p className="text-brand-primary/40 text-xs mt-1">Nous n'avons pas de workshops disponibles pour le moment. Restez connectées !</p>
            </motion.div>
          </motion.div>

          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-medium text-brand-primary mb-6 md:mb-8 flex items-center gap-3"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="w-8 h-px bg-brand-secondary origin-left"
              />
               Nos workshop passés
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: "Heels & Pole Society - Avec Tracy",
                  date: "05 Oct",
                  year: "2025",
                  time: "19:00 - 20:30",
                  desc: "Une exp�rience artistique intense alliant puissance, f�minit� et technique. Fusion des bases du Heels avec la Pole Dance dans une chor�graphie audacieuse.",
                  img: "https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776025504/6443f4_cafe89a6fc5e4e059d44899fd92f8760_mv2_jtqs4v.avif"
                },
                {
                   title: "Workshop Spécial Kompa",
                  date: "27 Sept",
                  year: "2025",
                  time: "16:00 - 18:00",
                   desc: "Premier workshop de Kompa à Abidjan avec le coach Aquaman. Exploration de la sensualité du Kompa à travers les pas de bases et chorégraphie progressive.",
                  img: "https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776025504/6443f4_8af9396729bd4589894bb38389e8863d_mv2_zevt9a.avif"
                }
              ].map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  className="bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg hover:shadow-xl border border-brand-primary/5 flex flex-col sm:flex-row opacity-80 grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                >
                  <motion.div
                    className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={event.img} alt={event.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-brand-bg px-4 py-2 rounded-xl text-center shadow-lg">
                      <div className="text-lg md:text-xl font-medium font-bold text-brand-primary leading-none">{event.date.split(' ')[0]}</div>
                      <div className="text-[9px] md:text-[10px] font-bold text-brand-secondary uppercase tracking-tighter">{event.date.split(' ')[1]}</div>
                    </div>
                  </motion.div>
                  <div className="p-6 md:p-8 sm:w-3/5 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.2 }}
                      className="flex items-center gap-2 text-brand-secondary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-3"
                    >
                      <Calendar size={14} /> {event.time} | New Gym
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-medium text-brand-primary mb-2 md:mb-3">{event.title}</h3>
                    <p className="text-brand-primary/60 text-xs md:text-sm mb-4 leading-relaxed line-clamp-3">
                      {event.desc}
                    </p>
                    <span className="text-brand-primary/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Événement terminé</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
