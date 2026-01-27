import React from "react";
import { Typography } from "@/components/nowts/typography";
import { Sun, Thermometer, Shield, Zap, Maximize2, Leaf } from "lucide-react";
import { BenefitCard } from "./benefit-card";

const benefits = [
  {
    icon: Sun,
    title: "Confort bioclimatique",
    description: "Contrôlez luminosité et ventilation grâce aux lames orientables. Profitez de votre terrasse par tous les temps.",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Thermometer,
    title: "Température idéale",
    description: "Régulation naturelle de la chaleur. Fraîcheur en été, protection en hiver pour un confort optimal.",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: Shield,
    title: "Protection totale",
    description: "Étanchéité parfaite contre la pluie. Résistance au vent jusqu'à 150 km/h. Structure renforcée et durable.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Zap,
    title: "Motorisation intelligente",
    description: "Contrôle à distance via télécommande ou smartphone. Capteurs automatiques pluie et vent inclus.",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Maximize2,
    title: "Sur mesure",
    description: "Dimensions, couleurs et options personnalisées. Intégration parfaite à votre architecture existante.",
    color: "from-green-500 to-teal-600"
  },
  {
    icon: Leaf,
    title: "Éco-responsable",
    description: "Matériaux recyclables et durables. Réduction de consommation énergétique. Garantie environnementale.",
    color: "from-emerald-500 to-green-600"
  }
];

export function BenefitsSection() {
  return (
    <section className="relative bg-amber-50/30 dark:bg-amber-950/5 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-950/50 px-4 py-2 text-sm font-medium text-amber-700 dark:text-amber-400">
            <Sun className="h-4 w-4" />
            Avantages
          </div>
          <Typography variant="h2" className="mb-4 text-4xl font-bold">
            Pourquoi choisir nos pergolas ?
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Des solutions complètes pour profiter de votre extérieur toute l'année
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}