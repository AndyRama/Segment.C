import { SiteConfig } from "@/site-config";
import { Preview, Text } from "@react-email/components";
import { EmailLink, EmailSection, EmailText } from "./utils/components-utils";
import { EmailLayout } from "./utils/email-layout";

export default function SubscriptionFailedEmail({ url }: { url: string }) {
  return (
    <EmailLayout>
      <Preview>
        Informations importantes concernant votre compte {SiteConfig.title}
      </Preview>
      <EmailSection>
        <EmailText>Bonjour,</EmailText>
        <EmailText>
          Votre dernier paiement n'a pas pu être traité, vos fonctionnalités
          supplémentaires sont donc en attente.
        </EmailText>
        <EmailText>
          Nous avons remarqué un problème avec votre paiement récent, ce qui affecte votre
          accès à nos fonctionnalités premium.
        </EmailText>
        <EmailText>
          Pour résoudre ce problème et continuer à profiter de tous les avantages, il vous suffit de mettre à jour
          vos informations de paiement via le lien ci-dessous. C'est rapide et
          simple !
        </EmailText>
        <EmailText>
          <EmailLink href={url}>
            👉 Cliquez pour mettre à jour le paiement et continuer à utiliser {SiteConfig.title} 👈
          </EmailLink>
        </EmailText>
        <EmailText>
          Merci de votre attention rapide à ce sujet. Nous sommes là pour vous aider
          si vous avez des questions.
        </EmailText>
      </EmailSection>
      <Text className="text-lg leading-6">
        Cordialement,
        <br />- {SiteConfig.team.name} de {SiteConfig.title}
      </Text>
    </EmailLayout>
  );
}