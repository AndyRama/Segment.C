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

const getCategoryLabel = (category: string) => {
  if (category === 'PORTE') return 'Porte';
  if (category === 'PORTE_ENTRER') return "Porte d'entrée";
  if (category === 'PORTE_VITRAGE') return 'Porte vitrée';
  return category.replace('PORTE_', '').replace('_', ' ');
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
        const response = await fetch('/api/products?type=PORTE&limit=400');
        
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
    <div className="min-h-screen bg-white -mt-8 lg:-mt-12">
      {/* Breadcrumb */}
      <div className="border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-3 mt-16">
          <div className="flex items-center gap-2 text-sm">
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
                  src={porte.image}
                  alt={porte.name}
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
              
              {/* Badges overlay */}
              {((porte.isNew ?? false) || (porte.isPopular ?? false)) && (
                <div className="absolute top-4 left-4 flex flex-row gap-2">
                  {porte.isNew && (
                    <span className="bg-green-600 rounded-md text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                      Nouveau
                    </span>
                  )}
                  {porte.isPopular && (
                    <span className="bg-orange-600 rounded-md text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                      Populaire
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Material & Type Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 text-sm font-medium border rounded-md">
                <Package size={16} />
                {formatMaterial(porte.material)}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 text-sm font-medium border rounded-md">
                <Home size={16} />
                {getCategoryLabel(porte.category)}
              </span>
            </div>

            {/* Trust Badge */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 border rounded-md">
              <Shield size={20} className="text-gray-700 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-700">
                <p className="font-semibold mb-1">Garantie fabricant incluse</p>
                <p className="text-xs">Fabrication française • Installation professionnelle • SAV réactif</p>
              </div>
            </div>
          </div>

          {/* Colonne droite - Informations */}
          <div className="space-y-8">
            {/* En-tête */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Typography variant="h1" className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {porte.name}
                </Typography>
                {porte.rating && (
                  <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 border border-amber-200 rounded-md">
                    <Star size={16} className="fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold text-amber-700">{porte.rating}</span>
                  </div>
                )}
              </div>

              {porte.seller && (
                <p className="text-sm text-gray-600">
                  Fabriqué par <span className="font-semibold text-primary">{porte.seller}</span>
                </p>
              )}
            </div>

            {/* Onglets */}
            <div>
              <div className="flex border-b mb-6">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 cursor-pointer truncate ${
                    activeTab === 'description'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('caracteristiques')}
                  className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 cursor-pointer truncate ${
                    activeTab === 'caracteristiques'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Caractéristiques
                </button>
                <button
                  onClick={() => setActiveTab('dimensions')}
                  className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 cursor-pointer truncate ${
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
                    <p className="text-gray-700 leading-relaxed">{porte.description}</p>
                  </div>
                )}

                {activeTab === 'caracteristiques' && (
                  <div className="space-y-4">
                    {/* Caractéristiques principales */}
                    {porte.features.length > 0 && (
                      <div className="grid grid-cols-2 gap-3">
                        {porte.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 border rounded-md">
                            <CheckCircle2 size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-900">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Performances techniques */}
                    <div className="mt-6 pt-6 border-t">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Performances techniques</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {porte.performance && (
                          <div className="p-4 bg-orange-50 border border-orange-200 rounded-md">
                            <div className="flex items-center gap-2 mb-2">
                              <Thermometer size={18} className="text-orange-600" />
                              <span className="text-xs font-semibold text-orange-900 uppercase tracking-wide">
                                Thermique
                              </span>
                            </div>
                            <p className="text-sm font-bold text-orange-900">{porte.performance}</p>
                          </div>
                        )}

                        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                          <div className="flex items-center gap-2 mb-2">
                            <Droplets size={18} className="text-green-600" />
                            <span className="text-xs font-semibold text-green-900 uppercase tracking-wide">
                              Étanchéité
                            </span>
                          </div>
                          <p className="text-sm font-bold text-green-900">A*3 E*3B</p>
                        </div>

                        <div className="p-4 bg-purple-50 border border-purple-200 rounded-md">
                          <div className="flex items-center gap-2 mb-2">
                            <Volume2 size={18} className="text-purple-600" />
                            <span className="text-xs font-semibold text-purple-900 uppercase tracking-wide">
                              Acoustique
                            </span>
                          </div>
                          <p className="text-sm font-bold text-purple-900">29dB</p>
                        </div>

                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                          <div className="flex items-center gap-2 mb-2">
                            <Shield size={18} className="text-blue-600" />
                            <span className="text-xs font-semibold text-blue-900 uppercase tracking-wide">
                              Résistance
                            </span>
                          </div>
                          <p className="text-sm font-bold text-blue-900">V*C3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'dimensions' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 border rounded-md">
                        <div className="flex items-center gap-2 mb-2">
                          <Ruler size={18} className="text-gray-700" />
                          <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                            Hauteur
                          </span>
                        </div>
                        <p className="text-sm font-bold text-gray-900">
                          {hauteur || '2000-2250mm'}
                        </p>
                      </div>

                      <div className="p-4 bg-gray-50 border rounded-md">
                        <div className="flex items-center gap-2 mb-2">
                          <Ruler size={18} className="text-gray-700" />
                          <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                            Largeur
                          </span>
                        </div>
                        <p className="text-sm font-bold text-gray-900">
                          {largeur || '800-1000mm'}
                        </p>
                      </div>

                      <div className="p-4 bg-gray-50 border rounded-md">
                        <div className="flex items-center gap-2 mb-2">
                          <Package size={18} className="text-gray-700" />
                          <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                            Épaisseur
                          </span>
                        </div>
                        <p className="text-sm font-bold text-gray-900">{porte.epaisseur}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                      <p className="text-sm text-blue-900">
                        <strong>💡 Sur mesure :</strong> Dimensions personnalisables selon vos besoins spécifiques. Contactez-nous pour plus d'informations.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Couleurs disponibles */}
            {porte.colors.length > 0 && (
              <div className="pt-6 border-t">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                  Couleurs disponibles
                </h3>
                <div className="flex flex-wrap gap-2">
                  {porte.colors.map((color, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-white border rounded-md border-gray-300 text-sm text-gray-900 hover:border-gray-900 transition-colors cursor-pointer"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Available Forms */}
            <AvailableFormsMiniature />

            {/* CTA Buttons */}
            <div className="pt-6 border-t space-y-3">
              {session ? (
                <Link
                  href="/account/devis"
                  className={buttonVariants({
                    size: "lg",
                    className: "w-full  bg-green-500 hover:bg-green-700 text-white font-semibold text-base"
                  })}
                >
                  Demander un devis gratuit
                </Link>
              ) : (
                <Link
                  href="/auth/signin?callbackUrl=%2Faccount%2Fdevis"
                  className={buttonVariants({
                    size: "lg",
                    className: "w-full bg-green-500 hover:bg-green-700 text-white font-semibold text-base"
                  })}
                >
                  Demander un devis gratuit
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

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
                <Ruler size={28} className="text-primary" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Sur mesure</h3>
              <p className="text-sm text-gray-600">
                Dimensions personnalisables adaptées à votre projet
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-md w-16 h-16 bg-white border mb-4">
                <Lock size={28} className="text-primary" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Sécurité maximale</h3>
              <p className="text-sm text-gray-600">
                Serrures multipoints et protection anti-effraction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <SimilarProductsSection currentProduct={porte} />
    </div>
  );
};

export default PorteDetailPage;