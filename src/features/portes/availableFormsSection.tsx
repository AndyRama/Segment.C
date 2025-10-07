"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const AvailableFormsSection = () => {
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
    {
      id: '3-vantaux',
      name: 'PORTE 3 VANTAUX + 1 SEMI-FIXE + 1 VANTAIL + 1 FIXE EN BATTANT',
      icon: (
        <svg viewBox="0 0 220 180" className="w-full h-full">
          <rect x="10" y="10" width="55" height="160" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="70" y="10" width="70" height="160" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="125" y1="90" x2="135" y2="90" stroke="#000000" strokeWidth="2" />
          <circle cx="130" cy="90" r="3" fill="#000000" />
          <rect x="145" y="10" width="65" height="160" fill="none" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Les formes disponibles pour ce modèle
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {forms.map((form) => (
            <button
              key={form.id}
              onClick={() => setSelectedForm(form.id)}
              className={`relative p-6 bg-white border-2 border-rounded-md transition-all hover:border-green-500 group ${
                selectedForm === form.id ? 'border-green-500 border-rounded-md shadow-lg' : 'border-gray-200'
              }`}
            >
              {selectedForm === form.id && (
                <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
                  <Check size={16} />
                </div>
              )}
              
              <div className="h-40 flex items-center justify-center mb-4">
                {form.icon}
              </div>
              
              <p className="text-xs font-semibold text-gray-900 text-left md:text-center uppercase leading-tight">
                {form.name}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-8 p-6 bg-white border-2 border-green-200 rounded-md">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Configuration personnalisée
              </p>
              <p className="text-sm text-gray-600">
                Vous avez besoin d'une configuration spécifique ? Contactez-nous pour discuter de vos besoins.
                Toutes nos portes peuvent être adaptées selon vos dimensions et exigences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableFormsSection;