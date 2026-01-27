import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/nowts/typography";
import { Check } from "lucide-react";

const portailFeatures = [
  "Portails coulissants : autoportants, sur rail ou sur poteaux",
  "Portails battants : 1 ou 2 vantaux motorisables",
  "Aluminium thermolaqué RAL au choix (200+ couleurs)",
  "Remplissage : lames pleines, ajourées, semi-ajourées",
  "Motorisation intégrée avec télécommande",
  "Serrure électrique + visiophone compatible",
  "Largeur : de 3m à 5m (extensions possibles)"
];

const portailStyles = [
  {
    title: "Contemporain",
    description: "Lignes épurées, design minimaliste avec lames horizontales ou verticales. Parfait pour les maisons modernes."
  },
  {
    title: "Traditionnel",
    description: "Portails pleins ou semi-ajourés avec motifs classiques. Idéal pour les habitations de style traditionnel."
  },
  {
    title: "Design personnalisé",
    description: "Créez votre portail unique : découpes laser, inserts décoratifs, combinaisons de matériaux et de couleurs."
  }
];

export function PortailsContent() {
  return (
    <>
      <div className="space-y-6">
        <div className="relative h-[400px] overflow-hidden rounded-2xl ring-1 ring-emerald-200/50 dark:ring-emerald-800/50">
          <Image
            src="/images/portail-coulissant.jpg"
            alt="Portail coulissant motorisé"
            fill
            className="object-cover"
          />
        </div>
        
        <Typography variant="h3" className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
          Portails Coulissants & Battants
        </Typography>
        
        <Typography variant="p" className="text-muted-foreground leading-relaxed">
          Nos portails allient sécurité, design et confort d'utilisation. Disponibles en 
          version coulissante (gain de place) ou battante (style traditionnel), ils sont 
          conçus pour s'adapter parfaitement à votre entrée et peuvent être motorisés 
          pour un confort optimal au quotidien.
        </Typography>

        <div className="space-y-4">
          <Typography variant="p" className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
            Caractéristiques techniques :
          </Typography>
          <ul className="grid gap-3">
            {portailFeatures.map((feature, i) => (
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
            src="/images/portail-design.jpg"
            alt="Portail design moderne"
            fill
            className="object-cover"
          />
        </div>

        <div className="rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/30 dark:to-green-950/20 p-8">
          <Typography variant="p" className="mb-4 text-xl font-semibold text-emerald-700 dark:text-emerald-400">
            Styles disponibles
          </Typography>
          <div className="space-y-4">
            {portailStyles.map((style, index) => (
              <div key={index}>
                <div className="mb-2 font-medium text-emerald-700 dark:text-emerald-400">
                  {style.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {style.description}
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