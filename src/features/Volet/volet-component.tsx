"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { Button, buttonVariants } from "@/components/ui/button";
import { X, Star, Shield, Phone, Mail, MapPin, Zap, Sun, Volume2, Settings } from "lucide-react";

type VoletProps = {
  id: number;
  name: string;
  category: string;
  material: string;
  type: string;
  motorisation: string;
  image: string;
  colors: string[];
  features: string[];
  description: string;
  priceRange: string;
  rating: number;
  fournisseur: string;
  isPopular?: boolean;
  isNew?: boolean;
}

type VoletsSectionProps = {
  className?: string;
}

const VoletsSection = ({ className }: VoletsSectionProps) => {
  const [selectedVolet, setSelectedVolet] = useState<VoletProps | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const [filters, setFilters] = useState({
    material: "all",
    type: "all",
    motorisation: "all"
  });

  const volets: VoletProps[] = [
    // Volets Roulants PVC
    {
      id: 1,
      name: "ROULANT PVC MANUEL",
      category: "volet",
      material: "pvc",
      type: "roulant",
      motorisation: "manuel",
      image: "/images/volet-roulant-pvc.jpg",
      colors: ["Blanc", "Gris clair", "Beige", "Anthracite"],
      features: ["Manœuvre manuelle", "Isolation thermique", "Prix accessible", "Installation simple"],
      description: "Volet roulant PVC à manœuvre manuelle. Solution économique pour l'isolation et la protection solaire de vos fenêtres.",
      priceRange: "200€ - 350€",
      rating: 4.4,
      fournisseur: "C2R",
      isPopular: true
    },
    {
      id: 2,
      name: "ROULANT PVC ÉLECTRIQUE",
      category: "volet",
      material: "pvc",
      type: "roulant",
      motorisation: "electrique",
      image: "/images/volet-roulant-electrique.jpg",
      colors: ["Blanc", "Gris", "Anthracite", "Beige"],
      features: ["Motorisation électrique", "Télécommande", "Arrêt obstacles", "Confort optimal"],
      description: "Volet roulant PVC motorisé avec télécommande. Confort et sécurité pour un usage quotidien facilité.",
      priceRange: "400€ - 650€",
      rating: 4.7,
      fournisseur: "C2R",
      isPopular: true
    },
    {
      id: 3,
      name: "ROULANT PVC SOLAIRE",
      category: "volet",
      material: "pvc",
      type: "roulant",
      motorisation: "solaire",
      image: "/images/volet-solaire.jpg",
      colors: ["Blanc", "Gris anthracite"],
      features: ["Panneau solaire", "Autonome", "Écologique", "Sans câblage"],
      description: "Volet roulant PVC à motorisation solaire. Solution écologique et autonome, installation sans raccordement électrique.",
      priceRange: "600€ - 900€",
      rating: 4.6,
      fournisseur: "C2R",
      isNew: true
    },
    // Volets Roulants Aluminium
    {
      id: 4,
      name: "ROULANT ALU ÉLECTRIQUE",
      category: "volet",
      material: "aluminium",
      type: "roulant",
      motorisation: "electrique",
      image: "/images/volet-alu-electrique.jpg",
      colors: ["Gris anthracite", "Blanc", "Bronze", "Noir mat"],
      features: ["Lames aluminium", "Motorisation filaire", "Résistance maximale", "Design contemporain"],
      description: "Volet roulant aluminium motorisé haute résistance. Robustesse et esthétique pour les architectures modernes.",
      priceRange: "500€ - 800€",
      rating: 4.8,
      fournisseur: "C2R"
    },
    {
      id: 5,
      name: "ROULANT ALU SOLAIRE PREMIUM",
      category: "volet",
      material: "aluminium",
      type: "roulant",
      motorisation: "solaire",
      image: "/images/volet-alu-solaire.jpg",
      colors: ["Anthracite", "Blanc pur", "Bronze", "Gris"],
      features: ["Technologie solaire", "Lames isolantes", "Télécommande radio", "Haute performance"],
      description: "Volet roulant aluminium solaire premium. Alliance parfaite entre écologie, performance et design contemporain.",
      priceRange: "750€ - 1200€",
      rating: 4.9,
      fournisseur: "C2R",
      isNew: true
    },
    // Volets Roulants Bois
    {
      id: 6,
      name: "ROULANT BOIS MANUEL",
      category: "volet",
      material: "bois",
      type: "roulant",
      motorisation: "manuel",
      image: "/images/volet-bois-manuel.jpg",
      colors: ["Chêne naturel", "Pin lasuré", "Noyer", "Teck"],
      features: ["Lames bois", "Charme authentique", "Isolation naturelle", "Manœuvre traditionnelle"],
      description: "Volet roulant bois à manœuvre manuelle. Authenticité et charme naturel pour les maisons traditionnelles.",
      priceRange: "450€ - 700€",
      rating: 4.5,
      fournisseur: "C2R"
    },
    // Volets Battants
    {
      id: 7,
      name: "BATTANTS ALU PERSIENNÉS",
      category: "volet",
      material: "aluminium",
      type: "battant",
      motorisation: "manuel",
      image: "/images/volets-battants-alu.jpg",
      colors: ["Gris anthracite", "Blanc", "Vert", "Bleu"],
      features: ["Lames persiennées", "Style traditionnel", "Ventilation naturelle", "Robustesse alu"],
      description: "Volets battants aluminium persiennés. Style traditionnel avec la robustesse et l'esthétique de l'aluminium.",
      priceRange: "300€ - 550€",
      rating: 4.6,
      fournisseur: "C2R"
    },
    {
      id: 8,
      name: "BATTANTS BOIS TRADITIONNEL",
      category: "volet",
      material: "bois",
      type: "battant",
      motorisation: "manuel",
      image: "/images/volets-battants-bois.jpg",
      colors: ["Vert volet", "Bleu provence", "Rouge basque", "Chêne naturel"],
      features: ["Bois massif", "Authenticité régionale", "Finition artisanale", "Charme intemporel"],
      description: "Volets battants bois traditionnel. Charme authentique des régions françaises avec finition artisanale soignée.",
      priceRange: "250€ - 450€",
      rating: 4.7,
      fournisseur: "C2R",
      isPopular: true
    },
    {
      id: 9,
      name: "BATTANTS PVC ÉCONOMIQUE",
      category: "volet",
      material: "pvc",
      type: "battant",
      motorisation: "manuel",
      image: "/images/volets-battants-pvc.jpg",
      colors: ["Blanc", "Vert", "Bleu", "Gris"],
      features: ["PVC résistant", "Prix attractif", "Entretien minimal", "Couleurs durables"],
      description: "Volets battants PVC économiques. Solution accessible sans compromis sur la qualité et la durabilité.",
      priceRange: "150€ - 280€",
      rating: 4.3,
      fournisseur: "C2R"
    },
    // Volets Coulissants
    {
      id: 10,
      name: "COULISSANTS ALU DESIGN",
      category: "volet",
      material: "aluminium",
      type: "coulissant",
      motorisation: "manuel",
      image: "/images/volets-coulissants.jpg",
      colors: ["Anthracite", "Blanc", "Bronze"],
      features: ["Coulissement latéral", "Gain de place", "Design moderne", "Grandes dimensions"],
      description: "Volets coulissants aluminium au design contemporain. Solution élégante pour les grandes ouvertures et architectures modernes.",
      priceRange: "600€ - 1000€",
      rating: 4.8,
      fournisseur: "C2R",
      isNew: true
    },
    // Volets Composite
    {
      id: 11,
      name: "ROULANT COMPOSITE PREMIUM",
      category: "volet",
      material: "composite",
      type: "roulant",
      motorisation: "electrique",
      image: "/images/volet-composite.jpg",
      colors: ["Gris anthracite", "Blanc", "Brun"],
      features: ["Matériau composite", "Isolation renforcée", "Résistance UV", "Motorisation silencieuse"],
      description: "Volet roulant composite motorisé haute performance. Innovation technologique pour isolation et durabilité maximales.",
      priceRange: "700€ - 1100€",
      rating: 4.7,
      fournisseur: "C2R"
    },
    {
      id: 12,
      name: "BATTANTS COMPOSITE DESIGN",
      category: "volet",
      material: "composite",
      type: "battant",
      motorisation: "manuel",
      image: "/images/volets-battants-composite.jpg",
      colors: ["Gris moderne", "Blanc contemporain", "Anthracite"],
      features: ["Matériau innovant", "Aspect bois", "Sans entretien", "Résistance climatique"],
      description: "Volets battants composite aspect bois. Esthétique naturelle sans les contraintes d'entretien du bois traditionnel.",
      priceRange: "400€ - 650€",
      rating: 4.6,
      fournisseur: "C2R"
    }
  ];

  const materialFilters = [
    { key: "all", label: "Tous matériaux" },
    { key: "pvc", label: "PVC" },
    { key: "aluminium", label: "Aluminium" },
    { key: "bois", label: "Bois" },
    { key: "composite", label: "Composite" }
  ];

  const typeFilters = [
    { key: "all", label: "Tous types" },
    { key: "roulant", label: "Roulants" },
    { key: "battant", label: "Battants" },
    { key: "coulissant", label: "Coulissants" }
  ];

  const motorisationFilters = [
    { key: "all", label: "Toutes motorisations" },
    { key: "manuel", label: "Manuel" },
    { key: "electrique", label: "Électrique" },
    { key: "solaire", label: "Solaire" }
  ];

  const filteredVolets = volets.filter(volet => {
    return (filters.material === "all" || volet.material === filters.material) &&
           (filters.type === "all" || volet.type === filters.type) &&
           (filters.motorisation === "all" || volet.motorisation === filters.motorisation);
  });

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredVolets.length));
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setVisibleCount(9);
  };

  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-20", className)}>
      <VoletsHeader />
      <VoletsFilters 
        materialFilters={materialFilters}
        typeFilters={typeFilters}
        motorisationFilters={motorisationFilters}
        activeFilters={filters}
        onFilterChange={handleFilterChange}
      />
      <VoletsGrid 
        volets={filteredVolets.slice(0, visibleCount)}
        onVoletClick={setSelectedVolet}
      />
      
      {visibleCount < filteredVolets.length && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleShowMore}
            className="bg-primary text-white hover:bg-primary/90"
          >
            Voir plus de volets
          </Button>
        </div>
      )}

      {selectedVolet && (
        <VoletModal 
          volet={selectedVolet}
          onClose={() => setSelectedVolet(null)}
        />
      )}
    </section>
  );
};

const VoletsHeader = () => (
  <div className="mb-12 space-y-4 text-center">
    <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
      Notre sélection de Volets
    </Typography>
    <Typography variant="large" className="mx-auto max-w-3xl text-muted-foreground">
      Protégez et isolez votre habitat avec nos volets sur mesure. Roulants, battants 
      ou coulissants, manuels, électriques ou solaires, dans tous les matériaux pour 
      s'adapter à votre architecture et vos besoins.
    </Typography>
  </div>
);

const VoletsFilters = ({ 
  materialFilters,
  typeFilters,
  motorisationFilters,
  activeFilters, 
  onFilterChange 
}: {
  materialFilters: { key: string; label: string }[];
  typeFilters: { key: string; label: string }[];
  motorisationFilters: { key: string; label: string }[];
  activeFilters: { material: string; type: string; motorisation: string };
  onFilterChange: (filterType: string, value: string) => void;
}) => (
  <div className="mb-8 space-y-4">
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

const VoletsGrid = ({ 
  volets, 
  onVoletClick 
}: {
  volets: VoletProps[];
  onVoletClick: (volet: VoletProps) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {volets.map((volet, index) => (
      <VoletCard 
        key={volet.id}
        volet={volet}
        index={index}
        onClick={() => onVoletClick(volet)}
      />
    ))}
  </div>
);

const VoletCard = ({ 
  volet, 
  index, 
  onClick 
}: {
  volet: VoletProps;
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
          {volet.isNew && (
            <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
              Nouveau
            </span>
          )}
          {volet.isPopular && (
            <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
              Populaire
            </span>
          )}
        </div>
        
        <div className="relative h-64">
          <Image
            src={volet.image}
            alt={volet.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
        </div>
        
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{volet.name}</h3>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{volet.rating}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-blue-100 px-2 py-1 capitalize text-blue-800">
              {volet.material}
            </span>
            <span className="rounded-full bg-green-100 px-2 py-1 capitalize text-green-800">
              {volet.type}
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 capitalize text-purple-800">
              {volet.motorisation}
            </span>
          </div>
          
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {volet.description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="text-blue-600 font-medium">{volet.fournisseur}</span>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="font-semibold text-primary">{volet.priceRange}</span>
            <Button size="sm" variant="outline" className="text-xs">
              Voir détails
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const VoletModal = ({ 
  volet, 
  onClose 
}: {
  volet: VoletProps;
  onClose: () => void;
}) => {
  const { data: session } = useSession();

  const getPerformanceIcon = (feature: string) => {
    if (feature.includes('Motorisation') || feature.includes('Électrique') || feature.includes('Télécommande')) return Zap;
    if (feature.includes('Solaire') || feature.includes('Écologique')) return Sun;
    if (feature.includes('Isolation') || feature.includes('thermique')) return Shield;
    if (feature.includes('Silencieuse') || feature.includes('silencieux')) return Volume2;
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
                src={volet.image}
                alt={volet.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full space-y-6 p-6 md:w-1/2">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <h2 className="text-2xl font-bold">{volet.name}</h2>
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{volet.rating}</span>
                </div>
              </div>
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm capitalize text-blue-800">
                  {volet.material}
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm capitalize text-green-800">
                  {volet.type}
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-1 text-sm capitalize text-purple-800">
                  {volet.motorisation}
                </span>
              </div>
              
              <p className="text-xl font-semibold text-primary">{volet.priceRange}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4">
              <div>
                <Typography variant="small" className="text-muted-foreground">Fournisseur</Typography>
                <Typography variant="small" className="font-semibold text-blue-600">{volet.fournisseur}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Matériau</Typography>
                <Typography variant="small" className="font-semibold capitalize">{volet.material}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Type</Typography>
                <Typography variant="small" className="font-semibold capitalize">{volet.type}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Motorisation</Typography>
                <Typography variant="small" className="font-semibold capitalize">{volet.motorisation}</Typography>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Description</h3>
              <p className="leading-relaxed text-muted-foreground">
                {volet.description}
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Caractéristiques</h3>
              <div className="grid grid-cols-1 gap-2">
                {volet.features.map((feature, index) => {
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
                {volet.colors.map((color, index) => (
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

export default VoletsSection;