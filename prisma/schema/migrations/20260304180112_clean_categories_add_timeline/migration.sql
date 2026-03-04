/*
  Warnings:

  - The values [PORTE_GARAGE,VERANDA,PERGOLA,PORTAIL,VOLET] on the enum `ProductCategory` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `surface` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `toiture` on the `products` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."ProductCategory_new" AS ENUM ('PORTE', 'FENETRE', 'PORTE_ENTRER', 'BAIE_VITREE', 'PORTE_VITRAGE');
ALTER TABLE "public"."products" ALTER COLUMN "category" TYPE "public"."ProductCategory_new" USING ("category"::text::"public"."ProductCategory_new");
ALTER TYPE "public"."ProductCategory" RENAME TO "ProductCategory_old";
ALTER TYPE "public"."ProductCategory_new" RENAME TO "ProductCategory";
DROP TYPE "public"."ProductCategory_old";
COMMIT;

-- AlterTable
ALTER TABLE "public"."products" DROP COLUMN "surface",
DROP COLUMN "toiture";

-- DropEnum
DROP TYPE "public"."RoofType";

-- CreateTable
CREATE TABLE "public"."devis_timeline" (
    "id" TEXT NOT NULL,
    "devisId" TEXT NOT NULL,
    "etape" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3),
    "note" TEXT,
    "completedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "devis_timeline_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "devis_timeline_devisId_idx" ON "public"."devis_timeline"("devisId");

-- AddForeignKey
ALTER TABLE "public"."devis_timeline" ADD CONSTRAINT "devis_timeline_devisId_fkey" FOREIGN KEY ("devisId") REFERENCES "public"."devis"("id") ON DELETE CASCADE ON UPDATE CASCADE;
