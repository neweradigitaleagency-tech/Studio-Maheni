import { motion } from 'motion/react';
import { ChevronRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/Shared';

export const Home = () => {
  return (
    <>
      {/* --- Home Section --- */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg/80 to-brand-bg z-10" />
          <img
            src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=2000"
            alt="Pole Dance Studio"
            className="w-full h-full object-cover opacity-20 scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-12 lg:gap-12 items-center pb-12 md:pb-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left mt-8 md:mt-0"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-secondary uppercase mb-4 md:mb-6 block">
              Bienvenue au
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-serif text-brand-primary leading-[0.9] mb-6 md:mb-8">
              Studio  <br />
              <span className="italic text-brand-secondary">Maheni</span>
            </h1>
            <p className="text-base md:text-lg text-brand-primary/70 max-w-md mx-auto md:mx-0 mb-8 md:mb-10 leading-relaxed">
              Pole Dance, Kompa, Kizomba
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/courses" className="bg-brand-primary text-brand-bg px-6 md:px-8 py-4 rounded-full font-medium hover:bg-brand-secondary transition-all flex items-center justify-center gap-2">
                Découvrir nos cours <ChevronRight size={18} />
              </Link>
              <Link to="/contact" className="border border-brand-primary/20 text-brand-primary px-6 md:px-8 py-4 rounded-full font-medium hover:bg-brand-muted transition-all text-center">
                Nous contacter
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="aspect-[4/5] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl relative w-full sm:w-[85%] md:w-[75%] mx-auto md:ml-auto md:mr-0">
              <img
                src="https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776002403/_the_blackgravity_bny6zh.jpg"
                alt="Maheni Founder"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
            </div>
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-bottom-8 md:-left-8 bg-white/90 backdrop-blur-xl p-4 md:p-8 rounded-[24px] md:rounded-[32px] shadow-2xl shadow-brand-primary/10 border border-white w-[90%] sm:w-auto flex justify-center md:justify-start"
            >
              <div className="flex items-center gap-4 md:gap-5">
                <div className="hidden sm:flex w-12 h-12 md:w-14 md:h-14 bg-brand-primary rounded-2xl items-center justify-center text-brand-bg shadow-lg shadow-brand-primary/20">
                  <Users size={24} fill="currentColor" className="md:w-7 md:h-7" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-serif font-bold text-brand-primary leading-none mb-1">200+</div>
                  <div className="text-[9px] md:text-[10px] text-brand-primary/40 uppercase tracking-[0.2em] font-black">Élèves</div>
                </div>
                <div className="ml-2 pl-2 md:ml-4 md:pl-4 border-l border-brand-primary/10">
                  <div className="text-2xl md:text-3xl font-serif font-bold text-brand-primary leading-none mb-1">3</div>
                  <div className="text-[9px] md:text-[10px] text-brand-primary/40 uppercase tracking-[0.2em] font-black">Disciplines</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Mon Premier Cours Section --- */}
      <section className="py-16 md:py-24 bg-brand-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle eyebrow="Guide" title="Mon Premier Cours" centered />
          <div className="max-w-4xl mx-auto mt-12 md:mt-16 space-y-6 md:space-y-8">
            {[
              "Cliquez sur le bouton en haut à droite sur \"Se connecter\" pour créer votre profil.",
              "Cliquez sur \"Tarifs\" et choisissez la formule qui vous convient.",
              "Le règlement effectué, vous serez crédité sur votre compte la formule que vous avez choisi au préalable.",
              "Vous pouvez maintenant aller dans \"Agenda\" et réserver le cours de votre choix.",
              "Assurez-vous de recevoir un e-mail de confirmation de réservation (à ne pas confondre avec la facture)."
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] shadow-sm border border-brand-primary/5"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-brand-secondary/30 italic">
                  0{index + 1}.
                </div>
                <p className="text-base md:text-lg text-brand-primary/80 sm:pt-2 leading-relaxed">
                  {step}
                </p>
              </motion.div>
            ))}
            <div className="text-center mt-10 md:mt-12">
              <Link to="/faq" className="inline-flex items-center gap-2 text-brand-secondary font-bold uppercase tracking-widest hover:text-brand-primary transition-colors text-sm md:text-base">
                Consulter la FAQ <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
