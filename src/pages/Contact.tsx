import { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { SectionTitle } from '../components/Shared';

export const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      <section id="contact" className="py-12 md:py-16 bg-brand-bg">
        <div className="max-w-[80%] mx-auto px-6">
          <SectionTitle title="Contact" centered />

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-6 order-2 md:order-1">
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

            {/* Right Column - Email Box (20% smaller) */}
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
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

                <form className="space-y-4" onSubmit={handleSubmit}>
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
                    className="w-full bg-brand-primary text-white px-6 py-3 rounded-[12px] font-medium text-sm hover:bg-brand-secondary transition-colors"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};