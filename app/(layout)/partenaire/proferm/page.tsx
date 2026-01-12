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
  Target,
  Sparkles,
  Palette,
  Shield
} from 'lucide-react';

export default function ProfermPage() {
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
              PROFERM
            </Typography>
            
            <Typography variant="h2" className="text-2xl font-semibold text-green-600">
              Menuiseries sur mesure haut de gamme
            </Typography>

            <Typography variant="p" className="text-lg leading-relaxed text-gray-700">
              Depuis 2006, PROFERM conçoit et fabrique en France des menuiseries sur mesure 
              innovantes et haut de gamme. Basé à Douvrin dans le Pas-de-Calais, PROFERM est 
              reconnu comme l'un des 5 meilleurs fabricants français de menuiseries selon le CSTB.
            </Typography>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://proferm.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg"
              >
                Visiter le site PROFERM
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
                src="https://placehold.co/600x400/FFFFFF/10b981?text=PROFERM"
                alt="PROFERM - Menuiseries"
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
            L'excellence PROFERM
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-gray-600">
            Innovation, qualité et savoir-faire français
          </Typography>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Target className="size-8 text-green-600" />,
              title: 'Innovation',
              description: 'TEXTURAL®, un matériau exclusif innovant et personnalisable à l\'infini'
            },
            {
              icon: <Award className="size-8 text-green-600" />,
              title: 'Top 5 France',
              description: 'L\'un des 5 meilleurs fabricants français selon le CSTB'
            },
            {
              icon: <Palette className="size-8 text-green-600" />,
              title: 'Sur-mesure',
              description: 'Cintrage interne, ferronnerie d\'art et cabines de laquage propres'
            },
            {
              icon: <Shield className="size-8 text-green-600" />,
              title: 'Qualité',
              description: 'Matériaux premium : PVC Greenline® et aluminium bas carbone Technal®'
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
            Nos 4 gammes exclusives
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-gray-600">
            PVC, Aluminium, Hybride et TEXTURAL®
          </Typography>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {[
            {
              category: 'PERFORM - PVC',
              products: ['PERFORM70 - Excellent rapport qualité/prix', 'PERFORM76 - Hautes performances', 'PVC Greenline® sans plomb ni cadmium', 'Entièrement recyclable'],
              icon: '🪟',
              color: 'green'
            },
            {
              category: 'LUMINE - Aluminium',
              products: ['Design épuré et moderne', 'Aluminium bas carbone Technal®', '75% d\'aluminium recyclé', 'Grandes dimensions possibles'],
              icon: '✨',
              color: 'green'
            },
            {
              category: 'HYBRIDE - PVC/ALU',
              products: ['Intérieur PVC / Extérieur ALU', 'Meilleur des deux matériaux', 'Isolation optimale', 'Esthétique premium'],
              icon: '💎',
              color: 'green'
            },
            {
              category: 'TEXTURAL® - Exclusif',
              products: ['Matériau innovant breveté', 'Personnalisation illimitée', 'Textures et couleurs uniques', 'Design d\'exception'],
              icon: '🎨',
              color: 'green'
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

        <div className="mt-8 rounded-xl border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-green-100 p-3">
              <Sparkles className="size-8 text-green-600" />
            </div>
            <div>
              <Typography variant="h3" className="mb-2 text-xl font-bold text-gray-900">
                TEXTURAL® - Notre innovation exclusive
              </Typography>
              <Typography variant="p" className="leading-relaxed text-gray-700">
                TEXTURAL® est un matériau révolutionnaire développé par PROFERM qui offre des possibilités 
                de personnalisation infinies. Inspiré des plus grands courants artistiques, il permet de créer 
                des menuiseries uniques qui rehaussent le style de votre entrée.
              </Typography>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Section Pourquoi PROFERM */}
      <SectionLayout size="lg" variant="default" className="py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Typography variant="h2" className="mb-6 text-3xl font-bold text-gray-900">
              Pourquoi Segment C a choisi PROFERM ?
            </Typography>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Excellence reconnue',
                  description: 'Top 5 des fabricants français selon le CSTB avec labels Origine France Garantie'
                },
                {
                  title: 'Maîtrise complète',
                  description: 'Cintrage, ferronnerie et laquage réalisés en interne pour une qualité maximale'
                },
                {
                  title: 'Engagement environnemental',
                  description: 'PVC recyclable Greenline®, aluminium bas carbone et adhésion Valobat'
                },
                {
                  title: 'Sur-mesure premium',
                  description: 'Personnalisation totale : dimensions, couleurs, textures et finitions exclusives'
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
                  🏭 Fabrication Douvrin (62)
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Usine moderne dans le Pas-de-Calais
                </Typography>
              </div>
              
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  🇫🇷 Origine France Garantie
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Production locale certifiée
                </Typography>
              </div>
              
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  ♻️ Éco-responsable
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Matériaux recyclés et recyclables
                </Typography>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Typography variant="p" className="font-semibold text-gray-900">
                  🎨 TEXTURAL® Exclusif
                </Typography>
                <Typography variant="p" className="text-sm text-gray-600">
                  Innovation brevetée PROFERM
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
            Découvrez nos réalisations avec PROFERM
          </Typography>
          <Typography variant="p" className="mb-8 text-lg text-green-50">
            Segment C est fier de travailler avec PROFERM pour vous offrir des menuiseries d'exception
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