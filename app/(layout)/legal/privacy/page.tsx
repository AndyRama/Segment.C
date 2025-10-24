import { Typography } from "@/components/nowts/typography";
import { Layout, LayoutContent } from "@/features/page/layout";
import { SiteConfig } from "@/site-config";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote-client/rsc";

const markdown = `
---
title: "Privacy"
description: "Politique de protection des données personnelles de Segment.C"
noindex: true
---

# Politique de Confidentialité

**Dernière mise à jour :** {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}

SEGMENT.C est particulièrement attentif à la protection de vos données personnelles. Concernant les données personnelles que vous nous confiez, nous vous informons de manière transparente sur notre politique en matière de protection des données personnelles.

SEGMENT.C s'engage à traiter vos données à caractère personnel conformément aux dispositions du **Règlement Général sur la Protection des Données 2016/679** du Parlement européen et du Conseil du 27 avril 2016 (RGPD) et la **loi n°78-17 du 6 janvier 1978 modifiée** relative à l'informatique, aux fichiers et aux libertés (loi « Informatique et Libertés »).

Toute information recueillie au travers du site internet www.segment-c.com et permettant de vous identifier, de manière directe ou indirecte, est considérée comme une donnée à caractère personnel et sera traitée conformément à cette politique.

---

## 1. Responsable de Traitement et Délégué à la Protection des Données

### Responsable de traitement

Le responsable de traitement des données collectées et traitées sur ce site internet est :

**SEGMENT.C**  
Société à Responsabilité Limitée (SARL)  
Siège social : 390 Allée de Saussets - 3 Hameau du Las, 33127 SAINT-JEAN-D'ILLAC  
SIREN : 891 100 919  
RCS de Bordeaux

### Délégué à la Protection des Données (DPO)

SEGMENT.C a désigné un délégué à la protection des données que vous pouvez contacter à l'adresse suivante :  
**Email DPO :** dpo@segment-c.com _(à adapter selon votre organisation)_

---

## 2. Données Personnelles Collectées

### Types de données collectées

Deux types de données à caractère personnel sont collectés sur le site www.segment-c.com :

1. **Données saisies et envoyées via les formulaires**
   - Civilité, nom, prénom
   - Adresse postale
   - Adresse email
   - Numéro de téléphone
   - Tranche horaire préférée pour être contacté
   - Société et fonction (pour les professionnels)
   - Description du projet
   - Message ou demande spécifique

2. **Données collectées automatiquement**
   - Adresse IP
   - Type de navigateur et système d'exploitation
   - Pages visitées et durée de visite
   - Source de trafic
   - Données collectées par les cookies (voir notre Politique de Cookies)

---

## 3. Finalités du Traitement, Bases Juridiques et Durées de Conservation

| **Finalité du traitement** | **Base juridique** | **Données traitées** | **Durée de conservation** |
|---------------------------|-------------------|---------------------|--------------------------|
| Gestion des demandes de contact via formulaire | Intérêt légitime (répondre aux demandes) | Civilité, nom, prénom, email, téléphone, adresse, message, caractéristiques du projet | **Clients :** 3 ans après la fin de la relation commerciale<br/>**Prospects :** 3 ans après la collecte ou le dernier contact |
| Gestion des demandes de devis | Exécution du contrat (échanges précontractuels) | Civilité, nom, prénom, email, téléphone, adresse, détails du projet | **Clients :** 3 ans après la fin de la relation commerciale<br/>**Prospects :** 3 ans après la collecte ou le dernier contact |
| Prospection commerciale (email/téléphone) | Intérêt légitime (promouvoir nos services) | Nom, prénom, email, téléphone, historique des demandes | **Clients :** 3 ans après la fin de la relation commerciale<br/>**Prospects :** 3 ans après la collecte ou le dernier contact |
| Gestion de la relation client | Exécution du contrat | Toutes données nécessaires à la relation commerciale | Durée de la relation commerciale + 5 ans (obligations légales) |
| Mesure d'audience et statistiques | Intérêt légitime (améliorer le site) | Données de navigation anonymisées, adresse IP | 13 mois maximum |
| Enquêtes de satisfaction | Intérêt légitime (améliorer nos services) | Nom, prénom, email, avis et réponses aux questionnaires | Aussi longtemps que l'avis est publié |

---

## 4. Destinataires des Données

Les données que vous nous communiquez peuvent être transmises aux destinataires suivants :

### 4.1 Personnel autorisé de SEGMENT.C

Vos données sont accessibles uniquement aux employés de SEGMENT.C ayant besoin d'en connaître dans le cadre de leurs fonctions (équipe commerciale, service client, direction).

Tous les employés de SEGMENT.C valident un engagement de confidentialité qui les oblige à respecter la confidentialité des données.

### 4.2 Sous-traitants

Les données collectées peuvent être transmises à nos sous-traitants pour la réalisation de services nécessaires :

- **Hébergeur web** : [Nom de l'hébergeur] - pour l'hébergement du site
- **Service emailing** : [Nom du service] - pour l'envoi de communications (si applicable)
- **Outils d'analyse** : Google Analytics - pour les statistiques du site
- **CRM** : [Nom du CRM] - pour la gestion de la relation client (si applicable)

Ces sous-traitants agissent uniquement sur instructions de SEGMENT.C et sont contractuellement tenus de garantir la sécurité et la confidentialité des données.

### 4.3 Partenaires commerciaux

Dans certains cas, et uniquement avec votre consentement préalable, vos données peuvent être partagées avec des partenaires revendeurs ou installateurs dans votre secteur géographique afin de répondre à votre demande.

### 4.4 Obligations légales

SEGMENT.C peut être amenée à divulguer vos données personnelles si la loi l'exige ou en réponse à une procédure judiciaire.

---

## 5. Transferts de Données

### 5.1 Localisation des données

Les serveurs d'hébergement du site sont exclusivement situés au sein de l'**Union Européenne**.

SEGMENT.C s'engage à ne procéder à **aucun transfert de données à caractère personnel** vers un État non membre de l'Union Européenne, sauf dans le respect des garanties appropriées prévues par le RGPD.

### 5.2 Cas particuliers

Certains outils tiers (comme Google Analytics) peuvent stocker des données aux États-Unis. Dans ce cas, ces transferts sont encadrés par des clauses contractuelles types approuvées par la Commission européenne.

---

## 6. Sécurité des Données Personnelles

SEGMENT.C met en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté aux risques :

### Mesures techniques

- **Chiffrement HTTPS/TLS** : toutes les pages du site utilisent le protocole sécurisé HTTPS avec TLS 1.2 ou supérieur
- **Certificat SSL** : les échanges entre votre navigateur et nos serveurs sont chiffrés
- **Serveurs sécurisés** : hébergement sur des serveurs certifiés avec pare-feu et protection anti-DDoS
- **Sauvegardes régulières** : copies de sauvegarde quotidiennes des données
- **Contrôle d'accès** : authentification forte et limitation des accès aux seuls personnels autorisés

### Mesures organisationnelles

- Formation du personnel à la protection des données
- Politique de confidentialité interne
- Processus de gestion des incidents de sécurité
- Audits réguliers de sécurité

Malgré ces mesures, aucun système n'est infaillible. En cas de violation de données susceptible d'engendrer un risque pour vos droits et libertés, nous vous en informerons conformément au RGPD.

---

## 7. Vos Droits sur vos Données Personnelles

Conformément aux dispositions du RGPD et de la loi Informatique et Libertés, vous disposez des droits suivants :

### 7.1 Droit d'accès

Vous avez le droit d'obtenir la confirmation que vos données personnelles font ou ne font pas l'objet d'un traitement, et d'en obtenir une copie.

### 7.2 Droit de rectification

Vous avez le droit d'obtenir la rectification de données personnelles inexactes ou de pouvoir compléter des données incomplètes vous concernant.

### 7.3 Droit à l'effacement ("droit à l'oubli")

Vous avez le droit d'obtenir la suppression de vos données personnelles dans les cas suivants :
- Les données ne sont plus nécessaires au regard des finalités
- Vous retirez votre consentement
- Vous vous opposez au traitement
- Les données ont fait l'objet d'un traitement illicite
- Les données doivent être effacées pour respecter une obligation légale

### 7.4 Droit à la limitation du traitement

Vous avez le droit de demander le gel temporaire du traitement de vos données dans certaines situations.

### 7.5 Droit à la portabilité

Vous avez le droit de recevoir les données personnelles que vous nous avez fournies dans un format structuré, couramment utilisé et lisible par machine, et de les transmettre à un autre responsable de traitement.

### 7.6 Droit d'opposition

Vous avez le droit de vous opposer à tout moment, pour des raisons tenant à votre situation particulière, au traitement de vos données personnelles fondé sur l'intérêt légitime.

**Prospection commerciale :** Vous pouvez vous opposer à tout moment à la prospection commerciale en :
- Cliquant sur le lien de désinscription présent dans chaque email commercial
- Nous contactant directement

### 7.7 Droit de définir des directives post-mortem

Vous avez le droit de définir des directives relatives à la conservation, à l'effacement et à la communication de vos données après votre décès.

### 7.8 Droit de retirer votre consentement

Lorsque le traitement est fondé sur votre consentement, vous pouvez le retirer à tout moment. Ce retrait ne remet pas en cause la licéité du traitement effectué avant le retrait.

### 7.9 Droit de réclamation auprès de la CNIL

Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la Commission Nationale de l'Informatique et des Libertés (CNIL) :
- En ligne : [https://www.cnil.fr/fr/plaintes](https://www.cnil.fr/fr/plaintes)
- Par courrier : CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07

---

## 8. Modalités d'Exercice de vos Droits

Pour exercer l'un de vos droits, vous pouvez nous contacter :

### Par email
**contact@segment-c.com**  
Objet : "Exercice de mes droits RGPD"

### Par courrier postal
**SEGMENT.C**  
Service Protection des Données  
390 Allée de Saussets - 3 Hameau du Las  
33127 SAINT-JEAN-D'ILLAC  
France

### Informations à fournir

Pour traiter votre demande, merci de joindre :
- Une copie d'une pièce d'identité en cours de validité
- La précision du droit que vous souhaitez exercer
- Votre adresse email ou postale pour vous répondre

### Délai de réponse

Nous nous engageons à vous répondre dans un délai maximum d'**un mois** à compter de la réception de votre demande. Ce délai peut être prolongé de deux mois en cas de demande complexe ; dans ce cas, vous en serez informé.

---

## 9. Cookies et Technologies Similaires

Le site www.segment-c.com utilise des cookies et technologies similaires. Pour plus d'informations, consultez notre [Politique de Cookies](/politique-cookies).

---

## 10. Modifications de la Politique de Confidentialité

SEGMENT.C se réserve le droit de modifier cette politique de confidentialité à tout moment. En cas de modification substantielle, vous en serez informé par un avis sur le site ou par email si nous disposons de votre adresse.

La date de dernière mise à jour est indiquée en haut de cette page.

---

## 11. Contact

Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :

**Email :** contact@segment-c.com  
**Téléphone :** [Numéro de téléphone]  
**Courrier :** SEGMENT.C - 390 Allée de Saussets, 3 Hameau du Las, 33127 SAINT-JEAN-D'ILLAC

**DPO (Délégué à la Protection des Données) :** dpo@segment-c.com

---

*SEGMENT.C s'engage à respecter la confidentialité et la sécurité de vos données personnelles.*
`;

export const metadata: Metadata = {
  title: `${SiteConfig.title} - Terms`,
  description: "Terms of service",
};

export const dynamic = "force-static";

export default function page() {
  return (
    <div>
      <div className="bg-card flex w-full items-center justify-center p-8 lg:p-12">
        <Typography variant="h1">Privacy</Typography>
      </div>
      <Layout>
        <LayoutContent className="prose dark:prose-invert m-auto mb-8">
          <MDXRemote source={markdown} />
        </LayoutContent>
      </Layout>
    </div>
  );
}
