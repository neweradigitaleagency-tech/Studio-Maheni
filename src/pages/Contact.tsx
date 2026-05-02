import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { SectionTitle } from '../components/Shared';

export const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;

    if (!email || !email.includes('@')) {
      setEmailError(true);
      setTimeout(() => setEmailError(false), 3000);
      return;
    }

    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 5000);

    window.location.href = `mailto:studio.maheni@gmail.com?subject=${encodeURIComponent(formData.get('subject') as string || '')}&body=${encodeURIComponent(formData.get('message') as string || '')}`;
  };

  return (
    <div className="pt-24 min-h-screen">
      <section id="contact" className="py-12 md:py-16 bg-brand-bg relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[80%] mx-auto px-6 relative z-10"
        >
          <SectionTitle title="Contact" centered />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-[80%] mx-auto px-6 relative z-10"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-2 md:order-1"
            >
              {[
                { icon: Phone, label: 'Téléphone / WhatsApp', value: '+225 07 17 61 63 43', color: 'text-brand-primary' },
                { icon: Mail, label: 'Email', value: 'studio.maheni@gmail.com', color: 'text-brand-primary' },
                { icon: MapPin, label: 'Localisation', value: 'New Gym, Abidjan', link: 'https://maps.app.goo.gl/zFoEkActgKjpkRDj6', color: 'text-brand-secondary' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-brand-primary"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0"
                  >
                    <item.icon size={20} className="text-brand-primary" />
                  </motion.div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-primary/50 block mb-1">{item.label}</span>
                    {item.link ? (
                      <motion.a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                        className="font-medium hover:text-brand-secondary transition-colors inline-block"
                      >
                        {item.value}
                      </motion.a>
                    ) : (
                      <span className="font-medium">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-3 pl-14"
              >
                {[
                  { Icon: FaWhatsapp, href: 'https://chat.whatsapp.com/CUt3PyGxD4u3Fl293fJsIy', label: 'WhatsApp' },
                  { Icon: FaInstagram, href: 'https://www.instagram.com/studio.maheni/', label: 'Instagram' },
                  { Icon: FaTiktok, href: 'https://www.tiktok.com/@studio.maheni?is_from_webapp=1&sender_device=pc', label: 'TikTok' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-brand-primary/10 hover:bg-brand-secondary/20 transition-all"
                  >
                    <social.Icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Email Box (20% smaller) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-[20px] p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/5 rounded-full blur-2xl" />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 mb-6 relative z-10"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                  >
                    <MessageSquare className="text-brand-primary/80" size={20} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-medium text-brand-primary">Envoyez-nous un message</h3>
                </motion.div>

                <AnimatePresence>
                  {emailSent && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-4 p-3 bg-green-50 border border-green-200 rounded-[12px] flex items-center gap-2 text-green-700 text-sm overflow-hidden"
                    >
                       <CheckCircle size={16} />
                       Message envoyé ! Vérifiez votre boîte mail pour le suivi.
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {emailError && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-4 p-3 bg-red-50 border border-red-200 rounded-[12px] flex items-center gap-2 text-red-700 text-sm overflow-hidden"
                    >
                      <AlertCircle size={16} />
                      Veuillez entrer un email valide.
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.form
                  className="space-y-4 relative z-10"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: 'name', label: 'Nom', type: 'text', placeholder: 'Votre nom' },
                      { name: 'email', label: 'Email *', type: 'email', placeholder: 'votre@email.com' }
                    ].map((field, index) => (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <label className="text-[10px] sm:text-xs font-bold text-brand-primary/40 uppercase tracking-widest pl-1 mb-1 block">{field.label}</label>
                        <motion.input
                          whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgba(201, 168, 130, 0.3)' }}
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-4 py-3 rounded-[12px] bg-brand-bg/50 focus:border-brand-primary/30 focus:outline-none focus:ring-1 focus:ring-brand-primary/20 text-sm transition-all duration-300 border border-transparent placeholder:text-brand-primary/30 text-brand-primary font-medium"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {[
                    { name: 'subject', label: 'Sujet', type: 'text', placeholder: 'Sujet' },
                    { name: 'message', label: 'Message *', type: 'textarea', placeholder: 'Votre message...', rows: 3 }
                  ].map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <label className="text-[10px] sm:text-xs font-bold text-brand-primary/40 uppercase tracking-widest pl-1 mb-1 block">{field.label}</label>
                      {field.type === 'textarea' ? (
                        <motion.textarea
                          whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgba(201, 168, 130, 0.3)' }}
                          name={field.name}
                          placeholder={field.placeholder}
                          rows={field.rows}
                          required
                          className="w-full px-4 py-3 rounded-[12px] bg-brand-bg/50 focus:border-brand-primary/30 focus:outline-none focus:ring-1 focus:ring-brand-primary/20 text-sm resize-none transition-all duration-300 border border-transparent placeholder:text-brand-primary/30 text-brand-primary font-medium"
                        />
                      ) : (
                        <motion.input
                          whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgba(201, 168, 130, 0.3)' }}
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-4 py-3 rounded-[12px] bg-brand-bg/50 focus:border-brand-primary/30 focus:outline-none focus:ring-1 focus:ring-brand-primary/20 text-sm transition-all duration-300 border border-transparent placeholder:text-brand-primary/30 text-brand-primary font-medium"
                        />
                      )}
                    </motion.div>
                  ))}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(44, 26, 14, 0.2)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-brand-primary text-white px-6 py-3 rounded-[12px] font-medium text-sm hover:bg-brand-secondary transition-colors mt-2"
                  >
                    Envoyer
                   </motion.button>
                 </motion.form>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};













