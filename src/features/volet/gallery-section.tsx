import React from "react";
import Image from "next/image";
import { Typography } from "@/components/nowts/typography";

export function GallerySection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-950/50 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-400">
            Portfolio
          </div>
          <Typography variant="h2" className="mb-4 text-4xl font-bold">
            Nos réalisations en Gironde
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Découvrez quelques-unes de nos installations de volets récentes
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { type: "Volets roulants", location: "Bordeaux", year: 2024 },
            { type: "Volets battants ALU", location: "Mérignac", year: 2024 },
            { type: "Volets roulants", location: "Arcachon", year: 2023 },
            { type: "Volets battants bois", location: "Pessac", year: 2024 },
            { type: "Volets coulissants", location: "Bègles", year: 2023 },
            { type: "Persiennes", location: "Talence", year: 2024 }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative h-[350px] overflow-hidden rounded-xl cursor-pointer ring-1 ring-blue-200/50 dark:ring-blue-800/50 hover:ring-2 hover:ring-blue-500 transition-all"
            >
              <Image
                src={`/images/volet-realisation-${index + 1}.jpg`}
                alt={`Réalisation ${item.type}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <Typography variant="p" className="text-lg font-semibold text-white">
                  {item.type}
                </Typography>
                <Typography variant="p" className="text-sm text-white/80">
                  {item.location} • {item.year}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Typography variant="p" className="mb-6 text-muted-foreground">
            Plus de 1000 volets installés en Gironde et Nouvelle-Aquitaine
          </Typography>
        </div>
      </div>
    </section>
  );
}