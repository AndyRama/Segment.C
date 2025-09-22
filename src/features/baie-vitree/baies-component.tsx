"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  X,
  Star,
  Shield,
  Phone,
  Mail,
  MapPin,
  Sun,
  Thermometer,
  Eye,
} from "lucide-react";

type BaieVitreeProps = {
  id: number;
  name: string;
  category: string;
  material: string;
  ouverture: string;
  vitrage: string;
  image: string;
  colors: string[];
  features: string[];
  description: string;
  priceRange: string;
  rating: number;
  dimensions: string;
  uw: string;
  isPopular?: boolean;
  isNew?: boolean;
};

type BaiesVitrreesSectionProps = {
  className?: string;
};

const BaiesVitreesSection = ({ className }: BaiesVitrreesSectionProps) => {
  const [selectedBaie, setSelectedBaie] = useState<BaieVitreeProps | null>(
    null,
  );
  const [visibleCount, setVisibleCount] = useState(9);
  const [filters, setFilters] = useState({
    material: "all",
    ouverture: "all",
    vitrage: "all",
  });

  const baiesVitrees: BaieVitreeProps[] = [
    {
      id: 1,
      name: "HORIZON COULISSANT",
      category: "baie-vitree",
      material: "aluminium",
      ouverture: "coulissante",
      vitrage: "double",
      image: "/images/fenetre2.jpg",
      colors: ["Gris anthracite", "Blanc", "Noir mat", "Bronze"],
      features: [
        "Grande ouverture",
        "Seuil PMR",
        "Vitrage sécurisé",
        "Rails haute qualité",
      ],
      description:
        "Baie vitrée coulissante en aluminium pour une ouverture maximale sur l'extérieur. Design épuré et fonctionnalité optimale.",
      priceRange: "1200€ - 1800€",
      rating: 4.7,
      dimensions: "200x215 à 400x250 cm",
      uw: "Uw = 1.4 W/m²K",
      isPopular: true,
    },
    {
      id: 2,
      name: "PANORAMA LIFT",
      category: "baie-vitree",
      material: "pvc",
      ouverture: "coulissante",
      vitrage: "double",
      image: "/images/baie-panorama-lift.jpg",
      colors: ["Blanc", "Gris clair", "Anthracite"],
      features: [
        "Système lift & slide",
        "Grandes dimensions",
        "Isolation thermique",
        "Prix attractif",
      ],
      description:
        "Baie vitrée PVC avec système de levage pour une manipulation aisée même sur de grandes dimensions. Excellent rapport qualité-prix.",
      priceRange: "900€ - 1400€",
      rating: 4.5,
      dimensions: "180x215 à 350x240 cm",
      uw: "Uw = 1.3 W/m²K",
    },
    {
      id: 3,
      name: "ACCORDION FLEX",
      category: "baie-vitree",
      material: "aluminium",
      ouverture: "pliante",
      vitrage: "double",
      image: "/images/baie-accordion-flex.jpg",
      colors: ["Anthracite", "Blanc", "Bronze", "Gris"],
      features: [
        "Ouverture totale",
        "Système pliant",
        "Design moderne",
        "Étanchéité parfaite",
      ],
      description:
        "Baie vitrée pliante permettant une ouverture totale de l'espace. Solution innovante pour connecter intérieur et extérieur.",
      priceRange: "1500€ - 2200€",
      rating: 4.8,
      dimensions: "200x215 à 600x250 cm",
      uw: "Uw = 1.2 W/m²K",
      isNew: true,
    },
    {
      id: 4,
      name: "GALANDAGE INVISIBLE",
      category: "baie-vitree",
      material: "aluminium",
      ouverture: "coulissante-galandage",
      vitrage: "triple",
      image: "/images/baie-galandage-invisible.jpg",
      colors: ["Anthracite", "Noir", "Blanc pur"],
      features: [
        "Coulissement dans cloison",
        "Triple vitrage",
        "Design minimal",
        "Gain d'espace",
      ],
      description:
        "Baie vitrée à galandage disparaissant totalement dans la cloison. Solution haut de gamme pour un design épuré et moderne.",
      priceRange: "2000€ - 3000€",
      rating: 4.9,
      dimensions: "200x215 à 400x280 cm",
      uw: "Uw = 0.9 W/m²K",
    },
    {
      id: 5,
      name: "INFINITY GLASS",
      category: "baie-vitree",
      material: "aluminium",
      ouverture: "fixe",
      vitrage: "triple",
      image: "/images/baie-infinity-glass.jpg",
      colors: ["Noir mat", "Anthracite", "Bronze"],
      features: [
        "Vitrage structural",
        "Vue panoramique",
        "Isolation maximale",
        "Design architectural",
      ],
      description:
        "Baie vitrée fixe avec vitrage structural pour une vue panoramique sans interruption. Solution architecturale haut de gamme.",
      priceRange: "1800€ - 2800€",
      rating: 4.9,
      dimensions: "200x215 à 600x350 cm",
      uw: "Uw = 0.6 W/m²K",
      isPopular: true,
    },
    {
      id: 6,
      name: "CRYSTAL TERRACE",
      category: "baie-vitree",
      material: "pvc",
      ouverture: "battante",
      vitrage: "double",
      image: "/images/baie-crystal-terrace.jpg",
      colors: ["Blanc", "Beige", "Gris"],
      features: [
        "Ouverture française",
        "Seuil abaissé",
        "Vitrage feuilleté",
        "Entretien facile",
      ],
      description:
        "Baie vitrée PVC à ouverture battante, idéale pour accéder à une terrasse. Classique et fonctionnelle.",
      priceRange: "800€ - 1200€",
      rating: 4.4,
      dimensions: "120x215 à 240x240 cm",
      uw: "Uw = 1.1 W/m²K",
    },
    {
      id: 7,
      name: "TIMBER VISION",
      category: "baie-vitree",
      material: "bois",
      ouverture: "battante",
      vitrage: "double",
      image: "/images/baie-timber-vision.jpg",
      colors: ["Chêne naturel", "Pin lasuré", "Mélèze"],
      features: [
        "Bois massif",
        "Isolation naturelle",
        "Finition artisanale",
        "Respirant",
      ],
      description:
        "Baie vitrée en bois massif au charme authentique. Matériau noble pour un habitat sain et chaleureux.",
      priceRange: "1400€ - 2100€",
      rating: 4.6,
      dimensions: "120x215 à 200x240 cm",
      uw: "Uw = 1.2 W/m²K",
    },
    {
      id: 8,
      name: "FUSION PRESTIGE",
      category: "baie-vitree",
      material: "bois-aluminium",
      ouverture: "coulissante",
      vitrage: "triple",
      image: "/images/baie-fusion-prestige.jpg",
      colors: ["Chêne/Anthracite", "Pin/Blanc", "Mélèze/Bronze"],
      features: [
        "Double matériau",
        "Triple vitrage",
        "Performance maximale",
        "Entretien minimal",
      ],
      description:
        "Baie vitrée mixte bois-aluminium combinant l'esthétique du bois à l'intérieur et la résistance de l'aluminium à l'extérieur.",
      priceRange: "2200€ - 3200€",
      rating: 4.8,
      dimensions: "200x215 à 350x250 cm",
      uw: "Uw = 0.8 W/m²K",
      isNew: true,
    },
    {
      id: 9,
      name: "STEEL LOFT",
      category: "baie-vitree",
      material: "acier",
      ouverture: "battante",
      vitrage: "double",
      image: "/images/baie-steel-loft.jpg",
      colors: ["Noir mat", "Gris anthracite"],
      features: [
        "Style industriel",
        "Cadre fin",
        "Vitrage maximal",
        "Robustesse",
      ],
      description:
        "Baie vitrée acier au style industriel avec cadres fins pour un maximum de vitrage. Parfaite pour les lofts et architectures contemporaines.",
      priceRange: "1600€ - 2400€",
      rating: 4.7,
      dimensions: "150x215 à 250x250 cm",
      uw: "Uw = 1.8 W/m²K",
    },
    {
      id: 10,
      name: "COMPACT SLIDE",
      category: "baie-vitree",
      material: "aluminium",
      ouverture: "coulissante",
      vitrage: "double",
      image: "/images/baie-compact-slide.jpg",
      colors: ["Blanc", "Gris", "Anthracite"],
      features: [
        "Format compact",
        "Ouverture facile",
        "Prix accessible",
        "Design épuré",
      ],
      description:
        "Baie vitrée coulissante compacte, parfaite pour les petits espaces. Solution économique sans compromis sur la qualité.",
      priceRange: "700€ - 1100€",
      rating: 4.3,
      dimensions: "120x215 à 180x240 cm",
      uw: "Uw = 1.5 W/m²K",
      isPopular: true,
    },
    {
      id: 11,
      name: "ELEGANCE PIVOT",
      category: "baie-vitree",
      material: "aluminium",
      ouverture: "pivotante",
      vitrage: "triple",
      image: "/images/baie-elegance-pivot.jpg",
      colors: ["Bronze", "Anthracite", "Noir"],
      features: [
        "Ouverture pivotante",
        "Design unique",
        "Triple vitrage",
        "Étanchéité renforcée",
      ],
      description:
        "Baie vitrée à ouverture pivotante au design unique. Solution originale pour les architectures contemporaines.",
      priceRange: "1900€ - 2700€",
      rating: 4.6,
      dimensions: "160x215 à 220x250 cm",
      uw: "Uw = 0.9 W/m²K",
    },
    {
      id: 12,
      name: "MAXIMA OPENING",
      category: "baie-vitree",
      material: "aluminium",
      ouverture: "coulissante",
      vitrage: "double",
      image: "/images/baie-maxima-opening.jpg",
      colors: ["Gris clair", "Blanc", "Anthracite"],
      features: [
        "Très grandes dimensions",
        "Système lift & slide",
        "Vue panoramique",
        "Isolation optimale",
      ],
      description:
        "Baie vitrée de très grandes dimensions pour une ouverture exceptionnelle sur l'extérieur. Performance et esthétique au rendez-vous.",
      priceRange: "2500€ - 4000€",
      rating: 4.8,
      dimensions: "300x215 à 600x280 cm",
      uw: "Uw = 1.1 W/m²K",
      isNew: true,
    },
  ];

  const materialFilters = [
    { key: "all", label: "Tous matériaux" },
    { key: "aluminium", label: "Aluminium" },
    { key: "pvc", label: "PVC" },
    { key: "bois", label: "Bois" },
    { key: "bois-aluminium", label: "Bois-Aluminium" },
    { key: "acier", label: "Acier" },
  ];

  const ouvertureFilters = [
    { key: "all", label: "Tous types" },
    { key: "coulissante", label: "Coulissante" },
    { key: "battante", label: "Battante" },
    { key: "pliante", label: "Pliante" },
    { key: "fixe", label: "Fixe" },
    { key: "pivotante", label: "Pivotante" },
  ];

  const vitrageFilters = [
    { key: "all", label: "Tous vitrages" },
    { key: "double", label: "Double vitrage" },
    { key: "triple", label: "Triple vitrage" },
  ];

  const filteredBaies = baiesVitrees.filter((baie) => {
    return (
      (filters.material === "all" || baie.material === filters.material) &&
      (filters.ouverture === "all" || baie.ouverture === filters.ouverture) &&
      (filters.vitrage === "all" || baie.vitrage === filters.vitrage)
    );
  });

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredBaies.length));
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
    setVisibleCount(12);
  };

  return (
    <section
      className={cn(
        "relative mx-auto w-full max-w-7xl px-4 py-20 lg:px-0",
        className,
      )}
    >
      <BaiesVitreesHeader />
      <BaiesVitreesFilters
        materialFilters={materialFilters}
        ouvertureFilters={ouvertureFilters}
        vitrageFilters={vitrageFilters}
        activeFilters={filters}
        onFilterChange={handleFilterChange}
      />
      <BaiesVitreesGrid
        baiesVitrees={filteredBaies.slice(0, visibleCount)}
        onBaieClick={setSelectedBaie}
      />

      {visibleCount < filteredBaies.length && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleShowMore}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Voir plus de baies vitrées
          </Button>
        </div>
      )}

      {selectedBaie && (
        <BaieVitreeModal
          baieVitree={selectedBaie}
          onClose={() => setSelectedBaie(null)}
        />
      )}
    </section>
  );
};

const BaiesVitreesHeader = () => (
  <div className="mb-12 space-y-4 text-center">
    <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
      Notre selection de Baies Vitrées
    </Typography>
    <Typography
      variant="large"
      className="text-muted-foreground mx-auto max-w-3xl"
    >
      Ouvrez votre intérieur sur l'extérieur avec nos baies vitrées. Luminosité,
      vue panoramique et connexion avec la nature pour transformer votre espace
      de vie.
    </Typography>
  </div>
);

const BaiesVitreesFilters = ({
  materialFilters,
  ouvertureFilters,
  vitrageFilters,
  activeFilters,
  onFilterChange,
}: {
  materialFilters: { key: string; label: string }[];
  ouvertureFilters: { key: string; label: string }[];
  vitrageFilters: { key: string; label: string }[];
  activeFilters: { material: string; ouverture: string; vitrage: string };
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
        Ouverture:
      </span>
      {ouvertureFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={
            activeFilters.ouverture === filter.key ? "default" : "outline"
          }
          size="sm"
          onClick={() => onFilterChange("ouverture", filter.key)}
          className={cn(
            "transition-all duration-200",
            activeFilters.ouverture === filter.key
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
        Vitrage:
      </span>
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
              : "hover:bg-primary/10",
          )}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  </div>
);

const BaiesVitreesGrid = ({
  baiesVitrees,
  onBaieClick,
}: {
  baiesVitrees: BaieVitreeProps[];
  onBaieClick: (baie: BaieVitreeProps) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {baiesVitrees.map((baie, index) => (
      <BaieVitreeCard
        key={baie.id}
        baieVitree={baie}
        index={index}
        onClick={() => onBaieClick(baie)}
      />
    ))}
  </div>
);

const BaieVitreeCard = ({
  baieVitree,
  index,
  onClick,
}: {
  baieVitree: BaieVitreeProps;
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
          {baieVitree.isNew && (
            <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
              Nouveau
            </span>
          )}
          {baieVitree.isPopular && (
            <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
              Populaire
            </span>
          )}
        </div>

        <div className="relative h-64">
          <Image
            src={baieVitree.image}
            alt={baieVitree.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
        </div>

        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <Typography variant="large" className="font-semibold">
              {baieVitree.name}
            </Typography>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <Typography variant="small">{baieVitree.rating}</Typography>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-800 capitalize">
              {baieVitree.material}
            </span>
            <span className="rounded-full bg-green-100 px-2 py-1 text-green-800 capitalize">
              {baieVitree.ouverture}
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 text-purple-800 capitalize">
              {baieVitree.vitrage} vitrage
            </span>
          </div>

          <Typography
            variant="small"
            className="text-muted-foreground line-clamp-2"
          >
            {baieVitree.description}
          </Typography>

          <div className="text-muted-foreground flex items-center justify-between text-xs">
            <span className="flex items-center gap-1">
              <Thermometer size={12} />
              {baieVitree.uw}
            </span>
            <span>{baieVitree.dimensions.split(" à ")[0]}</span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <Typography variant="small" className="text-primary font-semibold">
              {baieVitree.priceRange}
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

const BaieVitreeModal = ({
  baieVitree,
  onClose,
}: {
  baieVitree: BaieVitreeProps;
  onClose: () => void;
}) => {
  const { data: session } = useSession();

  const getPerformanceIcon = (feature: string) => {
    if (
      feature.includes("vitrage") ||
      feature.includes("Isolation") ||
      feature.includes("thermique")
    )
      return Thermometer;
    if (
      feature.includes("Vue") ||
      feature.includes("panoramique") ||
      feature.includes("vision")
    )
      return Eye;
    if (feature.includes("Design") || feature.includes("esthétique"))
      return Sun;
    return Shield;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-md bg-white">
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
                src={baieVitree.image}
                alt={baieVitree.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Contenu */}
          <div className="w-full space-y-4 p-4 md:w-1/2">
            {/* En-tête */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Typography variant="h2">{baieVitree.name}</Typography>
                <div className="flex items-center gap-1">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  <Typography variant="small">
                    {baieVitree.rating}
                  </Typography>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 capitalize">
                  {baieVitree.material}
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 capitalize">
                  {baieVitree.ouverture}
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800 capitalize">
                  {baieVitree.vitrage} vitrage
                </span>
              </div>

              <Typography variant="large" className="text-primary">
                {baieVitree.priceRange}
              </Typography>
            </div>

            {/* Informations techniques */}
            <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4">
              <div>
                <Typography
                  variant="small"
                  className="text-muted-foreground"
                >
                  Performance thermique
                </Typography>
                <Typography variant="small" className="font-semibold">
                  {baieVitree.uw}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="small"
                  className="text-muted-foreground"
                >
                  Dimensions
                </Typography>
                <Typography variant="small" className="font-semibold">
                  {baieVitree.dimensions}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="small"
                  className="text-muted-foreground"
                >
                  Ouverture
                </Typography>
                <Typography
                  variant="small"
                  className="font-semibold capitalize"
                >
                  {baieVitree.ouverture}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="small"
                  className="text-muted-foreground"
                >
                  Vitrage
                </Typography>
                <Typography
                  variant="small"
                  className="font-semibold capitalize"
                >
                  {baieVitree.vitrage} vitrage
                </Typography>
              </div>
            </div>

            {/* Description */}
            <div>
              <Typography variant="h3" className="mb-1">
                Description
              </Typography>
              <Typography
                variant="p"
                className="text-muted-foreground leading-relaxed"
              >
                {baieVitree.description}
              </Typography>
            </div>

            {/* Caractéristiques */}
            <div>
              <Typography variant="h3" className="mb-3">
                Caractéristiques
              </Typography>
              <div className="grid grid-cols-1 gap-2">
                {baieVitree.features.map((feature, index) => {
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
                {baieVitree.colors.map((color, index) => (
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
                  Ajout au panier
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
              {/* <div className="mt-3 border-t border-gray-200 pt-3">
                <Typography
                  variant="small"
                  className="text-muted-foreground"
                >
                  🏠 Visite technique gratuite et sans engagement
                  <br />
                  📏 Prise de mesures professionnelle
                  <br />
                  🔧 Installation par nos équipes certifiées
                </Typography>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiesVitreesSection;