import React from "react";
import { Typography } from "@/components/nowts/typography";
import { ShieldCheck, Lock, Volume2, Thermometer, Zap, Home } from "lucide-react";
import { BenefitCard } from "./benefit-card";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Sécurité renforcée",
    description: "Protection anti-effraction avec système de verrouillage automatique. Résistance aux tentatives d'intrusion pour votre tranquillité.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Thermometer,
    title: "Isolation thermique",
    description: "Réduction jusqu'à 30% des déperditions de chaleur. Économies d'énergie garanties été comme hiver.",
    color: "from-red-500 to-orange-600"
  },
  {
    icon: Volume2,
    title: "Isolation acoustique",
    description: "Atténuation des nuisances sonores extérieures. Confort acoustique optimal pour votre intérieur.",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Zap,
    title: "Motorisation intelligente",
    description: "Contrôle à distance via télécommande ou smartphone. Programmation horaire et capteurs automatiques.",
    color: "from-amber-500 to-yellow-600"
  },
  {
    icon: Lock,
    title: "Occultation totale",
    description: "Obscurcissement complet pour un sommeil réparateur. Protection de votre intimité garantie.",
    color: "from-slate-500 to-gray-600"
  },
  {
    icon: Home,
    title: "Valorisation immobilière",
    description: "Augmentez la valeur de votre bien. Esthétique soignée et équipements modernes recherchés.",
    color: "from-green-500 to-emerald-600"
  }
];

export function BenefitsSection() {
  return (
    <section className="relative bg-blue-50/30 dark:bg-blue-950/5 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-950/50 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-400">
            <ShieldCheck className="h-4 w-4" />
            Avantages
          </div>
          <Typography variant="h2" className="mb-4 text-4xl font-bold">
            Pourquoi choisir nos volets ?
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Des solutions complètes pour protéger, isoler et valoriser votre habitation
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