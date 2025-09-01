"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";

type PergolasHeroProps = {
  className?: string;
};

export default function PergolasHero({ className }: PergolasHeroProps) {
  return (
    <section
      className={cn(
        "relative mx-auto w-full max-w-7xl px-4 py-16 lg:px-0",
        className,
      )}
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Contenu texte */}
        <div className="space-y-6">
          <Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl">
            Nos Pergolas
          </Typography>

          <Typography
            variant="p"
            className="text-muted-foreground leading-relaxed"
          >
            Transformez votre espace extérieur avec nos pergolas sur mesure. 
            Terrasse ombragée, espace détente ou salle à manger d'été, nos 
            réalisations s'adaptent parfaitement à votre mode de vie et au 
            style de votre habitation. Segment-C conçoit et installe des 
            pergolas alliant design moderne et fonctionnalité, pour que vous 
            puissiez profiter pleinement de votre jardin et terrasse en toutes 
            saisons. Bioclimatique, aluminium, bois ou acier, toiture 
            rétractable ou lames orientables, personnalisez votre espace 
            extérieur selon vos envies et votre budget.
          </Typography>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg lg:h-[500px]">
            <Image
              src="/images/pergolas.jpg"
              alt="pergolas moderne en bois idéal pour terrasse"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
