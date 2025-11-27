'use client';

import React from 'react';
import { Check, Send, Phone, Mail } from 'lucide-react';
import type { ServiceVilleSectionProps } from './types';

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
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // eslint-disable-next-line no-console
    console.log('Form submitted:', Object.fromEntries(formData));
    alert('Votre demande a été envoyée ! Nous vous répondrons sous 24h.');
  };

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
              <div className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-100">
                <p className="text-5xl font-bold text-blue-600 mb-2">24h</p>
                <p className="text-sm font-semibold text-gray-900">Réponse garantie</p>
                <p className="text-xs text-gray-600">Devis gratuit et rapide</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-100">
                <p className="text-5xl font-bold text-blue-600 mb-2">100%</p>
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
                    <div className="rounded-full bg-blue-500/20 p-1 mr-3 flex-shrink-0">
                      <Check className="w-5 h-5 text-blue-400" />
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
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Demandez votre devis gratuit
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Remplissez le formulaire ci-dessous, nous vous répondons sous 24h
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="votre@email.fr"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="06 12 34 56 78"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="clientType" className="block text-sm font-medium text-gray-700 mb-1">
                      Type de client <span className="text-red-500">*</span>
                    </label>
                    <select 
                      id="clientType"
                      name="clientType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option>Particulier</option>
                      <option>Professionnel</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Décrivez votre besoin en menuiserie..."
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer ma demande
                </button>
              </form>
            </div>

            {/* Card Contact */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={founderImage}
                  alt={founderName}
                  className="w-16 h-16 rounded-full border-2 border-blue-100 object-cover"
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
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  {founderPhone}
                </a>
                <a 
                  href={`mailto:${founderEmail}`}
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium break-all"
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