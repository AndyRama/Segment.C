"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const AvailableFormsMiniature = () => {
  const [selectedType, setSelectedType] = useState('sectionnelle');

  const types = [
    {
      id: 'sectionnelle',
      name: 'PORTE SECTIONNELLE',
      icon: (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          <rect x="20" y="20" width="160" height="30" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="20" y1="35" x2="180" y2="35" stroke="#000000" strokeWidth="1" />
          <rect x="20" y="50" width="160" height="30" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="20" y1="65" x2="180" y2="65" stroke="#000000" strokeWidth="1" />
          <rect x="20" y="80" width="160" height="30" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="20" y1="95" x2="180" y2="95" stroke="#000000" strokeWidth="1" />
          <rect x="20" y="110" width="160" height="30" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="20" y1="125" x2="180" y2="125" stroke="#000000" strokeWidth="1" />
          <rect x="20" y="140" width="160" height="30" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="20" y1="155" x2="180" y2="155" stroke="#000000" strokeWidth="1" />
          <rect x="90" y="150" width="20" height="8" fill="#000000" />
        </svg>
      )
    },
    {
      id: 'basculante',
      name: 'PORTE BASCULANTE',
      icon: (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          <rect x="20" y="20" width="160" height="150" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="20" y1="60" x2="180" y2="60" stroke="#000000" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="#000000" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="20" y1="140" x2="180" y2="140" stroke="#000000" strokeWidth="1" strokeDasharray="5,5" />
          <rect x="90" y="155" width="20" height="8" fill="#000000" />
          <path d="M 100 10 L 100 25 M 95 15 L 100 10 L 105 15" stroke="#666666" strokeWidth="2" fill="none" />
        </svg>
      )
    },
    {
      id: 'enroulable',
      name: 'PORTE ENROULABLE',
      icon: (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          <rect x="20" y="10" width="160" height="25" fill="#cccccc" stroke="#000000" strokeWidth="2" />
          <rect x="20" y="35" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="43" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="51" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="59" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="67" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="75" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="83" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="91" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="99" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="107" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="115" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="123" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="131" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="139" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="147" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="155" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="20" y="163" width="160" height="8" fill="none" stroke="#000000" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'laterale',
      name: 'PORTE LATÉRALE COULISSANTE',
      icon: (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          <rect x="20" y="20" width="120" height="150" fill="none" stroke="#000000" strokeWidth="2" />
          <line x1="60" y1="20" x2="60" y2="170" stroke="#000000" strokeWidth="1" />
          <line x1="100" y1="20" x2="100" y2="170" stroke="#000000" strokeWidth="1" />
          <line x1="20" y1="15" x2="180" y2="15" stroke="#000000" strokeWidth="2" />
          <rect x="145" y="20" width="30" height="150" fill="#eeeeee" stroke="#000000" strokeWidth="2" />
          <path d="M 150 10 L 170 10 M 165 5 L 170 10 L 165 15" stroke="#666666" strokeWidth="2" fill="none" />
        </svg>
      )
    },
    {
      id: 'battante',
      name: 'PORTE BATTANTE 2 VANTAUX',
      icon: (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          <rect x="20" y="20" width="75" height="150" fill="none" stroke="#000000" strokeWidth="2" />
          <circle cx="85" cy="95" r="3" fill="#000000" />
          <line x1="85" y1="95" x2="95" y2="95" stroke="#000000" strokeWidth="2" />
          <rect x="105" y="20" width="75" height="150" fill="none" stroke="#000000" strokeWidth="2" />
          <circle cx="115" cy="95" r="3" fill="#000000" />
          <line x1="115" y1="95" x2="105" y2="95" stroke="#000000" strokeWidth="2" />
          <line x1="100" y1="20" x2="100" y2="170" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'pliante',
      name: 'PORTE PLIANTE',
      icon: (
        <svg viewBox="0 0 200 180" className="w-full h-full">
          <rect x="20" y="20" width="35" height="150" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="55" y="20" width="35" height="150" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="90" y="20" width="35" height="150" fill="none" stroke="#000000" strokeWidth="2" />
          <rect x="125" y="20" width="35" height="150" fill="none" stroke="#000000" strokeWidth="2" />
          <circle cx="55" cy="95" r="4" fill="#000000" />
          <circle cx="90" cy="95" r="4" fill="#000000" />
          <circle cx="125" cy="95" r="4" fill="#000000" />
          <rect x="150" y="90" width="15" height="10" fill="#000000" />
        </svg>
      )
    },
  ];

  return (
    <div className="pt-6 border-t">
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
        Types disponibles
      </h3>
      
      <div className="grid grid-cols-3 gap-3">
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`relative p-3 bg-white border rounded-md transition-all hover:border-primary ${
              selectedType === type.id ? 'border-primary shadow-md' : 'border-gray-200'
            }`}
            title={type.name}
          >
            {selectedType === type.id && (
              <div className="absolute top-1 right-1 bg-primary text-white rounded-full p-0.5">
                <Check size={12} />
              </div>
            )}
            
            <div className="h-20 flex items-center justify-center">
              {type.icon}
            </div>
          </button>
        ))}
      </div>

      <p className="text-xs text-gray-600 mt-3 flex items-start gap-2">
        <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></span>
        <span>Toutes nos portes de garage peuvent être adaptées selon vos dimensions et exigences</span>
      </p>
    </div>
  );
};

export default AvailableFormsMiniature;