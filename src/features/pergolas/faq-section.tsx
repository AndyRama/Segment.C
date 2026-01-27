import React from "react";
import { Typography } from "@/components/nowts/typography";
import { FAQItem } from "./faq-item";
import Link from "next/link";
const faqs = [
  {
    question: "Quelle est la différence entre une pergola bioclimatique et une pergola classique ?",
    answer: "La pergola bioclimatique possède des lames orientables motorisées qui permettent de contrôler la luminosité, l'aération et l'étanchéité en temps réel. Une pergola à toit fixe (comme notre modèle Castille) offre une protection permanente mais sans modulation. La bioclimatique s'adapte aux conditions météo et à vos envies pour un confort optimal."
  },
  {
    question: "Faut-il un permis de construire pour installer une pergola ?",
    answer: "Cela dépend de la surface et de votre zone. Moins de 5m² : aucune démarche. Entre 5 et 20m² : déclaration préalable de travaux en mairie. Plus de 20m² ou en zone classée : permis de construire nécessaire. Nous vous accompagnons gratuitement dans toutes vos démarches administratives."
  },
  {
    question: "Quel est le prix d'une pergola bioclimatique ?",
    answer: "Nos pergolas bioclimatiques démarrent à 8 500€ TTC pour le modèle Panama et peuvent atteindre 15 000€+ selon les dimensions, options et personnalisations. Le modèle Nouméa (notre best-seller) est à partir de 9 900€. Nous établissons un devis gratuit détaillé et personnalisé pour chaque projet."
  },
  {
    question: "Quel entretien pour ma pergola ?",
    answer: "L'entretien est minimal. Pergola aluminium : nettoyage à l'eau savonneuse 1 à 2 fois par an. Vérification annuelle de la motorisation (lubrification des mécanismes). Les capteurs automatiques et la qualité des matériaux garantissent une longévité exceptionnelle sans contrainte."
  },
  {
    question: "Quels sont les délais de fabrication et installation ?",
    answer: "Après validation du devis : 4 à 6 semaines de fabrication en France selon le modèle choisi. L'installation professionnelle prend 2 à 5 jours selon la complexité et les options (stores, éclairage, etc.). Nous planifions ensemble les dates qui vous conviennent le mieux."
  },
  {
    question: "Peut-on fermer complètement une pergola avec des vitrages ?",
    answer: "Absolument ! Nous proposons plusieurs solutions de fermeture : vitrages coulissants panoramiques, stores verticaux ZIP motorisés, parois amovibles ou rideaux de verre escamotables. Ces options transforment votre pergola en véritable pièce à vivre, utilisable confortablement toute l'année."
  },
  {
    question: "La pergola résiste-t-elle aux intempéries et au vent ?",
    answer: "Oui, nos pergolas sont conçues pour résister aux conditions les plus extrêmes. Structure calculée pour des vents jusqu'à 150 km/h selon les modèles. Étanchéité parfaite avec évacuation intégrée des eaux de pluie par les montants. Aluminium traité anticorrosion et résistant aux UV."
  },
  {
    question: "Quelles options de motorisation et domotique proposez-vous ?",
    answer: "Nos pergolas bioclimatiques incluent : motorisation Somfy Radio pour les lames orientables, éclairage LED RGB intégré et dimmable, capteurs météo automatiques (pluie, vent, soleil), chauffage infrarouge plafond, contrôle via télécommande ou smartphone (iOS/Android), et compatibilité domotique (Google Home, Alexa, etc.)."
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
            Tout ce que vous devez savoir sur nos pergolas bioclimatiques
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
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-700 px-6 py-3 font-semibold text-white transition-all hover:from-green-500 hover:to-green-700 hover:shadow-lg"
          >
            Nous contacter
          </Link>
        </div> */}
      </div>
    </section>
  );
}