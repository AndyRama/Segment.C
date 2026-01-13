'use client';

import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/nowts/typography';
import { SectionLayout } from '@/features/landing/section-layout';
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import { ProcessSection } from "@/features/landing/process-section";

import { 
  ExternalLink, 
  Award, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Users,
  Leaf
} from 'lucide-react';

export default function C2RPage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <SectionLayout size="lg" variant="default" className="py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2">
              <Award className="size-5 text-green-600" />
              <Typography variant="p" className="text-sm font-medium text-green-700">
                Partenaire Premium
              </Typography>
            </div>

            <Typography variant="h1" className="text-4xl font-bold text-gray-900 lg:text-5xl">
              C2R
            </Typography>
            
            <Typography variant="h2" className="text-2xl font-semibold text-green-600">
              +75 ans de savoir-faire français
            </Typography>

            <Typography variant="p" className="text-lg leading-relaxed text-gray-700">
              C2R est un fabricant français de menuiseries et fermetures sur-mesure établi depuis 
              plus de 75 ans. Avec 2 sites de fabrication, plus de 200 collaborateurs et un chiffre 
              d'affaires de 40 millions d'euros, C2R est un acteur majeur de la menuiserie française.
            </Typography>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://menuiserie-c2r.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg"
              >
                Visiter le site C2R
                <ExternalLink className="size-5" />
              </Link>
              
             {session ? (
                <Link
                  href="/account/devis"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-green-600 bg-white px-6 py-3 font-semibold text-green-600 transition-all hover:bg-green-50"
                >
                  Demander un devis
                  <ArrowRight className="size-5" />
                </Link>
              ) : (
                <Link
                  href="/auth/signin?callbackUrl=%2Faccount%2Fdevis"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-green-600 bg-white px-6 py-3 font-semibold text-green-600 transition-all hover:bg-green-50"
                >
                  Demander un devis
                  <ArrowRight className="size-5" />
                </Link>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
               <Image
                src="/images/C2r-placeholder.png"
                alt="C2r - Menuiseries"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Chiffres clés */}
      <SectionLayout size="lg" variant="default" className="py-16">
        <div className="mb-12 text-center">
          <Typography variant="h2" className="mb-4 text-3xl font-bold text-gray-900">
            C2R en chiffres
          </Typography>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {[
            { number: '+75 ans', label: 'de savoir-faire & d\'expertise' },
            { number: '2', label: 'sites de fabrication' },
            { number: '+2000', label: 'clients' },
            { number: '40M€', label: 'de chiffre d\'affaires' },
            { number: '+200', label: 'collaborateurs' },
            { number: '+104K', label: 'produits fabriqués/an' }
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-lg"
            >
              <Typography variant="h3" className="mb-2 text-3xl font-bold text-green-600">
                {stat.number}
              </Typography>
              <Typography variant="p" className="text-sm text-gray-600">
                {stat.label}
              </Typography>
            </div>
          ))}
        </div>
      </SectionLayout>

      {/* Section Valeurs */}
      <SectionLayout size="lg" variant="default" className="bg-gray-50 py-16">
        <div className="mb-12 text-center">
          <Typography variant="h2" className="mb-4 text-3xl font-bold text-gray-900">
            Les engagements C2R
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-gray-600">
            RSE, environnement, social et qualité
          </Typography>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Leaf className="size-8 text-green-600" />,
              title: 'Démarche RSE',
              description: 'Label LUCIE 26000 et Coq Vert pour une entreprise responsable'
            },
            {
              icon: <Target className="size-8 text-green-600" />,
              title: 'Environnement',
              description: 'Adhésion Valobat, recyclage et éco-contribution REP PMCB'
            },
            {
              icon: <Users className="size-8 text-green-600" />,
              title: 'Social',
              description: 'Égalité H/F 88/100 et engagement envers les collaborateurs'
            },
            {
              icon: <Award className="size-8 text-green-600" />,
              title: 'Qualité',
              description: 'Certifications SQS, RGE, VEMCROS, PEFC, C3A, Qualimarine'
            }
          ].map((value, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-xl bg-green-50 p-3 transition-colors group-hover:bg-green-100">
                {value.icon}
              </div>
              <Typography variant="h3" className="mb-3 text-xl font-bold text-gray-900">
                {value.title}
              </Typography>
              <Typography variant="p" className="leading-relaxed text-gray-600">
                {value.description}
              </Typography>
            </div>
          ))}
        </div>
      </SectionLayout>

      {/* Section Gamme de Produits */}
      <SectionLayout size="lg" variant="default" className="py-16">
        <div className="mb-12 text-center">
          <Typography variant="h2" className="mb-4 text-3xl font-bold text-gray-900">
            Une gamme complète de produits
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-gray-600">
            Menuiseries, fermetures et maison connectée
          </Typography>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              category: 'Menuiseries',
              products: ['Fenêtres aluminium', 'Baies vitrées coulissantes', 'Portes-fenêtres', 'Sur-mesure'],
              icon: '🪟'
            },
            {
              category: 'Volets & Persiennes',
              products: ['Volets battants', 'Volets coulissants', 'Volets roulants', 'Motorisation solaire'],
              icon: '🎚️'
            },
            {
              category: 'Portes d\'entrée',
              products: ['Aluminium', 'PVC', 'Contemporaines', 'Design exclusif'],
              icon: '🚪'
            },
            {
              category: 'Portes de garage',
              products: ['Sectionnelles', 'Enroulables', 'Portes de service', 'Motorisées'],
              icon: '🏠'
            },
            {
              category: 'Moustiquaires',
              products: ['Fixes', 'Coulissantes', 'Enroulables', 'Sur-mesure'],
              icon: '🪰'
            },
            {
              category: 'Maison connectée',
              products: ['Domotique SOMFY', 'Contrôle à distance', 'Motorisation intelligente', 'Application mobile'],
              icon: '📱'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl">{item.icon}</span>
                <Typography variant="h3" className="text-xl font-bold text-gray-900">
                  {item.category}
                </Typography>
              </div>
              <ul className="space-y-2">
                {item.products.map((product, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-5 flex-shrink-0 text-green-600" />
                    <Typography variant="p" className="text-sm text-gray-700">
                      {product}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionLayout>

      {/* Section Pourquoi C2R */}
      <SectionLayout size="lg" variant="default" className="bg-gray-50 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Typography variant="h2" className="mb-6 text-3xl font-bold text-gray-900">
              Pourquoi Segment C a choisi C2R ?
            </Typography>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Expérience de +75 ans',
                  description: 'Un savoir-faire éprouvé et une expertise reconnue dans la menuiserie française'
                },
                {
                  title: 'Membre French Fab',
                  description: 'Fier représentant du mouvement French Fab pour valoriser l\'industrie française'
                },
                {
                  title: 'Engagement environnemental fort',
                  description: 'Labels Coq Vert, LUCIE 26000 et adhésion Valobat pour le recyclage'
                },
                {
                  title: 'Innovation continue',
                  description: 'Nouveaux produits comme le volet coulissant motorisé solaire'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex size-10 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2 className="size-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <Typography variant="h3" className="mb-2 text-lg font-bold text-gray-900">
                      {item.title}
                    </Typography>
                    <Typography variant="p" className="leading-relaxed text-gray-600">
                      {item.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8">
            <div className="mb-6">
              <Building2 className="mb-4 size-12 text-green-600" />
              <Typography variant="h3" className="mb-4 text-2xl font-bold text-gray-900">
                Une collaboration de confiance
              </Typography>
            </div>
            
            <div className="space-y-4">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  🏭 2 sites de fabrication
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Miramont de Guyenne (47)
                </Typography>
              </div>
              
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  🇫🇷 French Fab
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Industrie française d'excellence
                </Typography>
              </div>
              
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  ♻️ Label LUCIE 26000
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Démarche RSE certifiée
                </Typography>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  🌱 Coq Vert
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Engagement environnemental
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      <ProcessSection />

      {/* CTA Final */}
      <SectionLayout size="lg" variant="default" className="py-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-emerald-700 p-12 text-center shadow-2xl">
          <Typography variant="h2" className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Découvrez nos réalisations avec C2R
          </Typography>
          <Typography variant="p" className="mb-8 text-lg text-green-50">
            Segment C est fier de travailler avec C2R pour vous offrir des menuiseries durables et responsables
          </Typography>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pdf/c2r.pdf"
              target='_blank'
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-green-600 transition-all hover:bg-gray-50 hover:shadow-xl"
            >
              Catalogue
              <ExternalLink className="size-5" />
            </Link>
            
            {session ? (
                <Link
                  href="/account/devis"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-green-600 bg-white px-6 py-3 font-semibold text-green-600 transition-all hover:bg-green-50"
                >
                  Demander un devis
                  <ArrowRight className="size-5" />
                </Link>
              ) : (
                <Link
                  href="/auth/signin?callbackUrl=%2Faccount%2Fdevis"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-green-600 bg-white px-6 py-3 font-semibold text-green-600 transition-all hover:bg-green-50"
                >
                  Demander un devis
                  <ArrowRight className="size-5" />
                </Link>
              )}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}