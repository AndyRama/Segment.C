import React from "react";
import { Typography } from "@/components/nowts/typography";
import { ProcessStep } from "./process-step";

const processSteps = [
  {
    step: "01",
    title: "Visite & mesures",
    description: "Déplacement gratuit à votre domicile pour relever les dimensions exactes et analyser la configuration de vos ouvertures.",
    color: "from-green-500 to-indigo-600"
  },
  {
    step: "02",
    title: "Devis personnalisé",
    description: "Proposition détaillée avec choix des modèles, matériaux, coloris et options. Tarif transparent sans frais cachés.",
    color: "from-indigo-500 to-purple-600"
  },
  {
    step: "03",
    title: "Fabrication",
    description: "Fabrication française sur mesure de vos volets dans nos ateliers. Contrôle qualité rigoureux à chaque étape.",
    color: "from-purple-500 to-pink-600"
  },
  {
    step: "04",
    title: "Installation",
    description: "Pose professionnelle en 1 à 2 jours. Mise en service complète et vérification du bon fonctionnement.",
    color: "from-pink-500 to-red-600"
  }
];

export function ProcessSection() {
  return (
    <section className="bg-green-50/30 dark:bg-green-950/5 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 dark:bg-green-950/50 px-4 py-2 text-sm font-medium text-green-700 dark:text-green-400">
            Notre méthode
          </div>
          <Typography variant="h2" className="mb-4 text-4xl font-bold">
            De l'étude à l'installation
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Un processus simple et transparent pour votre projet de volets
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
        <div className="mt-12 rounded-2xl border-2 border-green-200 dark:border-green-800 bg-white dark:bg-slate-950 p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">48h</div>
              <div className="text-sm text-muted-foreground">Délai de réponse pour votre devis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">2-3 semaines</div>
              <div className="text-sm text-muted-foreground">Fabrication sur mesure en France</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1-2 jours</div>
              <div className="text-sm text-muted-foreground">Installation professionnelle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}