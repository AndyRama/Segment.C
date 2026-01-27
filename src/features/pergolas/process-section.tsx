import React from "react";
import { Typography } from "@/components/nowts/typography";
import { ProcessStep } from "./process-step";

const processSteps = [
  {
    step: "01",
    title: "Visite technique",
    description: "Déplacement gratuit à votre domicile pour étudier la faisabilité, prendre les mesures exactes et vous conseiller sur le modèle adapté.",
    color: "from-amber-500 to-orange-600"
  },
  {
    step: "02",
    title: "Conception 3D",
    description: "Création d'un plan 3D personnalisé avec visualisation réaliste de votre future pergola. Devis détaillé avec toutes les options.",
    color: "from-orange-500 to-red-600"
  },
  {
    step: "03",
    title: "Fabrication",
    description: "Fabrication sur mesure en France de votre pergola selon vos spécifications. Contrôle qualité à chaque étape de production.",
    color: "from-red-500 to-pink-600"
  },
  {
    step: "04",
    title: "Installation",
    description: "Pose professionnelle en 2 à 5 jours. Mise en service complète, formation à l'utilisation et garantie 10 ans.",
    color: "from-pink-500 to-purple-600"
  }
];

export function ProcessSection() {
  return (
    <section className="bg-amber-50/30 dark:bg-amber-950/5 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-950/50 px-4 py-2 text-sm font-medium text-amber-700 dark:text-amber-400">
            Notre méthode
          </div>
          <Typography variant="h2" className="mb-4 text-4xl font-bold">
            De l'étude à l'installation
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Un processus simple et transparent pour votre projet de pergola
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              {...step}
              showConnector={index < processSteps.length - 1}
            />
          ))}
        </div>

        {/* Timeline Info */}
        <div className="mt-12 rounded-2xl border-2 border-amber-200 dark:border-amber-800 bg-white dark:bg-slate-950 p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">48h</div>
              <div className="text-sm text-muted-foreground">Délai de réponse pour votre devis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">4-6 semaines</div>
              <div className="text-sm text-muted-foreground">Fabrication de votre pergola sur mesure</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">2-5 jours</div>
              <div className="text-sm text-muted-foreground">Installation complète et opérationnelle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}