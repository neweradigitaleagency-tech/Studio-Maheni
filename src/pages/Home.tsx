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
      {/* --- Hero Section --- */}
      <section className="relative py-28 md:py-36 flex items-center overflow-hidden bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="mb-3">
              <span className="text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase text-brand-primary/60">
                STUDIO MAHENI
              </span>
            </div>
            <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-brand-primary/50 mb-6 md:mb-8">
              Confiance - Féminité - Communauté
            </p>
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-brand-tan leading-[0.95] mb-6 md:mb-8">
              Become that girl
            </h1>
            <p className="text-base md:text-lg text-brand-primary/60 mb-8 md:mb-10 max-w-sm mx-auto md:mx-0">
              Découvre la pole dance à Abidjan
            </p>
            <div>
              <Link 
                to="/services" 
                className="inline-block bg-brand-primary text-white px-8 md:px-10 py-4 rounded-full font-semibold hover:opacity-85 hover:-translate-y-px transition-all"
              >
                Réserve ton premier cours
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="rounded-[24px] overflow-hidden shadow-2xl w-full max-w-[300px] md:max-w-[380px]">
              <img
                src="https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776450703/IMG_7877_fv3mlh.heic"
                alt="Pole Dance Studio"
                className="w-full h-auto object-cover aspect-[3/4]"
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
            <Link to="/services" className="inline-flex items-center gap-2 bg-brand-primary text-brand-bg px-8 py-4 rounded-full font-medium hover:bg-brand-secondary transition-all">
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${faq.color} rounded-[20px] p-6`}
              >
                <span className="text-base font-bold text-brand-primary block mb-3">{faq.q}</span>
                <p className="text-brand-primary/70 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
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
      <section className="py-12 md:py-16 bg-brand-muted/20">
        <div className="max-w-[80%] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-2">
            Vous n'avez pas trouvé la réponse sur notre site,<br/>
            y compris dans les FAQ ?
          </h2>
          <p className="text-brand-primary/70 mb-10">
            Contactez-nous par le moyen qui vous convient...<br/>
            Réponse plus rapide via WhatsApp.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-brand-primary">
                <span className="text-xl">📞</span>
                <span className="font-medium">TÉLÉPHONE / WHATSAPP: +225 07 17 61 63 43</span>
              </div>
              <div className="flex items-center gap-3 text-brand-primary">
                <span className="text-xl">✉️</span>
                <span className="font-medium">maheni.officialdancer@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-brand-primary">
                <span className="text-xl">📍</span>
                <span className="font-medium">New Gym, Abidjan</span>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center hover:bg-brand-primary/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.226 1.673-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center hover:bg-brand-primary/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.21c0 .61-.31 1.16-.79 1.47-1.06.69-2.47.54-3.46-.38-1.04-.94-1.14-2.47-.22-3.58.42-.51 1.11-.91 1.88-1.16v4.41c-.64-.26-1.31-.47-2.02-.54-.71-.07-1.41.17-2.01.68-.65.55-1.01 1.42-.98 2.34v3.47c.01.88.44 1.66 1.14 2.17.68.5 1.5.62 2.28.55v4.4c-.99-.09-1.91-.46-2.66-1.03-.74-.56-1.23-1.37-1.38-2.25-.18-.99.24-1.99.93-2.79v-4.54c.74.34 1.54.52 2.35.52 1.65 0 3.15-.88 3.85-2.21.7-1.34.67-3.07.12-4.45-1.02-2.58-3.83-4.01-6.23-3.69-1.55.21-2.91.94-3.83 1.95V.02z"/></svg>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-[16px] p-8 shadow-lg shadow-brand-primary/5">
              <h3 className="text-xl font-bold text-brand-primary mb-6">Envoyez-nous un message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Nom" className="w-full px-4 py-3 rounded-[8px] border border-brand-primary/20 focus:border-brand-primary focus:outline-none text-sm" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-[8px] border border-brand-primary/20 focus:border-brand-primary focus:outline-none text-sm" />
                </div>
                <input type="text" placeholder="Sujet" className="w-full px-4 py-3 rounded-[8px] border border-brand-primary/20 focus:border-brand-primary focus:outline-none text-sm" />
                <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-[8px] border border-brand-primary/20 focus:border-brand-primary focus:outline-none text-sm resize-none"></textarea>
                <button type="submit" className="w-full bg-brand-primary text-white px-8 py-4 rounded-full font-semibold hover:opacity-85 transition-all">
                  ENVOYER LE MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};