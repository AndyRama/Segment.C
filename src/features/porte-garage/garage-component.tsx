"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { Button, buttonVariants } from "@/components/ui/button";
import { X, Star, Shield, Home, Thermometer, Volume2, Lock, Filter } from "lucide-react";

type Product = {
  id: string;
  name: string;
  category: string;
  material: string;
  image: string;
  colors: string[];
  features: string[];
  description: string;
  dimensions: string;
  epaisseur: string;
  performance: string;
  priceRange: string;
  rating: number;
  seller?: string;
  isPopular?: boolean;
  isNew?: boolean;
}

type GarageSectionProps = {
  className?: string;
}

const GarageSection = ({ className }: GarageSectionProps) => {
  const [selectedGarage, setSelectedGarage] = useState<Product | null>(null);
  const [garages, setGarages] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filters, setFilters] = useState({
    material: "all",
    seller: "all",
    category: "all",
  });

  const limit = 40;

  // Catégories de portes de garage autorisées
  const allowedCategories = ["PORTE_GARAGE"];

  // Fetch garages from API
  useEffect(() => {
    const fetchGarages = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          limit: limit.toString(),
          offset: offset.toString(),
          type: 'PORTE',
          ...(filters.category !== 'all' && { category: filters.category }),
          ...(filters.material !== 'all' && { material: filters.material }),
          ...(filters.seller !== 'all' && { seller: filters.seller }),
        });

        const response = await fetch(`/api/products?${params}`);
        if (!response.ok) throw new Error('Failed to fetch garages');
        
        const data = await response.json();
        
        // Filtrer pour ne garder que les catégories autorisées
        const filteredProducts = data.products.filter((product: Product) => 
          allowedCategories.includes(product.category)
        );
        
        if (offset === 0) {
          setGarages(filteredProducts);
        } else {
          setGarages(prev => [...prev, ...filteredProducts]);
        }
        setTotal(data.total);
      } catch (error) {
        console.error('Error fetching garages:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchGarages();
  }, [filters, offset]);

  const categoryFilters = [
    { key: "PORTE_GARAGE", label: "Porte de garage" },
  ];

  const materialFilters = [
    { key: "all", label: "Tous matériaux" },
    { key: "ALUMINIUM", label: "Aluminium" },
    { key: "ACIER", label: "Acier" },
    { key: "PVC", label: "PVC" },
    { key: "BOIS", label: "Bois" },
    { key: "BOIS_ALUMINIUM", label: "Bois-Aluminium" },
    { key: "MIXTE", label: "Mixte" },
  ];

  const sellerFilters = [
    { key: "all", label: "Tous fournisseurs" },
    { key: "SYBAIE", label: "Sy Baie" },
    { key: "C2R", label: "C2R" },
    { key: "SWAO", label: "SWAO" },
    { key: "PROFERM", label: "Proferm" },
  ];

  const handleShowMore = () => {
    setOffset(prev => prev + limit);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setOffset(0);
  };

  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-20", className)}>
      <GarageHeader />

      <div className="flex gap-8 mt-8">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <GarageFiltersSidebar
            categoryFilters={categoryFilters}
            materialFilters={materialFilters}
            sellerFilters={sellerFilters}
            activeFilters={filters}
            onFilterChange={handleFilterChange}
          />
        </aside>

        <div className="flex-1">
          <div className="lg:hidden mb-4">
            <Button
              onClick={() => setShowMobileFilters(true)}
              variant="outline"
              className="w-full"
            >
              <Filter size={16} className="mr-2" />
              Filtres ({Object.values(filters).filter(f => f !== 'all').length})
            </Button>
          </div>

          {loading && offset === 0 ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <>
              <GarageGrid
                garages={garages}
                onGarageClick={setSelectedGarage}
              />

              {garages.length < total && (
                <div className="mt-8 flex justify-center">
                  <Button
                    onClick={handleShowMore}
                    disabled={loading}
                    className="bg-primary text-white hover:bg-primary/90"
                  >
                    {loading ? 'Chargement...' : 'Voir plus de portes de garage'}
                  </Button>
                </div>
              )}

              <div className="mt-8 text-center">
                <Typography variant="small" className="text-muted-foreground">
                  {garages.length} portes de garage sur {total} modèles disponibles
                </Typography>
              </div>
            </>
          )}
        </div>
      </div>

      {selectedGarage && (
        <GarageModal
          garage={selectedGarage}
          onClose={() => setSelectedGarage(null)}
        />
      )}

      <MobileFiltersModal
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        categoryFilters={categoryFilters}
        materialFilters={materialFilters}
        sellerFilters={sellerFilters}
        activeFilters={filters}
        onFilterChange={(filterType, value) => {
          handleFilterChange(filterType, value);
          setShowMobileFilters(false);
        }}
      />
    </section>
  );
};

const MobileFiltersModal = ({
  isOpen,
  onClose,
  categoryFilters,
  materialFilters,
  sellerFilters,
  activeFilters,
  onFilterChange,
}: {
  isOpen: boolean;
  onClose: () => void;
  categoryFilters: { key: string; label: string }[];
  materialFilters: { key: string; label: string }[];
  sellerFilters: { key: string; label: string }[];
  activeFilters: { category: string; material: string; seller: string };
  onFilterChange: (filterType: string, value: string) => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 lg:hidden">
      <div className="w-full max-h-[80vh] overflow-y-auto rounded-t-2xl bg-white">
        <div className="sticky top-0 bg-white border-b px-4 py-4 flex items-center justify-between">
          <Typography variant="h3" className="text-lg font-semibold">
            Filtres
          </Typography>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4 space-y-6">
          <div>
            <Typography variant="small" className="font-medium mb-3 text-muted-foreground">
              Catégorie
            </Typography>
            <div className="space-y-2">
              {categoryFilters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => onFilterChange("category", filter.key)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-sm transition-colors",
                    activeFilters.category === filter.key
                      ? "bg-primary text-white font-medium"
                      : "bg-gray-50 hover:bg-gray-100"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <Typography variant="small" className="font-medium mb-3 text-muted-foreground">
              Matériaux
            </Typography>
            <div className="space-y-2">
              {materialFilters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => onFilterChange("material", filter.key)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-sm transition-colors",
                    activeFilters.material === filter.key
                      ? "bg-primary text-white font-medium"
                      : "bg-gray-50 hover:bg-gray-100"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <Typography variant="small" className="font-medium mb-3 text-muted-foreground">
              Fournisseur
            </Typography>
            <div className="space-y-2">
              {sellerFilters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => onFilterChange("seller", filter.key)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-sm transition-colors",
                    activeFilters.seller === filter.key
                      ? "bg-primary text-white font-medium"
                      : "bg-gray-50 hover:bg-gray-100"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {(activeFilters.category !== 'all' || activeFilters.material !== 'all' || activeFilters.seller !== 'all') && (
            <Button
              variant="outline"
              onClick={() => {
                onFilterChange('category', 'all');
                onFilterChange('material', 'all');
                onFilterChange('seller', 'all');
              }}
              className="w-full"
            >
              Réinitialiser les filtres
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const GarageHeader = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-0 md:mb-20">
    <div className="space-y-6">
      <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
        Notre sélection de portes de garage
      </Typography>
      <Typography variant="large" className="mx-auto max-w-3xl text-muted-foreground">
        Découvrez notre gamme complète de portes de garage sectionnelles, basculantes et enroulables.
        Fabriquées en France, sur mesure, dans différents matériaux : aluminium, acier, PVC et bois.
        Solutions motorisées ou manuelles pour tous vos besoins.
      </Typography>
      <div className="flex justify-start items-center gap-4 mt-6">
        <div className="flex items-center gap-2">
          <Home size={20} className="text-blue-600" />
          <Typography variant="small" className="font-medium">Made in France</Typography>
        </div>
        <div className="flex items-center gap-2">
          <Shield size={20} className="text-green-600" />
          <Typography variant="small" className="font-medium">Sur mesure</Typography>
        </div>
        <div className="flex items-center gap-2">
          <Lock size={20} className="text-orange-600" />
          <Typography variant="small" className="font-medium">Motorisation possible</Typography>
        </div>
      </div>
    </div>
    <div className="relative">
      <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/porte.jpg"
          alt="Porte de garage moderne"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  </div>
);

const GarageFiltersSidebar = ({
  categoryFilters,
  materialFilters,
  sellerFilters,
  activeFilters,
  onFilterChange,
}: {
  categoryFilters: { key: string; label: string }[];
  materialFilters: { key: string; label: string }[];
  sellerFilters: { key: string; label: string }[];
  activeFilters: { category: string; material: string; seller: string };
  onFilterChange: (filterType: string, value: string) => void;
}) => (
  <div className="sticky top-4 space-y-6 bg-white rounded-lg border p-6 shadow-sm">
    <div>
      <Typography variant="h3" className="text-lg font-semibold mb-4">
        Filtres
      </Typography>
    </div>

    <div className="space-y-4">
      <div>
        <Typography variant="small" className="font-medium mb-3 text-muted-foreground">
          Catégorie
        </Typography>
        <div className="space-y-2">
          {categoryFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => onFilterChange("category", filter.key)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                activeFilters.category === filter.key
                  ? "bg-primary text-white font-medium"
                  : "hover:bg-gray-100"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t pt-4">
        <Typography variant="small" className="font-medium mb-3 text-muted-foreground">
          Matériaux
        </Typography>
        <div className="space-y-2">
          {materialFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => onFilterChange("material", filter.key)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                activeFilters.material === filter.key
                  ? "bg-primary text-white font-medium"
                  : "hover:bg-gray-100"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t pt-4">
        <Typography variant="small" className="font-medium mb-3 text-muted-foreground">
          Fournisseur
        </Typography>
        <div className="space-y-2">
          {sellerFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => onFilterChange("seller", filter.key)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                activeFilters.seller === filter.key
                  ? "bg-primary text-white font-medium"
                  : "hover:bg-gray-100"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>

    {(activeFilters.category !== 'all' || activeFilters.material !== 'all' || activeFilters.seller !== 'all') && (
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          onFilterChange('category', 'all');
          onFilterChange('material', 'all');
          onFilterChange('seller', 'all');
        }}
        className="w-full"
      >
        Réinitialiser les filtres
      </Button>
    )}
  </div>
);

const GarageGrid = ({
  garages,
  onGarageClick,
}: {
  garages: Product[];
  onGarageClick: (garage: Product) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {garages.map((garage, index) => (
      <GarageCard
        key={garage.id}
        garage={garage}
        index={index}
        onClick={() => onGarageClick(garage)}
      />
    ))}
  </div>
);

const GarageCard = ({
  garage,
  index,
  onClick,
}: {
  garage: Product;
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
          {garage.isNew && (
            <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
              Nouveau
            </span>
          )}
          {garage.isPopular && (
            <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
              Populaire
            </span>
          )}
        </div>

        <div className="relative h-64">
          <Image
            src={garage.image}
            alt={garage.name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
        </div>

        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{garage.name}</h3>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{garage.rating}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-blue-100 px-2 py-1 capitalize text-blue-800">
              {garage.material.replace('_', ' ')}
            </span>
            <span className="rounded-full bg-green-100 px-2 py-1 capitalize text-green-800">
              {garage.category.replace('PORTE_', '').replace('_', ' ')}
            </span>
          </div>

          <p className="line-clamp-2 text-sm text-muted-foreground">
            {garage.description}
          </p>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            {garage.performance && (
              <span className="flex items-center gap-1">
                <Thermometer size={12} />
                {garage.performance}
              </span>
            )}
            {garage.seller && (
              <span className="text-blue-600 font-medium">{garage.seller}</span>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="font-semibold text-primary">{garage.priceRange}</span>
            <Button size="sm" variant="outline" className="text-xs">
              Voir détails
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const GarageModal = ({
  garage,
  onClose,
}: {
  garage: Product;
  onClose: () => void;
}) => {
  const { data: session } = useSession();

  const getPerformanceIcon = (feature: string) => {
    if (feature.toLowerCase().includes('vitrage') || feature.toLowerCase().includes('isolation')) return Thermometer;
    if (feature.toLowerCase().includes('sécurisé') || feature.toLowerCase().includes('anti-effraction') || feature.toLowerCase().includes('sécurité')) return Lock;
    if (feature.toLowerCase().includes('design') || feature.toLowerCase().includes('esthétique')) return Shield;
    if (feature.toLowerCase().includes('phonique') || feature.toLowerCase().includes('acoustique')) return Volume2;
    return Shield;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-lg bg-white">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        >
          <X size={20} />
        </button>

        <div className="flex h-full max-h-[90vh] overflow-y-auto flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-full md:min-h-[500px]">
              <Image
                src={garage.image}
                alt={garage.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-full space-y-6 p-6 md:w-1/2 overflow-y-auto">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Typography variant="h2">{garage.name}</Typography>
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <Typography variant="small">{garage.rating}</Typography>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm capitalize text-blue-800">
                  {garage.material.replace('_', ' ')}
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm capitalize text-green-800">
                  {garage.category.replace('PORTE_', '').replace('_', ' ')}
                </span>
              </div>

              <Typography variant="large" className="text-primary">{garage.priceRange}</Typography>
            </div>

            <div className="grid grid-cols-1 gap-4 rounded-lg bg-gray-50 p-2">
              {garage.seller && (
                <div>
                  <Typography variant="small" className="text-muted-foreground">Fournisseur</Typography>
                  <Typography variant="small" className="font-semibold text-blue-600 mt-4">{garage.seller}</Typography>
                </div>
              )}
              {garage.performance && (
                <div>
                  <Typography variant="small" className="text-muted-foreground">Performance thermique</Typography>
                  <Typography variant="small" className="font-semibold mt-4">{garage.performance}</Typography>
                </div>
              )}
              {garage.epaisseur && (
                <div>
                  <Typography variant="small" className="text-muted-foreground">Épaisseur</Typography>
                  <Typography variant="small" className="font-semibold mt-4">{garage.epaisseur}</Typography>
                </div>
              )}
              {garage.dimensions && (
                <div>
                  <Typography variant="small" className="text-muted-foreground">Dimensions</Typography>
                  <Typography variant="small" className="font-semibold mt-4">{garage.dimensions}</Typography>
                </div>
              )}
            </div>

            <div>
              <Typography variant="h3" className="mb-2">Description</Typography>
              <Typography variant="p" className="leading-relaxed text-muted-foreground">
                {garage.description}
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-3">Caractéristiques</Typography>
              <div className="grid grid-cols-1 gap-2">
                {garage.features.map((feature, index) => {
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
                {garage.colors.map((color, index) => (
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
                  Demander un devis
                </Link>
              )}
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Ajouter au panier
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GarageSection;