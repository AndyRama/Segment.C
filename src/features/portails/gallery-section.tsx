import React from "react";
import Image from "next/image";
import { Typography } from "@/components/nowts/typography";

export function GallerySection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-950/50 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
            Portfolio
          </div>
          <Typography variant="h2" className="mb-4 text-4xl font-bold">
            Nos réalisations en Gironde
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Découvrez quelques-unes de nos installations récentes
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group relative h-[350px] overflow-hidden rounded-xl cursor-pointer ring-1 ring-emerald-200/50 dark:ring-emerald-800/50 hover:ring-2 hover:ring-emerald-500 transition-all"
            >
              <Image
                src={`/images/portail-realisation-${item}.jpg`}
                alt={`Réalisation portail ${item}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <Typography variant="p" className="text-lg font-semibold text-white">
                  {item % 2 === 0 ? "Portail coulissant" : "Portail battant"}
                </Typography>
                <Typography variant="p" className="text-sm text-white/80">
                  Bordeaux • {2024 - (item % 2)}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}