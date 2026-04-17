import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, MapPin, Users, Circle, Building2, PartyPopper } from 'lucide-react';
import { SectionTitle } from '../components/Shared';

const WHATSAPP_NUMBER = '2250717616343';

const getWhatsAppMessage = (service: string) => {
  const messages: Record<string, string> = {
    'pole-dance': `Coucou ! 👋🏾\n\nJe suis intéressé(e) par un cours de Pole Dance.\n\nPouvez-vous me donner les disponibilités et tarifs ?`,
    'kompa': `Coucou ! 💃🏾\n\nJe suis intéressé(e) par les cours de Kompa.\n\nQuand sont les prochaines séances ?`,
    'kizomba': `Coucou ! 💃🏾\n\nJe suis intéressé(e) par les cours de Kizomba.\n\nQuand sont les prochaines séances ?`,
    'location': `Coucou ! 📸\n\nJe voudrais louer votre salle pour :\n\n[Décrivez votre événement]\n\nMerci !`,
    'evenement': `Coucou ! 🎉\n\nJe voudrais organiser un événement privé :\n\n[Décrivez votre demande]\n\n\nMerci !`,
    'default': `Coucou ! 👋🏾\n\nJe suis intéressé(e) par vos services.\n\nMerci de me donner plus d'informations !`,
  };
  const message = messages[service] || messages['default'];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const Services = () => {
  const [activeTab, setActiveTab] = useState('pole-dance');

  const tabs = [
    { id: 'pole-dance', label: 'POLE DANCE (COURS & LOCATION DE SALLE ET BARRE)' },
    { id: 'workshops', label: 'WORKSHOP (KOMPA, KIZOMBA, HEELS, ETC)' },
    { id: 'evenements', label: 'ÉVÉNEMENTS PRIVÉS (MARIAGE / EVJF / ENTREPRISE)' }
  ];

  return (
    <div className="pt-24">
      {/* --- 3.1 Page Header --- */}
      <section className="py-12 md:py-16">
        <div className="max-w-[80%] mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary/50">
            NOS SERVICES
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-brand-primary mt-4">
            Découvrez toutes les activités proposées par Studio Maheni
          </h1>
        </div>
      </section>

      {/* --- 3.2 Tab Navigation --- */}
      <section className="pb-8 md:pb-12">
        <div className="max-w-[80%] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:flex-nowrap md:space-x-6 border-b border-brand-primary/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-2 py-3 text-[13px] uppercase tracking-wider transition-colors whitespace-nowrap
                  ${activeTab === tab.id 
                    ? 'text-brand-primary font-bold border-b-2 border-brand-primary' 
                    : 'text-brand-primary/50 hover:text-brand-primary'}
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3.3 Tab 1: POLE DANCE --- */}
      {activeTab === 'pole-dance' && (
        <section className="py-12 md:py-16">
          <div className="max-w-[80%] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Left Column - 2 Stacked Cards */}
              <div className="flex flex-col gap-6">
                <div className="bg-brand-tan-light rounded-[16px] p-7">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">Cours collectif à Abidjan</h3>
                  <p className="text-brand-primary/70 text-sm md:text-base mb-4">
                    Des cours pour niveau débutant/inter à toutes pour développer force, confiance et féminité.
                  </p>
                  <a 
                    href={getWhatsAppMessage('pole-dance')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-brand-primary text-brand-primary px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-primary/5 transition-colors"
                  >
                    Réserver
                  </a>
                </div>
                
                <div className="bg-brand-tan-light rounded-[16px] p-7">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">Self practice</h3>
                  <p className="text-brand-primary/70 text-sm md:text-base mb-4">
                    Entrainez-vous seule selon les disponibilités de la salle de pole dance ou louez notre podium pour des shootings, clips, events...
                  </p>
                  <a 
                    href={getWhatsAppMessage('self-practice')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-brand-primary text-brand-primary px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-primary/5 transition-colors"
                  >
                    Réserver
                  </a>
                </div>
              </div>

              {/* Right Column - Image Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-brand-primary rounded-[20px] overflow-hidden relative group min-h-[400px] md:min-h-[500px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1000"
                  alt="Pole Dance"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Location podium de pole dance</h3>
                  <p className="text-white/70 max-w-sm mb-4 md:mb-6 text-sm md:text-base">
                    Clip, shooting, event, EVJF etc.
                  </p>
                  <a 
                    href={getWhatsAppMessage('location')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-white text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-brand-primary transition-colors"
                  >
                    Demander un devis
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* --- 3.4 Tab 2: WORKSHOP --- */}
      {activeTab === 'workshops' && (
        <section className="py-12 md:py-16">
          <div className="max-w-[80%] mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-primary text-center mb-6">WORKSHOP</h2>
            <p className="text-brand-primary/70 text-center max-w-2xl mx-auto mb-12">
              Nos workshops sont proposés de temps en temps. Pour connaître les dates et horaires, suivez-nous sur nos réseaux sociaux ou la communauté WhatsApp Studio Maheni pour rester informée de nos actualités.
            </p>
            
            <h3 className="text-lg font-bold text-brand-primary mb-6 flex items-center gap-3">
              <div className="w-8 h-px bg-brand-secondary" />
              Nos workshops passés
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Heels & Pole Society - Avec Tracy",
                  date: "05 Oct 2025",
                  time: "19:00 - 20:30",
                  location: "New Gym",
                  desc: "Une expérience artistique intense alliant puissance, féminité et technique.",
                  img: "https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776025504/6443f4_cafe89a6fc5e4e059d44899fd92f8760_mv2_jtqs4v.avif"
                },
                {
                  title: "Workshop Spécial Kompa",
                  date: "27 Sept 2025",
                  time: "16:00 - 18:00",
                  location: "New Gym",
                  desc: "Premier workshop de Kompa à Abidjan avec le coach Aquaman.",
                  img: "https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776025504/6443f4_8af9396729bd4589894bb38389e8863d_mv2_zevt9a.avif"
                }
              ].map((workshop, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-[12px] overflow-hidden shadow-sm border border-brand-primary/5 flex"
                >
                  <div className="w-1/3 h-32 md:h-auto relative">
                    <img src={workshop.img} alt={workshop.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-brand-secondary text-[10px] font-bold uppercase tracking-widest">{workshop.date}</span>
                      <span className="text-brand-primary/30">|</span>
                      <span className="text-brand-primary/50 text-xs">{workshop.time}</span>
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-brand-primary mb-1">{workshop.title}</h4>
                    <p className="text-brand-primary/50 text-xs md:text-sm">{workshop.desc}</p>
                    <span className="text-xs bg-brand-primary/5 text-brand-primary/60 px-2 py-1 rounded mt-2 inline-block w-fit">Événement terminé</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- 3.5 Tab 3: ÉVÉNEMENTS PRIVÉS --- */}
      {activeTab === 'evenements' && (
        <section className="py-12 md:py-16">
          <div className="max-w-[80%] mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-primary text-center mb-12">ÉVÉNEMENTS PRIVÉS</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl mb-4">💍</div>
                <h3 className="text-lg md:text-xl font-bold text-brand-primary mb-2">Mariage</h3>
                <p className="text-brand-primary/70 text-sm">
                  Chorégraphie personnalisée pour votre ouverture de bal.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-lg md:text-xl font-bold text-brand-primary mb-2">Anniversaire / EVJF</h3>
                <p className="text-brand-primary/70 text-sm">
                  Moment fun, entre amies, dans une ambiance inoubliable.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg md:text-xl font-bold text-brand-primary mb-2">Entreprises</h3>
                <p className="text-brand-primary/70 text-sm">
                  Activités originales pour vos équipes et team building.
                </p>
              </div>
            </div>

            <div className="text-center">
              <a 
                href={getWhatsAppMessage('evenement')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full font-semibold hover:opacity-85 transition-all"
              >
                Demander un devis <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* --- 3.6 Footer CTA Banner --- */}
      <section className="py-12 md:py-16 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Tu veux tester la pole dance ?</h2>
          <p className="text-white/70 text-lg mb-8 md:mb-10">
            Commence par un cours découverte ✨
          </p>
          <a 
            href={getWhatsAppMessage('pole-dance')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-tan text-brand-primary px-10 py-4 rounded-full font-semibold hover:opacity-85 hover:-translate-y-px transition-all"
          >
            Réserver
          </a>
        </div>
      </section>
    </div>
  );
};