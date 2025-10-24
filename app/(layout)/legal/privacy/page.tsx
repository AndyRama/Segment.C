import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Typography } from "@/components/nowts/typography";
import { SectionLayout } from '@/features/landing/section-layout';

const MentionsLegalesPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Mentions Légales - Segment.C</title>
      </Head>
      <SectionLayout size="lg" variant="default" className="mx-auto mt-[-22] max-w-7xl p-6">
        {/* Header */}
        <header>
          <Typography variant="h1" className="mb-2 text-3xl font-bold">
            Mentions Légales
          </Typography>
        </header>

        <hr className="my-6" />

        {/* ARTICLE 1 - Informations légales */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            Article 1 – Informations Légales
          </Typography>
          
          <div className="space-y-4">
            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                1.1 – Site
              </Typography>
              <Typography variant="p">
                <Link href="https://www.segment-c.com" className="text-blue-500 hover:underline">
                  www.segment-c.com
                </Link>
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                1.2 – Éditeur
              </Typography>
              <Typography variant="p" className="mb-4">
                SEGMENT.C est une Société à Responsabilité Limitée (SARL) au capital social de [CAPITAL], dont le siège social est situé au :
              </Typography>
              <Typography variant="p" className="mb-4">
                <strong>390 Allée de Saussets - 3 Hameau du Las<br />
                33127 SAINT-JEAN-D'ILLAC<br />
                France</strong>
              </Typography>
              <ul className="ml-6 space-y-2">
                <li>
                  <Typography variant="p">
                    <strong>SIREN :</strong> 891 100 919
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Immatriculation :</strong> RCS de Bordeaux
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>N° TVA intracommunautaire :</strong> FR [XX] 891100919
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Activité :</strong> Travaux de menuiserie bois et PVC
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Représentant légal :</strong> Monsieur Rui ARAUJO DECARVALHO, Gérant
                  </Typography>
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                Contact
              </Typography>
              <ul className="ml-6 space-y-2">
                <li>
                  <Typography variant="p">
                    <strong>Téléphone :</strong> [Numéro de téléphone]
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Email :</strong>{' '}
                    <Link href="mailto:contact@segment-c.com" className="text-blue-500 hover:underline">
                      contact@segment-c.com
                    </Link>
                  </Typography>
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                1.3 – Directeur de la publication
              </Typography>
              <Typography variant="p">
                Monsieur Rui ARAUJO DECARVALHO
              </Typography>
            </div>

            <div className="mt-4">
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                1.4 – Conception et réalisation
              </Typography>
              <Typography variant="p">
                [Nom de l'agence web ou développeur]
              </Typography>
            </div>
          </div>
        </section>

        <hr className="my-6" />

        {/* ARTICLE 2 - Hébergement */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            Article 2 – Hébergement
          </Typography>
          <Typography variant="p" className="mb-4">
            Le site www.segment-c.com est hébergé par :
          </Typography>
          <Typography variant="p">
            <strong>[Nom de l'hébergeur]</strong><br />
            Adresse : [Adresse de l'hébergeur]<br />
            Téléphone : [Téléphone de l'hébergeur]<br />
            Site web : [Site web de l'hébergeur]
          </Typography>
          <Typography variant="p" className="mt-4 text-sm italic">
            Exemple : Vercel Inc., OVH, O2Switch, etc.
          </Typography>
        </section>

        <hr className="my-6" />

        {/* ARTICLE 3 - Accès au site */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            Article 3 – Accès au Site
          </Typography>
          <Typography variant="p" className="mb-4">
            L'accès au site www.segment-c.com est accessible à tous les utilisateurs.
          </Typography>
          <Typography variant="p">
            L'accès au site et son utilisation sont réservés à un usage strictement personnel. Vous vous engagez à ne pas utiliser ce site et les informations ou données qui y figurent à des fins commerciales, politiques, publicitaires et pour toute forme de sollicitation commerciale non autorisée, notamment l'envoi de courriers électroniques non sollicités.
          </Typography>
        </section>

        <hr className="my-6" />

        {/* ARTICLE 4 - Propriété intellectuelle */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            Article 4 – Propriété Intellectuelle
          </Typography>
          <Typography variant="p" className="mb-4">
            Tous les éléments présents sur le site www.segment-c.com, y compris les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner ce site, sont protégés par les lois en vigueur au titre de la propriété intellectuelle.
          </Typography>
          <Typography variant="p" className="mb-4">
            Ils sont la propriété pleine et entière de SEGMENT.C ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de SEGMENT.C, sont strictement interdites.
          </Typography>
          <Typography variant="p">
            Le fait pour SEGMENT.C de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites.
          </Typography>
        </section>

        <hr className="my-6" />

        {/* ARTICLE 5 - Gestion du site */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            Article 5 – Gestion du Site
          </Typography>
          <Typography variant="p" className="mb-4">
            Pour la bonne gestion du site, l'éditeur pourra à tout moment :
          </Typography>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <Typography variant="p">
                Suspendre, interrompre ou limiter l'accès à tout ou partie du site, réserver l'accès au site, ou à certaines parties du site, à une catégorie déterminée d'internautes ;
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                Supprimer toute information pouvant en perturber le fonctionnement ou entrant en contravention avec les lois nationales ou internationales ;
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                Suspendre le site afin de procéder à des mises à jour.
              </Typography>
            </li>
          </ul>
        </section>

        <hr className="my-6" />

        {/* ARTICLE 6 - Responsabilités */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            Article 6 – Responsabilités
          </Typography>
          <Typography variant="p" className="mb-4">
            La responsabilité de SEGMENT.C ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités.
          </Typography>
          <Typography variant="p" className="mb-4">
            Le matériel de connexion au site que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres données notamment d'attaques virales par Internet.
          </Typography>
          <Typography variant="p" className="mb-4">
            SEGMENT.C ne pourra être tenu responsable en cas de poursuites judiciaires à votre encontre du fait de l'usage du site ou de tout service accessible via Internet, ou du fait du non-respect par vous des présentes conditions générales d'utilisation.
          </Typography>
          <Typography variant="p">
            SEGMENT.C n'est pas responsable des dommages causés à vous-même, à des tiers et/ou à votre équipement du fait de votre connexion ou de votre utilisation du site.
          </Typography>
        </section>

        <hr className="my-6" />

        {/* ARTICLE 7 - Liens hypertextes */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            Article 7 – Liens Hypertextes
          </Typography>
          <Typography variant="p" className="mb-4">
            La mise en place par vous de tous liens hypertextes vers tout ou partie du site est strictement interdite, sauf autorisation préalable et écrite de SEGMENT.C.
          </Typography>
          <Typography variant="p" className="mb-4">
            SEGMENT.C peut fournir des liens vers d'autres sites. Ces sites sont indépendants et SEGMENT.C n'édite ni ne contrôle les sources et contenus de ces sites ou leurs liens avec d'autres sites.
          </Typography>
          <Typography variant="p">
            SEGMENT.C ne saurait être tenu pour responsable du contenu, des produits, des services, de la publicité ou de tous autres éléments de ces sites ainsi que pour tous les dommages ou pertes consécutifs à leur utilisation.
          </Typography>
        </section>

        <hr className="my-6" />

        {/* ARTICLE 8 - Protection des données personnelles */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            Article 8 – Protection des Données Personnelles
          </Typography>
          
          <div className="space-y-4">
            <Typography variant="p">
              Les informations recueillies dans le cadre de l'utilisation du site www.segment-c.com sont destinées à SEGMENT.C, responsable de traitement.
            </Typography>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                8.1 – Collecte et utilisation des données
              </Typography>
              <Typography variant="p" className="mb-4">
                Les données personnelles recueillies via le site sont principalement utilisées pour :
              </Typography>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <Typography variant="p">
                    La gestion des demandes de devis et de contact
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    L'amélioration de nos services
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    L'envoi d'informations commerciales (avec votre consentement)
                  </Typography>
                </li>
              </ul>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                8.2 – Vos droits (RGPD)
              </Typography>
              <Typography variant="p" className="mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :
              </Typography>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <Typography variant="p">
                    <strong>Droit d'accès :</strong> vous pouvez demander une copie de vos données personnelles
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Droit de rectification :</strong> vous pouvez demander la correction de vos données
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Droit à l'effacement :</strong> vous pouvez demander la suppression de vos données
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Droit à la limitation du traitement :</strong> vous pouvez demander la limitation de l'utilisation de vos données
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Droit à la portabilité :</strong> vous pouvez récupérer vos données dans un format structuré
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Droit d'opposition :</strong> vous pouvez vous opposer au traitement de vos données
                  </Typography>
                </li>
              </ul>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                8.3 – Exercer vos droits
              </Typography>
              <Typography variant="p" className="mb-4">
                Pour exercer ces droits, vous pouvez nous contacter :
              </Typography>
              <ul className="ml-6 space-y-2">
                <li>
                  <Typography variant="p">
                    <strong>Par email :</strong>{' '}
                    <Link href="mailto:contact@segment-c.com" className="text-blue-500 hover:underline">
                      contact@segment-c.com
                    </Link>{' '}
                    avec comme objet "Exercice de mes droits RGPD"
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Par courrier :</strong> SEGMENT.C - 390 Allée de Saussets, 3 Hameau du Las, 33127 SAINT-JEAN-D'ILLAC
                  </Typography>
                </li>
              </ul>
              <Typography variant="p" className="mt-4">
                Un email de confirmation vous sera envoyé attestant de la prise en compte de votre demande. Nous nous engageons à y répondre dans un délai maximum d'un mois.
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="mb-2 text-xl font-medium">
                8.4 – Sécurité des données
              </Typography>
              <Typography variant="p">
                SEGMENT.C s'engage à prendre toutes les mesures nécessaires pour préserver la sécurité et la confidentialité de vos données personnelles, et notamment empêcher qu'elles ne soient déformées, endommagées ou communiquées à des tiers non autorisés.
              </Typography>
            </div>
          </div>
        </section>

        <hr className="my-6" />

        {/* ARTICLE 9 - Cookies */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            Article 9 – Cookies
          </Typography>
          <Typography variant="p" className="mb-4">
            Un cookie est un fichier déposé sur votre terminal lors de la visite d'un site web. Il a pour but de collecter des informations relatives à votre navigation et de vous adresser des services adaptés à votre terminal (ordinateur, mobile ou tablette).
          </Typography>
          <Typography variant="p" className="mb-4">
            Le site www.segment-c.com peut collecter automatiquement des informations standards. Toutes les informations collectées indirectement ne seront utilisées que pour suivre le volume, le type et la configuration du trafic utilisant ce site, pour en développer la conception et l'agencement et à d'autres fins administratives et de planification.
          </Typography>
          
          <div className="mt-4">
            <Typography variant="h3" className="mb-2 text-xl font-medium">
              Types de cookies utilisés
            </Typography>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <Typography variant="p">
                  <strong>Cookies techniques :</strong> nécessaires au fonctionnement du site
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  <strong>Cookies analytiques :</strong> pour mesurer l'audience du site (Google Analytics, etc.)
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  <strong>Cookies publicitaires :</strong> pour personnaliser la publicité (si applicable)
                </Typography>
              </li>
            </ul>
          </div>

          <Typography variant="p" className="mt-4">
            Vous pouvez gérer vos préférences en matière de cookies lors de votre première navigation sur le site via le bandeau de gestion des cookies. Vous pouvez également paramétrer votre navigateur pour refuser les cookies. Les modalités sont précisées sur le site Internet de la Commission Nationale de l'Informatique et des Libertés (CNIL) : <Link href="https://www.cnil.fr" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</Link>
          </Typography>
        </section>

        <hr className="my-6" />

        {/* ARTICLE 10 - Photographies */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            Article 10 – Photographies et Représentation des Produits
          </Typography>
          <Typography variant="p">
            Les photographies de produits et réalisations, accompagnant leur description, ne sont pas contractuelles et n'engagent pas SEGMENT.C. Dans un souci d'amélioration continue, nos modèles et réalisations peuvent être modifiés sans préavis.
          </Typography>
        </section>

        <hr className="my-6" />

        {/* ARTICLE 11 - Loi applicable */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            Article 11 – Loi Applicable et Juridiction Compétente
          </Typography>
          <Typography variant="p">
            Les présentes mentions légales et conditions d'utilisation du site sont régies par la loi française. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents du siège social de SEGMENT.C, conformément aux règles de compétence en vigueur.
          </Typography>
        </section>

        <hr className="my-6" />

        {/* ARTICLE 12 - Crédits */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            Article 12 – Crédits
          </Typography>
          <div className="space-y-4">
            <Typography variant="p">
              <strong>Conception et design web :</strong> [Nom de l'agence ou du développeur]
            </Typography>
            <Typography variant="p">
              <strong>Crédits photos :</strong> © SEGMENT.C et/ou [source des photos]
            </Typography>
            <Typography variant="p">
              <strong>Photographe :</strong> [Nom du photographe si applicable]
            </Typography>
          </div>
        </section>

        <hr className="my-6" />

        {/* Contact */}
        <section className="mb-8">
          <Typography variant="h2" className="mb-4 text-2xl font-semibold">
            Nous Contacter
          </Typography>
          <Typography variant="p" className="mb-4">
            Pour toute question concernant ces mentions légales ou le fonctionnement du site, vous pouvez nous contacter :
          </Typography>
          <ul className="ml-6 space-y-2">
            <li>
              <Typography variant="p">
                <strong>Par email :</strong>{' '}
                <Link href="mailto:contact@segment-c.com" className="text-blue-500 hover:underline">
                  contact@segment-c.com
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                <strong>Par téléphone :</strong> [Numéro de téléphone]
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                <strong>Par courrier :</strong> SEGMENT.C - 390 Allée de Saussets, 3 Hameau du Las, 33127 SAINT-JEAN-D'ILLAC, France
              </Typography>
            </li>
          </ul>
        </section>

        <hr className="my-6" />

        <footer className="mt-8 text-center">
          <Typography variant="p" className="text-sm text-gray-600">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>
        </footer>
      </SectionLayout>
    </>
  );
};

export default MentionsLegalesPage;