'use client';

import React, { useState, useCallback } from 'react';
import { X, Star, User, Mail, Phone, MessageSquare, Check } from 'lucide-react';

// Configuration du webhook n8n
const N8N_WEBHOOK_URL = "VOTRE_ENDPOINT_N8N_WEBHOOK_ICI";

type FormData = {
  userType: 'particulier' | 'professionnel';
  name: string;
  email: string;
  phone: string;
  description: string;
  company?: string;
};

// Composant de bouton et modale pour la demande de devis
export default function QuoteRequestModule() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    userType: 'professionnel', // Par défaut
    name: '',
    email: '',
    phone: '',
    description: '',
    company: '',
  });

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
    setIsSuccess(false);

    try {
      // Préparation des données pour n8n
      const payload = {
        ...formData,
        // Ajout d'une source pour le suivi dans n8n
        source: 'Demande_Devis_Site_Web_React',
        timestamp: new Date().toISOString(),
      };

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Optionnel: Réinitialiser le formulaire après succès
        // setFormData({ userType: 'professionnel', name: '', email: '', phone: '', description: '', company: '' });
      } else {
        // Gérer les réponses non-OK de n8n ou du serveur
        console.error("Erreur lors de l'envoi du formulaire à n8n:", response.statusText);
        setIsError(true);
      }

    } catch (error) {
      console.error("Erreur réseau ou exception:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Réinitialiser les états lors de la fermeture de la modale pour un nouvel essai
    setIsSuccess(false);
    setIsError(false);
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Sélecteur Particulier / Professionnel */}
      <div className="flex justify-center bg-gray-50 p-1 rounded-lg">
        <button 
          type="button"
          onClick={() => setFormData(p => ({...p, userType: 'particulier'}))}
          className={`flex-1 text-center py-2 text-sm font-medium rounded-lg transition-colors ${
            formData.userType === 'particulier' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Particulier
        </button>
        <button 
          type="button"
          onClick={() => setFormData(p => ({...p, userType: 'professionnel'}))}
          className={`flex-1 text-center py-2 text-sm font-medium rounded-lg transition-colors ${
            formData.userType === 'professionnel' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Professionnel
        </button>
      </div>

      {/* Champs du formulaire */}
      {formData.userType === 'professionnel' && (
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <input 
            type="text" 
            name="company" 
            placeholder="Société (Obligatoire)" 
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
            required
            onChange={handleInputChange} 
            value={formData.company || ''} 
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <input 
            type="text" 
            name="name" 
            placeholder="Nom & Prénom" 
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
            required
            onChange={handleInputChange} 
            value={formData.name} 
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <input 
            type="email" 
            name="email" 
            placeholder="Email (Obligatoire)" 
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
            required
            onChange={handleInputChange} 
            value={formData.email} 
          />
        </div>
      </div>
      
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Téléphone" 
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
          onChange={handleInputChange} 
          value={formData.phone} 
        />
      </div>

      <div className="relative">
        <MessageSquare className="absolute left-3 top-4 size-5 text-gray-400" />
        <textarea 
          name="description" 
          placeholder="Décrivez brièvement votre projet ou vos besoins..." 
          rows={4} 
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 resize-none" 
          required
          onChange={handleInputChange} 
          value={formData.description} 
        />
      </div>

      {/* Bouton de Soumission */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:bg-gray-400"
      >
        {isSubmitting ? (
          <>
            <div className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            Envoi de la demande...
          </>
        ) : (
          <>
            <Star className="size-4" />
            Confirmer la Demande de Devis
          </>
        )}
      </button>

      {/* Texte de confidentialité */}
      <p className="text-center text-xs leading-relaxed text-gray-500">
        Vos données sont utilisées uniquement pour répondre à votre demande.
      </p>
    </form>
  );

  const renderSuccess = () => (
    <div className="text-center p-8 bg-green-50 rounded-lg">
      <Check className="size-16 text-green-600 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Demande Envoyée avec Succès !</h2>
      <p className="text-gray-600 mb-6">
        Merci pour votre intérêt. Notre équipe va analyser votre projet et vous recontacter dans les plus brefs délais.
      </p>
      <button
        onClick={closeModal}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
      >
        Fermer
      </button>
    </div>
  );

  const renderError = () => (
    <div className="text-center p-8 bg-red-50 rounded-lg">
      <X className="size-16 text-red-600 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Erreur d'Envoi</h2>
      <p className="text-gray-600 mb-6">
        Une erreur est survenue lors de l'envoi de votre formulaire. Veuillez réessayer ou nous contacter directement par email.
      </p>
      <button
        onClick={closeModal}
        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
      >
        Fermer
      </button>
    </div>
  );

  return (
    <div className="relative">
      {/* 1. Bouton CTA pour ouvrir la modale (Exemple de style) */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300 flex items-center gap-2"
        aria-label="Ouvrir le formulaire de demande de devis"
      >
        <Star className="size-5 fill-white" />
        Demande de devis
      </button>

      {/* 2. Modale (S'ouvre avec isModalOpen) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-75 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative w-full max-w-lg mx-auto bg-white rounded-xl shadow-2xl transform transition-all duration-300 scale-100">
            
            {/* Bouton de fermeture */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 z-10 p-2"
              aria-label="Fermer le formulaire"
            >
              <X className="size-6" />
            </button>

            <div className="p-8 sm:p-10">
              <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">
                Votre projet commence ici
              </h1>
              <p className="text-gray-500 mb-8 text-center">
                Décrivez-nous votre besoin pour obtenir un devis rapide et gratuit.
              </p>

              {/* Affichage du contenu basé sur l'état */}
              {isSuccess ? renderSuccess() : isError ? renderError() : renderForm()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}