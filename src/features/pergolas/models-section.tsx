import React from "react";
import { Typography } from "@/components/nowts/typography";
import { ModelCard } from "./model-card";

const models = [
  {
    name: "Pergola Nouméa",
    description: "Pergola bioclimatique haut de gamme avec lames orientables motorisées. Le summum du confort pour votre terrasse avec design contemporain et technologie avancée.",
    features: [
      "Lames aluminium orientables à 135°",
      "Motorisation Somfy avec télécommande",
      "Capteurs pluie et vent automatiques",
      "Étanchéité parfaite avec gouttières intégrées",
      "Éclairage LED RGB intégré",
      "Fixation autoportante ou murale"
    ],
    image: "/images/Noumea.png",
    price: "9 900€",
    link: "https://oriasun.fr/pergola-noumea/",
    highlighted: true
  },
  {
    name: "Pergola Panama",
    description: "Pergola bioclimatique au design épuré et moderne. Idéale pour créer un espace extérieur confortable avec contrôle optimal de la luminosité et de la ventilation.",
    features: [
      "Structure aluminium thermolaqué",
      "Lames orientables motorisées",
      "Système d'évacuation d'eau intégré",
      "Options: stores latéraux, éclairage",
      "Résistance aux UV et intempéries",
      "Garantie fabricant 10 ans"
    ],
    image: "/images/Panama.jpg",
    price: "8 500€",
    link: "https://oriasun.fr/pergola-panama/"
  },
  {
    name: "Pergola Castille",
    description: "Pergola à toit fixe robuste et élégante. Solution économique et durable pour protéger votre terrasse tout en conservant un design contemporain.",
    features: [
      "Toiture fixe en aluminium",
      "Étanchéité garantie",
      "Structure renforcée",
      "Large choix de coloris RAL",
      "Options: stores, éclairage, chauffage",
      "Installation rapide en 2-3 jours"
    ],
    image: "/images/Castille.jpg",
    price: "4 900€",
    link: "https://oriasun.fr/pergola-toit-fixe-castille/"
  }
];

export function ModelsSection() {
  return (
    <section id="modeles" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-950/50 px-4 py-2 text-sm font-medium text-amber-700 dark:text-amber-400">
            Nos modèles
          </div>
          <Typography variant="h2" className="mb-4 text-4xl font-bold">
            Nos pergolas bioclimatiques
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Trois modèles d'exception pour sublimer votre extérieur et profiter de votre terrasse toute l'année
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {models.map((model, index) => (
            <ModelCard key={index} {...model} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 rounded-2xl border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/30 dark:from-amber-950/30 dark:to-orange-950/20 p-8 text-center">
          <Typography variant="h3" className="mb-4 text-2xl font-bold">
            Besoin d'un modèle personnalisé ?
          </Typography>
          <Typography variant="p" className="mb-6 text-muted-foreground">
            Chaque pergola peut être adaptée à vos dimensions et besoins spécifiques. 
            Contactez-nous pour un projet sur mesure.
          </Typography>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-950 px-6 py-3 text-sm font-medium border border-amber-200 dark:border-amber-800">
              ✓ Dimensions personnalisables
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-950 px-6 py-3 text-sm font-medium border border-amber-200 dark:border-amber-800">
              ✓ 30+ coloris RAL disponibles
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-950 px-6 py-3 text-sm font-medium border border-amber-200 dark:border-amber-800">
              ✓ Options modulables
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}