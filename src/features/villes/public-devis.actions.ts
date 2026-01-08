"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { DevisFormSchema, type DevisFormType } from "./devis.schema";

export async function createPublicDevisAction(data: DevisFormType) {
  try {
    const validatedData = DevisFormSchema.parse(data);
    
    const devis = await prisma.devis.create({
      data: {
        clientType: validatedData.clientType,
        nomComplet: validatedData.nomComplet,
        email: validatedData.email,
        telephone: validatedData.telephone ?? null,
        descriptionProjet: validatedData.descriptionProjet,
        typeProjet: validatedData.typeProjet ?? null,
        typeConstruction: validatedData.typeConstruction ?? null,
        typeBatiment: validatedData.typeBatiment ?? null,
        natureTravaux: validatedData.natureTravaux ?? null,
        besoinsRGE: validatedData.besoinsRGE ?? null,
        nomContact: validatedData.nomContact ?? null,
        nomEntreprise: validatedData.nomEntreprise ?? null,
        fonction: validatedData.fonction ?? null,
        secteurActivite: validatedData.secteurActivite ?? null,
        tailleEntreprise: validatedData.tailleEntreprise ?? null,
        userId: null,
        status: "nouveau",
      },
    });

    revalidatePath("/");
    
    return {
      success: true,
      message: "Votre demande de devis a été enregistrée avec succès ! Nous vous contacterons sous 24h.",
      devisId: devis.id,
    };
    
  } catch (error) {
    console.error("Erreur lors de la création du devis public:", error);
    
    if (error instanceof Error && error.name === "ZodError") {
      return {
        success: false,
        message: "Données invalides. Veuillez vérifier les champs requis.",
      };
    }
    
    return {
      success: false,
      message: "Une erreur est survenue lors de l'enregistrement. Veuillez réessayer.",
    };
  }
}