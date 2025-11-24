'use client';

import React, { useState, useCallback } from 'react';
import { X, Star, User, Check, Briefcase } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

const N8N_WEBHOOK_URL = "VOTRE_ENDPOINT_N8N_WEBHOOK_ICI"; 

type FormData = {
  userType: 'particulier' | 'professionnel';
  name: string;
  email: string;
  phone: string;
  description: string;
  company?: string;
};

type QuoteRequestModuleProps = {
    className?: string;
};

export default function QuoteRequestModule({ className }: QuoteRequestModuleProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
    
  const [formData, setFormData] = useState<FormData>(() => ({
    userType: 'particulier', 
    name: '',
    email: '',
    phone: '',
    description: '',
    company: '',
  }));

  const openModal = () => {
    setIsModalOpen(true);
    setIsSuccess(false); 
    setIsError(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    
    setFormData({
        userType: 'particulier',
        name: '',
        email: '',
        phone: '',
        description: '',
        company: '',
    });
  };

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    
    // --- GESTION DE L'APPEL API / SIMULATION ---
    try {
        // Simuler un appel de 1.5 seconde pour une meilleure UX
        await new Promise(resolve => setTimeout(resolve, 1500)); 

        const isPlaceholder = N8N_WEBHOOK_URL.includes("VOTRE_ENDPOINT_N8N_WEBHOOK_ICI");

        if (!isPlaceholder) {
            // Tentative d'envoi réel
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Erreur de soumission du formulaire');
            }
        } else {
            console.warn("ATTENTION: Le formulaire a été SIMULÉ. Veuillez remplacer 'VOTRE_ENDPOINT_N8N_WEBHOOK_ICI' par votre URL de webhook réelle pour l'envoi des données.");
        }

        setIsSuccess(true);
        
        // Ferme la modale après 2 secondes de succès
        setTimeout(() => {
            closeModal();
        }, 2000);
        
    } catch (error) {
        // Utilisation de la variable 'error' pour le débogage
        console.error("Erreur de soumission du formulaire:", error);
        setIsError(true);

    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className={className ?? buttonVariants({ size: "default" })}
        aria-label="Ouvrir le formulaire de demande de devis"
      >
        <Star className="size-4 mr-2 fill-white" />
        Demande de devis
      </button>

      {/* 2. Modale (S'ouvre avec isModalOpen) */}
      {isModalOpen && (
        <div 
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gray-900/70 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal} 
            role="dialog"
            aria-modal="true"
        >
          <div 
            className="relative w-full mx-auto max-w-lg bg-white rounded-xl shadow-2xl transform transition-all duration-300 overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture lors du clic interne
          >
            
            {/* Bouton de fermeture */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 z-10 p-2 transition-colors"
              aria-label="Fermer le formulaire"
            >
              <X className="size-6" />
            </button>

            <div className="p-6 sm:p-8 md:p-10">
              <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">
                Votre projet commence ici
              </h1>
              <p className="text-gray-500 mb-8 text-center">
                Décrivez-nous votre besoin pour obtenir un devis rapide et gratuit.
              </p>

              {/* Affichage des messages d'état */}
              {isSuccess && (
                <div className="flex flex-col items-center justify-center bg-green-50 p-6 rounded-lg text-center my-4">
                  <Check className="size-10 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold text-green-700">Demande Envoyée!</h3>
                  <p className="text-green-600">
                    Merci! Votre demande a été reçue. Nous vous contacterons très bientôt.
                  </p>
                </div>
              )}

              {isError && (
                <div className="bg-red-50 p-4 rounded-lg text-center my-4">
                  <h3 className="text-lg font-semibold text-red-700">Erreur d'Envoi</h3>
                  <p className="text-red-600">
                    Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.
                  </p>
                </div>
              )}

              {/* Formulaire */}
              {!isSuccess && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Type d'utilisateur (Particulier/Professionnel) */}
                  <div className="flex rounded-lg border border-gray-300 p-1">
                      <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, userType: 'particulier', company: '' }))}
                          className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all ${
                              formData.userType === 'particulier' ? 'bg-green-500 text-white' : 'text-gray-600 hover:bg-gray-50'
                          }`}
                      >
                          <User className="size-4" /> Particulier
                      </button>
                      <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, userType: 'professionnel' }))}
                          className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all ${
                              formData.userType === 'professionnel' ? 'bg-green-500 text-white' : 'text-gray-600 hover:bg-gray-50'
                          }`}
                      >
                          <Briefcase className="size-4" /> Professionnel
                      </button>
                  </div>
                  
                  {/* Champs de base */}
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Votre Nom Complet" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" 
                    required 
                    onChange={handleInputChange} 
                    value={formData.name} 
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email (ex: contact@entreprise.com)" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" 
                    required 
                    onChange={handleInputChange} 
                    value={formData.email} 
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Téléphone" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" 
                    onChange={handleInputChange} 
                    value={formData.phone} 
                  />
                  
                  {/* Champ Société (pour les professionnels) */}
                  {formData.userType === 'professionnel' && (
                    <input 
                      type="text" 
                      name="company"
                      placeholder="Nom de votre Société" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" 
                      required 
                      onChange={handleInputChange} 
                      value={formData.company ?? ''} 
                    />
                  )}

                  <textarea 
                    name="description"
                    placeholder="Décrivez votre projet (ex: Remplacement de 5 fenêtres PVC...)" 
                    rows={4} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none" 
                    required
                    onChange={handleInputChange} 
                    value={formData.description}
                  ></textarea>
                  
                  {/* Bouton de Soumission */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-green-500 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-600 disabled:bg-gray-400 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      "Confirmer la Demande de Devis"
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-4">
                    Vos données sont confidentielles. Nous les utilisons uniquement pour vous recontacter.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}