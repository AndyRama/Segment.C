'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Users } from 'lucide-react';
import {
  saintJeanDIllacData,
  capFerretData,
  merignacData,
  bordeauxData,
  bouscatData,
  talenceData,
  pessacData,
  cestasData,
  gradignanData,
  arcachonData,
  laTesteData,
  andernosData,
  biganosData,
  martignasData,
  saintMedardData,
  eysinesData,
  type VilleData,
} from '@/features/villes/data';

// Type pour une ville avec son slug
type VilleWithSlug = {
  slug: string;
  data: VilleData;
};

// Liste complète des villes avec leurs slugs
const villesList: VilleWithSlug[] = [
  { slug: 'saint-jean-d-illac', data: saintJeanDIllacData },
  { slug: 'cap-ferret', data: capFerretData },
  { slug: 'merignac', data: merignacData },
  { slug: 'bordeaux', data: bordeauxData },
  { slug: 'le-bouscat', data: bouscatData },
  { slug: 'talence', data: talenceData },
  { slug: 'pessac', data: pessacData },
  { slug: 'cestas', data: cestasData },
  { slug: 'gradignan', data: gradignanData },
  { slug: 'arcachon', data: arcachonData },
  { slug: 'la-teste-de-buch', data: laTesteData },
  { slug: 'andernos-les-bains', data: andernosData },
  { slug: 'biganos', data: biganosData },
  { slug: 'martignas-sur-jalle', data: martignasData },
  { slug: 'saint-medard-en-jalles', data: saintMedardData },
  { slug: 'eysines', data: eysinesData },
];

export default function VillesListPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-green-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Nos Villes d'Intervention
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Segment C Menuiserie intervient dans toute la Gironde (33) pour vos travaux de menuiserie. 
              Découvrez nos services dans votre ville.
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-green-100">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">16 villes couvertes en Gironde</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid des villes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villesList.map(({ slug, data }) => (
            <Link
              key={slug}
              href={`/villes/${slug}`}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 transform hover:-translate-y-1"
            >
              {/* Header de la card */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {data.hero.city}
                    </h2>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span>{data.hero.department} ({data.hero.departmentNumber})</span>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-green-600 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </div>
                
                {/* Population badge */}
                <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                  <Users className="w-4 h-4 text-green-600" />
                  {data.hero.population}
                </div>
              </div>

              {/* Contenu de la card */}
              <div className="p-6 space-y-4">
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {data.hero.description}
                </p>

                {/* Avantages (2 premiers) */}
                <div className="space-y-2">
                  {data.hero.benefits.slice(0, 2).map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="rounded-full bg-green-100 p-0.5 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                  {data.hero.benefits.length > 2 && (
                    <p className="text-xs text-gray-500 pl-5">
                      +{data.hero.benefits.length - 2} autre{data.hero.benefits.length - 2 > 1 ? 's' : ''} avantage{data.hero.benefits.length - 2 > 1 ? 's' : ''}
                    </p>
                  )}
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-green-600 font-semibold text-sm group-hover:text-green-700">
                    <span>Découvrir nos services</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-cyan-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Votre ville n'est pas dans la liste ?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Nous intervenons également dans les communes limitrophes. 
            Contactez-nous pour vérifier si nous couvrons votre zone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0556123456"
              className="inline-flex items-center justify-center bg-white text-green-600 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-green-50 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              05 56 12 34 56
            </a>
            <a
              href="mailto:contact@segmentc-menuiserie.fr"
              className="inline-flex items-center justify-center bg-green-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-green-800 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}