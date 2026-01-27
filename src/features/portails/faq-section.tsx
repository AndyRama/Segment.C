import React from "react";
import { Typography } from "@/components/nowts/typography";
import { FAQItem } from "./faq-item";

const faqs = [
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
];

export function FAQSection() {
  return (
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
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}