'use client';

import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/nowts/typography';
import { SectionLayout } from '@/features/landing/section-layout';
import { useSession } from "@/lib/auth-client";
import { 
  ExternalLink, 
  Award, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Factory,
  TrendingUp,
  ShieldCheck,
  Layers,
  Home
} from 'lucide-react';

export default function OrialPage() {
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
              ORIAL
            </Typography>
            
            <Typography variant="h2" className="text-2xl font-semibold text-green-600">
              Concepteur et fabricant français en aluminium
            </Typography>

            <Typography variant="p" className="text-lg leading-relaxed text-gray-700">
              Depuis près de 20 ans dans le Nord de la France, Orial est une entreprise de taille 
              industrielle spécialisée dans la conception et la fabrication de solutions en aluminium 
              pour l'habitat. Une centaine de collaborateurs passionnés vous accompagnent à chaque étape.
            </Typography>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://orial.tm.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg"
              >
                Visiter le site ORIAL
                <ExternalLink className="size-5" />
              </Link>
              
              {session ? (
                <Link
                  href="/account/devis"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-green-600 bg-white px-6 py-3 font-semibold text-green-600 transition-all hover:bg-green-50"
                >
                  Nous contacter
                  <ArrowRight className="size-5" />
                </Link>
              ) : (
                <Link
                  href="/auth/signin?callbackUrl=%2Faccount%2Fdevis"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-green-600 bg-white px-6 py-3 font-semibold text-green-600 transition-all hover:bg-green-50"
                >
                  Nous contacter
                  <ArrowRight className="size-5" />
                </Link>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <img
                src="https://placehold.co/600x400/FFFFFF/10b981?text=ORIAL"
                alt="ORIAL - Solutions aluminium"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl border-4 border-white bg-gradient-to-br from-green-500 to-emerald-600 p-6 shadow-xl">
              <Factory className="mb-2 size-8 text-white" />
              <Typography variant="p" className="text-sm font-bold text-white">
                Hauts-de-France
              </Typography>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Section Valeurs */}
      <SectionLayout size="lg" variant="default" className="py-16">
        <div className="mb-12 text-center">
          <Typography variant="h2" className="mb-4 text-3xl font-bold text-gray-900">
            Le savoir-faire ORIAL
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-gray-600">
            De l'artisanat à l'industrie, innovation et expertise
          </Typography>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Factory className="size-8 text-green-600" />,
              title: 'Taille industrielle',
              description: 'Une entreprise moderne avec 100+ collaborateurs passionnés dans les Hauts-de-France'
            },
            {
              icon: <TrendingUp className="size-8 text-green-600" />,
              title: 'De la conception à la livraison',
              description: 'Maîtrise complète du processus de fabrication de produits aluminium'
            },
            {
              icon: <ShieldCheck className="size-8 text-green-600" />,
              title: 'Conformité aux normes',
              description: 'Produits innovants, fiables, esthétiques et durables certifiés'
            },
            {
              icon: <Award className="size-8 text-green-600" />,
              title: 'Expertise reconnue',
              description: 'Membre SNFA et référencé sur FenetreAlu.com depuis 1921'
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
      <SectionLayout size="lg" variant="default" className="bg-gray-50 py-16">
        <div className="mb-12 text-center">
          <Typography variant="h2" className="mb-4 text-3xl font-bold text-gray-900">
            Nos solutions en aluminium pour l'habitat
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-gray-600">
            Des produits sur mesure pour tous vos projets
          </Typography>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              category: 'Pergolas bioclimatiques',
              products: ['Lames orientables', 'Adaptable toute l\'année', 'Tous budgets', 'Design élégant'],
              icon: '🏡'
            },
            {
              category: 'Carports',
              products: ['Protection véhicule', 'Tous styles d\'habitat', 'Élégant et durable', 'Sur-mesure'],
              icon: '🚗'
            },
            {
              category: 'Garde-corps',
              products: ['Design contemporain', 'Protection optimale', 'Extérieur & intérieur', 'Conformes aux normes'],
              icon: '🛡️'
            },
            {
              category: 'Escaliers',
              products: ['Esthétisme et fonctionnalité', 'Classique au contemporain', 'Sur-mesure', 'Oriastep'],
              icon: '📐'
            },
            {
              category: 'Mains courantes',
              products: ['Soutien fiable', 'Design soigné', 'Ergonomie optimale', 'Tous coloris RAL'],
              icon: '✋'
            },
            {
              category: 'Barrières de piscine',
              products: ['Sécurité maximale', 'Design préservé', 'Conformes NF', 'Esthétique soignée'],
              icon: '🏊'
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

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border-2 border-green-200 bg-green-50 px-8 py-4">
            <Layers className="size-6 text-green-600" />
            <div className="text-left">
              <Typography variant="h3" className="font-bold text-gray-900">
                Nos marques dédiées
              </Typography>
              <Typography variant="p" className="text-sm text-gray-600">
                Oriabal • Oriasun • Oriastep
              </Typography>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Section Pourquoi ORIAL */}
      <SectionLayout size="lg" variant="default" className="py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Typography variant="h2" className="mb-6 text-3xl font-bold text-gray-900">
              Pourquoi Segment C a choisi ORIAL ?
            </Typography>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Fabrication 100% française',
                  description: 'Située à Hirson dans les Hauts-de-France depuis près de 20 ans avec 100+ collaborateurs'
                },
                {
                  title: 'Maîtrise industrielle complète',
                  description: 'De la conception à la livraison, contrôle total du processus de fabrication'
                },
                {
                  title: 'Expertise et innovation',
                  description: 'Produits aluminium innovants, fiables et durables conformes aux normes en vigueur'
                },
                {
                  title: 'Accompagnement sur-mesure',
                  description: 'Équipes passionnées qui étudient vos projets avec soin et professionnalisme'
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
                  🏭 Hirson (02)
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Fabrication dans les Hauts-de-France
                </Typography>
              </div>
              
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  👥 100+ collaborateurs
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Équipes passionnées et expertes
                </Typography>
              </div>
              
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  🏆 Membre SNFA
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Syndicat National de la Fermeture et de l'Aluminium
                </Typography>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  ✨ 3 marques dédiées
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Oriabal • Oriasun • Oriastep
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Section Citation */}
      <SectionLayout size="lg" variant="default" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-green-100 p-4">
            <Home className="size-12 text-green-600" />
          </div>
          <Typography variant="h2" className="mb-6 text-2xl font-bold italic text-gray-900 lg:text-3xl">
            "La vraie richesse d'une entreprise, ce sont les femmes et les hommes qui la font vivre."
          </Typography>
          <Typography variant="p" className="text-lg text-gray-600">
            Derrière chaque projet, des équipes engagées, expertes et à l'écoute vous accompagnent 
            à chaque étape, de la conception à la pose. Chez Orial, innovation, qualité et savoir-faire 
            sont au cœur de nos valeurs.
          </Typography>
        </div>
      </SectionLayout>

      {/* CTA Final */}
      <SectionLayout size="lg" variant="default" className="py-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-emerald-700 p-12 text-center shadow-2xl">
          <Typography variant="h2" className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Découvrez nos réalisations avec ORIAL
          </Typography>
          <Typography variant="p" className="mb-8 text-lg text-green-50">
            Segment C est fier de travailler avec ORIAL pour vous offrir des solutions en aluminium d'exception
          </Typography>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-green-600 transition-all hover:bg-gray-50 hover:shadow-xl"
            >
              Voir nos réalisations
              <ArrowRight className="size-5" />
            </Link>
            
            {session ? (
              <Link
                href="/account/devis"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition-all hover:bg-white hover:text-green-600"
              >
                Demander un devis
                <ArrowRight className="size-5" />
              </Link>
            ) : (
              <Link
                href="/auth/signin?callbackUrl=%2Faccount%2Fdevis"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition-all hover:bg-white hover:text-green-600"
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