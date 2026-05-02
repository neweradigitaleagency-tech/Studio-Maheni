import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ChevronDown } from 'lucide-react';

export const SectionTitle = ({ title, eyebrow, centered = false }: { title: string, eyebrow?: string, centered?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className={`mb-12 ${centered ? 'text-center' : ''}`}
  >
    {eyebrow && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-sm font-medium tracking-widest uppercase text-brand-primary/40 mb-3 inline-block"
      >
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: '2rem' }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="inline-block h-px bg-brand-secondary align-middle mr-3"
        />
        {eyebrow}
      </motion.div>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="text-4xl md:text-5xl font-medium text-brand-primary leading-tight"
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className={`h-px bg-gradient-to-r from-brand-secondary to-transparent mt-4 ${centered ? 'mx-auto w-24' : 'w-16'}`}
    />
  </motion.div>
);

export const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="border-b border-brand-primary/10 py-6"
    >
      <button
        className="w-full flex justify-between items-center text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-brand-primary group-hover:text-brand-secondary transition-colors duration-300">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} className={`transition-colors duration-300 ${isOpen ? 'text-brand-secondary' : 'text-brand-primary/40'}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="pt-4 text-brand-primary/70 leading-relaxed"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

