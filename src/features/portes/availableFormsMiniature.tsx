"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const AvailableFormsMiniature = () => {
  const [selectedForm, setSelectedForm] = useState('1-vantail');

  const forms = [
    {
      id: '1-vantail',
      name: 'PORTE 1 VANTAIL',
      icon: (
        <svg viewBox="0 0 120 180" className="w-full h-full">
          <rect x="10" y="10" width="100" height="160" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="95" y1="90" x2="105" y2="90" stroke="#000000" strokeWidth="2" />
          <circle cx="100" cy="90" r="3" fill="#000000" />
        </svg>
      )
    },
    {
      id: '1-vantail-2-fixes-imposte',
      name: 'PORTE 1 VANTAIL AVEC 2 FIXÉS EN DORMANT ET IMPOSTE',
      icon: (
        <svg viewBox="0 0 220 200" className="w-full h-full">
          <rect x="10" y="10" width="200" height="30" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="10" y="45" width="60" height="145" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="75" y="45" width="70" height="145" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="130" y1="117" x2="140" y2="117" stroke="#000000" strokeWidth="2" />
          <circle cx="135" cy="117" r="3" fill="#000000" />
          <rect x="150" y="45" width="60" height="145" fill="none" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: '1-vantail-fixe-semi-fixe',
      name: 'PORTE 1 VANTAIL AVEC FIXÉ OU SEMI-FIXE',
      icon: (
        <svg viewBox="0 0 180 180" className="w-full h-full">
          <rect x="10" y="10" width="70" height="160" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="65" y1="90" x2="75" y2="90" stroke="#000000" strokeWidth="2" />
          <circle cx="70" cy="90" r="3" fill="#000000" />
          <rect x="85" y="10" width="85" height="160" fill="none" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: '1-vantail-fixes-lateraux',
      name: 'PORTE 1 VANTAIL AVEC FIXÉS LATÉRAUX',
      icon: (
        <svg viewBox="0 0 220 180" className="w-full h-full">
          <rect x="10" y="10" width="50" height="160" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="65" y="10" width="90" height="160" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="140" y1="90" x2="150" y2="90" stroke="#000000" strokeWidth="2" />
          <circle cx="145" cy="90" r="3" fill="#000000" />
          <rect x="160" y="10" width="50" height="160" fill="none" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: '1-vantail-imposte',
      name: 'PORTE 1 VANTAIL AVEC IMPOSTE',
      icon: (
        <svg viewBox="0 0 120 200" className="w-full h-full">
          <rect x="10" y="10" width="100" height="35" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="10" y="50" width="100" height="140" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="95" y1="120" x2="105" y2="120" stroke="#000000" strokeWidth="2" />
          <circle cx="100" cy="120" r="3" fill="#000000" />
        </svg>
      )
    },
    {
      id: '2-vantaux',
      name: 'PORTE 2 VANTAUX',
      icon: (
        <svg viewBox="0 0 180 180" className="w-full h-full">
          <rect x="10" y="10" width="75" height="160" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="70" y1="90" x2="80" y2="90" stroke="#000000" strokeWidth="2" />
          <circle cx="75" cy="90" r="3" fill="#000000" />
          <rect x="95" y="10" width="75" height="160" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="110" y1="90" x2="100" y2="90" stroke="#000000" strokeWidth="2" />
          <circle cx="105" cy="90" r="3" fill="#000000" />
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
            className={`relative p-3 bg-white border transition-all hover:border-green-500 ${
              selectedForm === form.id ? 'border-green-500 shadow-md' : 'border-gray-200'
            }`}
            title={form.name}
          >
            {selectedForm === form.id && (
              <div className="absolute top-1 right-1 bg-green-500 text-white rounded-full p-0.5">
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
        <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-1 flex-shrink-0"></span>
        <span>Configuration personnalisée disponible sur demande</span>
      </p>
    </div>
  );
};

export default AvailableFormsMiniature;