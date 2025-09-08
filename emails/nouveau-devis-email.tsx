import { SiteConfig } from "@/site-config";
import { Preview } from "@react-email/components";
import { EmailLink, EmailSection, EmailText } from "./utils/components-utils";
import { EmailLayout } from "./utils/email-layout";

type DevisNotificationEmailProps = {
  devisId: string;
  clientType: string;
  nomClient: string;
  nomEntreprise?: string | null;
  email: string;
  typeProjet?: string | null;
  descriptionProjet: string;
  dashboardUrl: string;
};

export default function NouveauDevisEmail({
  devisId,
  clientType,
  nomClient,
  nomEntreprise,
  email,
  typeProjet,
  descriptionProjet,
  dashboardUrl,
}: DevisNotificationEmailProps) {
  // Gérer les valeurs nulles/undefined
  const clientName = nomEntreprise || nomClient;
  const clientTypeLabel = clientType === "professionnel" ? "Professionnel" : "Particulier";
  const projetType = typeProjet || "Non spécifié";
  const shortDevisId = devisId.slice(-8);

  return (
    <EmailLayout>
      <Preview>
        Nouveau devis reçu de {clientName} - {projetType}
      </Preview>
      
      <EmailSection>
        <EmailText>Bonjour Rui,</EmailText>
        
        <EmailText>
          Une nouvelle demande de devis vient d'être enregistrée sur votre plateforme.
        </EmailText>

        {/* Informations du client */}
        <EmailSection style={{ backgroundColor: "#f8f9fa", padding: "16px", borderRadius: "8px", margin: "16px 0" }}>
          <EmailText style={{ fontWeight: "bold", marginBottom: "8px" }}>
            📋 Détails de la demande :
          </EmailText>
          
          <EmailText style={{ margin: "4px 0" }}>
            <strong>ID Devis :</strong> #{shortDevisId}
          </EmailText>
          
          <EmailText style={{ margin: "4px 0" }}>
            <strong>Type de client :</strong> {clientTypeLabel}
          </EmailText>
          
          <EmailText style={{ margin: "4px 0" }}>
            <strong>Nom :</strong> {clientName}
          </EmailText>
          
          <EmailText style={{ margin: "4px 0" }}>
            <strong>Email :</strong> {email}
          </EmailText>
          
          <EmailText style={{ margin: "4px 0" }}>
            <strong>Type de projet :</strong> {projetType}
          </EmailText>
        </EmailSection>

        {/* Description du projet */}
        <EmailSection style={{ backgroundColor: "#fff3cd", padding: "16px", borderRadius: "8px", margin: "16px 0" }}>
          <EmailText style={{ fontWeight: "bold", marginBottom: "8px" }}>
            💡 Description du projet :
          </EmailText>
          <EmailText style={{ fontStyle: "italic" }}>
            "{descriptionProjet}"
          </EmailText>
        </EmailSection>

        {/* Actions */}
        <EmailText>
          <EmailLink 
            href={dashboardUrl}
            style={{
              backgroundColor: "#22c55e",
              color: "white",
              padding: "12px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              display: "inline-block",
              fontWeight: "bold"
            }}
          >
            🔍 Voir le devis complet
          </EmailLink>
        </EmailText>

        <EmailText style={{ fontSize: "14px", color: "#6b7280", marginTop: "16px" }}>
          ⏰ <strong>Action recommandée :</strong> Répondez dans les 24h pour maintenir un excellent taux de satisfaction client.
        </EmailText>
      </EmailSection>

      <EmailText>
        Cordialement,
        <br />- Système de notification de {SiteConfig.title}
      </EmailText>
    </EmailLayout>
  );
}