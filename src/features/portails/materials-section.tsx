import React from "react";
import { Typography } from "@/components/nowts/typography";
import { MaterialCard } from "./material-card";

const materials = [
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
];

export function MaterialsSection() {
  return (
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
          {materials.map((material, index) => (
            <MaterialCard key={index} {...material} />
          ))}
        </div>
      </div>
    </section>
  );
}