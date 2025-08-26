"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";

type BaiesVitreesHeroProps = {
  className?: string;
}

export default function BaiesVitreesHero({ className }: BaiesVitreesHeroProps) {
  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-16", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Contenu texte */}
        <div className="space-y-6">
          <Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl">
            Nos baies vitrées
          </Typography>
          
          <Typography variant="p" className="text-muted-foreground leading-relaxed">
            Transformez votre habitat en ouvrant grand sur l'extérieur. Nos baies 
            vitrées créent une continuité naturelle entre vos espaces intérieurs 
            et votre jardin, terrasse ou balcon. Coulissantes, pliantes ou battantes, 
            elles maximisent la luminosité tout en préservant l'isolation thermique 
            et acoustique. Segment-C vous accompagne dans le choix de la solution 
            parfaite pour agrandir visuellement vos pièces et profiter pleinement 
            de vos espaces extérieurs, quelle que soit la saison.
          </Typography>
        </div>
        
        {/* Image */}
        <div className="relative">
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/fenetre2.jpg"
              alt="Salon moderne avec grande baie vitrée ouvrant sur l'extérieur"
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