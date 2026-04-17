import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Play, Calendar, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/Shared';

const FAQCard = ({ question, answer, color }: { question: string, answer: string, color: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${color} rounded-[16px] p-6 cursor-pointer`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-start">
        <span className="text-base font-bold text-brand-primary block pr-4">{question}</span>
        {isOpen ? <Minus size={20} className="text-brand-primary shrink-0" /> : <Plus size={20} className="text-brand-primary shrink-0" />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-brand-primary/70 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Home = () => {
  return (
    <>
      {/* --- Home Section --- */}
      <section className="relative py-12 md:py-16 flex items-center overflow-hidden bg-brand-bg">
        <div className="max-w-[80%] mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left mt-8 md:mt-0"
          >
            <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 block text-brand-primary/50">
              STUDIO MAHENI
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-serif italic text-brand-primary leading-[0.95] mb-4 md:mb-6">
              Become that girl
            </h1>
            <p className="text-base md:text-lg font-medium text-brand-primary/70 mb-8 md:mb-10">
              Confiance · Féminité · Communauté
            </p>
            <p className="text-base md:text-lg text-brand-primary/70 max-w-md mx-auto md:mx-0 mb-8 md:mb-10 leading-relaxed hidden md:block">
              Découvre la pole dance à Abidjan
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/courses" className="bg-brand-primary text-white px-6 md:px-8 py-4 rounded-full font-semibold hover:opacity-85 hover:-translate-y-px transition-all flex items-center justify-center gap-2">
                Réserve ton premier cours <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="aspect-[4/5] rounded-[20px] overflow-hidden shadow-xl relative w-full sm:w-[85%] md:w-[75%] mx-auto md:ml-auto md:mr-0">
              <img
                src="https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776450703/IMG_7877_fv3mlh.heic"
                alt="Pole Dance Studio"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Mon Premier Cours Section - 3 ETAPES --- */}
      <section className="py-12 md:py-16 bg-brand-muted/30">
        <div className="max-w-[80%] mx-auto px-6">
          <SectionTitle title="Mon Premier Cours" centered />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Choisissez votre créneau", desc: "Sélectionnez le jour et l'horaire disponibles en cliquant sur le lien de réservation, puis remplissez vos informations personnelles." },
              { num: "02", title: "Vérifiez votre confirmation", desc: "Après votre inscription, vous recevrez un email de confirmation contenant tous les détails du cours. Si vous ne recevez pas cet email, veuillez nous contacter." },
              { num: "03", title: "Confirmez votre réservation", desc: "Pour valider définitivement votre place, envoyez une capture d'écran de votre paiement, votre nom et prénom. Sans confirmation de paiement, votre réservation ne sera pas prise en compte." }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[24px] md:rounded-[32px] p-8 md:p-10 shadow-sm border border-brand-primary/5 text-center"
              >
                <span className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary/30 italic mb-4 block">
                  {step.num}
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-brand-primary mb-3">{step.title}</h3>
                <p className="text-brand-primary/60 text-sm md:text-base">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Link to="/courses" className="inline-flex items-center gap-2 bg-brand-primary text-brand-bg px-8 py-4 rounded-full font-medium hover:bg-brand-secondary transition-all">
              Réserver maintenant <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- Questions Fréquentes Section --- */}
      <section className="py-12 md:py-16 bg-brand-bg">
        <div className="max-w-[80%] mx-auto px-6">
          <SectionTitle title="Questions Fréquentes" centered />

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                q: "À quoi ça sert ? C'est du strip-tease ?", 
                a: "Pas du tout. La pole dance est une discipline sportive et artistique qui mélange force, grâce et expression corporelle. Chez Studio Maheni, l'objectif est simple : t'aider à te sentir forte, confiante et libre dans ton corps.",
                color: "bg-brand-tan" 
              },
              { 
                q: "Je n'ai pas de force, je peux faire ?", 
                a: "Oui, et c'est même la meilleure raison de commencer. Tu n'as pas besoin d'être forte avant de venir — tu deviens forte en pratiquant. Chaque cours est adapté pour te faire progresser à ton rythme, sans pression.",
                color: "bg-brand-tan" 
              },
              { 
                q: "Quelle tenue porter ?", 
                a: "Une tenue confortable qui te permet de bouger librement : short et top de sport sont idéals. Le plus important, c'est que tu te sentes à l'aise et prête à profiter pleinement de l'expérience.",
                color: "bg-brand-tan" 
              }
            ].map((faq, index) => (
              <FAQCard key={index} question={faq.q} answer={faq.a} color={faq.color} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/faq" className="text-sm font-medium text-brand-primary hover:opacity-70 transition-colors inline-flex items-center gap-2">
              Consulter la FAQ pour en savoir plus sur la pole dance <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- C'est quoi le Studio Section --- */}
      <section className="py-12 md:py-16 bg-brand-muted/20">
        <div className="max-w-[80%] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <SectionTitle title="C'est quoi le Studio Maheni ?" />
              <p className="text-brand-primary/70 text-base md:text-lg leading-relaxed mt-6">
                Studio Maheni est un espace dédié à la danse et au bien-être situé à Abidjan, où les femmes viennent se reconnecter à leur corps, gagner en confiance et s'exprimer librement à travers la pole dance.
                Nous proposons des cours de Pole Dance, Kompa et Kizomba dans une ambiance chaleureuse, professionnelle et bienveillante.
              </p>
              <p className="text-brand-primary font-medium mt-6">Notre studio, c'est :</p>
              <ul className="mt-4 space-y-3">
                {[
                  "Une communauté de +200 élèves",
                  "Des coaches passionnés et engagés dans votre progression",
                  "Un espace entièrement équipé pour votre confort",
                  "Une énergie unique, centrée sur la confiance, l'expression et le bien-être"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-primary/80">
                    <div className="w-2 h-2 rounded-full bg-brand-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[9/16] max-h-[500px] rounded-[24px] md:rounded-[32px] overflow-hidden bg-brand-primary/10 relative mx-auto">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/videos/Instagram(4).mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
            </div>
          </div>

          {/* Workshops Passés */}
          <div className="mt-16 md:mt-20">
            <h3 className="text-xl md:text-2xl font-serif text-brand-primary mb-8 flex items-center gap-3">
              <div className="w-8 h-px bg-brand-secondary" />
              Nos workshops passés
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Heels & Pole Society - Avec Tracy",
                  date: "05 Oct 2025",
                  desc: "Une expérience artistique intense alliant puissance, féminité et technique.",
                  img: "https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776025504/6443f4_cafe89a6fc5e4e059d44899fd92f8760_mv2_jtqs4v.avif"
                },
                {
                  title: "Workshop Spécial Kompa",
                  date: "27 Sept 2025",
                  desc: "Premier workshop de Kompa à Abidjan avec le coach Aquaman.",
                  img: "https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776025504/6443f4_8af9396729bd4589894bb38389e8863d_mv2_zevt9a.avif"
                }
              ].map((workshop, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-[20px] overflow-hidden shadow-sm border border-brand-primary/5 flex"
                >
                  <div className="w-1/3 h-32 md:h-auto relative">
                    <img src={workshop.img} alt={workshop.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-center">
                    <span className="text-brand-secondary text-[10px] font-bold uppercase tracking-widest mb-2">{workshop.date}</span>
                    <h4 className="text-base md:text-lg font-serif text-brand-primary mb-1">{workshop.title}</h4>
                    <p className="text-brand-primary/50 text-xs md:text-sm">{workshop.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section className="py-12 md:py-16">
        <div className="max-w-[80%] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-4">
            Vous n'avez pas trouvé la réponse ?
          </h2>
          <p className="text-brand-primary/60 mb-8 text-base md:text-lg">
            N'hésitez pas à nous contacter par le moyen qui vous convient le mieux.
          </p>
          <div className="bg-brand-muted/30 rounded-[24px] md:rounded-[32px] p-8 md:p-12">
            <p className="text-brand-secondary font-bold text-lg mb-6">Réponse plus rapide via WhatsApp</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2250717616343"
                className="bg-brand-primary text-brand-bg px-8 py-4 rounded-full font-medium hover:bg-brand-secondary transition-all inline-flex items-center gap-3"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +225 07 17 61 63 43
              </a>
              <Link to="/contact" className="border border-brand-primary/20 text-brand-primary px-8 py-4 rounded-full font-medium hover:bg-brand-muted transition-all">
                Envoyer un message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};