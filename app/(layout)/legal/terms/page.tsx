import { Typography } from "@/components/nowts/typography";
import { NotifyNowts } from "@/features/nowts/notify-nowts";
import { Layout, LayoutContent } from "@/features/page/layout";
import { SiteConfig } from "@/site-config";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote-client/rsc";

const markdown = `
---
title: "Mentions Légales"
description: "Mentions légales du site Segment.C"
noindex: true
---

# Mentions Légales

---

## Article 1 – Informations Légales

### 1.1 – Site

[www.segment-c.com](https://www.segment-c.com)

### 1.2 – Éditeur

SEGMENT.C est une Société à Responsabilité Limitée (SARL) au capital social de [CAPITAL], dont le siège social est situé au :

**390 Allée de Saussets - 3 Hameau du Las  
33127 SAINT-JEAN-D'ILLAC  
France**

- **SIREN :** 891 100 919
- **Immatriculation :** RCS de Bordeaux
- **N° TVA intracommunautaire :** FR [XX] 891100919
- **Activité :** Travaux de menuiserie bois et PVC
- **Représentant légal :** Monsieur Rui ARAUJO DECARVALHO, Gérant

### Contact

- **Téléphone :** [Numéro de téléphone]
- **Email :** [contact@segment-c.com](mailto:contact@segment-c.com)

### 1.3 – Directeur de la publication

Monsieur Rui ARAUJO DECARVALHO

### 1.4 – Conception et réalisation

[Nom de l'agence web ou développeur]

---

## Article 2 – Hébergement

Le site www.segment-c.com est hébergé par :

**[Nom de l'hébergeur]**  
Adresse : [Adresse de l'hébergeur]  
Téléphone : [Téléphone de l'hébergeur]  
Site web : [Site web de l'hébergeur]

_Exemple : Vercel Inc., OVH, O2Switch, etc._

---

## Article 3 – Accès au Site

L'accès au site www.segment-c.com est accessible à tous les utilisateurs.

L'accès au site et son utilisation sont réservés à un usage strictement personnel. Vous vous engagez à ne pas utiliser ce site et les informations ou données qui y figurent à des fins commerciales, politiques, publicitaires et pour toute forme de sollicitation commerciale non autorisée, notamment l'envoi de courriers électroniques non sollicités.

---

## Article 4 – Propriété Intellectuelle

Tous les éléments présents sur le site www.segment-c.com, y compris les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner ce site, sont protégés par les lois en vigueur au titre de la propriété intellectuelle.

Ils sont la propriété pleine et entière de SEGMENT.C ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de SEGMENT.C, sont strictement interdites.

Le fait pour SEGMENT.C de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites.

---

## Article 5 – Gestion du Site

Pour la bonne gestion du site, l'éditeur pourra à tout moment :

- Suspendre, interrompre ou limiter l'accès à tout ou partie du site, réserver l'accès au site, ou à certaines parties du site, à une catégorie déterminée d'internautes
- Supprimer toute information pouvant en perturber le fonctionnement ou entrant en contravention avec les lois nationales ou internationales
- Suspendre le site afin de procéder à des mises à jour

---

## Article 6 – Responsabilités

La responsabilité de SEGMENT.C ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités.

Le matériel de connexion au site que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres données notamment d'attaques virales par Internet.

SEGMENT.C ne pourra être tenu responsable en cas de poursuites judiciaires à votre encontre du fait de l'usage du site ou de tout service accessible via Internet, ou du fait du non-respect par vous des présentes conditions générales d'utilisation.

SEGMENT.C n'est pas responsable des dommages causés à vous-même, à des tiers et/ou à votre équipement du fait de votre connexion ou de votre utilisation du site.

---

## Article 7 – Liens Hypertextes

La mise en place par vous de tous liens hypertextes vers tout ou partie du site est strictement interdite, sauf autorisation préalable et écrite de SEGMENT.C.

SEGMENT.C peut fournir des liens vers d'autres sites. Ces sites sont indépendants et SEGMENT.C n'édite ni ne contrôle les sources et contenus de ces sites ou leurs liens avec d'autres sites.

SEGMENT.C ne saurait être tenu pour responsable du contenu, des produits, des services, de la publicité ou de tous autres éléments de ces sites ainsi que pour tous les dommages ou pertes consécutifs à leur utilisation.

---

## Article 8 – Protection des Données Personnelles

Les informations recueillies dans le cadre de l'utilisation du site www.segment-c.com sont destinées à SEGMENT.C, responsable de traitement.

### 8.1 – Collecte et utilisation des données

Les données personnelles recueillies via le site sont principalement utilisées pour :

- La gestion des demandes de devis et de contact
- L'amélioration de nos services
- L'envoi d'informations commerciales (avec votre consentement)

### 8.2 – Vos droits (RGPD)

Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :

- **Droit d'accès :** vous pouvez demander une copie de vos données personnelles
- **Droit de rectification :** vous pouvez demander la correction de vos données
- **Droit à l'effacement :** vous pouvez demander la suppression de vos données
- **Droit à la limitation du traitement :** vous pouvez demander la limitation de l'utilisation de vos données
- **Droit à la portabilité :** vous pouvez récupérer vos données dans un format structuré
- **Droit d'opposition :** vous pouvez vous opposer au traitement de vos données

### 8.3 – Exercer vos droits

Pour exercer ces droits, vous pouvez nous contacter :

- **Par email :** [contact@segment-c.com](mailto:contact@segment-c.com) avec comme objet "Exercice de mes droits RGPD"
- **Par courrier :** SEGMENT.C - 390 Allée de Saussets, 3 Hameau du Las, 33127 SAINT-JEAN-D'ILLAC

Un email de confirmation vous sera envoyé attestant de la prise en compte de votre demande. Nous nous engageons à y répondre dans un délai maximum d'un mois.

### 8.4 – Sécurité des données

SEGMENT.C s'engage à prendre toutes les mesures nécessaires pour préserver la sécurité et la confidentialité de vos données personnelles, et notamment empêcher qu'elles ne soient déformées, endommagées ou communiquées à des tiers non autorisés.

---

## Article 9 – Cookies

Un cookie est un fichier déposé sur votre terminal lors de la visite d'un site web. Il a pour but de collecter des informations relatives à votre navigation et de vous adresser des services adaptés à votre terminal (ordinateur, mobile ou tablette).

Le site www.segment-c.com peut collecter automatiquement des informations standards. Toutes les informations collectées indirectement ne seront utilisées que pour suivre le volume, le type et la configuration du trafic utilisant ce site, pour en développer la conception et l'agencement et à d'autres fins administratives et de planification.

### Types de cookies utilisés

- **Cookies techniques :** nécessaires au fonctionnement du site
- **Cookies analytiques :** pour mesurer l'audience du site (Google Analytics, etc.)
- **Cookies publicitaires :** pour personnaliser la publicité (si applicable)

Vous pouvez gérer vos préférences en matière de cookies lors de votre première navigation sur le site via le bandeau de gestion des cookies. Vous pouvez également paramétrer votre navigateur pour refuser les cookies. Les modalités sont précisées sur le site Internet de la Commission Nationale de l'Informatique et des Libertés (CNIL) : [www.cnil.fr](https://www.cnil.fr)

---

## Article 10 – Photographies et Représentation des Produits

Les photographies de produits et réalisations, accompagnant leur description, ne sont pas contractuelles et n'engagent pas SEGMENT.C. Dans un souci d'amélioration continue, nos modèles et réalisations peuvent être modifiés sans préavis.

---

## Article 11 – Loi Applicable et Juridiction Compétente

Les présentes mentions légales et conditions d'utilisation du site sont régies par la loi française. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents du siège social de SEGMENT.C, conformément aux règles de compétence en vigueur.

---

## Article 12 – Crédits

**Conception et design web :** Andy Ramaroson

**Crédits photos :** © SEGMENT.C, Sybaie, SWAO, Proferm

**Visuels fournis par :** Sybaie ([www.sybaie.pro](https://www.sybaie.pro)), SWAO ([www.swao.fr](https://www.swao.fr)), Proferm

---

## Nous Contacter

Pour toute question concernant ces mentions légales ou le fonctionnement du site, vous pouvez nous contacter :

- **Par email :** [contact@segment-c.com](mailto:contact@segment-c.com)
- **Par téléphone :** [Numéro de téléphone]
- **Par courrier :** SEGMENT.C - 390 Allée de Saussets, 3 Hameau du Las, 33127 SAINT-JEAN-D'ILLAC, France

---

_Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}_
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
        <Typography variant="h1">Terms</Typography>
      </div>
      <Layout>
        <LayoutContent className="prose dark:prose-invert m-auto mb-8">
          <MDXRemote source={markdown} />
        </LayoutContent>
      </Layout>

      {/* Notify NOWTS during build only */}
      <NotifyNowts />
    </div>
  );
}
