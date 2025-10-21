"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const AvailableFormsMiniature = () => {
  const [selectedForm, setSelectedForm] = useState('chassis-1-vantail-oscillo-battant');

  const forms = [
    {
      id: 'chassis-1-vantail-oscillo-battant',
      name: 'CHÂSSIS 1 VANTAIL OSCILLO-BATTANT',
      icon: (
        <svg viewBox="0 0 120 180" className="w-full h-full">
          <rect x="10" y="10" width="100" height="160" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="60" y1="10" x2="60" y2="170" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <path d="M 85 80 Q 95 85 85 90" fill="none" stroke="#000000" strokeWidth="2" />
          <path d="M 60 50 L 70 55 L 60 60" fill="#000000" />
        </svg>
      )
    },
    {
      id: 'chassis-fixe',
      name: 'CHÂSSIS FIXE',
      icon: (
        <svg viewBox="0 0 120 180" className="w-full h-full">
          <rect x="10" y="10" width="100" height="160" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="60" y1="10" x2="60" y2="170" stroke="#000000" strokeWidth="1" />
          <line x1="10" y1="90" x2="110" y2="90" stroke="#000000" strokeWidth="1" />
        </svg>
      )
    },
    {
      id: 'fenetre-1-vantail',
      name: 'FENÊTRE 1 VANTAIL',
      icon: (
        <svg viewBox="0 0 120 180" className="w-full h-full">
          <rect x="10" y="10" width="100" height="160" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="60" y1="10" x2="60" y2="170" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <path d="M 85 80 Q 95 85 85 90" fill="none" stroke="#000000" strokeWidth="2" />
          <circle cx="90" cy="85" r="3" fill="#000000" />
        </svg>
      )
    },
    {
      id: 'fenetre-2-vantaux-oscillo-battant',
      name: 'FENÊTRE 2 VANTAUX OSCILLO-BATTANT',
      icon: (
        <svg viewBox="0 0 180 180" className="w-full h-full">
          <rect x="10" y="10" width="160" height="160" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="90" y1="10" x2="90" y2="170" stroke="#000000" strokeWidth="2" />
          <line x1="50" y1="10" x2="50" y2="170" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="130" y1="10" x2="130" y2="170" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <path d="M 65 80 Q 75 85 65 90" fill="none" stroke="#000000" strokeWidth="2" />
          <path d="M 145 80 Q 155 85 145 90" fill="none" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'porte-fenetre-1-vantail',
      name: 'PORTE-FENÊTRE 1 VANTAIL',
      icon: (
        <svg viewBox="0 0 120 200" className="w-full h-full">
          <rect x="10" y="10" width="100" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="60" y1="10" x2="60" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="10" y1="100" x2="110" y2="100" stroke="#000000" strokeWidth="2" />
          <path d="M 85 80 Q 95 85 85 90" fill="none" stroke="#000000" strokeWidth="2" />
          <circle cx="90" cy="130" r="3" fill="#000000" />
        </svg>
      )
    },
    {
      id: 'porte-fenetre-2-vantaux',
      name: 'PORTE-FENÊTRE 2 VANTAUX',
      icon: (
        <svg viewBox="0 0 180 200" className="w-full h-full">
          <rect x="10" y="10" width="160" height="180" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="90" y1="10" x2="90" y2="190" stroke="#000000" strokeWidth="2" />
          <line x1="50" y1="10" x2="50" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="130" y1="10" x2="130" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
          <path d="M 65 90 Q 75 95 65 100" fill="none" stroke="#000000" strokeWidth="2" />
          <path d="M 115 90 L 105 95 L 115 100" fill="none" stroke="#000000" strokeWidth="2" />
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
        <span>Toutes nos fenêtres peuvent être adaptées selon vos dimensions et exigences</span>
      </p>
    </div>
  );
};

export default AvailableFormsMiniature;