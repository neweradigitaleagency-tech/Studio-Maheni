import { motion } from 'motion/react';
import { Check, ChevronRight } from 'lucide-react';
import { SectionTitle } from '../components/Shared';

const WHATSAPP_NUMBER = '2250717616343';

const getWhatsAppMessage = (service: string, price: string) => {
  const message = encodeURIComponent(
    `Coucou ! 👋🏾\n\nJe suis intéressé(e) par ${service} au prix de ${price}.\n\nMerci de me donner les disponibilités et la marche à suivre pour réserver ! 😊`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const Pricing = () => {
  return (
    <div className="pt-24">
      {/* --- Pricing Section - 4 Cards --- */}
      <section className="py-12 md:py-16 bg-[#F5F0E8]">
        <div className="max-w-[80%] mx-auto px-6">
          <SectionTitle title="Nos Tarifs" centered />
          <p className="text-center text-[#5D4E44] mb-12 max-w-2xl mx-auto text-base">
            Les cours de Kōmpa et Kizomba sont disponibles sur demande.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {/* Card 1: Starter - White with border */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white border border-[#3E2723]/10 rounded-[20px] p-6 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#3E2723] mb-1">Starter</h3>
                <p className="text-[#8D7B68] text-sm">Pour découvrir</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#5D4E44]">Découverte</span>
                  <span className="text-lg font-bold text-[#3E2723]">10 000 FCA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#5D4E44]">Unité</span>
                  <span className="text-lg font-bold text-[#3E2723]">15 000 FCA</span>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <a 
                  href={getWhatsAppMessage('Cours Découverte', '10 000 FCA')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center rounded-full border border-[#3E2723] text-[#3E2723] font-semibold text-sm hover:bg-[#3E2723] hover:text-white transition-all"
                >
                  Réserver
                </a>
              </div>
            </motion.div>

            {/* Card 2 - Light beige/tan */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#E6D5C3] rounded-[20px] p-6 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#3E2723] mb-1">Unit</h3>
                <p className="text-[#8D7B68] text-sm">Séance unique</p>
              </div>
              <div className="mb-6">
                <span className="text-2xl font-bold text-[#3E2723]">15 000 FCA</span>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-[#5D4E44]">
                  <Check size={16} className="text-[#3E2723]" />
                  <span>Accès à tous les cours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#5D4E44]">
                  <Check size={16} className="text-[#3E2723]" />
                  <span>Matériel fourni</span>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <a 
                  href={getWhatsAppMessage('Séance Unité', '15 000 FCA')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center rounded-full bg-[#3E2723] text-white font-semibold text-sm hover:opacity-85 transition-all"
                >
                  Réserver
                </a>
              </div>
            </motion.div>

            {/* Card 3: Performance - Featured (Dark, Bestseller) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#3E2723] rounded-[20px] p-6 flex flex-col relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5F0E8] text-[#3E2723] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Bestsellers
              </div>
              <div className="mb-6 mt-2">
                <h3 className="text-xl font-bold text-white mb-1">Performance</h3>
                <p className="text-[#E6D5C3] text-sm">Progression régulière</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/70">4 Séances <span className="text-white/50">(1 mois)</span></span>
                  <span className="text-base font-bold text-white">50 000 FCA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/70">8 Séances <span className="text-white/50">(2 mois)</span></span>
                  <span className="text-base font-bold text-white">80 000 FCA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white font-bold">12 Séances <span className="text-white/70">(3 mois)</span></span>
                  <span className="text-lg font-bold text-white">120 000 FCA</span>
                </div>
              </div>
              <div className="space-y-2 mb-2">
                <div className="flex items-center gap-2 text-xs text-[#E6D5C3]">
                  <Check size={14} className="text-[#E6D5C3]" />
                  <span>+2 Self Practice offerts</span>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <a 
                  href={getWhatsAppMessage('Abonnement Performance', '120 000 FCA')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center rounded-full bg-[#E6D5C3] text-[#3E2723] font-semibold text-sm hover:opacity-85 transition-all"
                >
                  S'abonner
                </a>
              </div>
            </motion.div>

            {/* Card 4: Elite */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#8D7B68] rounded-[20px] p-6 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">Elite</h3>
                <p className="text-[#E6D5C3] text-sm">Sport + Pole</p>
              </div>
              <div className="mb-6">
                <span className="text-2xl font-bold text-white">80 000 FCA</span>
                <span className="text-xs text-white/60 ml-2">(1 mois)</span>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Check size={16} className="text-[#E6D5C3]" />
                  <span>Accès illimité salle</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Check size={16} className="text-[#E6D5C3]" />
                  <span>4 séances Pole incluses</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Check size={16} className="text-[#E6D5C3]" />
                  <span>Sans coach</span>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <a 
                  href={getWhatsAppMessage('Elite Package', '80 000 FCA')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center rounded-full border border-white text-white font-semibold text-sm hover:bg-white hover:text-[#3E2723] transition-all"
                >
                  Réserver
                </a>
              </div>
            </motion.div>
          </div>

          {/* --- Cours Privés Section --- */}
          <div className="mt-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-3">Cours privés</h2>
                <p className="text-[#5D4E44]">
                  Déjà fait ton cours de découverte ? On te guide sur WhatsApp pour tes prochaines séances.
                </p>
              </div>
              <a 
                href={getWhatsAppMessage('Cours Privés', 'Sur demande')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3E2723] text-white px-8 py-3 rounded-full font-semibold hover:opacity-85 transition-all shrink-0"
              >
                Devis
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};