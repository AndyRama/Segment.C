"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const AvailableFormsMiniatureBaieVitree = () => {
  const [selectedForm, setSelectedForm] = useState('baie-2-vantaux-coulissants');

  const forms = [
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
    },
  ];

  return (
    <div className="pt-6 border-t">
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
        Formes disponibles
      </h3>
      
      <div className="grid grid-cols-3 gap-3">
        {forms.map((form) => (
          <button
            key={form.id}
            onClick={() => setSelectedForm(form.id)}
            className={`relative p-3 bg-white border rounded-md transition-all hover:border-primary ${
              selectedForm === form.id ? 'border-primary shadow-md' : 'border-gray-200'
            }`}
            title={form.name}
          >
            {selectedForm === form.id && (
              <div className="absolute top-1 right-1 bg-primary text-white rounded-full p-0.5">
                <Check size={12} />
              </div>
            )}
            
            <div className="h-20 flex items-center justify-center">
              {form.icon}
            </div>
          </button>
        ))}
      </div>

      <p className="text-xs text-gray-600 mt-3 flex items-start gap-2">
        <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></span>
        <span>Toutes nos baies vitrées peuvent être adaptées selon vos dimensions et exigences</span>
      </p>
    </div>
  );
};

export default AvailableFormsMiniatureBaieVitree;