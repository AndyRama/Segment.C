"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { Button } from "@/components/ui/button";
import { X, MapPin, Calendar } from "lucide-react";

type ProjectProps = {
  id: number;
  title: string;
  category: string;
  location: string;
  date: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

type GallerySectionProps = {
  className?: string;
}

export const GallerySection = ({ className }: GallerySectionProps) => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [filter, setFilter] = useState<string>("all");

  const projects: ProjectProps[] = [
    {
      id: 1,
      title: "Rénovation fenêtres PVC",
      category: "fenetre",
      location: "Lacanau",
      date: "Mars 2024",
      beforeImage: "/images/fenetre1.jpg",
      afterImage: "/images/fenetre2.jpg",
      description: "Remplacement complet de 8 fenêtres en PVC double vitrage avec volets intégrés."
    },
    {
      id: 2,
      title: "Porte d'entrée sur mesure",
      category: "porte",
      location: "Bordeaux",
      date: "Février 2024",
      beforeImage: "/images/fenetre2.jpg",
      afterImage: "/images/fenetre3.jpg",
      description: "Création et pose d'une porte d'entrée en bois massif avec vitrage sécurisé."
    },
    {
      id: 3,
      title: "Baie vitrée coulissante",
      category: "baie",
      location: "Arcachon",
      date: "Janvier 2024",
      beforeImage: "/images/fenetre3.jpg",
      afterImage: "/images/fenetre4.jpg",
      description: "Installation d'une grande baie vitrée coulissante donnant sur terrasse."
    },
    {
      id: 4,
      title: "Volets battants bois",
      category: "volet",
      location: "Cap Ferret",
      date: "Décembre 2023",
      beforeImage: "/images/fenetre4.jpg",
      afterImage: "/images/fenetre5.jpg",
      description: "Fabrication et pose de volets battants en bois traité classe 4."
    },
    {
      id: 5,
      title: "Véranda contemporaine",
      category: "veranda",
      location: "Lacanau",
      date: "Novembre 2023",
      beforeImage: "/images/fenetre5.jpg",
      afterImage: "/images/fenetre1.jpg",
      description: "Construction d'une véranda moderne en aluminium et verre."
    },
    {
      id: 6,
      title: "Menuiseries complètes",
      category: "menuiserie",
      location: "Pessac",
      date: "Octobre 2023",
      beforeImage: "/images/fenetre1.jpg",
      afterImage: "/images/fenetre2.jpg",
      description: "Rénovation complète des menuiseries d'une maison traditionnelle."
    }
  ];

  const categories = [
    { key: "all", label: "Tous les projets" },
    { key: "fenetre", label: "Fenêtres" },
    { key: "porte", label: "Portes" },
    { key: "baie", label: "Baies vitrées" },
    { key: "volet", label: "Volets" },
    { key: "veranda", label: "Vérandas" },
    { key: "menuiserie", label: "Menuiseries" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-20", className)}>
      <GalleryHeader />
      <GalleryFilters 
        categories={categories}
        activeFilter={filter}
        onFilterChange={setFilter}
      />
      <GalleryGrid 
        projects={filteredProjects.slice(0, visibleCount)}
        onProjectClick={setSelectedProject}
      />
      
      {visibleCount < filteredProjects.length && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleShowMore}
            className="bg-primary text-white hover:bg-primary/90"
          >
            Voir plus de réalisations
          </Button>
        </div>
      )}

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
    <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
      Mes Réalisations
    </Typography>
    <Typography variant="large" className="mx-auto max-w-3xl text-muted-foreground">
      Découvrez quelques-unes de nos réalisations récentes. Chaque projet est unique et réalisé sur mesure selon vos besoins.
    </Typography>
  </div>
);

const GalleryFilters = ({ 
  categories, 
  activeFilter, 
  onFilterChange 
}: {
  categories: { key: string; label: string }[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}) => (
  <div className="mb-8 flex flex-wrap justify-center gap-2">
    {categories.map((category) => (
      <Button
        key={category.key}
        variant={activeFilter === category.key ? "default" : "outline"}
        size="sm"
        onClick={() => onFilterChange(category.key)}
        className={cn(
          "transition-all duration-200",
          activeFilter === category.key 
            ? "bg-primary text-white" 
            : "hover:bg-primary/10"
        )}
      >
        {category.label}
      </Button>
    ))}
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
            src={project.afterImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
          
          {/* Badge catégorie */}
          <div className="absolute left-3 top-3 rounded-full bg-primary px-2 py-1 text-xs text-white">
            {project.category}
          </div>
        </div>
        
        <div className="space-y-2 p-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          
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
  const [showBefore, setShowBefore] = useState(true);

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
          {/* Images avant/après */}
          <div className="relative">
            <div className="relative h-80 md:h-96">
              <Image
                src={showBefore ? project.beforeImage : project.afterImage}
                alt={`${project.title} - ${showBefore ? 'Avant' : 'Après'}`}
                fill
                className="object-cover"
              />
              
              {/* Toggle avant/après */}
              <div className="absolute bottom-4 left-4 flex overflow-hidden rounded-lg bg-black/50">
                <button
                  onClick={() => setShowBefore(true)}
                  className={cn(
                    "px-3 py-1 text-sm transition-colors",
                    showBefore ? "bg-white text-black" : "text-white"
                  )}
                >
                  Avant
                </button>
                <button
                  onClick={() => setShowBefore(false)}
                  className={cn(
                    "px-3 py-1 text-sm transition-colors",
                    !showBefore ? "bg-white text-black" : "text-white"
                  )}
                >
                  Après
                </button>
              </div>
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
                className="w-full bg-primary text-white hover:bg-primary/90"
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