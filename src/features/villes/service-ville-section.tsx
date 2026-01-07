'use client';

import React, { useState } from 'react';
import { Check, Send, Phone, Mail, User, MessageSquare, Star } from 'lucide-react';
import type { ServiceVilleSectionProps } from './types';

// Composant de formulaire inline
const ContactFormInline = () => {
  const [userType, setUserType] = useState<'particulier' | 'professionnel'>('particulier');
  const [formData, setFormData] = useState({
    // Champs communs
    name: '',
    email: '',
    phone: '',
    description: '',
    // Champs particuliers
    projectType: 'Test 1',
    // Champs professionnels
    company: '',
    companySize: '1-10 employés',
    sector: 'Test 1',
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

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Préparer les données pour l'envoi
    const dataToSend = {
      clientType: userType,
      nomComplet: formData.name,
      email: formData.email,
      telephone: formData.phone,
      descriptionProjet: formData.description,
      // Champs conditionnels selon le type
      ...(userType === 'particulier' 
        ? { typeProjet: formData.projectType }
        : {
            nomContact: formData.name,
            nomEntreprise: formData.company,
            fonction: formData.position,
            secteurActivite: formData.sector,
            tailleEntreprise: formData.companySize
          }
      )
    };

    // eslint-disable-next-line no-console
    console.log('Form submitted:', dataToSend);
    
    // Simuler l'envoi
    setTimeout(() => {
      setIsSubmitted(false);
      alert('Votre demande a été envoyée ! Nous vous répondrons sous 24h.');
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        description: '',
        projectType: 'Test 1',
        company: '',
        companySize: '1-10 employés',
        sector: 'Test 1',
        position: ''
      });
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
    '1-10 employés',
    '11-50 employés',
    '51-200 employés',
    '201-1000 employés',
    '1000+ employés'
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
    <div className="space-y-4">
      {/* Header with Toggle */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex rounded-lg bg-gray-200 p-1">
          <button
            type="button"
            onClick={() => setUserType('particulier')}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
              userType === 'particulier'
                ? 'bg-green-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`size-2 rounded-full ${userType === 'particulier' ? 'bg-white' : 'bg-green-600'}`}></div>
              Particulier
            </div>
          </button>
          <button
            type="button"
            onClick={() => setUserType('professionnel')}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
              userType === 'professionnel'
                ? 'bg-green-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`size-2 rounded-full ${userType === 'professionnel' ? 'bg-white' : 'bg-green-600'}`}></div>
              Professionnel
            </div>
          </button>
        </div>
      </div>

      {/* Nom complet / Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
              placeholder={userType === 'particulier' ? 'Nom Prénom' : 'Nom du responsable'}
              className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white"
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
              className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white"
              required
            />
          </div>
        </div>
      </div>

      {/* Entreprise (Pro uniquement) */}
      {userType === 'professionnel' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white"
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
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white"
            />
          </div>
        </div>
      )}

      {/* Téléphone et Type/Secteur */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Téléphone
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 size-4 text-gray-400" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="06 12 34 56 78"
              className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white"
            />
          </div>
        </div>

        {/* Type de projet (Particulier) ou Secteur (Pro) */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            {userType === 'particulier' ? 'Type de projet *' : 'Secteur d\'activité *'}
          </label>
          <select
            name={userType === 'particulier' ? 'projectType' : 'sector'}
            value={userType === 'particulier' ? formData.projectType : formData.sector}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
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
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
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
            placeholder="Décrivez votre projet en détail : objectifs, budget approximatif, délais souhaités..."
            rows={4}
            className="w-full resize-none rounded-lg border border-gray-300 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white"
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
            <span>Devis détaillé gratuit sous 24h</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 size-3 shrink-0 text-green-500" />
            <span>Accompagnement et suivi personnalisé</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 size-3 shrink-0 text-green-500" />
            <span>Résultats mesurables et plans adaptés</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 size-3 shrink-0 text-green-500" />
            <span>Garantie de qualité et respect des délais</span>
          </li>
        </ul>
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitted}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-green-700 disabled:bg-green-400"
      >
        {isSubmitted ? (
          <>
            <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="size-4" />
            Envoyer ma demande
          </>
        )}
      </button>

      {/* Footer text */}
      <p className="text-center text-xs leading-relaxed text-gray-500">
        En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe pour votre projet.
      </p>
    </div>
  );
};

export const ServiceVilleSection = ({
  city,
  mainTitle,
  paragraphs,
  services,
  founderName,
  founderTitle,
  founderPhone,
  founderEmail,
  founderImage = 'https://placehold.co/80x80/8B4513/FFFFFF?text=SC',
}: ServiceVilleSectionProps) => {
  return (
    <section className="bg-white py-16" id="contact-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* COLONNE GAUCHE - Contenu + Badges + Services */}
          <div className="space-y-10">
            
            {/* Titre et paragraphes */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {mainTitle}
              </h2>
              {paragraphs.map((p, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Badges 24h et 100% */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-100">
                <p className="text-5xl font-bold text-green-600 mb-2">24h</p>
                <p className="text-sm font-semibold text-gray-900">Réponse garantie</p>
                <p className="text-xs text-gray-600">Devis gratuit et rapide</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-100">
                <p className="text-5xl font-bold text-green-600 mb-2">100%</p>
                <p className="text-sm font-semibold text-gray-900">Satisfaction client</p>
                <p className="text-xs text-gray-600">Travaux garantis</p>
              </div>
            </div>

            {/* Box noire avec services */}
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Nos services à {city}</h3>
              <ul className="space-y-4">
                {services.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="rounded-full bg-green-500/20 p-1 mr-3 flex-shrink-0">
                      <Check className="w-5 h-5 text-green-400" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* COLONNE DROITE - Formulaire + Contact */}
          <div className="space-y-8">
            
            {/* Formulaire */}
            <div id="devis" className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Demandez votre devis gratuit
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Remplissez le formulaire ci-dessous, nous vous répondons sous 24h
              </p>

              <ContactFormInline />
            </div>

            {/* Card Contact */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={founderImage}
                  alt={founderName}
                  className="w-16 h-16 rounded-full border-2 border-green-100 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/80x80/8B4513/FFFFFF?text=SC';
                  }}
                />
                <div>
                  <p className="font-bold text-gray-900">{founderName}</p>
                  <p className="text-sm text-gray-600">{founderTitle}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <h4 className="font-bold text-gray-900">Contactez-nous directement</h4>
                <a 
                  href={`tel:${founderPhone.replace(/\s/g, '')}`}
                  className="flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  {founderPhone}
                </a>
                <a 
                  href={`mailto:${founderEmail}`}
                  className="flex items-center text-green-600 hover:text-green-700 font-medium break-all"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  {founderEmail}
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};