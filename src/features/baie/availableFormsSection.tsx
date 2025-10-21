"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const AvailableFormsSection = () => {
  const [selectedForm, setSelectedForm] = useState('baie-2-vantaux-coulissants');

  const forms = [
    // Baies vitrées coulissantes
    {
      id: 'baie-2-vantaux-coulissants',
      name: 'BAIE VITRÉE 2 VANTAUX COULISSANTS',
      icon: (
        <svg viewBox="0 0 180 200" className="w-full h-full">
          <rect x="10" y="10" width="160" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="90" y1="10" x2="90" y2="190" stroke="#000000" strokeWidth="2" />
          <rect x="15" y="15" width="70" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <rect x="95" y="15" width="70" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <path d="M 45 95 L 55 95 M 50 90 L 50 100" stroke="#000000" strokeWidth="2" />
          <path d="M 125 95 L 135 95 M 130 90 L 130 100" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'baie-3-vantaux-coulissants',
      name: 'BAIE VITRÉE 3 VANTAUX COULISSANTS',
      icon: (
        <svg viewBox="0 0 240 200" className="w-full h-full">
          <rect x="10" y="10" width="220" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="83" y1="10" x2="83" y2="190" stroke="#000000" strokeWidth="2" />
          <line x1="157" y1="10" x2="157" y2="190" stroke="#000000" strokeWidth="2" />
          <rect x="15" y="15" width="63" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <rect x="88" y="15" width="64" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <rect x="162" y="15" width="63" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <path d="M 43 95 L 53 95 M 48 90 L 48 100" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'baie-4-vantaux-coulissants',
      name: 'BAIE VITRÉE 4 VANTAUX COULISSANTS',
      icon: (
        <svg viewBox="0 0 240 200" className="w-full h-full">
          <rect x="10" y="10" width="220" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="65" y1="10" x2="65" y2="190" stroke="#000000" strokeWidth="2" />
          <line x1="120" y1="10" x2="120" y2="190" stroke="#000000" strokeWidth="2" />
          <line x1="175" y1="10" x2="175" y2="190" stroke="#000000" strokeWidth="2" />
          <rect x="15" y="15" width="45" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <rect x="70" y="15" width="45" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <rect x="125" y="15" width="45" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <rect x="180" y="15" width="45" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
        </svg>
      )
    },
    // Baies vitrées à galandage
    {
      id: 'baie-galandage-1-vantail',
      name: 'BAIE VITRÉE À GALANDAGE 1 VANTAIL',
      icon: (
        <svg viewBox="0 0 180 200" className="w-full h-full">
          <rect x="10" y="10" width="160" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="10" y="10" width="50" height="180" fill="#e5e5e5" stroke="#000000" strokeWidth="1" />
          <rect x="65" y="15" width="100" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <path d="M 110 95 L 100 95" stroke="#000000" strokeWidth="2" />
          <path d="M 105 90 L 105 100" stroke="#000000" strokeWidth="2" />
          <text x="30" y="100" fontSize="10" fill="#666">MUR</text>
        </svg>
      )
    },
    {
      id: 'baie-galandage-2-vantaux',
      name: 'BAIE VITRÉE À GALANDAGE 2 VANTAUX',
      icon: (
        <svg viewBox="0 0 240 200" className="w-full h-full">
          <rect x="10" y="10" width="220" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="10" y="10" width="40" height="180" fill="#e5e5e5" stroke="#000000" strokeWidth="1" />
          <rect x="190" y="10" width="40" height="180" fill="#e5e5e5" stroke="#000000" strokeWidth="1" />
          <rect x="55" y="15" width="65" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <rect x="125" y="15" width="60" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <path d="M 85 95 L 75 95 M 80 90 L 80 100" stroke="#000000" strokeWidth="2" />
          <path d="M 155 95 L 165 95 M 160 90 L 160 100" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    },
    // Baies vitrées à frappe
    {
      id: 'baie-2-vantaux-ouvrant-frappe',
      name: 'BAIE VITRÉE 2 VANTAUX OUVRANT À LA FRANÇAISE',
      icon: (
        <svg viewBox="0 0 180 200" className="w-full h-full">
          <rect x="10" y="10" width="160" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="90" y1="10" x2="90" y2="190" stroke="#000000" strokeWidth="2" />
          <line x1="50" y1="10" x2="50" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="130" y1="10" x2="130" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <path d="M 65 95 Q 75 100 65 105" fill="none" stroke="#000000" strokeWidth="2" />
          <path d="M 115 95 L 105 100 L 115 105" fill="none" stroke="#000000" strokeWidth="2" />
          <circle cx="70" cy="100" r="3" fill="#000000" />
          <circle cx="110" cy="100" r="3" fill="#000000" />
        </svg>
      )
    },
    {
      id: 'baie-3-vantaux-ouvrant-frappe',
      name: 'BAIE VITRÉE 3 VANTAUX OUVRANT À LA FRANÇAISE',
      icon: (
        <svg viewBox="0 0 240 200" className="w-full h-full">
          <rect x="10" y="10" width="220" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="83" y1="10" x2="83" y2="190" stroke="#000000" strokeWidth="2" />
          <line x1="157" y1="10" x2="157" y2="190" stroke="#000000" strokeWidth="2" />
          <line x1="47" y1="10" x2="47" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="120" y1="10" x2="120" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="193" y1="10" x2="193" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <path d="M 60 95 Q 70 100 60 105" fill="none" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    },
    // Baies vitrées pliantes
    {
      id: 'baie-pliante-3-vantaux',
      name: 'BAIE VITRÉE PLIANTE 3 VANTAUX',
      icon: (
        <svg viewBox="0 0 240 200" className="w-full h-full">
          <rect x="10" y="10" width="220" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <path d="M 83 10 L 73 30 L 83 50" fill="none" stroke="#000000" strokeWidth="1.5" />
          <path d="M 157 10 L 147 30 L 157 50" fill="none" stroke="#000000" strokeWidth="1.5" />
          <line x1="83" y1="50" x2="83" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="157" y1="50" x2="157" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <circle cx="83" cy="25" r="4" fill="#000000" />
          <circle cx="157" cy="25" r="4" fill="#000000" />
        </svg>
      )
    },
    {
      id: 'baie-pliante-4-vantaux',
      name: 'BAIE VITRÉE PLIANTE 4 VANTAUX',
      icon: (
        <svg viewBox="0 0 240 200" className="w-full h-full">
          <rect x="10" y="10" width="220" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <path d="M 65 10 L 55 30 L 65 50" fill="none" stroke="#000000" strokeWidth="1.5" />
          <path d="M 120 10 L 110 30 L 120 50" fill="none" stroke="#000000" strokeWidth="1.5" />
          <path d="M 175 10 L 165 30 L 175 50" fill="none" stroke="#000000" strokeWidth="1.5" />
          <line x1="65" y1="50" x2="65" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="120" y1="50" x2="120" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="175" y1="50" x2="175" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
        </svg>
      )
    },
    {
      id: 'baie-pliante-6-vantaux',
      name: 'BAIE VITRÉE PLIANTE 6 VANTAUX',
      icon: (
        <svg viewBox="0 0 300 200" className="w-full h-full">
          <rect x="10" y="10" width="280" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <path d="M 56 10 L 46 30 L 56 50" fill="none" stroke="#000000" strokeWidth="1.5" />
          <path d="M 103 10 L 93 30 L 103 50" fill="none" stroke="#000000" strokeWidth="1.5" />
          <path d="M 150 10 L 140 30 L 150 50" fill="none" stroke="#000000" strokeWidth="1.5" />
          <path d="M 197 10 L 187 30 L 197 50" fill="none" stroke="#000000" strokeWidth="1.5" />
          <path d="M 244 10 L 234 30 L 244 50" fill="none" stroke="#000000" strokeWidth="1.5" />
          <circle cx="56" cy="25" r="3" fill="#000000" />
          <circle cx="103" cy="25" r="3" fill="#000000" />
          <circle cx="150" cy="25" r="3" fill="#000000" />
        </svg>
      )
    },
    // Baies vitrées mixtes
    {
      id: 'baie-mixte-coulissant-fixe',
      name: 'BAIE VITRÉE MIXTE 1 COULISSANT + 1 FIXE',
      icon: (
        <svg viewBox="0 0 180 200" className="w-full h-full">
          <rect x="10" y="10" width="160" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="90" y1="10" x2="90" y2="190" stroke="#000000" strokeWidth="2" />
          <rect x="15" y="15" width="70" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <line x1="95" y1="95" x2="165" y2="95" stroke="#000000" strokeWidth="1" />
          <path d="M 45 95 L 55 95 M 50 90 L 50 100" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'baie-mixte-2-coulissants-1-fixe',
      name: 'BAIE VITRÉE MIXTE 2 COULISSANTS + 1 FIXE',
      icon: (
        <svg viewBox="0 0 240 200" className="w-full h-full">
          <rect x="10" y="10" width="220" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="83" y1="10" x2="83" y2="190" stroke="#000000" strokeWidth="2" />
          <line x1="157" y1="10" x2="157" y2="190" stroke="#000000" strokeWidth="2" />
          <rect x="15" y="15" width="63" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <rect x="88" y="15" width="64" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <line x1="162" y1="95" x2="225" y2="95" stroke="#000000" strokeWidth="1" />
          <path d="M 43 95 L 53 95 M 48 90 L 48 100" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    },
    // Baies vitrées avec soubassement
    {
      id: 'baie-coulissante-soubassement',
      name: 'BAIE VITRÉE COULISSANTE AVEC SOUBASSEMENT',
      icon: (
        <svg viewBox="0 0 180 200" className="w-full h-full">
          <rect x="10" y="10" width="160" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="10" y1="140" x2="170" y2="140" stroke="#000000" strokeWidth="2" />
          <line x1="90" y1="10" x2="90" y2="140" stroke="#000000" strokeWidth="2" />
          <rect x="15" y="15" width="70" height="120" fill="none" stroke="#666666" strokeWidth="1.5" />
          <rect x="95" y="15" width="70" height="120" fill="none" stroke="#666666" strokeWidth="1.5" />
          <rect x="15" y="145" width="150" height="40" fill="#cccccc" stroke="#666666" strokeWidth="1" />
        </svg>
      )
    },
    // Baies vitrées à seuil plat
    {
      id: 'baie-seuil-plat-2-vantaux',
      name: 'BAIE VITRÉE À SEUIL PLAT 2 VANTAUX',
      icon: (
        <svg viewBox="0 0 180 200" className="w-full h-full">
          <rect x="10" y="10" width="160" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="90" y1="10" x2="90" y2="190" stroke="#000000" strokeWidth="2" />
          <rect x="15" y="15" width="70" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <rect x="95" y="15" width="70" height="170" fill="none" stroke="#666666" strokeWidth="1.5" />
          <rect x="10" y="185" width="160" height="5" fill="#666666" />
          <path d="M 45 95 L 55 95 M 50 90 L 50 100" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gray-50 py-8 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Toutes les possibilités de baies vitrées
        </h2>
        <p className="text-gray-600 mb-8">
          Découvrez notre gamme complète de baies vitrées : coulissantes, à galandage, pliantes, ouvrantes à la française et configurations mixtes
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {forms.map((form) => (
            <button
              key={form.id}
              onClick={() => setSelectedForm(form.id)}
              className={`relative p-6 bg-white border-2 rounded-lg transition-all hover:border-green-500 hover:shadow-md group cursor-pointer ${
                selectedForm === form.id ? 'border-green-500 shadow-lg' : 'border-gray-200'
              }`}
            >
              {selectedForm === form.id && (
                <div className="absolute top-3 right-3 bg-green-500 text-white rounded-full p-1">
                  <Check size={18} />
                </div>
              )}
              
              <div className="h-44 flex items-center justify-center mb-4">
                {form.icon}
              </div>
              
              <p className="text-xs font-semibold text-gray-900 text-center uppercase leading-tight">
                {form.name}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border-2 border-green-200 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-base font-semibold text-gray-900 mb-2">
                  Configuration sur mesure
                </p>
                <p className="text-sm text-gray-600">
                  Toutes nos baies vitrées peuvent être fabriquées sur mesure selon vos dimensions exactes. 
                  Nous adaptons chaque configuration à vos besoins spécifiques.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white border-2 border-green-200 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-base font-semibold text-gray-900 mb-2">
                  Performances thermiques
                </p>
                <p className="text-sm text-gray-600">
                  Toutes nos baies vitrées bénéficient d'une excellente isolation thermique et acoustique. 
                  Triple vitrage disponible pour une performance énergétique optimale.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Besoin d'aide pour choisir ?
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Nos experts sont à votre disposition pour vous conseiller sur le type de baie vitrée 
            le mieux adapté à votre projet : dimensions, orientation, performances thermiques, budget, etc.
          </p>
          <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableFormsSection;