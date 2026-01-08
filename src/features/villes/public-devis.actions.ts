"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { DevisFormSchema, type DevisFormType } from "./devis.schema";
import { sendEmail } from "@/lib/mail/send-email";
import NouveauDevisEmail from "./../../../../emails/nouveau-devis-email";

/**
 * Action publique pour créer un devis sans authentification
 * Utilisée dans les formulaires publics (landing pages, pages ville, etc.)
 */
export async function createPublicDevisAction(data: DevisFormType) {
  try {
    // Valider les données
    const validatedData = DevisFormSchema.parse(data);
    
    // Créer le devis en base avec Prisma SANS userId
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
        // Pas de userId car l'utilisateur n'est pas authentifié
        userId: null,
        status: "nouveau",
      },
    });

    // 📧 ENVOI DE L'EMAIL DE NOTIFICATION
    try {
      const dashboardUrl = `${process.env.NEXT_PUBLIC_URL}/admin/devis/${devis.id}`;
      
      await sendEmail({
        to: "andyramaroson@gmail.com",
        subject: `🔔 Nouveau devis public reçu - ${validatedData.nomEntreprise ?? validatedData.nomComplet}`,
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
      
      // eslint-disable-next-line no-console
      console.log("✅ Email de notification envoyé avec succès");
    } catch (emailError) {
      // Log l'erreur email mais ne fait pas échouer la création du devis
      // eslint-disable-next-line no-console
      console.error("❌ Erreur envoi email notification:", emailError);
    }

    // Invalider le cache si nécessaire
    revalidatePath("/");
    
    return {
      success: true,
      message: "Votre demande de devis a été enregistrée avec succès ! Nous vous contacterons sous 24h.",
      devisId: devis.id,
    };
    
  } catch (error) {
    // eslint-disable-next-line no-console
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