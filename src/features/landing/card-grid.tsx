"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/features/page/layout";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/nowts/typography";
import type { ComponentPropsWithoutRef } from "react";

export type CardImageProps = {
  title: string;
  image: string;
  index: number;
  link: string;
} & ComponentPropsWithoutRef<"div">;

export const CardImage = ({ title, image, index, link }: CardImageProps) => {
  const delay = index * 0.05;
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <Typography variant="h3" className="text-white p-6">
            {title}
          </Typography>
        </div>
      </motion.div>
    </Link>
  );
};

const SectionHeader = () => (
  <div className="text-center mb-12">
    <Typography variant="h2" className="mb-4">
      Nos gammes de produits
    </Typography>
    <Typography variant="p" className="text-muted-foreground max-w-3xl mx-auto">
      Découvrez notre gamme complète de menuiseries et solutions sur mesure pour votre habitat
    </Typography>
  </div>
);

type CardGridProps = {
  initialVisibleCount?: number;
};

export const CardGrid = ({ initialVisibleCount = 6 }: CardGridProps) => {
  const allCards = [
    { title: "Fenêtres", image: "/images/hero-fenetre.jpg", link: "/fenetres" },
    { title: "Baie vitrée", image: "/images/baie/syal_7.jpg", link: "/baie" },
    { title: "Portes", image: "/images/porte3.jpg", link: "/portes" },
    { title: "Volets", image: "/images/volet.jpg", link: "/volet" },
    { title: "Portails", image: "/images/portails.jpg", link: "/portails" },
    { title: "Portes-garage", image: "/images/garage.jpg", link: "/garage" },
    { title: "Pergolas", image: "/images/pergolas1.jpg", link: "/pergolas" },
    { title: "Vérandas", image: "/images/veranda2.jpg", link: "/verandas" },
  ];

  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, 8));
  };

  return (
    <Layout>
      <SectionHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {allCards.slice(0, visibleCount).map((card, index) => (
          <CardImage
            key={card.title}
            title={card.title}
            image={card.image}
            index={index}
            link={card.link}
          />
        ))}
      </div>
      
      <div className="flex justify-end">
        {visibleCount < 8 ? (
          <Button
            onClick={handleShowMore}
            variant="outline"
            size="lg"
          >
            + Plus d'informations
          </Button>
        ) : (
          <Button
            asChild
            variant="default"
            size="lg"
          >
            <Link href="/catalogue" target="_blank" rel="noopener noreferrer">
              Notre Catalogue
            </Link>
          </Button>
        )}
      </div>
    </Layout>
  );
};

export default CardGrid;