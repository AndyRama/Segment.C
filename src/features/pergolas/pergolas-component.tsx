"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  X,
  Star,
  Shield,
  Phone,
  Mail,
  MapPin,
  Sun,
  Home,
  TreePine,
  Wind,
  Thermometer,
  Umbrella,
} from "lucide-react";

type PergolaProps = {
  id: number;
  name: string;
  category: string;
  material: string;
  style: string;
  toiture: string;
  image: string;
  colors: string[];
  features: string[];
  description: string;
  priceRange: string;
  rating: number;
  surface: string;
  isPopular?: boolean;
  isNew?: boolean;
};

type PergolasSectionProps = {
  className?: string;
};

const PergolasSection = ({ className }: PergolasSectionProps) => {
  const [selectedPergola, setSelectedPergola] = useState<PergolaProps | null>(
    null,
  );
  const [visibleCount, setVisibleCount] = useState(9);
  const [filters, setFilters] = useState({
    material: "all",
    style: "all",
    toiture: "all",
  });

  const pergolas: PergolaProps[] = [
    {
      id: 1,
      name: "BIOCLIMATIQUE PREMIUM",
      category: "pergola",
      material: "aluminium",
      style: "contemporaine",
      toiture: "bioclimatique",
      image: "/images/pergola-bioclimatique-premium.jpg",
      colors: ["Blanc", "Gris anthracite", "Bronze", "Noir mat"],
      features: [
        "Lames orientables motorisées",
        "Gestion automatique météo",
        "Protection solaire variable",
        "Évacuation eau intégrée",
        "Éclairage LED intégré",
      ],
      description:
        "Pergola bioclimatique haut de gamme avec lames orientables motorisées. Contrôlez parfaitement votre espace extérieur selon les conditions météorologiques.",
      priceRange: "8000€ - 15000€",
      rating: 4.9,
      surface: "15 à 40 m²",
      isPopular: true,
    },
    {
      id: 2,
      name: "CLASSIQUE BOIS",
      category: "pergola",
      material: "bois",
      style: "traditionnelle",
      toiture: "ouverte",
      image: "/images/pergola-classique-bois.jpg",
      colors: ["Chêne naturel", "Pin autoclavé", "Douglas", "Teck"],
      features: [
        "Bois massif traité",
        "Structure robuste",
        "Charme authentique",
        "Personnalisable",
        "Écologique",
      ],
      description:
        "Pergola en bois massif au design traditionnel. Matériau noble pour créer un espace de détente naturel et chaleureux dans votre jardin.",
      priceRange: "3000€ - 8000€",
      rating: 4.6,
      surface: "10 à 30 m²",
      isPopular: true,
    },
    {
      id: 3,
      name: "MODERNE ALUMINIUM",
      category: "pergola",
      material: "aluminium",
      style: "contemporaine",
      toiture: "fixe",
      image: "/images/pergola-moderne-aluminium.jpg",
      colors: ["Blanc pur", "Gris anthracite", "Noir", "Champagne"],
      features: [
        "Structure légère",
        "Sans entretien",
        "Résistance corrosion",
        "Design épuré",
        "Installation rapide",
      ],
      description:
        "Pergola aluminium au design moderne et épuré. Solution durable et sans entretien pour créer un espace ombragé élégant.",
      priceRange: "4000€ - 10000€",
      rating: 4.5,
      surface: "12 à 35 m²",
    },
    {
      id: 4,
      name: "TOILE RÉTRACTABLE",
      category: "pergola",
      material: "aluminium",
      style: "contemporaine",
      toiture: "toile",
      image: "/images/pergola-toile-retractable.jpg",
      colors: ["Blanc/Écru", "Gris/Anthracite", "Beige/Taupe"],
      features: [
        "Toile rétractable",
        "Protection modulable",
        "Résistance UV/pluie",
        "Manœuvre facile",
        "Esthétique soignée",
      ],
      description:
        "Pergola avec toile rétractable pour une protection solaire modulable. Adaptez votre espace selon vos besoins et les conditions météo.",
      priceRange: "5000€ - 12000€",
      rating: 4.4,
      surface: "15 à 40 m²",
    },
    {
      id: 5,
      name: "AUTOPORTÉE DESIGN",
      category: "pergola",
      material: "aluminium",
      style: "contemporaine",
      toiture: "bioclimatique",
      image: "/images/pergola-autoportee-design.jpg",
      colors: ["Anthracite", "Blanc", "Bronze", "Gris clair"],
      features: [
        "Structure autoportée",
        "Lames orientables",
        "Installation libre",
        "Design architectural",
        "Éclairage intégré",
      ],
      description:
        "Pergola autoportée au design architectural remarquable. Installation libre dans votre jardin sans fixation murale nécessaire.",
      priceRange: "12000€ - 20000€",
      rating: 4.7,
      surface: "20 à 50 m²",
      isNew: true,
    },
    {
      id: 6,
      name: "MÉDITERRANÉENNE",
      category: "pergola",
      material: "bois",
      style: "traditionnelle",
      toiture: "canisse",
      image: "/images/pergola-mediterraneenne.jpg",
      colors: ["Bois naturel", "Teck", "Acacia", "Bambou"],
      features: [
        "Style méditerranéen",
        "Couverture canisse",
        "Ambiance naturelle",
        "Prix accessible",
        "Facile d'entretien",
      ],
      description:
        "Pergola bois style méditerranéen avec couverture en canisse. Créez une ambiance vacances et détente dans votre jardin.",
      priceRange: "2000€ - 5000€",
      rating: 4.3,
      surface: "8 à 25 m²",
    },
    {
      id: 7,
      name: "INDUSTRIELLE ACIER",
      category: "pergola",
      material: "acier",
      style: "industrielle",
      toiture: "ouverte",
      image: "/images/pergola-industrielle-acier.jpg",
      colors: ["Noir mat", "Gris industriel", "Rouille Corten"],
      features: [
        "Structure acier",
        "Style industriel",
        "Robustesse extrême",
        "Design authentique",
        "Résistance maximale",
      ],
      description:
        "Pergola en acier au style industriel authentique. Structure robuste pour un design urbain et contemporain qui traverse les années.",
      priceRange: "6000€ - 13000€",
      rating: 4.6,
      surface: "15 à 40 m²",
    },
    {
      id: 8,
      name: "TOIT VITRÉ LUXE",
      category: "pergola",
      material: "aluminium",
      style: "contemporaine",
      toiture: "verre",
      image: "/images/pergola-toit-vitre-luxe.jpg",
      colors: ["Blanc", "Anthracite", "Bronze"],
      features: [
        "Toiture verre sécurit",
        "Protection totale",
        "Luminosité maximale",
        "Évacuation eau",
        "Finitions premium",
      ],
      description:
        "Pergola haut de gamme avec toiture en verre sécurit. Protection totale contre les intempéries tout en conservant la luminosité naturelle.",
      priceRange: "15000€ - 25000€",
      rating: 4.8,
      surface: "20 à 45 m²",
      isNew: true,
    },
    {
      id: 9,
      name: "ÉCONOMIQUE PLUS",
      category: "pergola",
      material: "aluminium",
      style: "contemporaine",
      toiture: "fixe",
      image: "/images/pergola-economique-plus.jpg",
      colors: ["Blanc", "Gris", "Anthracite"],
      features: [
        "Excellent rapport qualité-prix",
        "Installation simple",
        "Design épuré",
        "Garantie étendue",
        "Personnalisable",
      ],
      description:
        "Pergola aluminium économique sans compromis sur la qualité. Solution accessible pour créer votre espace ombragé extérieur.",
      priceRange: "2500€ - 6000€",
      rating: 4.2,
      surface: "10 à 25 m²",
      isPopular: true,
    },
    {
      id: 10,
      name: "JARDIN ZEN",
      category: "pergola",
      material: "bois",
      style: "japonaise",
      toiture: "claire-voie",
      image: "/images/pergola-jardin-zen.jpg",
      colors: ["Bois naturel", "Bambou", "Teck huilé"],
      features: [
        "Style japonais",
        "Ambiance zen",
        "Claire-voie bois",
        "Harmonie naturelle",
        "Sérénité garantie",
      ],
      description:
        "Pergola d'inspiration japonaise pour créer un espace zen dans votre jardin. Design épuré et matériaux naturels pour la méditation.",
      priceRange: "4000€ - 9000€",
      rating: 4.7,
      surface: "12 à 30 m²",
    },
    {
      id: 11,
      name: "MODULAIRE ÉVOLUTIVE",
      category: "pergola",
      material: "aluminium",
      style: "contemporaine",
      toiture: "modulaire",
      image: "/images/pergola-modulaire-evolutive.jpg",
      colors: ["Blanc", "Gris", "Anthracite", "Noir"],
      features: [
        "Système modulaire",
        "Extension possible",
        "Accessoires multiples",
        "Évolution selon besoins",
        "Investissement évolutif",
      ],
      description:
        "Pergola modulaire évolutive qui grandit avec vos besoins. Commencez petit et agrandissez votre espace selon vos envies et budget.",
      priceRange: "3500€ - 12000€",
      rating: 4.5,
      surface: "8 à 50 m²",
    },
    {
      id: 12,
      name: "TERRASSE RESTAURANT",
      category: "pergola",
      material: "aluminium",
      style: "professionnelle",
      toiture: "bioclimatique",
      image: "/images/pergola-terrasse-restaurant.jpg",
      colors: ["Anthracite", "Blanc", "Bronze"],
      features: [
        "Usage professionnel",
        "Grande surface",
        "Résistance renforcée",
        "Gestion automatique",
        "Conformité ERP",
      ],
      description:
        "Pergola bioclimatique professionnelle pour terrasses de restaurant. Robustesse et fonctionnalités adaptées à un usage intensif.",
      priceRange: "18000€ - 40000€",
      rating: 4.8,
      surface: "40 à 100 m²",
    },
  ];

  const materialFilters = [
    { key: "all", label: "Tous matériaux" },
    { key: "aluminium", label: "Aluminium" },
    { key: "bois", label: "Bois" },
    { key: "acier", label: "Acier" },
  ];

  const styleFilters = [
    { key: "all", label: "Tous styles" },
    { key: "contemporaine", label: "Contemporaine" },
    { key: "traditionnelle", label: "Traditionnelle" },
    { key: "industrielle", label: "Industrielle" },
    { key: "japonaise", label: "Japonaise" },
    { key: "professionnelle", label: "Professionnelle" },
  ];

  const toitureFilters = [
    { key: "all", label: "Toutes toitures" },
    { key: "bioclimatique", label: "Bioclimatique" },
    { key: "ouverte", label: "Ouverte" },
    { key: "fixe", label: "Fixe" },
    { key: "toile", label: "Toile" },
    { key: "verre", label: "Verre" },
    { key: "canisse", label: "Canisse" },
    { key: "claire-voie", label: "Claire-voie" },
    { key: "modulaire", label: "Modulaire" },
  ];

  const filteredPergolas = pergolas.filter((pergola) => {
    return (
      (filters.material === "all" || pergola.material === filters.material) &&
      (filters.style === "all" || pergola.style === filters.style) &&
      (filters.toiture === "all" || pergola.toiture === filters.toiture)
    );
  });

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredPergolas.length));
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
    setVisibleCount(9);
  };

  return (
    <section
      className={cn(
        "relative mx-auto w-full max-w-7xl px-4 py-20 lg:px-0",
        className,
      )}
    >
      <PergolasHeader />
      <PergolasFilters
        materialFilters={materialFilters}
        styleFilters={styleFilters}
        toitureFilters={toitureFilters}
        activeFilters={filters}
        onFilterChange={handleFilterChange}
      />
      <PergolasGrid
        pergolas={filteredPergolas.slice(0, visibleCount)}
        onPergolaClick={setSelectedPergola}
      />

      {visibleCount < filteredPergolas.length && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleShowMore}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Voir plus de pergolas
          </Button>
        </div>
      )}

      {selectedPergola && (
        <PergolaModal
          pergola={selectedPergola}
          onClose={() => setSelectedPergola(null)}
        />
      )}
    </section>
  );
};

const PergolasHeader = () => (
  <div className="mb-12 space-y-4 text-center">
    <Typography variant="h1" className="text-3xl md:text-4xl xl:text-5xl">
      Notre sélection de Pergolas
    </Typography>
    <Typography
      variant="large"
      className="text-muted-foreground mx-auto max-w-3xl"
    >
      Créez votre espace détente extérieur avec nos pergolas sur mesure.
      Bioclimatique, traditionnelle ou contemporaine, profitez de votre terrasse
      et jardin en toutes saisons avec style et confort.
    </Typography>
  </div>
);

const PergolasFilters = ({
  materialFilters,
  styleFilters,
  toitureFilters,
  activeFilters,
  onFilterChange,
}: {
  materialFilters: { key: string; label: string }[];
  styleFilters: { key: string; label: string }[];
  toitureFilters: { key: string; label: string }[];
  activeFilters: { material: string; style: string; toiture: string };
  onFilterChange: (filterType: string, value: string) => void;
}) => (
  <div className="mb-8 space-y-4">
    <div className="flex flex-wrap justify-center gap-2">
      <span className="text-muted-foreground mr-2 self-center text-sm font-medium">
        Matériaux:
      </span>
      {materialFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={
            activeFilters.material === filter.key ? "default" : "outline"
          }
          size="sm"
          onClick={() => onFilterChange("material", filter.key)}
          className={cn(
            "transition-all duration-200",
            activeFilters.material === filter.key
              ? "bg-primary text-white"
              : "hover:bg-primary/10",
          )}
        >
          {filter.label}
        </Button>
      ))}
    </div>

    <div className="flex flex-wrap justify-center gap-2">
      <span className="text-muted-foreground mr-2 self-center text-sm font-medium">
        Styles:
      </span>
      {styleFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={activeFilters.style === filter.key ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("style", filter.key)}
          className={cn(
            "transition-all duration-200",
            activeFilters.style === filter.key
              ? "bg-primary text-white"
              : "hover:bg-primary/10",
          )}
        >
          {filter.label}
        </Button>
      ))}
    </div>

    <div className="flex flex-wrap justify-center gap-2">
      <span className="text-muted-foreground mr-2 self-center text-sm font-medium">
        Toiture:
      </span>
      {toitureFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={activeFilters.toiture === filter.key ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("toiture", filter.key)}
          className={cn(
            "transition-all duration-200",
            activeFilters.toiture === filter.key
              ? "bg-primary text-white"
              : "hover:bg-primary/10",
          )}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  </div>
);

const PergolasGrid = ({
  pergolas,
  onPergolaClick,
}: {
  pergolas: PergolaProps[];
  onPergolaClick: (pergola: PergolaProps) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {pergolas.map((pergola, index) => (
      <PergolaCard
        key={pergola.id}
        pergola={pergola}
        index={index}
        onClick={() => onPergolaClick(pergola)}
      />
    ))}
  </div>
);

const PergolaCard = ({
  pergola,
  index,
  onClick,
}: {
  pergola: PergolaProps;
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
        transition: { delay, duration: 0.6 },
      }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
          {pergola.isNew && (
            <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
              Nouveau
            </span>
          )}
          {pergola.isPopular && (
            <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
              Populaire
            </span>
          )}
        </div>

        <div className="relative h-64">
          <Image
            src={pergola.image}
            alt={pergola.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
        </div>

        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <Typography variant="large" className="font-semibold">
              {pergola.name}
            </Typography>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <Typography variant="small">{pergola.rating}</Typography>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-800 capitalize">
              {pergola.material}
            </span>
            <span className="rounded-full bg-green-100 px-2 py-1 text-green-800 capitalize">
              {pergola.style}
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 text-purple-800 capitalize">
              {pergola.toiture}
            </span>
          </div>

          <Typography
            variant="small"
            className="text-muted-foreground line-clamp-2"
          >
            {pergola.description}
          </Typography>

          <div className="text-muted-foreground flex items-center justify-between text-xs">
            <span className="flex items-center gap-1">
              <Umbrella size={12} />
              {pergola.surface}
            </span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <Typography variant="small" className="text-primary font-semibold">
              {pergola.priceRange}
            </Typography>
            <Button size="sm" variant="outline" className="text-xs">
              Voir détails
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PergolaModal = ({
  pergola,
  onClose,
}: {
  pergola: PergolaProps;
  onClose: () => void;
}) => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Votre demande de devis a été envoyée avec succès !");
    onClose();
  };

  const getPerformanceIcon = (feature: string) => {
    if (feature.includes("Lames") || feature.includes("orientables"))
      return Wind;
    if (feature.includes("Protection") || feature.includes("solaire"))
      return Sun;
    if (feature.includes("Isolation") || feature.includes("thermique"))
      return Shield;
    if (feature.includes("météo") || feature.includes("automatique"))
      return Thermometer;
    if (feature.includes("Bois") || feature.includes("naturel"))
      return TreePine;
    if (feature.includes("Surface") || feature.includes("Grande")) return Home;
    if (feature.includes("Toiture") || feature.includes("Protection"))
      return Umbrella;
    return Shield;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        >
          <X size={20} />
        </button>

        <div className="flex h-full max-h-[90vh] overflow-y-auto">
          {/* Image */}
          <div className="hidden md:block md:w-1/2">
            <div className="relative h-full min-h-[500px]">
              <Image
                src={pergola.image}
                alt={pergola.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Contenu */}
          <div className="w-full space-y-6 p-6 md:w-1/2">
            {!showQuoteForm ? (
              <>
                {/* En-tête */}
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Typography variant="h2">{pergola.name}</Typography>
                    <div className="flex items-center gap-1">
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <Typography variant="small">{pergola.rating}</Typography>
                    </div>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 capitalize">
                      {pergola.material}
                    </span>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 capitalize">
                      {pergola.style}
                    </span>
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800 capitalize">
                      Toiture {pergola.toiture}
                    </span>
                  </div>

                  <Typography variant="large" className="text-primary">
                    {pergola.priceRange}
                  </Typography>
                </div>

                {/* Informations techniques */}
                <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4">
                  <div>
                    <Typography
                      variant="small"
                      className="text-muted-foreground"
                    >
                      Surface
                    </Typography>
                    <Typography variant="small" className="font-semibold">
                      {pergola.surface}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      className="text-muted-foreground"
                    >
                      Matériau
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-semibold capitalize"
                    >
                      {pergola.material}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      className="text-muted-foreground"
                    >
                      Style
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-semibold capitalize"
                    >
                      {pergola.style}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      className="text-muted-foreground"
                    >
                      Toiture
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-semibold capitalize"
                    >
                      {pergola.toiture}
                    </Typography>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <Typography variant="h3" className="mb-2">
                    Description
                  </Typography>
                  <Typography
                    variant="p"
                    className="text-muted-foreground leading-relaxed"
                  >
                    {pergola.description}
                  </Typography>
                </div>

                {/* Caractéristiques */}
                <div>
                  <Typography variant="h3" className="mb-3">
                    Caractéristiques
                  </Typography>
                  <div className="grid grid-cols-1 gap-2">
                    {pergola.features.map((feature, index) => {
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
                  <Typography variant="h3" className="mb-3">
                    Couleurs disponibles
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {pergola.colors.map((color, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={() => setShowQuoteForm(true)}
                    className="bg-primary hover:bg-primary/90 flex-1 text-white"
                  >
                    Demander un devis
                  </Button>
                  <Button
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Fermer
                  </Button>
                </div>
              </>
            ) : (
              <>
                {/* Formulaire de devis */}
                <div>
                  <Typography variant="h2" className="mb-2">
                    Demande de devis
                  </Typography>
                  <Typography variant="muted" className="mb-6">
                    Pour la pergola <strong>{pergola.name}</strong>
                  </Typography>
                </div>

                <form onSubmit={handleSubmitQuote} className="space-y-4">
                  <div>
                    <Typography
                      variant="small"
                      as="label"
                      className="mb-1 block"
                    >
                      Nom complet *
                    </Typography>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <Typography
                      variant="small"
                      as="label"
                      className="mb-1 block"
                    >
                      Email *
                    </Typography>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <Typography
                      variant="small"
                      as="label"
                      className="mb-1 block"
                    >
                      Téléphone *
                    </Typography>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div>
                    <Typography
                      variant="small"
                      as="label"
                      className="mb-1 block"
                    >
                      Message (optionnel)
                    </Typography>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre projet : dimensions souhaitées, usage prévu, type de fixation, contraintes du terrain..."
                      rows={4}
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 flex-1 text-white"
                    >
                      Envoyer la demande
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowQuoteForm(false)}
                      className="flex-1"
                    >
                      Retour
                    </Button>
                  </div>
                </form>

                {/* Informations de contact */}
                <div className="mt-6 rounded-lg bg-gray-50 p-4">
                  <Typography variant="small" className="mb-3 font-semibold">
                    Ou contactez-nous directement
                  </Typography>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone size={14} />
                      <Typography variant="small">05 56 12 34 56</Typography>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={14} />
                      <Typography variant="small">
                        contact@segment-c.com
                      </Typography>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <Typography variant="small">
                        St Jean d'Illac, Gironde
                      </Typography>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PergolasSection;
