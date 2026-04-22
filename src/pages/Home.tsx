import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Play, Calendar, Plus, Minus, Phone, Mail, MapPin, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
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
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

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
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-medium italic text-brand-tan leading-[0.95] mb-6 md:mb-8 font-medium" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
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
          <p className="text-center text-brand-secondary/80 italic text-sm mt-2">Comment ça se passe ?</p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-8 max-w-5xl mx-auto">
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
                className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm border border-brand-primary/5 text-center"
              >
                <span className="text-4xl md:text-5xl font-medium font-bold text-brand-secondary/30 italic mb-4 block">
                  {step.num}
                </span>
                <h3 className="text-xl md:text-2xl font-medium text-brand-primary mb-3">{step.title}</h3>
                <p className="text-brand-primary/60 text-sm md:text-base">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 bg-white rounded-[16px] py-5 px-6 shadow-sm border border-brand-primary/5 inline-block">
            <p className="text-brand-primary/80 text-sm md:text-base">
              Déjà fait ton premier cours ? <span className="font-medium">On te guide sur WhatsApp</span> pour tes prochaines séances.
            </p>
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
                Nous proposons des cours de Pole Dance, des workshops Kompa et Kizomba dans une ambiance chaleureuse, professionnelle et bienveillante.
              </p>
              <p className="text-brand-primary font-medium mt-6">Notre studio, c'est :</p>
              <ul className="mt-4 space-y-3">
                {[
                  "Une communauté! ",
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
            <h3 className="text-xl md:text-2xl font-medium text-brand-primary mb-8 flex items-center gap-3">
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
                  className="bg-white rounded-[20px] overflow-hidden shadow-sm border border-brand-primary/5 flex flex-col md:flex-row"
                >
                  <div className="w-full md:w-1/3 h-48 md:h-auto relative">
                    <img src={workshop.img} alt={workshop.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-center">
                    <span className="text-brand-secondary text-[10px] font-bold uppercase tracking-widest mb-2">{workshop.date}</span>
                    <h4 className="text-base md:text-lg font-medium text-brand-primary mb-1">{workshop.title}</h4>
                    <p className="text-brand-primary/50 text-xs md:text-sm">{workshop.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section className="py-12 md:py-16 bg-brand-bg border-y border-brand-primary/5">
        <div className="max-w-[80%] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-2">
            Vous n'avez pas trouvé la réponse sur notre site,<br />
            y compris dans les FAQ ?
          </h2>
          <p className="text-brand-primary/70 mb-10">
            Contactez-nous par le moyen qui vous convient...<br />
            Réponse plus rapide via WhatsApp.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-brand-primary">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-brand-primary" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-primary/50 block mb-1">Téléphone / WhatsApp</span>
                  <span className="font-medium">+225 07 17 61 63 43</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-brand-primary">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-brand-primary" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-primary/50 block mb-1">Email</span>
                  <span className="font-medium">studio.maheni@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-brand-primary">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-brand-primary" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-primary/50 block mb-1">Localisation</span>
                  <span className="font-medium">New Gym, Abidjan</span>
                </div>
              </div>
              <div className="flex gap-3 pl-14">
                <a href="https://chat.whatsapp.com/CUt3PyGxD4u3Fl293fJsIy" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center bg-brand-primary/10 hover:opacity-70 transition-all">
                  <FaWhatsapp size={20} />
                </a>
                <a href="https://www.instagram.com/studio.maheni/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center bg-brand-primary/10 hover:opacity-70 transition-all">
                  <FaInstagram size={20} />
                </a>
                <a href="https://www.tiktok.com/@studio.maheni?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center bg-brand-primary/10 hover:opacity-70 transition-all">
                  <FaTiktok size={20} />
                </a>
              </div>

            </div>

            {/* Right Column - Email Box Redesigned (20% smaller) */}
            <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-left flex flex-col justify-center min-h-[240px]">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-brand-primary/80" size={20} strokeWidth={1.5} />
                <h3 className="text-lg md:text-xl font-medium text-brand-primary">Envoyez-nous un message</h3>
              </div>

              {emailSent && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-[12px] flex items-center gap-2 text-green-700 text-sm">
                  <CheckCircle size={16} />
                  Message envoyé ! Vérifiez votre boîte mail pour le suivi.
                </div>
              )}

              {emailError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-[12px] flex items-center gap-2 text-red-700 text-sm">
                  <AlertCircle size={16} />
                  Veuillez entrer un email valide.
                </div>
              )}

              <form className="space-y-4" action="mailto:studio.maheni@gmail.com" method="post" encType="text/plain" onSubmit={(e) => {
                const form = e.currentTarget;
                const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                if (!email || !email.includes('@')) {
                  e.preventDefault();
                  setEmailError(true);
                  setTimeout(() => setEmailError(false), 3000);
                } else {
                  setEmailSent(true);
                  setTimeout(() => setEmailSent(false), 5000);
                }
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] sm:text-xs font-bold text-brand-primary/40 uppercase tracking-widest pl-1 mb-1 block">Nom</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Votre nom"
                      required
                      className="w-full px-4 py-3 rounded-[12px] bg-brand-bg/50 focus:border-brand-primary/30 focus:outline-none focus:ring-1 focus:ring-brand-primary/20 text-sm transition-colors border border-transparent placeholder:text-brand-primary/30 text-brand-primary font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] sm:text-xs font-bold text-brand-primary/40 uppercase tracking-widest pl-1 mb-1 block">Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="votre@email.com"
                      required
                      className="w-full px-4 py-3 rounded-[12px] bg-brand-bg/50 focus:border-brand-primary/30 focus:outline-none focus:ring-1 focus:ring-brand-primary/20 text-sm transition-colors border border-transparent placeholder:text-brand-primary/30 text-brand-primary font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] sm:text-xs font-bold text-brand-primary/40 uppercase tracking-widest pl-1 mb-1 block">Sujet</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Sujet"
                    required
                    className="w-full px-4 py-3 rounded-[12px] bg-brand-bg/50 focus:border-brand-primary/30 focus:outline-none focus:ring-1 focus:ring-brand-primary/20 text-sm transition-colors border border-transparent placeholder:text-brand-primary/30 text-brand-primary font-medium"
                  />
                </div>

                <div>
                  <label className="text-[10px] sm:text-xs font-bold text-brand-primary/40 uppercase tracking-widest pl-1 mb-1 block">Message *</label>
                  <textarea
                    name="message"
                    placeholder="Votre message..."
                    rows={3}
                    required
                    className="w-full px-4 py-3 rounded-[12px] bg-brand-bg/50 focus:border-brand-primary/30 focus:outline-none focus:ring-1 focus:ring-brand-primary/20 text-sm resize-none transition-colors border border-transparent placeholder:text-brand-primary/30 text-brand-primary font-medium"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white px-6 py-3 rounded-[12px] font-medium text-sm hover:bg-brand-secondary transition-colors mt-2"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};