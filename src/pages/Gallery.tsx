import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { SectionTitle } from '../components/Shared';

const images = [
  'https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776002441/Maheni_AKEM5808_fepwnu.webp',
  'https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776002435/_the_blackgravity_1_e80dws.jpg',
  'https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776002434/_the_blackgravity_5_x308rw.jpg',
  'https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776002434/IMG_6928_k1i10n.jpg',
  'https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776002434/_the_blackgravity_4_ew8ndn.jpg',
  'https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776002434/_the_blackgravity_2_rwcced.jpg',
  'https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776002434/_the_blackgravity_3_oycx7r.jpg',
  'https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776002433/03d5abf1-b11b-41c2-b4e4-05f16edda558_lh7zpj.jpg',
  'https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776002433/Maheni_AKEM5685_edited_qm7qwg.jpg',
  'https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776002430/IMG_7084_1_qjj0ls.jpg',
  'https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776002429/IMG_6962_dcncg5.jpg',
  'https://res.cloudinary.com/dhwo0kzbs/image/upload/q_auto/f_auto/v1776002428/IMG_1908_sw8fpg.jpg',
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-24 min-h-screen bg-brand-bg text-brand-primary">
      {/* --- Gallery Section --- */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <SectionTitle eyebrow="L'univers Maheni" title="Galerie" centered />
          <p className="text-center text-brand-primary/60 max-w-lg mx-auto mt-6">
            Aperçu de nos cours, de nos élèves et de l'ambiance chaleureuse du studio. Cliquez sur une image pour l'agrandir.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="aspect-[3/4] rounded-[24px] overflow-hidden cursor-pointer group shadow-sm border border-brand-primary/5"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Selected" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
