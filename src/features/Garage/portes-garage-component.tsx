"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { Button, buttonVariants } from "@/components/ui/button";
import { X, Star, Shield, Phone, Mail, MapPin, Zap, Settings, Lock, Home } from "lucide-react";

type PorteGarageProps = {
  id: number;
  name: string;
  category: string;
  type: string;
  material: string;
  motorisation: string;
  image: string;
  colors: string[];
  features: string[];
  description: string;
  priceRange: string;
  rating: number;
  dimensions: string;
  fournisseur: string;
  isPopular?: boolean;
  isNew?: boolean;
}

type PortesGarageSectionProps = {
  className?: string;
}

const PortesGarageSection = ({ className }: PortesGarageSectionProps) => {
  const [selectedPorte, setSelectedPorte] = useState<PorteGarageProps | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const [filters, setFilters] = useState({
    type: "all",
    material: "all",
    motorisation: "all"
  });

  const portesGarage: PorteGarageProps[] = [
    // Portes Sectionnelles
    {
      id: 1,
      name: "SECTIONNELLE ISOLÉE",
      category: "porte-garage",
      type: "sectionnelle",
      material: "acier",
      motorisation: "manuelle",
      image: "/images/porte-garage-sectionnelle.jpg",
      colors: ["Blanc", "Gris anthracite", "Vert", "Bleu"],
      features: ["Double paroi isolée", "Levée verticale", "Gain de place", "Isolation thermique"],
      description: "Porte de garage sectionnelle isolée à levée verticale. Excellent compromis entre isolation, robustesse et encombrement minimal.",
      priceRange: "800€ - 1200€",
      rating: 4.7,
      dimensions: "240x200 à 300x250 cm",
      fournisseur: "C2R",
      isPopular: true
    },
    {
      id: 2,
      name: "SECTIONNELLE MOTORISÉE",
      category: "porte-garage",
      type: "sectionnelle",
      material: "acier",
      motorisation: "electrique",
      image: "/images/porte-garage-sectionnelle-motorisee.jpg",
      colors: ["Blanc", "Gris", "Anthracite", "Vert sapin"],
      features: ["Motorisation intégrée", "Télécommande", "Éclairage LED", "Sécurité anti-écrasement"],
      description: "Porte sectionnelle avec motorisation électrique intégrée. Confort d'utilisation maximum avec sécurités renforcées.",
      priceRange: "1200€ - 1800€",
      rating: 4.8,
      dimensions: "240x200 à 300x250 cm",
      fournisseur: "C2R",
      isPopular: true
    },
    {
      id: 3,
      name: "SECTIONNELLE PREMIUM ALU",
      category: "porte-garage",
      type: "sectionnelle",
      material: "aluminium",
      motorisation: "electrique",
      image: "/images/porte-garage-sectionnelle-alu.jpg",
      colors: ["Gris anthracite", "Blanc", "Bronze", "Noir mat"],
      features: ["Panneaux aluminium", "Design contemporain", "Résistance corrosion", "Motorisation silencieuse"],
      description: "Porte sectionnelle aluminium haut de gamme. Design moderne et performances exceptionnelles pour les garages contemporains.",
      priceRange: "1500€ - 2200€",
      rating: 4.9,
      dimensions: "240x200 à 350x250 cm",
      fournisseur: "C2R",
      isNew: true
    },
    // Portes Enroulables
    {
      id: 4,
      name: "ENROULABLE COMPACTE",
      category: "porte-garage",
      type: "enroulable",
      material: "aluminium",
      motorisation: "electrique",
      image: "/images/porte-garage-enroulable.jpg",
      colors: ["Blanc", "Gris", "Anthracite"],
      features: ["Enroulement vertical", "Gain de place maximal", "Lames aluminium", "Coffre discret"],
      description: "Porte de garage enroulable pour gain de place optimal. Solution idéale pour les garages avec contraintes d'espace.",
      priceRange: "1400€ - 2000€",
      rating: 4.6,
      dimensions: "240x200 à 300x220 cm",
      fournisseur: "C2R"
    },
    {
      id: 5,
      name: "ENROULABLE ISOLÉE PREMIUM",
      category: "porte-garage",
      type: "enroulable",
      material: "aluminium",
      motorisation: "electrique",
      image: "/images/porte-garage-enroulable-isolee.jpg",
      colors: ["Gris anthracite", "Blanc", "Bronze"],
      features: ["Lames isolées", "Motorisation haute qualité", "Télécommande programmable", "Sécurité renforcée"],
      description: "Porte enroulable isolée haut de gamme avec motorisation premium. Performance thermique et confort d'usage exceptionnels.",
      priceRange: "1800€ - 2600€",
      rating: 4.8,
      dimensions: "240x200 à 350x250 cm",
      fournisseur: "C2R",
      isNew: true
    },
    // Portes Basculantes
    {
      id: 6,
      name: "BASCULANTE TRADITIONNELLE",
      category: "porte-garage",
      type: "basculante",
      material: "acier",
      motorisation: "manuelle",
      image: "/images/porte-garage-basculante.jpg",
      colors: ["Blanc", "Vert", "Bleu", "Gris"],
      features: ["Système basculant", "Robustesse éprouvée", "Prix attractif", "Installation simple"],
      description: "Porte basculante traditionnelle en acier. Solution économique et fiable pour équiper votre garage.",
      priceRange: "500€ - 800€",
      rating: 4.4,
      dimensions: "240x200 à 280x220 cm",
      fournisseur: "C2R"
    },
    {
      id: 7,
      name: "BASCULANTE MOTORISÉE",
      category: "porte-garage",
      type: "basculante",
      material: "acier",
      motorisation: "electrique",
      image: "/images/porte-garage-basculante-motorisee.jpg",
      colors: ["Blanc", "Gris", "Vert sapin"],
      features: ["Motorisation adaptée", "Télécommande", "Système basculant renforcé", "Sécurité d'usage"],
      description: "Porte basculante avec kit de motorisation. Combine tradition et modernité pour un confort d'utilisation optimal.",
      priceRange: "900€ - 1300€",
      rating: 4.5,
      dimensions: "240x200 à 280x220 cm",
      fournisseur: "C2R"
    },
    // Portes Battantes
    {
      id: 8,
      name: "BATTANTES BOIS TRADITIONAL",
      category: "porte-garage",
      type: "battante",
      material: "bois",
      motorisation: "manuelle",
      image: "/images/porte-garage-battante-bois.jpg",
      colors: ["Chêne naturel", "Pin lasuré", "Vert traditionnel", "Rouge basque"],
      features: ["Bois massif", "Style authentique", "Ventilation naturelle", "Charme régional"],
      description: "Portes battantes bois au charme traditionnel. Authenticité et élégance pour les propriétés de caractère.",
      priceRange: "700€ - 1200€",
      rating: 4.6,
      dimensions: "240x200 à 280x220 cm",
      fournisseur: "C2R"
    },
    {
      id: 9,
      name: "BATTANTES ALU CONTEMPORAINES",
      category: "porte-garage",
      type: "battante",
      material: "aluminium",
      motorisation: "electrique",
      image: "/images/porte-garage-battante-alu.jpg",
      colors: ["Gris anthracite", "Blanc", "Noir mat"],
      features: ["Design moderne", "Motorisation intégrée", "Résistance optimale", "Ouverture vers l'extérieur"],
      description: "Portes battantes aluminium motorisées au design contemporain. Alliance parfaite entre esthétique et fonctionnalité.",
      priceRange: "1300€ - 1900€",
      rating: 4.7,
      dimensions: "240x200 à 300x220 cm",
      fournisseur: "C2R"
    },
    // Portes Coulissantes
    {
      id: 10,
      name: "COULISSANTE LATÉRALE",
      category: "porte-garage",
      type: "coulissante",
      material: "acier",
      motorisation: "manuelle",
      image: "/images/porte-garage-coulissante.jpg",
      colors: ["Blanc", "Gris", "Vert"],
      features: ["Coulissement latéral", "Pas d'encombrement plafond", "Robustesse acier", "Installation adaptable"],
      description: "Porte coulissante latérale pour garages avec contraintes de hauteur. Solution pratique et robuste.",
      priceRange: "800€ - 1200€",
      rating: 4.5,
      dimensions: "240x200 à 300x220 cm",
      fournisseur: "C2R"
    },
    {
      id: 11,
      name: "COULISSANTE MOTORISÉE ALU",
      category: "porte-garage",
      type: "coulissante",
      material: "aluminium",
      motorisation: "electrique",
      image: "/images/porte-garage-coulissante-alu.jpg",
      colors: ["Anthracite", "Blanc", "Bronze"],
      features: ["Motorisation électrique", "Rail de guidage renforcé", "Design épuré", "Fonctionnement silencieux"],
      description: "Porte coulissante aluminium motorisée. Modernité et performance pour une utilisation quotidienne confortable.",
      priceRange: "1200€ - 1700€",
      rating: 4.7,
      dimensions: "240x200 à 320x220 cm",
      fournisseur: "C2R"
    },
    // Porte Spéciale
    {
      id: 12,
      name: "SECTIONNELLE HUBLOTS",
      category: "porte-garage",
      type: "sectionnelle",
      material: "acier",
      motorisation: "electrique",
      image: "/images/porte-garage-hublots.jpg",
      colors: ["Blanc", "Gris anthracite"],
      features: ["Hublots intégrés", "Éclairage naturel", "Motorisation premium", "Design architectural"],
      description: "Porte sectionnelle avec hublots pour apporter lumière naturelle dans le garage. Esthétique soignée et fonctionnalité.",
      priceRange: "1400€ - 2000€",
      rating: 4.8,
      dimensions: "240x200 à 300x250 cm",
      fournisseur: "C2R",
      isNew: true
    }
  ];

  const typeFilters = [
    { key: "all", label: "Tous types" },
    { key: "sectionnelle", label: "Sectionnelles" },
    { key: "enroulable", label: "Enroulables" },
    { key: "basculante", label: "Basculantes" },
    { key: "battante", label: "Battantes" },
    { key: "coulissante", label: "Coulissantes" }
  ];

  const materialFilters = [
    { key: "all", label: "Tous matériaux" },
    { key: "acier", label: "Acier" },
    { key: "aluminium", label: "Aluminium" },
    { key: "bois", label: "Bois" }
  ];

  const motorisationFilters = [
    { key: "all", label: "Toutes motorisations" },
    { key: "manuelle", label: "Manuelle" },
    { key: "electrique", label: "Électrique" }
  ];

  const filteredPortes = portesGarage.filter(porte => {
    return (filters.type === "all" || porte.type === filters.type) &&
           (filters.material === "all" || porte.material === filters.material) &&
           (filters.motorisation === "all" || porte.motorisation === filters.motorisation);
  });

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredPortes.length));
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setVisibleCount(9);
  };

  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-20", className)}>
      <PortesGarageHeader />
      <PortesGarageFilters 
        typeFilters={typeFilters}
        materialFilters={materialFilters}
        motorisationFilters={motorisationFilters}
        activeFilters={filters}
        onFilterChange={handleFilterChange}
      />
      <PortesGarageGrid 
        portes={filteredPortes.slice(0, visibleCount)}
        onPorteClick={setSelectedPorte}
      />
      
      {visibleCount < filteredPortes.length && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleShowMore}
            className="bg-primary text-white hover:bg-primary/90"
          >
            Voir plus de portes de garage
          </Button>
        </div>
      )}

      {selectedPorte && (
        <PorteGarageModal 
          porte={selectedPorte}
          onClose={() => setSelectedPorte(null)}
        />
      )}
    </section>
  );
};

const PortesGarageHeader = () => (
  <div className="mb-12 space-y-4 text-center">
    <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
      Notre sélection de Portes de Garage
    </Typography>
    <Typography variant="large" className="mx-auto max-w-3xl text-muted-foreground">
      Sécurisez et protégez votre garage avec nos portes adaptées à tous les besoins. 
      Sectionnelles, enroulables, basculantes, battantes ou coulissantes, manuelles 
      ou motorisées, trouvez la solution parfaite pour votre garage.
    </Typography>
  </div>
);

const PortesGarageFilters = ({ 
  typeFilters,
  materialFilters,
  motorisationFilters,
  activeFilters, 
  onFilterChange 
}: {
  typeFilters: { key: string; label: string }[];
  materialFilters: { key: string; label: string }[];
  motorisationFilters: { key: string; label: string }[];
  activeFilters: { type: string; material: string; motorisation: string };
  onFilterChange: (filterType: string, value: string) => void;
}) => (
  <div className="mb-8 space-y-4">
    <div className="flex flex-wrap justify-center gap-2">
      <span className="mr-2 self-center text-sm font-medium text-muted-foreground">Types:</span>
      {typeFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={activeFilters.type === filter.key ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("type", filter.key)}
          className={cn(
            "transition-all duration-200",
            activeFilters.type === filter.key 
              ? "bg-primary text-white" 
              : "hover:bg-primary/10"
          )}
        >
          {filter.label}
        </Button>
      ))}
    </div>
    
    <div className="flex flex-wrap justify-center gap-2">
      <span className="mr-2 self-center text-sm font-medium text-muted-foreground">Matériaux:</span>
      {materialFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={activeFilters.material === filter.key ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("material", filter.key)}
          className={cn(
            "transition-all duration-200",
            activeFilters.material === filter.key 
              ? "bg-primary text-white" 
              : "hover:bg-primary/10"
          )}
        >
          {filter.label}
        </Button>
      ))}
    </div>

    <div className="flex flex-wrap justify-center gap-2">
      <span className="mr-2 self-center text-sm font-medium text-muted-foreground">Motorisation:</span>
      {motorisationFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={activeFilters.motorisation === filter.key ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("motorisation", filter.key)}
          className={cn(
            "transition-all duration-200",
            activeFilters.motorisation === filter.key 
              ? "bg-primary text-white" 
              : "hover:bg-primary/10"
          )}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  </div>
);

const PortesGarageGrid = ({ 
  portes, 
  onPorteClick 
}: {
  portes: PorteGarageProps[];
  onPorteClick: (porte: PorteGarageProps) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {portes.map((porte, index) => (
      <PorteGarageCard 
        key={porte.id}
        porte={porte}
        index={index}
        onClick={() => onPorteClick(porte)}
      />
    ))}
  </div>
);

const PorteGarageCard = ({ 
  porte, 
  index, 
  onClick 
}: {
  porte: PorteGarageProps;
  index: number;
  onClick: () => void;
}) => {
  const delay = index * 0.1;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.6 }
      }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1">
          {porte.isNew && (
            <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
              Nouveau
            </span>
          )}
          {porte.isPopular && (
            <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
              Populaire
            </span>
          )}
        </div>
        
        <div className="relative h-64">
          <Image
            src={porte.image}
            alt={porte.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
        </div>
        
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{porte.name}</h3>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{porte.rating}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-blue-100 px-2 py-1 capitalize text-blue-800">
              {porte.type}
            </span>
            <span className="rounded-full bg-green-100 px-2 py-1 capitalize text-green-800">
              {porte.material}
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 capitalize text-purple-800">
              {porte.motorisation}
            </span>
          </div>
          
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {porte.description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{porte.dimensions}</span>
            <span className="text-blue-600 font-medium">{porte.fournisseur}</span>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="font-semibold text-primary">{porte.priceRange}</span>
            <Button size="sm" variant="outline" className="text-xs">
              Voir détails
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PorteGarageModal = ({ 
  porte, 
  onClose 
}: {
  porte: PorteGarageProps;
  onClose: () => void;
}) => {
  const { data: session } = useSession();

  const getPerformanceIcon = (feature: string) => {
    if (feature.includes('Motorisation') || feature.includes('Électrique') || feature.includes('Télécommande')) return Zap;
    if (feature.includes('Sécurité') || feature.includes('anti-écrasement')) return Lock;
    if (feature.includes('Isolation') || feature.includes('isolée')) return Shield;
    if (feature.includes('LED') || feature.includes('Éclairage')) return Home;
    return Settings;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg bg-white">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        >
          <X size={20} />
        </button>

        <div className="flex h-full max-h-[90vh] overflow-y-auto">
          <div className="hidden md:block md:w-1/2">
            <div className="relative h-full min-h-[500px]">
              <Image
                src={porte.image}
                alt={porte.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full space-y-6 p-6 md:w-1/2">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <h2 className="text-2xl font-bold">{porte.name}</h2>
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{porte.rating}</span>
                </div>
              </div>
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm capitalize text-blue-800">
                  {porte.type}
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm capitalize text-green-800">
                  {porte.material}
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-1 text-sm capitalize text-purple-800">
                  {porte.motorisation}
                </span>
              </div>
              
              <p className="text-xl font-semibold text-primary">{porte.priceRange}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4">
              <div>
                <Typography variant="small" className="text-muted-foreground">Fournisseur</Typography>
                <Typography variant="small" className="font-semibold text-blue-600">{porte.fournisseur}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Dimensions</Typography>
                <Typography variant="small" className="font-semibold">{porte.dimensions}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Type</Typography>
                <Typography variant="small" className="font-semibold capitalize">{porte.type}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Motorisation</Typography>
                <Typography variant="small" className="font-semibold capitalize">{porte.motorisation}</Typography>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Description</h3>
              <p className="leading-relaxed text-muted-foreground">
                {porte.description}
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Caractéristiques</h3>
              <div className="grid grid-cols-1 gap-2">
                {porte.features.map((feature, index) => {
                  const IconComponent = getPerformanceIcon(feature);
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <IconComponent size={16} className="text-green-600" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Couleurs disponibles</h3>
              <div className="flex flex-wrap gap-2">
                {porte.colors.map((color, index) => (
                  <span 
                    key={index}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {session ? (
                <Link 
                  href="/account/devis" 
                  className={buttonVariants({ 
                    size: "default", 
                    className: "flex-1 bg-primary text-white hover:bg-primary/90" 
                  })}
                >
                  Demander un devis
                </Link>
              ) : (
                <Link 
                  href="/auth/signin?callbackUrl=%2Faccount%2Fdevis" 
                  className={buttonVariants({ 
                    size: "default", 
                    className: "flex-1 bg-primary text-white hover:bg-primary/90" 
                  })}
                >
                  Se connecter pour un devis
                </Link>
              )}
              <Button 
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Fermer
              </Button>
            </div>

            <div className="mt-6 rounded-lg bg-gray-50 p-4">
              <h4 className="mb-3 font-semibold">Ou contactez-nous directement</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={14} />
                  <span>05 56 12 34 56</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} />
                  <span>contact@segment-c.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>St Jean d'Illac, Gironde</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortesGarageSection;