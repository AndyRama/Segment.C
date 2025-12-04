import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Typography } from "@/components/nowts/typography";
import { SectionLayout } from '@/features/landing/section-layout';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  Lock, 
  FileText, 
  Scale, 
  Cookie,
  Camera,
  UserCheck,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

const MentionsLegalesPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Mentions Légales - Segment.C</title>
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-50 via-white to-green-50/30 py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              <Scale className="size-4" />
              Informations légales
            </div>
            <Typography variant="h1" className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Mentions Légales
            </Typography>
            <Typography variant="p" className="mx-auto max-w-3xl text-lg text-gray-600">
              Toutes les informations légales concernant SEGMENT.C et l'utilisation de notre site internet
            </Typography>
          </div>
        </div>
      </div>

      <SectionLayout size="lg" variant="default" className="mx-auto max-w-7xl px-4 py-12">
        
        {/* Navigation rapide */}
        <div className="mb-12 rounded-xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <FileText className="size-5 flex-shrink-0 text-green-600" />
            <Typography variant="h3" className="text-lg font-semibold text-gray-900">
              Navigation rapide
            </Typography>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Informations légales", href: "#info-legales" },
              { title: "Hébergement", href: "#hebergement" },
              { title: "Propriété intellectuelle", href: "#propriete" },
              { title: "Protection des données", href: "#donnees" },
              { title: "Cookies", href: "#cookies" },
              { title: "Contact", href: "#contact" }
            ].map((item, idx) => (
              <a 
                key={idx}
                href={item.href}
                className="group flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm text-gray-700 transition-all hover:bg-green-50 hover:text-green-700"
              >
                <ChevronRight className="size-4 flex-shrink-0 text-green-600 transition-transform group-hover:translate-x-1" />
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* ARTICLE 1 - Informations légales */}
        <section id="info-legales" className="mb-12 scroll-mt-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-shrink-0 rounded-lg bg-green-100 p-3">
              <Building2 className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Informations Légales
            </Typography>
          </div>
          
          <div className="space-y-6">
            {/* Site */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <Typography variant="h3" className="mb-3 text-xl font-semibold text-green-700">
                Site Internet
              </Typography>
              <Link href="https://www.segment-c.com" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 hover:underline">
                <span className="font-medium">www.segment-c.com</span>
                <ChevronRight className="size-4 flex-shrink-0" />
              </Link>
            </div>

            {/* Éditeur */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <Typography variant="h3" className="mb-4 text-xl font-semibold text-green-700">
                Éditeur du Site
              </Typography>
              <Typography variant="p" className="mb-4 text-gray-700">
                SEGMENT.C est une Société à Responsabilité Limitée (SARL) au capital social de [CAPITAL]
              </Typography>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 size-5 flex-shrink-0 text-green-600" />
                  <div>
                    <Typography variant="p" className="font-semibold text-gray-900">Siège social</Typography>
                    <Typography variant="p" className="text-gray-700">
                      390 Allée de Saussets - 3 Hameau du Las<br />
                      33127 SAINT-JEAN-D'ILLAC<br />
                      France
                    </Typography>
                  </div>
                </div>

                <div className="grid gap-4 rounded-lg bg-green-50 p-4 md:grid-cols-2">
                  <div>
                    <Typography variant="p" className="mb-1 text-sm font-medium text-green-700">SIREN</Typography>
                    <Typography variant="p" className="text-gray-900">891 100 919</Typography>
                  </div>
                  <div>
                    <Typography variant="p" className="mb-1 text-sm font-medium text-green-700">Immatriculation</Typography>
                    <Typography variant="p" className="text-gray-900">RCS de Bordeaux</Typography>
                  </div>
                  <div>
                    <Typography variant="p" className="mb-1 text-sm font-medium text-green-700">N° TVA intracommunautaire</Typography>
                    <Typography variant="p" className="text-gray-900">FR [XX] 891100919</Typography>
                  </div>
                  <div>
                    <Typography variant="p" className="mb-1 text-sm font-medium text-green-700">Activité</Typography>
                    <Typography variant="p" className="text-gray-900">Travaux de menuiserie bois et PVC</Typography>
                  </div>
                </div>

                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                  <Typography variant="p" className="mb-1 text-sm font-medium text-green-700">Représentant légal</Typography>
                  <Typography variant="p" className="font-semibold text-gray-900">Monsieur Rui ARAUJO DE CARVALHO, Gérant</Typography>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <Typography variant="h3" className="mb-4 text-xl font-semibold text-green-700">
                Nous Contacter
              </Typography>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="size-5 flex-shrink-0 text-green-600" />
                  <Typography variant="p" className="text-gray-700">
                    <span className="font-medium mt-0">Téléphone :</span> [Numéro de téléphone]
                  </Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="size-5 flex-shrink-0 text-green-600" />
                  <Typography variant="p" className="text-gray-700">
                    <span className="font-medium mt-0">Email :</span>{' '}
                    <Link href="mailto:contact@segment-c.com" className="text-green-600 hover:underline">
                      contact@segment-c.com
                    </Link>
                  </Typography>
                </div>
              </div>
            </div>

            {/* Directeur de publication */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Typography variant="h3" className="mb-2 text-lg font-semibold text-gray-900">
                Responsable des publications
              </Typography>
              <Typography variant="p" className="text-gray-700">
                Monsieur Rui ARAUJO DE CARVALHO
              </Typography>
            </div>

            {/* Conception */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Typography variant="h3" className="mb-2 text-lg font-semibold text-gray-900">
                Conception et réalisation
              </Typography>
              <Typography variant="p" className="text-gray-700">
                Andy Ramaroson
              </Typography>
            </div>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* ARTICLE 2 - Hébergement */}
        <section id="hebergement" className="mb-12 scroll-mt-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-shrink-0 rounded-lg bg-green-100 p-3">
              <Shield className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Hébergement
            </Typography>
          </div>
          
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <Typography variant="p" className="mb-4 text-gray-700">
              Le site www.segment-c.com est hébergé par :
            </Typography>
            <div className="rounded-lg bg-gray-50 p-4">
              <Typography variant="p" className="text-gray-900">
                <strong>Hostinger</strong><br />
                Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre<br />
                Téléphone : [Téléphone de l'hébergeur]<br />
                Site web : https://www.hostinger.fr
              </Typography>
            </div>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* ARTICLE 3 - Accès au site */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-shrink-0 rounded-lg bg-green-100 p-3">
              <UserCheck className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Accès au Site
            </Typography>
          </div>
          
          <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <Typography variant="p" className="text-gray-700">
              L'accès au site www.segment-c.com est accessible à tous les utilisateurs.
            </Typography>
            <Typography variant="p" className="text-gray-700">
              L'accès au site et son utilisation sont réservés à un usage strictement personnel. Vous vous engagez à ne pas utiliser ce site et les informations ou données qui y figurent à des fins commerciales, politiques, publicitaires et pour toute forme de sollicitation commerciale non autorisée, notamment l'envoi de courriers électroniques non sollicités.
            </Typography>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* ARTICLE 4 - Propriété intellectuelle */}
        <section id="propriete" className="mb-12 scroll-mt-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-shrink-0 rounded-lg bg-green-100 p-3">
              <FileText className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Propriété Intellectuelle
            </Typography>
          </div>
          
          <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <Typography variant="p" className="text-gray-700">
              Tous les éléments présents sur le site www.segment-c.com, y compris les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner ce site, sont protégés par les lois en vigueur au titre de la propriété intellectuelle.
            </Typography>
            <div className="rounded-lg bg-amber-50 p-4">
              <Typography variant="p" className="text-gray-900">
                <strong>Important :</strong> Ils sont la propriété pleine et entière de SEGMENT.C ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de SEGMENT.C, sont strictement interdites.
              </Typography>
            </div>
            <Typography variant="p" className="text-gray-700">
              Le fait pour SEGMENT.C de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites.
            </Typography>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* ARTICLE 5 - Gestion du site */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-shrink-0 rounded-lg bg-green-100 p-3">
              <Shield className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Gestion du Site
            </Typography>
          </div>
          
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <Typography variant="p" className="mb-4 mt-0 text-gray-700">
              Pour la bonne gestion du site, l'éditeur pourra à tout moment :
            </Typography>
            <ul className="space-y-3">
              {[
                "Suspendre, interrompre ou limiter l'accès à tout ou partie du site, réserver l'accès au site, ou à certaines parties du site, à une catégorie déterminée d'internautes",
                "Supprimer toute information pouvant en perturber le fonctionnement ou entrant en contravention avec les lois nationales ou internationales",
                "Suspendre le site afin de procéder à des mises à jour"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ChevronRight className="mt-1 size-5 flex-shrink-0 text-green-600" />
                  <Typography variant="p" className="mt-0 text-gray-700">
                    <span className="mt-0">{item}</span>
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* ARTICLE 6 - Responsabilités */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-shrink-0 rounded-lg bg-green-100 p-3">
              <Scale className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Responsabilités
            </Typography>
          </div>
          
          <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <Typography variant="p" className="text-gray-700">
              La responsabilité de SEGMENT.C ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités.
            </Typography>
            <Typography variant="p" className="text-gray-700">
              Le matériel de connexion au site que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres données notamment d'attaques virales par Internet.
            </Typography>
            <Typography variant="p" className="text-gray-700">
              SEGMENT.C ne pourra être tenu responsable en cas de poursuites judiciaires à votre encontre du fait de l'usage du site ou de tout service accessible via Internet, ou du fait du non-respect par vous des présentes conditions générales d'utilisation.
            </Typography>
            <Typography variant="p" className="text-gray-700">
              SEGMENT.C n'est pas responsable des dommages causés à vous-même, à des tiers et/ou à votre équipement du fait de votre connexion ou de votre utilisation du site.
            </Typography>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* ARTICLE 7 - Liens hypertextes */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-shrink-0 rounded-lg bg-green-100 p-3">
              <FileText className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Liens Hypertextes
            </Typography>
          </div>
          
          <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <Typography variant="p" className="text-gray-700">
              La mise en place par vous de tous liens hypertextes vers tout ou partie du site est strictement interdite, sauf autorisation préalable et écrite de SEGMENT.C.
            </Typography>
            <Typography variant="p" className="text-gray-700">
              SEGMENT.C peut fournir des liens vers d'autres sites. Ces sites sont indépendants et SEGMENT.C n'édite ni ne contrôle les sources et contenus de ces sites ou leurs liens avec d'autres sites.
            </Typography>
            <Typography variant="p" className="text-gray-700">
              SEGMENT.C ne saurait être tenu pour responsable du contenu, des produits, des services, de la publicité ou de tous autres éléments de ces sites ainsi que pour tous les dommages ou pertes consécutifs à leur utilisation.
            </Typography>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* ARTICLE 8 - Protection des données personnelles */}
        <section id="donnees" className="mb-12 scroll-mt-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-shrink-0 rounded-lg bg-green-100 p-3">
              <Lock className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Protection des Données Personnelles
            </Typography>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm">
              <Typography variant="p" className="font-medium text-gray-900">
                Les informations recueillies dans le cadre de l'utilisation du site www.segment-c.com sont destinées à SEGMENT.C, responsable de traitement.
              </Typography>
            </div>

            {/* Collecte et utilisation */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Typography variant="h3" className="mb-4 text-xl font-semibold text-green-700">
                Collecte et utilisation des données
              </Typography>
              <Typography variant="p" className="mb-4 text-gray-700">
                Les données personnelles recueillies via le site sont principalement utilisées pour :
              </Typography>
              <ul className="space-y-2">
                {[
                  "La gestion des demandes de devis et de contact",
                  "L'amélioration de nos services",
                  "L'envoi d'informations commerciales (avec votre consentement)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ChevronRight className="mt-1 size-5 flex-shrink-0 text-green-600" />
                    <Typography variant="p" className="mt-0 text-gray-700">{item}</Typography>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vos droits RGPD */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Typography variant="h3" className="mb-4 text-xl font-semibold text-green-700">
                Vos droits (RGPD)
              </Typography>
              <Typography variant="p" className="mb-4 text-gray-700">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :
              </Typography>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  { title: "Droit d'accès", desc: "Demander une copie de vos données personnelles" },
                  { title: "Droit de rectification", desc: "Demander la correction de vos données" },
                  { title: "Droit à l'effacement", desc: "Demander la suppression de vos données" },
                  { title: "Droit à la limitation", desc: "Limiter l'utilisation de vos données" },
                  { title: "Droit à la portabilité", desc: "Récupérer vos données dans un format structuré" },
                  { title: "Droit d'opposition", desc: "Vous opposer au traitement de vos données" }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-lg bg-green-50 p-4">
                    <Typography variant="p" className="mb-1 font-semibold text-green-900">
                      {item.title}
                    </Typography>
                    <Typography variant="p" className="text-sm text-gray-700">
                      {item.desc}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* Exercer vos droits */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Typography variant="h3" className="mb-4 text-xl font-semibold text-green-700">
                Exercer vos droits
              </Typography>
              <Typography variant="p" className="mb-4 text-gray-700">
                Pour exercer ces droits, vous pouvez nous contacter :
              </Typography>
              <div className="space-y-3 rounded-lg bg-gray-50 p-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 size-5 flex-shrink-0 text-green-600" />
                  <div>
                    <Typography variant="p" className="font-medium text-gray-900">Par email :</Typography>
                    <Link href="mailto:contact@segment-c.com" className="text-green-600 hover:underline">
                      contact@segment-c.com
                    </Link>
                    <Typography variant="p" className="text-sm text-gray-600">
                      Objet : "Exercice de mes droits RGPD"
                    </Typography>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 size-5 flex-shrink-0 text-green-600" />
                  <div>
                    <Typography variant="p" className="font-medium text-gray-900">Par courrier :</Typography>
                    <Typography variant="p" className="text-gray-700">
                      SEGMENT.C - 390 Allée de Saussets, 3 Hameau du Las, 33127 SAINT-JEAN-D'ILLAC
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-2 rounded-lg bg-blue-50 p-3">
                <AlertCircle className="mt-0.5 size-5 flex-shrink-0 text-blue-600" />
                <Typography variant="p" className="text-sm text-blue-900">
                  Un email de confirmation vous sera envoyé. Nous nous engageons à répondre dans un délai maximum d'un mois.
                </Typography>
              </div>
            </div>

            {/* Sécurité */}
            <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm">
              <Typography variant="h3" className="mb-3 text-xl font-semibold text-green-700">
                Sécurité des données
              </Typography>
              <Typography variant="p" className="text-gray-700">
                SEGMENT.C s'engage à prendre toutes les mesures nécessaires pour préserver la sécurité et la confidentialité de vos données personnelles, et notamment empêcher qu'elles ne soient déformées, endommagées ou communiquées à des tiers non autorisés.
              </Typography>
            </div>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* ARTICLE 9 - Cookies */}
        <section id="cookies" className="mb-12 scroll-mt-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-shrink-0 rounded-lg bg-green-100 p-3">
              <Cookie className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Cookies
            </Typography>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Typography variant="p" className="mb-4 text-gray-700">
                Un cookie est un fichier déposé sur votre terminal lors de la visite d'un site web. Il a pour but de collecter des informations relatives à votre navigation et de vous adresser des services adaptés à votre terminal (ordinateur, mobile ou tablette).
              </Typography>
              <Typography variant="p" className="text-gray-700">
                Le site www.segment-c.com peut collecter automatiquement des informations standards. Toutes les informations collectées indirectement ne seront utilisées que pour suivre le volume, le type et la configuration du trafic utilisant ce site, pour en développer la conception et l'agencement et à d'autres fins administratives et de planification.
              </Typography>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Typography variant="h3" className="mb-4 text-xl font-semibold text-green-700">
                Types de cookies utilisés
              </Typography>
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  { title: "Cookies techniques", desc: "Nécessaires au fonctionnement du site" },
                  { title: "Cookies analytiques", desc: "Pour mesurer l'audience du site" },
                  { title: "Cookies publicitaires", desc: "Pour personnaliser la publicité" }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-lg bg-green-50 p-4">
                    <Typography variant="p" className="mb-2 font-semibold text-green-900">
                      {item.title}
                    </Typography>
                    <Typography variant="p" className="text-sm text-gray-700">
                      {item.desc}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
              <Typography variant="p" className="text-gray-900">
                Vous pouvez gérer vos préférences en matière de cookies lors de votre première navigation sur le site via le bandeau de gestion des cookies. Vous pouvez également paramétrer votre navigateur pour refuser les cookies. Les modalités sont précisées sur le site Internet de la Commission Nationale de l'Informatique et des Libertés (CNIL) :{' '}
                <Link href="https://www.cnil.fr" className="font-medium text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">
                  www.cnil.fr
                </Link>
              </Typography>
            </div>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* ARTICLE 10 - Photographies */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-shrink-0 rounded-lg bg-green-100 p-3">
              <Camera className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Photographies et Représentation des Produits
            </Typography>
          </div>
          
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <Typography variant="p" className="text-gray-700">
              Les photographies de produits et réalisations, accompagnant leur description, ne sont pas contractuelles et n'engagent pas SEGMENT.C. Dans un souci d'amélioration continue, nos modèles et réalisations peuvent être modifiés sans préavis.
            </Typography>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* ARTICLE 11 - Loi applicable */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-shrink-0 rounded-lg bg-green-100 p-3">
              <Scale className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Loi Applicable et Juridiction Compétente
            </Typography>
          </div>
          
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <Typography variant="p" className="text-gray-700">
              Les présentes mentions légales et conditions d'utilisation du site sont régies par la loi française. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents du siège social de SEGMENT.C, conformément aux règles de compétence en vigueur.
            </Typography>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* ARTICLE 12 - Crédits */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-shrink-0 rounded-lg bg-green-100 p-3">
              <FileText className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Crédits
            </Typography>
          </div>
          
          <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
              <Typography variant="p" className="font-semibold text-gray-900">Conception et design web</Typography>
              <Typography variant="p" className="text-gray-700">[Nom de l'agence ou du développeur]</Typography>
            </div>
            <div>
              <Typography variant="p" className="font-semibold text-gray-900">Crédits photos</Typography>
              <Typography variant="p" className="text-gray-700">© SEGMENT.C et/ou [source des photos]</Typography>
            </div>
            <div>
              <Typography variant="p" className="font-semibold text-gray-900">Photographe</Typography>
              <Typography variant="p" className="text-gray-700">[Nom du photographe si applicable]</Typography>
            </div>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* Contact Final */}
        <section id="contact" className="mb-12 scroll-mt-20">
          <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 via-white to-green-50 p-8 shadow-sm">
            <div className="mb-6 text-center">
              <Typography variant="h2" className="mb-2 text-2xl font-bold text-gray-900">
                Une Question ?
              </Typography>
              <Typography variant="p" className="text-gray-600">
                Pour toute question concernant ces mentions légales ou le fonctionnement du site
              </Typography>
            </div>
            
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="mb-3 rounded-full bg-green-100 p-3">
                  <Mail className="size-6 text-green-600" />
                </div>
                <Typography variant="p" className="mb-2 font-semibold text-gray-900">Par email</Typography>
                <Link href="mailto:contact@segment-c.com" className="text-green-600 hover:underline">
                  contact@segment-c.com
                </Link>
              </div>
              
              <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="mb-3 rounded-full bg-green-100 p-3">
                  <Phone className="size-6 text-green-600" />
                </div>
                <Typography variant="p" className="mb-2 font-semibold text-gray-900">Par téléphone</Typography>
                <Typography variant="p" className="text-gray-700">[Numéro de téléphone]</Typography>
              </div>
              
              <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="mb-3 rounded-full bg-green-100 p-3">
                  <MapPin className="size-6 text-green-600" />
                </div>
                <Typography variant="p" className="mb-2 font-semibold text-gray-900">Par courrier</Typography>
                <Typography variant="p" className="text-sm text-gray-700">
                  390 Allée de Saussets<br />
                  33127 SAINT-JEAN-D'ILLAC
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 rounded-xl bg-gray-50 p-6 text-center">
          <Typography variant="p" className="text-sm text-gray-600">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>
        </footer>
      </SectionLayout>
    </>
  );
};

export default MentionsLegalesPage;