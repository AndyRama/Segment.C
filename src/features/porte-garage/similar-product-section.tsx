"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

const SimilarGarageCard = ({ product, index }: { product: Product; index: number }) => {
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
      className="flex-shrink-0 w-72 group"
    >
      <Link href={`/garage/${createSlug(product.name)}`}>
        <div className="relative overflow-hidden rounded-md bg-white shadow-md transition-all duration-300 hover:shadow-xl">
          {/* Badges */}
          <div className="absolute left-3 top-3 z-10 flex flex-row gap-1">
            {product.isNew && (
              <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
                Nouveau
              </span>
            )}
            {product.isPopular && (
              <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
                Populaire
              </span>
            )}
          </div>

          {/* Image */}
          <div className="relative h-64 bg-gray-50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
          </div>

          {/* Contenu */}
          <div className="space-y-3 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              {product.rating && (
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              )}
            </div>

            {/* Tags matériau */}
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-blue-100 px-2 py-1 capitalize text-blue-800 font-medium">
                {product.material.replace('_', ' ')}
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-1 text-purple-800 font-medium">
                Garage
              </span>
            </div>

            {/* Description */}
            <p className="line-clamp-2 text-sm text-gray-600">
              {product.description}
            </p>

            {/* Prix */}
            <div className="pt-2 border-t">
              <span className="font-bold text-lg text-gray-900">{product.priceRange}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const SimilarProductSection = ({ currentProduct }: { currentProduct: Product }) => {
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams({
          limit: '20',
          offset: '0',
          type: 'PORTE',
          category: 'PORTE_GARAGE',
        });

        const response = await fetch(`/api/products?${params}`);
        if (!response.ok) throw new Error('Failed to fetch products');
        
        const data = await response.json();
        
        // Filtrer pour exclure le produit actuel et limiter à 20 produits
        const filtered = data.products
          .filter((p: Product) => p.id !== currentProduct.id)
          .slice(0, 20);
        
        setSimilarProducts(filtered);
      } catch {
        // Error handled silently
      } finally {
        setLoading(false);
      }
    };

    void fetchSimilarProducts();
  }, [currentProduct]);

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('similar-garage-container');
    if (!container) return;
    
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  if (loading) {
    return (
      <div className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (similarProducts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white py-12 border-t">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Autres portes de garage
            </h2>
            <p className="text-sm text-gray-600">
              Découvrez notre gamme complète de portes de garage
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-gray-300 rounded-md hover:border-gray-900 hover:bg-gray-50 transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-gray-300 rounded-md hover:border-gray-900 hover:bg-gray-50 transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          id="similar-garage-container"
          className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {similarProducts.map((product, index) => (
            <SimilarGarageCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/garage"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-colors"
          >
            Voir toutes les portes de garage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductSection;