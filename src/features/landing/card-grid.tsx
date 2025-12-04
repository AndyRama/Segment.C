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
    <Link href={link} className="block" target="_blank">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration: 0.9,
          },
        }}
        viewport={{ once: true }}
        className="group relative cursor-pointer overflow-hidden rounded-md"
      >
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="h-[400px] w-full object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h3 className="text-center text-2xl leading-tight font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
};

const SectionHeader = () => (
  <div className="mb-12 space-y-4 text-center">
    <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
      Nos gammes de produits
    </Typography>
    <Typography
      variant="large"
      className="text-muted-foreground mx-auto max-w-3xl"
    >
      Découvrez notre gamme complète de menuiseries et solutions sur mesure pour
      votre habitat
    </Typography>
  </div>
);

type CardGridProps = {
  initialVisibleCount?: number;
};

export const CardGrid = ({ initialVisibleCount = 4 }: CardGridProps) => {
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
    setVisibleCount((prev) => Math.min(prev + 4, 8));
  };

  return (
    <Layout>
      <div className="mx-auto mb-2 justify-center rounded-r-md md:flex md:px-4">
        <div className="w-full lg:w-10/12">
          <SectionHeader />

          <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-4 text-gray-500 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {allCards.slice(0, visibleCount).map((card, index) => (
              <CardImage
                key={index}
                index={index}
                title={card.title}
                image={card.image}
                link={card.link}
              />
            ))}
          </div>

          <div className="flex justify-end mt-8">
            {visibleCount < 8 ? (
              <Button
                onClick={handleShowMore}
                variant="outline"
                size="lg"
              >
                + Plus d'informations
              </Button>
            ) : (
              <Button asChild variant="default" size="lg">
                <Link href="/catalogue" target="_blank" rel="noopener noreferrer">
                  Notre Catalogue
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CardGrid;
