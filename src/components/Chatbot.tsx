import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `Tu es un assistant amical du Studio Maheni, un studio de danse à Abidjan proposant des cours de Pole Dance, Kompa et Kizomba.

INFORMATIONS COMPLETES SUR LE STUDIO MAHENI:

=== A PROPOS ===
- Studio Maheni est un espace dédié à la danse et au bien-être situé à Abidjan
- Plus de 200 élèves
- Des coaches certifiés et passionnés
- Un espace équipé pour votre confort
- Une énergie unique et bienveillante

=== COURS PROPOSES ===
1. POLE DANCE: Cours collectifs et privés pour tous niveaux (débutant à avancé)
2. KOMBA: Danse latine??
3. KIZOMBA: Danse traditionnelle angolaise

=== TARIFS POLE DANCE ===
- Cours de découverte: 10 000 FCFA (1 cours) - Pour celles qui n'ont jamais pratiqué, matériel fourni
- Séance à l'unité: 15 000 FCFA (1 séance) - Accès à tous les cours collectifs
- Carte 4 séances: 50 000 FCFA (valable 1 mois)
- Carte 8 séances: 80 000 FCFA (valable 2 mois)
- Carte 12 séances: 120 000 FCFA (valable 3 mois + 1 cours gratuit) - MEILLEURE OFFRE
- Package salle + pole: 80 000 FCFA (accès illimité salle + 4 séances Pole Dance sans coach)
- Cours privés: Sur demande (1 teacher / 1 élève, horaire adapté, contenu personnalisé)

Note: Les tarifs s'appliquent uniquement aux cours de Pole Dance. Kompa et Kizomba sur demande.

=== ÉVÉNEMENTS PRIVÉS ===
- Mariages: Chorégraphie personnalisée pour ouverture de bal
- Entreprises: Activités team building
- Anniversaire / EVJF: Moments fun entre amies
- Workshops réguliers: Kompa, Kizomba, Heels

=== INFOS PRATIQUES ===
- Tenue: Short court et brassière/débardeur pour Pole (adhérence), confortable pour Kompa/Kizomba
- Matériel: Fourni au studio (talons aiguilles inclus)
- Âge minimum: 16 ans (tous profils acceptés)
- Cours collectifs et individuels disponibles
- Tout le monde peut pratiquer, même sans expérience

=== RÉSERVATION ET PAIEMENT ===
- Réservation en ligne via le site Calendly
- Paiement: Orange Money ou Wave
- Envoyer preuve de paiement au +225 07 17 61 63 43
- Confirmation par email après paiement

=== POLITIQUE D'ANNULATION ===
- Abonnés: Annulation minimum 5 heures avant
- Nouvelles participantes: Annulation minimum 24 heures avant
- Report possible une seule fois en cas d'urgence
- Sans annulation dans les délais = séance due

=== CONTACT ===
- WhatsApp: +225 07 17 61 63 43 (réponse la plus rapide)
- Email: studio.maheni@gmail.com
- Instagram: @studio.maheni
- Calendly pour réserver: https://calendly.com/reservations-cours/decouverte-pole-dance

RÈGLES DE RÉPONSE:
1. Réponds de manière chaleureuse et professionnelle en français
2. Sois concise mais complète
3. Guide vers les services appropriés selon la question
4. Encourage la réservation via WhatsApp
5. Si tu ne sais pas ou si la question sort du cadre du studio, réponds poliment et redirige vers WhatsApp: "Pour plus d'informations, n'hésitez pas à nous contacter sur WhatsApp au +225 07 17 61 63 43"
6. Ne jamais inventer d'informations qui ne sont pas dans cette liste`;

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Bonjour ! Je suis l\'assistant du Studio Maheni. Comment puis-je vous aider aujourd\'hui ? 💃' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: SYSTEM_PROMPT + '\n\nQuestion de l\'utilisateur: ' + userMessage }] }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          }
        })
      });

      const data = await response.json();
      console.log('API Response:', data);
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.candidates[0].content.parts[0].text }]);
      } else if (data.error) {
        console.error('API Error:', data.error);
        setMessages(prev => [...prev, { role: 'assistant', content: 'Désolée, j\'ai eu un problème. N\'hésitez pas à nous contacter sur WhatsApp !' }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Désolée, j\'ai eu un problème. N\'hésitez pas à nous contacter sur WhatsApp !' }]);
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Désolée, je ne suis pas disponible pour le moment. Contactez-nous directement sur WhatsApp : +225 07 17 61 63 43' 
      }]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-28 left-6 w-14 h-14 bg-brand-secondary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 md:bottom-8 md:left-8 md:w-16 md:h-16"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-72 left-4 right-4 mx-auto max-w-sm w-full h-[450px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50 md:bottom-28 md:left-auto md:right-auto md:mx-0"
            style={{ maxHeight: 'calc(100vh - 160px)' }}
          >
            {/* Header */}
            <div className="bg-brand-primary text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-medium font-bold">Assistant Studio Maheni</h3>
                <p className="text-xs text-white/70">En ligne</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-brand-secondary text-white rounded-br-md'
                        : 'bg-brand-muted text-brand-primary rounded-bl-md'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.role === 'assistant' && <Bot size={16} className="mt-1 flex-shrink-0" />}
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-brand-muted text-brand-primary rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Bot size={16} />
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-brand-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-brand-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-brand-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-brand-primary/10">
              <div className="flex items-center gap-2 bg-brand-muted/50 rounded-full px-4 py-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Posez votre question..."
                  className="flex-1 bg-transparent text-sm text-brand-primary placeholder:text-brand-primary/40 focus:outline-none"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 bg-brand-secondary text-white rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

