"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PortailTypesSection = () => {
  const [selectedType, setSelectedType] = useState('portail-battant');

  const types = [
    {
      id: 'portail-battant',
      name: 'PORTAIL BATTANT',
      description: 'Ouverture traditionnelle vers l\'intérieur ou l\'extérieur. Style classique et élégant.',
      icon: (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          {/* Vantail gauche */}
          <rect x="20" y="20" width="75" height="150" fill="none" stroke="#000000" strokeWidth="2" />
          <circle cx="85" cy="95" r="3" fill="#000000" />
          <line x1="85" y1="95" x2="95" y2="95" stroke="#000000" strokeWidth="2" />
          {/* Vantail droit */}
          <rect x="105" y="20" width="75" height="150" fill="none" stroke="#000000" strokeWidth="2" />
          <circle cx="115" cy="95" r="3" fill="#000000" />
          <line x1="115" y1="95" x2="105" y2="95" stroke="#000000" strokeWidth="2" />
          {/* Ligne de séparation */}
          <line x1="100" y1="20" x2="100" y2="170" stroke="#000000" strokeWidth="2" />
          {/* Flèches d'ouverture */}
          <path d="M 50 10 L 30 10 M 35 5 L 30 10 L 35 15" stroke="#666666" strokeWidth="2" fill="none" />
          <path d="M 150 10 L 170 10 M 165 5 L 170 10 L 165 15" stroke="#666666" strokeWidth="2" fill="none" />
        </svg>
      )
    },
    {
      id: 'portail-coulissant',
      name: 'PORTAIL COULISSANT',
      description: 'Glisse latéralement sur un rail. Gain de place devant l\'entrée.',
      icon: (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          {/* Panneau principal */}
          <rect x="20" y="20" width="120" height="150" fill="none" stroke="#000000" strokeWidth="2" />
          {/* Lignes de panneaux */}
          <line x1="60" y1="20" x2="60" y2="170" stroke="#000000" strokeWidth="1" />
          <line x1="100" y1="20" x2="100" y2="170" stroke="#000000" strokeWidth="1" />
          {/* Rail */}
          <line x1="20" y1="175" x2="180" y2="175" stroke="#000000" strokeWidth="2" />
          {/* Panneau coulissant */}
          <rect x="145" y="20" width="30" height="150" fill="#eeeeee" stroke="#000000" strokeWidth="2" />
          {/* Flèche de direction */}
          <path d="M 150 10 L 170 10 M 165 5 L 170 10 L 165 15" stroke="#666666" strokeWidth="2" fill="none" />
        </svg>
      )
    },
    {
      id: 'portillon',
      name: 'PORTILLON',
      description: 'Accès piéton assorti au portail. Serrure et ferme-porte intégrés.',
      icon: (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          {/* Portillon */}
          <rect x="60" y="20" width="80" height="150" fill="none" stroke="#000000" strokeWidth="2" />
          {/* Poignée */}
          <circle cx="125" cy="95" r="3" fill="#000000" />
          <line x1="125" y1="95" x2="135" y2="95" stroke="#000000" strokeWidth="2" />
          {/* Lignes décoratives */}
          <line x1="70" y1="40" x2="130" y2="40" stroke="#000000" strokeWidth="1" />
          <line x1="70" y1="70" x2="130" y2="70" stroke="#000000" strokeWidth="1" />
          <line x1="70" y1="100" x2="130" y2="100" stroke="#000000" strokeWidth="1" />
          <line x1="70" y1="130" x2="130" y2="130" stroke="#000000" strokeWidth="1" />
          <line x1="70" y1="160" x2="130" y2="160" stroke="#000000" strokeWidth="1" />
        </svg>
      )
    },
    {
      id: 'cloture-lames',
      name: 'CLÔTURE LAMES HORIZONTALES',
      description: 'Occultation totale avec lames aluminium. Design moderne.',
      icon: (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          {/* Poteaux */}
          <rect x="25" y="20" width="10" height="150" fill="#666666" stroke="#000000" strokeWidth="1" />
          <rect x="165" y="20" width="10" height="150" fill="#666666" stroke="#000000" strokeWidth="1" />
          {/* Lames horizontales */}
          <rect x="40" y="25" width="120" height="15" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="40" y="45" width="120" height="15" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="40" y="65" width="120" height="15" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="40" y="85" width="120" height="15" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="40" y="105" width="120" height="15" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="40" y="125" width="120" height="15" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="40" y="145" width="120" height="15" fill="none" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'cloture-grillage',
      name: 'CLÔTURE GRILLAGE RIGIDE',
      description: 'Solution économique avec panneaux rigides. Sécurité et durabilité.',
      icon: (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          {/* Poteaux */}
          <rect x="25" y="20" width="8" height="150" fill="#666666" stroke="#000000" strokeWidth="1" />
          <rect x="167" y="20" width="8" height="150" fill="#666666" stroke="#000000" strokeWidth="1" />
          {/* Grillage - lignes verticales */}
          <line x1="45" y1="25" x2="45" y2="165" stroke="#000000" strokeWidth="1" />
          <line x1="65" y1="25" x2="65" y2="165" stroke="#000000" strokeWidth="1" />
          <line x1="85" y1="25" x2="85" y2="165" stroke="#000000" strokeWidth="1" />
          <line x1="105" y1="25" x2="105" y2="165" stroke="#000000" strokeWidth="1" />
          <line x1="125" y1="25" x2="125" y2="165" stroke="#000000" strokeWidth="1" />
          <line x1="145" y1="25" x2="145" y2="165" stroke="#000000" strokeWidth="1" />
          <line x1="165" y1="25" x2="165" y2="165" stroke="#000000" strokeWidth="1" />
          {/* Grillage - lignes horizontales */}
          <line x1="35" y1="35" x2="165" y2="35" stroke="#000000" strokeWidth="1" />
          <line x1="35" y1="60" x2="165" y2="60" stroke="#000000" strokeWidth="1" />
          <line x1="35" y1="85" x2="165" y2="85" stroke="#000000" strokeWidth="1" />
          <line x1="35" y1="110" x2="165" y2="110" stroke="#000000" strokeWidth="1" />
          <line x1="35" y1="135" x2="165" y2="135" stroke="#000000" strokeWidth="1" />
          <line x1="35" y1="160" x2="165" y2="160" stroke="#000000" strokeWidth="1" />
          {/* Cadre */}
          <rect x="35" y="25" width="130" height="140" fill="none" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'garde-corps',
      name: 'GARDE-CORPS',
      description: 'Sécurisation terrasse et escalier. Normes NF respectées.',
      icon: (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          {/* Poteaux */}
          <rect x="25" y="60" width="8" height="110" fill="#666666" stroke="#000000" strokeWidth="1" />
          <rect x="95" y="60" width="8" height="110" fill="#666666" stroke="#000000" strokeWidth="1" />
          <rect x="165" y="60" width="8" height="110" fill="#666666" stroke="#000000" strokeWidth="1" />
          {/* Main courante */}
          <rect x="20" y="55" width="160" height="8" fill="none" stroke="#000000" strokeWidth="2" />
          {/* Barres horizontales */}
          <line x1="33" y1="80" x2="97" y2="80" stroke="#000000" strokeWidth="2" />
          <line x1="103" y1="80" x2="167" y2="80" stroke="#000000" strokeWidth="2" />
          <line x1="33" y1="105" x2="97" y2="105" stroke="#000000" strokeWidth="2" />
          <line x1="103" y1="105" x2="167" y2="105" stroke="#000000" strokeWidth="2" />
          <line x1="33" y1="130" x2="97" y2="130" stroke="#000000" strokeWidth="2" />
          <line x1="103" y1="130" x2="167" y2="130" stroke="#000000" strokeWidth="2" />
          <line x1="33" y1="155" x2="97" y2="155" stroke="#000000" strokeWidth="2" />
          <line x1="103" y1="155" x2="167" y2="155" stroke="#000000" strokeWidth="2" />
          {/* Base */}
          <line x1="20" y1="175" x2="180" y2="175" stroke="#000000" strokeWidth="3" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Notre gamme complète pour votre extérieur
        </h2>
        <p className="text-gray-600 mb-8">
          Portails, portillons, clôtures et garde-corps pour sécuriser et embellir votre propriété
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`relative p-6 bg-white border-2 rounded-lg transition-all hover:border-green-500 group ${
                selectedType === type.id ? 'border-green-500 shadow-lg' : 'border-gray-200'
              }`}
            >
              {selectedType === type.id && (
                <div className="absolute top-3 right-3 bg-green-500 text-white rounded-full p-1">
                  <Check size={16} />
                </div>
              )}
              
              <div className="h-40 flex items-center justify-center mb-4">
                {type.icon}
              </div>
              
              <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                {type.name}
              </h3>
              
              <p className="text-xs text-gray-600 leading-relaxed">
                {type.description}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-8 p-6 bg-white border-2 border-green-200 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Besoin de conseils personnalisés ?
              </p>
              <p className="text-sm text-gray-600">
                Nos experts vous accompagnent dans le choix du produit adapté à votre configuration : 
                dimensions, matériaux, motorisation, et installation. Demandez un devis gratuit pour 
                votre projet sur mesure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortailTypesSection;