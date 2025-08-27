"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";

type PortesServiceHeroProps = {
  className?: string;
}

export default function PortesServiceHero({ className }: PortesServiceHeroProps) {
  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-16", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Contenu texte */}
        <div className="space-y-6">
          <Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl">
            Nos portes d'entrée'
          </Typography>
          
          <Typography variant="p" className="text-muted-foreground leading-relaxed">
            Pratiques et fonctionnelles, nos portes de service sont conçues pour 
            faciliter vos déplacements quotidiens. Accès direct au garage, à la cave, 
            au cellier ou vers l'extérieur, elles optimisent la circulation dans votre 
            habitat tout en préservant l'isolation thermique de vos espaces de vie. 
            Robustes et sécurisées, nos modèles allient praticité et esthétique pour 
            s'intégrer harmonieusement à votre architecture. Segment-C vous propose 
            des solutions adaptées à chaque configuration de logement.
          </Typography>
        </div>
        
        {/* Image */}
        <div className="relative">
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/porte.jpg"
              alt="Porte de service moderne avec végétation"
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