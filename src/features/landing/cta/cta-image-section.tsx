"use client";

import { Typography } from "@/components/nowts/typography";
import { SectionLayout } from "../section-layout";
import QuoteRequestModule from "@/features/landing/quote-request-module"; 

export const CTAImageSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(images/camion.jpg)`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative"
    >
      {/* Réduction de l'opacité de l'overlay pour éviter les conflits */}
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-[1px]" />
      
      <SectionLayout
        variant="image"
        className="relative z-10 flex min-h-[500px] flex-col items-center justify-center gap-6 text-white drop-shadow-lg"
      >
        <Typography
          variant="h2"
          className="text-center text-4xl sm:text-5xl font-extrabold"
        >
          Prêt à démarrer votre projet ?
        </Typography>
        <Typography className="text-center text-lg font-medium max-w-2xl">
          Remplissez ce formulaire pour planifier notre premier échange et définir les contours de votre futur projet.
        </Typography>

        <div className="relative z-20">
          <QuoteRequestModule 
            className="rounded-md border-2 border-white bg-green-500 px-6 py-3 font-semibold text-white shadow-2xl transition-all duration-300 hover:bg-green-600 hover:border-green-400 sm:px-8 sm:py-4"
          />
        </div>
      </SectionLayout>
    </div>
  );
};