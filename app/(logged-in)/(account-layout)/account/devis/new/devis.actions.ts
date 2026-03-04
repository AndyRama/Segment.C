"use server";

import { getRequiredUser } from "@/lib/auth/auth-user";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { DevisFormSchema, type DevisFormType } from "./devis.schema";
import { sendEmail } from "./../../../../../../src/lib/mail/send-email";
import NouveauDevisEmail from "./../../../../../../emails/nouveau-devis-email";

export async function createDevisAction(data: DevisFormType) {
  try {
    // Récupérer l'utilisateur connecté
    const user = await getRequiredUser();
    
    // Valider les données
    const validatedData = DevisFormSchema.parse(data);
    
    // Créer le devis en base avec Prisma
    const devis = await prisma.devis.create({
      data: {
        clientType: validatedData.clientType,
        nomComplet: validatedData.nomComplet,
        email: validatedData.email,
        telephone: validatedData.telephone ?? null,
        descriptionProjet: validatedData.descriptionProjet,
        typeProjet: validatedData.typeProjet ?? null,
        // Nouveaux champs construction
        typeConstruction: validatedData.typeConstruction ?? null,
        typeBatiment: validatedData.typeBatiment ?? null,
        natureTravaux: validatedData.natureTravaux ?? null,
        besoinsRGE: validatedData.besoinsRGE ?? null,
        // Champs professionnels
        nomContact: validatedData.nomContact ?? null,
        nomEntreprise: validatedData.nomEntreprise ?? null,
        fonction: validatedData.fonction ?? null,
        secteurActivite: validatedData.secteurActivite ?? null,
        tailleEntreprise: validatedData.tailleEntreprise ?? null,
        userId: user.id,
        status: "nouveau",
      },
    });

    // 📧 ENVOI DE L'EMAIL DE NOTIFICATION
    try {
      const dashboardUrl = `${process.env.NEXT_PUBLIC_URL}/admin/devis/${devis.id}`;
      
      await sendEmail({
        to: "andyramaroson@gmail.com",
        subject: `🔔 Nouveau devis reçu - ${validatedData.nomEntreprise ?? validatedData.nomComplet}`,
        html: NouveauDevisEmail({
          devisId: devis.id,
          clientType: validatedData.clientType,
          nomClient: validatedData.nomComplet,
          nomEntreprise: validatedData.nomEntreprise,
          email: validatedData.email,
          typeProjet: validatedData.typeProjet,
          descriptionProjet: validatedData.descriptionProjet,
          dashboardUrl: dashboardUrl,
        }),
      });
    } catch (emailError) {
      // Log l'erreur email mais ne fait pas échouer la création du devis
      // eslint-disable-next-line no-console
      console.error("Erreur envoi email notification:", emailError);
    }

    // Invalider le cache pour rafraîchir les données
    revalidatePath("/account/devis");
    
    return {
      success: true,
      message: "Votre demande de devis a été enregistrée avec succès !",
      devisId: devis.id,
    };
    
  } catch (error) {
    // eslint-disable-next-line no-console
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
    
    const devis = await prisma.devis.findMany({
      where: {
        userId: user.id,
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
        typeProjet: true,
        typeConstruction: true,
        typeBatiment: true,
        natureTravaux: true,
        besoinsRGE: true,
      },
    });
    
    return devis;
    
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Erreur lors de la récupération des devis:", error);
    return [];
  }
}

export async function deleteDevisAction(devisId: string) {
  try {
    const user = await getRequiredUser();
    
    const devis = await prisma.devis.findFirst({
      where: {
        id: devisId,
        userId: user.id,
      },
    });
    
    if (!devis) {
      return {
        success: false,
        message: "Devis non trouvé ou vous n'êtes pas autorisé à le supprimer.",
      };
    }
    
    await prisma.devis.delete({
      where: {
        id: devisId,
        userId: user.id,
      },
    });
    
    revalidatePath("/account/devis");
    
    return {
      success: true,
      message: "Votre devis a été supprimé avec succès.",
    };
    
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Erreur lors de la suppression du devis:", error);
    return {
      success: false,
      message: "Erreur lors de la suppression du devis.",
    };
  }
}