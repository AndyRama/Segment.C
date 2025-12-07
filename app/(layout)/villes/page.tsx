'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Users, Phone, Mail } from 'lucide-react';
import { Typography } from '@/components/nowts/typography';
import { SectionLayout } from '@/features/landing/section-layout';
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
  // eysinesData,
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
  // { slug: 'eysines', data: eysinesData },
];

export default function VillesListPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-green-50 min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-green-600 to-cyan-500 py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <SectionLayout size="lg" variant="default" className="relative">
          <div className="text-center">
            <Typography variant="h1" className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Nos Villes d'Intervention
            </Typography>
            <Typography variant="p" className="mx-auto max-w-3xl text-xl text-green-100">
              Segment C Menuiserie intervient dans toute la Gironde (33) pour vos travaux de menuiserie. 
              Découvrez nos services dans votre ville.
            </Typography>
            <div className="mt-8 flex items-center justify-center gap-2 text-green-100">
              <MapPin className="size-5 flex-shrink-0" />
              <Typography variant="p" className="font-semibold text-green-50">
                {villesList.length} villes couvertes en Gironde
              </Typography>
            </div>
          </div>
        </SectionLayout>
      </section>

      {/* Grid des villes */}
      <SectionLayout size="lg" variant="default" className="py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {villesList.map(({ slug, data }) => (
            <Link
              key={slug}
              href={`/villes/${slug}`}
              className="group transform overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-2xl"
            >
              {/* Header de la card */}
              <div className="border-b border-gray-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-6">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex-1">
                    <Typography 
                      variant="h2" 
                      className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-green-600"
                    >
                      {data.hero.city}
                    </Typography>
                    <div className="mt-2 flex items-center gap-2">
                      <MapPin className="size-4 flex-shrink-0 text-green-600" />
                      <Typography variant="p" className="text-sm text-gray-600">
                        {data.hero.department} ({data.hero.departmentNumber})
                      </Typography>
                    </div>
                  </div>
                  <ArrowRight className="size-6 flex-shrink-0 text-green-600 transition-transform group-hover:translate-x-1" />
                </div>
                
                {/* Population badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5">
                  <Users className="size-4 flex-shrink-0 text-green-600" />
                  <Typography variant="p" className="text-sm font-medium text-gray-700">
                    {data.hero.population}
                  </Typography>
                </div>
              </div>

              {/* Contenu de la card */}
              <div className="space-y-4 p-6">
                {/* Description */}
                <Typography variant="p" className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                  {data.hero.description}
                </Typography>

                {/* Avantages (2 premiers) */}
                <div className="space-y-2">
                  {data.hero.benefits.slice(0, 2).map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="mt-0.5 flex-shrink-0 rounded-full bg-green-100 p-0.5">
                        <svg className="size-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <Typography variant="p" className="line-clamp-1 text-sm text-gray-700">
                        {benefit}
                      </Typography>
                    </div>
                  ))}
                  {data.hero.benefits.length > 2 && (
                    <Typography variant="p" className="pl-5 text-xs text-gray-500">
                      +{data.hero.benefits.length - 2} autre{data.hero.benefits.length - 2 > 1 ? 's' : ''} avantage{data.hero.benefits.length - 2 > 1 ? 's' : ''}
                    </Typography>
                  )}
                </div>

                {/* CTA */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between text-green-600 transition-colors group-hover:text-green-700">
                    <Typography variant="p" className="text-sm font-semibold text-green-600 group-hover:text-green-700">
                      Découvrir nos services
                    </Typography>
                    <ArrowRight className="size-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionLayout>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-cyan-500 py-16">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <SectionLayout size="lg" variant="default" className="relative">
          <div className="text-center">
            <Typography variant="h2" className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Votre ville n'est pas dans la liste ?
            </Typography>
            <Typography variant="p" className="mb-8 text-xl text-green-100">
              Nous intervenons également dans les communes limitrophes. 
              Contactez-nous pour vérifier si nous couvrons votre zone.
            </Typography>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:0556123456"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-green-600 shadow-lg transition hover:bg-green-50"
              >
                <Phone className="mr-2 size-5 flex-shrink-0" />
                <Typography variant="p" className="font-semibold text-green-600">
                  05 56 12 34 56
                </Typography>
              </a>
              <a
                href="mailto:contact@segmentc-menuiserie.fr"
                className="inline-flex items-center justify-center rounded-lg bg-green-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-green-800"
              >
                <Mail className="mr-2 size-5 flex-shrink-0" />
                <Typography variant="p" className="font-semibold text-white">
                  Nous contacter
                </Typography>
              </a>
            </div>
          </div>
        </SectionLayout>
      </section>
    </div>
  );
}