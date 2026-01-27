import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/nowts/typography";
import { Check } from "lucide-react";

const battantsTypes = [
  {
    name: "Volets Battants ALU",
    subtitle: "Moderne et sans entretien",
    features: [
      "À cadre ou à lames verticales",
      "Aluminium thermolaqué RAL",
      "Sans entretien, inoxydable",
      "Léger et résistant",
      "Large choix de coloris",
      "Motorisation disponible"
    ]
  },
  {
    name: "Volets Battants PVC",
    subtitle: "Excellent rapport qualité/prix",
    features: [
      "À cadre ou à lames verticales",
      "Isolation thermique optimale",
      "Résistance aux UV et intempéries",
      "Entretien minimal",
      "Finitions texturées disponibles",
      "Coloris variés"
    ]
  },
  {
    name: "Volets Battants BOIS",
    subtitle: "Charme authentique",
    features: [
      "Pin, chêne ou douglas",
      "Bois traité classe 3A ou 4",
      "À cadre, lames ou panneau massif",
      "Aspect naturel chaleureux",
      "Personnalisation totale",
      "Finitions lasure ou peinture"
    ]
  },
  {
    name: "Volets Coulissants",
    subtitle: "Design contemporain",
    features: [
      "Gain de place maximal",
      "ALU, PVC ou BOIS",
      "Motorisation intégrée possible",
      "Ouverture fluide sur rail",
      "Esthétique moderne",
      "Occultation modulable"
    ]
  }
];

const persiennes = [
  {
    name: "Persiennes ALU",
    type: "Coulissantes",
    description: "Design moderne avec lames orientables pour gérer la lumière"
  },
  {
    name: "Persiennes PVC",
    type: "Pliantes & Coulissantes",
    description: "Solution économique et pratique pour fenêtres en hauteur"
  },
  {
    name: "Persiennes ACIER",
    type: "Pliantes",
    description: "Robustesse maximale pour grande durabilité"
  },
  {
    name: "Persiennes BOIS",
    type: "Pliantes & À cadre",
    description: "Élégance traditionnelle et charme authentique"
  }
];

export function VoletsBattantsContent() {
  return (
    <>
      <div className="col-span-full mb-8">
        <div className="text-center">
          <Typography variant="h3" className="mb-4 text-3xl font-bold bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
            Nos Volets Battants & Coulissants
          </Typography>
          <Typography variant="p" className="mx-auto max-w-3xl text-muted-foreground leading-relaxed">
            Traditionnels ou design, nos volets battants s'adaptent à tous les styles architecturaux. 
            Fabriqués en France avec des matériaux de qualité pour une longévité exceptionnelle.
          </Typography>
        </div>
      </div>

      {battantsTypes.map((model, index) => (
        <div
          key={index}
          className="group relative rounded-2xl border-2 border-green-200 dark:border-green-800 bg-white dark:bg-slate-950 overflow-hidden transition-all hover:border-green-400 dark:hover:border-green-600 hover:shadow-xl hover:shadow-green-500/10"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={`/images/volet-battant-${index + 1}.jpg`}
              alt={model.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <Typography variant="h3" className="text-2xl font-bold text-white mb-1">
                {model.name}
              </Typography>
              <Typography variant="p" className="text-sm text-white/80">
                {model.subtitle}
              </Typography>
            </div>
          </div>

          <div className="p-6">
            <ul className="space-y-3">
              {model.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Persiennes Section */}
      <div className="col-span-full mt-8">
        <Typography variant="p" className="mb-6 text-2xl font-bold text-center">
          Nos Persiennes
        </Typography>
        <div className="grid md:grid-cols-2 gap-6">
          {persiennes.map((persienne, index) => (
            <div
              key={index}
              className="rounded-xl border-2 border-green-200 dark:border-green-800 bg-white dark:bg-slate-950 p-6 transition-all hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  P
                </div>
                <div className="flex-1">
                  <Typography variant="p" className="font-bold text-lg mb-1">
                    {persienne.name}
                  </Typography>
                  <Typography variant="p" className="text-sm text-green-600 dark:text-green-400 mb-2">
                    {persienne.type}
                  </Typography>
                  <Typography variant="p" className="text-sm text-muted-foreground">
                    {persienne.description}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Précadre Section */}
      <div className="col-span-full mt-8 rounded-2xl border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-green-50/30 dark:from-green-950/30 dark:to-green-950/20 p-8">
        <Typography variant="p" className="mb-4 text-2xl font-bold text-center text-green-700 dark:text-green-400">
          Le Précadre Rénovation
        </Typography>
        <Typography variant="p" className="mb-6 text-center text-muted-foreground">
          Solution complète qui s'adapte à tous les types de volets battants (ALU, PVC, BOIS)
        </Typography>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <Typography variant="p" className="font-semibold mb-2">Installation simplifiée</Typography>
            <Typography variant="p" className="text-sm text-muted-foreground">
              Pose rapide sans gros travaux
            </Typography>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <Typography variant="p" className="font-semibold mb-2">Motorisation intégrable</Typography>
            <Typography variant="p" className="text-sm text-muted-foreground">
              Option motorisation disponible
            </Typography>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <Typography variant="p" className="font-semibold mb-2">Moustiquaire intégrée</Typography>
            <Typography variant="p" className="text-sm text-muted-foreground">
              Protection contre les insectes
            </Typography>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="#devis"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-green-600 px-6 py-3 font-semibold text-white transition-all hover:from-green-700 hover:to-green-700 hover:shadow-lg"
          >
            Demander un devis personnalisé
          </Link>
        </div>
      </div>
    </>
  );
}