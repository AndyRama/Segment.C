import { logger } from "@/lib/logger";
import { faker } from "@faker-js/faker";
import { nanoid } from "nanoid";
import { prisma } from "../src/lib/prisma";
import type { ProductCategory, ProductMaterial, ProductSeller, VitragType, OpeningType } from "@/generated/prisma";

// Set seed for reproducibility
faker.seed(123);

// Type for porte data before adding ID
type PorteData = {
  name: string;
  category: ProductCategory;
  material: ProductMaterial;
  seller: ProductSeller;
  description: string;
  priceRange: string;
  rating: number;
  dimensions: string;
  performance: string;
  epaisseur: string;
  image: string;
  colors: string[];
  features: string[];
  isPopular: boolean;
  isNew: boolean;
  isActive: boolean;
};

// Type for fenetre data before adding ID
type FenetreData = {
  name: string;
  category: ProductCategory;
  material: ProductMaterial;
  seller: ProductSeller;
  description: string;
  priceRange: string;
  rating: number;
  dimensions: string;
  performance: string;
  vitrage: VitragType;
  uw?: string; // Coefficient thermique
  ouverture?: OpeningType; // Type d'ouverture
  image: string;
  colors: string[];
  features: string[];
  isPopular: boolean;
  isNew: boolean;
  isActive: boolean;
};

// Données des portes
const portesData: PorteData[] = [
  // 1. ABLETTE
  {
    name: "ABLETTE",
    category: "PORTE_ENTRER",
    material: "ACIER",
    seller: "SWAO",
    description: "Porte acier traditionnelle avec dormant alu, vitrage avec petits bois plombs intégrés dans un cadre mouluré.",
    priceRange: "1400€ - 1700€",
    rating: 4.7,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "48mm",
    performance: "1.4 W/(m².K)",
    image: "images/portes/ablette.jpg",
    colors: ["Gris 7016", "Blanc", "Bronze", "Noir"],
    features: ["Triple vitrage feuilleté", "Petits bois plombs", "Performance thermique", "Style traditionnel"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 2. AGOUTI
  {
    name: "AGOUTI",
    category: "PORTE_ENTRER",
    material: "ACIER",
    seller: "SWAO",
    description: "Porte d'entrée acier contemporaine au design moderne.",
    priceRange: "1400€ - 1700€",
    rating: 4.6,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "48mm",
    performance: "1.5 W/(m².K)",
    image: "images/portes/agouti.webp",
    colors: ["Bleu 5003", "Gris", "Blanc", "Anthracite"],
    features: ["Design contemporain", "Acier robuste", "Isolation thermique", "Sécurité renforcée"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 3. ALESIA 60
  {
    name: "ALESIA 60",
    category: "PORTE_ENTRER",
    material: "ALUMINIUM",
    seller: "SWAO",
    description: "Porte d'entrée aluminium contemporaine 60mm avec finition satinée.",
    priceRange: "1600€ - 1900€",
    rating: 4.7,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "60mm",
    performance: "1.3 W/(m².K)",
    image: "images/portes/alesia-60.webp",
    colors: ["Gris 7035", "Blanc", "Anthracite", "Bronze"],
    features: ["Aluminium haute qualité", "Design épuré", "Performance thermique", "Finition satinée"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 4. ALIÉNOR 80
  {
    name: "ALIÉNOR 80",
    category: "PORTE_VITRAGE",
    material: "ALUMINIUM",
    seller: "SWAO",
    description: "Porte d'entrée aluminium traditionnelle 80mm avec élégance classique.",
    priceRange: "1800€ - 2100€",
    rating: 4.8,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "80mm",
    performance: "1.2 W/(m².K)",
    image: "images/portes/alienor-80.jpg",
    colors: ["Brun 8019", "Blanc", "Gris", "Noir"],
    features: ["Épaisseur 80mm", "Style traditionnel", "Excellente isolation", "Finition premium"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 5. ANCOLIE
  {
    name: "ANCOLIE",
    category: "PORTE_ENTRER",
    material: "PVC",
    seller: "SWAO",
    description: "Porte d'entrée PVC contemporaine au design simple et élégant.",
    priceRange: "1200€ - 1500€",
    rating: 4.5,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "70mm",
    performance: "1.4 W/(m².K)",
    image: "images/portes/ancolie.jpg",
    colors: ["Blanc 9016", "Gris", "Anthracite"],
    features: ["PVC haute qualité", "Entretien facile", "Bon rapport qualité-prix", "Design contemporain"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 6. ANEMONE
  {
    name: "ANEMONE",
    category: "PORTE_VITRAGE",
    material: "PVC",
    seller: "SWAO",
    description: "Porte d'entrée PVC traditionnelle avec charme classique.",
    priceRange: "1200€ - 1500€",
    rating: 4.6,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "70mm",
    performance: "1.5 W/(m².K)",
    image: "images/portes/anemone.jpg",
    colors: ["Blanc 9016", "Crème", "Gris clair"],
    features: ["Style traditionnel", "PVC durable", "Isolation thermique", "Prix attractif"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 7. APOLLINE 80
  {
    name: "APOLLINE 80",
    category: "PORTE_ENTRER",
    material: "ALUMINIUM",
    seller: "SWAO",
    description: "Porte d'entrée aluminium traditionnelle 80mm avec caractère.",
    priceRange: "1800€ - 2100€",
    rating: 4.7,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "80mm",
    performance: "1.2 W/(m².K)",
    image: "images/portes/apolline-80.jpg",
    colors: ["Rouge 3004", "Blanc", "Gris", "Noir"],
    features: ["Design traditionnel", "Épaisseur 80mm", "Robustesse aluminium", "Finition texturée"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 8. ARCACHON
  {
    name: "ARCACHON",
    category: "PORTE_ENTRER",
    material: "BOIS",
    seller: "SWAO",
    description: "Porte d'entrée bois contemporaine avec authenticité naturelle.",
    priceRange: "2000€ - 2400€",
    rating: 4.8,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "68mm",
    performance: "1.3 W/(m².K)",
    image: "images/portes/arcachon.jpg",
    colors: ["RAL illimité"],
    features: ["Bois massif", "RAL au choix", "Charme naturel", "Isolation performante"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 9. ARGENS
  {
    name: "ARGENS",
    category: "PORTE_ENTRER",
    material: "BOIS",
    seller: "SWAO",
    description: "Porte d'entrée bois contemporaine avec élégance naturelle.",
    priceRange: "2000€ - 2400€",
    rating: 4.7,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "68mm",
    performance: "1.3 W/(m².K)",
    image: "images/portes/argens.jpg",
    colors: ["RAL illimité"],
    features: ["Essence de bois noble", "Design contemporain", "Personnalisable", "Performance thermique"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 10. ARIANE 80
  {
    name: "ARIANE 80",
    category: "PORTE_VITRAGE",
    material: "ALUMINIUM",
    seller: "SWAO",
    description: "Porte d'entrée aluminium traditionnelle 80mm avec raffinement.",
    priceRange: "1800€ - 2100€",
    rating: 4.7,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "80mm",
    performance: "1.2 W/(m².K)",
    image: "images/portes/ariane-80.jpg",
    colors: ["Bleu 2700", "Blanc", "Gris", "Anthracite"],
    features: ["Épaisseur 80mm", "Style raffiné", "Aluminium haute performance", "Finition texturée"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 11. ARUS
  {
    name: "ARUS",
    category: "PORTE_ENTRER",
    material: "ACIER",
    seller: "SWAO",
    description: "Porte d'entrée acier contemporaine au design épuré.",
    priceRange: "1400€ - 1700€",
    rating: 4.6,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "48mm",
    performance: "1.5 W/(m².K)",
    image: "images/portes/arus.jpg",
    colors: ["Gris 7004", "Blanc", "Anthracite", "Noir"],
    features: ["Acier robuste", "Design minimaliste", "Sécurité optimale", "Finition satinée"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 12. ASTEN-19
  {
    name: "ASTEN-19",
    category: "PORTE_ENTRER",
    material: "ACIER",
    seller: "SWAO",
    description: "Porte d'entrée acier contemporaine modèle 19.",
    priceRange: "1400€ - 1700€",
    rating: 4.7,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "48mm",
    performance: "1.4 W/(m².K)",
    image: "images/portes/asten-19.jpg",
    colors: ["Gris 7039", "Blanc", "Anthracite", "Noir"],
    features: ["Modèle contemporain", "Acier de qualité", "Performance thermique", "Design moderne"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 13. AURORA
  {
    name: "AURORA",
    category: "PORTE_VITRAGE",
    material: "ACIER",
    seller: "SWAO",
    description: "Porte d'entrée acier traditionnelle avec élégance intemporelle.",
    priceRange: "1400€ - 1700€",
    rating: 4.6,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "48mm",
    performance: "1.4 W/(m².K)",
    image: "images/portes/aurora.jpg",
    colors: ["Rouge 3004", "Blanc", "Gris", "Noir"],
    features: ["Style traditionnel", "Robustesse acier", "Finition texturée", "Sécurité renforcée"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 14. BALISTE-NOVA
  {
    name: "BALISTE-NOVA",
    category: "PORTE_VITRAGE",
    material: "ALUMINIUM",
    seller: "SWAO",
    description: "Porte d'entrée aluminium contemporaine collection Nova.",
    priceRange: "1700€ - 2000€",
    rating: 4.7,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "60mm",
    performance: "1.3 W/(m².K)",
    image: "images/portes/baliste-nova.jpg",
    colors: ["Gris 7016", "Blanc", "Anthracite", "Bronze"],
    features: ["Collection Nova", "Design contemporain", "Aluminium premium", "Performance optimale"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 15. BANABA
  {
    name: "BANABA",
    category: "PORTE_ENTRER",
    material: "ACIER",
    seller: "SWAO",
    description: "Porte d'entrée acier contemporaine au style moderne.",
    priceRange: "1400€ - 1700€",
    rating: 4.6,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "48mm",
    performance: "1.4 W/(m².K)",
    image: "images/portes/banaba.jpg",
    colors: ["Gris 7035", "Blanc", "Anthracite", "Noir"],
    features: ["Design moderne", "Acier robuste", "Finition satinée", "Isolation thermique"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 16. BARDANE 1
  {
    name: "BARDANE 1",
    category: "PORTE_VITRAGE",
    material: "PVC",
    seller: "SWAO",
    description: "Porte d'entrée PVC traditionnelle modèle 1.",
    priceRange: "1200€ - 1500€",
    rating: 4.5,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "70mm",
    performance: "1.5 W/(m².K)",
    image: "images/portes/bardane-1.jpg",
    colors: ["Blanc 9016", "Gris", "Crème"],
    features: ["PVC qualité", "Style traditionnel", "Entretien facile", "Prix compétitif"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 17. BARDANE 2
  {
    name: "BARDANE 2",
    category: "PORTE_VITRAGE",
    material: "PVC",
    seller: "SWAO",
    description: "Porte d'entrée PVC traditionnelle modèle 2.",
    priceRange: "1200€ - 1500€",
    rating: 4.5,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "70mm",
    performance: "1.5 W/(m².K)",
    image: "images/portes/bardane-2.jpg",
    colors: ["Blanc 9016", "Gris", "Crème"],
    features: ["Variante modèle 2", "PVC durable", "Design classique", "Isolation performante"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 18. BARDANE 3
  {
    name: "BARDANE 3",
    category: "PORTE_VITRAGE",
    material: "PVC",
    seller: "SWAO",
    description: "Porte d'entrée PVC traditionnelle modèle 3.",
    priceRange: "1200€ - 1500€",
    rating: 4.5,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "70mm",
    performance: "1.5 W/(m².K)",
    image: "images/portes/bardane-3.jpg",
    colors: ["Blanc 9016", "Gris", "Crème"],
    features: ["Variante modèle 3", "PVC résistant", "Style intemporel", "Bon rapport qualité-prix"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 19. BEAUSSET
  {
    name: "BEAUSSET",
    category: "PORTE_ENTRER",
    material: "BOIS",
    seller: "SWAO",
    description: "Porte d'entrée bois traditionnelle avec cachet authentique.",
    priceRange: "2000€ - 2400€",
    rating: 4.8,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "68mm",
    performance: "1.3 W/(m².K)",
    image: "images/portes/beausset.jpg",
    colors: ["RAL illimité"],
    features: ["Bois noble", "Style traditionnel", "Personnalisable", "Charme naturel"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 20. BELAIR
  {
    name: "BELAIR",
    category: "PORTE_VITRAGE",
    material: "PVC",
    seller: "SWAO",
    description: "Porte d'entrée PVC traditionnelle avec élégance simple.",
    priceRange: "1200€ - 1500€",
    rating: 4.6,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "70mm",
    performance: "1.5 W/(m².K)",
    image: "images/portes/belair.jpg",
    colors: ["Blanc 9016", "Gris", "Anthracite"],
    features: ["PVC haute qualité", "Design élégant", "Entretien minimal", "Isolation thermique"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 21. BELLIS
  {
    name: "BELLIS",
    category: "PORTE_ENTRER",
    material: "PVC",
    seller: "SWAO",
    description: "Porte d'entrée PVC traditionnelle au charme discret.",
    priceRange: "1200€ - 1500€",
    rating: 4.5,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "70mm",
    performance: "1.5 W/(m².K)",
    image: "images/portes/bellis.jpg",
    colors: ["Blanc 9016", "Gris", "Crème"],
    features: ["Style discret", "PVC durable", "Prix accessible", "Performance thermique"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 22. BLENNIE 80
  {
    name: "BLENNIE 80",
    category: "PORTE_VITRAGE",
    material: "ALUMINIUM",
    seller: "SWAO",
    description: "Porte d'entrée aluminium traditionnelle 80mm avec grande surface vitrée.",
    priceRange: "1900€ - 2200€",
    rating: 4.8,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "80mm",
    performance: "1.2 W/(m².K)",
    image: "images/portes/blennie-80.jpg",
    colors: ["Bronze", "Gris", "Blanc", "Anthracite"],
    features: ["Grande surface vitrée", "Épaisseur 80mm", "Luminosité optimale", "Design exclusif"],
    isPopular: true,
    isNew: false,
    isActive: true,
  },
  // 23. BLENNIE MIXTE
  {
    name: "BLENNIE MIXTE",
    category: "PORTE_VITRAGE",
    material: "MIXTE",
    seller: "SWAO",
    description: "Porte d'entrée mixte alu/bois traditionnelle avec vitrage généreux.",
    priceRange: "2100€ - 2400€",
    rating: 4.8,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "80mm",
    performance: "1.3 W/(m².K)",
    image: "images/portes/blennie-mixte.jpg",
    colors: ["Bronze", "Gris", "Blanc", "Bois naturel"],
    features: ["Mixte alu/bois", "Double avantage", "Grande surface vitrée", "Performance premium"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 24. BOTIA
  {
    name: "BOTIA",
    category: "PORTE_ENTRER",
    material: "ACIER",
    seller: "SWAO",
    description: "Porte d'entrée acier contemporaine au design affirmé.",
    priceRange: "1400€ - 1700€",
    rating: 4.7,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "48mm",
    performance: "1.5 W/(m².K)",
    image: "images/portes/botia.jpg",
    colors: ["Rouge 3004", "Gris", "Blanc", "Anthracite"],
    features: ["Design affirmé", "Acier robuste", "Finition texturée", "Sécurité maximale"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 25. BUKA
  {
    name: "BUKA",
    category: "PORTE_ENTRER",
    material: "ACIER",
    seller: "SWAO",
    description: "Porte d'entrée acier contemporaine avec lignes épurées.",
    priceRange: "1400€ - 1700€",
    rating: 4.6,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "48mm",
    performance: "1.4 W/(m².K)",
    image: "images/portes/buka.jpg",
    colors: ["Gris 7030", "Blanc", "Anthracite", "Noir"],
    features: ["Lignes épurées", "Acier de qualité", "Design moderne", "Performance thermique"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },

  // 26. CADIX
  {
    name: "CADIX",
    category: "PORTE_VITRAGE",
    material: "PVC",
    seller: "SWAO",
    description: "Porte d'entrée PVC traditionnelle au style méditerranéen.",
    priceRange: "1200€ - 1500€",
    rating: 4.5,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "70mm",
    performance: "1.5 W/(m².K)",
    image: "images/portes/cadix.jpg",
    colors: ["Blanc 9016", "Gris", "Crème"],
    features: ["Style méditerranéen", "PVC durable", "Entretien facile", "Prix attractif"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 27. CALGARY
  {
    name: "CALGARY",
    category: "PORTE_ENTRER",
    material: "ACIER",
    seller: "SWAO",
    description: "Porte d'entrée acier traditionnelle avec caractère chaleureux.",
    priceRange: "1400€ - 1700€",
    rating: 4.6,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "48mm",
    performance: "1.4 W/(m².K)",
    image: "images/portes/calgary.jpg",
    colors: ["Brun 8019", "Blanc", "Gris", "Anthracite"],
    features: ["Couleur chaleureuse", "Acier robuste", "Style traditionnel", "Finition satinée"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 28. CAPARIS
  {
    name: "CAPARIS",
    category: "PORTE_ENTRER",
    material: "PVC",
    seller: "SWAO",
    description: "Porte d'entrée PVC traditionnelle avec design classique.",
    priceRange: "1200€ - 1500€",
    rating: 4.5,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "70mm",
    performance: "1.5 W/(m².K)",
    image: "images/portes/caparis.jpg",
    colors: ["Blanc 9016", "Gris", "Anthracite"],
    features: ["Design classique", "PVC qualité", "Isolation performante", "Bon rapport qualité-prix"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 29. CAPARIS SV1
  {
    name: "CAPARIS SV1",
    category: "PORTE_VITRAGE",
    material: "PVC",
    seller: "SWAO",
    description: "Porte d'entrée PVC traditionnelle variante SV1.",
    priceRange: "1200€ - 1500€",
    rating: 4.5,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "70mm",
    performance: "1.5 W/(m².K)",
    image: "images/portes/caparis-sv1.jpg",
    colors: ["Blanc 9016", "Gris", "Anthracite"],
    features: ["Variante SV1", "PVC résistant", "Style intemporel", "Entretien minimal"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // 30. CARASSIN
  {
    name: "CARASSIN",
    category: "PORTE_ENTRER",
    material: "ACIER",
    seller: "SWAO",
    description: "Porte d'entrée acier contemporaine au design distinctif.",
    priceRange: "1400€ - 1700€",
    rating: 4.7,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur: "48mm",
    performance: "1.5 W/(m².K)",
    image: "images/portes/carassin.jpg",
    colors: ["Gris 9006", "Blanc", "Anthracite", "Noir"],
    features: ["Design distinctif", "Acier haute qualité", "Finition texturée", "Sécurité optimale"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },

  //Porte de garage
  {
    name: "MARTIGNAC",
    category: "PORTE_GARAGE",
    material: "ALUMINIUM",
    seller: "SYBAIE",
    epaisseur: "80mm",
    image: "images/garage/pg-pliante-bois-martignac.png",
    colors: ["Anthracite", "Blanc", "Gris", "Noir mat"],
    features: ["Nouveau design 2025", "Innovation", "Style unique", "Performance"],
    description: "Nouveau design 2025 avec innovation et style unique pour votre garage.",
    priceRange: "2000€ - 2250€",
    rating: 4.8,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    performance: "1.2 W/(m².K)",
    isPopular: false,
    isNew: true,
    isActive: true,
  },
  {
    name: "LUBERON",
    category: "PORTE_GARAGE",
    material: "BOIS",
    seller: "C2R",
    epaisseur: "80mm",
    image: "images/garage/pg-pliante-bois-luberon.png",
    colors: ["Marron", "Mat"],
    features: ["Pliante", "Bois", "4 battants", "Performance"],
    description: "Pliante en bois 4 battants et style unique pour votre garage.",
    priceRange: "1500€ - 2000€",
    rating: 4.8,
    dimensions: "H: 2000-2250mm, L: 800-1800mm",
    performance: "1.2 W/(m².K)",
    isPopular: false,
    isNew: true,
    isActive: true,
  },
  {
    name: "MAURIENNE",
    category: "PORTE_GARAGE",
    material: "BOIS",
    seller: "C2R",
    epaisseur: "80mm",
    image: "images/garage/pg-pliante-bois-maurienne.png",
    colors: ["Marron", "Mat"],
    features: ["Pliante", "Bois", "4 battants", "Performance"],
    description: "Pliante en bois 4 battants et style unique pour votre garage.",
    priceRange: "1800€ - 2250€",
    rating: 4.8,
    dimensions: "H: 2000-2250mm, L: 800-1800mm",
    performance: "1.2 W/(m².K)",
    isPopular: false,
    isNew: true,
    isActive: true,
  },
    {
    name: "MIMIZAN",
    category: "PORTE_GARAGE",
    material: "PVC",
    seller: "C2R",
    epaisseur: "80mm",
    image: "images/garage/pg-pliante-pvc-mimizan.png",
    colors: ["Blanc", "Mat"],
    features: ["Pliante", "Bois", "4 battants", "Performance"],
    description: "Pliante en bois 4 battants et style unique pour votre garage.",
    priceRange: "1800€ - 2250€",
    rating: 4.8,
    dimensions: "H: 2000-2250mm, L: 800-1800mm",
    performance: "1.2 W/(m².K)",
    isPopular: false,
    isNew: true,
    isActive: true,
  },
];

const fenetresData: FenetreData[] = [
  {
    name: "LUBER",
    category: "FENETRE",
    material: "ALUMINIUM",
    seller: "C2R",
    vitrage: "DOUBLE",
    uw: "1.3 W/(m².K)",
    ouverture: "OSCILLO_BATTANT",
    image: "images/fenetre/sydeal_1.jpg",
    colors: ["Marron", "Mat", "Blanc", "Gris anthracite"],
    features: ["Dormant invisible", "Aluminum", "Performance thermique optimale", "Design moderne"],
    description: "Fenêtre aluminium avec dormant invisible, idéale pour vos pièces à vivre avec une excellente isolation.",
    priceRange: "800€ - 1200€",
    rating: 4.8,
    dimensions: "H: 1000-1500mm, L: 800-1200mm",
    performance: "1.3 W/(m².K)",
    isPopular: true,
    isNew: false,
    isActive: true,
  },
  {
    name: "VERONA",
    category: "FENETRE",
    material: "PVC",
    seller: "SYBAIE",
    vitrage: "TRIPLE",
    uw: "0.9 W/(m².K)",
    ouverture: "BATTANT",
    image: "images/fenetre/sydeal_5.jpg",
    colors: ["Blanc", "Gris clair", "Anthracite"],
    features: ["Triple vitrage haute performance", "Isolation phonique renforcée", "Entretien facile", "Durabilité"],
    description: "Fenêtre PVC triple vitrage offrant une isolation thermique et acoustique exceptionnelle.",
    priceRange: "900€ - 1400€",
    rating: 4.9,
    dimensions: "H: 1000-1600mm, L: 600-1200mm",
    performance: "0.9 W/(m².K)",
    isPopular: true,
    isNew: false,
    isActive: true,
  },
  {
    name: "CRISTAL",
    category: "BAIE_VITREE",
    material: "ALUMINIUM",
    seller: "SWAO",
    vitrage: "DOUBLE",
    uw: "1.4 W/(m².K)",
    ouverture: "COULISSANTE",
    image: "images/baie/baie2.jpg",
    colors: ["Gris anthracite", "Blanc", "Bronze", "Noir mat"],
    features: ["Grande surface vitrée", "Coulissante 2 vantaux", "Seuil PMR", "Design contemporain"],
    description: "Baie vitrée coulissante aluminium pour un maximum de luminosité et un accès facile à votre extérieur.",
    priceRange: "2200€ - 3500€",
    rating: 4.7,
    dimensions: "H: 2000-2400mm, L: 2000-3000mm",
    performance: "1.4 W/(m².K)",
    isPopular: true,
    isNew: false,
    isActive: true,
  },
  {
    name: "HARMONIE",
    category: "FENETRE",
    material: "BOIS_ALUMINIUM",
    seller: "PROFERM",
    vitrage: "TRIPLE",
    uw: "0.8 W/(m².K)",
    ouverture: "OSCILLO_BATTANT",
    image: "images/fenetre/sydeal_9.jpg",
    colors: ["Chêne naturel", "Blanc intérieur", "Anthracite extérieur"],
    features: ["Mixte bois-alu", "Triple vitrage", "Haute performance", "Esthétique chaleureuse"],
    description: "Fenêtre mixte alliant la chaleur du bois à l'intérieur et la résistance de l'aluminium à l'extérieur.",
    priceRange: "1500€ - 2200€",
    rating: 4.8,
    dimensions: "H: 1000-1800mm, L: 600-1400mm",
    performance: "0.8 W/(m².K)",
    isPopular: false,
    isNew: true,
    isActive: true,
  },
  {
    name: "PANORAMA",
    category: "BAIE_VITREE",
    material: "ALUMINIUM",
    seller: "C2R",
    vitrage: "TRIPLE",
    uw: "1.0 W/(m².K)",
    ouverture: "COULISSANTE_GALANDAGE",
    image: "images/baie/baie3.jpg",
    colors: ["Gris anthracite", "Blanc", "Noir"],
    features: ["Coulissante à galandage", "Triple vitrage", "Gain d'espace maximal", "Vue panoramique"],
    description: "Baie vitrée à galandage pour une ouverture totale et une vue dégagée sur l'extérieur.",
    priceRange: "3500€ - 5000€",
    rating: 4.9,
    dimensions: "H: 2100-2400mm, L: 2500-4000mm",
    performance: "1.0 W/(m².K)",
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  {
    name: "CLASSIQUE",
    category: "FENETRE",
    material: "BOIS",
    seller: "C2R",
    vitrage: "DOUBLE",
    uw: "1.4 W/(m².K)",
    ouverture: "BATTANT",
    image: "images/fenetre/syma_8.jpg",
    colors: ["Pin naturel", "Chêne", "Blanc"],
    features: ["Bois massif", "Double vitrage", "Style traditionnel", "Authenticité"],
    description: "Fenêtre en bois massif au charme authentique, parfaite pour les rénovations de caractère.",
    priceRange: "1000€ - 1600€",
    rating: 4.5,
    dimensions: "H: 900-1500mm, L: 600-1000mm",
    performance: "1.4 W/(m².K)",
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  {
    name: "ELEGANCE",
    category: "FENETRE",
    material: "PVC",
    seller: "SYBAIE",
    vitrage: "DOUBLE",
    uw: "1.2 W/(m².K)",
    ouverture: "OSCILLO_BATTANT",
    image: "images/fenetre/syma_10.jpg",
    colors: ["Blanc", "Gris", "Anthracite"],
    features: ["PVC haute qualité", "Double vitrage", "Profilés renforcés", "Excellent rapport qualité-prix"],
    description: "Fenêtre PVC double vitrage offrant un excellent compromis entre performance et prix.",
    priceRange: "600€ - 900€",
    rating: 4.6,
    dimensions: "H: 1000-1500mm, L: 600-1000mm",
    performance: "1.2 W/(m².K)",
    isPopular: true,
    isNew: false,
    isActive: true,
  },
  {
    name: "LUMINA",
    category: "FENETRE",
    material: "ALUMINIUM",
    seller: "SWAO",
    vitrage: "TRIPLE",
    uw: "0.9 W/(m².K)",
    ouverture: "FIXE",
    image: "images/fenetre/syma_7.jpg",
    colors: ["Gris anthracite", "Blanc", "Bronze"],
    features: ["Fenêtre fixe", "Triple vitrage", "Maximum de luminosité", "Profilés ultra-fins"],
    description: "Fenêtre fixe aluminium avec profilés ultra-fins pour une luminosité maximale.",
    priceRange: "700€ - 1100€",
    rating: 4.7,
    dimensions: "H: 1000-2000mm, L: 800-1500mm",
    performance: "0.9 W/(m².K)",
    isPopular: false,
    isNew: true,
    isActive: true,
  },
  {
    name: "VERANDA CLASSIC",
    category: "VERANDA",
    material: "ALUMINIUM",
    seller: "PROFERM",
    vitrage: "DOUBLE",
    uw: "1.5 W/(m².K)",
    ouverture: "COULISSANTE",
    image: "images/veranda.jpg",
    colors: ["Blanc", "Anthracite", "Gris"],
    features: ["Structure aluminium", "Toiture isolante", "Baies vitrées", "Extension de vie"],
    description: "Véranda aluminium avec toiture isolante, idéale pour agrandir votre espace de vie.",
    priceRange: "15000€ - 25000€",
    rating: 4.8,
    dimensions: "Surface: 12-30m²",
    performance: "1.5 W/(m².K)",
    isPopular: true,
    isNew: false,
    isActive: true,
  },
  {
    name: "PRESTIGE",
    category: "BAIE_VITREE",
    material: "ALUMINIUM",
    seller: "SWAO",
    vitrage: "TRIPLE",
    uw: "0.8 W/(m².K)",
    ouverture: "PLIANTE",
    image: "images/baie/syal_7.jpg",
    colors: ["Gris anthracite", "Blanc", "Noir mat"],
    features: ["Baie vitrée pliante", "Triple vitrage", "Ouverture totale", "Design haut de gamme"],
    description: "Baie vitrée pliante haut de gamme pour une ouverture totale et un design exceptionnel.",
    priceRange: "4500€ - 7000€",
    rating: 4.9,
    dimensions: "H: 2100-2400mm, L: 3000-5000mm",
    performance: "0.8 W/(m².K)",
    isPopular: false,
    isNew: true,
    isActive: true,
  },
];

async function main() {
  logger.info("🌱 Seeding database...");

  // Clean existing data (in order due to foreign key constraints)
  logger.info("🧹 Cleaning existing data...");
  await prisma.member.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.organization.deleteMany({});
  await prisma.user.deleteMany({});
  logger.info("✅ Cleaned existing data");

  // Create 10 users
  const userCreatePromises = Array.from({ length: 10 }, async () => {
    const email = faker.internet.email();
    return prisma.user.create({
      data: {
        id: nanoid(11),
        name: faker.person.fullName(),
        email,
        emailVerified: faker.datatype.boolean(0.8),
        image: faker.image.avatar(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        stripeCustomerId: faker.string.alphanumeric(10),
      },
    });
  });
  const users = await Promise.all(userCreatePromises);
  users.forEach((user) => logger.info(`👤 Created user: ${user.name}`));

  // Create 3 organizations
  const memberPromises: Promise<unknown>[] = [];
  const invitationPromises: Promise<unknown>[] = [];

  const orgData = Array.from({ length: 3 }, () => {
    const orgName = faker.company.name();
    const orgSlug = orgName.toLowerCase().replace(/[^a-z0-9]/g, "-");
    return { orgName, orgSlug };
  });

  const organizations = await Promise.all(
    orgData.map(async ({ orgName, orgSlug }) =>
      prisma.organization
        .create({
          data: {
            id: nanoid(11),
            name: orgName,
            slug: orgSlug,
            logo: faker.image.url(),
            email: faker.internet.email(),
            createdAt: faker.date.past(),
          },
        })
        .then((org) => {
          logger.info(`🏢 Created organization: ${org.name}`);
          return org;
        }),
    ),
  );

  organizations.forEach((organization) => {
    const roleOptions = ["owner", "admin", "member"];

    memberPromises.push(
      prisma.member
        .create({
          data: {
            id: nanoid(11),
            organizationId: organization.id,
            userId: users[0].id,
            role: "owner",
            createdAt: faker.date.past(),
          },
        })
        .then(() =>
          logger.info(
            `👑 Added ${users[0].name} as OWNER to ${organization.name}`,
          ),
        ),
    );

    const memberCount = faker.number.int({ min: 2, max: 4 });
    const memberIndices = faker.helpers.uniqueArray(
      () => faker.number.int({ min: 1, max: users.length - 1 }),
      memberCount,
    );

    for (const index of memberIndices) {
      const user = users[index];
      const role = faker.helpers.arrayElement(roleOptions);
      memberPromises.push(
        prisma.member
          .create({
            data: {
              id: nanoid(11),
              organizationId: organization.id,
              userId: user.id,
              role,
              createdAt: faker.date.past(),
            },
          })
          .then(() =>
            logger.info(
              `👥 Added ${user.name} as ${role} to ${organization.name}`,
            ),
          ),
      );
    }
  });

  await Promise.all([...memberPromises, ...invitationPromises]);

  // Seed Portes (Products)
  logger.info("🚪 Creating portes...");
  
  // Prepare data with IDs
  const portesWithIds = portesData.map((porte) => ({
    id: `porte-${porte.name.toLowerCase().replace(/\s+/g, "-")}`,
    ...porte,
  }));

  // Create all products at once using createMany (more efficient)
  const portesResult = await prisma.product.createMany({
    data: portesWithIds,
    skipDuplicates: false,
  });

  logger.info(`✅ Created ${portesResult.count} portes`);

  // Seed Fenêtres (Products)
  logger.info("🪟 Creating fenêtres...");
  
  // Prepare fenetre data with IDs
  const fenetresWithIds = fenetresData.map((fenetre) => ({
    id: `fenetre-${fenetre.name.toLowerCase().replace(/\s+/g, "-")}`,
    ...fenetre,
  }));

  // Create all fenêtres at once
  const fenetresResult = await prisma.product.createMany({
    data: fenetresWithIds,
    skipDuplicates: false,
  });

  logger.info(`✅ Created ${fenetresResult.count} fenêtres`);
  
  logger.info("✅ Seeding completed!");
}

main()
  .catch((e) => {
    logger.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });