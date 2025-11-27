import React from 'react';
import Link from 'next/link';
import { MapPin, Check, ArrowRight, Phone } from 'lucide-react';
import type { HeroVilleSectionProps } from './types';

export const HeroVilleSection = ({
  city,
  department,
  departmentNumber,
  description,
  phoneNumber,
  benefits,
  population,
}: HeroVilleSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-blue-600 transition">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/villes" className="hover:text-blue-600 transition">
              Nos Villes
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{city}</span>
          </div>
        </nav>

        {/* Badge Location */}
        <div className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium mb-6">
          <MapPin className="w-4 h-4 mr-2" />
          {department} ({departmentNumber})
        </div>

        {/* 2 COLONNES : Contenu gauche + Card droite */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* COLONNE GAUCHE - Contenu Hero */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Menuisier à <span className="text-blue-600">{city}</span>
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => {
                  const formSection = document.getElementById('contact-form');
                  formSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition"
              >
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <a 
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="flex items-center justify-center bg-white border-2 border-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:border-blue-500 transition"
              >
                <Phone className="w-4 h-4 mr-2 text-blue-600" />
                {phoneNumber}
              </a>
            </div>
          </div>

          {/* COLONNE DROITE - Card Pourquoi choisir */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Pourquoi choisir Segment C Menuiserie à {city} ?
              </h2>
              <ul className="space-y-4 mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="rounded-full bg-blue-100 p-1 mr-3 mt-0.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                <span className="text-sm text-gray-600">Population</span>
                <span className="text-lg font-bold text-gray-900">{population}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};