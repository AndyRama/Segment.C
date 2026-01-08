"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { DevisFormSchema, type DevisFormType } from "./devis.schema";
import { sendEmail } from "@/lib/mail/send-email";

/**
 * Template email simple intégré directement dans le fichier
 * PAS DE DÉPENDANCES EXTERNES = PAS DE PROBLÈME DE CHEMIN
 */
function createEmailTemplate(data: {
  devisId: string;
  clientType: string;
  nomClient: string;
  nomEntreprise: string | null;
  email: string;
  telephone?: string | null;
  typeProjet: string | null;
  descriptionProjet: string;
  dashboardUrl: string;
}) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }
      .header {
        background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
        color: white;
        padding: 30px;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
        font-weight: 600;
      }
      .badge {
        display: inline-block;
        background: rgba(255,255,255,0.2);
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 14px;
        margin-top: 10px;
      }
      .content {
        padding: 30px;
      }
      .info-block {
        background: #f9fafb;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        border-left: 4px solid #16a34a;
      }
      .info-row {
        margin: 12px 0;
        display: flex;
        gap: 8px;
      }
      .label {
        font-weight: 600;
        color: #16a34a;
        min-width: 140px;
      }
      .value {
        color: #333;
        flex: 1;
      }
      .description-box {
        background: #fff;
        border: 1px solid #e5e7eb;
        padding: 15px;
        border-radius: 6px;
        margin-top: 10px;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
      .button {
        display: inline-block;
        background: #16a34a;
        color: white !important;
        padding: 14px 28px;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 600;
        margin-top: 20px;
        transition: background 0.3s;
      }
      .button:hover {
        background: #15803d;
      }
      .footer {
        background: #f9fafb;
        padding: 20px;
        text-align: center;
        font-size: 12px;
        color: #6b7280;
        border-top: 1px solid #e5e7eb;
      }
      .id-badge {
        background: #fef3c7;
        color: #92400e;
        padding: 4px 8px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 13px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>🔔 Nouveau Devis Public Reçu</h1>
        <div class="badge">
          ${data.clientType === 'particulier' ? '👤 Particulier' : '🏢 Professionnel'}
        </div>
      </div>
      
      <div class="content">
        <div style="text-align: center; margin-bottom: 20px;">
          <span class="id-badge">ID: ${data.devisId}</span>
        </div>

        <div class="info-block">
          <h3 style="margin-top: 0; color: #16a34a;">📋 Informations du client</h3>
          
          <div class="info-row">
            <span class="label">Nom complet :</span>
            <span class="value">${data.nomClient}</span>
          </div>
          
          ${data.nomEntreprise ? `
          <div class="info-row">
            <span class="label">Entreprise :</span>
            <span class="value"><strong>${data.nomEntreprise}</strong></span>
          </div>
          ` : ''}
          
          <div class="info-row">
            <span class="label">Email :</span>
            <span class="value"><a href="mailto:${data.email}" style="color: #16a34a;">${data.email}</a></span>
          </div>
          
          ${data.telephone ? `
          <div class="info-row">
            <span class="label">Téléphone :</span>
            <span class="value"><a href="tel:${data.telephone}" style="color: #16a34a;">${data.telephone}</a></span>
          </div>
          ` : ''}
          
          <div class="info-row">
            <span class="label">Type de projet :</span>
            <span class="value">${data.typeProjet ?? 'Non spécifié'}</span>
          </div>
        </div>

        <div class="info-block">
          <h3 style="margin-top: 0; color: #16a34a;">💬 Description du projet</h3>
          <div class="description-box">
            ${data.descriptionProjet}
          </div>
        </div>

        <div style="text-align: center;">
          <a href="${data.dashboardUrl}" class="button">
            📊 Voir le devis complet dans le dashboard
          </a>
        </div>
      </div>

      <div class="footer">
        <p style="margin: 0;">Email envoyé automatiquement depuis votre système de gestion de devis</p>
        <p style="margin: 5px 0 0 0;">🚀 Formulaire public - Répondre sous 24h</p>
      </div>
    </div>
  </body>
</html>
  `.trim();
}

/**
 * Action publique pour créer un devis sans authentification
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
        typeConstruction: validatedData.typeConstruction ?? null,
        typeBatiment: validatedData.typeBatiment ?? null,
        natureTravaux: validatedData.natureTravaux ?? null,
        besoinsRGE: validatedData.besoinsRGE ?? null,
        nomContact: validatedData.nomContact ?? null,
        nomEntreprise: validatedData.nomEntreprise ?? null,
        fonction: validatedData.fonction ?? null,
        secteurActivite: validatedData.secteurActivite ?? null,
        tailleEntreprise: validatedData.tailleEntreprise ?? null,
        userId: null, // PAS D'AUTHENTIFICATION
        status: "nouveau",
      },
    });

    // eslint-disable-next-line no-console
    console.log("✅ Devis créé en base:", devis.id);

    // 📧 ENVOI EMAIL
    try {
      const dashboardUrl = `${process.env.NEXT_PUBLIC_URL}/admin/devis/${devis.id}`;
      
      // eslint-disable-next-line no-console
      console.log("📧 Envoi de l'email...");
      
      const emailHtml = createEmailTemplate({
        devisId: devis.id,
        clientType: validatedData.clientType,
        nomClient: validatedData.nomComplet,
        nomEntreprise: validatedData.nomEntreprise ?? null,
        email: validatedData.email,
        telephone: validatedData.telephone ?? null,
        typeProjet: validatedData.typeProjet,
        descriptionProjet: validatedData.descriptionProjet,
        dashboardUrl: dashboardUrl,
      });
      
      await sendEmail({
        to: "andyramaroson@gmail.com",
        subject: `🔔 Nouveau devis public - ${validatedData.nomEntreprise ?? validatedData.nomComplet}`,
        html: emailHtml,
      });
      
      // eslint-disable-next-line no-console
      console.log("✅ Email envoyé avec succès !");
    } catch (emailError) {
      // eslint-disable-next-line no-console
      console.error("❌ ERREUR EMAIL:", emailError);
      // On continue quand même, le devis est créé
    }

    revalidatePath("/");
    
    return {
      success: true,
      message: "Votre demande de devis a été enregistrée avec succès ! Nous vous contacterons sous 24h.",
      devisId: devis.id,
    };
    
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("❌ ERREUR CRÉATION DEVIS:", error);
    
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