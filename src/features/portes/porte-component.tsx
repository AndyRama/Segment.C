"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { Button, buttonVariants } from "@/components/ui/button";
import { X, Star, Shield, Home, Mail, MapPin, Sun, Thermometer, Volume2, Lock, Filter } from "lucide-react";

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
}

type PorteSectionProps = {
  className?: string;
}

const PorteSection = ({ className }: PorteSectionProps) => {
  const [selectedPorte, setSelectedPorte] = useState<PorteProps | null>(null);
  const [visibleCount, setVisibleCount] = useState(40);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filters, setFilters] = useState({
    material: "all",
    vitrage: "all",
    category: "all",
    style: "all"
  });

  const portes: PorteProps[] = [
    // PORTES ALUMINIUM
    {
      id: "SC001",
      name: "ABLETTE",
      category: "porte-entree",
      material: "acier",
      style: "classique",
      vitrage: "triple-vitrage",
      epaisseur: "48mm",
      image: "images/portes/ablette.jpg",
      colors: ["Gris anthracite", "Blanc", "Bronze", "Noir"],
      features: ["Triple vitrage feuilleté", "Petits bois plombs", "Performance thermique", "Cadre mouluré"],
      description: "Porte acier avec dormant alu, vitrage avec petits bois plombs intégrés dans un cadre mouluré.",
      priceRange: "1800€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "Sy baie",
      isPopular: true,
    },
    {
      id: "SC002",
      name: "ORPHIE 80",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "triple-vitrage",
      epaisseur: "80mm",
      image: "images/portes/orphie-80.jpg",
      colors: ["Anthracite", "Blanc", "Bronze", "Gris"],
      features: ["Design exclusif", "Ouvrant rainuré", "Demi-lune vitrée", "Embouts inox"],
      description: "Design exclusif, ouvrant rainuré, demi-lune vitrée avec triple vitrage feuilleté sablé.",
      priceRange: "2200€",
      rating: 4.8,
      dimensions: "H: 1920-2250mm, L: 780-1000mm",
      performanceThermique: "1.2 W/(m².K)",
      fournisseur: "Sy baie",
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
      image: "images/portes/blennie-80.webp",
      colors: ["Gris clair", "Blanc", "Anthracite", "Bronze"],
      features: ["Design exclusif Sy baie", "Lignes épurées", "Grande surface vitrée", "Profilés fins"],
      description: "Design exclusif Sy baie avec lignes épurées pour un maximum de luminosité.",
      priceRange: "2100€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.2 W/(m².K)",
      fournisseur: "Sy baie",
    },
    {
      id: "SW004",
      name: "MOSTELLE 80",
      category: "porte-entree",
      material: "aluminium",
      style: "contemporain",
      vitrage: "double-vitrage",
      epaisseur: "80mm",
      image: "images/portes//mostelle-80.webp",
      colors: ["Anthracite", "Blanc", "Gris", "Bronze"],
      features: ["Design exclusif", "Style moderne", "Haute performance", "Finition premium"],
      description: "Design exclusif aluminium au style moderne avec finition premium.",
      priceRange: "2150€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.2 W/(m².K)",
      fournisseur: "Sy baie",
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
      fournisseur: "Sy baie",
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
      fournisseur: "Sy baie",
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
      fournisseur: "Sy baie",
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
      features: ["Conception exclusive Sy baie", "Triple vitrage", "Design unique", "Haute performance"],
      description: "Conception exclusive Sy baie avec design unique et haute performance thermique.",
      priceRange: "2300€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.2 W/(m².K)",
      fournisseur: "Sy baie",
    },
    {
      id: "SC009",
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
      fournisseur: "Sy baie",
    },
    {
      id: "SC010",
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
      fournisseur: "Sy baie",
    },
    // PORTES ACIER
    {
      id: "SC020",
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
      fournisseur: "Sy baie",
    },
    {
      id: "SC021",
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
      fournisseur: "Sy baie",
    },
    // PORTES PVC
    {
      id: "SC018",
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
      fournisseur: "Sy baie",
    },
    {
      id: "SC019",
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
      fournisseur: "Sy baie",
    },
    // PORTES BOIS
    {
      id: "SC026",
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
      fournisseur: "Sy baie",
      isPopular: true,
    },
    {
      id: "SC027",
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
      fournisseur: "Sy baie",
    },
    // PORTES MIXTES
    {
      id: "SC016",
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
      fournisseur: "Sy baie",
      isNew: true,
    },
    {
      id: "SC017",
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
      fournisseur: "Sy baie",
      isPopular: true,
    },
    // PORTES ACIER (suite)
    {
      id: "SC022",
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
      id: "SC023",
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
      id: "SC024",
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
      id: "SC025",
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
      id: "SC011",
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
      id: "SC012",
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
      id: "SC013",
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
      id: "SC014",
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
      id: "SC015",
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
      id: "SC028",
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
      id: "SC029",
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
      id: "SC051",
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
      id: "SC052",
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
      id: "SC061",
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
      id: "SC034",
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
      id: "SC075",
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
      id: "SC038",
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
      id: "SG153",
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
      id: "SC032",
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
      id: "SC033",
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
      id: "SG121",
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
      id: "SC099",
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
      id: "SG100",
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
      id: "SG141",
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
      id: "SG152",
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
      id: "SC042",
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
      id: "SG122",
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
      id: "SG120",
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
      id: "SG151",
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
    {
      id: "PVC001",
      name: "AIWA",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable-v7",
      epaisseur: "70mm",
      image: "/images/portes/pvc/aiwa-sable.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé V7 SAB23", "Isolation thermique renforcée", "Design contemporain", "Sécurité 5 points"],
      description: "Porte PVC contemporaine avec vitrage sablé V7 pour l'intimité et design moderne.",
      priceRange: "1490€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
      isPopular: true,
    },
    {
      id: "PVC002",
      name: "AIWA VITRAGE SABLÉ",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable",
      epaisseur: "70mm",
      image: "/images/portes/pvc/aiwa-simple.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé standard", "Économique", "Performance thermique", "Entretien facile"],
      description: "Version économique AIWA avec vitrage sablé standard pour un excellent rapport qualité-prix.",
      priceRange: "1390€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION FAURO
    {
      id: "PVC003",
      name: "FAURO",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "inserts-inox",
      epaisseur: "70mm",
      image: "/images/portes/pvc/fauro-inox.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Inserts inox en option", "Design exclusif", "Haute performance", "Style moderne"],
      description: "Design exclusif avec inserts inox pour un style moderne et sophistiqué.",
      priceRange: "1690€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC004",
      name: "FAURO VITRAGE SABLÉ V7",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable-v7",
      epaisseur: "70mm",
      image: "/images/portes/pvc/fauro-sable.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé V7 SAB3", "Meilleure isolation", "Design contemporain", "Finition premium"],
      description: "FAURO avec vitrage sablé V7 SAB3 pour une isolation thermique optimale.",
      priceRange: "1590€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "SY Baie",
      isNew: true,
    },
    {
      id: "PVC005",
      name: "FAURO VITRAGE SABLÉ",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable",
      epaisseur: "70mm",
      image: "/images/portes/pvc/fauro-standard.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé standard", "Prix attractif", "Design FAURO", "Qualité SY Baie"],
      description: "Version standard FAURO avec vitrage sablé pour un design attractif.",
      priceRange: "1490€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.7 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION GAROVE
    {
      id: "PVC006",
      name: "GAROVE",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-g200",
      epaisseur: "70mm",
      image: "/images/portes/pvc/garove-g200.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage G200", "Design moderne", "Luminosité optimale", "Style contemporain"],
      description: "Design moderne avec vitrage G200 pour une luminosité optimale.",
      priceRange: "1590€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC007",
      name: "GAROVE VITRAGE SABLÉ",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable",
      epaisseur: "70mm",
      image: "/images/portes/pvc/garove-sable.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé en option", "Design GAROVE", "Intimité préservée", "Style moderne"],
      description: "GAROVE avec vitrage sablé en option pour préserver votre intimité.",
      priceRange: "1520€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC008",
      name: "GAROVE INSERTS INOX",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "inserts-inox",
      epaisseur: "70mm",
      image: "/images/portes/pvc/garove-inox.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Inserts inox en option", "Style haut de gamme", "Design exclusif", "Finition premium"],
      description: "GAROVE avec inserts inox pour un style haut de gamme et une finition premium.",
      priceRange: "1690€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION KAWAU
    {
      id: "PVC009",
      name: "KAWAU",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "inserts-inox",
      epaisseur: "70mm",
      image: "/images/portes/pvc/kawau-inox.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Inserts inox en option", "Design contemporain", "Performance thermique", "Style unique"],
      description: "Design contemporain KAWAU avec inserts inox pour un style unique.",
      priceRange: "1650€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC010",
      name: "KAWAU VITRAGE SABLÉ",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable",
      epaisseur: "70mm",
      image: "/images/portes/pvc/kawau-sable.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé en option", "Design KAWAU", "Intimité", "Style moderne"],
      description: "KAWAU avec vitrage sablé en option pour l'intimité et le style moderne.",
      priceRange: "1580€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC011",
      name: "KAWAU VITRAGE SABLÉ V7",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable-v7",
      epaisseur: "70mm",
      image: "/images/portes/pvc/kawau-sable-v7.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé V7 SAB11", "Performance optimale", "Design unique", "Isolation renforcée"],
      description: "KAWAU avec vitrage sablé V7 SAB11 pour une performance optimale.",
      priceRange: "1620€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION LAKENA
    {
      id: "PVC012",
      name: "LAKENA",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable",
      epaisseur: "70mm",
      image: "/images/portes/pvc/lakena-sable.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé en option", "Design élégant", "Style contemporain", "Qualité SY Baie"],
      description: "Design élégant LAKENA avec vitrage sablé pour un style contemporain.",
      priceRange: "1590€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC013",
      name: "LAKENA INSERTS INOX",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "inserts-inox",
      epaisseur: "70mm",
      image: "/images/portes/pvc/lakena-inox.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Inserts inox en option", "Design premium", "Style sophistiqué", "Finition haut de gamme"],
      description: "LAKENA avec inserts inox pour un design premium et sophistiqué.",
      priceRange: "1720€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.7 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION MAEWO
    {
      id: "PVC014",
      name: "MAEWO",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable",
      epaisseur: "70mm",
      image: "/images/portes/pvc/maewo-sable.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé", "Design moderne", "Performance thermique", "Style unique"],
      description: "Design moderne MAEWO avec vitrage sablé et performance thermique optimale.",
      priceRange: "1560€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC015",
      name: "MAEWO VITRAGE SABLÉ V7",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable-v7",
      epaisseur: "70mm",
      image: "/images/portes/pvc/maewo-sable-v7.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé V7 SAB3", "Performance optimale", "Design exclusif", "Isolation renforcée"],
      description: "MAEWO avec vitrage sablé V7 SAB3 pour une performance optimale.",
      priceRange: "1620€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC016",
      name: "MAEWO INSERTS INOX",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "inserts-inox",
      epaisseur: "70mm",
      image: "/images/portes/pvc/maewo-inox.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Inserts inox en option", "Style haut de gamme", "Design MAEWO", "Finition premium"],
      description: "MAEWO avec inserts inox pour un style haut de gamme et design exclusif.",
      priceRange: "1690€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION KOMO
    {
      id: "PVC017",
      name: "KOMO",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "rainures-horizontales",
      epaisseur: "70mm",
      image: "/images/portes/pvc/komo-rainures.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Rainures horizontales", "Design unique", "Style contemporain", "Sans vitrage"],
      description: "Design unique KOMO avec rainures horizontales pour un style contemporain distinctif.",
      priceRange: "1450€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION KURIA
    {
      id: "PVC018",
      name: "KURIA",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable",
      epaisseur: "70mm",
      image: "/images/portes/pvc/kuria-sable.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé", "Design contemporain", "Performance thermique", "Style élégant"],
      description: "Design contemporain KURIA avec vitrage sablé pour un style élégant.",
      priceRange: "1520€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.7 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION MALAI
    {
      id: "PVC019",
      name: "MALAI",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable",
      epaisseur: "70mm",
      image: "/images/portes/pvc/malai-sable.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé en option", "Design moderne", "Performance optimale", "Style contemporain"],
      description: "Design moderne MALAI avec vitrage sablé pour une performance optimale.",
      priceRange: "1580€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC020",
      name: "MALAI INSERTS INOX",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "inserts-inox",
      epaisseur: "70mm",
      image: "/images/portes/pvc/malai-inox.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Inserts inox en option", "Design premium", "Style haut de gamme", "Finition exclusive"],
      description: "MALAI avec inserts inox pour un design premium et style haut de gamme.",
      priceRange: "1680€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION MIOKO
    {
      id: "PVC021",
      name: "MIOKO",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable-rainures",
      epaisseur: "70mm",
      image: "/images/portes/pvc/mioko-rainures.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé et rainures verticales", "Design unique", "Performance maximale", "Style distinctif"],
      description: "Design unique MIOKO avec vitrage sablé et rainures verticales pour un style distinctif.",
      priceRange: "1650€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "SY Baie",
      isNew: true,
    },

    // COLLECTION CLASSIQUE - ALLEMAGNE
    {
      id: "PVC022",
      name: "ALLEMAGNE LICHT",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-delta-clair",
      epaisseur: "70mm",
      image: "/images/portes/pvc/allemagne-licht.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Delta clair", "Petits bois en option", "Style classique", "Traditionnel"],
      description: "Style classique ALLEMAGNE LICHT avec vitrage Delta clair et petits bois en option.",
      priceRange: "1690€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.7 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC023",
      name: "ALLEMAGNE",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "pleine",
      epaisseur: "70mm",
      image: "/images/portes/pvc/allemagne.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Porte pleine", "Style classique", "Sécurité maximale", "Design traditionnel"],
      description: "Style classique ALLEMAGNE en version pleine pour une sécurité maximale.",
      priceRange: "1450€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION GRECE
    {
      id: "PVC024",
      name: "GRECE INSULA",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-sable-victoriana",
      epaisseur: "70mm",
      image: "/images/portes/pvc/grece-insula.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé Victoriana", "Style classique", "Motifs décoratifs", "Élégance traditionnelle"],
      description: "Style classique GRECE INSULA avec vitrage sablé Victoriana pour une élégance traditionnelle.",
      priceRange: "1750€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.7 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC025",
      name: "GRECE",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "pleine",
      epaisseur: "70mm",
      image: "/images/portes/pvc/grece.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Porte pleine", "Style grec classique", "Design traditionnel", "Sécurité"],
      description: "Style grec classique GRECE en version pleine pour un design traditionnel.",
      priceRange: "1480€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.7 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION MALDIVES
    {
      id: "PVC026",
      name: "MALDIVES LAGON",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-sable-filet",
      epaisseur: "70mm",
      image: "/images/portes/pvc/maldives-lagon.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé", "Filet de Versailles en option", "Style classique", "Élégance française"],
      description: "Style classique MALDIVES LAGON avec filet de Versailles pour une élégance française.",
      priceRange: "1680€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC027",
      name: "MALDIVES",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "pleine",
      epaisseur: "70mm",
      image: "/images/portes/pvc/maldives.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Porte pleine", "Style MALDIVES", "Design classique", "Prix attractif"],
      description: "Style MALDIVES en version pleine pour un design classique à prix attractif.",
      priceRange: "1420€",
      rating: 4.4,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.7 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION ANGLETERRE
    {
      id: "PVC028",
      name: "ANGLETERRE ORIENT",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-sable-filet",
      epaisseur: "70mm",
      image: "/images/portes/pvc/angleterre-orient.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage sablé", "Filet de Versailles en option", "Style britannique", "Classique intemporel"],
      description: "Style britannique ANGLETERRE ORIENT avec filet de Versailles pour un classique intemporel.",
      priceRange: "1720€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.7 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC029",
      name: "ANGLETERRE",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "pleine",
      epaisseur: "70mm",
      image: "/images/portes/pvc/angleterre.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Porte pleine", "Style britannique", "Design classique", "Tradition anglaise"],
      description: "Style britannique ANGLETERRE en version pleine pour un design classique traditionnel.",
      priceRange: "1520€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION PANAMA
    {
      id: "PVC030",
      name: "PANAMA",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "pleine",
      epaisseur: "70mm",
      image: "/images/portes/pvc/panama.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Porte pleine", "Style PANAMA", "Design classique", "Robustesse"],
      description: "Style PANAMA en version pleine pour un design classique et robuste.",
      priceRange: "1480€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC031",
      name: "PANAMA BALBOA",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-delta-clair",
      epaisseur: "70mm",
      image: "/images/portes/pvc/panama-balboa.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Delta Clair", "Petits bois blanc en option", "Style classique", "Luminosité"],
      description: "PANAMA BALBOA avec vitrage Delta clair et petits bois blancs pour plus de luminosité.",
      priceRange: "1680€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION ECOSSE
    {
      id: "PVC032",
      name: "ECOSSE ICE",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-delta-clair",
      epaisseur: "70mm",
      image: "/images/portes/pvc/ecosse-ice.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Delta Clair", "Petits bois laiton en option", "Performance maximale", "Style écossais"],
      description: "Style écossais ECOSSE ICE avec vitrage Delta clair et performance thermique maximale.",
      priceRange: "1750€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "SY Baie",
      isPopular: true,
    },
    {
      id: "PVC033",
      name: "ECOSSE LAC",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-delta-clair",
      epaisseur: "70mm",
      image: "/images/portes/pvc/ecosse-lac.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Delta Clair", "Style écossais", "Design traditionnel", "Élégance"],
      description: "Style écossais ECOSSE LAC avec vitrage Delta clair pour un design traditionnel élégant.",
      priceRange: "1620€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.7 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC034",
      name: "ECOSSE LOCH NESS",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-delta-clair",
      epaisseur: "70mm",
      image: "/images/portes/pvc/ecosse-loch-ness.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Delta Clair", "Petits bois laiton en option", "Style légendaire", "Tradition écossaise"],
      description: "Style légendaire ECOSSE LOCH NESS avec petits bois laiton pour la tradition écossaise.",
      priceRange: "1680€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION BULGARIE
    {
      id: "PVC035",
      name: "BULGARIE VARNA",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-sable-v7",
      epaisseur: "70mm",
      image: "/images/portes/pvc/bulgarie-varna.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage sablé V7 Rozolo", "Style bulgare", "Design unique", "Motifs spéciaux"],
      description: "Style bulgare BULGARIE VARNA avec vitrage sablé V7 Rozolo pour un design unique.",
      priceRange: "1650€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC036",
      name: "BULGARIE",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-delta-clair",
      epaisseur: "70mm",
      image: "/images/portes/pvc/bulgarie.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Delta Clair", "Style bulgare", "Design traditionnel", "Classique"],
      description: "Style bulgare BULGARIE avec vitrage Delta clair pour un design traditionnel.",
      priceRange: "1590€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION ESPAGNE
    {
      id: "PVC037",
      name: "ESPAGNE GALICE",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-delta-clair",
      epaisseur: "70mm",
      image: "/images/portes/pvc/espagne-galice.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Delta Clair", "Style espagnol", "Design méditerranéen", "Tradition ibérique"],
      description: "Style espagnol ESPAGNE GALICE avec vitrage Delta clair pour un design méditerranéen.",
      priceRange: "1620€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC038",
      name: "ESPAGNE CATALANE",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-delta-clair",
      epaisseur: "70mm",
      image: "/images/portes/pvc/espagne-catalane.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Delta Clair", "Style catalan", "Design méditerranéen", "Tradition catalane"],
      description: "Style catalan ESPAGNE CATALANE avec vitrage Delta clair pour la tradition catalane.",
      priceRange: "1640€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC039",
      name: "ESPAGNE",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-delta-clair",
      epaisseur: "70mm",
      image: "/images/portes/pvc/espagne.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Delta Clair", "Style espagnol", "Design classique", "Robustesse"],
      description: "Style espagnol ESPAGNE avec vitrage Delta clair pour un design classique robuste.",
      priceRange: "1580€",
      rating: 4.5,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION MALTE
    {
      id: "PVC040",
      name: "MALTE VOILE",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-delta-clair",
      epaisseur: "70mm",
      image: "/images/portes/pvc/malte-voile.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Delta Clair", "Petits bois blancs en option", "Style maltais", "Élégance méditerranéenne"],
      description: "Style maltais MALTE VOILE avec petits bois blancs pour une élégance méditerranéenne.",
      priceRange: "1720€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC041",
      name: "MALTE VOILES",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-delta-clair",
      epaisseur: "70mm",
      image: "/images/portes/pvc/malte-voiles.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Delta clair", "Petits bois incorporés laiton", "Style maltais", "Finition premium"],
      description: "Style maltais MALTE VOILES avec petits bois incorporés laiton pour une finition premium.",
      priceRange: "1750€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC042",
      name: "MALTE",
      category: "porte-entree",
      material: "pvc",
      style: "classique",
      vitrage: "vitrage-delta-clair",
      epaisseur: "70mm",
      image: "/images/portes/pvc/malte.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Delta Clair", "Style maltais", "Design méditerranéen", "Tradition maritime"],
      description: "Style maltais MALTE avec vitrage Delta clair pour un design méditerranéen traditionnel.",
      priceRange: "1620€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // GAMME GRAND VITRAGE - NOUVEAUX MODÈLES
    {
      id: "PVC043",
      name: "ONO",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable",
      epaisseur: "70mm",
      image: "/images/portes/pvc/ono-sable.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé", "Grand vitrage", "Luminosité maximale", "Design moderne"],
      description: "Grand vitrage ONO avec vitrage sablé pour une luminosité maximale et design moderne.",
      priceRange: "1690€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
      isNew: true,
    },
    {
      id: "PVC044",
      name: "ONO VITRAGE SABLÉ V712",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable-v712",
      epaisseur: "70mm",
      image: "/images/portes/pvc/ono-sable-v712.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage sablé V712", "Grand vitrage", "Performance optimale", "Innovation"],
      description: "ONO avec vitrage sablé V712 pour une performance optimale et grande luminosité.",
      priceRange: "1750€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.7 W/(m².K)",
      fournisseur: "SY Baie",
      isNew: true,
    },
    {
      id: "PVC045",
      name: "ONO INSERTS INOX",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "inserts-inox",
      epaisseur: "70mm",
      image: "/images/portes/pvc/ono-inox.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Inserts inox en option", "Grand vitrage", "Style premium", "Design exclusif"],
      description: "ONO avec inserts inox pour un style premium et design exclusif grand vitrage.",
      priceRange: "1790€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
      isNew: true,
    },

    // COLLECTION TANNA
    {
      id: "PVC046",
      name: "TANNA",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable",
      epaisseur: "70mm",
      image: "/images/portes/pvc/tanna-sable.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé", "Grand vitrage", "Design contemporain", "Luminosité"],
      description: "Grand vitrage TANNA avec vitrage sablé pour un design contemporain lumineux.",
      priceRange: "1650€",
      rating: 4.6,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
      isNew: true,
    },
    {
      id: "PVC047",
      name: "TANNA VITRAGE SABLÉ V7",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable-v7",
      epaisseur: "70mm",
      image: "/images/portes/pvc/tanna-sable-v7.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé V7 SAB9", "Grand vitrage", "Performance optimale", "Design exclusif"],
      description: "TANNA avec vitrage sablé V7 SAB9 pour une performance optimale grand vitrage.",
      priceRange: "1720€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
      isNew: true,
    },
    {
      id: "PVC048",
      name: "TANNA INSERTS INOX",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "inserts-inox",
      epaisseur: "70mm",
      image: "/images/portes/pvc/tanna-inox.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Inserts inox en option", "Grand vitrage", "Style haut de gamme", "Finition premium"],
      description: "TANNA avec inserts inox pour un style haut de gamme grand vitrage premium.",
      priceRange: "1780€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
      isNew: true,
    },

    // COLLECTION YULE
    {
      id: "PVC049",
      name: "YULE",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable",
      epaisseur: "70mm",
      image: "/images/portes/pvc/yule-sable.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé", "Grand vitrage", "Design moderne", "Luminosité maximale"],
      description: "Grand vitrage YULE avec vitrage sablé pour une luminosité maximale et design moderne.",
      priceRange: "1680€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.7 W/(m².K)",
      fournisseur: "SY Baie",
      isNew: true,
    },

    // COLLECTION URI
    {
      id: "PVC050",
      name: "URI",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable-inox",
      epaisseur: "70mm",
      image: "/images/portes/pvc/uri-sable-inox.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé", "Inserts inox brossés face ext.", "Grand vitrage", "Design premium"],
      description: "Grand vitrage URI avec inserts inox brossés face extérieure pour un design premium.",
      priceRange: "1820€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
      isNew: true,
    },

    // COLLECTION LUA
    {
      id: "PVC051",
      name: "LUA",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-sable-inox",
      epaisseur: "70mm",
      image: "/images/portes/pvc/lua-sable-inox.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Sablé", "Inserts inox brossés face ext.", "Grand vitrage", "Style exclusif"],
      description: "Grand vitrage LUA avec inserts inox brossés face extérieure pour un style exclusif.",
      priceRange: "1840€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
      isNew: true,
    },

    // COLLECTION KORO
    {
      id: "PVC052",
      name: "KORO",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "inserts-inox-brosse",
      epaisseur: "70mm",
      image: "/images/portes/pvc/koro-inox-brosse.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Inserts inox brossés", "Faces ext. et int.", "Grand vitrage", "Performance maximale"],
      description: "Grand vitrage KORO avec inserts inox brossés faces extérieure et intérieure.",
      priceRange: "1890€",
      rating: 4.9,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
      isNew: true,
      isPopular: true,
    },

    // COLLECTION FIDJI
    {
      id: "PVC053",
      name: "FIDJI NADI",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-delta-clair",
      epaisseur: "70mm",
      image: "/images/portes/pvc/fidji-nadi.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Delta Clair", "Grand vitrage", "Style tropical", "Luminosité optimale"],
      description: "Style tropical FIDJI NADI avec vitrage Delta clair pour une luminosité optimale.",
      priceRange: "1720€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC054",
      name: "FIDJI NADI PETITS BOIS",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-delta-clair",
      epaisseur: "70mm",
      image: "/images/portes/pvc/fidji-nadi-petits-bois.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Delta Clair", "Petits bois blanc en option", "Style tropical", "Élégance"],
      description: "FIDJI NADI avec petits bois blancs en option pour une élégance tropicale.",
      priceRange: "1780€",
      rating: 4.7,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },
    {
      id: "PVC055",
      name: "FIDJI",
      category: "porte-entree",
      material: "pvc",
      style: "contemporain",
      vitrage: "vitrage-delta-clair",
      epaisseur: "70mm",
      image: "/images/portes/pvc/fidji.jpg",
      colors: ["Blanc", "Gris Anthracite", "Chêne Doré", "Chêne Irlandais"],
      features: ["Vitrage Delta Clair", "Grand vitrage", "Performance maximale", "Design tropical"],
      description: "Grand vitrage FIDJI avec performance thermique maximale et design tropical.",
      priceRange: "1690€",
      rating: 4.8,
      dimensions: "H: 2000-2250mm, L: 800-1000mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "SY Baie",
      isPopular: true,
    },
    // COLLECTION ACIER/ALUMINIUM SY BAIE - 12 MODÈLES

    // COLLECTION VAO
    {
      id: "ACIER001",
      name: "VAO",
      category: "porte-entree",
      material: "acier-aluminium",
      style: "contemporain",
      vitrage: "pleine",
      epaisseur: "28mm",
      image: "/images/portes/acier-alu/vao.jpg",
      colors: ["RAL 9016 Blanc", "RAL 7016 Gris anthracite", "RAL 3004 Rouge pourpre", "RAL 7012 Gris basalte", "RAL 9005 Noir profond"],
      features: ["Porte pleine", "Rainures horizontales", "Aspect monobloc extérieur", "Sécurité maximale"],
      description: "Porte pleine VAO avec rainures horizontales et aspect monobloc extérieur pour sécurité maximale.",
      priceRange: "2200€",
      rating: 4.6,
      dimensions: "H: 1850-2250mm, L: 750-1050mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION FAURO
    {
      id: "ACIER002",
      name: "FAURO",
      category: "porte-entree",
      material: "acier-aluminium",
      style: "contemporain",
      vitrage: "vitrage-vertical",
      epaisseur: "28mm",
      image: "/images/portes/acier-alu/fauro.jpg",
      colors: ["RAL 9016 Blanc", "RAL 7016 Gris anthracite", "RAL 7035 Gris lumière", "RAL 9006 Gris galet", "Finitions sablées"],
      features: ["Vitrage vertical central", "Luminosité optimale", "Performance thermique variable", "Design épuré"],
      description: "FAURO avec vitrage vertical central pour luminosité optimale et performance thermique exceptionnelle.",
      priceRange: "2400€",
      rating: 4.8,
      dimensions: "H: 1850-2250mm, L: 750-1050mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "SY Baie",
      isPopular: true,
    },
    {
      id: "ACIER003",
      name: "FAURO STANDARD",
      category: "porte-entree",
      material: "acier-aluminium",
      style: "contemporain",
      vitrage: "vitrage-vertical",
      epaisseur: "28mm",
      image: "/images/portes/acier-alu/fauro-standard.jpg",
      colors: ["RAL 9016 Blanc", "RAL 7016 Gris anthracite", "RAL 7012 Gris basalte", "RAL 8019 Brun"],
      features: ["Vitrage vertical", "Version standard", "Prix attractif", "Qualité SY Baie"],
      description: "Version standard FAURO avec vitrage vertical pour un excellent rapport qualité-prix.",
      priceRange: "2100€",
      rating: 4.6,
      dimensions: "H: 1850-2250mm, L: 750-1050mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION YULE
    {
      id: "ACIER004",
      name: "YULE",
      category: "porte-entree",
      material: "acier-aluminium",
      style: "contemporain",
      vitrage: "vitrage-vertical-elance",
      epaisseur: "28mm",
      image: "/images/portes/acier-alu/yule.jpg",
      colors: ["RAL 9016 Blanc", "RAL 7016 Gris anthracite", "RAL 1015 Ivoire clair", "Finitions sablées", "Givré"],
      features: ["Vitrage vertical élancé", "Grande hauteur", "Style moderne", "Design contemporain"],
      description: "Design contemporain YULE avec vitrage vertical élancé pour grande hauteur et style moderne.",
      priceRange: "2250€",
      rating: 4.7,
      dimensions: "H: 1850-2250mm, L: 750-1050mm",
      performanceThermique: "1.4 W/(m².K)",
      fournisseur: "SY Baie",
      isNew: true,
    },

    // COLLECTION GAROVE
    {
      id: "ACIER005",
      name: "GAROVE",
      category: "porte-entree",
      material: "acier-aluminium",
      style: "contemporain",
      vitrage: "vitrage-losange",
      epaisseur: "28mm",
      image: "/images/portes/acier-alu/garove.jpg",
      colors: ["RAL 9016 Blanc", "RAL 7016 Gris anthracite", "RAL 9005 Noir profond", "Satiné", "Bleu Canon"],
      features: ["Motifs géométriques losange", "Design unique", "Modernité géométrique", "Style distinctif"],
      description: "GAROVE avec motifs géométriques losange pour un design unique et une modernité géométrique.",
      priceRange: "2300€",
      rating: 4.7,
      dimensions: "H: 1850-2250mm, L: 750-1050mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION AIWA
    {
      id: "ACIER006",
      name: "AIWA",
      category: "porte-entree",
      material: "acier-aluminium",
      style: "contemporain",
      vitrage: "vitrage-demi-lune",
      epaisseur: "28mm",
      image: "/images/portes/acier-alu/aiwa.jpg",
      colors: ["RAL 9016 Blanc", "RAL 7016 Gris anthracite", "RAL 7035 Gris lumière", "RAL 3004 Rouge pourpre"],
      features: ["Vitrage demi-lune", "Barres horizontales décoratives", "Design original", "Équilibre esthétique"],
      description: "AIWA avec vitrage demi-lune et barres horizontales décoratives pour un design original.",
      priceRange: "2350€",
      rating: 4.6,
      dimensions: "H: 1850-2250mm, L: 750-1050mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION URI
    {
      id: "ACIER007",
      name: "URI",
      category: "porte-entree",
      material: "acier-aluminium",
      style: "contemporain",
      vitrage: "vitrage-semi-circulaire",
      epaisseur: "28mm",
      image: "/images/portes/acier-alu/uri.jpg",
      colors: ["RAL 9016 Blanc", "RAL 7016 Gris anthracite", "RAL 9006 Gris galet", "Finitions sablées"],
      features: ["Vitrage semi-circulaire", "Formes douces", "Modernité", "Originalité"],
      description: "URI avec vitrage semi-circulaire pour un style doux, moderne et original.",
      priceRange: "2320€",
      rating: 4.7,
      dimensions: "H: 1850-2250mm, L: 750-1050mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION LUA
    {
      id: "ACIER008",
      name: "LUA",
      category: "porte-entree",
      material: "acier-aluminium",
      style: "contemporain",
      vitrage: "vitrage-carres-verticaux",
      epaisseur: "28mm",
      image: "/images/portes/acier-alu/lua.jpg",
      colors: ["RAL 9016 Blanc", "RAL 7016 Gris anthracite", "RAL 7012 Gris basalte", "RAL 8019 Brun"],
      features: ["Série de carrés verticaux", "Rythme architectural", "Répétition géométrique", "Harmonie"],
      description: "LUA avec série de carrés verticaux pour un rythme architectural et une répétition géométrique harmonieuse.",
      priceRange: "2280€",
      rating: 4.6,
      dimensions: "H: 1850-2250mm, L: 750-1050mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION MALAI
    {
      id: "ACIER009",
      name: "MALAI",
      category: "porte-entree",
      material: "acier-aluminium",
      style: "contemporain",
      vitrage: "vitrage-carres-multiples",
      epaisseur: "28mm",
      image: "/images/portes/acier-alu/malai.jpg",
      colors: ["RAL 9016 Blanc", "RAL 7016 Gris anthracite", "RAL 3004 Rouge pourpre", "RAL 9005 Noir profond"],
      features: ["Carrés multiples", "Vitrage vertical", "Dynamisme", "Composition équilibrée"],
      description: "MALAI avec carrés multiples et vitrage vertical pour dynamisme et composition équilibrée.",
      priceRange: "2260€",
      rating: 4.6,
      dimensions: "H: 1850-2250mm, L: 750-1050mm",
      performanceThermique: "1.5 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION MAEWO
    {
      id: "ACIER010",
      name: "MAEWO",
      category: "porte-entree",
      material: "acier-aluminium",
      style: "contemporain",
      vitrage: "vitrage-central",
      epaisseur: "28mm",
      image: "/images/portes/acier-alu/maewo.jpg",
      colors: ["RAL 9016 Blanc", "RAL 7016 Gris anthracite", "RAL 7035 Gris lumière", "Givré", "Satiné"],
      features: ["Large vitrage central", "Rectangle", "Maximum de lumière", "Simplicité"],
      description: "MAEWO avec large vitrage central rectangulaire pour maximum de lumière et simplicité.",
      priceRange: "2240€",
      rating: 4.6,
      dimensions: "H: 1850-2250mm, L: 750-1050mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION KAWAU
    {
      id: "ACIER011",
      name: "KAWAU",
      category: "porte-entree",
      material: "acier-aluminium",
      style: "contemporain",
      vitrage: "vitrage-carres-empiles",
      epaisseur: "28mm",
      image: "/images/portes/acier-alu/kawau.jpg",
      colors: ["RAL 9016 Blanc", "RAL 7016 Gris anthracite", "RAL 1015 Ivoire clair", "Finitions sablées"],
      features: ["Carrés empilés", "Effet vertical", "Hauteur accentuée", "Géométrie pure"],
      description: "KAWAU avec carrés empilés verticalement pour effet de hauteur et géométrie pure.",
      priceRange: "2200€",
      rating: 4.5,
      dimensions: "H: 1850-2250mm, L: 750-1050mm",
      performanceThermique: "1.7 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION LAKENA
    {
      id: "ACIER012",
      name: "LAKENA",
      category: "porte-entree",
      material: "acier-aluminium",
      style: "contemporain",
      vitrage: "vitrage-carres-espaces",
      epaisseur: "28mm",
      image: "/images/portes/acier-alu/lakena.jpg",
      colors: ["RAL 9016 Blanc", "RAL 7016 Gris anthracite", "RAL 9006 Gris galet", "RAL 8019 Brun"],
      features: ["Carrés espacés", "Rythme régulier", "Espacement maîtrisé", "Élégance géométrique"],
      description: "LAKENA avec carrés espacés régulièrement pour rythme visuel et élégance géométrique.",
      priceRange: "2250€",
      rating: 4.6,
      dimensions: "H: 1850-2250mm, L: 750-1050mm",
      performanceThermique: "1.6 W/(m².K)",
      fournisseur: "SY Baie",
    },

    // COLLECTION KORO
    {
      id: "ACIER013",
      name: "KORO",
      category: "porte-entree",
      material: "acier-aluminium",
      style: "contemporain",
      vitrage: "rainures-horizontales",
      epaisseur: "28mm",
      image: "/images/portes/acier-alu/koro.jpg",
      colors: ["RAL 9016 Blanc", "RAL 7016 Gris anthracite", "RAL 9005 Noir profond", "Finitions sablées", "Satiné"],
      features: ["Rainures horizontales", "Lignes continues", "Style linéaire", "Épurement maximal"],
      description: "KORO avec rainures horizontales continues pour style linéaire et épurement maximal.",
      priceRange: "2450€",
      rating: 4.8,
      dimensions: "H: 1850-2250mm, L: 750-1050mm",
      performanceThermique: "1.3 W/(m².K)",
      fournisseur: "SY Baie",
      isPopular: true,
    },
  ];

  const materialFilters = [
    { key: "all", label: "Tous matériaux" },
    { key: "aluminium", label: "Aluminium" },
    { key: "acier", label: "Acier" },
    { key: "acier-aluminium", label: "Acier-Aluminium" },
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
    { key: "vitrage-delta-clair", label: "Vitrage Delta Clair" },
    { key: "inserts-inox", label: "Inserts Inox" },
    { key: "pleine", label: "Pleine" },
    { key: "double-vitrage", label: "Double vitrage" },
    { key: "triple-vitrage", label: "Triple vitrage" },
    { key: "vitrage-sable", label: "Vitrage Sablé" },
    { key: "vitrage-sable-v7", label: "Vitrage Sablé V7" },
  ];

  const filteredPortes = portes.filter((porte) => {
    return (
      (filters.material === "all" || porte.material === filters.material) &&
      (filters.style === "all" || porte.style === filters.style) &&
      (filters.vitrage === "all" || porte.vitrage === filters.vitrage)
    );
  });

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 40, filteredPortes.length));
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setVisibleCount(40);
  };

  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-20", className)}>
      <PorteHeader />
      
      <div className="flex gap-8 mt-8">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <PortesFiltersSidebar
            materialFilters={materialFilters}
            styleFilters={styleFilters}
            vitrageFilters={vitrageFilters}
            activeFilters={filters}
            onFilterChange={handleFilterChange}
          />
        </aside>
      
        <div className="flex-1">
          <div className="lg:hidden mb-4">
            <Button
              onClick={() => setShowMobileFilters(true)}
              variant="outline"
              className="w-full"
            >
              <Filter size={16} className="mr-2" />
              Filtres ({Object.values(filters).filter(f => f !== 'all').length})
            </Button>
          </div>

          <PortesGrid 
            portes={filteredPortes.slice(0, visibleCount)}
            onPorteClick={setSelectedPorte}
          />
          
          {visibleCount < filteredPortes.length && (
            <div className="mt-8 flex justify-center">
              <Button
                onClick={handleShowMore}
                className="bg-primary text-white hover:bg-primary/90"
              >
                Voir plus de portes
              </Button>
            </div>
          )}

          <div className="mt-8 text-center">
            <Typography variant="small" className="text-muted-foreground">
              {filteredPortes.length} portes sur {portes.length} modèles disponibles
            </Typography>
          </div>
        </div>
      </div>

      {selectedPorte && (
        <PorteModal
          porte={selectedPorte}
          onClose={() => setSelectedPorte(null)}
        />
      )}

      <MobileFiltersModal
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        materialFilters={materialFilters}
        styleFilters={styleFilters}
        vitrageFilters={vitrageFilters}
        activeFilters={filters}
        onFilterChange={(filterType, value) => {
          handleFilterChange(filterType, value);
          setShowMobileFilters(false);
        }}
      />
    </section>
  );
};

const MobileFiltersModal = ({
  isOpen,
  onClose,
  materialFilters,
  styleFilters,
  vitrageFilters,
  activeFilters,
  onFilterChange,
}: {
  isOpen: boolean;
  onClose: () => void;
  materialFilters: { key: string; label: string }[];
  styleFilters: { key: string; label: string }[];
  vitrageFilters: { key: string; label: string }[];
  activeFilters: { material: string; style: string; vitrage: string };
  onFilterChange: (filterType: string, value: string) => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 lg:hidden">
      <div className="w-full max-h-[80vh] overflow-y-auto rounded-t-2xl bg-white">
        <div className="sticky top-0 bg-white border-b px-4 py-4 flex items-center justify-between">
          <Typography variant="h3" className="text-lg font-semibold">
            Filtres
          </Typography>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4 space-y-6">
          <div>
            <Typography variant="small" className="font-medium mb-3 text-muted-foreground">
              Matériaux
            </Typography>
            <div className="space-y-2">
              {materialFilters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => onFilterChange("material", filter.key)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-sm transition-colors",
                    activeFilters.material === filter.key
                      ? "bg-primary text-white font-medium"
                      : "bg-gray-50 hover:bg-gray-100"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <Typography variant="small" className="font-medium mb-3 text-muted-foreground">
              Style
            </Typography>
            <div className="space-y-2">
              {styleFilters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => onFilterChange("style", filter.key)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-sm transition-colors",
                    activeFilters.style === filter.key
                      ? "bg-primary text-white font-medium"
                      : "bg-gray-50 hover:bg-gray-100"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <Typography variant="small" className="font-medium mb-3 text-muted-foreground">
              Vitrage
            </Typography>
            <div className="space-y-2">
              {vitrageFilters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => onFilterChange("vitrage", filter.key)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-sm transition-colors",
                    activeFilters.vitrage === filter.key
                      ? "bg-primary text-white font-medium"
                      : "bg-gray-50 hover:bg-gray-100"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {(activeFilters.material !== 'all' || activeFilters.style !== 'all' || activeFilters.vitrage !== 'all') && (
            <Button
              variant="outline"
              onClick={() => {
                onFilterChange('material', 'all');
                onFilterChange('style', 'all');
                onFilterChange('vitrage', 'all');
              }}
              className="w-full"
            >
              Réinitialiser les filtres
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const PorteHeader = () => (
  <div className="mb-12 space-y-4 text-center">
    <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
      Notre sélection de portes
    </Typography>
    <Typography variant="large" className="mx-auto max-w-3xl text-muted-foreground">
      Découvrez notre sélection de + de 115 portes d'entrée.
      Fabriquées en France, sur mesure, dans 5 matériaux : aluminium, acier, PVC, bois et mixte.
      Styles contemporains, classiques ou traditionnels pour tous vos projets.
    </Typography>
    <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
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
    <div className="relative mt-8">
      <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/porte.jpg"
          alt="Porte d'entrée moderne avec végétation"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  </div>
);

const PortesFiltersSidebar = ({
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
  <div className="sticky top-4 space-y-6 bg-white rounded-lg border p-6 shadow-sm">
    <div>
      <Typography variant="h3" className="text-lg font-semibold mb-4">
        Filtres
      </Typography>
    </div>

    <div className="space-y-4">
      <div>
        <Typography variant="small" className="font-medium mb-3 text-muted-foreground">
          Matériaux
        </Typography>
        <div className="space-y-2">
          {materialFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => onFilterChange("material", filter.key)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                activeFilters.material === filter.key
                  ? "bg-primary text-white font-medium"
                  : "hover:bg-gray-100"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t pt-4">
        <Typography variant="small" className="font-medium mb-3 text-muted-foreground">
          Style
        </Typography>
        <div className="space-y-2">
          {styleFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => onFilterChange("style", filter.key)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                activeFilters.style === filter.key
                  ? "bg-primary text-white font-medium"
                  : "hover:bg-gray-100"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t pt-4">
        <Typography variant="small" className="font-medium mb-3 text-muted-foreground">
          Vitrage
        </Typography>
        <div className="space-y-2">
          {vitrageFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => onFilterChange("vitrage", filter.key)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                activeFilters.vitrage === filter.key
                  ? "bg-primary text-white font-medium"
                  : "hover:bg-gray-100"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>

    {(activeFilters.material !== 'all' || activeFilters.style !== 'all' || activeFilters.vitrage !== 'all') && (
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          onFilterChange('material', 'all');
          onFilterChange('style', 'all');
          onFilterChange('vitrage', 'all');
        }}
        className="w-full"
      >
        Réinitialiser les filtres
      </Button>
    )}
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
  onClick 
}: {
  porte: PorteProps;
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
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1">
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
        
        <div className="relative h-64">
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
            <h3 className="text-lg font-semibold">{porte.name}</h3>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{porte.rating}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-blue-100 px-2 py-1 capitalize text-blue-800">
              {porte.material}
            </span>
            <span className="rounded-full bg-green-100 px-2 py-1 capitalize text-green-800">
              {porte.vitrage}
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 capitalize text-purple-800">
              {porte.style}
            </span>
          </div>
          
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {porte.description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Thermometer size={12} />
              {porte.performanceThermique}
            </span>
            <span className="text-blue-600 font-medium">{porte.fournisseur}</span>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="font-semibold text-primary">{porte.priceRange}</span>
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
  onClose 
}: {
  porte: PorteProps;
  onClose: () => void;
}) => {
  const { data: session } = useSession();

  const getPerformanceIcon = (feature: string) => {
    if (feature.includes('vitrage') || feature.includes('Isolation')) return Thermometer;
    if (feature.includes('sécurisé') || feature.includes('Anti-effraction') || feature.includes('Sécurité')) return Lock;
    if (feature.includes('Design') || feature.includes('esthétique')) return Sun;
    if (feature.includes('phonique') || feature.includes('acoustique')) return Volume2;
    return Shield;
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

        <div className="flex h-full max-h-[90vh] overflow-y-auto flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-full md:min-h-[500px]">
              <Image
                src={porte.image}
                alt={porte.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full space-y-6 p-6 md:w-1/2 overflow-y-auto">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Typography variant="h2">{porte.name}</Typography>
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <Typography variant="small">{porte.rating}</Typography>
                </div>
              </div>
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm capitalize text-blue-800">
                  {porte.material}
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm capitalize text-green-800">
                  {porte.vitrage}
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-1 text-sm capitalize text-purple-800">
                  {porte.style}
                </span>
              </div>
              
              <Typography variant="large" className="text-primary">{porte.priceRange}</Typography>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4">
              <div>
                <Typography variant="small" className="text-muted-foreground">Performance thermique</Typography>
                <Typography variant="small" className="font-semibold">{porte.performanceThermique}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Fournisseur</Typography>
                <Typography variant="small" className="font-semibold text-blue-600">{porte.fournisseur}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Dimensions</Typography>
                <Typography variant="small" className="font-semibold">{porte.dimensions}</Typography>
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground">Style</Typography>
                <Typography variant="small" className="font-semibold capitalize">{porte.style}</Typography>
              </div>
            </div>

            <div>
              <Typography variant="h3" className="mb-2">Description</Typography>
              <Typography variant="p" className="leading-relaxed text-muted-foreground">
                {porte.description}
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-3">Caractéristiques</Typography>
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
              <Typography variant="h3" className="mb-3">Couleurs disponibles</Typography>
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
              <h4 className="mb-3 font-semibold">Ou contactez-nous directement</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>St Jean d'Illac, Gironde</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorteSection;