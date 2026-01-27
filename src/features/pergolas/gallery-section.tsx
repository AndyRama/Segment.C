import React from "react";
import Image from "next/image";
import { Typography } from "@/components/nowts/typography";

export function GallerySection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-950/50 px-4 py-2 text-sm font-medium text-amber-700 dark:text-amber-400">
            Portfolio
          </div>
          <Typography variant="h2" className="mb-4 text-4xl font-bold">
            Nos réalisations en Gironde
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Découvrez quelques-unes de nos installations de pergolas récentes
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { type: "Pergola Nouméa", location: "Bordeaux", year: 2024 },
            { type: "Pergola Panama", location: "Mérignac", year: 2024 },
            { type: "Pergola Castille", location: "Arcachon", year: 2023 },
            { type: "Pergola Nouméa", location: "Pessac", year: 2024 },
            { type: "Pergola Panama", location: "Bègles", year: 2023 },
            { type: "Pergola Castille", location: "Talence", year: 2024 }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative h-[350px] overflow-hidden rounded-xl cursor-pointer ring-1 ring-amber-200/50 dark:ring-amber-800/50 hover:ring-2 hover:ring-amber-500 transition-all"
            >
              <Image
                src={`/images/pergola-realisation-${index + 1}.jpg`}
                alt={`Réalisation ${item.type}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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

        {/* Gallery CTA */}
        <div className="mt-12 text-center">
          <Typography variant="p" className="mb-6 text-muted-foreground">
            Plus de 200 pergolas installées en Gironde et Nouvelle-Aquitaine
          </Typography>
          <button className="inline-flex items-center justify-center rounded-lg border-2 border-amber-200 dark:border-amber-800 px-8 py-3 text-base font-semibold text-amber-700 dark:text-amber-400 transition-all hover:border-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/30">
            Voir toutes nos réalisations
          </button>
        </div>
      </div>
    </section>
  );
}