'use client';

import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/nowts/typography';
import { SectionLayout } from '@/features/landing/section-layout';
import { VideoSection } from '@/features/landing/video-section';
import { useSession } from "@/lib/auth-client";
import Image from 'next/image';
import { ProcessSection } from "@/features/landing/process-section";

import {
  ExternalLink,
  Award,
  Building2,
  CheckCircle2,
  ArrowRight,
  Target,
  Users,
  Sparkles
} from 'lucide-react';

export default function SybaiePage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <SectionLayout size="lg" variant="default" className="py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Contenu gauche */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2">
              <Award className="size-5 text-green-600" />
              <Typography variant="p" className="text-sm font-medium text-green-700">
                Partenaire Premium
              </Typography>
            </div>

            <Typography variant="h1" className="text-4xl font-bold text-gray-900 lg:text-5xl">
              SYbaie
            </Typography>

            <Typography variant="h2" className="text-2xl font-semibold text-green-600">
              La communauté des artisans menuisiers
            </Typography>

            <Typography variant="p" className="text-lg leading-relaxed text-gray-700">
              SYbaie, du Groupe Millet, est bien plus qu'un fabricant de menuiseries.
              C'est une véritable communauté dédiée aux artisans menuisiers qui placent
              la qualité, l'innovation et le savoir-faire au cœur de leur métier.
            </Typography>

            <div className="flex flex-wrap gap-4">
              {session ?
                (
                  <Link
                    href="/account/devis"
                    className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg"
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

          {/* Image à droite */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <Image
                src="/images/menuiseries-bois-1024x640.jpg"
                alt="SYbaie - Menuiseries - porte d'entrée"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Section Valeurs */}
      <SectionLayout size="lg" variant="default" className="max-w-8xl bg-gray-50 py-16">
        <div className="mb-12 text-center">
          <Typography variant="h2" className="mb-4 text-3xl font-bold text-gray-900">
            Les valeurs SYbaie
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-gray-600">
            Une démarche centrée sur l'artisan menuisier et la satisfaction client
          </Typography>
        </div>

        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Target className="size-8 text-green-600" />,
              title: 'Innovation',
              description: 'Des produits innovants qui facilitent votre travail et se démarquent sur le terrain'
            },
            {
              icon: <Award className="size-8 text-green-600" />,
              title: 'Qualité',
              description: 'Des menuiseries conçues avec les meilleurs matériaux et finitions'
            },
            {
              icon: <Users className="size-8 text-green-600" />,
              title: 'Communauté',
              description: '100% menuisiers - Une marque créée par et pour les artisans'
            },
            {
              icon: <Sparkles className="size-8 text-green-600" />,
              title: 'Savoir-faire',
              description: 'L\'expertise de l\'artisan au cœur de chaque projet'
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
      <SectionLayout size="lg" variant="default" className=" py-16">
        <div className="mb-12 text-center">
          <Typography variant="h2" className="mb-4 text-3xl font-bold text-gray-900">
            Une gamme complète de produits
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-gray-600">
            Des solutions pour tous vos projets de menuiseries
          </Typography>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              category: 'Fenêtres',
              products: ['Fenêtres ALU & Mixte', 'Fenêtres PVC', 'Fenêtres Bois'],
              icon: '🪟',
              link: '/fenetres'
            },
            {
              category: 'Portes d\'entrée',
              products: ['Portes ALU', 'Portes PVC', 'Grand Vitrage'],
              icon: '🚪',
              link: '/portes'
            },
            {
              category: 'Coulissants',
              products: ['Baies vitrées ALU', 'Coulissants muraux', 'Galandage'],
              icon: '🏠',
              link: '/baie'
            },
            {
              category: 'Stores intégrés',
              products: ['Stores vénitiens', 'Stores plissés', 'Motorisation'],
              icon: '🪟',
              link: '/volet'
            },
            {
              category: 'Volets roulants',
              products: ['Volets ALU', 'Motorisation', 'Connectés'],
              icon: '🎚️',
              link: '/volet'
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
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
            </Link>
          ))}
        </div>
      </SectionLayout>

      <SectionLayout>
        <VideoSection
          videoUrl="/videos/demo.mp4"
          title="Présentation d'un de nos produits"
          description=""
          className="mt-20 mb-30 max-w-8xl bg-gray-50 py-16"
        />
      </SectionLayout>

      {/* Section Pourquoi SYbaie */}
      <SectionLayout size="lg" variant="default" className="py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Typography variant="h2" className="mb-6 text-3xl font-bold text-gray-900">
              Pourquoi Segment C a choisi SYbaie ?
            </Typography>

            <div className="space-y-6">
              {[
                {
                  title: 'Qualité de fabrication irréprochable',
                  description: 'Des menuiseries fabriquées en France par le Groupe Millet, garantissant performance et durabilité'
                },
                {
                  title: 'Innovation constante',
                  description: 'Des produits comme siMple (dormant invisible) ou les coulissants muraux qui font la différence'
                },
                {
                  title: 'Support dédié aux artisans',
                  description: 'Une vraie communauté avec formations, accompagnement technique et outils professionnels'
                },
                {
                  title: 'Engagement environnemental',
                  description: 'Respect de la RE2020 et mise en place d\'une éco-contribution pour le recyclage'
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
                  🏭 Groupe Millet
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Leader français de la menuiserie
                </Typography>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  🇫🇷 Fabrication française
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Qualité et traçabilité garanties
                </Typography>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  ♻️ Éco-responsable
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Engagement pour l'environnement
                </Typography>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  👥 100% Menuisiers
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  La seule marque créée par et pour les artisans
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Section Process */}
      <ProcessSection />

      {/* CTA Final */}
      <SectionLayout size="lg" variant="default" className="py-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-emerald-700 p-12 text-center shadow-2xl">
          <Typography variant="h2" className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Découvrez nos réalisations avec SYbaie
          </Typography>
          <Typography variant="p" className="mb-8 text-lg text-green-50">
            Segment C est fier de travailler avec SYbaie pour vous offrir des menuiseries d'exception
          </Typography>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/pdf/sybaie.pdf"
              target='_blank'
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