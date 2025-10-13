"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

const GarageTypesSection = () => {
  const [selectedType, setSelectedType] = useState("sectionnelle");

  const types = [
    {
      id: "sectionnelle",
      name: "PORTE SECTIONNELLE",
      description:
        "Ouverture verticale avec panneaux articulés. Gain de place optimal.",
      icon: (
        <svg viewBox="0 0 200 180" className="h-full w-full">
          {/* Porte sectionnelle fermée */}
          <rect
            x="20"
            y="20"
            width="160"
            height="30"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          />
          <line
            x1="20"
            y1="35"
            x2="180"
            y2="35"
            stroke="#000000"
            strokeWidth="1"
          />
          <rect
            x="20"
            y="50"
            width="160"
            height="30"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          />
          <line
            x1="20"
            y1="65"
            x2="180"
            y2="65"
            stroke="#000000"
            strokeWidth="1"
          />
          <rect
            x="20"
            y="80"
            width="160"
            height="30"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          />
          <line
            x1="20"
            y1="95"
            x2="180"
            y2="95"
            stroke="#000000"
            strokeWidth="1"
          />
          <rect
            x="20"
            y="110"
            width="160"
            height="30"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          />
          <line
            x1="20"
            y1="125"
            x2="180"
            y2="125"
            stroke="#000000"
            strokeWidth="1"
          />
          <rect
            x="20"
            y="140"
            width="160"
            height="30"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          />
          <line
            x1="20"
            y1="155"
            x2="180"
            y2="155"
            stroke="#000000"
            strokeWidth="1"
          />
          {/* Poignée */}
          <rect x="90" y="150" width="20" height="8" fill="#000000" />
        </svg>
      ),
    },
    {
      id: "basculante",
      name: "PORTE BASCULANTE",
      description:
        "Un seul panneau qui bascule vers le haut. Solution économique et robuste.",
      icon: (
        <svg viewBox="0 0 200 180" className="h-full w-full">
          {/* Porte basculante */}
          <rect
            x="20"
            y="20"
            width="160"
            height="150"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          />
          {/* Lignes décoratives */}
          <line
            x1="20"
            y1="60"
            x2="180"
            y2="60"
            stroke="#000000"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
          <line
            x1="20"
            y1="100"
            x2="180"
            y2="100"
            stroke="#000000"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
          <line
            x1="20"
            y1="140"
            x2="180"
            y2="140"
            stroke="#000000"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
          {/* Poignée */}
          <rect x="90" y="155" width="20" height="8" fill="#000000" />
          {/* Flèche de basculement */}
          <path
            d="M 100 10 L 100 25 M 95 15 L 100 10 L 105 15"
            stroke="#666666"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
    {
      id: "enroulable",
      name: "PORTE ENROULABLE",
      description:
        "S'enroule dans un coffre. Gain de place maximal au plafond.",
      icon: (
        <svg viewBox="0 0 200 180" className="h-full w-full">
          {/* Coffre */}
          <rect
            x="20"
            y="10"
            width="160"
            height="25"
            fill="#cccccc"
            stroke="#000000"
            strokeWidth="2"
          />
          {/* Lames enroulables */}
          <rect
            x="20"
            y="35"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="43"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="51"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="59"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="67"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="75"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="83"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="91"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="99"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="107"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="115"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="123"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="131"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="139"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="147"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="155"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <rect
            x="20"
            y="163"
            width="160"
            height="8"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      id: "laterale",
      name: "PORTE LATÉRALE COULISSANTE",
      description:
        "Coulisse latéralement le long du mur. Idéale pour plafond bas.",
      icon: (
        <svg viewBox="0 0 200 180" className="h-full w-full">
          {/* Panneau principal */}
          <rect
            x="20"
            y="20"
            width="120"
            height="150"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          />
          {/* Lignes de panneaux */}
          <line
            x1="60"
            y1="20"
            x2="60"
            y2="170"
            stroke="#000000"
            strokeWidth="1"
          />
          <line
            x1="100"
            y1="20"
            x2="100"
            y2="170"
            stroke="#000000"
            strokeWidth="1"
          />
          {/* Rail */}
          <line
            x1="20"
            y1="15"
            x2="180"
            y2="15"
            stroke="#000000"
            strokeWidth="2"
          />
          {/* Panneau coulissant */}
          <rect
            x="145"
            y="20"
            width="30"
            height="150"
            fill="#eeeeee"
            stroke="#000000"
            strokeWidth="2"
          />
          {/* Flèche de direction */}
          <path
            d="M 150 10 L 170 10 M 165 5 L 170 10 L 165 15"
            stroke="#666666"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
    {
      id: "battante",
      name: "PORTE BATTANTE 2 VANTAUX",
      description:
        "Ouverture vers l'extérieur ou l'intérieur. Style traditionnel.",
      icon: (
        <svg viewBox="0 0 200 180" className="h-full w-full">
          {/* Vantail gauche */}
          <rect
            x="20"
            y="20"
            width="75"
            height="150"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          />
          <circle cx="85" cy="95" r="3" fill="#000000" />
          <line
            x1="85"
            y1="95"
            x2="95"
            y2="95"
            stroke="#000000"
            strokeWidth="2"
          />
          {/* Vantail droit */}
          <rect
            x="105"
            y="20"
            width="75"
            height="150"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          />
          <circle cx="115" cy="95" r="3" fill="#000000" />
          <line
            x1="115"
            y1="95"
            x2="105"
            y2="95"
            stroke="#000000"
            strokeWidth="2"
          />
          {/* Ligne de séparation */}
          <line
            x1="100"
            y1="20"
            x2="100"
            y2="170"
            stroke="#000000"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      id: "pliante",
      name: "PORTE PLIANTE",
      description: "Panneaux qui se replient. Ouverture partielle possible.",
      icon: (
        <svg viewBox="0 0 200 180" className="h-full w-full">
          {/* Panneaux pliants */}
          <rect
            x="20"
            y="20"
            width="35"
            height="150"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          />
          <rect
            x="55"
            y="20"
            width="35"
            height="150"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          />
          <rect
            x="90"
            y="20"
            width="35"
            height="150"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          />
          <rect
            x="125"
            y="20"
            width="35"
            height="150"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          />
          {/* Points de pliage */}
          <circle cx="55" cy="95" r="4" fill="#000000" />
          <circle cx="90" cy="95" r="4" fill="#000000" />
          <circle cx="125" cy="95" r="4" fill="#000000" />
          {/* Poignée */}
          <rect x="150" y="90" width="15" height="10" fill="#000000" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Les types de portes de garage disponibles
        </h2>
        <p className="mb-8 text-gray-600">
          Choisissez le type d'ouverture adapté à votre espace et vos besoins
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {types.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`group relative rounded-lg border-2 bg-white p-6 transition-all hover:border-green-500 ${
                selectedType === type.id
                  ? "border-green-500 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              {selectedType === type.id && (
                <div className="absolute top-3 right-3 rounded-full bg-green-500 p-1 text-white">
                  <Check size={16} />
                </div>
              )}

              <div className="mb-4 flex h-40 items-center justify-center">
                {type.icon}
              </div>

              <h3 className="mb-2 text-sm font-bold tracking-wide text-gray-900 uppercase">
                {type.name}
              </h3>

              <p className="text-xs leading-relaxed text-gray-600">
                {type.description}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-lg border-2 border-green-200 bg-white p-6">
          <div className="flex items-start gap-3">
            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></div>
            <div>
              <p className="mb-1 text-sm font-semibold text-gray-900">
                Besoin d'aide pour choisir ?
              </p>
              <p className="text-sm text-gray-600">
                Nos experts vous conseillent gratuitement pour choisir le type
                de porte de garage le mieux adapté à votre configuration :
                dimensions de l'ouverture, hauteur sous plafond, dégagement
                latéral, et vos préférences d'utilisation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GarageTypesSection;
