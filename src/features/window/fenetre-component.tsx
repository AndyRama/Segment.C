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
  uw: string; // Coefficient thermique
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
    {
      id: 1,
      name: "CRYSTAL PLUS",
      category: "fenetre",
      material: "pvc",
      vitrage: "double",
      ouverture: "battant",
      image: "/images/fenetre1.jpg",
      colors: ["Blanc", "Gris anthracite", "Beige"],
      features: ["Double vitrage 4/16/4", "Isolation renforcée", "Anti-effraction", "Étanchéité parfaite"],
      description: "Fenêtre PVC à ouverture battante avec double vitrage haute performance. Excellent rapport qualité-prix pour une isolation optimale.",
      priceRange: "300€ - 450€",
      rating: 4.7,
      dimensions: "60x80 à 180x240 cm",
      uw: "Uw = 1.1 W/m²K",
      isPopular: true
    },
    {
      id: 2,
      name: "ALUMINA PRO",
      category: "fenetre",
      material: "aluminium",
      vitrage: "triple",
      ouverture: "oscillo-battant",
      image: "/images/fenetre6.jpg",
      colors: ["Gris anthracite", "Noir mat", "Blanc", "Bronze"],
      features: ["Triple vitrage", "Rupture pont thermique", "Design contemporain", "Sécurité renforcée"],
      description: "Fenêtre aluminium haut de gamme avec triple vitrage et rupture de pont thermique. Performance énergétique exceptionnelle.",
      priceRange: "600€ - 900€",
      rating: 4.9,
      dimensions: "60x80 à 200x250 cm",
      uw: "Uw = 0.8 W/m²K",
      isNew: true
    },
    {
      id: 3,
      name: "BOIS NATURE",
      category: "fenetre",
      material: "bois",
      vitrage: "double",
      ouverture: "battant",
      image: "/images/fenetre3.jpg",
      colors: ["Chêne naturel", "Pin lasuré", "Mélèze", "Châtaignier"],
      features: ["Bois massif", "Isolation naturelle", "Finition artisanale", "Respirant"],
      description: "Fenêtre en bois massif au charme authentique. Matériau noble et écologique pour un habitat sain et chaleureux.",
      priceRange: "500€ - 800€",
      rating: 4.6,
      dimensions: "60x80 à 160x220 cm",
      uw: "Uw = 1.2 W/m²K"
    },
    {
      id: 4,
      name: "MIXTA ELEGANCE",
      category: "fenetre",
      material: "bois-aluminium",
      vitrage: "triple",
      ouverture: "oscillo-battant",
      image: "/images/fenetre-mixta-elegance.jpg",
      colors: ["Chêne/Anthracite", "Pin/Blanc", "Mélèze/Bronze"],
      features: ["Double matériau", "Triple vitrage", "Entretien minimal", "Performance maximale"],
      description: "Fenêtre mixte bois-aluminium combinant l'esthétique du bois à l'intérieur et la résistance de l'aluminium à l'extérieur.",
      priceRange: "800€ - 1200€",
      rating: 4.8,
      dimensions: "60x80 à 200x250 cm",
      uw: "Uw = 0.7 W/m²K",
      isNew: true
    },
    {
      id: 5,
      name: "COULISSANT HORIZON",
      category: "baie-vitree",
      material: "aluminium",
      vitrage: "double",
      ouverture: "coulissante",
      image: "/images/baie-coulissant-horizon.jpg",
      colors: ["Gris anthracite", "Blanc", "Noir mat", "Bronze"],
      features: ["Grande ouverture", "Seuil PMR", "Vitrage sécurisé", "Rails haute qualité"],
      description: "Baie vitrée coulissante en aluminium pour une ouverture maximale sur l'extérieur. Design épuré et fonctionnalité optimale.",
      priceRange: "1200€ - 1800€",
      rating: 4.7,
      dimensions: "200x215 à 400x250 cm",
      uw: "Uw = 1.4 W/m²K",
      isPopular: true
    },
    {
      id: 6,
      name: "PANORAMA LIFT",
      category: "baie-vitree",
      material: "pvc",
      vitrage: "double",
      ouverture: "coulissante",
      image: "/images/baie-panorama-lift.jpg",
      colors: ["Blanc", "Gris clair", "Anthracite"],
      features: ["Système lift & slide", "Grandes dimensions", "Isolation thermique", "Prix attractif"],
      description: "Baie vitrée PVC avec système de levage pour une manipulation aisée même sur de grandes dimensions. Excellent rapport qualité-prix.",
      priceRange: "900€ - 1400€",
      rating: 4.5,
      dimensions: "180x215 to 350x240 cm",
      uw: "Uw = 1.3 W/m²K"
    },
    {
      id: 7,
      name: "ACCORDION FLEX",
      category: "baie-vitree",
      material: "aluminium",
      vitrage: "double",
      ouverture: "pliante",
      image: "/images/baie-accordion-flex.jpg",
      colors: ["Anthracite", "Blanc", "Bronze", "Gris"],
      features: ["Ouverture totale", "Système pliant", "Design moderne", "Étanchéité parfaite"],
      description: "Baie vitrée pliante permettant une ouverture totale de l'espace. Solution innovante pour connecter intérieur et extérieur.",
      priceRange: "1500€ - 2200€",
      rating: 4.8,
      dimensions: "200x215 à 600x250 cm",
      uw: "Uw = 1.2 W/m²K",
      isNew: true
    },
    {
      id: 8,
      name: "GALANDAGE INVISIBLE",
      category: "baie-vitree",
      material: "aluminium",
      vitrage: "triple",
      ouverture: "coulissante-galandage",
      image: "/images/baie-galandage-invisible.jpg",
      colors: ["Anthracite", "Noir", "Blanc pur"],
      features: ["Coulissement dans cloison", "Triple vitrage", "Design minimal", "Gain d'espace"],
      description: "Baie vitrée à galandage disparaissant totalement dans la cloison. Solution haut de gamme pour un design épuré et moderne.",
      priceRange: "2000€ - 3000€",
      rating: 4.9,
      dimensions: "200x215 à 400x280 cm",
      uw: "Uw = 0.9 W/m²K"
    },
    {
      id: 9,
      name: "TILT & TURN MAXI",
      category: "fenetre",
      material: "pvc",
      vitrage: "triple",
      ouverture: "oscillo-battant",
      image: "/images/fenetre-tilt-turn-maxi.jpg",
      colors: ["Blanc", "Gris", "Anthracite", "Beige"],
      features: ["Grande dimension", "Triple vitrage", "Oscillo-battant", "Sécurité enfant"],
      description: "Fenêtre PVC grande dimension avec triple vitrage et double système d'ouverture pour un confort et une sécurité maximale.",
      priceRange: "400€ - 650€",
      rating: 4.6,
      dimensions: "80x100 à 200x240 cm",
      uw: "Uw = 0.9 W/m²K",
      isPopular: true
    },
    {
      id: 10,
      name: "STEEL FRAME LOFT",
      category: "fenetre",
      material: "acier",
      vitrage: "double",
      ouverture: "battant",
      image: "/images/fenetre-steel-frame-loft.jpg",
      colors: ["Noir mat", "Gris anthracite", "Blanc"],
      features: ["Style industriel", "Cadre fin", "Vitrage maximal", "Robustesse"],
      description: "Fenêtre acier au style industriel avec cadres fins pour un maximum de vitrage. Parfaite pour les lofts et architectures contemporaines.",
      priceRange: "700€ - 1100€",
      rating: 4.7,
      dimensions: "60x80 à 180x220 cm",
      uw: "Uw = 1.8 W/m²K",
      isNew: true
    },
    {
      id: 11,
      name: "VELUX CONFORT+",
      category: "fenetre",
      material: "pvc",
      vitrage: "double",
      ouverture: "projection",
      image: "/images/fenetre-velux-confort.jpg",
      colors: ["Blanc", "Gris"],
      features: ["Fenêtre de toit", "Ouverture par projection", "Store intégré", "Isolation renforcée"],
      description: "Fenêtre de toit PVC avec système d'ouverture par projection. Apporte lumière naturelle et aération aux combles aménagés.",
      priceRange: "350€ - 550€",
      rating: 4.5,
      dimensions: "55x78 à 134x140 cm",
      uw: "Uw = 1.1 W/m²K"
    },
    {
      id: 12,
      name: "INFINITY GLASS",
      category: "baie-vitree",
      material: "aluminium",
      vitrage: "triple",
      ouverture: "fixe",
      image: "/images/baie-infinity-glass.jpg",
      colors: ["Noir mat", "Anthracite", "Bronze"],
      features: ["Vitrage structural", "Vue panoramique", "Isolation maximale", "Design architectural"],
      description: "Baie vitrée fixe avec vitrage structural pour une vue panoramique sans interruption. Solution architecturale haut de gamme.",
      priceRange: "1800€ - 2800€",
      rating: 4.9,
      dimensions: "200x215 à 600x350 cm",
      uw: "Uw = 0.6 W/m²K",
      isPopular: true
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
    { key: "baie-vitree", label: "Baies vitrées" }
  ];

  const filteredFenetres = fenetres.filter(fenetre => {
    return (filters.material === "all" || fenetre.material === filters.material) &&
           (filters.vitrage === "all" || fenetre.vitrage === filters.vitrage) &&
           (filters.category === "all" || fenetre.category === filters.category);
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
      Notre selection de Fenêtres
    </Typography>
    <Typography variant="large" className="mx-auto max-w-3xl text-muted-foreground">
      Découvrez notre gamme complète de fenêtres et baies vitrées. Lumière, isolation et design 
      pour transformer votre habitat en espace de vie lumineux et confortable.
    </Typography>
  </div>
);

const FenetresFilters = ({ 
  materialFilters,
  vitrageFilters,
  categoryFilters,
  activeFilters, 
  onFilterChange 
}: {
  materialFilters: { key: string; label: string }[];
  vitrageFilters: { key: string; label: string }[];
  categoryFilters: { key: string; label: string }[];
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
        {/* Badges */}
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
              {fenetre.category === "fenetre" ? "Fenêtre" : "Baie vitrée"}
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
            <span>{fenetre.dimensions}</span>
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
          {/* Image */}
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

          {/* Contenu */}
          <div className="w-full space-y-6 p-6 md:w-1/2">
            {/* En-tête */}
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
                  {fenetre.category === "fenetre" ? "Fenêtre" : "Baie vitrée"}
                </span>
              </div>
              
              <Typography variant="large" className="text-primary">{fenetre.priceRange}</Typography>
            </div>

            {/* Informations techniques */}
            <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4">
              <div>
                <Typography variant="small" className="text-muted-foreground">Performance thermique</Typography>
                <Typography variant="small" className="font-semibold">{fenetre.uw}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Dimensions</Typography>
                <Typography variant="small" className="font-semibold">{fenetre.dimensions}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Ouverture</Typography>
                <Typography variant="small" className="font-semibold capitalize">{fenetre.ouverture}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Type</Typography>
                <Typography variant="small" className="font-semibold capitalize">
                  {fenetre.category === "fenetre" ? "Fenêtre" : "Baie vitrée"}
                </Typography>
              </div>
            </div>

            {/* Description */}
            <div>
              <Typography variant="h3" className="mb-2">Description</Typography>
              <Typography variant="p" className="leading-relaxed text-muted-foreground">
                {fenetre.description}
              </Typography>
            </div>

            {/* Caractéristiques */}
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

            {/* Couleurs disponibles */}
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

            {/* Boutons d'action avec authentification */}
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

            {/* Informations de contact */}
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

export default FenetresSection;