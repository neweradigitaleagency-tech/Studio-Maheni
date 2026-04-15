import { motion } from 'motion/react';
import { ChevronRight, Play, Users, Calendar, MapPin } from 'lucide-react';
import { SectionTitle } from '../components/Shared';
import { Link } from 'react-router-dom';

export const Courses = () => {
  return (
    <div className="pt-24">
      {/* --- Nos Cours Section --- */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle eyebrow="Nos Services" title="Nos Cours" centered />
          
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
            {/* Pole Dance - Large */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 md:row-span-2 bg-brand-primary rounded-[24px] md:rounded-[32px] overflow-hidden relative group min-h-[400px] md:min-h-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1000" 
                alt="Pole Dance" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <h3 className="text-3xl md:text-4xl font-serif text-brand-bg mb-3 md:mb-4">Pole Dance</h3>
                <p className="text-brand-bg/70 max-w-sm mb-4 md:mb-6 text-sm md:text-base">
                  Alliez force athlétique et grâce artistique. Un entraînement complet qui sculpte le corps et libère l'esprit.
                </p>
<Link to="/pole-dance" className="text-brand-bg font-bold text-xs md:text-sm tracking-widest uppercase flex items-center gap-2 group/btn">
                   En savoir plus <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                 </Link>
              </div>
            </motion.div>

            {/* Kompa */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-brand-secondary rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group min-h-[250px] md:min-h-0"
            >
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-serif text-brand-bg mb-2">Kompa</h3>
                <p className="text-brand-bg/80 text-xs md:text-sm max-w-xs">
                  Plongez dans les rythmes envoûtants d'Haïti. Une danse sociale vibrante et pleine d'énergie.
                </p>
              </div>
              <div className="relative z-10 flex justify-between items-end mt-6 md:mt-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-bg/20 backdrop-blur-md rounded-full flex items-center justify-center text-brand-bg">
                  <Play size={20} />
                </div>
                <span className="text-brand-bg/40 font-serif italic text-5xl md:text-6xl">02</span>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=500" alt="Dance" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>

            {/* Kizomba */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-brand-muted rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex flex-col justify-between group min-h-[200px] md:min-h-0"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-serif text-brand-primary mb-2">Kizomba</h3>
                <p className="text-brand-primary/60 text-xs md:text-sm">
                  La fluidité et la connexion. Une danse douce et technique.
                </p>
              </div>
              <div className="flex justify-between items-end mt-6 md:mt-0">
                <Users size={24} className="text-brand-secondary" />
                <span className="text-brand-primary/10 font-serif italic text-4xl md:text-5xl">03</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Événements Section (Location) --- */}
      <section className="py-16 md:py-24 bg-brand-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle eyebrow="Événements" title="Louez Notre Salle" centered />
          
          <div className="max-w-4xl mx-auto mt-10 md:mt-14">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm border border-brand-primary/5"
            >
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000" 
                    alt="Location salle" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-serif text-brand-primary mb-3">Un espace pour vos événements</h3>
                  <p className="text-brand-primary/60 text-sm md:text-base mb-6">
                    Vous organisez un événement privé (anniversaire, entersement, shooting photo, workshop...) ? 
                    Louez notre salle équipés pour créer un moment inoubliable.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-brand-primary/70 text-sm">
                      <MapPin size={16} className="text-brand-secondary" />
                      Situé à Abidjan, Riviera Palmeraie
                    </li>
                    <li className="flex items-center gap-2 text-brand-primary/70 text-sm">
                      <Users size={16} className="text-brand-secondary" />
                      Capacité adaptée à vos besoins
                    </li>
                    <li className="flex items-center gap-2 text-brand-primary/70 text-sm">
                      <Calendar size={16} className="text-brand-secondary" />
                      Horaires flexibles
                    </li>
                  </ul>
                  <button className="bg-brand-primary text-brand-bg px-6 py-3 rounded-full font-medium hover:bg-brand-secondary transition-all inline-flex items-center justify-center gap-2 w-fit">
                    Demander un devis <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Workshop Section --- */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-xl">
              <SectionTitle eyebrow="Événements" title="Nos Workshops" />
              <p className="text-brand-primary/60 text-base md:text-lg">
                Des sessions intensives pour approfondir votre pratique.
              </p>
            </div>
            <div className="bg-brand-muted/50 px-6 py-4 rounded-2xl border border-brand-primary/5 w-full md:w-auto">
              <span className="text-brand-primary font-bold text-sm uppercase tracking-widest">Prochainement</span>
              <p className="text-brand-primary/40 text-xs mt-1">Nous n'avons pas de workshops disponibles pour le moment. Restez connectées !</p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-serif text-brand-primary mb-6 md:mb-8 flex items-center gap-3">
              <div className="w-8 h-px bg-brand-secondary" />
              Nos workshop passés
            </h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {[
                { 
                  title: "Heels & Pole Society - Avec Tracy", 
                  date: "05 Oct", 
                  year: "2025",
                  time: "19:00 - 20:30", 
                  desc: "Une expérience artistique intense alliant puissance, féminité et technique. Fusion des bases du Heels avec la Pole Dance dans une chorégraphie audacieuse.",
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
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm border border-brand-primary/5 flex flex-col sm:flex-row opacity-80 grayscale-[0.2] hover:grayscale-0 transition-all"
                >
                  <div className="sm:w-2/5 h-48 sm:h-auto relative">
                    <img src={event.img} alt={event.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-brand-bg px-4 py-2 rounded-xl text-center shadow-lg">
                      <div className="text-lg md:text-xl font-serif font-bold text-brand-primary leading-none">{event.date.split(' ')[0]}</div>
                      <div className="text-[9px] md:text-[10px] font-bold text-brand-secondary uppercase tracking-tighter">{event.date.split(' ')[1]}</div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 sm:w-3/5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-brand-secondary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-3">
                      <Calendar size={14} /> {event.time} | New Gym
                    </div>
                    <h3 className="text-lg md:text-xl font-serif text-brand-primary mb-2 md:mb-3">{event.title}</h3>
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