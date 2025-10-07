"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { Typography } from "@/components/nowts/typography";
import { Button, buttonVariants } from "@/components/ui/button";
import { 
  Star, 
  Shield, 
  Home, 
  Thermometer, 
  Volume2, 
  Lock, 
  ArrowLeft,
  Package,
  Ruler,
  Info
} from "lucide-react";

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
};

// Fonction simple pour créer un slug : minuscules + tirets entre les mots
const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '-');
};

const PorteDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [porte, setPorte] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPorte = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products?type=PORTE');
        if (!response.ok) throw new Error('Failed to fetch products');
        
        const data = await response.json();
        
        // Trouver le produit correspondant au slug
        const foundPorte = data.products.find((p: Product) => 
          createSlug(p.name) === params.slug
        );
        
        if (!foundPorte) {
          setError("Porte non trouvée");
        } else {
          setPorte(foundPorte);
        }
      } catch {
        setError("Erreur lors du chargement du produit");
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      void fetchPorte();
    }
  }, [params.slug]);

  const getPerformanceIcon = (feature: string) => {
    const lowerFeature = feature.toLowerCase();
    if (lowerFeature.includes('vitrage') || lowerFeature.includes('isolation')) return Thermometer;
    if (lowerFeature.includes('sécurisé') || lowerFeature.includes('anti-effraction') || lowerFeature.includes('sécurité')) return Lock;
    if (lowerFeature.includes('design') || lowerFeature.includes('esthétique')) return Shield;
    if (lowerFeature.includes('phonique') || lowerFeature.includes('acoustique')) return Volume2;
    return Shield;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !porte) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <Typography variant="h2" className="text-2xl text-muted-foreground">
          {error || "Porte non trouvée"}
        </Typography>
        <Button onClick={() => router.push('/portes')} variant="outline">
          <ArrowLeft size={16} className="mr-2" />
          Retour à la liste
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Breadcrumb */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Accueil
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/portes" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Portes
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-semibold">{porte.name}</span>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        <Button
          onClick={() => router.back()}
          variant="ghost"
          className="mb-6 hover:bg-white/80"
        >
          <ArrowLeft size={18} className="mr-2" />
          Retour
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Image */}
          <div className="bg-white rounded-md shadow-sm border p-6 sticky top-24 h-fit">
            <div className="relative h-[450px] lg:h-[550px] bg-gray-50 rounded-md overflow-hidden">
              <Image
                src={porte.image}
                alt={porte.name}
                fill
                className="object-contain p-4"
                priority
              />
            </div>
            
            {/* Badges */}
            {(porte.isNew || porte.isPopular) && (
              <div className="flex gap-2 mt-4">
                {porte.isNew && (
                  <span className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                    ✨ Nouveau
                  </span>
                )}
                {porte.isPopular && (
                  <span className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                    🔥 Populaire
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Informations */}
          <div className="space-y-4">
            {/* Header */}
            <div className="bg-white rounded-md shadow-sm border p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <Typography variant="h1" className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  {porte.name}
                </Typography>
                <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-2 rounded-md border border-amber-200 shrink-0">
                  <Star size={18} className="fill-amber-400 text-amber-400" />
                  <span className="text-base font-bold text-amber-700">{porte.rating}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1.5 text-xs capitalize font-semibold text-blue-700">
                  {porte.material.replace('_', ' ')}
                </span>
                <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-xs capitalize font-semibold text-emerald-700">
                  {porte.category.replace('PORTE_', '').replace('_', ' ')}
                </span>
              </div>

              <Typography variant="h2" className="text-2xl md:text-3xl text-primary font-bold">
                {porte.priceRange}
              </Typography>
            </div>

            {/* Spécifications techniques */}
            <div className="bg-white rounded-md shadow-sm border p-6">
              <Typography variant="h3" className="text-lg font-bold mb-4 flex items-center gap-2">
                <Info size={20} className="text-primary" />
                Spécifications techniques
              </Typography>
              <div className="grid grid-cols-2 gap-3">
                {porte.seller && (
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-md border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Home size={16} className="text-blue-600" />
                      <Typography variant="small" className="text-xs font-medium text-blue-900/70">
                        Fournisseur
                      </Typography>
                    </div>
                    <Typography variant="p" className="font-bold text-blue-700 text-sm">
                      {porte.seller}
                    </Typography>
                  </div>
                )}
                {porte.performance && (
                  <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-md border border-orange-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Thermometer size={16} className="text-orange-600" />
                      <Typography variant="small" className="text-xs font-medium text-orange-900/70">
                        Performance
                      </Typography>
                    </div>
                    <Typography variant="p" className="font-bold text-orange-700 text-sm">
                      {porte.performance}
                    </Typography>
                  </div>
                )}
                {porte.epaisseur && (
                  <div className="p-4 bg-gradient-to-br from-green-50 to-green-100/50 rounded-md border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Package size={16} className="text-green-600" />
                      <Typography variant="small" className="text-xs font-medium text-green-900/70">
                        Épaisseur
                      </Typography>
                    </div>
                    <Typography variant="p" className="font-bold text-green-700 text-sm">
                      {porte.epaisseur}
                    </Typography>
                  </div>
                )}
                {porte.dimensions && (
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-md border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Ruler size={16} className="text-purple-600" />
                      <Typography variant="small" className="text-xs font-medium text-purple-900/70">
                        Dimensions
                      </Typography>
                    </div>
                    <Typography variant="p" className="font-bold text-purple-700 text-sm">
                      {porte.dimensions}
                    </Typography>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-md shadow-sm border p-6">
              <Typography variant="h3" className="text-lg font-bold mb-3">
                Description
              </Typography>
              <Typography variant="p" className="leading-relaxed text-muted-foreground text-sm">
                {porte.description}
              </Typography>
            </div>

            {/* Caractéristiques */}
            <div className="bg-white rounded-md shadow-sm border p-6">
              <Typography variant="h3" className="text-lg font-bold mb-4">
                Caractéristiques principales
              </Typography>
              <div className="grid grid-cols-1 gap-2">
                {porte.features.map((feature, index) => {
                  const IconComponent = getPerformanceIcon(feature);
                  return (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-md border border-green-200 hover:border-green-300 transition-colors"
                    >
                      <div className="bg-white p-2 rounded-md border border-green-200">
                        <IconComponent size={18} className="text-green-600" />
                      </div>
                      <Typography variant="small" className="font-medium text-sm">
                        {feature}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Couleurs disponibles */}
            <div className="bg-white rounded-md shadow-sm border p-6">
              <Typography variant="h3" className="text-lg font-bold mb-4">
                Couleurs disponibles
              </Typography>
              <div className="flex flex-wrap gap-2">
                {porte.colors.map((color, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gray-50 border-2 border-gray-200 px-4 py-2 text-xs font-semibold hover:bg-gray-100 hover:border-gray-300 transition-all cursor-pointer"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-md shadow-sm border-2 border-primary/20 p-6">
              <div className="flex flex-col sm:flex-row gap-3">
                {session ? (
                  <Link
                    href="/account/devis"
                    className={buttonVariants({
                      size: "lg",
                      className: "flex-1 bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all font-semibold"
                    })}
                  >
                    Demander un devis
                  </Link>
                ) : (
                  <Link
                    href="/auth/signin?callbackUrl=%2Faccount%2Fdevis"
                    className={buttonVariants({
                      size: "lg",
                      className: "flex-1 bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all font-semibold"
                    })}
                  >
                    Demander un devis
                  </Link>
                )}
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-2 hover:bg-gray-50 font-semibold"
                >
                  Ajouter au panier
                </Button>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-200">
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-md border border-blue-200">
                    <Shield size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <Typography variant="small" className="font-bold text-blue-900 mb-1 text-sm">
                      Garantie et service
                    </Typography>
                    <Typography variant="small" className="text-blue-700 text-xs">
                      Fabrication française sur mesure • Installation professionnelle • Garantie fabricant
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section informations supplémentaires */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-md shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-md mb-4">
              <Home size={28} className="text-blue-600" />
            </div>
            <Typography variant="h3" className="text-base font-bold mb-2">
              Made in France
            </Typography>
            <Typography variant="small" className="text-muted-foreground text-xs">
              Produits fabriqués en France avec des matériaux de qualité
            </Typography>
          </div>

          <div className="bg-white rounded-md shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-md mb-4">
              <Ruler size={28} className="text-green-600" />
            </div>
            <Typography variant="h3" className="text-base font-bold mb-2">
              Sur mesure
            </Typography>
            <Typography variant="small" className="text-muted-foreground text-xs">
              Dimensions personnalisées selon vos besoins spécifiques
            </Typography>
          </div>

          <div className="bg-white rounded-md shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-md mb-4">
              <Lock size={28} className="text-orange-600" />
            </div>
            <Typography variant="h3" className="text-base font-bold mb-2">
              Sécurité renforcée
            </Typography>
            <Typography variant="small" className="text-muted-foreground text-xs">
              Protection optimale avec serrures multipoints certifiées
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorteDetailPage;