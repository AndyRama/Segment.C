"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";

type VerandasHeroProps = {
  className?: string;
};

export default function VerandasHero({ className }: VerandasHeroProps) {
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
            Nos vérandas
          </Typography>
          <Typography
            variant="p"
            className="text-muted-foreground leading-relaxed"
          >
            Créez votre pièce à vivre supplémentaire avec nos vérandas sur
            mesure. Espace détente, salle à manger d'été ou jardin d'hiver, nos
            réalisations s'adaptent parfaitement à vos besoins et au style de
            votre habitation. Segment-C conçoit et installe des vérandas alliant
            design contemporain et performance thermique, pour que vous puissiez
            profiter de cet espace unique en toutes saisons. Aluminium, PVC ou
            bois, toiture vitrée ou isolée, personnalisez votre extension selon
            vos envies et votre budget.
          </Typography>
          
          {/* Bouton CTA */}
          <Link
            href="/veranda/catalogue"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Découvrir notre catalogue
          </Link>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg lg:h-[500px]">
            <Image
              src="/images/veranda.jpg"
              alt="Véranda moderne lumineuse avec mobilier de jardin"
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