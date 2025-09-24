"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { Button, buttonVariants } from "@/components/ui/button";
import { X, Star, Shield, Phone, Mail, MapPin, Sun, Thermometer, Volume2, Lock } from "lucide-react";

type FenetreProps = {
  id: number;
  name: string;
  category: string;
  material: string;
  vitrage: string;
  ouverture: string;
  image: string;
  colors: string[];
  features: string[];
  description: string;
  priceRange: string;
  rating: number;
  dimensions: string;
  uw: string;
  fournisseur: string;
  isPopular?: boolean;
  isNew?: boolean;
}

type FenetresSectionProps = {
  className?: string;
}

const FenetresSection = ({ className }: FenetresSectionProps) => {
  const [selectedFenetre, setSelectedFenetre] = useState<FenetreProps | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const [filters, setFilters] = useState({
    material: "all",
    vitrage: "all",
    category: "all",
    ouverture: "all"
  });

  const fenetres: FenetreProps[] = [
    // Fenêtres Oscillo-Battantes
    {
      id: 1,
      name: "OSCILLO-BATTANT PVC PREMIUM",
      category: "fenetre",
      material: "pvc",
      vitrage: "double",
      ouverture: "oscillo-battant",
      image: "/images/fenetre1.jpg",
      colors: ["Blanc", "Gris anthracite", "Beige", "Chêne doré"],
      features: ["Double vitrage 4/16/4", "Isolation renforcée", "Sécurité anti-effraction", "Étanchéité parfaite"],
      description: "Fenêtre PVC à ouverture oscillo-battante avec double vitrage haute performance. Système de ventilation optimisé pour un confort quotidien.",
      priceRange: "250€ - 400€",
      rating: 4.7,
      dimensions: "60x80 à 180x240 cm",
      uw: "Uw = 1.1 W/m²K",
      fournisseur: "Sybaie",
      isPopular: true
    },
    {
      id: 2,
      name: "OSCILLO-BATTANT ALU DESIGN",
      category: "fenetre",
      material: "aluminium",
      vitrage: "triple",
      ouverture: "oscillo-battant",
      image: "/images/fenetre6.jpg",
      colors: ["Gris anthracite", "Noir mat", "Blanc", "Bronze"],
      features: ["Triple vitrage", "Rupture pont thermique", "Design contemporain", "Sécurité renforcée"],
      description: "Fenêtre aluminium oscillo-battante haut de gamme avec triple vitrage. Performance énergétique exceptionnelle et esthétique moderne.",
      priceRange: "450€ - 700€",
      rating: 4.9,
      dimensions: "60x80 à 200x250 cm",
      uw: "Uw = 0.8 W/m²K",
      fournisseur: "Swao",
      isNew: true
    },
    {
      id: 3,
      name: "OSCILLO-BATTANT BOIS TRADITION",
      category: "fenetre",
      material: "bois",
      vitrage: "double",
      ouverture: "oscillo-battant",
      image: "/images/fenetre3.jpg",
      colors: ["Chêne naturel", "Pin lasuré", "Mélèze", "Châtaignier"],
      features: ["Bois massif", "Isolation naturelle", "Finition artisanale", "Respirant"],
      description: "Fenêtre en bois massif oscillo-battante au charme authentique. Matériau noble et écologique pour un habitat sain.",
      priceRange: "400€ - 650€",
      rating: 4.6,
      dimensions: "60x80 à 160x220 cm",
      uw: "Uw = 1.2 W/m²K",
      fournisseur: "Proferm"
    },
    // Fenêtres à Soufflet
    {
      id: 4,
      name: "SOUFFLET PVC COMPACT",
      category: "fenetre",
      material: "pvc",
      vitrage: "double",
      ouverture: "soufflet",
      image: "/images/fenetre-soufflet.jpg",
      colors: ["Blanc", "Gris", "Beige"],
      features: ["Ouverture vers l'intérieur", "Encombrement minimal", "Aération permanente", "Prix attractif"],
      description: "Fenêtre PVC à soufflet idéale pour les petits espaces. Ventilation efficace sans encombrement.",
      priceRange: "180€ - 300€",
      rating: 4.4,
      dimensions: "40x60 à 100x120 cm",
      uw: "Uw = 1.3 W/m²K",
      fournisseur: "C2R"
    },
    // Fenêtres Cintrées
    {
      id: 5,
      name: "CINTRÉE ALU PRESTIGE",
      category: "fenetre",
      material: "aluminium",
      vitrage: "double",
      ouverture: "battant",
      image: "/images/fenetre-cintree.jpg",
      colors: ["Anthracite", "Blanc", "Bronze"],
      features: ["Forme cintrée", "Design architectural", "Isolation optimisée", "Sur mesure"],
      description: "Fenêtre aluminium cintrée pour architectures singulières. Design sur mesure pour projets d'exception.",
      priceRange: "650€ - 1200€",
      rating: 4.8,
      dimensions: "Sur mesure",
      uw: "Uw = 1.1 W/m²K",
      fournisseur: "Swao",
      isNew: true
    },
    // Châssis Fixes
    {
      id: 6,
      name: "CHÂSSIS FIXE VISION",
      category: "fenetre",
      material: "aluminium",
      vitrage: "triple",
      ouverture: "fixe",
      image: "/images/chassis-fixe.jpg",
      colors: ["Gris anthracite", "Blanc pur", "Noir mat"],
      features: ["Vitrage maximal", "Isolation exceptionnelle", "Vue panoramique", "Prix optimisé"],
      description: "Châssis fixe aluminium pour apporter un maximum de lumière. Isolation thermique optimale sans ouverture.",
      priceRange: "300€ - 550€",
      rating: 4.6,
      dimensions: "80x120 à 300x200 cm",
      uw: "Uw = 0.7 W/m²K",
      fournisseur: "Sybaie"
    },
    // Portes-Fenêtres
    {
      id: 7,
      name: "PORTE-FENÊTRE PVC CONFORT",
      category: "porte-fenetre",
      material: "pvc",
      vitrage: "double",
      ouverture: "battant",
      image: "/images/porte-fenetre-pvc.jpg",
      colors: ["Blanc", "Gris clair", "Anthracite"],
      features: ["Seuil PMR", "Double vitrage sécurisé", "Poignée ergonomique", "Isolation renforcée"],
      description: "Porte-fenêtre PVC battante avec seuil PMR. Accès facilité à votre terrasse ou jardin.",
      priceRange: "400€ - 650€",
      rating: 4.5,
      dimensions: "120x215 à 180x215 cm",
      uw: "Uw = 1.2 W/m²K",
      fournisseur: "C2R",
      isPopular: true
    },
    {
      id: 8,
      name: "PORTE-FENÊTRE ALU DESIGN",
      category: "porte-fenetre",
      material: "aluminium",
      vitrage: "double",
      ouverture: "battant",
      image: "/images/porte-fenetre-alu.jpg",
      colors: ["Anthracite", "Blanc", "Bronze", "Gris"],
      features: ["Design contemporain", "Seuil encastré", "Vitrage feuilleté", "Haute sécurité"],
      description: "Porte-fenêtre aluminium au design épuré. Intégration parfaite dans l'architecture moderne.",
      priceRange: "550€ - 850€",
      rating: 4.7,
      dimensions: "120x215 à 200x215 cm",
      uw: "Uw = 1.0 W/m²K",
      fournisseur: "Proferm"
    },
    // Fenêtres Mixtes
    {
      id: 9,
      name: "MIXTE BOIS-ALU PRESTIGE",
      category: "fenetre",
      material: "bois-aluminium",
      vitrage: "triple",
      ouverture: "oscillo-battant",
      image: "/images/fenetre-mixte.jpg",
      colors: ["Chêne/Anthracite", "Pin/Blanc", "Mélèze/Bronze"],
      features: ["Double matériau", "Triple vitrage", "Entretien minimal", "Performance maximale"],
      description: "Fenêtre mixte bois-aluminium combinant esthétique du bois intérieur et résistance de l'aluminium extérieur.",
      priceRange: "650€ - 1000€",
      rating: 4.8,
      dimensions: "60x80 à 200x250 cm",
      uw: "Uw = 0.7 W/m²K",
      fournisseur: "Swao",
      isNew: true
    },
    // Fenêtres Acier
    {
      id: 10,
      name: "FENÊTRE ACIER INDUSTRIELLE",
      category: "fenetre",
      material: "acier",
      vitrage: "double",
      ouverture: "battant",
      image: "/images/fenetre-acier.jpg",
      colors: ["Noir mat", "Gris anthracite"],
      features: ["Style industriel", "Cadres fins", "Robustesse maximale", "Vitrage maximal"],
      description: "Fenêtre acier au style industriel authentique. Cadres fins pour un maximum de vitrage et un look urbain.",
      priceRange: "500€ - 800€",
      rating: 4.6,
      dimensions: "80x120 à 180x220 cm",
      uw: "Uw = 1.6 W/m²K",
      fournisseur: "Proferm"
    }
  ];

  const materialFilters = [
    { key: "all", label: "Tous matériaux" },
    { key: "pvc", label: "PVC" },
    { key: "aluminium", label: "Aluminium" },
    { key: "bois", label: "Bois" },
    { key: "bois-aluminium", label: "Bois-Aluminium" },
    { key: "acier", label: "Acier" }
  ];

  const vitrageFilters = [
    { key: "all", label: "Tous vitrages" },
    { key: "double", label: "Double vitrage" },
    { key: "triple", label: "Triple vitrage" }
  ];

  const categoryFilters = [
    { key: "all", label: "Tous types" },
    { key: "fenetre", label: "Fenêtres" },
    { key: "porte-fenetre", label: "Portes-fenêtres" }
  ];

  const ouvertureFilters = [
    { key: "all", label: "Toutes ouvertures" },
    { key: "oscillo-battant", label: "Oscillo-battant" },
    { key: "battant", label: "Battant" },
    { key: "soufflet", label: "À soufflet" },
    { key: "fixe", label: "Fixe" }
  ];

  const filteredFenetres = fenetres.filter(fenetre => {
    return (filters.material === "all" || fenetre.material === filters.material) &&
           (filters.vitrage === "all" || fenetre.vitrage === filters.vitrage) &&
           (filters.category === "all" || fenetre.category === filters.category) &&
           (filters.ouverture === "all" || fenetre.ouverture === filters.ouverture);
  });

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredFenetres.length));
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setVisibleCount(9);
  };

  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-20", className)}>
      <FenetresHeader />
      <FenetresFilters 
        materialFilters={materialFilters}
        vitrageFilters={vitrageFilters}
        categoryFilters={categoryFilters}
        ouvertureFilters={ouvertureFilters}
        activeFilters={filters}
        onFilterChange={handleFilterChange}
      />
      <FenetresGrid 
        fenetres={filteredFenetres.slice(0, visibleCount)}
        onFenetreClick={setSelectedFenetre}
      />
      
      {visibleCount < filteredFenetres.length && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleShowMore}
            className="bg-primary text-white hover:bg-primary/90"
          >
            Voir plus de fenêtres
          </Button>
        </div>
      )}

      {selectedFenetre && (
        <FenetreModal 
          fenetre={selectedFenetre}
          onClose={() => setSelectedFenetre(null)}
        />
      )}
    </section>
  );
};

const FenetresHeader = () => (
  <div className="mb-12 space-y-4 text-center">
    <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
      Notre sélection de Fenêtres
    </Typography>
    <Typography variant="large" className="mx-auto max-w-3xl text-muted-foreground">
      Découvrez notre gamme complète de fenêtres et portes-fenêtres. Oscillo-battant, battant, 
      à soufflet ou cintrées, nous proposons tous les types d'ouvertures dans différents matériaux.
    </Typography>
  </div>
);

const FenetresFilters = ({ 
  materialFilters,
  vitrageFilters,
  categoryFilters,
  ouvertureFilters,
  activeFilters, 
  onFilterChange 
}: {
  materialFilters: { key: string; label: string }[];
  vitrageFilters: { key: string; label: string }[];
  categoryFilters: { key: string; label: string }[];
  ouvertureFilters: { key: string; label: string }[];
  activeFilters: { material: string; vitrage: string; category: string; ouverture: string };
  onFilterChange: (filterType: string, value: string) => void;
}) => (
  <div className="mb-8 space-y-4">
    <div className="flex flex-wrap justify-center gap-2">
      <span className="mr-2 self-center text-sm font-medium text-muted-foreground">Type:</span>
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
      <span className="mr-2 self-center text-sm font-medium text-muted-foreground">Ouverture:</span>
      {ouvertureFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={activeFilters.ouverture === filter.key ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("ouverture", filter.key)}
          className={cn(
            "transition-all duration-200",
            activeFilters.ouverture === filter.key 
              ? "bg-primary text-white" 
              : "hover:bg-primary/10"
          )}
        >
          {filter.label}
        </Button>
      ))}
    </div>
    
    <div className="flex flex-wrap justify-center gap-2">
      <span className="mr-2 self-center text-sm font-medium text-muted-foreground">Vitrage:</span>
      {vitrageFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={activeFilters.vitrage === filter.key ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("vitrage", filter.key)}
          className={cn(
            "transition-all duration-200",
            activeFilters.vitrage === filter.key 
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

const FenetresGrid = ({ 
  fenetres, 
  onFenetreClick 
}: {
  fenetres: FenetreProps[];
  onFenetreClick: (fenetre: FenetreProps) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {fenetres.map((fenetre, index) => (
      <FenetreCard 
        key={fenetre.id}
        fenetre={fenetre}
        index={index}
        onClick={() => onFenetreClick(fenetre)}
      />
    ))}
  </div>
);

const FenetreCard = ({ 
  fenetre, 
  index, 
  onClick 
}: {
  fenetre: FenetreProps;
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
          {fenetre.isNew && (
            <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
              Nouveau
            </span>
          )}
          {fenetre.isPopular && (
            <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
              Populaire
            </span>
          )}
        </div>
        
        <div className="relative h-64">
          <Image
            src={fenetre.image}
            alt={fenetre.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
        </div>
        
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{fenetre.name}</h3>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{fenetre.rating}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-blue-100 px-2 py-1 capitalize text-blue-800">
              {fenetre.material}
            </span>
            <span className="rounded-full bg-green-100 px-2 py-1 capitalize text-green-800">
              {fenetre.vitrage} vitrage
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 capitalize text-purple-800">
              {fenetre.ouverture}
            </span>
          </div>
          
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {fenetre.description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Thermometer size={12} />
              {fenetre.uw}
            </span>
            <span className="text-blue-600 font-medium">{fenetre.fournisseur}</span>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="font-semibold text-primary">{fenetre.priceRange}</span>
            <Button size="sm" variant="outline" className="text-xs">
              Voir détails
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FenetreModal = ({ 
  fenetre, 
  onClose 
}: {
  fenetre: FenetreProps;
  onClose: () => void;
}) => {
  const { data: session } = useSession();

  const getPerformanceIcon = (feature: string) => {
    if (feature.includes('vitrage') || feature.includes('Isolation')) return Thermometer;
    if (feature.includes('sécurisé') || feature.includes('Anti-effraction') || feature.includes('Sécurité')) return Lock;
    if (feature.includes('Design') || feature.includes('esthétique')) return Sun;
    if (feature.includes('phonique') || feature.includes('acoustique')) return Volume2;
    return Shield;
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
                src={fenetre.image}
                alt={fenetre.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full space-y-6 p-6 md:w-1/2">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Typography variant="h2">{fenetre.name}</Typography>
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <Typography variant="small">{fenetre.rating}</Typography>
                </div>
              </div>
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm capitalize text-blue-800">
                  {fenetre.material}
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm capitalize text-green-800">
                  {fenetre.vitrage} vitrage
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-1 text-sm capitalize text-purple-800">
                  {fenetre.ouverture}
                </span>
              </div>
              
              <Typography variant="large" className="text-primary">{fenetre.priceRange}</Typography>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4">
              <div>
                <Typography variant="small" className="text-muted-foreground">Performance thermique</Typography>
                <Typography variant="small" className="font-semibold">{fenetre.uw}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Fournisseur</Typography>
                <Typography variant="small" className="font-semibold text-blue-600">{fenetre.fournisseur}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Dimensions</Typography>
                <Typography variant="small" className="font-semibold">{fenetre.dimensions}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Ouverture</Typography>
                <Typography variant="small" className="font-semibold capitalize">{fenetre.ouverture}</Typography>
              </div>
            </div>

            <div>
              <Typography variant="h3" className="mb-2">Description</Typography>
              <Typography variant="p" className="leading-relaxed text-muted-foreground">
                {fenetre.description}
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-3">Caractéristiques</Typography>
              <div className="grid grid-cols-1 gap-2">
                {fenetre.features.map((feature, index) => {
                  const IconComponent = getPerformanceIcon(feature);
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <IconComponent size={16} className="text-green-600" />
                      <Typography variant="small">{feature}</Typography>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <Typography variant="h3" className="mb-3">Couleurs disponibles</Typography>
              <div className="flex flex-wrap gap-2">
                {fenetre.colors.map((color, index) => (
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

export default FenetresSection;