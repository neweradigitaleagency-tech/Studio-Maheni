import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Play, Calendar, Plus, Minus, Phone, Mail, MapPin, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
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
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-medium italic text-brand-tan leading-[0.95] mb-6 md:mb-8 font-medium">
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
                <span className="text-4xl md:text-5xl font-medium font-bold text-brand-secondary/30 italic mb-4 block">
                  {step.num}
                </span>
                <h3 className="text-xl md:text-2xl font-medium text-brand-primary mb-3">{step.title}</h3>
                <p className="text-brand-primary/60 text-sm md:text-base">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16 bg-white rounded-[16px] py-6 px-8 shadow-sm border border-brand-primary/5 inline-block">
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
                  className="bg-white rounded-[20px] overflow-hidden shadow-sm border border-brand-primary/5 flex"
                >
                  <div className="w-1/3 h-32 md:h-auto relative">
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
      <section className="py-12 md:py-16 bg-brand-muted/20">
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
<div className="flex gap-4 pt-2">
                <a href="https://chat.whatsapp.com/CUt3PyGxD4u3Fl293fJsIy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#25D430] rounded-full flex items-center justify-center hover:scale-110 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.03-.966-.263-.099-.473-.15-.673.15-.299.297-.94.964-.94 1.162v.05c0 .299.649.448.997.597.35.149.597.149.796.298.099.05.05.148.025.298-.05.15-.15.398-.199.498-.099.149-.199.397-.299.596-.049.1-.147.198-.397.099-.35-.15-1.596-.747-3.037-1.898-1.397-1.123-2.345-2.533-2.64-2.966-.298-.433-.596-.597-.796-.597-.099 0-.249-.025-.349.025-.099.05-.397.198-.497.198s-.399-.025-.548-.099c-.149-.099-.597-.348-1.643-1.023-1.1-.711-1.827-1.595-2.118-1.865-.148-.149-.249-.199-.373.099-.124.299-.624 1.073-.682 1.154-.099.124-.05.248.025.348.099.149.249.348.398.497.299.298.498.398.846.647.349.248.896.1 1.196.05.298-.05.995-.348 1.895-.647.897-.298 1.545-.498 1.844-.748.298-.248.397-.248.547-.397l.848-.547c.099-.099.248-.148.299-.248.148-.15.05-.348-.025-.497l-.399-1.048c-.05-.15-.05-.348.05-.497.149-.149.199-.248.299-.348.149-.099.248-.099.348-.149.049 0 .099 0 .124-.025l.624-.299c.249-.124.373-.198.447-.397.124-.299.099-.597-.025-.846-.124-.198-.846-.447-1.156-.596-.311-.15-.597-.198-.796-.198-.199 0-.497-.05-.647.124-.15.174-.349.298-.348.398-.025.099.124.199.199.298zM20.156 4.883c1.297-1.56 2.155-3.545 1.997-4.883-1.497.074-3.136 1.072-4.16 2.38-1.025 1.308-1.74 3.322-1.642 4.826 1.646-.05 3.271-.672 4.805-1.323zm-5.227 3.89c.396-.05.787-.124 1.136-.248-.349-1.397-.992-2.685-1.867-3.53-.875-.846-2.155-1.373-3.538-1.422.074.198.148.422.247.646 1.223 2.453 2.828 4.554 5.022 4.554zm.647-6.59c.347.025.672.074.994.124-.272-1.082-.806-2.043-1.54-2.706-.735-.663-1.783-1.113-2.876-1.172.099.173.198.347.272.522 1.025 1.647 2.206 3.322 4.15 3.232z"/></svg>
                </a>
                <a href="https://www.instagram.com/studio.maheni/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.226 1.673-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@studio.maheni?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v6.26a2.84 2.84 0 0 1-5.62 1.14 2.84 2.84 0 0 1 1.89-2.61 4.78 4.78 0 0 1 3.28 1.65V10.3a3.81 3.81 0 0 0-2.1-.54c-2.74-.13-4.52 1.96-4.73 4.64a4.87 4.87 0 0 0 4.27 4.75c2.35 1.03 4.77-.3 5.42-2.72a5.09 5.09 0 0 0 .64-1.85 3.78 3.78 0 0 0 2.1 2.39c1.17.56 2.5.6 3.57.21a4.84 4.84 0 0 0 3.27-4.09V7.94a5 5 0 0 1-1 .64z"/></svg>
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