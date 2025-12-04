'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import QuoteRequestModule from "@/features/landing/quote-request-module"; 
import type { HeroAnimationData } from "@/features/villes/types";

type HeroAnimationProps = HeroAnimationData;

const HeroAnimation = ({ 
  title, 
  titleHighlight, 
  subtitle, 
  description 
}: HeroAnimationProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { data: session } = useSession();

  const slides = [
    "/images/hero-fenetre.jpg",
    "/images/COULISSANT_AUTOMNE_HD.png",
    "/images/opera.jpg",
    "/images/fenetre5.jpg",
    "/images/beaulieu-sybaie.jpg",
    "/images/baie/baie2.jpg",
    "/images/b1-chambre.jpg",
    "/images/Visuel_2_Produits_Proferm.png",
  ];

  const getLeftImage = () => slides[currentSlide];
  const getRightImage = () => slides[(currentSlide + 1) % slides.length];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: React.SetStateAction<number>) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 800);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0 flex">
        <motion.div
          className="relative h-full w-0 overflow-hidden md:w-1/2"
          animate={{
            x: isTransitioning ? "-100%" : "0%",
          }}
          transition={{
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1.0],
          }}
        >
          <motion.img
            key={`left-${currentSlide}`}
            src={getLeftImage()}
            alt="Background left"
            className="absolute inset-0 size-full scale-110 object-cover"
            initial={{ filter: "blur(0px)", scale: 1.1 }}
            animate={{
              filter: isTransitioning ? "blur(10px)" : "blur(8px)",
              scale: isTransitioning ? 1.15 : 1.1,
            }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Right Image - Clear */}
        <motion.div
          className="relative size-full overflow-hidden md:w-1/2"
          animate={{
            x: isTransitioning ? "-100%" : "0%",
          }}
          transition={{
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1.0],
          }}
        >
          <motion.img
            key={`right-${currentSlide}`}
            src={getRightImage()}
            alt="Background right"
            className="absolute inset-0 size-full object-cover"
            initial={{ scale: 1 }}
            animate={{
              scale: isTransitioning ? 1.05 : 1,
              filter: isTransitioning ? "blur(0px)" : "blur(0px)",
            }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </motion.div>

        {/* Next Image - Entering from right */}
        {isTransitioning && (
          <motion.div
            className="absolute right-0 h-full w-1/2 overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 0.8,
              ease: [0.645, 0.045, 0.355, 1.0],
            }}
          >
            <Image
              src={slides[(currentSlide + 2) % slides.length]}
              alt="Background next"
              fill
              className="object-cover"
            />
          </motion.div>
        )}
      </div>

      {/* Dark Overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-6">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Title */}
            <motion.h1
              className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl mt-10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {title}
              <br />
              <span className="font-bold italic text-green-500">{titleHighlight}</span>
              <br className="hidden md:content"/>
              {subtitle && `- ${subtitle}`}
            </motion.h1>
            
            <motion.p
              className="mb-8 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
                <QuoteRequestModule 
                  className="rounded-md border-2 border-black-500 bg-green-500 px-6 py-3 font-semibold shadow-2xl transition-all duration-300 hover:bg-transparent hover:text-green-500 sm:px-8 sm:py-4"
                />
                  <Link href="/#réalisations">
                    <motion.button
                      className="rounded-md border-2 border-green-500 bg-transparent px-6 py-3 font-semibold text-green-500 shadow-2xl transition-all duration-300 hover:bg-green-500 hover:text-white sm:px-8 sm:py-4"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 25px 50px rgba(34, 197, 94, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Voir mes réalisations
                    </motion.button>
                  </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 ${
              index === currentSlide
                ? "h-2 w-12 rounded-full bg-green-500"
                : "size-2 rounded-full bg-white/50 hover:bg-white/70"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>

      {/* Transition Effect Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroAnimation;