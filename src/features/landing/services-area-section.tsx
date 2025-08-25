"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";

import { 
  MapPin, 
  Clock, 
  Car, 
  CheckCircle,
  Navigation
} from "lucide-react";

type ServiceAreaSectionProps = {
  className?: string;
}

type AreaProps = {
  name: string;
  distance: string;
  duration: string;
  projects: number;
  featured?: boolean;
}

export const ServiceAreaSection = ({ className }: ServiceAreaSectionProps) => {
  const areas: AreaProps[] = [
    { name: "St Jean d'Illac", distance: "0 km", duration: "0 min", projects: 25,featured: true },
    { name: "Bordeaux", distance: "55 km", duration: "45 min", projects: 18 },
    { name: "Mérignac", distance: "58 km", duration: "48 min", projects: 22 },
    { name: "Pessac", distance: "60 km", duration: "50 min", projects: 24 },
    { name: "Le Bouscat", distance: "62 km", duration: "52 min", projects: 9 },
    { name: "Talence", distance: "65 km", duration: "55 min", projects: 15 }
  ];

  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-20", className)}>
      <ServiceAreaHeader />
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <ServiceAreaMap />
        <ServiceAreaList areas={areas} />
      </div>
    </section>
  );
};

const ServiceAreaHeader = () => (
  <div className="mb-16 space-y-4 text-center">
    <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
      Nos Zones d'Intervention
    </Typography>
    <Typography variant="large" className="mx-auto max-w-3xl text-muted-foreground">
      Basé à St Jean d'Illac, nous intervenons dans toute la Gironde pour vos projets de menuiserie
    </Typography>
  </div>
);

const ServiceAreaMap = () => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }}
    viewport={{ once: true }}
    className="relative"
  >
    <div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-[#4bb484]/5 to-[#4bb484]/10">
      {/* Placeholder pour la carte - remplacez par votre vraie carte */}
      <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="space-y-4 text-center">
          <Navigation className="mx-auto size-16 text-[#4bb484]" />
          <div>
            <Typography variant="h3" className="mb-2 text-xl font-semibold">
              Zone de St Jean d'Illac
            </Typography>
            <Typography variant="p" className="text-muted-foreground">
              Rayon d'intervention : 70 km
            </Typography>
          </div>
        </div>
      </div>
      
      {/* Overlay avec informations */}
      <div className="absolute inset-0 bg-black/0 transition-all duration-300 hover:bg-black/10">
        <div className="absolute inset-x-4 bottom-4">
          <div className="space-y-2 rounded-lg bg-white/90 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm font-medium">
              <MapPin size={16} className="text-[#4bb484]" />
              <span>Basé à St Jean d'Illac, Nouvelle-Aquitaine</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Car size={14} />
                <span>Déplacements gratuits</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>Intervention rapide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ServiceAreaList = ({ areas }: { areas: AreaProps[] }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }}
    viewport={{ once: true }}
    className="space-y-6"
  >
    <div className="space-y-4">
      <Typography variant="h3" className="text-2xl font-semibold">
        Villes et communes desservies
      </Typography>
      <Typography variant="p" className="text-muted-foreground">
        Nous nous déplaçons gratuitement dans un rayon de 70 km autour de St jean d'illac pour tous vos projets de menuiserie.
      </Typography>
    </div>

    <div className="grid gap-3">
      {areas.map((area, index) => (
        <AreaCard key={area.name} area={area} index={index} />
      ))}
    </div>

    <div className="space-y-3 rounded-lg bg-[#4bb484]/5 p-4">
      <div className="flex items-center gap-2">
        <CheckCircle className="size-5 text-[#4bb484]" />
        <Typography variant="h3" className="font-semibold">
          Garanties incluses
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
        <div className="flex items-center gap-2">
          <CheckCircle size={14} className="text-[#4bb484]" />
          <span>Déplacement gratuit</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle size={14} className="text-[#4bb484]" />
          <span>Devis gratuit</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle size={14} className="text-[#4bb484]" />
          <span>Intervention rapide</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle size={14} className="text-[#4bb484]" />
          <span>SAV de proximité</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const AreaCard = ({ area, index }: { area: AreaProps; index: number }) => {
  const delay = index * 0.05;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.4 }
      }}
      viewport={{ once: true }}
      className={cn(
        "flex items-center justify-between p-4 rounded-lg border transition-all duration-200 hover:shadow-md",
        area.featured 
          ? "bg-primary/5 border-primary/20" 
          : "bg-white hover:bg-gray-50"
      )}
    >
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-2 h-2 rounded-full",
          area.featured ? "bg-[#4bb484]" : "bg-gray-300"
        )} />
        <div>
          <div className="flex items-center gap-2">
            <span className={cn(
              "font-medium",
              area.featured && "text-[#4bb484]"
            )}>
              {area.name}
            </span>
            {area.featured && (
              <span className="rounded-full bg-[#4bb484] px-2 py-0.5 text-xs text-white">
                Notre base
              </span>
            )}
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>{area.distance}</span>
            <span>~{area.duration}</span>
          </div>
        </div>
      </div>
      
      <div className="text-right">
        <div className="text-sm font-medium">{area.projects}</div>
        <div className="text-xs text-muted-foreground">projets</div>
      </div>
    </motion.div>
  );
};
