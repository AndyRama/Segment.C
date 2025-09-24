"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { Button, buttonVariants } from "@/components/ui/button";
import { X, Star, Shield, Phone, Mail, MapPin, Zap, Lock, Home, Fence } from "lucide-react";

type PortailProps = {
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

type PortailsSectionProps = {
  className?: string;
}

const PortailsSection = ({ className }: PortailsSectionProps) => {
  const [selectedPortail, setSelectedPortail] = useState<PortailProps | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const [filters, setFilters] = useState({
    category: "all",
    type: "all",
    material: "all",
    motorisation: "all"
  });

  const portails: PortailProps[] = [
    // Portails Battants
    {
      id: 1,
      name: "PORTAIL BATTANT ALU DESIGN",
      category: "portail",
      type: "battant",
      material: "aluminium",
      motorisation: "manuel",
      image: "/images/portail-battant-alu.jpg",
      colors: ["Gris anthracite", "Blanc", "Noir mat", "Bronze"],
      features: ["Lames horizontales", "Design contemporain", "Résistance corrosion", "Poteaux inclus"],
      description: "Portail battant aluminium au design contemporain avec lames horizontales. Élégance et robustesse pour sécuriser votre entrée.",
      priceRange: "1200€ - 1800€",
      rating: 4.7,
      dimensions: "300x150 à 400x180 cm",
      fournisseur: "Orial",
      isPopular: true
    },
    {
      id: 2,
      name: "PORTAIL BATTANT ALU MOTORISÉ",
      category: "portail",
      type: "battant",
      material: "aluminium",
      motorisation: "electrique",
      image: "/images/portail-battant-motorise.jpg",
      colors: ["Anthracite", "Blanc", "Gris", "Bronze"],
      features: ["Motorisation à vérins", "Télécommande", "Feux clignotants", "Photocellules sécurité"],
      description: "Portail battant aluminium avec motorisation électrique. Confort et sécurité pour un accès automatisé à votre propriété.",
      priceRange: "2000€ - 2800€",
      rating: 4.8,
      dimensions: "300x150 à 400x180 cm",
      fournisseur: "Orial",
      isPopular: true
    },
    {
      id: 3,
      name: "PORTAIL BATTANT ACIER TRADITIONNEL",
      category: "portail",
      type: "battant",
      material: "acier",
      motorisation: "manuel",
      image: "/images/portail-battant-acier.jpg",
      colors: ["Vert RAL 6005", "Gris anthracite", "Noir", "Blanc"],
      features: ["Barreaudage vertical", "Style classique", "Robustesse acier", "Serrurerie française"],
      description: "Portail battant acier au style traditionnel français. Authentique et robuste pour les propriétés de caractère.",
      priceRange: "800€ - 1300€",
      rating: 4.5,
      dimensions: "300x150 à 400x200 cm",
      fournisseur: "Orial"
    },
    // Portails Coulissants
    {
      id: 4,
      name: "PORTAIL COULISSANT ALU",
      category: "portail",
      type: "coulissant",
      material: "aluminium",
      motorisation: "manuel",
      image: "/images/portail-coulissant-alu.jpg",
      colors: ["Gris anthracite", "Blanc", "Bronze"],
      features: ["Rail de guidage", "Gain de place", "Lames pleines", "Pose simplifiée"],
      description: "Portail coulissant aluminium pour optimiser l'espace devant votre entrée. Solution pratique et esthétique.",
      priceRange: "1400€ - 2000€",
      rating: 4.6,
      dimensions: "350x150 à 500x180 cm",
      fournisseur: "Orial"
    },
    {
      id: 5,
      name: "PORTAIL COULISSANT MOTORISÉ",
      category: "portail",
      type: "coulissant",
      material: "aluminium",
      motorisation: "electrique",
      image: "/images/portail-coulissant-motorise.jpg",
      colors: ["Anthracite", "Blanc", "Gris", "Noir"],
      features: ["Motorisation autoportée", "Télécommande programmable", "Arrêt d'urgence", "Éclairage intégré"],
      description: "Portail coulissant aluminium avec motorisation autoportée. Technologie avancée pour un fonctionnement optimal.",
      priceRange: "2200€ - 3200€",
      rating: 4.9,
      dimensions: "350x150 à 500x200 cm",
      fournisseur: "Orial",
      isNew: true
    },
    // Portillons
    {
      id: 6,
      name: "PORTILLON ASSORTI ALU",
      category: "portillon",
      type: "battant",
      material: "aluminium",
      motorisation: "manuel",
      image: "/images/portillon-alu.jpg",
      colors: ["Gris anthracite", "Blanc", "Bronze", "Noir"],
      features: ["Assorti au portail", "Serrure intégrée", "Ferme-porte automatique", "Réglage facile"],
      description: "Portillon aluminium assorti à nos gammes de portails. Harmonie esthétique parfaite pour votre entrée piétonne.",
      priceRange: "300€ - 500€",
      rating: 4.4,
      dimensions: "100x150 à 120x180 cm",
      fournisseur: "Orial"
    },
    {
      id: 7,
      name: "PORTILLON ACIER CLASSIQUE",
      category: "portillon",
      type: "battant",
      material: "acier",
      motorisation: "manuel",
      image: "/images/portillon-acier.jpg",
      colors: ["Vert RAL 6005", "Gris", "Noir", "Blanc"],
      features: ["Barreaux verticaux", "Serrure 3 points", "Paumelles renforcées", "Style traditionnel"],
      description: "Portillon acier au design classique français. Robustesse et authenticité pour l'accès piéton de votre propriété.",
      priceRange: "200€ - 400€",
      rating: 4.3,
      dimensions: "100x150 à 120x200 cm",
      fournisseur: "Orial"
    },
    // Clôtures
    {
      id: 8,
      name: "CLÔTURE ALU LAMES HORIZONTALES",
      category: "cloture",
      type: "panneaux",
      material: "aluminium",
      motorisation: "manuel",
      image: "/images/cloture-alu-lames.jpg",
      colors: ["Gris anthracite", "Blanc", "Bronze"],
      features: ["Lames horizontales", "Occultation totale", "Poteaux carrés", "Fixation invisibles"],
      description: "Clôture aluminium à lames horizontales pour délimiter et occulter votre propriété. Design moderne et entretien minimal.",
      priceRange: "80€ - 120€ /ml",
      rating: 4.6,
      dimensions: "Hauteur 120 à 200 cm",
      fournisseur: "Orial",
      isPopular: true
    },
    {
      id: 9,
      name: "CLÔTURE GRILLAGE RIGIDE",
      category: "cloture",
      type: "grillage",
      material: "acier",
      motorisation: "manuel",
      image: "/images/cloture-grillage-rigide.jpg",
      colors: ["Vert RAL 6005", "Gris anthracite", "Blanc"],
      features: ["Panneaux rigides", "Mailles soudées", "Poteaux galvanisés", "Économique"],
      description: "Clôture grillage rigide pour délimitation économique et efficace. Solution durable pour sécuriser votre terrain.",
      priceRange: "35€ - 55€ /ml",
      rating: 4.2,
      dimensions: "Hauteur 100 à 200 cm",
      fournisseur: "Orial"
    },
    // Garde-corps
    {
      id: 10,
      name: "GARDE-CORPS ALU TERRASSE",
      category: "garde-corps",
      type: "terrasse",
      material: "aluminium",
      motorisation: "manuel",
      image: "/images/garde-corps-terrasse.jpg",
      colors: ["Gris anthracite", "Blanc", "Bronze"],
      features: ["Barres horizontales", "Fixation au sol", "Normes NF", "Design épuré"],
      description: "Garde-corps aluminium pour terrasse conforme aux normes de sécurité. Élégance et protection pour vos espaces extérieurs.",
      priceRange: "120€ - 180€ /ml",
      rating: 4.7,
      dimensions: "Hauteur 110 cm standard",
      fournisseur: "Orial"
    },
    {
      id: 11,
      name: "GARDE-CORPS ESCALIER DESIGN",
      category: "garde-corps",
      type: "escalier",
      material: "aluminium",
      motorisation: "manuel",
      image: "/images/garde-corps-escalier.jpg",
      colors: ["Anthracite", "Blanc", "Noir mat"],
      features: ["Fixation latérale", "Adaptation sur mesure", "Barres verticales", "Finition soignée"],
      description: "Garde-corps aluminium pour escalier extérieur. Protection et esthétique pour sécuriser vos accès en pente.",
      priceRange: "100€ - 150€ /ml",
      rating: 4.5,
      dimensions: "Hauteur 100 cm, sur mesure",
      fournisseur: "Orial"
    },
    {
      id: 12,
      name: "GARDE-CORPS VERRE MODERNE",
      category: "garde-corps",
      type: "verre",
      material: "verre-aluminium",
      motorisation: "manuel",
      image: "/images/garde-corps-verre.jpg",
      colors: ["Structure anthracite", "Structure blanche"],
      features: ["Verre sécurit", "Vue dégagée", "Design contemporain", "Fixations discrètes"],
      description: "Garde-corps verre et aluminium pour un design ultra-moderne. Transparence et élégance pour vos terrasses contemporaines.",
      priceRange: "200€ - 300€ /ml",
      rating: 4.8,
      dimensions: "Hauteur 110 cm, verre 8mm",
      fournisseur: "Orial",
      isNew: true
    }
  ];

  const categoryFilters = [
    { key: "all", label: "Tous produits" },
    { key: "portail", label: "Portails" },
    { key: "portillon", label: "Portillons" },
    { key: "cloture", label: "Clôtures" },
    { key: "garde-corps", label: "Garde-corps" }
  ];

  const typeFilters = [
    { key: "all", label: "Tous types" },
    { key: "battant", label: "Battant" },
    { key: "coulissant", label: "Coulissant" },
    { key: "panneaux", label: "Panneaux" },
    { key: "grillage", label: "Grillage" },
    { key: "terrasse", label: "Terrasse" },
    { key: "escalier", label: "Escalier" },
    { key: "verre", label: "Verre" }
  ];

  const materialFilters = [
    { key: "all", label: "Tous matériaux" },
    { key: "aluminium", label: "Aluminium" },
    { key: "acier", label: "Acier" },
    { key: "verre-aluminium", label: "Verre + Aluminium" }
  ];

  const motorisationFilters = [
    { key: "all", label: "Toutes motorisations" },
    { key: "manuel", label: "Manuel" },
    { key: "electrique", label: "Électrique" }
  ];

  const filteredPortails = portails.filter(portail => {
    return (filters.category === "all" || portail.category === filters.category) &&
           (filters.type === "all" || portail.type === filters.type) &&
           (filters.material === "all" || portail.material === filters.material) &&
           (filters.motorisation === "all" || portail.motorisation === filters.motorisation);
  });

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredPortails.length));
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setVisibleCount(9);
  };

  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-20", className)}>
      <PortailsHeader />
      <PortailsFilters 
        categoryFilters={categoryFilters}
        typeFilters={typeFilters}
        materialFilters={materialFilters}
        motorisationFilters={motorisationFilters}
        activeFilters={filters}
        onFilterChange={handleFilterChange}
      />
      <PortailsGrid 
        portails={filteredPortails.slice(0, visibleCount)}
        onPortailClick={setSelectedPortail}
      />
      
      {visibleCount < filteredPortails.length && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleShowMore}
            className="bg-primary text-white hover:bg-primary/90"
          >
            Voir plus de produits
          </Button>
        </div>
      )}

      {selectedPortail && (
        <PortailModal 
          portail={selectedPortail}
          onClose={() => setSelectedPortail(null)}
        />
      )}
    </section>
  );
};

const PortailsHeader = () => (
  <div className="mb-12 space-y-4 text-center">
    <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
      Portails, Clôtures & Garde-corps
    </Typography>
    <Typography variant="large" className="mx-auto max-w-3xl text-muted-foreground">
      Sécurisez et délimitez votre propriété avec élégance. Portails battants ou coulissants, 
      portillons assortis, clôtures occultantes ou garde-corps de sécurité, nous créons 
      l'harmonie parfaite pour votre extérieur.
    </Typography>
  </div>
);

const PortailsFilters = ({ 
  categoryFilters,
  typeFilters,
  materialFilters,
  motorisationFilters,
  activeFilters, 
  onFilterChange 
}: {
  categoryFilters: { key: string; label: string }[];
  typeFilters: { key: string; label: string }[];
  materialFilters: { key: string; label: string }[];
  motorisationFilters: { key: string; label: string }[];
  activeFilters: { category: string; type: string; material: string; motorisation: string };
  onFilterChange: (filterType: string, value: string) => void;
}) => (
  <div className="mb-8 space-y-4">
    <div className="flex flex-wrap justify-center gap-2">
      <span className="mr-2 self-center text-sm font-medium text-muted-foreground">Catégories:</span>
      {categoryFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={activeFilters.category === filter.key ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("category", filter.key)}
          className={cn(
            "transition-all duration-200",
            activeFilters.category === filter.key 
              ? "bg-primary text-white" 
              : "hover:bg-primary/10"
          )}
        >
          {filter.label}
        </Button>
      ))}
    </div>
    
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

const PortailsGrid = ({ 
  portails, 
  onPortailClick 
}: {
  portails: PortailProps[];
  onPortailClick: (portail: PortailProps) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {portails.map((portail, index) => (
      <PortailCard 
        key={portail.id}
        portail={portail}
        index={index}
        onClick={() => onPortailClick(portail)}
      />
    ))}
  </div>
);

const PortailCard = ({ 
  portail, 
  index, 
  onClick 
}: {
  portail: PortailProps;
  index: number;
  onClick: () => void;
}) => {
  const delay = index * 0.1;
  
  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'portail': return 'Portail';
      case 'portillon': return 'Portillon';
      case 'cloture': return 'Clôture';
      case 'garde-corps': return 'Garde-corps';
      default: return category;
    }
  };
  
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
          {portail.isNew && (
            <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
              Nouveau
            </span>
          )}
          {portail.isPopular && (
            <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
              Populaire
            </span>
          )}
        </div>
        
        <div className="relative h-64">
          <Image
            src={portail.image}
            alt={portail.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
        </div>
        
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{portail.name}</h3>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{portail.rating}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-800">
              {getCategoryLabel(portail.category)}
            </span>
            <span className="rounded-full bg-green-100 px-2 py-1 capitalize text-green-800">
              {portail.material}
            </span>
            {portail.motorisation !== 'manuel' && (
              <span className="rounded-full bg-purple-100 px-2 py-1 capitalize text-purple-800">
                {portail.motorisation}
              </span>
            )}
          </div>
          
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {portail.description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{portail.dimensions}</span>
            <span className="text-blue-600 font-medium">{portail.fournisseur}</span>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="font-semibold text-primary">{portail.priceRange}</span>
            <Button size="sm" variant="outline" className="text-xs">
              Voir détails
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PortailModal = ({ 
  portail, 
  onClose 
}: {
  portail: PortailProps;
  onClose: () => void;
}) => {
  const { data: session } = useSession();

  const getPerformanceIcon = (feature: string) => {
    if (feature.includes('Motorisation') || feature.includes('Électrique') || feature.includes('Télécommande')) return Zap;
    if (feature.includes('Sécurité') || feature.includes('Serrure') || feature.includes('sécurité')) return Lock;
    if (feature.includes('Design') || feature.includes('Esthétique')) return Home;
    if (feature.includes('Clôture') || feature.includes('Délimitation')) return Fence;
    return Shield;
  };

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'portail': return 'Portail';
      case 'portillon': return 'Portillon';
      case 'cloture': return 'Clôture';
      case 'garde-corps': return 'Garde-corps';
      default: return category;
    }
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
                src={portail.image}
                alt={portail.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full space-y-6 p-6 md:w-1/2">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <h2 className="text-2xl font-bold">{portail.name}</h2>
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{portail.rating}</span>
                </div>
              </div>
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  {getCategoryLabel(portail.category)}
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm capitalize text-green-800">
                  {portail.material}
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-1 text-sm capitalize text-purple-800">
                  {portail.type}
                </span>
              </div>
              
              <p className="text-xl font-semibold text-primary">{portail.priceRange}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4">
              <div>
                <Typography variant="small" className="text-muted-foreground">Fournisseur</Typography>
                <Typography variant="small" className="font-semibold text-blue-600">{portail.fournisseur}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Dimensions</Typography>
                <Typography variant="small" className="font-semibold">{portail.dimensions}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Type</Typography>
                <Typography variant="small" className="font-semibold capitalize">{portail.type}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Motorisation</Typography>
                <Typography variant="small" className="font-semibold capitalize">{portail.motorisation}</Typography>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Description</h3>
              <p className="leading-relaxed text-muted-foreground">
                {portail.description}
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Caractéristiques</h3>
              <div className="grid grid-cols-1 gap-2">
                {portail.features.map((feature, index) => {
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
                {portail.colors.map((color, index) => (
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

export default PortailsSection;