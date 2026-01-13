'use client';

import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/nowts/typography';
import { SectionLayout } from '@/features/landing/section-layout';
import { useSession } from "@/lib/auth-client";
import Image from "next/image";

import { 
  ExternalLink, 
  Award, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Users,
  Sparkles,
  Lightbulb
} from 'lucide-react';

export default function SwaoPage() {
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
              SWAO
            </Typography>
            
            <Typography variant="h2" className="text-2xl font-semibold text-green-600">
              La liberté de tout choisir
            </Typography>

            <Typography variant="p" className="text-lg leading-relaxed text-gray-700">
              SWAO, une marque du Groupe CETIH, est un fabricant français de menuiseries 
              innovantes et connectées. Avec plus de 100 ans d'expérience combinée, SWAO 
              propose une offre globale de fenêtres, portes d'entrée et fermetures multimatériaux.
            </Typography>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.swao.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg"
              >
                Visiter le site SWAO
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
                src="/images/swao-placeholder.jpg"
                alt="SWAO - Menuiseries"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Section Valeurs */}
      <SectionLayout size="lg" variant="default" className="py-16">
        <div className="mb-12 text-center">
          <Typography variant="h2" className="mb-4 text-3xl font-bold text-gray-900">
            Les atouts SWAO
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-gray-600">
            Innovation, qualité française et accompagnement de proximité
          </Typography>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Lightbulb className="size-8 text-green-600" />,
              title: 'Innovation',
              description: 'Produits connectés avec I-Secure et solutions domotiques pour la maison du futur'
            },
            {
              icon: <Award className="size-8 text-green-600" />,
              title: 'Origine France Garantie',
              description: 'Fabrication 100% française sur 6 sites spécialisés à travers le territoire'
            },
            {
              icon: <Users className="size-8 text-green-600" />,
              title: 'Accompagnement',
              description: 'Service client réactif et support technique à chaque étape de votre projet'
            },
            {
              icon: <Sparkles className="size-8 text-green-600" />,
              title: 'Design',
              description: 'Ouvrant discret avec profilés fins pour un maximum de luminosité et d\'esthétisme'
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
            Une gamme complète multimatériaux
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-gray-600">
            Des solutions pour tous vos projets en neuf et rénovation
          </Typography>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              category: 'Fenêtres PVC',
              products: ['OptimoPVC', 'AltimoPVC laquées', 'Primo - Ouvrant visible'],
              icon: '🪟'
            },
            {
              category: 'Fenêtres Aluminium',
              products: ['OptimoALU', 'Ouvrant discret®', 'Grandes dimensions'],
              icon: '✨'
            },
            {
              category: 'Fenêtres Bois & Mixte',
              products: ['Bignon - Recouvrement', 'À l\'ancienne', 'Mixte Bois/Aluminium'],
              icon: '🌳'
            },
            {
              category: 'Coulissants',
              products: ['Baies PVC & ALU', 'Galandage', 'Poignée Easy 2'],
              icon: '🏠'
            },
            {
              category: 'Portes d\'entrée',
              products: ['Acier, Alu, Bois, PVC', 'Orphie & Napilus', 'Grand vitrage'],
              icon: '🚪'
            },
            {
              category: 'Maison connectée',
              products: ['Capteur I-Secure®', 'Domotique TYDOM', 'Amy® sun'],
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

      {/* Section Pourquoi SWAO */}
      <SectionLayout size="lg" variant="default" className="py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Typography variant="h2" className="mb-6 text-3xl font-bold text-gray-900">
              Pourquoi Segment C a choisi SWAO ?
            </Typography>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Fabrication 100% française',
                  description: '6 sites de production spécialisés en France avec label Origine France Garantie'
                },
                {
                  title: 'Innovation technologique',
                  description: 'Capteur I-Secure®, menuiseries connectées et compatibilité domotique TYDOM'
                },
                {
                  title: 'Large choix multimatériaux',
                  description: 'Plus de 100 modèles de portes en acier, aluminium, PVC, bois et mixte'
                },
                {
                  title: 'Engagement solidaire',
                  description: 'Mécène de l\'association Toit à moi pour l\'accès au logement des plus démunis'
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
                  🏭 Groupe CETIH
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Plus de 100 ans d'expertise
                </Typography>
              </div>
              
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  🇫🇷 Origine France Garantie
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Fabrication française certifiée
                </Typography>
              </div>
              
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  📱 Maison connectée
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Innovation domotique intégrée
                </Typography>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  ❤️ Engagement solidaire
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Soutien à l'association Toit à moi
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* CTA Final */}
      <SectionLayout size="lg" variant="default" className="py-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-emerald-700 p-12 text-center shadow-2xl">
          <Typography variant="h2" className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Découvrez nos réalisations avec SWAO
          </Typography>
          <Typography variant="p" className="mb-8 text-lg text-green-50">
            Segment C est fier de travailler avec SWAO pour vous offrir des menuiseries innovantes et connectées
          </Typography>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/pdf/swao.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-green-600 transition-all hover:bg-gray-50 hover:shadow-xl"
            >
              Catalogue
              <ExternalLink className="size-5" />
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