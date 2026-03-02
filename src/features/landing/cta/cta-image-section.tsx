"use client";

import { Typography } from "@/components/nowts/typography";
import { SectionLayout } from "../section-layout";
import Link from "next/link";

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
        
        {/* Bouton de la modale avec style personnalisé */}
        <Link 
          href={"https://segment-c.com/auth/signin?callbackUrl=%2Faccount%2Fdevis"}
          className="rounded-md border-2 border-black bg-green-500 px-6 py-3 font-semibold shadow-2xl transition-all duration-300 hover:bg-transparent hover:text-green-500 sm:px-8 sm:py-4"
        >
          Demande de devis
        </Link>
      </SectionLayout>
    </div>
  );
};