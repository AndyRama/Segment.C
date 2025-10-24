import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Typography } from "@/components/nowts/typography";
import { SectionLayout } from '@/features/landing/section-layout';

const PrivacyPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Privacy - Segment.C</title>
      </Head>
      <SectionLayout size="lg" variant="default" className="mx-auto mt-[-22] max-w-7xl p-6">
        {/* Header */}
        <header>
          <Typography variant="h1" className="mb-2 text-3xl font-bold">
            Privacy
          </Typography>
          <Typography variant="p" className="mt-4 text-sm text-gray-600">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>
        </header>

        <hr className="my-6" />

        {/* Introduction */}
        <section className="mb-8">
          <Typography variant="p" className="mb-4">
            SEGMENT.C est particulièrement attentif à la protection de vos données personnelles. Concernant les données personnelles que vous nous confiez, nous vous informons de manière transparente sur notre politique en matière de protection des données personnelles.
          </Typography>
          <Typography variant="p" className="mb-4">
            SEGMENT.C s'engage à traiter vos données à caractère personnel conformément aux dispositions du <strong>Règlement Général sur la Protection des Données 2016/679</strong> du Parlement européen et du Conseil du 27 avril 2016 (RGPD) et la <strong>loi n°78-17 du 6 janvier 1978 modifiée</strong> relative à l'informatique, aux fichiers et aux libertés (loi « Informatique et Libertés »).
          </Typography>
          <Typography variant="p">
            Toute information recueillie au travers du site internet www.segment-c.com et permettant de vous identifier, de manière directe ou indirecte, est considérée comme une donnée à caractère personnel et sera traitée conformément à cette politique.
          </Typography>
        </section>

        <hr className="my-6" />

        {/* Article 1 - Responsable de traitement */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            1. Responsable de Traitement et Délégué à la Protection des Données
          </Typography>
          
          <div className="space-y-4">
            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                Responsable de traitement
              </Typography>
              <Typography variant="p" className="mb-4">
                Le responsable de traitement des données collectées et traitées sur ce site internet est :
              </Typography>
              <Typography variant="p" className="mb-2">
                <strong>SEGMENT.C</strong><br />
                Société à Responsabilité Limitée (SARL)<br />
                Siège social : 390 Allée de Saussets - 3 Hameau du Las, 33127 SAINT-JEAN-D'ILLAC<br />
                SIREN : 891 100 919<br />
                RCS de Bordeaux
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                Délégué à la Protection des Données (DPO)
              </Typography>
              <Typography variant="p">
                SEGMENT.C a désigné un délégué à la protection des données que vous pouvez contacter à l'adresse suivante :<br />
                <strong>Email DPO :</strong>{' '}
                <Link href="mailto:dpo@segment-c.com" className="text-blue-500 hover:underline">
                  dpo@segment-c.com
                </Link>
              </Typography>
            </div>
          </div>
        </section>

        <hr className="my-6" />

        {/* Article 2 - Données collectées */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            2. Données Personnelles Collectées
          </Typography>
          
          <div className="space-y-4">
            <Typography variant="h3" className="mb-2 text-xl font-medium">
              Types de données collectées
            </Typography>
            <Typography variant="p" className="mb-4">
              Deux types de données à caractère personnel sont collectés sur le site www.segment-c.com :
            </Typography>

            <div>
              <Typography variant="p" className="mb-2">
                <strong>1. Données saisies et envoyées via les formulaires</strong>
              </Typography>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <Typography variant="p">
                    Civilité, nom, prénom
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Adresse postale
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Adresse email
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Numéro de téléphone
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Tranche horaire préférée pour être contacté
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Société et fonction (pour les professionnels)
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Description du projet
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Message ou demande spécifique
                  </Typography>
                </li>
              </ul>
            </div>

            <div>
              <Typography variant="p" className="mb-2">
                <strong>2. Données collectées automatiquement</strong>
              </Typography>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <Typography variant="p">
                    Adresse IP
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Type de navigateur et système d'exploitation
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Pages visitées et durée de visite
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Source de trafic
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Données collectées par les cookies (voir notre Politique de Cookies)
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-6" />

        {/* Article 3 - Finalités */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            3. Finalités du Traitement, Bases Juridiques et Durées de Conservation
          </Typography>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Finalité du traitement</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Base juridique</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Données traitées</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Durée de conservation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Gestion des demandes de contact via formulaire</td>
                  <td className="border border-gray-300 px-4 py-2">Intérêt légitime (répondre aux demandes)</td>
                  <td className="border border-gray-300 px-4 py-2">Civilité, nom, prénom, email, téléphone, adresse, message, caractéristiques du projet</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <strong>Clients :</strong> 3 ans après la fin de la relation commerciale<br />
                    <strong>Prospects :</strong> 3 ans après la collecte ou le dernier contact
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Gestion des demandes de devis</td>
                  <td className="border border-gray-300 px-4 py-2">Exécution du contrat (échanges précontractuels)</td>
                  <td className="border border-gray-300 px-4 py-2">Civilité, nom, prénom, email, téléphone, adresse, détails du projet</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <strong>Clients :</strong> 3 ans après la fin de la relation commerciale<br />
                    <strong>Prospects :</strong> 3 ans après la collecte ou le dernier contact
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Prospection commerciale (email/téléphone)</td>
                  <td className="border border-gray-300 px-4 py-2">Intérêt légitime (promouvoir nos services)</td>
                  <td className="border border-gray-300 px-4 py-2">Nom, prénom, email, téléphone, historique des demandes</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <strong>Clients :</strong> 3 ans après la fin de la relation commerciale<br />
                    <strong>Prospects :</strong> 3 ans après la collecte ou le dernier contact
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Gestion de la relation client</td>
                  <td className="border border-gray-300 px-4 py-2">Exécution du contrat</td>
                  <td className="border border-gray-300 px-4 py-2">Toutes données nécessaires à la relation commerciale</td>
                  <td className="border border-gray-300 px-4 py-2">Durée de la relation commerciale + 5 ans (obligations légales)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Mesure d'audience et statistiques</td>
                  <td className="border border-gray-300 px-4 py-2">Intérêt légitime (améliorer le site)</td>
                  <td className="border border-gray-300 px-4 py-2">Données de navigation anonymisées, adresse IP</td>
                  <td className="border border-gray-300 px-4 py-2">13 mois maximum</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Enquêtes de satisfaction</td>
                  <td className="border border-gray-300 px-4 py-2">Intérêt légitime (améliorer nos services)</td>
                  <td className="border border-gray-300 px-4 py-2">Nom, prénom, email, avis et réponses aux questionnaires</td>
                  <td className="border border-gray-300 px-4 py-2">Aussi longtemps que l'avis est publié</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="my-6" />

        {/* Article 4 - Destinataires */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            4. Destinataires des Données
          </Typography>
          
          <Typography variant="p" className="mb-4">
            Les données que vous nous communiquez peuvent être transmises aux destinataires suivants :
          </Typography>

          <div className="space-y-4">
            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                4.1 Personnel autorisé de SEGMENT.C
              </Typography>
              <Typography variant="p" className="mb-2">
                Vos données sont accessibles uniquement aux employés de SEGMENT.C ayant besoin d'en connaître dans le cadre de leurs fonctions (équipe commerciale, service client, direction).
              </Typography>
              <Typography variant="p">
                Tous les employés de SEGMENT.C valident un engagement de confidentialité qui les oblige à respecter la confidentialité des données.
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                4.2 Sous-traitants
              </Typography>
              <Typography variant="p" className="mb-2">
                Les données collectées peuvent être transmises à nos sous-traitants pour la réalisation de services nécessaires :
              </Typography>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <Typography variant="p">
                    <strong>Hébergeur web :</strong> [Nom de l'hébergeur] - pour l'hébergement du site
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Service emailing :</strong> [Nom du service] - pour l'envoi de communications (si applicable)
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Outils d'analyse :</strong> Google Analytics - pour les statistiques du site
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>CRM :</strong> [Nom du CRM] - pour la gestion de la relation client (si applicable)
                  </Typography>
                </li>
              </ul>
              <Typography variant="p" className="mt-2">
                Ces sous-traitants agissent uniquement sur instructions de SEGMENT.C et sont contractuellement tenus de garantir la sécurité et la confidentialité des données.
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                4.3 Partenaires commerciaux
              </Typography>
              <Typography variant="p">
                Dans certains cas, et uniquement avec votre consentement préalable, vos données peuvent être partagées avec des partenaires revendeurs ou installateurs dans votre secteur géographique afin de répondre à votre demande.
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                4.4 Obligations légales
              </Typography>
              <Typography variant="p">
                SEGMENT.C peut être amenée à divulguer vos données personnelles si la loi l'exige ou en réponse à une procédure judiciaire.
              </Typography>
            </div>
          </div>
        </section>

        <hr className="my-6" />

        {/* Article 5 - Transferts */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            5. Transferts de Données
          </Typography>
          
          <div className="space-y-4">
            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                5.1 Localisation des données
              </Typography>
              <Typography variant="p" className="mb-2">
                Les serveurs d'hébergement du site sont exclusivement situés au sein de l'<strong>Union Européenne</strong>.
              </Typography>
              <Typography variant="p">
                SEGMENT.C s'engage à ne procéder à <strong>aucun transfert de données à caractère personnel</strong> vers un État non membre de l'Union Européenne, sauf dans le respect des garanties appropriées prévues par le RGPD.
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                5.2 Cas particuliers
              </Typography>
              <Typography variant="p">
                Certains outils tiers (comme Google Analytics) peuvent stocker des données aux États-Unis. Dans ce cas, ces transferts sont encadrés par des clauses contractuelles types approuvées par la Commission européenne.
              </Typography>
            </div>
          </div>
        </section>

        <hr className="my-6" />

        {/* Article 6 - Sécurité */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            6. Sécurité des Données Personnelles
          </Typography>
          
          <Typography variant="p" className="mb-4">
            SEGMENT.C met en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté aux risques :
          </Typography>

          <div className="space-y-4">
            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                Mesures techniques
              </Typography>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <Typography variant="p">
                    <strong>Chiffrement HTTPS/TLS :</strong> toutes les pages du site utilisent le protocole sécurisé HTTPS avec TLS 1.2 ou supérieur
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Certificat SSL :</strong> les échanges entre votre navigateur et nos serveurs sont chiffrés
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Serveurs sécurisés :</strong> hébergement sur des serveurs certifiés avec pare-feu et protection anti-DDoS
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Sauvegardes régulières :</strong> copies de sauvegarde quotidiennes des données
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Contrôle d'accès :</strong> authentification forte et limitation des accès aux seuls personnels autorisés
                  </Typography>
                </li>
              </ul>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                Mesures organisationnelles
              </Typography>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <Typography variant="p">
                    Formation du personnel à la protection des données
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Privacy interne
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Processus de gestion des incidents de sécurité
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Audits réguliers de sécurité
                  </Typography>
                </li>
              </ul>
            </div>

            <Typography variant="p" className="mt-4">
              Malgré ces mesures, aucun système n'est infaillible. En cas de violation de données susceptible d'engendrer un risque pour vos droits et libertés, nous vous en informerons conformément au RGPD.
            </Typography>
          </div>
        </section>

        <hr className="my-6" />

        {/* Article 7 - Vos droits */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            7. Vos Droits sur vos Données Personnelles
          </Typography>
          
          <Typography variant="p" className="mb-4">
            Conformément aux dispositions du RGPD et de la loi Informatique et Libertés, vous disposez des droits suivants :
          </Typography>

          <div className="space-y-4">
            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                7.1 Droit d'accès
              </Typography>
              <Typography variant="p">
                Vous avez le droit d'obtenir la confirmation que vos données personnelles font ou ne font pas l'objet d'un traitement, et d'en obtenir une copie.
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                7.2 Droit de rectification
              </Typography>
              <Typography variant="p">
                Vous avez le droit d'obtenir la rectification de données personnelles inexactes ou de pouvoir compléter des données incomplètes vous concernant.
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                7.3 Droit à l'effacement ("droit à l'oubli")
              </Typography>
              <Typography variant="p" className="mb-2">
                Vous avez le droit d'obtenir la suppression de vos données personnelles dans les cas suivants :
              </Typography>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  <Typography variant="p">
                    Les données ne sont plus nécessaires au regard des finalités
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Vous retirez votre consentement
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Vous vous opposez au traitement
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Les données ont fait l'objet d'un traitement illicite
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Les données doivent être effacées pour respecter une obligation légale
                  </Typography>
                </li>
              </ul>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                7.4 Droit à la limitation du traitement
              </Typography>
              <Typography variant="p">
                Vous avez le droit de demander le gel temporaire du traitement de vos données dans certaines situations.
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                7.5 Droit à la portabilité
              </Typography>
              <Typography variant="p">
                Vous avez le droit de recevoir les données personnelles que vous nous avez fournies dans un format structuré, couramment utilisé et lisible par machine, et de les transmettre à un autre responsable de traitement.
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                7.6 Droit d'opposition
              </Typography>
              <Typography variant="p" className="mb-2">
                Vous avez le droit de vous opposer à tout moment, pour des raisons tenant à votre situation particulière, au traitement de vos données personnelles fondé sur l'intérêt légitime.
              </Typography>
              <Typography variant="p">
                <strong>Prospection commerciale :</strong> Vous pouvez vous opposer à tout moment à la prospection commerciale en cliquant sur le lien de désinscription présent dans chaque email commercial ou en nous contactant directement.
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                7.7 Droit de définir des directives post-mortem
              </Typography>
              <Typography variant="p">
                Vous avez le droit de définir des directives relatives à la conservation, à l'effacement et à la communication de vos données après votre décès.
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                7.8 Droit de retirer votre consentement
              </Typography>
              <Typography variant="p">
                Lorsque le traitement est fondé sur votre consentement, vous pouvez le retirer à tout moment. Ce retrait ne remet pas en cause la licéité du traitement effectué avant le retrait.
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                7.9 Droit de réclamation auprès de la CNIL
              </Typography>
              <Typography variant="p" className="mb-2">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la Commission Nationale de l'Informatique et des Libertés (CNIL) :
              </Typography>
              <ul className="ml-6 space-y-2">
                <li>
                  <Typography variant="p">
                    En ligne :{' '}
                    <Link href="https://www.cnil.fr/fr/plaintes" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      https://www.cnil.fr/fr/plaintes
                    </Link>
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Par courrier : CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-6" />

        {/* Article 8 - Exercice des droits */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            8. Modalités d'Exercice de vos Droits
          </Typography>
          
          <Typography variant="p" className="mb-4">
            Pour exercer l'un de vos droits, vous pouvez nous contacter :
          </Typography>

          <div className="space-y-4">
            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                Par email
              </Typography>
              <Typography variant="p">
                <Link href="mailto:contact@segment-c.com" className="text-blue-500 hover:underline">
                  contact@segment-c.com
                </Link>
                <br />
                Objet : "Exercice de mes droits RGPD"
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                Par courrier postal
              </Typography>
              <Typography variant="p">
                <strong>SEGMENT.C</strong><br />
                Service Protection des Données<br />
                390 Allée de Saussets - 3 Hameau du Las<br />
                33127 SAINT-JEAN-D'ILLAC<br />
                France
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                Informations à fournir
              </Typography>
              <Typography variant="p" className="mb-2">
                Pour traiter votre demande, merci de joindre :
              </Typography>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <Typography variant="p">
                    Une copie d'une pièce d'identité en cours de validité
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    La précision du droit que vous souhaitez exercer
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    Votre adresse email ou postale pour vous répondre
                  </Typography>
                </li>
              </ul>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                Délai de réponse
              </Typography>
              <Typography variant="p">
                Nous nous engageons à vous répondre dans un délai maximum d'<strong>un mois</strong> à compter de la réception de votre demande. Ce délai peut être prolongé de deux mois en cas de demande complexe ; dans ce cas, vous en serez informé.
              </Typography>
            </div>
          </div>
        </section>

        <hr className="my-6" />

        {/* Article 9 - Cookies */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            9. Cookies et Technologies Similaires
          </Typography>
          
          <Typography variant="p">
            Le site www.segment-c.com utilise des cookies et technologies similaires. Pour plus d'informations, consultez notre{' '}
            <Link href="/politique-cookies" className="text-blue-500 hover:underline">
              Politique de Cookies
            </Link>.
          </Typography>
        </section>

        <hr className="my-6" />

        {/* Article 10 - Modifications */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            10. Modifications de la Privacy
          </Typography>
          
          <Typography variant="p" className="mb-4">
            SEGMENT.C se réserve le droit de modifier cette Privacy à tout moment. En cas de modification substantielle, vous en serez informé par un avis sur le site ou par email si nous disposons de votre adresse.
          </Typography>
          <Typography variant="p">
            La date de dernière mise à jour est indiquée en haut de cette page.
          </Typography>
        </section>

        <hr className="my-6" />

        {/* Contact */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            11. Contact
          </Typography>
          
          <Typography variant="p" className="mb-4">
            Pour toute question concernant cette Privacy ou le traitement de vos données personnelles :
          </Typography>

          <ul className="ml-6 space-y-2">
            <li>
              <Typography variant="p">
                <strong>Email :</strong>{' '}
                <Link href="mailto:contact@segment-c.com" className="text-blue-500 hover:underline">
                  contact@segment-c.com
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                <strong>Téléphone :</strong> [Numéro de téléphone]
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                <strong>Courrier :</strong> SEGMENT.C - 390 Allée de Saussets, 3 Hameau du Las, 33127 SAINT-JEAN-D'ILLAC
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                <strong>DPO (Délégué à la Protection des Données) :</strong>{' '}
                <Link href="mailto:dpo@segment-c.com" className="text-blue-500 hover:underline">
                  dpo@segment-c.com
                </Link>
              </Typography>
            </li>
          </ul>
        </section>

        <hr className="my-6" />

        <footer className="mt-8 text-center">
          <Typography variant="p" className="text-sm italic text-gray-600">
            SEGMENT.C s'engage à respecter la confidentialité et la sécurité de vos données personnelles.
          </Typography>
        </footer>
      </SectionLayout>
    </>
  );
};

export default PrivacyPage;