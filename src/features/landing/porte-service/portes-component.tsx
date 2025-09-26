"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  X,
  Star,
  Shield,
  Phone,
  Mail,
  MapPin,
  Sun,
  Thermometer,
  Eye,
  Lock,
  Home,
} from "lucide-react";

type PorteProps = {
  id: string;
  name: string;
  category: string;
  material: string;
  style: string;
  vitrage: string;
  epaisseur: string;
  image: string;
  colors: string[];
  features: string[];
  description: string;
  priceRange: string;
  rating: number;
  dimensions: string;
  performanceThermique: string;
  fournisseur: string;
  isPopular?: boolean;
  isNew?: boolean;
};

type PortesSectionProps = {
  className?: string;
};

const PortesSection = ({ className }: PortesSectionProps) => {
  const [selectedPorte, setSelectedPorte] = useState<PorteProps | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const [filters, setFilters] = useState({
    material: "all",
    style: "all",
    vitrage: "all",
  });

  const portes: PorteProps[] = [
    // PORTES ALUMINIUM
    {
      id: "SW001",
      name: "ABLETTE",
      category: "porte-entree",
      material: "acier",
      style: "classique",
      vitrage: "triple-vitrage",
      epaisseur: "48mm",
      image: "https://prod-image.cetih.eu/image/portes/ablette/couleur-gris-7016-texture.jpg",
      colors: ["Gris anthracite", "Blanc", "Bronze", "Noir"],
      features: ["Triple vitrage feuilleté", "Petits bois plombs", "Performance thermique", "Cadre mouluré"],
      description: "Porte acier avec dormant alu, vitrage avec petits bois plombs intégrés dans un cadre mouluré.",
      priceRange: "1800€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "Sybaie",
      isPopular: true,
    },
    {
      id: "SW002",
      name: "ORPHIE 80",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "triple-vitrage",
      epaisseur: "80mm",
      image: "https://prod-image.cetih.eu/image/portes/orphie/orphie-80-alu.jpg",
      colors: ["Anthracite", "Blanc", "Bronze", "Gris"],
      features: ["Design exclusif", "Ouvrant rainuré", "Demi-lune vitrée", "Embouts inox"],
      description: "Design exclusif, ouvrant rainuré, demi-lune vitrée avec triple vitrage feuilleté sablé.",
      priceRange: "2200€",
      rating: 4.8,
      dimensions: "H: 1920-2250mm, L: 780-1000mm",
      performanceThermique: "1.2 W/(m².K)",
      fournisseur: "Sybaie",
      isNew: true,
    },
    {
      id: "SW003",
      name: "BLENNIE 80",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "80mm",
      image: "https://prod-image.cetih.eu/image/portes/blennie/blennie-80-alu.jpg",
      colors: ["Gris clair", "Blanc", "Anthracite", "Bronze"],
      features: ["Design exclusif Sybaie", "Lignes épurées", "Grande surface vitrée", "Profilés fins"],
      description: "Design exclusif Sybaie avec lignes épurées pour un maximum de luminosité.",
      priceRange: "2100€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.2 W/(m².K)",
      fournisseur: "Sybaie",
    },
    {
      id: "SW004",
      name: "MOSTELLE 80",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "80mm",
      image: "https://prod-image.cetih.eu/image/portes/mostelle/mostelle-80-alu.jpg",
      colors: ["Anthracite", "Blanc", "Gris", "Bronze"],
      features: ["Design exclusif", "Style moderne", "Haute performance", "Finition premium"],
      description: "Design exclusif aluminium au style moderne avec finition premium.",
      priceRange: "2150€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.2 W/(m².K)",
      fournisseur: "Sybaie",
    },
    {
      id: "SW005",
      name: "NAPILUS 80",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "80mm",
      image: "https://prod-image.cetih.eu/image/portes/napilus/napilus-80-alu.jpg",
      colors: ["Gris anthracite", "Blanc", "Bronze", "Noir"],
      features: ["Design exclusif aluminium", "Performance thermique", "Durabilité", "Esthétique moderne"],
      description: "Design exclusif aluminium avec performance thermique optimale.",
      priceRange: "2180€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.2 W/(m².K)",
      fournisseur: "Sybaie",
    },
    {
      id: "SW006",
      name: "FANTAZY 80",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "80mm",
      image: "https://prod-image.cetih.eu/image/portes/fantazy/fantazy-80-alu.jpg",
      colors: ["Anthracite", "Blanc", "Gris", "Noir mat"],
      features: ["Nouveau design 2025", "Innovation", "Style unique", "Performance"],
      description: "Nouveau design 2025 avec innovation et style unique pour votre entrée.",
      priceRange: "2250€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.2 W/(m².K)",
      fournisseur: "Sybaie",
      isNew: true,
    },
    {
      id: "SW007",
      name: "BALISTE",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "double-vitrage-acoustique",
      epaisseur: "70mm",
      image: "https://prod-image.cetih.eu/image/portes/baliste/baliste-alu.jpg",
      colors: ["Anthracite", "Gris", "Blanc", "Bronze"],
      features: ["Performances acoustiques", "Zones urbaines", "Anti-bruit", "Isolation renforcée"],
      description: "Performances acoustiques renforcées, adapté aux zones urbaines et aéroportuaires.",
      priceRange: "2400€",
      rating: 4.9,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "Sybaie",
      isPopular: true,
    },
    {
      id: "SW008",
      name: "CÈDRE",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "triple-vitrage",
      epaisseur: "70mm",
      image: "https://prod-image.cetih.eu/image/portes/cedre/cedre-alu.jpg",
      colors: ["Anthracite", "Blanc", "Gris", "Bronze"],
      features: ["Conception exclusive Sybaie", "Triple vitrage", "Design unique", "Haute performance"],
      description: "Conception exclusive Sybaie avec design unique et haute performance thermique.",
      priceRange: "2300€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.2 W/(m².K)",
      fournisseur: "Sybaie",
    },
    {
      id: "SW009",
      name: "MOTTA 80",
      category: "porte-entree",
      material: "aluminium",
      style: "classique",
      vitrage: "vitrage-serigraphie",
      epaisseur: "80mm",
      image: "https://prod-image.cetih.eu/image/portes/motta/motta-80-alu.jpg",
      colors: ["Blanc", "Gris", "Anthracite", "Beige"],
      features: ["Style classique", "Vitrage sérigraphié grille", "Maisons de ville", "Apport lumière"],
      description: "Style classique avec vitrage sérigraphié imitant grille, idéal maisons de ville.",
      priceRange: "2000€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "Sybaie",
    },
    {
      id: "SW010",
      name: "TAHITI-19",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "70mm",
      image: "https://prod-image.cetih.eu/image/portes/tahiti/tahiti-19-alu.jpg",
      colors: ["18 couleurs disponibles", "Personnalisable", "RAL sur demande"],
      features: ["18 couleurs au choix", "Personnalisation", "Design moderne", "Flexibilité"],
      description: "18 couleurs disponibles pour personnaliser votre porte selon vos goûts.",
      priceRange: "1950€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "Sybaie",
    },
    // PORTES ACIER
    {
      id: "SW020",
      name: "GARDON",
      category: "porte-entree",
      material: "acier",
      style: "classique",
      vitrage: "double-vitrage",
      epaisseur: "48mm",
      image: "https://prod-image.cetih.eu/image/portes/gardon/gardon-acier.jpg",
      colors: ["Gris", "Blanc", "Vert", "Bleu"],
      features: ["Acier traditionnel", "Double vitrage", "Robustesse", "Prix attractif"],
      description: "Porte acier traditionnelle avec double vitrage, robuste et économique.",
      priceRange: "1650€",
      rating: 4.4,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "Sybaie",
    },
    {
      id: "SW021",
      name: "CARPE",
      category: "porte-entree",
      material: "acier",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "48mm",
      image: "https://prod-image.cetih.eu/image/portes/carpe/carpe-acier.jpg",
      colors: ["Anthracite", "Blanc", "Gris", "Rouge"],
      features: ["Style moderne acier", "Design contemporain", "Performance", "Durabilité"],
      description: "Style moderne acier avec design contemporain et performance optimale.",
      priceRange: "1700€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "Sybaie",
    },
    // PORTES PVC
    {
      id: "SW018",
      name: "IONIS PVC",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "70mm",
      image: "https://prod-image.cetih.eu/image/portes/ionis/ionis-pvc.jpg",
      colors: ["Blanc", "Gris", "Anthracite", "Beige"],
      features: ["PVC performant", "Isolation thermique", "Prix attractif", "Entretien facile"],
      description: "Gamme PVC performante avec excellent rapport qualité-prix et isolation.",
      priceRange: "1400€",
      rating: 4.3,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "Sybaie",
    },
    {
      id: "SW019",
      name: "ALTIMO PVC",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "70mm",
      image: "https://prod-image.cetih.eu/image/portes/altimo/altimo-pvc.jpg",
      colors: ["Couleurs illimitées", "Laqué", "Personnalisable"],
      features: ["PVC laqué", "Couleurs illimitées", "Finition premium", "Durabilité"],
      description: "PVC laqué avec possibilité de couleurs illimitées pour une finition premium.",
      priceRange: "1350€",
      rating: 4.4,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "Sybaie",
    },
    // PORTES BOIS
    {
      id: "SW026",
      name: "CHÊNE TRADITION",
      category: "porte-entree",
      material: "bois",
      style: "traditionnel",
      vitrage: "double-vitrage",
      epaisseur: "68mm",
      image: "https://prod-image.cetih.eu/image/portes/chene/chene-tradition.jpg",
      colors: ["Chêne naturel", "Chêne teinté", "Vernis naturel"],
      features: ["Essence chêne", "Assemblage traditionnel", "Charme authentique", "Écologique"],
      description: "Essence chêne avec assemblage traditionnel pour un charme authentique.",
      priceRange: "2400€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.2 W/(m².K)",
      fournisseur: "Sybaie",
      isPopular: true,
    },
    {
      id: "SW027",
      name: "MOVINGUI MODERNE",
      category: "porte-entree",
      material: "bois",
      style: "contemporain",
      vitrage: "triple-vitrage",
      epaisseur: "68mm",
      image: "https://prod-image.cetih.eu/image/portes/movingui/movingui-moderne.jpg",
      colors: ["Movingui clair", "Teinté", "Naturel"],
      features: ["Bois exotique", "Design actuel", "Triple vitrage", "Performances"],
      description: "Bois exotique Movingui avec design actuel et très bonnes performances.",
      priceRange: "2500€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.1 W/(m².K)",
      fournisseur: "Sybaie",
    },
    // PORTES MIXTES
    {
      id: "SW016",
      name: "BLENNIE MIXTE",
      category: "porte-entree",
      material: "mixte-bois-alu",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "80mm",
      image: "https://prod-image.cetih.eu/image/portes/blennie/blennie-mixte.jpg",
      colors: ["Bois/Anthracite", "Bois/Blanc", "Chêne/Gris"],
      features: ["Très bonnes performances", "Double matériau", "Esthétique", "Durabilité"],
      description: "Très bonnes performances thermiques avec esthétique bois intérieur et alu extérieur.",
      priceRange: "2600€",
      rating: 4.9,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.0 W/(m².K)",
      fournisseur: "Sybaie",
      isNew: true,
    },
    {
      id: "SW017",
      name: "ORPHIE MIXTE",
      category: "porte-entree",
      material: "mixte-bois-alu",
      style: "contemporain",
      vitrage: "triple-vitrage",
      epaisseur: "80mm",
      image: "https://prod-image.cetih.eu/image/portes/orphie/orphie-mixte.jpg",
      colors: ["Chêne/Anthracite", "Pin/Blanc", "Bois/Bronze"],
      features: ["Design exclusif mixte", "Triple vitrage", "Performance maximale", "Prestige"],
      description: "Design exclusif mixte avec triple vitrage pour une performance maximale.",
      priceRange: "2700€",
      rating: 4.9,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.0 W/(m².K)",
      fournisseur: "Sybaie",
      isPopular: true,
    },
    // PORTES ACIER (suite)
    {
      id: "SW022",
      name: "TRUITE",
      category: "porte-entree",
      material: "acier",
      style: "classique",
      vitrage: "simple-vitrage",
      epaisseur: "48mm",
      image: "https://prod-image.cetih.eu/image/portes/truite/truite-acier.jpg",
      colors: ["Vert", "Bleu", "Rouge", "Blanc"],
      features: ["Design traditionnel", "Simple vitrage", "Prix attractif", "Robustesse"],
      description: "Design traditionnel avec simple vitrage pour un style authentique.",
      priceRange: "1550€",
      rating: 4.3,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SWAO",
    },
    {
      id: "SW023",
      name: "PERCHE",
      category: "porte-entree",
      material: "acier",
      style: "contemporain",
      vitrage: "triple-vitrage",
      epaisseur: "48mm",
      image: "https://prod-image.cetih.eu/image/portes/perche/perche-acier.jpg",
      colors: ["Anthracite", "Gris", "Blanc", "Bronze"],
      features: ["Performances renforcées", "Triple vitrage", "Style moderne", "Sécurité"],
      description: "Performances renforcées avec triple vitrage pour une isolation optimale.",
      priceRange: "1750€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "SWAO",
    },
    {
      id: "SW024",
      name: "BROCHET",
      category: "porte-entree",
      material: "acier",
      style: "classique",
      vitrage: "double-vitrage-sable",
      epaisseur: "48mm",
      image: "https://prod-image.cetih.eu/image/portes/brochet/brochet-acier.jpg",
      colors: ["Blanc", "Gris", "Vert", "Bleu"],
      features: ["Vitrage intimité", "Double vitrage sablé", "Style classique", "Discrétion"],
      description: "Vitrage intimité avec double vitrage sablé pour préserver votre intimité.",
      priceRange: "1680€",
      rating: 4.4,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "SWAO",
    },
    {
      id: "SW025",
      name: "SOLE",
      category: "porte-entree",
      material: "acier",
      style: "contemporain",
      vitrage: "pleine",
      epaisseur: "48mm",
      image: "https://prod-image.cetih.eu/image/portes/sole/sole-acier.jpg",
      colors: ["Anthracite", "Blanc", "Gris", "Noir"],
      features: ["Porte pleine", "Sécurité optimale", "Pas de vitrage", "Intimité totale"],
      description: "Porte pleine pour une sécurité optimale et une intimité totale.",
      priceRange: "1500€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "SWAO",
    },
    // PORTES ALUMINIUM (suite)
    {
      id: "SW011",
      name: "ELBOT 80",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "80mm",
      image: "https://prod-image.cetih.eu/image/portes/elbot/elbot-80-alu.jpg",
      colors: ["Anthracite", "Blanc", "Gris", "Bronze"],
      features: ["Design exclusif aluminium", "80mm d'épaisseur", "Performance", "Modernité"],
      description: "Design exclusif aluminium avec 80mm d'épaisseur pour une performance optimale.",
      priceRange: "2100€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.2 W/(m².K)",
      fournisseur: "SWAO",
    },
    {
      id: "SW012",
      name: "VISTA 60",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "60mm",
      image: "https://prod-image.cetih.eu/image/portes/vista/vista-60-alu.jpg",
      colors: ["Gris clair", "Blanc", "Anthracite"],
      features: ["Lignes horizontales", "Style sobre", "Contemporain", "Design épuré"],
      description: "Lignes horizontales pour un style sobre et contemporain très actuel.",
      priceRange: "1850€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "SWAO",
    },
    {
      id: "SW013",
      name: "CARASSIN",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "70mm",
      image: "https://prod-image.cetih.eu/image/portes/carassin/carassin-alu.jpg",
      colors: ["18 couleurs disponibles", "Personnalisable", "RAL"],
      features: ["18 couleurs au choix", "Aluminium moderne", "Personnalisation", "Style actuel"],
      description: "18 couleurs au choix pour personnaliser votre porte aluminium moderne.",
      priceRange: "1900€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "SWAO",
    },
    {
      id: "SW014",
      name: "BOTIA",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "70mm",
      image: "https://prod-image.cetih.eu/image/portes/botia/botia-alu.jpg",
      colors: ["18 couleurs disponibles", "Gamme étendue", "Personnalisable"],
      features: ["18 couleurs disponibles", "Design contemporain", "Aluminium", "Flexibilité"],
      description: "18 couleurs disponibles pour un design contemporain personnalisé.",
      priceRange: "1950€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "SWAO",
    },
    {
      id: "SW015",
      name: "CIRUS GRAND TRAFIC",
      category: "porte-entree",
      material: "aluminium",
      style: "professionnel",
      vitrage: "triple-vitrage-securit",
      epaisseur: "90mm",
      image: "https://prod-image.cetih.eu/image/portes/cirus/cirus-grand-trafic.jpg",
      colors: ["Anthracite", "Blanc", "Gris", "Bronze"],
      features: ["Profilés renforcés", "Usage intensif", "Bâtiments collectifs", "Robustesse"],
      description: "Profilés renforcés pour usage intensif dans bâtiments tertiaires et collectifs.",
      priceRange: "2800€",
      rating: 4.8,
      dimensions: "H: 2000-2500mm, L: 800-1200mm",
      performanceThermique: "1.1 W/(m².K)",
      fournisseur: "SWAO",
      isNew: true,
    },
    // PORTES PVC (suite)
    {
      id: "SW028",
      name: "BOIS LAMES VERTICALES",
      category: "porte-entree",
      material: "bois",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "58mm",
      image: "https://prod-image.cetih.eu/image/portes/bois-lames/bois-lames-vert.jpg",
      colors: ["Chêne naturel", "Pin", "Mélèze"],
      features: ["Conception à lames verticales", "Bois naturel", "Design moderne", "Écologique"],
      description: "Conception à lames verticales pour un design moderne et écologique.",
      priceRange: "2200€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "SWAO",
    },
    {
      id: "SW029",
      name: "MIXTE CHÊNE",
      category: "porte-entree",
      material: "mixte-bois-alu",
      style: "traditionnel",
      vitrage: "double-vitrage",
      epaisseur: "80mm",
      image: "https://prod-image.cetih.eu/image/portes/mixte/mixte-chene.jpg",
      colors: ["Chêne/Anthracite", "Chêne/Blanc", "Chêne/Bronze"],
      features: ["Intérieur chêne", "Extérieur alu", "Style traditionnel", "Durabilité"],
      description: "Intérieur chêne authentique avec extérieur aluminium pour la durabilité.",
      priceRange: "2800€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.0 W/(m².K)",
      fournisseur: "SWAO",
      isPopular: true,
    },
    // NOUVELLES GAMMES 2025
    {
      id: "SW051",
      name: "BLENNIE 70",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "70mm",
      image: "https://prod-image.cetih.eu/image/portes/blennie/blennie-70-alu.jpg",
      colors: ["Gris", "Blanc", "Anthracite", "Bronze"],
      features: ["Version 70mm économique", "Design Blennie", "Prix attractif", "Performance"],
      description: "Version 70mm économique du célèbre modèle Blennie.",
      priceRange: "1950€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "SWAO",
    },
    {
      id: "SW052",
      name: "ORPHIE 70",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "70mm",
      image: "https://prod-image.cetih.eu/image/portes/orphie/orphie-70-alu.jpg",
      colors: ["Anthracite", "Blanc", "Gris", "Bronze"],
      features: ["Version standard 70mm", "Design Orphie", "Accessible", "Qualité"],
      description: "Version standard 70mm du modèle Orphie au design exclusif.",
      priceRange: "2000€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "SWAO",
    },
    {
      id: "SW061",
      name: "ALTIMO PREMIUM",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "triple-vitrage",
      epaisseur: "70mm",
      image: "https://prod-image.cetih.eu/image/portes/altimo/altimo-premium-pvc.jpg",
      colors: ["Blanc", "Gris", "Anthracite", "Couleurs sur mesure"],
      features: ["Version performante", "Triple vitrage", "PVC premium", "Isolation renforcée"],
      description: "Version performante Altimo avec triple vitrage pour une isolation optimale.",
      priceRange: "1550€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "SWAO",
    },
    {
      id: "SW034",
      name: "PVC TURNER OAK",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "70mm",
      image: "https://prod-image.cetih.eu/image/portes/pvc/pvc-turner-oak.jpg",
      colors: ["Turner Oak", "Finition bois", "Nouveauté 2025"],
      features: ["Nouvelle finition bois 2025", "Aspect authentique", "PVC texturé", "Innovation"],
      description: "Nouvelle finition Turner Oak 2025 pour un aspect bois authentique sur PVC.",
      priceRange: "1500€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "SWAO",
      isNew: true,
    },
    // GAMME ACOUSTIQUE
    {
      id: "SW075",
      name: "BALISTE URBAN",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "triple-vitrage-acoustique",
      epaisseur: "80mm",
      image: "https://prod-image.cetih.eu/image/portes/baliste/baliste-urban.jpg",
      colors: ["Anthracite", "Gris foncé", "Noir mat"],
      features: ["Spécial zones très bruyantes", "Triple vitrage acoustique", "Urban design", "Anti-pollution sonore"],
      description: "Spécialement conçu pour les zones très bruyantes avec triple vitrage acoustique.",
      priceRange: "2700€",
      rating: 4.9,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.1 W/(m².K)",
      fournisseur: "SWAO",
      isNew: true,
    },
    // GAMME DOMOTIQUE I-SECURE
    {
      id: "SW038",
      name: "ACIER CLAVIER CODE",
      category: "porte-entree",
      material: "acier",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "48mm",
      image: "https://prod-image.cetih.eu/image/portes/acier/acier-clavier-code.jpg",
      colors: ["Anthracite", "Blanc", "Gris", "Noir"],
      features: ["Clavier à code intégré", "Domotique", "Sécurité renforcée", "Sans clé"],
      description: "Porte acier avec clavier à code intégré pour une sécurité renforcée.",
      priceRange: "1950€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "SWAO",
      isNew: true,
    },
    // GAMME PRESTIGE
    {
      id: "SW153",
      name: "COLLECTION PRESTIGE",
      category: "porte-entree",
      material: "mixte-bois-alu",
      style: "contemporain",
      vitrage: "triple-vitrage-prestige",
      epaisseur: "100mm",
      image: "https://prod-image.cetih.eu/image/portes/mixte/collection-prestige.jpg",
      colors: ["Chêne/Anthracite", "Noyer/Bronze", "Hêtre/Noir", "Sur mesure"],
      features: ["Collection prestige", "100mm épaisseur", "Performance maximale", "Luxe"],
      description: "Collection prestige avec 100mm d'épaisseur pour une performance maximale.",
      priceRange: "4200€",
      rating: 5.0,
      dimensions: "H: 2000-2500mm, L: 800-1200mm",
      performanceThermique: "0.6 W/(m².K)",
      fournisseur: "SWAO",
      isNew: true,
      isPopular: true,
    },
    // PORTES 2 VANTAUX
    {
      id: "SW032",
      name: "ORPHIE 2 VANTAUX",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "80mm",
      image: "https://prod-image.cetih.eu/image/portes/orphie/orphie-2-vantaux.jpg",
      colors: ["Anthracite", "Blanc", "Gris", "Bronze"],
      features: ["Version double vantail", "Grande ouverture", "Design Orphie", "Prestige"],
      description: "Version double vantail du célèbre modèle Orphie pour une grande ouverture.",
      priceRange: "3200€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 1400-1800mm",
      performanceThermique: "1.2 W/(m².K)",
      fournisseur: "SWAO",
    },
    // PORTES AVEC IMPOSTE
    {
      id: "SW033",
      name: "BLENNIE IMPOSTE",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "double-vitrage-imposte",
      epaisseur: "80mm",
      image: "https://prod-image.cetih.eu/image/portes/blennie/blennie-imposte.jpg",
      colors: ["Gris", "Blanc", "Anthracite", "Bronze"],
      features: ["Avec imposte lumineuse", "Maximum de lumière", "Design élégant", "Entrée valorisée"],
      description: "Blennie avec imposte lumineuse pour maximiser la lumière dans l'entrée.",
      priceRange: "2800€",
      rating: 4.7,
      dimensions: "H: 2400-2800mm, L: 800-1000mm",
      performanceThermique: "1.2 W/(m².K)",
      fournisseur: "SWAO",
    },
    // GAMME SÉCURITÉ RENFORCÉE
    {
      id: "SW121",
      name: "CIRUS SÉCURITÉ",
      category: "porte-entree",
      material: "aluminium",
      style: "professionnel",
      vitrage: "triple-vitrage-blinde",
      epaisseur: "100mm",
      image: "https://prod-image.cetih.eu/image/portes/cirus/cirus-securite.jpg",
      colors: ["Anthracite", "Gris foncé", "Blanc", "Sur mesure"],
      features: ["Sécurité maximale", "Vitrage blindé", "Anti-effraction", "Professionnel"],
      description: "Sécurité maximale avec vitrage blindé pour usage professionnel.",
      priceRange: "3200€",
      rating: 4.9,
      dimensions: "H: 2000-2500mm, L: 800-1200mm",
      performanceThermique: "1.0 W/(m².K)",
      fournisseur: "SWAO",
      isPopular: true,
    },
    // PORTES BOIS PREMIUM
    {
      id: "SW099",
      name: "CHÊNE AUTHENTIQUE",
      category: "porte-entree",
      material: "bois",
      style: "traditionnel",
      vitrage: "double-vitrage-artisanal",
      epaisseur: "88mm",
      image: "https://prod-image.cetih.eu/image/portes/chene/chene-authentique.jpg",
      colors: ["Chêne naturel", "Chêne cérusé", "Chêne teinté"],
      features: ["Menuiserie d'art", "Chêne massif", "Fait main", "Patrimoine"],
      description: "Menuiserie d'art en chêne massif, fabriquée selon les techniques traditionnelles.",
      priceRange: "3000€",
      rating: 4.9,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.0 W/(m².K)",
      fournisseur: "SWAO",
      isPopular: true,
    },
    {
      id: "SW100",
      name: "MOVINGUI DESIGN",
      category: "porte-entree",
      material: "bois",
      style: "contemporain",
      vitrage: "triple-vitrage",
      epaisseur: "78mm",
      image: "https://prod-image.cetih.eu/image/portes/movingui/movingui-design.jpg",
      colors: ["Movingui naturel", "Teinté wengé", "Laqué blanc"],
      features: ["Design contemporain", "Bois exotique", "Triple vitrage", "Élégance"],
      description: "Design contemporain en bois exotique Movingui avec triple vitrage.",
      priceRange: "2750€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.0 W/(m².K)",
      fournisseur: "SWAO",
    },
    // NOUVELLES FINITIONS PVC 2025
    {
      id: "SW141",
      name: "PVC TURNER OAK DESIGN",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "triple-vitrage-design",
      epaisseur: "70mm",
      image: "https://prod-image.cetih.eu/image/portes/pvc/pvc-turner-oak-design.jpg",
      colors: ["Turner Oak Premium", "Finition haut de gamme", "Texture bois"],
      features: ["Design Turner Oak", "Triple vitrage", "Finition premium", "Innovation 2025"],
      description: "Design Turner Oak avec triple vitrage, innovation 2025 pour finition premium.",
      priceRange: "1750€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.2 W/(m².K)",
      fournisseur: "SWAO",
      isNew: true,
    },
    // GAMME ACOUSTIQUE PROFESSIONNELLE
    {
      id: "SW152",
      name: "MIXTE ACOUSTIQUE PRO",
      category: "porte-entree",
      material: "mixte-bois-alu",
      style: "contemporain",
      vitrage: "triple-vitrage-acoustique-premium",
      epaisseur: "92mm",
      image: "https://prod-image.cetih.eu/image/portes/mixte/mixte-acoustique-pro.jpg",
      colors: ["Chêne/Anthracite", "Noyer/Gris", "Pin/Blanc"],
      features: ["Acoustique professionnel", "92mm épaisseur", "Triple vitrage premium", "Performance maximale"],
      description: "Performance acoustique professionnelle avec 92mm d'épaisseur et triple vitrage premium.",
      priceRange: "3600€",
      rating: 4.9,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "0.8 W/(m².K)",
      fournisseur: "SWAO",
      isNew: true,
    },
    // GAMME ÉCONOMIQUE
    {
      id: "SW042",
      name: "IONIS PLEINE",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "pleine",
      epaisseur: "70mm",
      image: "https://prod-image.cetih.eu/image/portes/ionis/ionis-pleine.jpg",
      colors: ["Blanc", "Gris", "Anthracite"],
      features: ["Version sans vitrage", "Prix attractif", "Sécurité", "Intimité totale"],
      description: "Version sans vitrage pour un prix attractif avec sécurité maximale.",
      priceRange: "1200€",
      rating: 4.3,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "SWAO",
    },
    // PORTES GRAND FORMAT
    {
      id: "SW122",
      name: "ORPHIE GRAND FORMAT",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "triple-vitrage-tres-grand",
      epaisseur: "80mm",
      image: "https://prod-image.cetih.eu/image/portes/orphie/orphie-grand-format.jpg",
      colors: ["Anthracite", "Blanc", "Gris", "Bronze"],
      features: ["Vitrage maximal", "Grande surface vitrée", "Luminosité optimale", "Design exclusif"],
      description: "Vitrage maximal pour une luminosité optimale avec le design exclusif Orphie.",
      priceRange: "2500€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.1 W/(m².K)",
      fournisseur: "SWAO",
    },
    // GAMME COULEURS ÉTENDUES
    {
      id: "SW120",
      name: "TAHITI PREMIUM",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "triple-vitrage",
      epaisseur: "80mm",
      image: "https://prod-image.cetih.eu/image/portes/tahiti/tahiti-premium.jpg",
      colors: ["Plus de 30 couleurs", "RAL illimité", "Personnalisation totale"],
      features: ["Version premium colorée", "Triple vitrage", "Couleurs illimitées", "Personnalisation"],
      description: "Version premium avec couleurs illimitées et triple vitrage pour personnalisation totale.",
      priceRange: "2250€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.1 W/(m².K)",
      fournisseur: "SWAO",
    },
    // PORTES MIXTES EXECUTIVE
    {
      id: "SW151",
      name: "MIXTE EXECUTIVE",
      category: "porte-entree",
      material: "mixte-bois-alu",
      style: "contemporain",
      vitrage: "triple-vitrage-executive",
      epaisseur: "95mm",
      image: "https://prod-image.cetih.eu/image/portes/mixte/mixte-executive.jpg",
      colors: ["Chêne/Anthracite", "Noyer/Bronze", "Hêtre/Blanc"],
      features: ["Gamme executive", "95mm épaisseur", "Performance ultime", "Prestige absolu"],
      description: "Gamme executive avec 95mm d'épaisseur pour une performance et un prestige ultimes.",
      priceRange: "3800€",
      rating: 4.9,
      dimensions: "H: 2000-2500mm, L: 800-1200mm",
      performanceThermique: "0.7 W/(m².K)",
      fournisseur: "SWAO",
      isNew: true,
      isPopular: true,
    },
  ];

  const materialFilters = [
    { key: "all", label: "Tous matériaux" },
    { key: "aluminium", label: "Aluminium" },
    { key: "acier", label: "Acier" },
    { key: "pvc", label: "PVC" },
    { key: "bois", label: "Bois" },
    { key: "mixte-bois-alu", label: "Mixte Bois-Alu" },
  ];

  const styleFilters = [
    { key: "all", label: "Tous styles" },
    { key: "contemporain", label: "Contemporain" },
    { key: "classique", label: "Classique" },
    { key: "traditionnel", label: "Traditionnel" },
    { key: "professionnel", label: "Professionnel" },
  ];

  const vitrageFilters = [
    { key: "all", label: "Tous vitrages" },
    { key: "double-vitrage", label: "Double vitrage" },
    { key: "triple-vitrage", label: "Triple vitrage" },
    { key: "pleine", label: "Pleine" },
    { key: "vitrage-serigraphie", label: "Vitrage sérigraphié" },
  ];

  const filteredPortes = portes.filter((porte) => {
    return (
      (filters.material === "all" || porte.material === filters.material) &&
      (filters.style === "all" || porte.style === filters.style) &&
      (filters.vitrage === "all" || porte.vitrage === filters.vitrage)
    );
  });

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, filteredPortes.length));
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
    setVisibleCount(12);
  };

  return (
    <section
      className={cn(
        "relative mx-auto w-full max-w-7xl px-4 py-20 lg:px-0",
        className,
      )}
    >
      <PortesHeader />
      <PortesFilters
        materialFilters={materialFilters}
        styleFilters={styleFilters}
        vitrageFilters={vitrageFilters}
        activeFilters={filters}
        onFilterChange={handleFilterChange}
      />
      <PortesGrid
        portes={filteredPortes.slice(0, visibleCount)}
        onPorteClick={setSelectedPorte}
      />

      {visibleCount < filteredPortes.length && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleShowMore}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Voir plus de portes ({filteredPortes.length - visibleCount} restantes)
          </Button>
        </div>
      )}

      <div className="mt-8 text-center">
        <Typography variant="small" className="text-muted-foreground">
          {filteredPortes.length} portes sur 153 modèles Segment C disponibles
        </Typography>
      </div>

      {selectedPorte && (
        <PorteModal
          porte={selectedPorte}
          onClose={() => setSelectedPorte(null)}
        />
      )}
    </section>
  );
};

const PortesHeader = () => (
  <div className="mb-12 space-y-4 text-center">
    <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
      Collection Portes d'Entrée Segment C
    </Typography>
    <Typography
      variant="large"
      className="text-muted-foreground mx-auto max-w-3xl"
    >
      Découvrez notre sélection de 153 portes d'entrée Segment C.
      Fabriquées en France, sur mesure, dans 5 matériaux : aluminium, acier, PVC, bois et mixte.
      Styles contemporains, classiques ou traditionnels pour tous vos projets.
    </Typography>
    <div className="flex justify-center items-center gap-4 mt-6">
      <div className="flex items-center gap-2">
        <Home size={20} className="text-blue-600" />
        <Typography variant="small" className="font-medium">Made in France</Typography>
      </div>
      <div className="flex items-center gap-2">
        <Shield size={20} className="text-green-600" />
        <Typography variant="small" className="font-medium">Sur mesure</Typography>
      </div>
      <div className="flex items-center gap-2">
        <Lock size={20} className="text-orange-600" />
        <Typography variant="small" className="font-medium">Sécurité renforcée</Typography>
      </div>
    </div>
  </div>
);

const PortesFilters = ({
  materialFilters,
  styleFilters,
  vitrageFilters,
  activeFilters,
  onFilterChange,
}: {
  materialFilters: { key: string; label: string }[];
  styleFilters: { key: string; label: string }[];
  vitrageFilters: { key: string; label: string }[];
  activeFilters: { material: string; style: string; vitrage: string };
  onFilterChange: (filterType: string, value: string) => void;
}) => (
  <div className="mb-8 space-y-4">
    <div className="flex flex-wrap justify-center gap-2">
      <span className="text-muted-foreground mr-2 self-center text-sm font-medium">
        Matériaux:
      </span>
      {materialFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={
            activeFilters.material === filter.key ? "default" : "outline"
          }
          size="sm"
          onClick={() => onFilterChange("material", filter.key)}
          className={cn(
            "transition-all duration-200",
            activeFilters.material === filter.key
              ? "bg-primary text-white"
              : "hover:bg-primary/10",
          )}
        >
          {filter.label}
        </Button>
      ))}
    </div>

    <div className="flex flex-wrap justify-center gap-2">
      <span className="text-muted-foreground mr-2 self-center text-sm font-medium">
        Style:
      </span>
      {styleFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={
            activeFilters.style === filter.key ? "default" : "outline"
          }
          size="sm"
          onClick={() => onFilterChange("style", filter.key)}
          className={cn(
            "transition-all duration-200",
            activeFilters.style === filter.key
              ? "bg-primary text-white"
              : "hover:bg-primary/10",
          )}
        >
          {filter.label}
        </Button>
      ))}
    </div>

    <div className="flex flex-wrap justify-center gap-2">
      <span className="text-muted-foreground mr-2 self-center text-sm font-medium">
        Vitrage:
      </span>
      {vitrageFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={activeFilters.vitrage === filter.key ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("vitrage", filter.key)}
          className={cn(
            "transition-all duration-200",
            activeFilters.vitrage === filter.key
              ? "bg-primary text-white"
              : "hover:bg-primary/10",
          )}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  </div>
);

const PortesGrid = ({
  portes,
  onPorteClick,
}: {
  portes: PorteProps[];
  onPorteClick: (porte: PorteProps) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {portes.map((porte, index) => (
      <PorteCard
        key={porte.id}
        porte={porte}
        index={index}
        onClick={() => onPorteClick(porte)}
      />
    ))}
  </div>
);

const PorteCard = ({
  porte,
  index,
  onClick,
}: {
  porte: PorteProps;
  index: number;
  onClick: () => void;
}) => {
  const delay = index * 0.05;

  const getMaterialColor = (material: string) => {
    switch (material) {
      case "aluminium": return "bg-blue-100 text-blue-800";
      case "acier": return "bg-gray-100 text-gray-800";
      case "pvc": return "bg-green-100 text-green-800";
      case "bois": return "bg-amber-100 text-amber-800";
      case "mixte-bois-alu": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStyleColor = (style: string) => {
    switch (style) {
      case "contemporain": return "bg-indigo-100 text-indigo-800";
      case "classique": return "bg-rose-100 text-rose-800";
      case "traditionnel": return "bg-orange-100 text-orange-800";
      case "professionnel": return "bg-teal-100 text-teal-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.4 },
      }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
          {porte.isNew && (
            <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
              Nouveau
            </span>
          )}
          {porte.isPopular && (
            <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
              Populaire
            </span>
          )}
        </div>

        <div className="relative h-48">
          <Image
            src={porte.image}
            alt={porte.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
        </div>

        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <Typography variant="large" className="font-semibold">
              {porte.name}
            </Typography>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <Typography variant="small">{porte.rating}</Typography>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 text-xs">
            <span className={cn("rounded-full px-2 py-1 capitalize", getMaterialColor(porte.material))}>
              {porte.material.replace('-', ' ')}
            </span>
            <span className={cn("rounded-full px-2 py-1", getStyleColor(porte.style))}>
              {porte.style}
            </span>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-800">
              {porte.epaisseur}
            </span>
          </div>

          <Typography
            variant="small"
            className="text-muted-foreground line-clamp-2"
          >
            {porte.description}
          </Typography>

          <div className="text-muted-foreground flex items-center justify-between text-xs">
            <span className="flex items-center gap-1">
              <Thermometer size={12} />
              {porte.performanceThermique}
            </span>
            <span className="text-blue-600 font-medium">{porte.fournisseur}</span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <Typography variant="small" className="text-primary font-semibold">
              {porte.priceRange}
            </Typography>
            <Button size="sm" variant="outline" className="text-xs">
              Voir détails
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PorteModal = ({
  porte,
  onClose,
}: {
  porte: PorteProps;
  onClose: () => void;
}) => {
  const { data: session } = useSession();

  const getPerformanceIcon = (feature: string) => {
    if (
      feature.includes("vitrage") ||
      feature.includes("Isolation") ||
      feature.includes("thermique") ||
      feature.includes("Performance")
    )
      return Thermometer;
    if (
      feature.includes("Design") ||
      feature.includes("esthétique") ||
      feature.includes("Style") ||
      feature.includes("exclusif")
    )
      return Sun;
    if (
      feature.includes("acoustique") ||
      feature.includes("Anti-bruit") ||
      feature.includes("Sécurité") ||
      feature.includes("robustesse")
    )
      return Shield;
    if (
      feature.includes("lumière") ||
      feature.includes("vision") ||
      feature.includes("vue")
    )
      return Eye;
    return Home;
  };

  const getMaterialColor = (material: string) => {
    switch (material) {
      case "aluminium": return "bg-blue-100 text-blue-800";
      case "acier": return "bg-gray-100 text-gray-800";
      case "pvc": return "bg-green-100 text-green-800";
      case "bois": return "bg-amber-100 text-amber-800";
      case "mixte-bois-alu": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-md bg-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        >
          <X size={20} />
        </button>

        <div className="flex h-full max-h-[90vh] overflow-y-auto">
          <div className="hidden md:block md:w-1/2">
            <div className="relative h-full min-h-[500px]">
              <Image
                src={porte.image}
                alt={porte.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full space-y-4 p-6 md:w-1/2">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Typography variant="h2" className="text-xl">{porte.name}</Typography>
                <div className="flex items-center gap-1">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  <Typography variant="small">
                    {porte.rating}
                  </Typography>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                <span className={cn("rounded-full px-3 py-1 text-sm capitalize", getMaterialColor(porte.material))}>
                  {porte.material.replace('-', ' ')}
                </span>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800">
                  {porte.style}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-800">
                  {porte.epaisseur}
                </span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
                  {porte.vitrage.replace('-', ' ')}
                </span>
              </div>

              <Typography variant="large" className="text-primary">
                À partir de {porte.priceRange}
              </Typography>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4">
              <div>
                <Typography
                  variant="small"
                  className="text-muted-foreground"
                >
                  Performance thermique
                </Typography>
                <Typography variant="small" className="font-semibold">
                  Ud {porte.performanceThermique}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="small"
                  className="text-muted-foreground"
                >
                  Fournisseur
                </Typography>
                <Typography variant="small" className="font-semibold text-blue-600">
                  {porte.fournisseur}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="small"
                  className="text-muted-foreground"
                >
                  Dimensions
                </Typography>
                <Typography variant="small" className="font-semibold">
                  {porte.dimensions}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="small"
                  className="text-muted-foreground"
                >
                  Épaisseur
                </Typography>
                <Typography
                  variant="small"
                  className="font-semibold"
                >
                  {porte.epaisseur}
                </Typography>
              </div>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-lg">
                Description
              </Typography>
              <Typography
                variant="p"
                className="text-muted-foreground leading-relaxed"
              >
                {porte.description}
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-3 text-lg">
                Caractéristiques principales
              </Typography>
              <div className="grid grid-cols-1 gap-2">
                {porte.features.map((feature, index) => {
                  const IconComponent = getPerformanceIcon(feature);
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <IconComponent size={16} className="text-green-600" />
                      <Typography variant="small">{feature}</Typography>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <Typography variant="h3" className="mb-3 text-lg">
                Coloris disponibles
              </Typography>
              <div className="flex flex-wrap gap-2">
                {porte.colors.map((color, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {session ? (
                <Link
                  href="/account/devis"
                  className={buttonVariants({
                    size: "default",
                    className: "flex-1 bg-primary text-white hover:bg-primary/90"
                  })}
                >
                  Demander un devis
                </Link>
              ) : (
                <Link
                  href="/auth/signin?callbackUrl=%2Faccount%2Fdevis"
                  className={buttonVariants({
                    size: "default",
                    className: "flex-1 bg-primary text-white hover:bg-primary/90"
                  })}
                >
                  Se connecter pour un devis
                </Link>
              )}
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Fermer
              </Button>
            </div>

            <div className="mt-6 rounded-lg bg-gray-50 p-4">
              <Typography variant="small" className="mb-3 font-semibold">
                Informations Segment C
              </Typography>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Home size={14} className="text-blue-600" />
                  <Typography variant="small">Fabriqué en France</Typography>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-green-600" />
                  <Typography variant="small">Sur mesure disponible</Typography>
                </div>
                <div className="flex items-center gap-2">
                  <Lock size={14} className="text-orange-600" />
                  <Typography variant="small">Serrure multi-points incluse</Typography>
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer size={14} className="text-red-600" />
                  <Typography variant="small">Conformité RT2012</Typography>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-blue-50 p-4">
              <Typography variant="small" className="mb-3 font-semibold text-blue-800">
                Contactez Segment-C pour cette porte
              </Typography>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-blue-600" />
                  <Typography variant="small">05 56 12 34 56</Typography>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-blue-600" />
                  <Typography variant="small">
                    contact@segment-c.com
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-blue-600" />
                  <Typography variant="small">
                    St Jean d'Illac, Gironde
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortesSection;