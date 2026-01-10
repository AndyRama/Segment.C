"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { Typography } from "@/components/nowts/typography";
import { Button } from "@/components/ui/button";
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

// ✅ Fonction pour convertir slug → ID base de données
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
        
        // ✅ CORRECTION: Récupérer toutes les portes avec limite augmentée
        const response = await fetch('/api/products?type=PORTE&limit=200');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        
        // ✅ Filtrer pour ne garder QUE les portes
        const ALLOWED_CATEGORIES = ["PORTE", "PORTE_ENTRER", "PORTE_VITRAGE"];
        const portesOnly = data.products.filter((p: Product) => 
          ALLOWED_CATEGORIES.includes(p.category)
        );
        
        // ✅ Convertir le slug en ID et chercher dans les résultats
        const productId = slugToPorteId(params.slug as string);
        const foundPorte = portesOnly.find((p: Product) => p.id === productId);

        if (!foundPorte) {
          setError("Porte non trouvée");
        } else {
          setPorte(foundPorte);
        }
      } catch (err) {
        console.error('Error fetching product:', err);
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
          {/* Back Button */}
            <Link
              href="/portes"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Retour
            </Link>
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
        {/* <Link
          href="/portes"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Retour
        </Link> */}

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

            {/* Material & Type Badges */}
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2 px-3 py-2 bg-white border rounded-lg">
                <Package size={18} />
                <span className="font-medium uppercase">{formatMaterial(porte.material)}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white border rounded-lg">
                <Home size={18} />
                <span className="font-medium uppercase">
                  {porte.category.replace('PORTE_', '').replace('_', ' ')}
                </span>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-white border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <Shield size={18} className="text-primary" />
                <Typography variant="small" className="font-semibold">
                  Garantie fabricant incluse
                </Typography>
              </div>
              <Typography variant="small" className="text-gray-600">
                Fabrication française • Installation professionnelle • SAV réactif
              </Typography>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <Typography variant="h1" className="text-3xl md:text-4xl font-bold mb-3">
                {porte.name}
                <div className="flex items-center gap-1.5 mb-4">
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">{porte.rating}</span>
                </div>
              </Typography>
              

              <Typography variant="small" className="text-gray-600 uppercase tracking-wide mb-2">
                Fournisseur
              </Typography>
              <Typography variant="p" className="text-lg font-semibold text-primary">
                {porte.seller}
              </Typography>
            </div>

            {/* Tabs */}
            <div className="border-b">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`pb-3 text-sm font-medium transition-colors relative ${
                    activeTab === 'description'
                      ? 'text-gray-900'
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
                      ? 'text-gray-900'
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
                      ? 'text-gray-900'
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
            <div className="min-h-[50px]">
              {activeTab === 'description' && (
                <div className="space-y-4">
                  <Typography className="text-gray-700 leading-relaxed">
                    {porte.description}
                  </Typography>
                </div>
              )}

              {activeTab === 'caracteristiques' && (
                <div className="space-y-6">
                  {/* Features List */}
                  {porte.features.length > 0 && (
                    <div>
                      <ul className="space-y-3">
                        {porte.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                            <Typography variant="small" className="text-gray-700">
                              {feature}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technical Performance */}
                  <div>
                    <Typography variant="p" className="font-semibold mb-4">
                      Performances techniques
                    </Typography>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                        <div className="flex items-center gap-2 mb-1">
                          <Thermometer className="text-orange-600" size={18} />
                          <Typography variant="small" className="font-semibold uppercase text-xs text-orange-900">
                            Thermique
                          </Typography>
                        </div>
                        <Typography variant="p" className="font-bold text-orange-900">
                          {porte.performance}
                        </Typography>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-1">
                          <Package className="text-green-600" size={18} />
                          <Typography variant="small" className="font-semibold uppercase text-xs text-green-900">
                            Étanchéité
                          </Typography>
                        </div>
                        <Typography variant="p" className="font-bold text-green-900">
                          A*3 E*3B
                        </Typography>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <div className="flex items-center gap-2 mb-1">
                          <Volume2 className="text-purple-600" size={18} />
                          <Typography variant="small" className="font-semibold uppercase text-xs text-purple-900">
                            Acoustique
                          </Typography>
                        </div>
                        <Typography variant="p" className="font-bold text-purple-900">
                          29dB
                        </Typography>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-1">
                          <Shield className="text-blue-600" size={18} />
                          <Typography variant="small" className="font-semibold uppercase text-xs text-blue-900">
                            Résistance
                          </Typography>
                        </div>
                        <Typography variant="p" className="font-bold text-blue-900">
                          V*C3
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'dimensions' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Ruler className="mx-auto mb-2 text-gray-600" size={24} />
                      <Typography variant="small" className="font-semibold mb-1 uppercase text-xs text-gray-600">
                        Hauteur
                      </Typography>
                      <Typography variant="p" className="font-bold">
                        {hauteur || '2000-2250mm'}
                      </Typography>
                    </div>

                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Ruler className="mx-auto mb-2 text-gray-600" size={24} />
                      <Typography variant="small" className="font-semibold mb-1 uppercase text-xs text-gray-600">
                        Largeur
                      </Typography>
                      <Typography variant="p" className="font-bold">
                        {largeur || '800-1000mm'}
                      </Typography>
                    </div>

                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Package className="mx-auto mb-2 text-gray-600" size={24} />
                      <Typography variant="small" className="font-semibold mb-1 uppercase text-xs text-gray-600">
                        Épaisseur
                      </Typography>
                      <Typography variant="p" className="font-bold">
                        {porte.epaisseur}
                      </Typography>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <Typography variant="small" className="text-blue-900">
                      <strong>💡 Sur mesure :</strong> Dimensions personnalisables selon vos besoins spécifiques. Contactez-nous pour plus d'informations.
                    </Typography>
                  </div>
                </div>
              )}
            </div>

            {/* Colors */}
            {porte.colors.length > 0 && (
              <div className="pt-4 border-t">
                <Typography variant="p" className="font-semibold mb-3 uppercase text-sm">
                  Couleurs disponibles
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {porte.colors.map((color, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-white border-2 border-gray-200 rounded-lg text-sm hover:border-primary transition-colors"
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
            <div className="flex gap-3 pt-4">
              <Button className="w-full" size="lg">
                Demander un devis gratuit
              </Button>
    
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t">
          <div className="text-center">
            <Home className="mx-auto mb-3 text-primary" size={32} />
            <Typography variant="p" className="font-semibold mb-2">
              Made in France
            </Typography>
            <Typography variant="small" className="text-gray-600">
              Fabrication française avec des matériaux de première qualité
            </Typography>
          </div>
          <div className="text-center">
            <Ruler className="mx-auto mb-3 text-primary" size={32} />
            <Typography variant="p" className="font-semibold mb-2">
              Sur mesure
            </Typography>
            <Typography variant="small" className="text-gray-600">
              Dimensions personnalisables adaptées à votre projet
            </Typography>
          </div>
          <div className="text-center">
            <Lock className="mx-auto mb-3 text-primary" size={32} />
            <Typography variant="p" className="font-semibold mb-2">
              Sécurité maximale
            </Typography>
            <Typography variant="small" className="text-gray-600">
              Serrures multipoints et protection anti-effraction
            </Typography>
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