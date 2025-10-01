-- CreateEnum
CREATE TYPE "public"."ProductCategory" AS ENUM ('PORTE', 'FENETRE', 'PORTE_GARAGE', 'PORTE_ENTRER', 'BAIE_VITREE', 'PORTE_VITRAGE', 'VERANDA', 'PERGOLA', 'PORTAIL', 'VOLET');

-- CreateEnum
CREATE TYPE "public"."ProductMaterial" AS ENUM ('PVC', 'ALUMINIUM', 'BOIS', 'ACIER', 'BOIS_ALUMINIUM', 'MIXTE');

-- CreateEnum
CREATE TYPE "public"."ProductSeller" AS ENUM ('SYBAIE', 'C2R', 'SWAO', 'PROFERM', 'AUTRE');

-- CreateEnum
CREATE TYPE "public"."VitragType" AS ENUM ('SIMPLE', 'DOUBLE', 'TRIPLE');

-- CreateEnum
CREATE TYPE "public"."OpeningType" AS ENUM ('BATTANT', 'COULISSANTE', 'OSCILLO_BATTANT', 'PLIANTE', 'FIXE', 'PIVOTANTE', 'PROJECTION', 'COULISSANTE_GALANDAGE');

-- CreateEnum
CREATE TYPE "public"."RoofType" AS ENUM ('VERRE', 'TUILE', 'POLYCARBONATE', 'MIXTE', 'BIOCLIMATIQUE', 'OPAQUE', 'TOILE', 'OUVERTE', 'FIXE', 'CANISSE', 'CLAIRE_VOIE', 'MODULAIRE');

-- CreateTable
CREATE TABLE "public"."devis" (
    "id" TEXT NOT NULL,
    "clientType" TEXT NOT NULL,
    "nomComplet" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT,
    "descriptionProjet" TEXT NOT NULL,
    "typeProjet" TEXT,
    "typeConstruction" TEXT,
    "typeBatiment" TEXT,
    "natureTravaux" TEXT,
    "besoinsRGE" TEXT,
    "nomContact" TEXT,
    "nomEntreprise" TEXT,
    "fonction" TEXT,
    "secteurActivite" TEXT,
    "tailleEntreprise" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'nouveau',
    "userId" TEXT NOT NULL,

    CONSTRAINT "devis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" "public"."ProductCategory" NOT NULL,
    "material" "public"."ProductMaterial" NOT NULL,
    "seller" "public"."ProductSeller",
    "description" TEXT NOT NULL,
    "vitrage" "public"."VitragType",
    "ouverture" "public"."OpeningType",
    "dimensions" TEXT,
    "uw" TEXT,
    "toiture" "public"."RoofType",
    "surface" TEXT,
    "priceRange" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 4.0,
    "image" TEXT NOT NULL,
    "colors" TEXT[],
    "features" TEXT[],
    "isPopular" BOOLEAN NOT NULL DEFAULT false,
    "isNew" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."devis_products" (
    "id" TEXT NOT NULL,
    "devisId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "notes" TEXT,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "devis_products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "devis_userId_idx" ON "public"."devis"("userId");

-- CreateIndex
CREATE INDEX "devis_userId_createdAt_idx" ON "public"."devis"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "products_category_idx" ON "public"."products"("category");

-- CreateIndex
CREATE INDEX "products_material_idx" ON "public"."products"("material");

-- CreateIndex
CREATE INDEX "products_seller_idx" ON "public"."products"("seller");

-- CreateIndex
CREATE INDEX "products_isActive_idx" ON "public"."products"("isActive");

-- CreateIndex
CREATE INDEX "products_isPopular_idx" ON "public"."products"("isPopular");

-- CreateIndex
CREATE INDEX "products_isNew_idx" ON "public"."products"("isNew");

-- CreateIndex
CREATE INDEX "products_category_material_idx" ON "public"."products"("category", "material");

-- CreateIndex
CREATE INDEX "products_category_seller_idx" ON "public"."products"("category", "seller");

-- CreateIndex
CREATE INDEX "devis_products_devisId_idx" ON "public"."devis_products"("devisId");

-- CreateIndex
CREATE INDEX "devis_products_productId_idx" ON "public"."devis_products"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "devis_products_devisId_productId_key" ON "public"."devis_products"("devisId", "productId");

-- AddForeignKey
ALTER TABLE "public"."devis" ADD CONSTRAINT "devis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."devis_products" ADD CONSTRAINT "devis_products_devisId_fkey" FOREIGN KEY ("devisId") REFERENCES "public"."devis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."devis_products" ADD CONSTRAINT "devis_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
