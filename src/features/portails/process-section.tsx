import React from "react";
import { Typography } from "@/components/nowts/typography";
import { ProcessStep } from "./process-step";

const processSteps = [
  {
    step: "01",
    title: "Visite & conseils",
    description: "Déplacement gratuit chez vous pour étudier votre projet et vous conseiller sur les meilleures solutions.",
    color: "from-green-500 to-green-600"
  },
  {
    step: "02",
    title: "Devis personnalisé",
    description: "Proposition détaillée avec plans, options et tarifs. Pas de frais cachés, tout est transparent.",
    color: "from-green-500 to-green-600"
  },
  {
    step: "03",
    title: "Commande",
    description: "Commande de votre portail ou clôture selon vos spécifications exactes.",
    color: "from-green-500 to-green-600"
  },
  {
    step: "04",
    title: "Installation",
    description: "Pose professionnelle par nos équipes. Mise en service complète et formation à l'utilisation.",
    color: "from-green-500 to-green-600"
  }
];

export function ProcessSection() {
  return (
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
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              {...step}
              showConnector={index < processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}