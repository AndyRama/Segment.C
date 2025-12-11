"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { Check, Sun, Snowflake, Shield, Zap, Maximize2, Droplets } from "lucide-react";

type PergolasPageProps = {
  className?: string;
};

export default function PergolasPage({ className }: PergolasPageProps) {
  const [activeTab, setActiveTab] = useState<"bioclimatique" | "carport">("bioclimatique");

  return (
    <div className={cn("w-full", className)}>
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 py-20 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Typography variant="h1" className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Pergolas
                <span className="block text-primary">Bioclimatiques</span>
              </Typography>
              
              <Typography variant="p" className="text-lg text-muted-foreground leading-relaxed">
                Transformez votre espace extérieur avec nos pergolas sur mesure. 
                Design moderne, qualité française et installation professionnelle pour 
                profiter de votre terrasse en toutes saisons.
              </Typography>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#devis"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Demander un devis gratuit
              </a>
              <a
                href="#modeles"
                className="inline-flex items-center justify-center rounded-lg border-2 border-border px-8 py-4 text-base font-semibold transition-all hover:border-primary hover:bg-primary/5"
              >
                Découvrir nos modèles
              </a>
            </div>

            {/* Key Features Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium">
                <Check className="h-4 w-4 text-primary" />
                Fabrication française
              </div>
              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium">
                <Check className="h-4 w-4 text-primary" />
                Installation en Gironde
              </div>
              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium">
                <Check className="h-4 w-4 text-primary" />
                Garantie 10 ans
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl lg:h-[600px]">
              <Image
                src="/images/pergolas.jpg"
                alt="Pergola bioclimatique moderne en aluminium"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-background p-6 shadow-xl border lg:p-8">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="mb-12 text-center">
            <Typography variant="h2" className="mb-4 text-4xl font-bold">
              Pourquoi choisir une pergola bioclimatique ?
            </Typography>
            <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Une solution innovante qui allie confort, design et économies d'énergie
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Benefit Cards */}
            {[
              {
                icon: Sun,
                title: "Protection solaire optimale",
                description: "Les lames orientables protègent vos baies vitrées des rayonnements solaires l'été, réduisant la chaleur intérieure jusqu'à 30%."
              },
              {
                icon: Snowflake,
                title: "Confort en toutes saisons",
                description: "En hiver, ouvrez les lames pour laisser passer les rayons du soleil et chauffer naturellement votre intérieur."
              },
              {
                icon: Droplets,
                title: "Étanchéité garantie",
                description: "Profitez de votre terrasse même sous la pluie grâce à un système d'évacuation des eaux intégré et performant."
              },
              {
                icon: Zap,
                title: "Économies d'énergie",
                description: "Réduisez vos coûts de climatisation l'été et de chauffage l'hiver grâce à une régulation thermique naturelle."
              },
              {
                icon: Maximize2,
                title: "Espace de vie supplémentaire",
                description: "Agrandissez votre surface habitable avec un espace convivial utilisable toute l'année, sans permis de construire."
              },
              {
                icon: Shield,
                title: "Durabilité et résistance",
                description: "Aluminium thermolaqué haute qualité, résistant aux UV et intempéries. Garantie 10 ans structure."
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="group rounded-2xl border bg-background p-8 shadow-sm transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 transition-all group-hover:bg-primary/20">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <Typography variant="h3" className="mb-3 text-xl font-semibold">
                  {benefit.title}
                </Typography>
                <Typography variant="p" className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="modeles" className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="mb-12 text-center">
            <Typography variant="h2" className="mb-4 text-4xl font-bold">
              Nos modèles de pergolas et carports
            </Typography>
            <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Solutions sur mesure adaptées à vos besoins et votre budget
            </Typography>
          </div>

          {/* Tabs */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-lg border bg-muted/50 p-1">
              <button
                onClick={() => setActiveTab("bioclimatique")}
                className={cn(
                  "rounded-md px-8 py-3 text-base font-semibold transition-all",
                  activeTab === "bioclimatique"
                    ? "bg-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Pergola Bioclimatique
              </button>
              <button
                onClick={() => setActiveTab("carport")}
                className={cn(
                  "rounded-md px-8 py-3 text-base font-semibold transition-all",
                  activeTab === "carport"
                    ? "bg-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Carport / Toit Fixe
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {activeTab === "bioclimatique" ? (
              <>
                {/* Bioclimatique Content */}
                <div className="space-y-6">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl">
                    <Image
                      src="/images/pergola-bioclimatique.jpg"
                      alt="Pergola bioclimatique avec lames orientables"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <Typography variant="h3" className="text-2xl font-bold">
                    Pergola Bioclimatique à Lames Orientables
                  </Typography>
                  
                  <Typography variant="p" className="text-muted-foreground leading-relaxed">
                    La pergola bioclimatique est équipée de lames orientables qui vous permettent 
                    de contrôler la luminosité et la ventilation selon vos envies. En été, fermez 
                    les lames pour créer de l'ombre et de la fraîcheur. En hiver, ouvrez-les pour 
                    profiter de la chaleur naturelle du soleil.
                  </Typography>

                  <div className="space-y-4">
                    <Typography variant="h4" className="text-lg font-semibold">
                      Caractéristiques techniques :
                    </Typography>
                    <ul className="grid gap-3">
                      {[
                        "Lames orientables motorisées (angle 0° à 135°)",
                        "Structure en aluminium thermolaqué RAL au choix",
                        "Système d'évacuation des eaux intégré",
                        "Télécommande et/ou domotique compatible",
                        "Options : LED, stores latéraux, chauffage infrarouge",
                        "Dimensions sur mesure jusqu'à 7m x 7m par module",
                        "Résistance au vent jusqu'à 130 km/h"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl">
                    <Image
                      src="/images/pergola-bioclimatique-2.jpg"
                      alt="Détail lames orientables pergola"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="rounded-2xl border bg-muted/50 p-8">
                    <Typography variant="h4" className="mb-4 text-xl font-semibold">
                      Configuration personnalisable
                    </Typography>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-2 font-medium">Dimensions</div>
                        <div className="text-sm text-muted-foreground">
                          Sur mesure : de 3m x 3m à 7m x 7m par module
                          <br />
                          Modules assemblables pour grandes surfaces
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 font-medium">Couleurs</div>
                        <div className="text-sm text-muted-foreground">
                          Thermolaquage : palette RAL complète
                          <br />
                          Finitions : mat, satiné, texturé
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 font-medium">Options</div>
                        <div className="text-sm text-muted-foreground">
                          Éclairage LED intégré, stores latéraux ZIP, 
                          <br />
                          chauffage infrarouge, capteurs météo
                        </div>
                      </div>
                    </div>
                    
                    <a
                      href="#devis"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      Demander un devis
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Carport Content */}
                <div className="space-y-6">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl">
                    <Image
                      src="/images/carport.jpg"
                      alt="Carport aluminium toit fixe"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <Typography variant="h3" className="text-2xl font-bold">
                    Carport et Pergola à Toit Fixe
                  </Typography>
                  
                  <Typography variant="p" className="text-muted-foreground leading-relaxed">
                    Le carport offre une protection permanente contre les intempéries. Idéal pour 
                    abriter votre véhicule, votre salon de jardin ou créer un espace couvert pour 
                    votre cuisine d'été. Structure identique à la pergola bioclimatique avec une 
                    toiture fixe isolée.
                  </Typography>

                  <div className="space-y-4">
                    <Typography variant="h4" className="text-lg font-semibold">
                      Caractéristiques techniques :
                    </Typography>
                    <ul className="grid gap-3">
                      {[
                        "Panneaux sandwich isolés (40mm d'épaisseur)",
                        "Structure en aluminium thermolaqué",
                        "Isolation thermique et phonique renforcée",
                        "Gouttières intégrées avec évacuation",
                        "Options : éclairage LED, bardage latéral",
                        "Dimensions sur mesure adaptées à vos besoins",
                        "Résistance optimale aux charges de neige"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl">
                    <Image
                      src="/images/carport-2.jpg"
                      alt="Carport double pour deux véhicules"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="rounded-2xl border bg-muted/50 p-8">
                    <Typography variant="h4" className="mb-4 text-xl font-semibold">
                      Utilisations multiples
                    </Typography>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-2 font-medium">Protection véhicules</div>
                        <div className="text-sm text-muted-foreground">
                          Protégez votre voiture, moto ou vélo des intempéries, 
                          UV, gel et grêle toute l'année.
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 font-medium">Espace de vie extérieur</div>
                        <div className="text-sm text-muted-foreground">
                          Créez un coin salon de jardin, une cuisine d'été 
                          ou un espace de stockage couvert et sécurisé.
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 font-medium">Extension de maison</div>
                        <div className="text-sm text-muted-foreground">
                          Agrandissez votre espace habitable sans travaux 
                          lourds ni permis de construire.
                        </div>
                      </div>
                    </div>
                    
                    <a
                      href="#devis"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      Demander un devis
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="mb-12 text-center">
            <Typography variant="h2" className="mb-4 text-4xl font-bold">
              Nos réalisations en Gironde
            </Typography>
            <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Découvrez quelques-unes de nos installations récentes
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div
                key={item}
                className="group relative h-[300px] overflow-hidden rounded-xl cursor-pointer"
              >
                <Image
                  src={`/images/realisation-${item}.jpg`}
                  alt={`Réalisation pergola ${item}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <Typography variant="h4" className="text-lg font-semibold text-white">
                    Projet {item}
                  </Typography>
                  <Typography variant="p" className="text-sm text-white/80">
                    Bordeaux Métropole
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="mb-16 text-center">
            <Typography variant="h2" className="mb-4 text-4xl font-bold">
              Notre accompagnement sur mesure
            </Typography>
            <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
              De l'étude de votre projet à l'installation finale, Segment-C vous accompagne à chaque étape
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Consultation gratuite",
                description: "Échange sur votre projet, vos besoins et vos contraintes. Visite sur site si nécessaire."
              },
              {
                step: "02",
                title: "Étude technique",
                description: "Prise de mesures précises, analyse de faisabilité et conception 3D de votre pergola."
              },
              {
                step: "03",
                title: "Devis détaillé",
                description: "Proposition transparente avec options, délais et prix ferme. Sans engagement."
              },
              {
                step: "04",
                title: "Installation",
                description: "Pose professionnelle par nos équipes qualifiées. SAV et garantie 10 ans inclus."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="mb-4 text-6xl font-bold text-primary/20">{step.step}</div>
                <Typography variant="h3" className="mb-3 text-xl font-semibold">
                  {step.title}
                </Typography>
                <Typography variant="p" className="text-muted-foreground leading-relaxed">
                  {step.description}
                </Typography>
                {index < 3 && (
                  <div className="absolute -right-4 top-8 hidden h-0.5 w-8 bg-primary/30 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="devis" className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-0">
          <Typography variant="h2" className="mb-6 text-4xl font-bold md:text-5xl">
            Prêt à transformer votre terrasse ?
          </Typography>
          <Typography variant="p" className="mb-8 text-xl opacity-90">
            Contactez-nous pour un devis gratuit et sans engagement. 
            Nos experts sont à votre écoute pour concrétiser votre projet.
          </Typography>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-background/90 hover:shadow-lg"
            >
              Demander un devis gratuit
            </a>
            <a
              href="tel:+33556000000"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/20 px-8 py-4 text-base font-semibold transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
            >
              Appeler maintenant
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
            <div className="rounded-xl bg-primary-foreground/10 p-6">
              <div className="mb-2 text-2xl font-bold">Gratuit</div>
              <div className="text-sm opacity-80">Devis et déplacement offerts</div>
            </div>
            <div className="rounded-xl bg-primary-foreground/10 p-6">
              <div className="mb-2 text-2xl font-bold">48h</div>
              <div className="text-sm opacity-80">Réponse sous 48h ouvrées</div>
            </div>
            <div className="rounded-xl bg-primary-foreground/10 p-6">
              <div className="mb-2 text-2xl font-bold">10 ans</div>
              <div className="text-sm opacity-80">Garantie structure incluse</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-0">
          <div className="mb-12 text-center">
            <Typography variant="h2" className="mb-4 text-4xl font-bold">
              Questions fréquentes
            </Typography>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Ai-je besoin d'un permis de construire pour une pergola ?",
                answer: "Pour une pergola de moins de 20m², une simple déclaration préalable de travaux suffit. Au-delà de 20m², un permis de construire est nécessaire. Nous vous accompagnons dans ces démarches administratives."
              },
              {
                question: "Quel est le délai d'installation ?",
                answer: "Le délai moyen est de 4 à 6 semaines entre la signature du devis et l'installation. L'installation elle-même prend généralement 2 à 3 jours selon la complexité du projet."
              },
              {
                question: "Les pergolas résistent-elles aux intempéries ?",
                answer: "Oui, nos pergolas sont conçues pour résister aux vents jusqu'à 130 km/h et aux charges de neige importantes. L'aluminium thermolaqué garantit une résistance optimale à la corrosion et aux UV."
              },
              {
                question: "Peut-on motoriser les lames orientables ?",
                answer: "Oui, toutes nos pergolas bioclimatiques sont équipées d'un système de motorisation des lames. Vous pouvez les contrôler via télécommande ou les intégrer à votre système domotique existant."
              },
              {
                question: "Quelle est la garantie sur les pergolas ?",
                answer: "Nous offrons une garantie de 10 ans sur la structure aluminium et 2 ans sur les motorisations et composants électriques. Un SAV réactif est disponible durant toute la durée de vie de votre installation."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border bg-background p-6 shadow-sm transition-all hover:border-primary"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold">
                  <span>{faq.question}</span>
                  <span className="ml-4 transition-transform group-open:rotate-180">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <Typography
                  variant="p"
                  className="mt-4 text-muted-foreground leading-relaxed"
                >
                  {faq.answer}
                </Typography>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}