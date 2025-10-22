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
}

type GallerySectionProps = {
  className?: string;
}

export const GallerySection = ({ className }: GallerySectionProps) => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  const projects: ProjectProps[] = [
    {
      id: 1,
      title: "Hestïa |",
      subtitle: "Porte d'entrée sur mesure", 
      category: "porte -fenetre",
      location: "Bordeaux",
      date: "Avril 2025",
      images: ["/images/gallery/hestia.jpg"],
      description: "Remplacement complet d'une porte d'entrée sur mesure d'un restaurant en bois avec vitrage sécurisé."
    },
    {
      id: 2,
      title: "Brut | Cuisine 1000°C",
      subtitle: "Porte d'entrée sur mesure", 
      category: "porte",
      location: "Bordeaux",
      date: "Février 2025",
      images: ["/images/gallery/brut.webp"],
      description: "Création et pose d'une porte baie vitrée coulissante en bois massif avec vitrage sécurisé."
    },
    {
      id: 3,
      title: "EVA |",
      subtitle: "Porte d'entrée sur mesure", 
      category: "baie",
      location: "Bordeaux",
      date: "Janvier 2025",
      images: ["/images/gallery/eva.jpg"],
      description: "Installation d'une grande baie vitrée coulissante donnant sur terrasse."
    },
    {
      id: 4,
      title: "Boucherie |",
      subtitle: "Porte d'entrée sur mesure", 
      category: "baie-vitree",
      location: "Bordeaux",
      date: "Décembre 2024",
      images: ["/images/gallery/bouch.jpg"],
      description: "Fabrication et pose d'une baie pour deventure d'enseigne de boucherie."
    },
    {
      id: 5,
      title: "Oakberry |",
      subtitle: "Porte d'entrée sur mesure", 
      category: "veranda",
      location: "Bordeaux",
      date: "Novembre 2024",
      images: ["/images/gallery/oakberry.jpg"],
      description: "Construction d'une véranda moderne en aluminium et verre."
    },
    {
      id: 6,
      title: "Rénovation maison",
      subtitle: "Meunuiserie complète", 
      category: "menuiserie",
      location: "Pessac",
      date: "Mai 2025",
      images: ["/images/fenetre5.jpg"],
      description: "Rénovation complète des menuiseries d'une maison traditionnelle."
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
            className="object-fit transition-transform duration-300 group-hover:scale-105"
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
          <h3 className="text-lg font-semibold">{project.subtitle}</h3>
          
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-md bg-white">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Images avec navigation */}
          <div className="relative">
            <div className="relative h-80 md:h-96">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              
              {/* Navigation des images */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Indicateur de position */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Détails du projet */}
          <div className="space-y-4 p-6">
            <div>
              <h2 className="mb-2 text-2xl font-bold">{project.title}</h2>
              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
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
              <h3 className="mb-2 font-semibold">Description du projet</h3>
              <p className="leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
            
            <div className="pt-4">
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