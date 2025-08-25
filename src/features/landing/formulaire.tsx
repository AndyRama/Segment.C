"use client";
import React, { useState } from 'react';
import { Check, Phone, Mail, User, MessageSquare, Star } from 'lucide-react';

export const ContactForm = () => {
  const [userType, setUserType] = useState<'particulier' | 'professionnel'>('particulier');
  const [formData, setFormData] = useState({
    // Champs communs
    name: '',
    email: '',
    phone: '',
    description: '',
    // Champs particuliers
    projectType: 'Menuiserie',
    // Champs professionnels
    company: '',
    companySize: '1-10',
    sector: 'menuiserie',
    position: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(false);
      // Reset form or redirect
    }, 2000);
  };

  const particularProjectTypes = [
    'Test 1',
    'Test 2',
    'Test 3',
    'Test 4',
    'Test 5',
    'Autre'
  ];

  const companySizes = [
    '1-10 employÃ©s',
    '11-50 employÃ©s',
    '51-200 employÃ©s',
    '201-1000 employÃ©s',
    '1000+ employÃ©s'
  ];

  const sectors = [
    'Test 1',
    'Test 2',
    'Test 3',
    'Test 4',
    'Test 5',
    'Test 6',
    'Test 7',
    'Autre'
  ];

  return (
    <div id="devis" className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-6 font-sans shadow-lg">
      {/* Header with Toggle */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex rounded-lg bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => setUserType('particulier')}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
              userType === 'particulier'
                ? 'bg-green-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`size-2 rounded-full ${userType === 'particulier' ? 'bg-white' : 'bg-green-500'}`}></div>
              Particulier
            </div>
          </button>
          <button
            type="button"
            onClick={() => setUserType('professionnel')}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
              userType === 'professionnel'
                ? 'bg-green-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`size-2 rounded-full ${userType === 'professionnel' ? 'bg-white' : 'bg-green-500'}`}></div>
              Professionnel
            </div>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {/* Nom complet / Contact */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              {userType === 'particulier' ? 'Nom complet *' : 'Nom du contact *'}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 size-4 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={userType === 'particulier' ? 'Nom PrÃ©nom' : 'Nom du responsable'}
                className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>
          
          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 size-4 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={userType === 'particulier' ? 'contact@email.com' : 'contact@entreprise.com'}
                className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>
        </div>

        {/* Entreprise (Pro uniquement) */}
        {userType === 'professionnel' && (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Nom de l'entreprise *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Nom de votre entreprise"
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Votre fonction
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="Directeur, Manager..."
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        )}

        {/* TÃ©lÃ©phone et Type/Secteur */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              TÃ©lÃ©phone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 size-4 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="06 12 34 56 78"
                className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Type de projet (Particulier) ou Secteur (Pro) */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              {userType === 'particulier' ? 'Type de projet *' : 'Secteur d\'activitÃ© *'}
            </label>
            <select
              name={userType === 'particulier' ? 'projectType' : 'sector'}
              value={userType === 'particulier' ? formData.projectType : formData.sector}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
              required
            >
              {(userType === 'particulier' ? particularProjectTypes : sectors).map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Taille entreprise (Pro uniquement) */}
        {userType === 'professionnel' && (
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Taille de l'entreprise *
            </label>
            <select
              name="companySize"
              value={formData.companySize}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
              required
            >
              {companySizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        )}

        {/* Description du projet */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Description du projet *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 size-4 text-gray-400" />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="DÃ©crivez votre projet en dÃ©tail : objectifs, budget approximatif, dÃ©lais souhaitÃ©s..."
              rows={4}
              className="w-full resize-none rounded-lg border border-gray-200 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>

        {/* Garanties incluses */}
        <div className="rounded-lg border border-green-100 bg-green-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Check className="size-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Garanties incluses :</span>
          </div>
          <ul className="space-y-1.5 text-sm text-green-600">
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 size-3 shrink-0 text-green-500" />
              <span>Devis dÃ©taillÃ© gratuit sous 24h</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 size-3 shrink-0 text-green-500" />
              <span>Accompagnement et suivi personnalisÃ©</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 size-3 shrink-0 text-green-500" />
              <span>RÃ©sultats mesurables et plans adaptÃ©s</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 size-3 shrink-0 text-green-500" />
              <span>Garantie de qualitÃ© et respect des dÃ©lais</span>
            </li>
          </ul>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitted}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-3 font-medium text-white transition-all duration-200 hover:bg-green-600 disabled:bg-green-400"
        >
          {isSubmitted ? (
            <>
              <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Envoi en cours...
            </>
          ) : (
            <>
              <Star className="size-4" />
              Recevoir mon devis gratuit
            </>
          )}
        </button>

        {/* Footer text */}
        <p className="text-center text-xs leading-relaxed text-gray-500">
          En soumettant ce formulaire, vous acceptez d'Ãªtre contactÃ© par notre Ã©quipe pour votre projet.
        </p>
      </div>
    </div>
  );
};