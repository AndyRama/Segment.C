'use client';

import React, { useState } from 'react';
import { MessageSquare, Phone } from 'lucide-react'; // Utilisation de MessageSquare pour le logo WhatsApp

/**
 * Composant de bouton flottant pour le contact WhatsApp.
 * Il s'étend au survol pour afficher le numéro et le texte d'incitation.
 */

// Configuration des informations WhatsApp
const WHATSAPP_INFO = {
  phoneNumber: "+33 6 12 34 56 78", // Remplacer par votre numéro de téléphone (avec code pays)
  defaultMessage: "Bonjour, je souhaiterais en savoir plus sur vos services pose de menuiserie.", // Message pré-rempli
  whatsappLink: "https://wa.me/33612345678?text=Bonjour%2C%20je%20souhaiterais%20en%20savoir%20plus%20sur%20vos%20services%20Menuiseire." // Lien WA généré
};

export default function WhatsAppContactButton() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <a
      href={WHATSAPP_INFO.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      // Positionnement fixe en bas à droite, couleur verte WhatsApp
      className="fixed bottom-10 right-4 bg-green-500 hover:bg-green-600 text-white shadow-lg rounded-full p-4 flex items-center gap-3 transition-all duration-500 ease-in-out hover:shadow-xl z-40 cursor-pointer"
      aria-label="Contacter Segment.C par WhatsApp"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex items-center gap-2">
        {/* Icône WhatsApp/Message */}
        <MessageSquare 
          size={24} 
          className="w-6 h-6 flex-shrink-0 fill-white" 
          style={{ transform: 'rotateY(180deg)' }} // Pour simuler la forme de l'icône WA
        />
        
        {/* Contenu affiché lors du survol */}
        <div 
          className={`text-base font-medium whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-w-[250px] opacity-100 ml-1' : 'max-w-0 opacity-0 ml-0'
          }`}
        >
          {WHATSAPP_INFO.phoneNumber}
        </div>
      </div>
      
      {/* Texte d'incitation (seulement si déployé) */}
      <span 
        className={`text-sm text-white/90 whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-w-[200px] opacity-100 ml-1' : 'max-w-0 opacity-0 ml-0'
        } hidden sm:inline-block`}
      >
        Envoyer un message
      </span>

      <style jsx>{`
        /* Animation CSS pour un effet subtil */
        @keyframes pulse-green {
          0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7); } /* green-400 */
          70% { box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
        }
        
        .whatsapp-pulse {
          animation: pulse-green 2s infinite;
        }
        
        /* Vous pouvez ajouter la classe 'whatsapp-pulse' au 'a' pour l'effet d'appel à l'action. */
      `}</style>
    </a>
  );
}