"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Star, Shield, Phone, Mail, MapPin } from "lucide-react";

type DoorProps = {
  id: number;
  name: string;
  category: string;
  material: string;
  style: string;
  image: string;
  colors: string[];
  features: string[];
  description: string;
  priceRange: string;
  rating: number;
  isPopular?: boolean;
  isNew?: boolean;
}

type PortesSectionProps = {
  className?: string;
}

const PortesSection = ({ className }: PortesSectionProps) => {
  const [selectedDoor, setSelectedDoor] = useState<DoorProps | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const [filters, setFilters] = useState({
    material: "all",
    style: "all",
    category: "all"
  });

  const doors: DoorProps[] = [
    {
      id: 1,
      name: "ABLETTE",
      category: "entree",
      material: "acier",
      style: "traditionnelle",
      image: "/images/porte-ablette.jpg",
      colors: ["Noir", "Beige", "Gris"],
      features: ["Sécurité renforcée", "Isolation thermique", "Design élégant"],
      description: "Porte d'entrée en acier au style traditionnel, alliant sécurité et esthétique. Parfaite pour les maisons classiques.",
      priceRange: "800€ - 1200€",
      rating: 4.8,
      isPopular: true
    },
    {
      id: 2,
      name: "AGOUTI",
      category: "entree",
      material: "acier",
      style: "contemporaine",
      image: "/images/porte-agouti.jpg",
      colors: ["Bleu marine", "Beige", "Gris anthracite"],
      features: ["Design moderne", "Haute sécurité", "Isolation optimale"],
      description: "Porte d'entrée contemporaine en acier, avec des lignes épurées et une excellente performance énergétique.",
      priceRange: "900€ - 1400€",
      rating: 4.9,
      isNew: true
    },
    {
      id: 3,
      name: "ALÉSIA 60",
      category: "entree",
      material: "aluminium",
      style: "contemporaine",
      image: "/images/porte-alesia.jpg",
      colors: ["Gris clair", "Beige", "Blanc"],
      features: ["Ultra légère", "Résistance corrosion", "Design minimaliste"],
      description: "Porte d'entrée en aluminium au design contemporain, offrant une excellente durabilité et un entretien minimal.",
      priceRange: "1100€ - 1600€",
      rating: 4.7
    },
    {
      id: 4,
      name: "ALIÉNOR 80",
      category: "entree",
      material: "aluminium",
      style: "traditionnelle",
      image: "/images/porte-alienor.jpg",
      colors: ["Noir", "Beige"],
      features: ["Vitrage décoratif", "Isolation renforcée", "Style authentique"],
      description: "Porte d'entrée aluminium traditionnelle avec vitrage décoratif, parfaite pour les maisons de caractère.",
      priceRange: "1200€ - 1800€",
      rating: 4.6
    },
    {
      id: 5,
      name: "ANCOLIE",
      category: "entree",
      material: "pvc",
      style: "contemporaine",
      image: "/images/porte-ancolie.jpg",
      colors: ["Blanc", "Gris"],
      features: ["Excellent rapport qualité-prix", "Isolation thermique", "Entretien facile"],
      description: "Porte d'entrée PVC contemporaine, économique et performante, idéale pour tous types d'habitations.",
      priceRange: "600€ - 900€",
      rating: 4.5,
      isPopular: true
    },
    {
      id: 6,
      name: "ANÉMONE",
      category: "entree",
      material: "pvc",
      style: "traditionnelle",
      image: "/images/porte-anemone.jpg",
      colors: ["Blanc", "Bleu", "Vert", "Gris"],
      features: ["Vitrage sécurisé", "Design classique", "Prix attractif"],
      description: "Porte d'entrée PVC traditionnelle avec vitrage, alliant charme classique et performance moderne.",
      priceRange: "650€ - 1000€",
      rating: 4.4
    },
    {
      id: 7,
      name: "BÉRYL",
      category: "entree",
      material: "bois",
      style: "traditionnelle",
      image: "/images/porte-beryl.jpg",
      colors: ["Chêne naturel", "Noyer", "Acajou"],
      features: ["Bois massif", "Isolation naturelle", "Finition artisanale", "Durabilité exceptionnelle"],
      description: "Porte d'entrée en bois massif au style traditionnel, façonnée artisanalement pour un rendu authentique et chaleureux.",
      priceRange: "1500€ - 2200€",
      rating: 4.9,
      isNew: true
    },
    {
      id: 8,
      name: "CRISTAL",
      category: "entree",
      material: "aluminium",
      style: "contemporaine",
      image: "/images/porte-cristal.jpg",
      colors: ["Blanc pur", "Gris perle", "Noir mat"],
      features: ["Grand vitrage", "Design épuré", "Sécurité renforcée", "Luminosité maximale"],
      description: "Porte d'entrée aluminium contemporaine avec grand vitrage, parfaite pour les architectures modernes privilégiant la lumière.",
      priceRange: "1300€ - 1900€",
      rating: 4.8
    },
    {
      id: 9,
      name: "EMERAUDE",
      category: "entree",
      material: "acier",
      style: "contemporaine",
      image: "/images/porte-emeraude.jpg",
      colors: ["Vert émeraude", "Bleu océan", "Rouge carmin"],
      features: ["Couleurs éclatantes", "Anti-corrosion", "Design audacieux", "Haute sécurité"],
      description: "Porte d'entrée en acier aux couleurs vives et au design contemporain audacieux, pour personnaliser votre entrée avec style.",
      priceRange: "1000€ - 1500€",
      rating: 4.6,
      isPopular: true
    },
    {
      id: 10,
      name: "FUSION",
      category: "entree",
      material: "mixte",
      style: "contemporaine",
      image: "/images/porte-fusion.jpg",
      colors: ["Bois/Alu naturel", "Bois/Alu anthracite"],
      features: ["Double matériau", "Design innovant", "Performance optimale", "Entretien minimal"],
      description: "Porte d'entrée mixte bois-aluminium au design innovant, combinant l'esthétique du bois et la performance de l'aluminium.",
      priceRange: "1600€ - 2400€",
      rating: 4.7
    },
    {
      id: 11,
      name: "HARMONIE",
      category: "entree",
      material: "pvc",
      style: "traditionnelle",
      image: "/images/porte-harmonie.jpg",
      colors: ["Blanc classique", "Crème", "Gris taupe"],
      features: ["Design équilibré", "Panneau décoratif", "Isolation performante", "Prix accessible"],
      description: "Porte d'entrée PVC traditionnelle avec panneaux décoratifs, offrant un excellent équilibre entre esthétique et budget.",
      priceRange: "550€ - 850€",
      rating: 4.4
    },
    {
      id: 12,
      name: "INFINITY",
      category: "entree",
      material: "aluminium",
      style: "contemporaine",
      image: "/images/porte-infinity.jpg",
      colors: ["Anthracite", "Blanc", "Bronze"],
      features: ["Lignes infinies", "Poignée intégrée", "Design futuriste", "Haute isolation"],
      description: "Porte d'entrée aluminium au design futuriste avec poignée intégrée, pour une entrée résolument moderne et élégante.",
      priceRange: "1400€ - 2000€",
      rating: 4.8,
      isNew: true
    }
  ];

  const materialFilters = [
    { key: "all", label: "Tous matériaux" },
    { key: "acier", label: "Acier" },
    { key: "aluminium", label: "Aluminium" },
    { key: "pvc", label: "PVC" },
    { key: "bois", label: "Bois" },
    { key: "mixte", label: "Mixte" }
  ];

  const styleFilters = [
    { key: "all", label: "Tous styles" },
    { key: "traditionnelle", label: "Traditionnelle" },
    { key: "contemporaine", label: "Contemporaine" }
  ];

  const filteredDoors = doors.filter(door => {
    return (filters.material === "all" || door.material === filters.material) &&
           (filters.style === "all" || door.style === filters.style);
  });

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredDoors.length));
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setVisibleCount(9); // Reset visible count when filters change
  };

  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-20", className)}>
      <PortesHeader />
      <PortesFilters 
        materialFilters={materialFilters}
        styleFilters={styleFilters}
        activeFilters={filters}
        onFilterChange={handleFilterChange}
      />
      <PortesGrid 
        doors={filteredDoors.slice(0, visibleCount)}
        onDoorClick={setSelectedDoor}
      />
      
      {visibleCount < filteredDoors.length && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleShowMore}
            className="bg-primary text-white hover:bg-primary/90"
          >
            Voir plus de portes
          </Button>
        </div>
      )}

      {selectedDoor && (
        <DoorModal 
          door={selectedDoor}
          onClose={() => setSelectedDoor(null)}
        />
      )}
    </section>
  );
};

const PortesHeader = () => (
  <div className="mb-12 space-y-4 text-center">
    <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
      Nos Portes d'Entrée
    </Typography>
    <Typography variant="large" className="mx-auto max-w-3xl text-muted-foreground">
      Découvrez notre gamme complète de portes d'entrée. Sécurité, esthétique et performance énergétique 
      pour protéger et embellir votre maison.
    </Typography>
  </div>
);

const PortesFilters = ({ 
  materialFilters,
  styleFilters,
  activeFilters, 
  onFilterChange 
}: {
  materialFilters: { key: string; label: string }[];
  styleFilters: { key: string; label: string }[];
  activeFilters: { material: string; style: string; category: string };
  onFilterChange: (filterType: string, value: string) => void;
}) => (
  <div className="mb-8 space-y-4">
    <div className="flex flex-wrap justify-center gap-2">
      <span className="mr-2 self-center text-sm font-medium text-muted-foreground">Matériaux:</span>
      {materialFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={activeFilters.material === filter.key ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("material", filter.key)}
          className={cn(
            "transition-all duration-200",
            activeFilters.material === filter.key 
              ? "bg-primary text-white" 
              : "hover:bg-primary/10"
          )}
        >
          {filter.label}
        </Button>
      ))}
    </div>
    
    <div className="flex flex-wrap justify-center gap-2">
      <span className="mr-2 self-center text-sm font-medium text-muted-foreground">Styles:</span>
      {styleFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={activeFilters.style === filter.key ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("style", filter.key)}
          className={cn(
            "transition-all duration-200",
            activeFilters.style === filter.key 
              ? "bg-primary text-white" 
              : "hover:bg-primary/10"
          )}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  </div>
);

const PortesGrid = ({ 
  doors, 
  onDoorClick 
}: {
  doors: DoorProps[];
  onDoorClick: (door: DoorProps) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {doors.map((door, index) => (
      <DoorCard 
        key={door.id}
        door={door}
        index={index}
        onClick={() => onDoorClick(door)}
      />
    ))}
  </div>
);

const DoorCard = ({ 
  door, 
  index, 
  onClick 
}: {
  door: DoorProps;
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
        {/* Badges */}
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1">
          {door.isNew && (
            <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
              Nouveau
            </span>
          )}
          {door.isPopular && (
            <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
              Populaire
            </span>
          )}
        </div>
        
        <div className="relative h-64">
          <Image
            src={door.image}
            alt={door.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
        </div>
        
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{door.name}</h3>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{door.rating}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-blue-100 px-2 py-1 capitalize text-blue-800">
              {door.material}
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 capitalize text-purple-800">
              {door.style}
            </span>
          </div>
          
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {door.description}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <span className="font-semibold text-primary">{door.priceRange}</span>
            <Button size="sm" variant="outline" className="text-xs">
              Voir détails
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DoorModal = ({ 
  door, 
  onClose 
}: {
  door: DoorProps;
  onClose: () => void;
}) => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    // console.log("Demande de devis:", { door: door.name, ...formData });
    alert("Votre demande de devis a été envoyée avec succès !");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg bg-white">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        >
          <X size={20} />
        </button>

        <div className="flex h-full max-h-[90vh] overflow-y-auto">
          {/* Image */}
          <div className="hidden md:block md:w-1/2">
            <div className="relative h-full min-h-[500px]">
              <Image
                src={door.image}
                alt={door.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Contenu */}
          <div className="w-full space-y-6 p-6 md:w-1/2">
            {!showQuoteForm ? (
              <>
                {/* En-tête */}
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <h2 className="text-2xl font-bold">{door.name}</h2>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{door.rating}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm capitalize text-blue-800">
                      {door.material}
                    </span>
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm capitalize text-purple-800">
                      {door.style}
                    </span>
                  </div>
                  
                  <p className="text-xl font-semibold text-primary">{door.priceRange}</p>
                </div>

                {/* Description */}
                <div>
                  <h3 className="mb-2 font-semibold">Description</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {door.description}
                  </p>
                </div>

                {/* Caractéristiques */}
                <div>
                  <h3 className="mb-3 font-semibold">Caractéristiques</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {door.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Shield size={16} className="text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Couleurs disponibles */}
                <div>
                  <h3 className="mb-3 font-semibold">Couleurs disponibles</h3>
                  <div className="flex flex-wrap gap-2">
                    {door.colors.map((color, index) => (
                      <span 
                        key={index}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    onClick={() => setShowQuoteForm(true)}
                    className="flex-1 bg-primary text-white hover:bg-primary/90"
                  >
                    Demander un devis
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Fermer
                  </Button>
                </div>
              </>
            ) : (
              <>
                {/* Formulaire de devis */}
                <div>
                  <h2 className="mb-2 text-2xl font-bold">Demande de devis</h2>
                  <p className="mb-6 text-muted-foreground">
                    Pour la porte <strong>{door.name}</strong>
                  </p>
                </div>

                <form onSubmit={handleSubmitQuote} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Nom complet *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Téléphone *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Message (optionnel)
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre projet, vos contraintes, vos souhaits..."
                      rows={4}
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      type="submit"
                      className="flex-1 bg-primary text-white hover:bg-primary/90"
                    >
                      Envoyer la demande
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setShowQuoteForm(false)}
                      className="flex-1"
                    >
                      Retour
                    </Button>
                  </div>
                </form>

                {/* Informations de contact */}
                <div className="mt-6 rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-3 font-semibold">Ou contactez-nous directement</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone size={14} />
                      <span>05 56 12 34 56</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={14} />
                      <span>contact@segment-c.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>St Jean d'Illac, Gironde</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortesSection;