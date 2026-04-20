import { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Instagram, Music2, CheckCircle, AlertCircle } from 'lucide-react';
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
      <section id="contact" className="py-12 md:py-16">
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