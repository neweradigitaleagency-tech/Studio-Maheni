import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentIndex = selectedIndex !== null ? selectedIndex : -1;
  const selectedImage = currentIndex >= 0 ? images[currentIndex] : null;

  const goToPrevious = () => {
    setSelectedIndex((prev) => prev === null ? 0 : prev === 0 ? images.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setSelectedIndex((prev) => prev === null ? 0 : prev === images.length - 1 ? 0 : prev + 1);
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-bg text-brand-primary">
      {/* --- Gallery Section --- */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-secondary/5 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 mb-16 relative z-10"
        >
          <SectionTitle eyebrow="L'univers Maheni" title="Galerie" centered />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-brand-primary/60 max-w-lg mx-auto mt-6"
          >
            Aperçu de nos cours, de nos élèves et de l'ambiance chaleureuse du studio. Cliquez sur une image pour l'agrandir.
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="aspect-square sm:aspect-[3/4] rounded-xl sm:rounded-2xl lg:rounded-[24px] overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl border border-brand-primary/5 transition-shadow duration-300 relative"
                onClick={() => setSelectedIndex(i)}
              >
                <motion.img
                  src={img}
                  alt={`Gallery ${i}`}
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent"
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
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Navigation buttons */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 sm:p-2 z-10 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={32} className="sm:w-10 sm:h-10" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 sm:p-2 z-10 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={40} />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setSelectedIndex(null)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={32} />
            </motion.button>

            {/* Main image */}
            <motion.img
              key={currentIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-white/50 text-sm"
            >
              {currentIndex + 1} / {images.length}
            </motion.div>

            {/* Thumbnails */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 flex gap-2 overflow-x-auto max-w-full px-4 pb-4"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, i) => (
                <motion.button
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    i === currentIndex ? 'border-brand-secondary scale-110 shadow-lg shadow-brand-secondary/50' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

