import React from "react";
import Link from "next/link";
import { Typography } from "@/components/nowts/typography";
import { FAQItem } from "./faq-item";

const faqs = [
  {
    question: "Quelle est la différence entre un volet roulant et un volet battant ?",
    answer: "Le volet roulant s'enroule verticalement dans un coffre et offre un gain de place maximal, une meilleure isolation et peut être motorisé facilement. Le volet battant s'ouvre latéralement comme une porte, offre un style plus traditionnel et ne nécessite pas de coffre. Le choix dépend de votre configuration, votre budget et vos préférences esthétiques."
  },
  {
    question: "Faut-il un permis pour installer des volets ?",
    answer: "En général, l'installation de volets ne nécessite pas de permis de construire mais peut nécessiter une déclaration préalable en mairie, notamment en zone protégée (secteur sauvegardé, abords de monuments historiques). Dans certaines copropriétés, l'accord du syndic peut être requis. Nous vous accompagnons dans vos démarches administratives."
  },
  {
    question: "Quel est le prix d'un volet roulant motorisé ?",
    answer: "Le prix varie selon les dimensions, le matériau (ALU, PVC, bois) et le type de motorisation. Comptez entre 400€ et 1200€ par volet roulant motorisé posé, selon les spécifications. Nous établissons un devis gratuit détaillé et personnalisé pour votre projet."
  },
  {
    question: "Quel entretien pour mes volets ?",
    answer: "Volets aluminium et PVC : nettoyage à l'eau savonneuse 2 fois par an. Volets bois : lasure ou peinture tous les 3-5 ans selon exposition. Volets roulants motorisés : vérification annuelle du mécanisme et lubrification des rails recommandées. Tous nos volets sont conçus pour un entretien minimal."
  },
  {
    question: "Quelle motorisation choisir pour mes volets roulants ?",
    answer: "Nous proposons 3 types : Moteur filaire (économique, nécessite câblage), Moteur radio io/RTS (contrôle à distance, programmable), Moteur solaire (autonome, écologique, pas de câblage). Le choix dépend de votre installation existante et de votre budget. Tous sont compatibles avec la domotique."
  },
  {
    question: "Les volets roulants isolent-ils vraiment ?",
    answer: "Oui ! Un volet roulant bien installé améliore l'isolation thermique jusqu'à 30% en créant une lame d'air entre le volet et la fenêtre. Il réduit aussi les nuisances sonores de 3 à 5 dB. En été, il protège de la chaleur, en hiver il limite les déperditions. C'est un excellent investissement pour réduire vos factures énergétiques."
  },
  {
    question: "Quels sont les délais d'installation ?",
    answer: "Après validation du devis : 2 à 3 semaines de fabrication en France. L'installation elle-même prend 1 à 2 jours selon le nombre de volets et la complexité (avec ou sans motorisation). Nous planifions ensemble les dates qui vous conviennent le mieux."
  },
  {
    question: "Puis-je motoriser mes volets battants existants ?",
    answer: "Oui, dans la plupart des cas ! Nous proposons des systèmes de motorisation adaptables sur volets battants existants (bras articulés). Cela nécessite une visite technique pour vérifier la faisabilité et l'état des volets. La motorisation améliore grandement le confort d'utilisation au quotidien."
  }
];

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 lg:px-0">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 dark:bg-green-950/50 px-4 py-2 text-sm font-medium text-green-700 dark:text-green-400">
            FAQ
          </div>
          <Typography variant="h2" className="mb-4 text-4xl font-bold">
            Questions fréquentes
          </Typography>
          <Typography variant="p" className="text-muted-foreground">
            Tout ce que vous devez savoir sur nos volets roulants et battants
          </Typography>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>

        {/* Additional Help */}
        {/* <div className="mt-12 text-center rounded-2xl border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-green-50/30 dark:from-green-950/30 dark:to-green-950/20 p-8">
          <Typography variant="h3" className="mb-3 text-xl font-semibold">
            Une autre question ?
          </Typography>
          <Typography variant="p" className="mb-6 text-muted-foreground">
            Notre équipe est disponible pour répondre à toutes vos questions et vous conseiller sur votre projet.
          </Typography>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-green-600 px-6 py-3 font-semibold text-white transition-all hover:from-green-700 hover:to-green-700 hover:shadow-lg"
          >
            Nous contacter
          </Link>
        </div> */}
      </div>
    </section>
  );
}