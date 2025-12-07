"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import QuoteRequestModule from "@/features/landing/quote-request-module"; 

import { 
  MapPin, 
  Clock, 
  Car, 
  CheckCircle,
  Navigation,
  Home,
  Building2,
  Waves,
  MapPinned,
  ChevronDown,
  ChevronUp
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
  icon?: React.ReactNode;
  description: string;
  services: string[];
}

export const ServiceAreaSection = ({ className }: ServiceAreaSectionProps) => {
  const [showAllAreas, setShowAllAreas] = React.useState(false);
  
  const areas: AreaProps[] = [
    { 
      name: "St Jean d'Illac", 
      distance: "0 km", 
      duration: "5 min", 
      projects: 25,
      featured: true,
      icon: <Home className="size-5" />,
      description: "Notre atelier principal",
      services: [
        "Installation de fenêtres PVC, bois et aluminium",
        "Portes d'entrée sur mesure",
        "Baies vitrées coulissantes",
        "Vérandas et pergolas",
        "Intervention rapide pour tous vos projets"
      ]
    },
    { 
      name: "Cap Ferret", 
      distance: "55 km", 
      duration: "45 min", 
      projects: 15,
      icon: <Waves className="size-5" />,
      description: "Bassin d'Arcachon",
      services: [
        "Fenêtres résistantes aux embruns",
        "Baies vitrées grand format vue mer",
        "Vérandas bioclimatiques",
        "Portes-fenêtres coulissantes",
        "Villas et résidences secondaires"
      ]
    },
    { 
      name: "Mérignac", 
      distance: "12 km", 
      duration: "15 min", 
      projects: 22,
      icon: <Building2 className="size-5" />,
      description: "Particuliers et professionnels",
      services: [
        "Pose de fenêtres double vitrage",
        "Rénovation de devantures commerciales",
        "Portes d'entrée blindées",
        "Volets roulants",
        "Équipement maisons et locaux professionnels"
      ]
    },
    { 
      name: "Bordeaux", 
      distance: "15 km", 
      duration: "20 min", 
      projects: 18,
      icon: <MapPinned className="size-5" />,
      description: "Centre et quartiers",
      services: [
        "Rénovation menuiseries dans l'ancien",
        "Remplacement fenêtres cachet historique",
        "Portes d'entrée de caractère",
        "Vitrines de commerces",
        "Tous quartiers : Chartrons, Bastide, Caudéran, etc."
      ]
    },
    { 
      name: "Le Bouscat", 
      distance: "13 km", 
      duration: "18 min", 
      projects: 9,
      description: "Zone résidentielle",
      services: [
        "Menuiseries résidentielles",
        "Rénovation et neuf"
      ]
    },
    { 
      name: "Talence", 
      distance: "18 km", 
      duration: "23 min", 
      projects: 15,
      description: "Secteur universitaire",
      services: [
        "Projets résidentiels",
        "Menuiseries sur mesure"
      ]
    }
  ];

  // Affichage conditionnel des zones (uniquement en mobile)
  const hiddenAreasCount = areas.length - 2;

  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-20", className)}>
      <ServiceAreaHeader />
      
      {/* Introduction SEO */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 max-w-4xl mx-auto text-left md:text-center space-y-4"
      >
        <Typography variant="p" className="text-lg leading-relaxed">
          Artisan menuisier local depuis plus de 15 ans, <strong>Segment-C</strong> est votre spécialiste de la pose et rénovation de menuiseries sur mesure. 
          Nous accompagnons particuliers et professionnels sur l'ensemble du bassin d'Arcachon et la métropole bordelaise.
        </Typography>
      </motion.div>

      {/* Zones principales détaillées */}
      <div className="mb-16">
        <Typography variant="h3" className="mb-8 text-center text-2xl font-semibold">
          Nos principales zones d'intervention
        </Typography>
        
        {/* Grille desktop : toutes les cartes affichées */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {areas.map((area, index) => (
            <DetailedAreaCard key={area.name} area={area} index={index} />
          ))}
        </div>

        {/* Grille mobile : 2 cartes + bouton voir plus */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-6">
            {areas.slice(0, 2).map((area, index) => (
              <DetailedAreaCard key={area.name} area={area} index={index} />
            ))}
            
            {/* Cartes cachées affichées conditionnellement */}
            {showAllAreas && areas.slice(2).map((area, index) => (
              <DetailedAreaCard key={area.name} area={area} index={index + 2} />
            ))}
          </div>

          {/* Bouton "Voir plus / Voir moins" - visible uniquement en mobile */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 flex justify-center"
          >
            <button
              onClick={() => setShowAllAreas(!showAllAreas)}
              className="group flex items-center gap-2 rounded-lg border border-[#19CE61]/30 bg-white px-6 py-3 font-medium text-[#19CE61] transition-all hover:bg-[#19CE61]/5 hover:border-[#19CE61]/50"
            >
              {showAllAreas ? (
                <>
                  <span>Voir moins</span>
                  <ChevronUp className="size-5 transition-transform group-hover:-translate-y-0.5" />
                </>
              ) : (
                <>
                  <span>Voir plus de zones ({hiddenAreasCount})</span>
                  <ChevronDown className="size-5 transition-transform group-hover:translate-y-0.5" />
                </>
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Section carte et liste complémentaire */}
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <ServiceAreaMap />
        <AdditionalAreas areas={areas} />
      </div>

      {/* Garanties */}
      <ServiceGuarantees />
    </section>
  );
};

const ServiceAreaHeader = () => (
  <div className="mb-16 space-y-4 text-center">
    <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
      Votre menuisier de confiance en Gironde
    </Typography>
    <Typography variant="large" className="mx-auto max-w-3xl text-muted-foreground">
      Basé à St Jean d'Illac, nous intervenons dans toute la région bordelaise
    </Typography>
  </div>
);

const DetailedAreaCard = ({ area, index }: { area: AreaProps; index: number }) => {
  const delay = index * 0.1;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.5 }
      }}
      viewport={{ once: true }}
      className={cn(
        "relative rounded-xl border p-5 transition-all duration-300 hover:shadow-lg",
        area.featured 
          ? "bg-gradient-to-br from-[#19CE61]/5 to-[#19CE61]/10 border-[#19CE61]/30" 
          : "bg-white hover:border-[#19CE61]/20"
      )}
    >
      {/* Badge "Notre atelier" positionné en haut à droite */}
      {area.featured && (
        <div className="absolute top-3 right-3 z-10">
          <span className="rounded-full bg-[#19CE61] px-2.5 py-1 text-[10px] font-medium text-white shadow-sm">
            🏠 Notre atelier
          </span>
        </div>
      )}

      {/* Header avec icône et info */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={cn(
            "rounded-lg p-2.5",
            area.featured ? "bg-[#19CE61]/20 text-[#19CE61]" : "bg-gray-100 text-gray-600"
          )}>
            {area.icon}
          </div>
          
          <div>
            <Typography variant="p" className={cn(
              "text-lg font-semibold",
              area.featured && "text-[#19CE61]"
            )}>
              {area.name}
            </Typography>
            <Typography variant="small" className="text-xs text-muted-foreground">
              {area.description}
            </Typography>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-base font-semibold text-[#19CE61]">{area.projects}</div>
          <div className="text-[10px] text-muted-foreground">projets</div>
        </div>
      </div>

      {/* Distance et durée */}
      <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground border-t border-b border-gray-100 py-2">
        <span className="flex items-center gap-1">
          <MapPin size={12} />
          {area.distance}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} />
          ~{area.duration}
        </span>
      </div>

      {/* Services */}
      <div className="space-y-1.5">
        {area.services.map((service, idx) => (
          <div key={idx} className="flex items-start gap-2 text-xs">
            <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-[#19CE61]" />
            <span className="text-muted-foreground leading-relaxed">{service}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

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
    <div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-[#19CE61]/5 to-[#19CE61]/10">
      {/* Placeholder pour la carte */}
      <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="space-y-4 text-center">
          <Navigation className="mx-auto size-16 text-[#19CE61]" />
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
          <div className="space-y-2 rounded-lg bg-white/95 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm font-medium">
              <MapPin size={16} className="text-[#19CE61]" />
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

const AdditionalAreas = ({ areas }: { areas: AreaProps[] }) => (
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
        Rayon d'intervention : 70 km
      </Typography>
      <Typography variant="p" className="text-muted-foreground">
        Nous couvrons également de nombreuses communes autour de St Jean d'Illac
      </Typography>
    </div>

    <div className="rounded-lg border bg-gradient-to-br from-gray-50 to-white p-6">
      <Typography variant="p" className="mb-4 font-semibold">
        Autres communes desservies
      </Typography>
      <div className="grid grid-cols-2 gap-3 text-sm">
        {[
          "Pessac",
          "Gradignan",
          "Cestas",
          "Arcachon",
          "La Teste-de-Buch",
          "Andernos-les-Bains",
          "Lège-Cap-Ferret",
          "Biganos",
          "Marcheprime",
          "Martignas-sur-Jalle",
          "Saint-Médard-en-Jalles",
          "Eysines"
        ].map((city) => (
          <div key={city} className="flex items-center gap-2">
            <div className="size-1.5 rounded-full bg-[#19CE61]" />
            <span className="text-muted-foreground">{city}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="rounded-lg bg-[#19CE61]/5 p-6 border border-[#19CE61]/20">
      <div className="flex items-start gap-3">
        <div className="rounded-full bg-[#19CE61] p-2">
          <Car className="size-5 text-white" />
        </div>
        <div>
          <Typography variant="p" className="mb-2 font-semibold">
            Déplacement gratuit pour étude de votre projet
          </Typography>
          <Typography variant="small" className="text-muted-foreground">
            Nous nous déplaçons gratuitement dans un rayon de 70 km autour de St Jean d'Illac 
            pour tous vos projets de menuiserie, quelle que soit leur envergure.
          </Typography>
        </div>        
      </div>
    </div>

    <div>
      <QuoteRequestModule/>
    </div>
  </motion.div>
);      

const ServiceGuarantees = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-16"
  >
    <div className="rounded-xl border bg-gradient-to-br from-[#19CE61]/5 to-white p-8">
      <div className="mb-6 flex items-center gap-3">
        <CheckCircle className="size-8 text-[#19CE61]" />
        <Typography variant="h3" className="text-2xl font-semibold">
          Garanties incluses
        </Typography>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Déplacement gratuit", desc: "Dans un rayon de 70 km" },
          { label: "Devis gratuit", desc: "Sous 48h" },
          { label: "Intervention rapide", desc: "Planning flexible" },
          { label: "SAV de proximité", desc: "Suivi personnalisé" }
        ].map((guarantee, idx) => (
          <div key={idx} className="flex items-start gap-3 rounded-lg bg-white p-4">
            <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-[#19CE61]" />
            <div>
              <div className="font-semibold">{guarantee.label}</div>
              <div className="text-sm text-muted-foreground">{guarantee.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);