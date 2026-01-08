-- DropForeignKey
ALTER TABLE "public"."devis" DROP CONSTRAINT "devis_userId_fkey";

-- AlterTable
ALTER TABLE "public"."devis" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."devis" ADD CONSTRAINT "devis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
