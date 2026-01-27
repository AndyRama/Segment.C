import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/nowts/typography";
import { Check } from "lucide-react";

const clotureFeatures = [
  "Panneaux aluminium de 1m à 2m de hauteur",
  "Lames horizontales ou verticales au choix",
  "Occultation totale ou partielle",
  "Poteaux renforcés galvanisés",
  "Fixation sur muret, platine ou à sceller",
  "Portillon assorti disponible",
  "Résistance aux intempéries garantie"
];

const clotureTypes = [
  {
    title: "Clôture occultante",
    description: "Protection totale de votre intimité avec panneaux pleins. Différents styles de lames pour s'adapter à votre architecture."
  },
  {
    title: "Clôture ajourée",
    description: "Délimitation élégante tout en conservant la vue. Espacement des lames personnalisable selon vos besoins."
  },
  {
    title: "Garde-corps",
    description: "Sécurisez vos terrasses et balcons avec nos garde-corps conformes aux normes, design et résistants."
  }
];

export function CloturesContent() {
  return (
    <>
      <div className="space-y-6">
        <div className="relative h-[400px] overflow-hidden rounded-2xl ring-1 ring-emerald-200/50 dark:ring-emerald-800/50">
          <Image
            src="/images/cloture-aluminium.jpg"
            alt="Clôture en aluminium"
            fill
            className="object-cover"
          />
        </div>
        
        <Typography variant="h3" className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
          Clôtures & Garde-Corps
        </Typography>
        
        <Typography variant="p" className="text-muted-foreground leading-relaxed">
          Délimitez votre propriété avec style grâce à nos clôtures aluminium. 
          Occultantes ou ajourées, elles s'harmonisent parfaitement avec votre portail 
          pour un ensemble cohérent. Nous proposons également des garde-corps pour 
          sécuriser terrasses, balcons et escaliers.
        </Typography>

        <div className="space-y-4">
          <Typography variant="p" className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
            Caractéristiques techniques :
          </Typography>
          <ul className="grid gap-3">
            {clotureFeatures.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        <div className="relative h-[400px] overflow-hidden rounded-2xl ring-1 ring-emerald-200/50 dark:ring-emerald-800/50">
          <Image
            src="/images/cloture-design.jpg"
            alt="Clôture design moderne"
            fill
            className="object-cover"
          />
        </div>

        <div className="rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/30 dark:to-green-950/20 p-8">
          <Typography variant="p" className="mb-4 text-xl font-semibold text-emerald-700 dark:text-emerald-400">
            Types de clôtures
          </Typography>
          <div className="space-y-4">
            {clotureTypes.map((type, index) => (
              <div key={index}>
                <div className="mb-2 font-medium text-emerald-700 dark:text-emerald-400">
                  {type.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {type.description}
                </div>
              </div>
            ))}
          </div>
          
          <Link
            href="#devis"
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white transition-all hover:from-emerald-700 hover:to-green-700 hover:shadow-lg"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </>
  );
}