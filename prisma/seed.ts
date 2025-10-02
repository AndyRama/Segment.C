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

// Données des portes
const portesData: PorteData[] = [
  {
    name: "ABLETTE",
    category: "PORTE_ENTRER",
    material: "ACIER",
    seller: "SYBAIE",
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
    seller: "SYBAIE",
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
    seller: "SYBAIE",
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
    seller: "SYBAIE",
    epaisseur: "80mm",
    dimensions: "H: 2000-2250mm, L: 800-1000mm",
    image: "images/portes/mostelle-80.webp",
    colors: ["Anthracite", "Blanc", "Gris", "Bronze"],
    features: ["Design exclusif", "Style moderne", "Haute performance", "Finition premium"],
    description: "Design exclusif aluminium au style moderne avec finition premium.",
    priceRange: "2150€",
    rating: 4.7,
    performance: "1.2 W/(m².K)",
    isPopular: false,
    isNew: false,
    isActive: true,
  },
  // ... ajoutez toutes les autres portes ici (112 restantes)
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
  const result = await prisma.product.createMany({
    data: portesWithIds,
    skipDuplicates: false, // Will throw error if duplicates exist
  });

  logger.info(`✅ Created ${result.count} portes`);
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