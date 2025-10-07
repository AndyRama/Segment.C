"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { Button } from "@/components/ui/button";
import { X, Star, Shield, Home, Thermometer, Sun, Eye, Filter } from "lucide-react";

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
  vitrage: string;
  performance: string;
  priceRange: string;
  rating: number;
  seller?: string;
  isPopular?: boolean;
  isNew?: boolean;
}

type FenetreSectionProps = {
  className?: string;
}

// Constantes en dehors du composant
const ALLOWED_CATEGORIES = ["FENETRE", "BAIE_VITREE"];
const LIMIT = 40;

// Fonction simple pour créer un slug : minuscules + tirets entre les mots
const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '-');
};

const FenetreSection = ({ className }: FenetreSectionProps) => {
  const router = useRouter();
  const [fenetres, setFenetres] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filters, setFilters] = useState({
    material: "all",
    seller: "all",
    openingType: "all",
    category: "all",
  });

  useEffect(() => {
    const fetchFenetres = async () => {
      setLoading(true);
      try {
        const offset = (currentPage - 1) * LIMIT;
        const params = new URLSearchParams({
          limit: LIMIT.toString(),
          offset: offset.toString(),
          type: 'FENETRE',
          ...(filters.category !== 'all' && { category: filters.category }),
          ...(filters.material !== 'all' && { material: filters.material }),
          ...(filters.openingType !== 'all' && { openingType: filters.openingType }),
          ...(filters.seller !== 'all' && { seller: filters.seller }),
        });

        const response = await fetch(`/api/products?${params}`);
        if (!response.ok) throw new Error('Failed to fetch fenetres');
        
        const data = await response.json();
        
        const filteredProducts = data.products.filter((product: Product) => 
          ALLOWED_CATEGORIES.includes(product.category)
        );
        
        setFenetres(filteredProducts);
        setTotal(data.total);
        
        // Scroll to top when page changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (_error) {
        // Error handled silently
      } finally {
        setLoading(false);
      }
    };

    void fetchFenetres();
  }, [filters, currentPage]);

  const totalPages = Math.ceil(total / LIMIT);

  const categoryFilters = [
    { key: "all", label: "Toutes catégories" },
    { key: "FENETRE", label: "Fenêtre" },
    { key: "BAIE_VITREE", label: "Baie vitrée" },
  ];

  const materialFilters = [
    { key: "all", label: "Tous matériaux" },
    { key: "ALUMINIUM", label: "Aluminium" },
    { key: "PVC", label: "PVC" },
    { key: "BOIS", label: "Bois" },
    { key: "BOIS_ALUMINIUM", label: "Bois-Aluminium" },
    { key: "MIXTE", label: "Mixte" },
  ];
  
  const openingTypeFilters = [
    { key: "all", label: "Tous types d'ouverture" },
    { key: "BATTANT", label: "Battant" },
    { key: "COULISSANTE", label: "Coulissante" },
    { key: "OSCILLO_BATTANT", label: "Oscillo-battant" },
    { key: "PLIANTE", label: "Pliante" },
    { key: "FIXE", label: "Fixe" },
    { key: "PIVOTANTE", label: "Pivotante" },
    { key: "PROJECTION", label: "Projection" },
    { key: "COULISSANTE_GALANDAGE", label: "Coulissante à galandage" },
  ];

  const sellerFilters = [
    { key: "all", label: "Tous fournisseurs" },
    { key: "SYBAIE", label: "Sy Baie" },
    { key: "C2R", label: "C2R" },
    { key: "SWAO", label: "SWAO" },
    { key: "PROFERM", label: "Proferm" },
  ];

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleFenetreClick = (fenetre: Product) => {
    const slug = createSlug(fenetre.name);
    router.push(`/fenetres/${slug}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-20", className)}>
      <FenetreHeader />

      <div className="flex gap-8 mt-8">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <FenetresFiltersSidebar
            categoryFilters={categoryFilters}
            materialFilters={materialFilters}
            sellerFilters={sellerFilters}
            openingTypeFilters={openingTypeFilters}
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

          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <>
              <FenetresGrid
                fenetres={fenetres}
                onFenetreClick={handleFenetreClick}
              />

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}

              <div className="mt-8 text-center">
                <Typography variant="small" className="text-muted-foreground">
                  Page {currentPage} sur {totalPages} • {total} modèles disponibles
                </Typography>
              </div>
            </>
          )}
        </div>
      </div>

      <MobileFiltersModal
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        categoryFilters={categoryFilters}
        materialFilters={materialFilters}
        sellerFilters={sellerFilters}
        openingTypeFilters={openingTypeFilters}
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
  openingTypeFilters,
  activeFilters,
  onFilterChange,
}: {
  isOpen: boolean;
  onClose: () => void;
  categoryFilters: { key: string; label: string }[];
  materialFilters: { key: string; label: string }[];
  sellerFilters: { key: string; label: string }[];
  openingTypeFilters: { key: string; label: string }[];
  activeFilters: { category: string; material: string; seller: string; openingType: string };
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
              Type d'ouverture
            </Typography>
            <div className="space-y-2">
              {openingTypeFilters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => onFilterChange("openingType", filter.key)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-sm transition-colors",
                    activeFilters.openingType === filter.key
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

          {(activeFilters.category !== 'all' || activeFilters.material !== 'all' || activeFilters.seller !== 'all' || activeFilters.openingType !== 'all') && (
            <Button
              variant="outline"
              onClick={() => {
                onFilterChange('category', 'all');
                onFilterChange('material', 'all');
                onFilterChange('seller', 'all');
                onFilterChange('openingType', 'all');
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

const FenetreHeader = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-0 md:mb-20">
    <div className="space-y-6">
      <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
        Notre sélection de fenêtres
      </Typography>
      <Typography variant="large" className="mx-auto max-w-3xl text-muted-foreground">
        Découvrez notre gamme complète de fenêtres, baies vitrées et vérandas haute performance.
        Fabriquées en France, sur mesure, en aluminium, PVC, bois et mixte.
        Isolation thermique et acoustique optimale pour tous vos projets de rénovation ou construction.
      </Typography>
      <div className="flex justify-start items-center gap-4 mt-6">
        <div className="flex items-center gap-2">
          <Home size={20} className="text-blue-600" />
          <Typography variant="small" className="font-medium">Made in France</Typography>
        </div>
        <div className="flex items-center gap-2">
          <Thermometer size={20} className="text-green-600" />
          <Typography variant="small" className="font-medium">Haute isolation</Typography>
        </div>
        <div className="flex items-center gap-2">
          <Sun size={20} className="text-orange-600" />
          <Typography variant="small" className="font-medium">Double/Triple vitrage</Typography>
        </div>
      </div>
    </div>
    <div className="relative">
      <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/fenetre2.jpg"
          alt="Fenêtre moderne avec vue sur extérieur"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  </div>
);

const FenetresFiltersSidebar = ({
  categoryFilters,
  materialFilters,
  sellerFilters,
  openingTypeFilters,
  activeFilters,
  onFilterChange,
}: {
  categoryFilters: { key: string; label: string }[];
  materialFilters: { key: string; label: string }[];
  sellerFilters: { key: string; label: string }[];
  openingTypeFilters: { key: string; label: string }[];
  activeFilters: { category: string; material: string; seller: string; openingType: string };
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
          Type d'ouverture
        </Typography>
        <div className="space-y-2">
          {openingTypeFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => onFilterChange("openingType", filter.key)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                activeFilters.openingType === filter.key
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

    {(activeFilters.category !== 'all' || activeFilters.material !== 'all' || activeFilters.seller !== 'all' || activeFilters.openingType !== 'all') && (
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          onFilterChange('category', 'all');
          onFilterChange('material', 'all');
          onFilterChange('openingType', 'all');
          onFilterChange('seller', 'all');
        }}
        className="w-full"
      >
        Réinitialiser les filtres
      </Button>
    )}
  </div>
);

const FenetresGrid = ({
  fenetres,
  onFenetreClick,
}: {
  fenetres: Product[];
  onFenetreClick: (fenetre: Product) => void;
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

// Composant Pagination
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 7;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-colors",
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-100"
        )}
      >
        Précédent
      </button>

      {getPageNumbers().map((page, index) => {
        if (page === '...') {
          return (
            <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400">
              ...
            </span>
          );
        }

        return (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors",
              currentPage === page
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-colors",
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-100"
        )}
      >
        Suivant
      </button>
    </div>
  );
};

const FenetreCard = ({
  fenetre,
  index,
  onClick,
}: {
  fenetre: Product;
  index: number;
  onClick: () => void;
}) => {
  const delay = index * 0.1;

  const getCategoryLabel = (category: string) => {
    if (category === 'FENETRE') return 'Fenêtre';
    if (category === 'BAIE_VITREE') return 'Baie vitrée';
    return category;
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
        <div className="absolute left-3 top-3 z-10 flex flex-row gap-1">
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
            className="object-contain transition-transform duration-300 group-hover:scale-105"
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
              {fenetre.material.replace('_', ' ')}
            </span>
            <span className="rounded-full bg-green-100 px-2 py-1 text-green-800">
              {getCategoryLabel(fenetre.category)}
            </span>
          </div>

          <p className="line-clamp-2 text-sm text-muted-foreground">
            {fenetre.description}
          </p>

          {fenetre.vitrage && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Eye size={12} />
              <span>{fenetre.vitrage}</span>
            </div>
          )}

          <span className="font-semibold text-primary">{fenetre.priceRange}</span>
          <div className="flex items-right justify-end pt-2">
            <Link href={`/fenetres/${createSlug(fenetre.name)}`} onClick={(e) => { e.stopPropagation(); }}>
              <Button size="sm" variant="outline" className="text-xs">
                Voir détails
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FenetreSection;