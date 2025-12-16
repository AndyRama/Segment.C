'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

type BusinessInfo = {
  name: string;
  rating: number;
  totalReviews: number;
  googleMapsUrl: string;
  address: string;
};

export default function GoogleReviewsWidget() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const businessInfo: BusinessInfo = {
    name: "Segment.C",
    rating: 4.5,
    totalReviews: 4,
    googleMapsUrl: "https://www.google.com/maps/place/Segment.C/@44.801618,-0.8412295,17z/data=!3m1!4b1!4m6!3m5!1s0x4801c5cb2a2491b5:0xa4ae917a44c55653!8m2!3d44.8016142!4d-0.8386546!16s%2Fg%2F11mw7sj0n6",
    address: "St Jean d'Illac, France"
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
    <a
      href={businessInfo.googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-4 bg-white hover:bg-gray-50 shadow-lg rounded-full p-4 flex items-center gap-3 transition-all duration-500 ease-in-out hover:shadow-xl z-40"
      aria-label="Voir les avis Google"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex items-center gap-2">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
          alt="Google"
          className="w-5 h-5 flex-shrink-0"
        />
        
        <div className="flex gap-0.5 relative">
          {isExpanded ? (
            <div className="flex gap-0.5 animate-fade-in">
              {renderStars(businessInfo.rating)}
            </div>
          ) : (
            <Star size={20} className="fill-yellow-400 text-yellow-400 animate-fade-in" />
          )}
        </div>
        
        <span className="font-bold text-gray-800 transition-all duration-300">{businessInfo.rating}</span>
      </div>
      
      <span 
        className={`text-sm text-gray-600 whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-w-[200px] opacity-100 ml-0' : 'max-w-0 opacity-0 ml-0'
        }`}
      >
        ({businessInfo.totalReviews} avis)
      </span>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-in-out;
        }
      `}</style>
    </a>
  );
}