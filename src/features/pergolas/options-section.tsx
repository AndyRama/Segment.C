import React from "react";
import Image from "next/image";
import { Typography } from "@/components/nowts/typography";
import { Check } from "lucide-react";

const options = [
  {
    category: "Fermetures & Protection",
    items: [
      "Stores verticaux ZIP motorisés",
      "Vitrages coulissants panoramiques",
      "Parois amovibles transparentes",
      "Rideaux de verre escamotables"
    ],
    image: "/images/pergola-stores.jpg"
  },
  {
    category: "Confort & Ambiance",
    items: [
      "Éclairage LED RGB intégré",
      "Chauffage infrarouge plafond",
      "Ventilateurs de plafond",
      "Système audio Bluetooth"
    ],
    image: "/images/pergola-eclairage.jpg"
  },
  {
    category: "Automatisation",
    items: [
      "Capteurs météo intelligents",
      "Contrôle domotique smartphone",
      "Programmation horaire",
      "Intégration Google Home / Alexa"
    ],
    image: "/images/pergola-domotique.jpg"
  }
];

export function OptionsSection() {
  return (
    <section className="relative bg-white dark:bg-transparent py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-950/50 px-4 py-2 text-sm font-medium text-amber-700 dark:text-amber-400">
            Personnalisation
          </div>
          <Typography variant="h2" className="mb-4 text-4xl font-bold">
            Options & Accessoires
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Personnalisez votre pergola avec nos options pour un confort optimal
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {options.map((option, index) => (
            <div
              key={index}
              className="group rounded-2xl border-2 border-amber-200 dark:border-amber-800 bg-white dark:bg-slate-950 overflow-hidden transition-all hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={option.image}
                  alt={option.category}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent" />
                <Typography variant="h3" className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  {option.category}
                </Typography>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {option.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Color Options */}
        <div className="mt-12 rounded-2xl border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/30 dark:from-amber-950/30 dark:to-orange-950/20 p-8">
          <div className="text-center mb-6">
            <Typography variant="h3" className="mb-2 text-2xl font-bold">
              Plus de 200 couleurs RAL disponibles
            </Typography>
            <Typography variant="p" className="text-muted-foreground">
              Choisissez la couleur parfaite pour harmoniser votre pergola avec votre habitation
            </Typography>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { name: "Blanc", color: "bg-white border-2 border-gray-300" },
              { name: "Gris anthracite", color: "bg-gray-800" },
              { name: "Noir", color: "bg-black" },
              { name: "Beige", color: "bg-amber-100" },
              { name: "Brun", color: "bg-amber-800" },
              { name: "Vert", color: "bg-green-700" },
              { name: "Bleu", color: "bg-blue-600" },
              { name: "Rouge", color: "bg-red-600" }
            ].map((colorOption) => (
              <div key={colorOption.name} className="flex items-center gap-2 bg-white dark:bg-slate-950 rounded-lg px-4 py-2 border border-amber-200 dark:border-amber-800">
                <div className={`w-6 h-6 rounded-full ${colorOption.color}`} />
                <span className="text-sm font-medium">{colorOption.name}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 bg-white dark:bg-slate-950 rounded-lg px-4 py-2 border border-amber-200 dark:border-amber-800">
              <span className="text-sm font-medium">+ 190 autres couleurs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}