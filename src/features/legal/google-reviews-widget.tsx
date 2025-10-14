'use client';

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

type BusinessInfo = {
  name: string;
  rating: number;
  totalReviews: number;
  googleMapsUrl: string;
  address: string;
};

export default function GoogleReviewsWidget() {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const businessInfo: BusinessInfo = {
    name: "Segment.C",
    rating: 4.5,
    totalReviews: 12,
    googleMapsUrl: "https://www.google.com/maps/place/Segment.C/@44.801618,-0.8412295,17z/data=!3m1!4b1!4m6!3m5!1s0x4801c5cb2a2491b5:0xa4ae917a44c55653!8m2!3d44.8016142!4d-0.8386546!16s%2Fg%2F11mw7sj0n6",
    address: "Martignas-sur-Jalle, France"
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

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
      className={`fixed bottom-6 right-6 bg-white hover:bg-gray-50 shadow-lg rounded-full p-4 flex items-center gap-3 transition-all hover:shadow-xl z-40 ${
        isExpanded ? '' : 'pr-4'
      }`}
      aria-label="Voir les avis Google"
      onMouseEnter={() => setIsExpanded(true)}
    >
      <div className="flex items-center gap-2">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
          alt="Google"
          className="w-5 h-5 flex-shrink-0"
        />
        <div className="flex gap-0.5">
          {renderStars(businessInfo.rating)}
        </div>
        <span className="font-bold text-gray-800">{businessInfo.rating}</span>
      </div>
      
      <span 
        className={`text-sm text-gray-600 whitespace-nowrap overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'
        }`}
      >
        ({businessInfo.totalReviews} avis)
      </span>
    </a>
  );
}