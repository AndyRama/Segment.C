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
      } catch (err) {
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
    if (feature.toLowerCase().includes('vitrage') || feature.toLowerCase().includes('isolation')) return Thermometer;
    if (feature.toLowerCase().includes('sécurisé') || feature.toLowerCase().includes('anti-effraction') || feature.toLowerCase().includes('sécurité')) return Lock;
    if (feature.toLowerCase().includes('design') || feature.toLowerCase().includes('esthétique')) return Shield;
    if (feature.toLowerCase().includes('phonique') || feature.toLowerCase().includes('acoustique')) return Volume2;
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
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/portes" className="hover:text-primary transition-colors">
              Portes
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{porte.name}</span>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button
          onClick={() => router.back()}
          variant="ghost"
          className="mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Retour
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="relative h-[500px] lg:h-[600px]">
              <Image
                src={porte.image}
                alt={porte.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Badges */}
            <div className="flex gap-2 mt-6">
              {porte.isNew && (
                <span className="rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white">
                  Nouveau
                </span>
              )}
              {porte.isPopular && (
                <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white">
                  Populaire
                </span>
              )}
            </div>
          </div>

          {/* Informations */}
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <Typography variant="h1" className="text-3xl lg:text-4xl">
                  {porte.name}
                </Typography>
                <div className="flex items-center gap-1 bg-yellow-50 px-3 py-2 rounded-lg">
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">{porte.rating}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm capitalize font-medium text-blue-800">
                  {porte.material.replace('_', ' ')}
                </span>
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm capitalize font-medium text-green-800">
                  {porte.category.replace('PORTE_', '').replace('_', ' ')}
                </span>
              </div>

              <Typography variant="h2" className="text-3xl text-primary font-bold">
                {porte.priceRange}
              </Typography>
            </div>

            {/* Spécifications techniques */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Typography variant="h3" className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Info size={20} />
                Spécifications techniques
              </Typography>
              <div className="grid grid-cols-2 gap-4">
                {porte.seller && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Home size={16} className="text-blue-600" />
                      <Typography variant="small" className="text-muted-foreground">
                        Fournisseur
                      </Typography>
                    </div>
                    <Typography variant="p" className="font-semibold text-blue-600">
                      {porte.seller}
                    </Typography>
                  </div>
                )}
                {porte.performance && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Thermometer size={16} className="text-orange-600" />
                      <Typography variant="small" className="text-muted-foreground">
                        Performance thermique
                      </Typography>
                    </div>
                    <Typography variant="p" className="font-semibold">
                      {porte.performance}
                    </Typography>
                  </div>
                )}
                {porte.epaisseur && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Package size={16} className="text-green-600" />
                      <Typography variant="small" className="text-muted-foreground">
                        Épaisseur
                      </Typography>
                    </div>
                    <Typography variant="p" className="font-semibold">
                      {porte.epaisseur}
                    </Typography>
                  </div>
                )}
                {porte.dimensions && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Ruler size={16} className="text-purple-600" />
                      <Typography variant="small" className="text-muted-foreground">
                        Dimensions
                      </Typography>
                    </div>
                    <Typography variant="p" className="font-semibold">
                      {porte.dimensions}
                    </Typography>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Typography variant="h3" className="text-xl font-semibold mb-4">
                Description
              </Typography>
              <Typography variant="p" className="leading-relaxed text-muted-foreground">
                {porte.description}
              </Typography>
            </div>

            {/* Caractéristiques */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Typography variant="h3" className="text-xl font-semibold mb-4">
                Caractéristiques principales
              </Typography>
              <div className="grid grid-cols-1 gap-3">
                {porte.features.map((feature, index) => {
                  const IconComponent = getPerformanceIcon(feature);
                  return (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100"
                    >
                      <IconComponent size={20} className="text-green-600 flex-shrink-0" />
                      <Typography variant="small" className="font-medium">
                        {feature}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Couleurs disponibles */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Typography variant="h3" className="text-xl font-semibold mb-4">
                Couleurs disponibles
              </Typography>
              <div className="flex flex-wrap gap-3">
                {porte.colors.map((color, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gray-100 border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col sm:flex-row gap-3">
                {session ? (
                  <Link
                    href="/account/devis"
                    className={buttonVariants({
                      size: "lg",
                      className: "flex-1 bg-primary text-white hover:bg-primary/90"
                    })}
                  >
                    Demander un devis
                  </Link>
                ) : (
                  <Link
                    href="/auth/signin?callbackUrl=%2Faccount%2Fdevis"
                    className={buttonVariants({
                      size: "lg",
                      className: "flex-1 bg-primary text-white hover:bg-primary/90"
                    })}
                  >
                    Demander un devis
                  </Link>
                )}
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                >
                  Ajouter au panier
                </Button>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-start gap-3">
                  <Shield size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <Typography variant="small" className="font-semibold text-blue-900 mb-1">
                      Garantie et service
                    </Typography>
                    <Typography variant="small" className="text-blue-700">
                      Fabrication française sur mesure • Installation professionnelle • Garantie fabricant
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section informations supplémentaires */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Home size={32} className="text-blue-600" />
            </div>
            <Typography variant="h3" className="text-lg font-semibold mb-2">
              Made in France
            </Typography>
            <Typography variant="small" className="text-muted-foreground">
              Produits fabriqués en France avec des matériaux de qualité
            </Typography>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Ruler size={32} className="text-green-600" />
            </div>
            <Typography variant="h3" className="text-lg font-semibold mb-2">
              Sur mesure
            </Typography>
            <Typography variant="small" className="text-muted-foreground">
              Dimensions personnalisées selon vos besoins spécifiques
            </Typography>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Lock size={32} className="text-orange-600" />
            </div>
            <Typography variant="h3" className="text-lg font-semibold mb-2">
              Sécurité renforcée
            </Typography>
            <Typography variant="small" className="text-muted-foreground">
              Protection optimale avec serrures multipoints certifiées
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorteDetailPage;