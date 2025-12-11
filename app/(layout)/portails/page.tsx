"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { Check, Shield, Lock, Home, Zap, Maximize2, Leaf, Award, Clock, Wrench } from "lucide-react";
import Link from "next/link";

type PortailsPageProps = {
  className?: string;
};

export default function PortailsPage({ className }: PortailsPageProps) {
  const [activeTab, setActiveTab] = useState<"portails" | "clotures">("portails");

  return (
    <div className={cn("w-full", className)}>
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 py-20 lg:px-0">
        {/* Decorative Elements */}
        <div className="absolute left-0 top-0 h-72 w-72 bg-emerald-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute right-0 bottom-0 h-96 w-96 bg-green-500/5 rounded-full blur-3xl -z-10" />
        
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-950/30 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              <Shield className="h-4 w-4" />
              Sécurité & Design
            </div>
            
            <div className="space-y-4">
              <Typography variant="h1" className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Portails &
                <span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Clôtures
                </span>
              </Typography>
              
              <Typography variant="p" className="text-lg text-muted-foreground leading-relaxed">
                Sécurisez et embellissez votre propriété avec nos portails et clôtures 
                sur mesure. Aluminium, acier ou bois, nous concevons des solutions 
                alliant esthétique, sécurité et durabilité pour votre habitation.
              </Typography>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#devis"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-4 text-base font-semibold text-white transition-all hover:from-emerald-700 hover:to-green-700 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="#modeles"
                className="inline-flex items-center justify-center rounded-lg border-2 border-emerald-200 dark:border-emerald-800 px-8 py-4 text-base font-semibold text-emerald-700 dark:text-emerald-400 transition-all hover:border-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30"
              >
                Découvrir nos modèles
              </Link>
            </div>

            {/* Key Features Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-950/30 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <Check className="h-4 w-4" />
                Fabrication française
              </div>
              <div className="flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-950/30 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <Check className="h-4 w-4" />
                Installation en Gironde
              </div>
              <div className="flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-950/30 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <Check className="h-4 w-4" />
                Motorisation disponible
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl lg:h-[600px] ring-1 ring-emerald-200/50 dark:ring-emerald-800/50">
              <Image
                src="/images/portail-moderne.jpg"
                alt="Portail moderne en aluminium"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white dark:bg-slate-950 p-6 shadow-xl border-2 border-emerald-200 dark:border-emerald-800 lg:p-8">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gradient-to-br from-emerald-500 to-green-600 p-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">500+</div>
                  <div className="text-sm text-muted-foreground">Installations réalisées</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative bg-emerald-50/30 dark:bg-emerald-950/5 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-950/50 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
              <Leaf className="h-4 w-4" />
              Avantages
            </div>
            <Typography variant="h2" className="mb-4 text-4xl font-bold">
              Pourquoi choisir nos portails et clôtures ?
            </Typography>
            <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Des solutions complètes pour sécuriser et valoriser votre propriété
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Benefit Cards */}
            {[
              {
                icon: Shield,
                title: "Sécurité renforcée",
                description: "Protégez votre famille et vos biens avec des portails robustes et des systèmes de verrouillage haute sécurité.",
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: Lock,
                title: "Motorisation intelligente",
                description: "Contrôlez l'accès à distance avec nos systèmes de motorisation connectés et sécurisés.",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: Home,
                title: "Valorisation de l'habitat",
                description: "Augmentez la valeur de votre propriété avec un portail design qui sublime votre entrée.",
                color: "from-amber-500 to-orange-600"
              },
              {
                icon: Zap,
                title: "Installation rapide",
                description: "Pose professionnelle en 1 à 2 jours avec mise en service complète et formation incluse.",
                color: "from-yellow-500 to-amber-600"
              },
              {
                icon: Maximize2,
                title: "Sur mesure",
                description: "Dimensions, matériaux, couleurs et design personnalisés selon vos contraintes et envies.",
                color: "from-emerald-500 to-green-600"
              },
              {
                icon: Wrench,
                title: "Maintenance facile",
                description: "Matériaux résistants nécessitant peu d'entretien. SAV réactif et pièces de rechange disponibles.",
                color: "from-slate-500 to-gray-600"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-emerald-100 dark:border-emerald-900 bg-white dark:bg-slate-950 p-8 shadow-sm transition-all hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <div className={cn(
                  "mb-4 inline-flex rounded-xl bg-gradient-to-br p-3 transition-all group-hover:scale-110",
                  benefit.color
                )}>
                  <benefit.icon className="h-6 w-6 text-white" />
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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-950/50 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
              Nos produits
            </div>
            <Typography variant="h2" className="mb-4 text-4xl font-bold">
              Nos gammes de portails et clôtures
            </Typography>
            <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choisissez parmi notre large sélection de modèles ou créez le vôtre sur mesure
            </Typography>
          </div>

          {/* Tabs */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-xl border-2 border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20 p-1.5">
              <button
                onClick={() => setActiveTab("portails")}
                className={cn(
                  "rounded-lg px-8 py-3 text-base font-semibold transition-all",
                  activeTab === "portails"
                    ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-500/25"
                    : "text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300"
                )}
              >
                Portails
              </button>
              <button
                onClick={() => setActiveTab("clotures")}
                className={cn(
                  "rounded-lg px-8 py-3 text-base font-semibold transition-all",
                  activeTab === "clotures"
                    ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-500/25"
                    : "text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300"
                )}
              >
                Clôtures
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {activeTab === "portails" ? (
              <>
                {/* Portails Content */}
                <div className="space-y-6">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl ring-1 ring-emerald-200/50 dark:ring-emerald-800/50">
                    <Image
                      src="/images/portail-coulissant.jpg"
                      alt="Portail coulissant motorisé"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <Typography variant="h3" className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    Portails Coulissants & Battants
                  </Typography>
                  
                  <Typography variant="p" className="text-muted-foreground leading-relaxed">
                    Nos portails allient sécurité, design et confort d'utilisation. Disponibles en 
                    version coulissante (gain de place) ou battante (style traditionnel), ils sont 
                    conçus pour s'adapter parfaitement à votre entrée et peuvent être motorisés 
                    pour un confort optimal au quotidien.
                  </Typography>

                  <div className="space-y-4">
                    <Typography variant="p" className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
                      Caractéristiques techniques :
                    </Typography>
                    <ul className="grid gap-3">
                      {[
                        "Portails coulissants : autoportants, sur rail ou sur poteaux",
                        "Portails battants : 1 ou 2 vantaux motorisables",
                        "Aluminium thermolaqué RAL au choix (200+ couleurs)",
                        "Remplissage : lames pleines, ajourées, semi-ajourées",
                        "Motorisation intégrée avec télécommande",
                        "Serrure électrique + visiophone compatible",
                        "Largeur : de 3m à 5m (extensions possibles)"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl ring-1 ring-emerald-200/50 dark:ring-emerald-800/50">
                    <Image
                      src="/images/portail-design.jpg"
                      alt="Portail design moderne"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/30 dark:to-green-950/20 p-8">
                    <Typography variant="p" className="mb-4 text-xl font-semibold text-emerald-700 dark:text-emerald-400">
                      Styles disponibles
                    </Typography>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-2 font-medium text-emerald-700 dark:text-emerald-400">Contemporain</div>
                        <div className="text-sm text-muted-foreground">
                          Lignes épurées, design minimaliste avec lames horizontales 
                          ou verticales. Parfait pour les maisons modernes.
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 font-medium text-emerald-700 dark:text-emerald-400">Traditionnel</div>
                        <div className="text-sm text-muted-foreground">
                          Portails pleins ou semi-ajourés avec motifs classiques. 
                          Idéal pour les habitations de style traditionnel.
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 font-medium text-emerald-700 dark:text-emerald-400">Design personnalisé</div>
                        <div className="text-sm text-muted-foreground">
                          Créez votre portail unique : découpes laser, inserts décoratifs, 
                          combinaisons de matériaux et de couleurs.
                        </div>
                      </div>
                    </div>
                    
                    <Link
                      href="#devis"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white transition-all hover:from-emerald-700 hover:to-green-700 hover:shadow-lg"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Clotures Content */}
                <div className="space-y-6">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl ring-1 ring-emerald-200/50 dark:ring-emerald-800/50">
                    <Image
                      src="/images/cloture-aluminium.jpg"
                      alt="Clôture en aluminium"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <Typography variant="h3" className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    Clôtures & Garde-Corps
                  </Typography>
                  
                  <Typography variant="p" className="text-muted-foreground leading-relaxed">
                    Délimitez votre propriété avec style grâce à nos clôtures aluminium. 
                    Occultantes ou ajourées, elles s'harmonisent parfaitement avec votre portail 
                    pour un ensemble cohérent. Nous proposons également des garde-corps pour 
                    sécuriser terrasses, balcons et escaliers.
                  </Typography>

                  <div className="space-y-4">
                    <Typography variant="p" className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
                      Caractéristiques techniques :
                    </Typography>
                    <ul className="grid gap-3">
                      {[
                        "Panneaux aluminium de 1m à 2m de hauteur",
                        "Lames horizontales ou verticales au choix",
                        "Occultation totale ou partielle",
                        "Poteaux renforcés galvanisés",
                        "Fixation sur muret, platine ou à sceller",
                        "Portillon assorti disponible",
                        "Résistance aux intempéries garantie"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl ring-1 ring-emerald-200/50 dark:ring-emerald-800/50">
                    <Image
                      src="/images/cloture-design.jpg"
                      alt="Clôture design moderne"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/30 dark:to-green-950/20 p-8">
                    <Typography variant="p" className="mb-4 text-xl font-semibold text-emerald-700 dark:text-emerald-400">
                      Types de clôtures
                    </Typography>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-2 font-medium text-emerald-700 dark:text-emerald-400">Clôture occultante</div>
                        <div className="text-sm text-muted-foreground">
                          Protection totale de votre intimité avec panneaux pleins. 
                          Différents styles de lames pour s'adapter à votre architecture.
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 font-medium text-emerald-700 dark:text-emerald-400">Clôture ajourée</div>
                        <div className="text-sm text-muted-foreground">
                          Délimitation élégante tout en conservant la vue. 
                          Espacement des lames personnalisable selon vos besoins.
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 font-medium text-emerald-700 dark:text-emerald-400">Garde-corps</div>
                        <div className="text-sm text-muted-foreground">
                          Sécurisez vos terrasses et balcons avec nos garde-corps 
                          conformes aux normes, design et résistants.
                        </div>
                      </div>
                    </div>
                    
                    <Link
                      href="#devis"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white transition-all hover:from-emerald-700 hover:to-green-700 hover:shadow-lg"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="relative bg-white dark:bg-transparent py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-950/50 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
              Matériaux
            </div>
            <Typography variant="h2" className="mb-4 text-4xl font-bold">
              Nos matériaux disponibles
            </Typography>
            <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choisissez le matériau adapté à vos besoins et votre budget
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Aluminium",
                description: "Le plus demandé pour sa légèreté, sa résistance et son esthétique moderne. Ne rouille pas et ne nécessite aucun entretien.",
                features: ["Sans entretien", "200+ couleurs RAL", "Très durable", "Léger et robuste"],
                image: "/images/materiau-aluminium.jpg"
              },
              {
                name: "Acier",
                description: "Robustesse maximale pour les grandes ouvertures et les zones exposées. Traitement anticorrosion garantissant une longue durée de vie.",
                features: ["Très robuste", "Grande solidité", "Anti-effraction", "Longue durée"],
                image: "/images/materiau-acier.jpg"
              },
              {
                name: "Bois composite",
                description: "Aspect naturel du bois sans les contraintes d'entretien. Matériau écologique et résistant aux intempéries.",
                features: ["Aspect naturel", "Écologique", "Peu d'entretien", "Isolation"],
                image: "/images/materiau-bois.jpg"
              }
            ].map((material, index) => (
              <div
                key={index}
                className="group rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 bg-white dark:bg-slate-950 overflow-hidden transition-all hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={material.image}
                    alt={material.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent" />
                  <Typography variant="h3" className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {material.name}
                  </Typography>
                </div>
                
                <div className="p-6 space-y-4">
                  <Typography variant="p" className="text-sm text-muted-foreground leading-relaxed">
                    {material.description}
                  </Typography>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {material.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <Check className="h-3 w-3 text-emerald-600 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-950/50 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
              Portfolio
            </div>
            <Typography variant="h2" className="mb-4 text-4xl font-bold">
              Nos réalisations en Gironde
            </Typography>
            <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Découvrez quelques-unes de nos installations récentes
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative h-[350px] overflow-hidden rounded-xl cursor-pointer ring-1 ring-emerald-200/50 dark:ring-emerald-800/50 hover:ring-2 hover:ring-emerald-500 transition-all"
              >
                <Image
                  src={`/images/portail-realisation-${item}.jpg`}
                  alt={`Réalisation portail ${item}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <Typography variant="p" className="text-lg font-semibold text-white">
                    {item % 2 === 0 ? "Portail coulissant" : "Portail battant"}
                  </Typography>
                  <Typography variant="p" className="text-sm text-white/80">
                    Bordeaux • {2024 - (item % 2)}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-emerald-50/30 dark:bg-emerald-950/5 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-950/50 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
              Notre méthode
            </div>
            <Typography variant="h2" className="mb-4 text-4xl font-bold">
              De l'étude à l'installation
            </Typography>
            <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Un processus simple et transparent pour votre projet de portail ou clôture
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Visite & conseils",
                description: "Déplacement gratuit chez vous pour étudier votre projet et vous conseiller sur les meilleures solutions.",
                color: "from-emerald-500 to-green-600"
              },
              {
                step: "02",
                title: "Devis personnalisé",
                description: "Proposition détaillée avec plans, options et tarifs. Pas de frais cachés, tout est transparent.",
                color: "from-green-500 to-teal-600"
              },
              {
                step: "03",
                title: "Fabrication",
                description: "Fabrication sur mesure de votre portail ou clôture selon vos spécifications exactes.",
                color: "from-teal-500 to-cyan-600"
              },
              {
                step: "04",
                title: "Installation",
                description: "Pose professionnelle par nos équipes. Mise en service complète et formation à l'utilisation.",
                color: "from-cyan-500 to-blue-600"
              }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className={cn(
                  "absolute -inset-1 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 blur transition-opacity",
                  step.color
                )} />
                <div className="relative rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 bg-white dark:bg-slate-950 p-6 transition-all group-hover:border-transparent">
                  <div className={cn(
                    "mb-4 text-6xl font-bold bg-gradient-to-br bg-clip-text text-transparent",
                    step.color
                  )}>
                    {step.step}
                  </div>
                  <Typography variant="h3" className="mb-3 text-xl font-semibold">
                    {step.title}
                  </Typography>
                  <Typography variant="p" className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </Typography>
                </div>
                {index < 3 && (
                  <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-gradient-to-r from-emerald-300 to-green-300 dark:from-emerald-700 dark:to-green-700 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="devis" className="relative bg-emerald-600 dark:bg-emerald-700 py-20 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 h-96 w-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-0">
          <Typography variant="h2" className="mb-6 text-4xl font-bold md:text-5xl">
            Prêt à sécuriser votre propriété ?
          </Typography>
          <Typography variant="p" className="mb-8 text-xl opacity-90">
            Contactez Segment-C pour un devis gratuit et personnalisé. 
            Notre équipe est à votre disposition pour tous vos projets.
          </Typography>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-emerald-700 transition-all hover:bg-gray-50 hover:shadow-xl"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="tel:+33671787253"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold transition-all hover:border-white/50 hover:bg-white/10"
            >
              06 71 78 72 53
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 backdrop-blur-sm p-6 border border-white/20">
              <div className="mb-2 text-2xl font-bold">Gratuit</div>
              <div className="text-sm opacity-80">Visite et devis offerts</div>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur-sm p-6 border border-white/20">
              <div className="mb-2 text-2xl font-bold">48h</div>
              <div className="text-sm opacity-80">Réponse rapide garantie</div>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur-sm p-6 border border-white/20">
              <div className="mb-2 text-2xl font-bold">10 ans</div>
              <div className="text-sm opacity-80">Garantie constructeur</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-0">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-950/50 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
              FAQ
            </div>
            <Typography variant="h2" className="mb-4 text-4xl font-bold">
              Questions fréquentes
            </Typography>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Quelle est la différence entre un portail coulissant et battant ?",
                answer: "Le portail coulissant se déplace latéralement sur un rail, idéal pour les terrains en pente ou avec peu de dégagement. Le portail battant s'ouvre comme une porte, nécessitant un espace de débattement mais souvent plus esthétique et économique."
              },
              {
                question: "Faut-il une autorisation pour installer un portail ?",
                answer: "Une déclaration préalable de travaux est généralement nécessaire en zone protégée ou si le portail dépasse 2m de hauteur. Nous vous accompagnons dans ces démarches administratives si besoin."
              },
              {
                question: "Quel est le délai d'installation ?",
                answer: "Comptez 4 à 6 semaines entre la commande et l'installation. La pose elle-même prend 1 à 2 jours selon la complexité du projet (portail simple ou portail + clôture)."
              },
              {
                question: "La motorisation est-elle obligatoire ?",
                answer: "Non, mais fortement recommandée pour votre confort. Nous proposons des motorisations fiables et connectées, contrôlables à distance. Un portail peut être motorisé ultérieurement si prévu dès la conception."
              },
              {
                question: "Quel entretien pour mon portail aluminium ?",
                answer: "L'aluminium ne nécessite quasiment aucun entretien. Un nettoyage à l'eau savonneuse 1 à 2 fois par an suffit. La motorisation doit être vérifiée annuellement (graissage des mécanismes)."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border-2 border-emerald-200 dark:border-emerald-800 bg-white dark:bg-slate-950 p-6 shadow-sm transition-all hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-lg"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-emerald-900 dark:text-emerald-100">
                  <span>{faq.question}</span>
                  <span className="ml-4 transition-transform group-open:rotate-180">
                    <svg
                      className="h-5 w-5 text-emerald-600"
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