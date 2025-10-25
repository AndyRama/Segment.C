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
            <motion.div
              className="mb-6 space-y-3"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Badge localisation */}
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 backdrop-blur-sm">
                <span className="text-lg">📍</span>
                <span className="text-sm font-semibold text-green-400 sm:text-xs lg:text-base">
                  Basé à St Jean d'Illac
                </span>
              </div>

              {/* Titre principal */}
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-3xl lg:text-5xl xl:text-6xl">
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text">
                  Menuisier Expert
                </span>
                <span className="block text-3xl sm:text-2xl lg:text-4xl xl:text-5xl">
                  <span className="text-green-400">Fenêtres</span> & <span className="text-green-400">Portes</span> sur mesure
                </span>
              </h1>
            </motion.div>

            {/* Description enrichie */}
            <motion.p
              className="mb-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-sm lg:text-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Artisan menuisier certifié depuis plus de 15 ans en Gironde. Nous créons et installons 
              vos menuiseries sur mesure dans toute la région : St Jean d'Illac, Mérignac, Bordeaux, 
              Cap Ferret et le Bassin d'Arcachon. Expertise reconnue en fenêtres PVC, aluminium, 
              bois et portes d'entrée haut de gamme.
            </motion.p>

            {/* Benefits */}
            <motion.div
              className="mb-8 flex flex-wrap gap-3"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
            >
              {[
                { icon: "⚡", text: "Devis gratuit sous 48h" },
                { icon: "🚗", text: "Déplacement offert" },
                { icon: "✅", text: "Garantie décennale" }
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-lg">{benefit.icon}</span>
                  <span className="text-sm font-medium text-white sm:text-xs lg:text-base">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
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
                  className="group relative overflow-hidden rounded-lg bg-green-500 px-8 py-4 font-semibold uppercase tracking-wider text-white shadow-2xl transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(75, 180, 132, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Fenêtres</span>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.button>
              </Link>

              <Link href="/portes">
                <motion.button
                  className="group relative overflow-hidden rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold uppercase tracking-wider text-white shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(255,255,255,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Portes
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  className="flex items-center gap-2 rounded-lg bg-white px-6 py-4 font-semibold text-gray-900 shadow-xl transition-all duration-300 hover:bg-gray-100"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>📞</span>
                  <span>Devis gratuit</span>
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