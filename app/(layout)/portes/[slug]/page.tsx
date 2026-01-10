"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { Typography } from "@/components/nowts/typography";
import { Button, buttonVariants } from "@/components/ui/button";
import SimilarProductsSection from '@/features/portes/similarProductsSection';
import AvailableFormsMiniature from '@/features/portes/availableFormsMiniature';
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
  DoorClosed
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

// ✅ CORRECTION : Fonction pour convertir slug → ID base de données
const slugToPorteId = (slug: string): string => {
  return `porte-${slug}`;
};

const parseDimensions = (dimensions: string) => {
  const parts = dimensions.split(', ');
  const hauteurPart = parts.find(d => d.trim().startsWith('H:'));
  const hauteur = hauteurPart ? hauteurPart.replace('H:', '').trim() : '';
  const largeurPart = parts.find(d => d.trim().startsWith('L:'));
  const largeur = largeurPart ? largeurPart.replace('L:', '').trim() : '';
  
  return { hauteur, largeur };
};

const formatMaterial = (material: string) => {
  return material
    .replace(/_/g, ' ')
    .replace(/\baluminium\b/gi, 'ALU.')
    .trim();
};

const PorteDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [porte, setPorte] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'caracteristiques' | 'dimensions'>('description');

  const { hauteur, largeur } = porte?.dimensions ? parseDimensions(porte.dimensions) : { hauteur: '', largeur: '' };

  useEffect(() => {
    const fetchPorte = async () => {
      try {
        setLoading(true);
        
        // ✅ SOLUTION SIMPLE : Utiliser l'API existante
        console.log('🔍 Recherche de la porte avec slug:', params.slug);
        
        const response = await fetch('/api/products?type=PORTE');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        console.log('📦 Nombre de produits reçus:', data.products?.length);
        
        // ✅ Convertir le slug en ID et chercher dans les résultats
        const productId = slugToPorteId(params.slug as string);
        console.log('🔍 ID recherché:', productId);
        
        const foundPorte = data.products.find((p: Product) => p.id === productId);

        if (!foundPorte) {
          console.log('❌ Porte non trouvée. IDs disponibles:', data.products.slice(0, 5).map((p: Product) => p.id));
          setError("Porte non trouvée");
        } else {
          console.log('✅ Porte trouvée:', foundPorte.name);
          setPorte(foundPorte);
        }
      } catch (err) {
        console.error('❌ Erreur lors du chargement:', err);
        setError("Erreur lors du chargement du produit");
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      void fetchPorte();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !porte) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white">
        <Typography variant="h2" className="text-2xl text-muted-foreground">
          {error ?? "Porte non trouvée"}
        </Typography>
        <Button onClick={() => router.push('/portes')} variant="outline">
          <ArrowLeft size={16} className="mr-2" />
          Retour à la liste
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white -mt-8 lg:-mt-12 overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm py-4">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/portes" className="text-gray-600 hover:text-primary transition-colors">
              Portes
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{porte.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/portes"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Retour à la liste
        </Link>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Image */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border">
              <Image
                src={porte.image}
                alt={porte.name}
                fill
                className="object-contain p-8"
                priority
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {porte.isNew && (
                  <span className="bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-md">
                    Nouveau
                  </span>
                )}
                {porte.isPopular && (
                  <span className="bg-orange-500 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-md">
                    Populaire
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <Typography variant="h1" className="text-3xl md:text-4xl font-bold mb-3">
                {porte.name}
              </Typography>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">{porte.rating}</span>
                  <span className="text-sm text-gray-600">/5</span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-600 font-medium">{porte.seller}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium">
                  {formatMaterial(porte.material)}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium">
                  {porte.category.replace('PORTE_', '').replace('_', ' ')}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gray-50 rounded-lg p-4 border">
              <Typography variant="small" className="text-gray-600 mb-1">
                Fourchette de prix
              </Typography>
              <Typography variant="h3" className="text-2xl font-bold text-primary">
                {porte.priceRange}
              </Typography>
              <Typography variant="small" className="text-gray-500 mt-1">
                Prix indicatif, devis gratuit sur demande
              </Typography>
            </div>

            {/* Tabs */}
            <div className="border-b">
              <div className="flex gap-6">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`pb-3 text-sm font-medium transition-colors relative ${
                    activeTab === 'description'
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Description
                  {activeTab === 'description' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('caracteristiques')}
                  className={`pb-3 text-sm font-medium transition-colors relative ${
                    activeTab === 'caracteristiques'
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Caractéristiques
                  {activeTab === 'caracteristiques' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('dimensions')}
                  className={`pb-3 text-sm font-medium transition-colors relative ${
                    activeTab === 'dimensions'
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Dimensions
                  {activeTab === 'dimensions' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                  )}
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === 'description' && (
                <div className="space-y-4">
                  <Typography className="text-gray-700 leading-relaxed">
                    {porte.description}
                  </Typography>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Thermometer className="text-blue-600" size={24} />
                      <div>
                        <Typography variant="small" className="text-gray-600">
                          Performance
                        </Typography>
                        <Typography variant="small" className="font-semibold">
                          {porte.performance}
                        </Typography>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <Package className="text-purple-600" size={24} />
                      <div>
                        <Typography variant="small" className="text-gray-600">
                          Épaisseur
                        </Typography>
                        <Typography variant="small" className="font-semibold">
                          {porte.epaisseur}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'caracteristiques' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <Shield className="text-green-600 flex-shrink-0" size={20} />
                      <div>
                        <Typography variant="small" className="font-semibold mb-1">
                          Sécurité
                        </Typography>
                        <Typography variant="small" className="text-gray-600">
                          Serrure multipoints incluse
                        </Typography>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <Thermometer className="text-blue-600 flex-shrink-0" size={20} />
                      <div>
                        <Typography variant="small" className="font-semibold mb-1">
                          Isolation thermique
                        </Typography>
                        <Typography variant="small" className="text-gray-600">
                          {porte.performance}
                        </Typography>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <Volume2 className="text-orange-600 flex-shrink-0" size={20} />
                      <div>
                        <Typography variant="small" className="font-semibold mb-1">
                          Isolation phonique
                        </Typography>
                        <Typography variant="small" className="text-gray-600">
                          Optimale
                        </Typography>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <Home className="text-purple-600 flex-shrink-0" size={20} />
                      <div>
                        <Typography variant="small" className="font-semibold mb-1">
                          Fabrication
                        </Typography>
                        <Typography variant="small" className="text-gray-600">
                          Made in France
                        </Typography>
                      </div>
                    </div>
                  </div>

                  {porte.features.length > 0 && (
                    <div className="pt-4">
                      <Typography variant="p" className="font-semibold mb-3">
                        Points forts
                      </Typography>
                      <ul className="space-y-2">
                        {porte.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                            <Typography variant="small" className="text-gray-700">
                              {feature}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'dimensions' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Ruler className="text-blue-600" size={20} />
                        <Typography variant="small" className="font-semibold">
                          Dimensions standard
                        </Typography>
                      </div>
                      <Typography variant="small" className="text-gray-700">
                        {porte.dimensions}
                      </Typography>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Package className="text-purple-600" size={20} />
                        <Typography variant="small" className="font-semibold">
                          Épaisseur
                        </Typography>
                      </div>
                      <Typography variant="small" className="text-gray-700">
                        {porte.epaisseur}
                      </Typography>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <Typography variant="small" className="text-blue-900">
                      <strong>💡 Sur mesure :</strong> Toutes nos portes peuvent être fabriquées sur mesure selon vos dimensions spécifiques. Contactez-nous pour un devis personnalisé.
                    </Typography>
                  </div>
                </div>
              )}
            </div>

            {/* Colors */}
            {porte.colors.length > 0 && (
              <div className="pt-4 border-t">
                <Typography variant="p" className="font-semibold mb-3">
                  Couleurs disponibles
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {porte.colors.map((color, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-white border-2 border-gray-200 rounded-lg text-sm font-medium hover:border-primary transition-colors"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Available Forms */}
            <div className="pt-4 border-t">
              <AvailableFormsMiniature />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button className="flex-1" size="lg">
                Demander un devis gratuit
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Nous contacter
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <Shield className="mx-auto mb-2 text-green-600" size={24} />
                <Typography variant="small" className="font-medium">
                  Garantie
                </Typography>
                <Typography variant="small" className="text-gray-600 text-xs">
                  10 ans
                </Typography>
              </div>
              <div className="text-center">
                <Home className="mx-auto mb-2 text-blue-600" size={24} />
                <Typography variant="small" className="font-medium">
                  Made in
                </Typography>
                <Typography variant="small" className="text-gray-600 text-xs">
                  France
                </Typography>
              </div>
              <div className="text-center">
                <Lock className="mx-auto mb-2 text-orange-600" size={24} />
                <Typography variant="small" className="font-medium">
                  Sécurité
                </Typography>
                <Typography variant="small" className="text-gray-600 text-xs">
                  Renforcée
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="border-t mt-12">
        <SimilarProductsSection currentProduct={porte} />
      </div>
    </div>
  );
};

export default PorteDetailPage;