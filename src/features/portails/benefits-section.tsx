import React from "react";
import { Typography } from "@/components/nowts/typography";
import { Shield, Lock, Home, Zap, Maximize2, Leaf, Wrench } from "lucide-react";
import { BenefitCard } from "./benefit-card";

const benefits = [
  {
    icon: Shield,
    title: "Sécurité renforcée",
    description: "Protégez votre famille et vos biens avec des portails robustes et des systèmes de verrouillage haute sécurité.",
    color: "from-green-400 to-green-600"
  },
  {
    icon: Lock,
    title: "Motorisation intelligente",
    description: "Contrôlez l'accès à distance avec nos systèmes de motorisation connectés et sécurisés.",
    color: "from-green-400 to-green-600"
  },
  {
    icon: Home,
    title: "Valorisation de l'habitat",
    description: "Augmentez la valeur de votre propriété avec un portail design qui sublime votre entrée.",
    color: "from-green-400 to-green-600"
  },
  {
    icon: Zap,
    title: "Installation rapide",
    description: "Pose professionnelle en 1 à 2 jours avec mise en service complète et formation incluse.",
    color: "from-green-400 to-green-600"
  },
  {
    icon: Maximize2,
    title: "Sur mesure",
    description: "Dimensions, matériaux, couleurs et design personnalisés selon vos contraintes et envies.",
    color: "from-green-400 to-green-600"
  },
  {
    icon: Wrench,
    title: "Maintenance facile",
    description: "Matériaux résistants nécessitant peu d'entretien. SAV réactif et pièces de rechange disponibles.",
    color: "from-green-400 to-green-600"
  }
];

export function BenefitsSection() {
  return (
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
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}