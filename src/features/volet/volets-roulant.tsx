import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/nowts/typography";
import { Check } from "lucide-react";

const roulantsModels = [
  {
    name: "Clic'n'Go",
    subtitle: "Construction neuve",
    features: [
      "Pose en enroulement intérieur",
      "Bloqueurs automatiques anti-effraction",
      "Aluminium extrudé avec joint étanche",
      "Compatible tous types de coffres tunnel",
      "Ajours pour réglage lumière et air",
      "Motorisation intégrée disponible"
    ]
  },
  {
    name: "Trad'n'Go",
    subtitle: "Spécial réhabilitation",
    features: [
      "Pose dans coffre existant",
      "Préservation de la luminosité",
      "Nouvelle coulisse exclusive C2R",
      "Volet autoporteur facile à installer",
      "Lames aluminium ou bois Pin d'Oregon",
      "Toutes manœuvres compatibles"
    ]
  },
  {
    name: "Fix'n'Go",
    subtitle: "Multi-applications",
    features: [
      "Mécanisme autoporteur universel",
      "S'adapte à n'importe quel coffre",
      "Aucune fixation nécessaire",
      "Coulisse double galbée exclusive",
      "Construction et rénovation",
      "Lame finale avec joint étanche"
    ]
  },
  {
    name: "Therm'Y",
    subtitle: "Spécial demi-linteau",
    features: [
      "Isolation thermique renforcée",
      "Pose spéciale demi-linteau",
      "Économies d'énergie garanties",
      "Étanchéité optimale",
      "Design discret",
      "Compatible motorisation"
    ]
  }
];

export function VoletsRoulantsContent() {
  return (
    <>
      <div className="col-span-full mb-8">
        <div className="text-center">
          <Typography variant="h3" className="mb-4 text-3xl font-bold bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
            Nos Volets Roulants
          </Typography>
          <Typography variant="p" className="mx-auto max-w-3xl text-muted-foreground leading-relaxed">
            Que ce soit pour une construction neuve ou une rénovation, nos volets roulants 
            s'adaptent à toutes les configurations. Fabriqués en France, ils garantissent 
            isolation, sécurité et confort au quotidien.
          </Typography>
        </div>
      </div>

      {roulantsModels.map((model, index) => (
        <div
          key={index}
          className="group relative rounded-2xl border-2 border-green-200 dark:border-green-800 bg-white dark:bg-slate-950 overflow-hidden transition-all hover:border-green-400 dark:hover:border-green-600 hover:shadow-xl hover:shadow-green-500/10"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={`/images/volet-roulant-${index + 1}.jpg`}
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

      {/* Additional Info */}
      <div className="col-span-full mt-8 rounded-2xl border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-green-50/30 dark:from-green-950/30 dark:to-green-950/20 p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Typography variant="p" className="mb-4 text-xl font-bold text-green-700 dark:text-green-400">
              Matériaux disponibles
            </Typography>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm">Aluminium extrudé (standard)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm">PVC haute résistance</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm">Bois Pin d'Oregon traité classe 3A</span>
              </li>
            </ul>
          </div>
          
          <div>
            <Typography variant="p" className="mb-4 text-xl font-bold text-green-700 dark:text-green-400">
              Options de motorisation
            </Typography>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm">Moteur filaire classique</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm">Moteur radio io/RTS</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm">Moteur solaire autonome</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm">Manœuvre de secours intégrée</span>
              </li>
            </ul>
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