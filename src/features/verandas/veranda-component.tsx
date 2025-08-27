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
} from "lucide-react";

type VerandaProps = {
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

type VerandasSectionProps = {
  className?: string;
};

const VerandasSection = ({ className }: VerandasSectionProps) => {
  const [selectedVeranda, setSelectedVeranda] = useState<VerandaProps | null>(
    null,
  );
  const [visibleCount, setVisibleCount] = useState(9);
  const [filters, setFilters] = useState({
    material: "all",
    style: "all",
    toiture: "all",
  });

  const verandas: VerandaProps[] = [
    {
      id: 1,
      name: "JARDIN D'HIVER",
      category: "veranda",
      material: "aluminium",
      style: "contemporaine",
      toiture: "verre",
      image: "/images/veranda-jardin-hiver.jpg",
      colors: ["Blanc", "Gris anthracite", "Bronze"],
      features: [
        "Toiture vitrée",
        "Isolation renforcée",
        "Ventilation naturelle",
        "Éclairage optimal",
      ],
      description:
        "Véranda aluminium contemporaine avec toiture entièrement vitrée. Créez votre jardin d'hiver pour profiter de la nature toute l'année.",
      priceRange: "15000€ - 25000€",
      rating: 4.8,
      surface: "15 à 30 m²",
      isPopular: true,
    },
    {
      id: 2,
      name: "TRADITION CLASSIC",
      category: "veranda",
      material: "pvc",
      style: "traditionnelle",
      toiture: "tuile",
      image: "/images/veranda-tradition-classic.jpg",
      colors: ["Blanc", "Crème", "Gris clair"],
      features: [
        "Toiture tuile",
        "Style authentique",
        "Isolation thermique",
        "Prix accessible",
      ],
      description:
        "Véranda PVC au style traditionnel avec toiture tuile, parfaitement intégrée à l'architecture classique de votre maison.",
      priceRange: "8000€ - 15000€",
      rating: 4.5,
      surface: "10 à 25 m²",
    },
    {
      id: 3,
      name: "PRESTIGE BOIS",
      category: "veranda",
      material: "bois",
      style: "traditionnelle",
      toiture: "mixte",
      image: "/images/veranda-prestige-bois.jpg",
      colors: ["Chêne naturel", "Pin lasuré", "Mélèze"],
      features: [
        "Bois massif",
        "Toiture mixte",
        "Charme authentique",
        "Isolation naturelle",
      ],
      description:
        "Véranda en bois massif au charme intemporel. Matériau noble pour une extension harmonieuse et chaleureuse.",
      priceRange: "18000€ - 30000€",
      rating: 4.9,
      surface: "15 à 35 m²",
      isNew: true,
    },
    {
      id: 4,
      name: "MODERN GLASS",
      category: "veranda",
      material: "aluminium",
      style: "contemporaine",
      toiture: "verre",
      image: "/images/veranda-modern-glass.jpg",
      colors: ["Gris anthracite", "Noir mat", "Blanc pur"],
      features: [
        "Design épuré",
        "Toiture verre",
        "Grandes ouvertures",
        "Performance énergétique",
      ],
      description:
        "Véranda aluminium au design contemporain avec un maximum de vitrage. Architecture moderne pour une luminosité exceptionnelle.",
      priceRange: "20000€ - 35000€",
      rating: 4.7,
      surface: "20 à 40 m²",
    },
    {
      id: 5,
      name: "BIOCLIMATIQUE PRO",
      category: "veranda",
      material: "aluminium",
      style: "contemporaine",
      toiture: "bioclimatique",
      image: "/images/veranda-bioclimatique.jpg",
      colors: ["Anthracite", "Blanc", "Bronze"],
      features: [
        "Lames orientables",
        "Gestion climatique",
        "Protection solaire",
        "Ventilation automatique",
      ],
      description:
        "Véranda bioclimatique avec toiture à lames orientables. Contrôlez parfaitement température et luminosité selon les saisons.",
      priceRange: "25000€ - 45000€",
      rating: 4.9,
      surface: "20 à 50 m²",
      isNew: true,
    },
    {
      id: 6,
      name: "COTTAGE ANGLAIS",
      category: "veranda",
      material: "pvc",
      style: "traditionnelle",
      toiture: "polycarbonate",
      image: "/images/veranda-cottage.jpg",
      colors: ["Blanc cassé", "Vert anglais", "Bleu gris"],
      features: [
        "Style cottage",
        "Toiture polycarbonate",
        "Isolation correcte",
        "Entretien minimal",
      ],
      description:
        "Véranda PVC au style cottage anglais avec toiture polycarbonate. Charme britannique pour une extension cosy et lumineuse.",
      priceRange: "6000€ - 12000€",
      rating: 4.3,
      surface: "8 à 20 m²",
      isPopular: true,
    },
    {
      id: 7,
      name: "FUSION ÉLÉGANCE",
      category: "veranda",
      material: "bois-aluminium",
      style: "contemporaine",
      toiture: "verre",
      image: "/images/veranda-fusion-elegance.jpg",
      colors: ["Chêne/Anthracite", "Pin/Blanc", "Mélèze/Bronze"],
      features: [
        "Matériaux mixtes",
        "Toiture vitrée",
        "Haute performance",
        "Design sophistiqué",
      ],
      description:
        "Véranda mixte bois-aluminium alliant esthétique du bois et performance de l'aluminium. Excellence technique et visuelle.",
      priceRange: "30000€ - 50000€",
      rating: 4.8,
      surface: "25 à 50 m²",
    },
    {
      id: 8,
      name: "EXTENSION FAMILIALE",
      category: "veranda",
      material: "aluminium",
      style: "contemporaine",
      toiture: "mixte",
      image: "/images/veranda-extension-familiale.jpg",
      colors: ["Blanc", "Gris clair", "Anthracite"],
      features: [
        "Grande surface",
        "Toiture mixte",
        "Isolation renforcée",
        "Chauffage intégré",
      ],
      description:
        "Grande véranda familiale pour agrandir votre espace de vie. Conception adaptée aux grandes réunions de famille.",
      priceRange: "22000€ - 40000€",
      rating: 4.6,
      surface: "30 à 60 m²",
    },
    {
      id: 9,
      name: "SPA DÉTENTE",
      category: "veranda",
      material: "aluminium",
      style: "contemporaine",
      toiture: "opaque",
      image: "/images/veranda-spa.jpg",
      colors: ["Gris zen", "Blanc nature", "Taupe"],
      features: [
        "Ambiance spa",
        "Toiture isolante",
        "Intimité préservée",
        "Équipements wellness",
      ],
      description:
        "Véranda dédiée au bien-être avec toiture opaque pour créer une ambiance spa relaxante et intimiste.",
      priceRange: "18000€ - 32000€",
      rating: 4.7,
      surface: "15 à 30 m²",
    },
    {
      id: 10,
      name: "ATELIER ARTISTE",
      category: "veranda",
      material: "acier",
      style: "industrielle",
      toiture: "verre",
      image: "/images/veranda-atelier.jpg",
      colors: ["Noir mat", "Gris industriel"],
      features: [
        "Style atelier",
        "Toiture verrière",
        "Luminosité nordique",
        "Structure robuste",
      ],
      description:
        "Véranda style atelier d'artiste avec structure acier et verrière. Lumière parfaite pour la création et les activités artistiques.",
      priceRange: "16000€ - 28000€",
      rating: 4.8,
      surface: "20 à 35 m²",
      isNew: true,
    },
    {
      id: 11,
      name: "ÉCONOMIQUE PLUS",
      category: "veranda",
      material: "pvc",
      style: "contemporaine",
      toiture: "polycarbonate",
      image: "/images/veranda-economique.jpg",
      colors: ["Blanc", "Gris", "Beige"],
      features: [
        "Excellent rapport qualité-prix",
        "Installation rapide",
        "Entretien facile",
        "Garantie étendue",
      ],
      description:
        "Véranda PVC économique sans compromis sur la qualité. Solution accessible pour agrandir votre espace de vie.",
      priceRange: "5000€ - 10000€",
      rating: 4.2,
      surface: "8 à 18 m²",
      isPopular: true,
    },
    {
      id: 12,
      name: "LOFT URBAIN",
      category: "veranda",
      material: "acier",
      style: "industrielle",
      toiture: "mixte",
      image: "/images/veranda-loft.jpg",
      colors: ["Noir", "Gris anthracite", "Rouille"],
      features: [
        "Esprit loft",
        "Structure apparente",
        "Toiture mixte",
        "Design urbain",
      ],
      description:
        "Véranda style loft industriel avec structure acier apparente. Extension moderne pour les architectures urbaines contemporaines.",
      priceRange: "20000€ - 35000€",
      rating: 4.6,
      surface: "20 à 40 m²",
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

  const styleFilters = [
    { key: "all", label: "Tous styles" },
    { key: "contemporaine", label: "Contemporaine" },
    { key: "traditionnelle", label: "Traditionnelle" },
    { key: "industrielle", label: "Industrielle" },
  ];

  const toitureFilters = [
    { key: "all", label: "Toutes toitures" },
    { key: "verre", label: "Verre" },
    { key: "tuile", label: "Tuile" },
    { key: "polycarbonate", label: "Polycarbonate" },
    { key: "mixte", label: "Mixte" },
    { key: "bioclimatique", label: "Bioclimatique" },
    { key: "opaque", label: "Opaque" },
  ];

  const filteredVerandas = verandas.filter((veranda) => {
    return (
      (filters.material === "all" || veranda.material === filters.material) &&
      (filters.style === "all" || veranda.style === filters.style) &&
      (filters.toiture === "all" || veranda.toiture === filters.toiture)
    );
  });

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredVerandas.length));
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
      <VerandasHeader />
      <VerandasFilters
        materialFilters={materialFilters}
        styleFilters={styleFilters}
        toitureFilters={toitureFilters}
        activeFilters={filters}
        onFilterChange={handleFilterChange}
      />
      <VerandasGrid
        verandas={filteredVerandas.slice(0, visibleCount)}
        onVerandaClick={setSelectedVeranda}
      />

      {visibleCount < filteredVerandas.length && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleShowMore}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Voir plus de vérandas
          </Button>
        </div>
      )}

      {selectedVeranda && (
        <VerandaModal
          veranda={selectedVeranda}
          onClose={() => setSelectedVeranda(null)}
        />
      )}
    </section>
  );
};

const VerandasHeader = () => (
  <div className="mb-12 space-y-4 text-center">
    <Typography variant="h1" className="text-3xl md:text-4xl xl:text-5xl">
      Notre selection de Vérandas
    </Typography>
    <Typography
      variant="large"
      className="text-muted-foreground mx-auto max-w-3xl"
    >
      Agrandissez votre espace de vie avec nos vérandas sur mesure. Jardin
      d'hiver, extension familiale ou espace détente, créez votre pièce
      supplémentaire baignée de lumière naturelle.
    </Typography>
  </div>
);

const VerandasFilters = ({
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

const VerandasGrid = ({
  verandas,
  onVerandaClick,
}: {
  verandas: VerandaProps[];
  onVerandaClick: (veranda: VerandaProps) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {verandas.map((veranda, index) => (
      <VerandaCard
        key={veranda.id}
        veranda={veranda}
        index={index}
        onClick={() => onVerandaClick(veranda)}
      />
    ))}
  </div>
);

const VerandaCard = ({
  veranda,
  index,
  onClick,
}: {
  veranda: VerandaProps;
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
          {veranda.isNew && (
            <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
              Nouveau
            </span>
          )}
          {veranda.isPopular && (
            <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
              Populaire
            </span>
          )}
        </div>

        <div className="relative h-64">
          <Image
            src={veranda.image}
            alt={veranda.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
        </div>

        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <Typography variant="large" className="font-semibold">
              {veranda.name}
            </Typography>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <Typography variant="small">{veranda.rating}</Typography>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-800 capitalize">
              {veranda.material}
            </span>
            <span className="rounded-full bg-green-100 px-2 py-1 text-green-800 capitalize">
              {veranda.style}
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 text-purple-800 capitalize">
              {veranda.toiture}
            </span>
          </div>

          <Typography
            variant="small"
            className="text-muted-foreground line-clamp-2"
          >
            {veranda.description}
          </Typography>

          <div className="text-muted-foreground flex items-center justify-between text-xs">
            <span className="flex items-center gap-1">
              <Home size={12} />
              {veranda.surface}
            </span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <Typography variant="small" className="text-primary font-semibold">
              {veranda.priceRange}
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

const VerandaModal = ({
  veranda,
  onClose,
}: {
  veranda: VerandaProps;
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
    if (feature.includes("Toiture") || feature.includes("toiture")) return Sun;
    if (feature.includes("Isolation") || feature.includes("thermique"))
      return Shield;
    if (
      feature.includes("naturelle") ||
      feature.includes("Bois") ||
      feature.includes("Charme")
    )
      return TreePine;
    if (feature.includes("Surface") || feature.includes("Grande")) return Home;
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
                src={veranda.image}
                alt={veranda.name}
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
                    <Typography variant="h2">{veranda.name}</Typography>
                    <div className="flex items-center gap-1">
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <Typography variant="small">{veranda.rating}</Typography>
                    </div>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 capitalize">
                      {veranda.material}
                    </span>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 capitalize">
                      {veranda.style}
                    </span>
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800 capitalize">
                      Toiture {veranda.toiture}
                    </span>
                  </div>

                  <Typography variant="large" className="text-primary">
                    {veranda.priceRange}
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
                      {veranda.surface}
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
                      {veranda.material}
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
                      {veranda.style}
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
                      {veranda.toiture}
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
                    {veranda.description}
                  </Typography>
                </div>

                {/* Caractéristiques */}
                <div>
                  <Typography variant="h3" className="mb-3">
                    Caractéristiques
                  </Typography>
                  <div className="grid grid-cols-1 gap-2">
                    {veranda.features.map((feature, index) => {
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
                    {veranda.colors.map((color, index) => (
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
                    Pour la véranda <strong>{veranda.name}</strong>
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
                      placeholder="Décrivez votre projet : surface souhaitée, usage prévu, contraintes du terrain..."
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
                  <div className="mt-3 border-t border-gray-200 pt-3">
                    <Typography
                      variant="small"
                      className="text-muted-foreground"
                    >
                      🏠 Étude de faisabilité gratuite
                      <br />
                      📐 Plans et 3D personnalisés
                      <br />
                      🔧 Installation par nos équipes spécialisées
                    </Typography>
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

export default VerandasSection;
