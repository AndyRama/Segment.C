"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { Typography } from "@/components/nowts/typography";
import { Button, buttonVariants } from "@/components/ui/button";
import SimilarProductSection from "@/features/porte-garage/similar-product-section";
import  AvailableFormsMiniature from "@/features/porte-garage/available-forms-miniature";

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
  CheckCircle2,
  Droplets,
  Wind,
  Zap,
  Settings
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

const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '-');
};

const GarageDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [garage, setGarage] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'caracteristiques' | 'dimensions'>('description');

  useEffect(() => {
    const fetchGarage = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products?type=PORTE&category=PORTE_GARAGE');
        if (!response.ok) throw new Error('Failed to fetch products');
        
        const data = await response.json();
        const foundGarage = data.products.find((p: Product) => 
          createSlug(p.name) === params.slug
        );
        
        if (!foundGarage) {
          setError("Porte de garage non trouvée");
        } else {
          setGarage(foundGarage);
        }
      } catch {
        setError("Erreur lors du chargement du produit");
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      void fetchGarage();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !garage) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white">
        <Typography variant="h2" className="text-2xl text-muted-foreground">
          {error ?? "Porte de garage non trouvée"}
        </Typography>
        <Button onClick={() => router.push('/garage')} variant="outline">
          <ArrowLeft size={16} className="mr-2" />
          Retour à la liste
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white -mt-8 lg:-mt-12">
      {/* Breadcrumb */}
      <div className="border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/garage" className="text-gray-600 hover:text-primary transition-colors">
              Portes de garage
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{garage.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4">
        <Button
          onClick={() => router.back()}
          variant="ghost"
          className="mb-1 mt-1 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={18} className="mr-2" />
          Retour
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Colonne gauche - Image */}
          <div className="space-y-6">
            <div className="relative bg-gray-50 rounded-sm overflow-hidden border">
              <div className="relative h-[500px] lg:h-[650px]">
                <Image
                  src={garage.image}
                  alt={garage.name}
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
              
              {/* Badges overlay */}
              {((garage.isNew ?? false) || (garage.isPopular ?? false)) && (
                <div className="absolute top-4 left-4 flex flex-row gap-2">
                  {garage.isNew && (
                    <span className="bg-green-600 rounded-md text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                      Nouveau
                    </span>
                  )}
                  {garage.isPopular && (
                    <span className="bg-orange-600 rounded-md text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                      Populaire
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Tags matériau et catégorie */}
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 text-sm font-medium border">
                <Package size={16} />
                {garage.material.replace('_', ' ')}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 text-sm font-medium border">
                <Settings size={16} />
                Porte de garage
              </span>
            </div>
          </div>

          {/* Colonne droite - Informations */}
          <div className="space-y-8">
            {/* En-tête */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Typography variant="h1" className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {garage.name}
                </Typography>
                {garage.rating && (
                  <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 border border-amber-200">
                    <Star size={16} className="fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold text-amber-700">{garage.rating}</span>
                  </div>
                )}
              </div>
              
              {garage.seller && (
                <p className="text-sm text-gray-600">
                  Fabriqué par <span className="font-semibold text-primary">{garage.seller}</span>
                </p>
              )}
            </div>

            {/* Prix */}
            <div className="py-4 border-y">
              <Typography variant="h2" className="text-2xl lg:text-3xl font-bold text-primary">
                {garage.priceRange}
              </Typography>
              <p className="text-sm text-gray-600 mt-1">Prix indicatif TTC</p>
            </div>

            {/* Onglets */}
            <div>
              <div className="flex border-b mb-6">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === 'description'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('caracteristiques')}
                  className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === 'caracteristiques'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Caractéristiques
                </button>
                <button
                  onClick={() => setActiveTab('dimensions')}
                  className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === 'dimensions'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Dimensions
                </button>
              </div>

              {/* Contenu des onglets */}
              <div className="space-y-6">
                {activeTab === 'description' && (
                  <div className="prose prose-sm max-w-none">
                    <p className="text-gray-700 leading-relaxed">{garage.description}</p>
                  </div>
                )}

                {activeTab === 'caracteristiques' && (
                  <div className="space-y-4">
                    {/* Caractéristiques principales */}
                    <div className="grid grid-cols-2 gap-3">
                      {garage.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 border">
                          <CheckCircle2 size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-900">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Performances techniques */}
                    <div className="mt-6 pt-6 border-t">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Performances techniques</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {garage.performance && (
                          <div className="p-4 bg-orange-50 border border-orange-200">
                            <div className="flex items-center gap-2 mb-2">
                              <Thermometer size={18} className="text-orange-600" />
                              <span className="text-xs font-semibold text-orange-900 uppercase tracking-wide">
                                Thermique
                              </span>
                            </div>
                            <p className="text-sm font-bold text-orange-900">{garage.performance}</p>
                          </div>
                        )}
                        
                        <div className="p-4 bg-blue-50 border border-blue-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Droplets size={18} className="text-blue-600" />
                            <span className="text-xs font-semibold text-blue-900 uppercase tracking-wide">
                              Étanchéité
                            </span>
                          </div>
                          <p className="text-sm font-bold text-blue-900">Classe 4</p>
                        </div>

                        <div className="p-4 bg-purple-50 border border-purple-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Volume2 size={18} className="text-purple-600" />
                            <span className="text-xs font-semibold text-purple-900 uppercase tracking-wide">
                              Acoustique
                            </span>
                          </div>
                          <p className="text-sm font-bold text-purple-900">25dB</p>
                        </div>

                        <div className="p-4 bg-green-50 border border-green-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Wind size={18} className="text-green-600" />
                            <span className="text-xs font-semibold text-green-900 uppercase tracking-wide">
                              Résistance
                            </span>
                          </div>
                          <p className="text-sm font-bold text-green-900">Classe 3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'dimensions' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {garage.dimensions && (
                        <div className="p-4 bg-gray-50 border">
                          <div className="flex items-center gap-2 mb-2">
                            <Ruler size={18} className="text-gray-700" />
                            <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                              Dimensions
                            </span>
                          </div>
                          <p className="text-sm font-bold text-gray-900">{garage.dimensions}</p>
                        </div>
                      )}
                      
                      {garage.epaisseur && (
                        <div className="p-4 bg-gray-50 border">
                          <div className="flex items-center gap-2 mb-2">
                            <Package size={18} className="text-gray-700" />
                            <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                              Épaisseur
                            </span>
                          </div>
                          <p className="text-sm font-bold text-gray-900">{garage.epaisseur}</p>
                        </div>
                      )}
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 mt-4">
                      <p className="text-sm text-blue-900">
                        <strong>Sur mesure :</strong> Dimensions personnalisables selon vos besoins spécifiques.
                        Contactez-nous pour plus d'informations sur les dimensions standards et sur-mesure.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Couleurs disponibles */}
            {garage.colors.length > 0 && (
              <div className="pt-6 border-t">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                  Couleurs disponibles
                </h3>
                <div className="flex flex-wrap gap-2">
                  {garage.colors.map((color, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-white border border-gray-300 text-sm text-gray-900 hover:border-gray-900 transition-colors cursor-pointer"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-6 border-t space-y-3">
              {session ? (
                <Link
                  href="/account/devis"
                  className={buttonVariants({
                    size: "lg",
                    className: "w-full bg-primary hover:bg-primary/90 text-white font-semibold text-base"
                  })}
                >
                  Demander un devis gratuit
                </Link>
              ) : (
                <Link
                  href="/auth/signin?callbackUrl=%2Faccount%2Fdevis"
                  className={buttonVariants({
                    size: "lg",
                    className: "w-full bg-primary hover:bg-primary/90 text-white font-semibold text-base"
                  })}
                >
                  Demander un devis gratuit
                </Link>
              )}
              
              <Button
                variant="outline"
                size="lg"
                className="w-full border-2 font-semibold text-base"
              >
                Ajouter au panier
              </Button>

              <div className="flex items-start gap-3 p-4 bg-gray-50 border mt-4">
                <Shield size={20} className="text-gray-700 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700">
                  <p className="font-semibold mb-1">Garantie fabricant incluse</p>
                  <p className="text-xs">Fabrication française • Installation professionnelle • Motorisation disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Types de portes de garage */}
      <AvailableFormsMiniature />

      {/* Section avantages */}
      <div className="bg-gray-50 border-y mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-md w-16 h-16 bg-white border mb-4">
                <Home size={28} className="text-primary" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Made in France</h3>
              <p className="text-sm text-gray-600">
                Fabrication française avec des matériaux de première qualité
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-md w-16 h-16 bg-white border mb-4">
                <Zap size={28} className="text-primary" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Motorisation</h3>
              <p className="text-sm text-gray-600">
                Options de motorisation pour un confort optimal
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-md w-16 h-16 bg-white border mb-4">
                <Lock size={28} className="text-primary" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Sécurité maximale</h3>
              <p className="text-sm text-gray-600">
                Systèmes de sécurité anti-effraction et détection d'obstacles
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Produits similaires */}
      <SimilarProductSection currentProduct={garage} />
    </div>
  );
};

export default GarageDetailPage;