'use client';

import React, { useState } from 'react';
import { Star, MapPin, ExternalLink, X } from 'lucide-react';

interface BusinessInfo {
  name: string;
  rating: number;
  totalReviews: number;
  googleMapsUrl: string;
  address: string;
}

export default function GoogleReviewsWidget() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const businessInfo: BusinessInfo = {
    name: "Segment.C",
    rating: 4.5,
    totalReviews: 12,
    googleMapsUrl: "https://www.google.com/maps/place/Segment.C/@44.801618,-0.8412295,17z/data=!3m1!4b1!4m6!3m5!1s0x4801c5cb2a2491b5:0xa4ae917a44c55653!8m2!3d44.8016142!4d-0.8386546!16s%2Fg%2F11mw7sj0n6",
    address: "Martignas-sur-Jalle, France"
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={20}
        className={index < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <>
      {/* Bouton réduit */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-white hover:bg-gray-50 shadow-lg rounded-full p-4 flex items-center gap-3 transition-all hover:shadow-xl z-40"
        aria-label="Ouvrir les avis Google"
      >
        <div className="flex items-center gap-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
            alt="Google"
            className="w-5 h-5"
          />
          <div className="flex gap-0.5">
            {renderStars(businessInfo.rating)}
          </div>
          <span className="font-bold text-gray-800">{businessInfo.rating}</span>
        </div>
        <span className="text-sm text-gray-600">({businessInfo.totalReviews} avis)</span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="reviews-title"
        >
          {/* Carte complète */}
          <div 
            className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 relative animate-scale-in"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>

            <div className="flex items-start justify-between mb-4 pr-8">
              <div>
                <h2 id="reviews-title" className="text-2xl font-bold text-gray-800 mb-1">
                  {businessInfo.name}
                </h2>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span>{businessInfo.address}</span>
                </div>
              </div>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                alt="Google"
                className="w-8 h-8"
              />
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1" aria-label={`Note: ${businessInfo.rating} sur 5 étoiles`}>
                  {renderStars(businessInfo.rating)}
                </div>
                <span className="text-2xl font-bold text-gray-800">{businessInfo.rating}</span>
              </div>
              <p className="text-sm text-gray-600">
                Basé sur {businessInfo.totalReviews} avis Google
              </p>
            </div>

            <a
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors mb-3"
            >
              <span>Voir tous les avis</span>
              <ExternalLink size={18} />
            </a>

            <a
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Laisser un avis
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
}