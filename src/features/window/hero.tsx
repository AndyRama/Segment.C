"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";

type FenetresHeroProps = {
  className?: string;
}

export default function FenetresHero({ className }: FenetresHeroProps) {
  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-16", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Contenu texte */}
        <div className="space-y-6">
          <Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl">
            Nos fenêtres
          </Typography>
          
          <Typography variant="p" className="text-muted-foreground leading-relaxed">
            Spécialiste de la menuiserie depuis plus de 20 ans, Segment-C vous 
            accompagne dans le choix de vos fenêtres et baies vitrées. Que ce soit 
            en PVC, aluminium, bois ou matériaux mixtes, nous proposons des solutions 
            sur-mesure adaptées à votre habitat. Performance énergétique, isolation 
            acoustique et design contemporain s'allient pour transformer votre 
            intérieur en véritable cocon de bien-être. Découvrez notre expertise 
            au service de vos projets de construction ou de rénovation.
          </Typography>
        </div>
        
        {/* Image */}
        <div className="relative">
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/hero-fenetres.jpg"
              alt="Intérieur moderne avec grandes fenêtres et baies vitrées"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};