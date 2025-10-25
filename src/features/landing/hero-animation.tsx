"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroAnimation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    "/images/hero-fenetre.jpg",
    "/images/COULISSANT_AUTOMNE_HD.png",
    "/images/opera.jpg",
    "/images/fenetre5.jpg",
    "/images/beaulieu-sybaie.jpg",
    "/images/baie/baie2.jpg",
    "/images/B1chambre vdef.jpg",
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
      {/* Double Image Background Container */}
      <div className="absolute inset-0 flex">
        {/* Left Image - Blurred */}
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
              className="size-full object-cover"
            />
          </motion.div>
        )}
      </div>

      {/* Dark Overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Title */}
            <motion.h1
              className="mb-6 text-4xl font-bold leading-tight text-white sm:text-3xl lg:text-5xl xl:text-6xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="text-3xl sm:text-2xl lg:text-4xl xl:text-5xl">Menuisier à St Jean d'Illac</span>
              <br />
              <span className="text-3xl sm:text-2xl lg:text-4xl xl:text-5xl">Fenêtres & Portes sur mesure</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mb-4 text-lg font-medium text-white/90 sm:text-base lg:text-xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Votre artisan menuisier en Gironde : St Jean d'Illac, Mérignac, Bordeaux et Cap Ferret
            </motion.p>

            {/* Benefits */}
            <motion.div
              className="mb-8 flex flex-wrap gap-4 text-sm text-white/80 sm:text-xs lg:text-base"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
            >
              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Devis gratuit sous 48h
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Déplacement offert
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Garantie décennale
              </span>
            </motion.div>

            {/* CTA Buttons Row */}
            <motion.div
              className="mb-6 flex flex-wrap gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/fenetres">
                <motion.button
                  className="rounded-md bg-white px-8 py-4 font-semibold uppercase tracking-wider text-black shadow-2xl transition-all duration-300 hover:bg-gray-100"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Fenêtres
                </motion.button>
              </Link>

              <Link href="/portes">
                <motion.button
                  className="rounded-md bg-white px-8 py-4 font-semibold uppercase tracking-wider text-black shadow-2xl transition-all duration-300 hover:bg-gray-100"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Portes
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators - Aligned at 40% instead of 50% */}
      <motion.div
        className="absolute bottom-8 left-[50%] z-20 flex -translate-x-1/2 gap-3 md:left-1/2 mt-0 md:mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 ${index === currentSlide
                ? "h-2 w-12 bg-green-500"
                : "size-2 bg-white/50 hover:bg-white/70"
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
            className="z-5 pointer-events-none absolute inset-0"
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