"use server";

import { ActionError, orgAction } from "@/lib/actions/safe-actions";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const ProductSchema = z.object({
  // Champs communs
  name: z.string().min(1, "Le nom est requis"),
  category: z.enum(["PORTE_ENTRER", "PORTE_VITRAGE", "FENETRE", "BAIE_VITREE"]),
  material: z.enum(["ACIER", "ALUMINIUM", "BOIS", "PVC", "MIXTE", "BOIS_ALUMINIUM"]),
  seller: z.enum(["SWAO", "C2R", "SYBAIE"]),
  description: z.string().default(""),
  priceRange: z.string().default(""),
  rating: z.number().min(0).max(5).default(4.5),
  dimensions: z.string().default(""),
  performance: z.string().default(""),
  image: z.string().default(""),
  colors: z.array(z.string()).default([]),
  features: z.array(z.string()).default([]),
  isPopular: z.boolean().default(false),
  isNew: z.boolean().default(false),
  isActive: z.boolean().default(true),

  // Porte uniquement
  epaisseur: z.string().optional(),

  // Fenêtre / baie vitrée uniquement
  vitrage: z.enum(["SIMPLE", "DOUBLE", "TRIPLE"]).optional(),
  uw: z.string().optional(),
  ouverture: z
    .enum([
      "BATTANT",
      "OSCILLO_BATTANT",
      "COULISSANTE",
      "COULISSANTE_GALANDAGE",
      "PLIANTE",
      "FIXE",
    ])
    .optional(),
});

export const createProductAction = orgAction
  .metadata({})
  .inputSchema(ProductSchema)
  .action(async ({ parsedInput }) => {
    // Génère un id lisible à partir du nom
    const id = `${parsedInput.category.toLowerCase()}-${parsedInput.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")}-${Date.now()}`;

    const product = await prisma.product.create({
      data: {
        id,
        ...parsedInput,
      },
    });

    return product;
  });