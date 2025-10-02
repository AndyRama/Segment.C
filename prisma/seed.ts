import { logger } from "@/lib/logger";
import { faker } from "@faker-js/faker";
import { nanoid } from "nanoid";
import { prisma } from "../src/lib/prisma";
import type { ProductCategory, ProductMaterial, ProductSeller } from "@/generated/prisma";

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
  vitrage: "SIMPLE" | "DOUBLE" | "TRIPLE"; // VitragType enum
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
    colors: ["Gris anthracite", "Blanc", "Bronze", "Noir"],
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
  {
    name: "FANTAZY 80",
    category: "PORTE_GARAGE",
    material: "ALUMINIUM",
    seller: "SYBAIE",
    epaisseur: "80mm",
    image: "images/portes/alesia-60.webp",
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
    image: "images/portes/pg-pliante-bois-luberon.png",
    colors: ["Marron", "Mat"],
    features: ["Pliante", "Bois", "4 battants", "Performance"],
    description: "Pliante en bois 4 battants et style unique pour votre garage.",
    priceRange: "2000€ - 2250€",
    rating: 4.8,
    dimensions: "H: 2000-2250mm, L: 800-1800mm",
    performance: "1.2 W/(m².K)",
    isPopular: false,
    isNew: true,
    isActive: true,
  },
  // ... ajoutez toutes les autres portes ici (112 restantes)
];

const fenetresData: FenetreData[] = [
  {
    name: "LUBER",
    category: "FENETRE",
    material: "ALUMINIUM",
    seller: "C2R",
    vitrage: "DOUBLE",
    image: "images/hero-fenetre.jpg",
    colors: ["Marron", "Mat"],
    features: ["dormant invisible", "Aluminum", "Performance"],
    description: "Fenêtre avec dormant invisible style unique pour vos pièces à vivre.",
    priceRange: "2000€ - 2250€",
    rating: 4.8,
    dimensions: "H: 1000-1500mm, L: 800-1800mm",
    performance: "1.2 W/(m².K)",
    isPopular: false,
    isNew: true,
    isActive: true,
  },
  // ... ajoutez d'autres fenêtres ici
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