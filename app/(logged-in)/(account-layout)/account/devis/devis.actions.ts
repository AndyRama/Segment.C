"use server";

import { getRequiredUser } from "@/lib/auth/auth-user";
import { prisma } from "@/lib/prisma"; // Adaptez le chemin selon votre structure
import { revalidatePath } from "next/cache";
import { DevisFormSchema, type DevisFormType } from "./devis.schema";

export async function createDevisAction(data: DevisFormType) {
  try {
    // Récupérer l'utilisateur connecté
    const user = await getRequiredUser();
    
    // Valider les données
    const validatedData = DevisFormSchema.parse(data);
    
    // Créer le devis en base avec Prisma - LIÉ À L'UTILISATEUR CONNECTÉ
    const devis = await prisma.devis.create({
      data: {
        clientType: validatedData.clientType,
        nomComplet: validatedData.nomComplet,
        email: validatedData.email,
        telephone: validatedData.telephone || null,
        descriptionProjet: validatedData.descriptionProjet,
        typeProjet: validatedData.typeProjet || null,
        nomContact: validatedData.nomContact || null,
        nomEntreprise: validatedData.nomEntreprise || null,
        fonction: validatedData.fonction || null,
        secteurActivite: validatedData.secteurActivite || null,
        tailleEntreprise: validatedData.tailleEntreprise || null,
        userId: user.id, // IMPORTANT : Le devis est automatiquement lié à l'utilisateur connecté
        status: "nouveau",
      },
    });

    // Invalider le cache pour rafraîchir les données
    revalidatePath("/dashboard/devis");
    
    return {
      success: true,
      message: "Votre demande de devis a été enregistrée avec succès !",
      devisId: devis.id,
    };
    
  } catch (error) {
    console.error("Erreur lors de la création du devis:", error);
    
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

export async function getUserDevisAction() {
  try {
    const user = await getRequiredUser();
    
    // IMPORTANT : L'utilisateur ne voit QUE ses propres devis
    const devis = await prisma.devis.findMany({
      where: {
        userId: user.id, // Filtrage strict par userId
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        clientType: true,
        nomComplet: true,
        nomEntreprise: true,
        email: true,
        status: true,
        createdAt: true,
        descriptionProjet: true,
      },
    });
    
    return devis;
    
  } catch (error) {
    console.error("Erreur lors de la récupération des devis:", error);
    return [];
  }
}

export async function deleteDevisAction(devisId: string) {
  try {
    const user = await getRequiredUser();
    
    // SÉCURITÉ CRITIQUE : Vérifier que le devis appartient bien à l'utilisateur connecté
    const devis = await prisma.devis.findFirst({
      where: {
        id: devisId,
        userId: user.id, // Double vérification de propriété
      },
    });
    
    if (!devis) {
      return {
        success: false,
        message: "Devis non trouvé ou vous n'êtes pas autorisé à le supprimer.",
      };
    }
    
    // Supprimer uniquement SI le devis appartient à l'utilisateur
    await prisma.devis.delete({
      where: {
        id: devisId,
        userId: user.id, // Sécurité supplémentaire dans la suppression
      },
    });
    
    revalidatePath("/dashboard/devis");
    
    return {
      success: true,
      message: "Votre devis a été supprimé avec succès.",
    };
    
  } catch (error) {
    console.error("Erreur lors de la suppression du devis:", error);
    return {
      success: false,
      message: "Erreur lors de la suppression du devis.",
    };
  }
}