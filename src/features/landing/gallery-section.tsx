"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { Button } from "@/components/ui/button";
import { X, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

type ProjectProps = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  date: string;
  images: string[];
  description: string;
  description1: string;
}

type GallerySectionProps = {
  className?: string;
}

export const GallerySection = ({ className }: GallerySectionProps) => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

 const projects: ProjectProps[] = [
    {
      id: 1,
      title: "Brut | Cuisine 1000°C",
      subtitle: "Porte d'entrée sur mesure",
      category: "porte",
      location: "Bordeaux",
      date: "Février 2025",
      images: ["/images/gallery/brut.webp"],
      description: "Création et pose d'une porte baie vitrée coulissante en bois massif avec vitrage sécurisé.",
      description1: "Restaurant bistronomique niché au cœur de Bordeaux, BRUT célèbre la puissance du feu maîtrisé à travers une cuisine singulière réalisée au barbecue japonais alimenté au bois de Binchotan. Un charbon rare et noble qui révèle la quintessence des saveurs. Installation d'une porte d'entrée alliant esthétique brute et sécurité pour ce lieu où la flamme devient un art."
    },
    {
      id: 2,
      title: "EVA | Expérience VR",
      subtitle: "Porte d'entrée sur mesure",
      category: "baie",
      location: "Bordeaux",
      date: "Janvier 2025",
      images: ["/images/gallery/eva.jpg"],
      description: "Installation d'une grande baie vitrée coulissante donnant sur terrasse.",
      description1: "EVA (Esports Virtual Arenas) est un complexe de 2400 m² à Bordeaux-Lac offrant une expérience immersive unique qui associe sport, réalité virtuelle et jeu vidéo. Les joueurs évoluent dans des arènes de 500 m² équipés de casques VR et d'armes connectées. Installation d'une baie vitrée pour ce lieu futuriste dédié à la nouvelle génération de divertissement."
    },
    {
      id: 3,
      title: "Hestïa | Restaurant grec",
      subtitle: "Porte d'entrée sur mesure",
      category: "porte-fenetre",
      location: "Bordeaux",
      date: "Avril 2025",
      images: ["/images/gallery/hestia.jpg","/images/gallery/hestia3.jpg"],
      description: "Remplacement complet d'une porte d'entrée sur mesure d'un restaurant en bois avec vitrage sécurisé.",
      description1: "Restaurant de street food grec situé au 4 rue Castillon à Bordeaux. Hestïa propose des gyros artisanaux en pita ou en bowls, avec des produits frais préparés maison. Deux amis passionnés par la Grèce ont créé ce lieu chaleureux où tout est fait avec amour, du pain pita à la broche de poulet mariné. Réalisation d'une porte d'entrée accueillante pour ce restaurant qui transporte ses clients en Grèce."
    },
    {
      id: 4,
      title: "Oakberry | Açaí Bowl",
      subtitle: "Porte d'entrée sur mesure",
      category: "veranda",
      location: "Bordeaux",
      date: "Novembre 2024",
      images: ["/images/gallery/oakberry.jpg","/images/gallery/oakberry2.jpg","/images/gallery/oakberry1.jpg"],
      description: "Construction d'une véranda moderne en aluminium et verre.",
      description1: "Oakberry est la marque n°1 d'açaí dans le monde. Cette enseigne propose des bowls à base d'açaí bio 100% organique provenant directement d'Amazonie, accompagnés de toppings variés : granola, fruits frais, beurre de cacahuètes, chia pudding. Un superfood riche en antioxydants, vegan et sans colorants. Construction d'une véranda vitrée pour ce lieu moderne dédié à la santé et au bien-être."
    },
    {
      id: 5,
      title: "Rénovation maison",
      subtitle: "Menuiserie complète",
      category: "menuiserie",
      location: "Pessac",
      date: "Mai 2025",
      images: ["/images/fenetre5.jpg"],
      description: "Rénovation complète des menuiseries d'une maison traditionnelle.",
      description1: "Rénovation complète des menuiseries extérieures d'une maison traditionnelle à Pessac. Remplacement de l'ensemble des fenêtres, portes et volets pour améliorer l'isolation thermique et phonique tout en conservant le cachet architectural du bâtiment. Travaux réalisés avec des matériaux de qualité pour une performance énergétique optimale."
    },
    {
      id: 6,
      title: "Boucherie | Devanture commerciale",
      subtitle: "Porte d'entrée sur mesure",
      category: "baie-vitree",
      location: "Bordeaux",
      date: "Décembre 2024",
      images: ["/images/gallery/bouch.jpg"],
      description: "Fabrication et pose d'une baie pour deventure d'enseigne de boucherie.",
      description1: "Boucherie artisanale à Bordeaux proposant des viandes de qualité sélectionnées avec soin auprès de producteurs locaux. Fabrication et installation d'une grande baie vitrée pour la devanture, permettant une visibilité optimale des produits et respectant les normes d'hygiène et de sécurité alimentaire. Un aménagement qui met en valeur le savoir-faire artisanal du boucher."
    }
  ];

  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-20", className)}>
      <GalleryHeader />
      <GalleryGrid 
        projects={projects}
        onProjectClick={setSelectedProject}
      />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

const GalleryHeader = () => (
  <div className="mb-12 space-y-4 text-center">
    <Typography variant="h2" id="réalisations" className="text-3xl md:text-4xl xl:text-5xl">
      Mes Réalisations
    </Typography>
    <Typography variant="large" className="mx-auto max-w-3xl text-muted-foreground">
      Découvrez quelques-unes de nos réalisations récentes. Chaque projet est unique et réalisé sur mesure selon vos besoins.
    </Typography>
  </div>
);

const GalleryGrid = ({ 
  projects, 
  onProjectClick 
}: {
  projects: ProjectProps[];
  onProjectClick: (project: ProjectProps) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project, index) => (
      <ProjectCard 
        key={project.id}
        project={project}
        index={index}
        onClick={() => onProjectClick(project)}
      />
    ))}
  </div>
);

const ProjectCard = ({ 
  project, 
  index, 
  onClick 
}: {
  project: ProjectProps;
  index: number;
  onClick: () => void;
}) => {
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
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="relative h-64">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
          
          {/* Badge nombre de photos */}
          {project.images.length > 1 && (
            <div className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
              {project.images.length} photos
            </div>
          )}
        </div>
        
        <div className="space-y-2 p-4">
          <h2 className="text-lg font-semibold">{project.title}</h2>
          <h3 className="text-sm font-medium text-muted-foreground">{project.subtitle}</h3>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              {project.location}
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              {project.date}
            </div>
          </div>
          
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ 
  project, 
  onClose 
}: {
  project: ProjectProps;
  onClose: () => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-5xl my-auto overflow-hidden rounded-lg bg-white max-h-[95vh] flex flex-col">
        {/* Bouton fermer - toujours accessible */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 z-20 rounded-full bg-black/70 p-2 text-white transition-colors hover:bg-black/90 shadow-lg"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:grid md:grid-cols-2 overflow-y-auto">
          {/* Images avec navigation */}
          <div className="relative bg-gray-100 flex-shrink-0">
            <div className="relative h-64 sm:h-80 md:h-[32rem] lg:h-[36rem]">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
              
              {/* Navigation des images */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white transition-colors hover:bg-black/90 shadow-lg z-10"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white transition-colors hover:bg-black/90 shadow-lg z-10"
                    aria-label="Image suivante"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Indicateur de position */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-xs text-white shadow-lg">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Détails du projet - scrollable */}
          <div className="space-y-4 p-4 sm:p-6 overflow-y-auto">
            <div>
              <h2 className="mb-2 text-xl sm:text-2xl font-bold pr-10">{project.title}</h2>
              <h3 className="mb-3 text-base sm:text-lg font-medium text-muted-foreground">{project.subtitle}</h3>
              <div className="mb-4 flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  {project.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {project.date}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="mb-2 font-semibold text-sm sm:text-base">Description du projet</h3>
              <p className="leading-relaxed text-sm sm:text-base text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="pt-4 border-t">
              <h3 className="mb-2 font-semibold text-sm sm:text-base">Informations</h3>
              <p className="leading-relaxed text-sm sm:text-base text-muted-foreground">
                {project.description1}
              </p>
            </div>
            
            <div className="pt-4 sticky bottom-0 bg-white pb-2">
              <Button 
                onClick={onClose}
                className="w-full bg-green-500 text-white hover:bg-green-500/90"
              >
                Fermer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};