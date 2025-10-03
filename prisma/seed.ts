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
  //Porte d'entrer Swao
  {
    name: "ABLETTE",
    category: "PORTE_ENTRER",
    material: "ACIER",
    seller: "SWAO",
    description: "Porte acier avec dormant alu, vitrage avec petits bois plombs intégrés dans un cadre mouluré.",
    priceRange: "1500€ - 1800€",
    rating: 4.7,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur:"48mm",
    performance: "1.4 W/(m².K)",
    image: "/images/portes/ablette.jpg",
    colors: ["Gris", "Blanc", "Bronze", "Noir"],
    features: ["Triple vitrage feuilleté", "Petits bois plombs", "Performance thermique", "Cadre mouluré"],
    isPopular: true,
    isNew: false,
    isActive: true,
  },
  {
    name: "ORPHIE 80",
    category: "PORTE_ENTRER",
    material: "ALUMINIUM",
    seller: "SWAO",
    description: "Design exclusif, ouvrant rainuré, demi-lune vitrée avec triple vitrage feuilleté sablé.",
    priceRange: "1800€ - 2200€",
    rating: 4.8,
    dimensions: "H: 1920-2250mm, L: 780-1000mm",
    epaisseur:"80mm",
    performance:"1.2 W/(m².K)",
    image: "/images/portes/orphie-80.jpg",
    colors: ["Anthracite", "Blanc", "Bronze", "Gris"],
    features: ["Design exclusif", "Ouvrant rainuré", "Demi-lune vitrée", "Embouts inox"],
    isPopular: false,
    isNew: true,
    isActive: true,
  },
  {
    name: "BLENNIE 80",
    category: "PORTE_ENTRER",
    material: "ALUMINIUM",
    seller: "SWAO",
    description: "Design exclusif Sy baie avec lignes épurées pour un maximum de luminosité.",
    priceRange: "1900€ - 2100€",
    rating: 4.6,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    epaisseur:"80mm",
    performance:"1.2 W/(m².K)",
    image: "/images/portes/blennie-80.webp",
    colors: ["Gris clair", "Blanc", "Anthracite", "Bronze"],
    features: ["Design exclusif Sy baie", "Lignes épurées", "Grande surface vitrée", "Profilés fins"],
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  {
    name: "MOSTELLE 80",
    category: "PORTE_ENTRER",
    material: "ALUMINIUM",
    seller: "SWAO",
    epaisseur: "80mm",
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    image: "images/portes/mostelle-80.webp",
    colors: ["Anthracite", "Blanc", "Gris", "Bronze"],
    features: ["Design exclusif", "Style moderne", "Haute performance", "Finition premium"],
    description: "Design exclusif aluminium au style moderne avec finition premium.",
    priceRange: "1900€ - 2150€",
    rating: 4.7,
    performance: "1.2 W/(m².K)",
    isPopular: true,
    isNew: false,
    isActive: true,
  },
  {
    name: "NAPILUS 80",
    category: "PORTE_ENTRER",
    material: "ALUMINIUM",
    seller: "SYBAIE",
    epaisseur: "80mm",
    image: "images/portes/maewo2.png",
    colors: ["Gris anthracite", "Blanc", "Bronze", "Noir"],
    features: ["Design exclusif aluminium", "Performance thermique", "Durabilité", "Esthétique moderne"],
    description: "Design exclusif aluminium avec performance thermique optimale.",
    priceRange: "1900€ - 2180€",
    rating: 4.6,
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    performance: "1.2 W/(m².K)",
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // Aluminium 80 - Design Exclusif
  {
    name: "HOBBINOX 80",
    category: "PORTE_ENTRER",
    material: "ALUMINIUM",
    seller: "SWAO",
    epaisseur: "80mm",
    dimensions: "H: 1950-2500mm, L: 820-1200mm",
    image: "images/portes/hobbinox-80.webp",
    colors: ["Gris", "Anthracite", "Blanc", "Bronze"],
    features: [
      "Design exclusif SWAO",
      "Décors alunox extérieur",
      "Triple vitrage feuilleté sablé affleurant",
      "Ouvrant monobloc 80mm",
      "Performance thermique Ud = 1,1 W/(m².K)",
      "Étanchéité A*4 E*5B V*C3",
      "Acoustique 35(-1;-3)dB",
      "Serrure motorisée en option"
    ],
    description: "Porte d'entrée aluminium au design exclusif avec décors alunox en extérieur et triple vitrage affleurant pour une esthétique contemporaine raffinée.",
    priceRange: "1850€ - 2250€",
    rating: 4.7,
    performance: "1.1 W/(m².K)",
    isPopular: true,
    isNew: true,
    isActive: true,
  },
  {
    name: "SHINY 80",
    category: "PORTE_ENTRER",
    material: "ALUMINIUM",
    seller: "SWAO",
    epaisseur: "80mm",
    dimensions: "H: 1950-2500mm, L: 820-1200mm",
    image: "images/portes/shiny-80.webp",
    colors: ["Bleu", "Anthracite", "Blanc", "Gris"],
    features: [
      "Design exclusif SWAO",
      "Vitrage vertical arrondi affleurant",
      "Décors alunox extérieur",
      "Triple vitrage feuilleté sablé",
      "Ouvrant monobloc 80mm",
      "Performance thermique Ud = 1,1 W/(m².K)",
      "Étanchéité A*4 E*5B V*C3",
      "Acoustique 35(-1;-3)dB"
    ],
    description: "Porte d'entrée aluminium contemporaine distinctive avec vitrage vertical arrondi affleurant et décors alunox pour une élégance moderne.",
    priceRange: "1850€ - 2250€",
    rating: 4.8,
    performance: "1.1 W/(m².K)",
    isPopular: false,
    isNew: true,
    isActive: true,
  },
  {
    name: "MOONY 80",
    category: "PORTE_ENTRER",
    material: "ALUMINIUM",
    seller: "SWAO",
    epaisseur: "80mm",
    dimensions: "H: 1950-2500mm, L: 820-1200mm",
    image: "images/portes/moony-80.webp",
    colors: ["Gris", "Anthracite", "Blanc", "Bronze"],
    features: [
      "Design exclusif SWAO",
      "Esthétique contemporaine ajourée",
      "Décor alunox extérieur",
      "Triple vitrage feuilleté sablé affleurant",
      "Apport de lumière naturelle",
      "Ouvrant monobloc 80mm",
      "Performance thermique Ud = 1,1 W/(m².K)",
      "Serrure motorisée en option"
    ],
    description: "Porte aluminium au design exclusif avec esthétique contemporaine ajourée, apportant lumière naturelle dans l'entrée.",
    priceRange: "1850€ - 2250€",
    rating: 4.6,
    performance: "1.1 W/(m².K)",
    isPopular: false,
    isNew: true,
    isActive: true,
  },
  {
    name: "JEANNE 80",
    category: "PORTE_ENTRER",
    material: "ALUMINIUM",
    seller: "SWAO",
    epaisseur: "80mm",
    dimensions: "H: 1950-2350mm, L: 800-1100mm",
    image: "images/portes/jeanne-80.webp",
    colors: ["Gris", "Gris", "Blanc", "Bronze"],
    features: [
      "Design exclusif SWAO",
      "Moulures classiques revisitées",
      "Grille intégrée dans vitrage",
      "Double vitrage feuilleté sablé",
      "Esthétique traditionnelle",
      "Ouvrant monobloc 80mm",
      "Performance thermique Ud = 1,4 W/(m².K)",
      "Étanchéité A*3 E*4B V*C3",
      "Acoustique 35(-1;-3)dB"
    ],
    description: "Porte qui s'affirme par ses moulures classiques revisitées avec grille intégrée dans vitrage pour un rendu authentique et sécurisé.",
    priceRange: "1800€ - 2100€",
    rating: 4.7,
    performance: "1.4 W/(m².K)",
    isPopular: true,
    isNew: false,
    isActive: true,
  },
  {
    name: "DORMELLE 80",
    category: "PORTE_ENTRER",
    material: "ALUMINIUM",
    seller: "SWAO",
    epaisseur: "80mm",
    dimensions: "H: 1950-2500mm, L: 820-1200mm",
    image: "images/portes/dormelle-80.webp",
    colors: ["Anthracite", "Blanc", "Gris", "Bronze"],
    features: [
      "Design exclusif",
      "Vitrage pour luminosité",
      "Décors inox design",
      "Motifs identiques ext/int",
      "Triple vitrage sablé affleurant",
      "Décor aspect inox extérieur",
      "Ouvrant monobloc 80mm",
      "Performance thermique Ud = 1,1 W/(m².K)"
    ],
    description: "Porte d'entrée alliant vitrage lumineux et décors inox pour un design exclusif contemporain.",
    priceRange: "1850€ - 2200€",
    rating: 4.7,
    performance: "1.1 W/(m².K)",
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  {
    name: "DIVINOX 80",
    category: "PORTE_ENTRER",
    material: "ALUMINIUM",
    seller: "SWAO",
    epaisseur: "80mm",
    dimensions: "H: 1950-2500mm, L: 820-1200mm",
    image: "images/portes/divinox-80.webp",
    colors: ["Anthracite", "Blanc", "Gris", "Bronze"],
    features: [
      "Décor alunox face extérieure",
      "Vitrage affleurant",
      "Motifs linéaires lumineux",
      "Finition satinée",
      "Ouvrant monobloc 80mm",
      "Performance thermique Ud = 1,1 W/(m².K)",
      "Étanchéité A*4 E*5B V*C3",
      "Acoustique 35(-1;-3)dB"
    ],
    description: "Porte contemporaine avec décor alunox extérieur et vitrage affleurant créant un jeu de lumière subtil.",
    priceRange: "1850€ - 2200€",
    rating: 4.7,
    performance: "1.1 W/(m².K)",
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
    image: "images/hero-fenetre.jpg",
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
    image: "images/fenetres/verona.jpg",
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
    image: "images/fenetres/cristal-baie.jpg",
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
    image: "images/fenetres/harmonie.jpg",
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
    image: "images/fenetres/panorama.jpg",
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
    image: "images/fenetres/classique.jpg",
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
    image: "images/fenetres/elegance.jpg",
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
    image: "images/fenetres/lumina.jpg",
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
    image: "images/fenetres/veranda-classic.jpg",
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
    image: "images/fenetres/prestige.jpg",
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