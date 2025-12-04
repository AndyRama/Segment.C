import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Typography } from "@/components/nowts/typography";
import { SectionLayout } from '@/features/landing/section-layout';
import { 
  Shield, 
  Lock, 
  Eye, 
  Mail, 
  Phone, 
  MapPin, 
  UserCheck, 
  FileText, 
  Database, 
  Server, 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  ChevronRight,
  Users,
  Settings,
  Key,
  Cookie,
  Globe,
  FileCheck
} from 'lucide-react';

const termsPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Politique de Confidentialité - Segment.C</title>
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-50 via-white to-green-50/30 py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              <Shield className="size-4" />
              Protection des données
            </div>
            <Typography variant="h1" className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Politique de Confidentialité
            </Typography>
            <Typography variant="p" className="mx-auto max-w-2xl text-lg text-gray-600">
              SEGMENT.C s'engage à protéger vos données personnelles et à respecter votre vie privée
            </Typography>
            <Typography variant="p" className="mt-4 text-sm text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </Typography>
          </div>
        </div>
      </div>

      <SectionLayout size="lg" variant="default" className="mx-auto max-w-7xl px-4 py-12">
        
        {/* Navigation rapide */}
        <div className="mb-12 rounded-xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm">
          <Typography variant="h3" className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
            <FileText className="size-5 text-green-600" />
            Navigation rapide
          </Typography>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Responsable de traitement", href: "#responsable" },
              { title: "Données collectées", href: "#donnees" },
              { title: "Finalités", href: "#finalites" },
              { title: "Sécurité", href: "#securite" },
              { title: "Vos droits", href: "#droits" },
              { title: "Contact", href: "#contact" }
            ].map((item, idx) => (
              <a 
                key={idx}
                href={item.href}
                className="group flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm text-gray-700 transition-all hover:bg-green-50 hover:text-green-700"
              >
                <ChevronRight className="size-4 text-green-600 transition-transform group-hover:translate-x-1" />
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-green-100 p-3">
                <Shield className="size-6 text-green-700" />
              </div>
              <Typography variant="h2" className="text-2xl font-bold text-gray-900">
                Notre Engagement
              </Typography>
            </div>
            <div className="space-y-4 text-gray-700">
              <Typography variant="p">
                SEGMENT.C est particulièrement attentif à la protection de vos données personnelles. Concernant les données personnelles que vous nous confiez, nous vous informons de manière transparente sur notre politique en matière de protection des données personnelles.
              </Typography>
              <Typography variant="p">
                SEGMENT.C s'engage à traiter vos données à caractère personnel conformément aux dispositions du <strong className="text-green-700">Règlement Général sur la Protection des Données 2016/679</strong> du Parlement européen et du Conseil du 27 avril 2016 (RGPD) et la <strong className="text-green-700">loi n°78-17 du 6 janvier 1978 modifiée</strong> relative à l'informatique, aux fichiers et aux libertés (loi « Informatique et Libertés »).
              </Typography>
              <div className="mt-4 flex items-start gap-2 rounded-lg bg-blue-50 p-4">
                <AlertCircle className="mt-0.5 size-5 flex-shrink-0 text-blue-600" />
                <Typography variant="p" className="text-sm text-blue-900">
                  Toute information recueillie au travers du site internet www.segment-c.com et permettant de vous identifier, de manière directe ou indirecte, est considérée comme une donnée à caractère personnel et sera traitée conformément à cette politique.
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* Article 1 - Responsable de traitement */}
        <section id="responsable" className="mb-12 scroll-mt-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-3">
              <Users className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Responsable de Traitement
            </Typography>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Typography variant="h3" className="mb-4 text-xl font-semibold text-green-700">
                Responsable de traitement
              </Typography>
              <Typography variant="p" className="mb-4 text-gray-700">
                Le responsable de traitement des données collectées et traitées sur ce site internet est :
              </Typography>
              <div className="space-y-3 rounded-lg bg-green-50 p-4">
                <Typography variant="p" className="font-semibold text-gray-900">SEGMENT.C</Typography>
                <Typography variant="p" className="text-sm text-gray-700">
                  Société à Responsabilité Limitée (SARL)
                </Typography>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-1 size-4 flex-shrink-0 text-green-600" />
                  <Typography variant="p" className="text-sm text-gray-700">
                    390 Allée de Saussets - 3 Hameau du Las<br />
                    33127 SAINT-JEAN-D'ILLAC
                  </Typography>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div>
                    <Typography variant="p" className="text-xs font-medium text-green-700">SIREN</Typography>
                    <Typography variant="p" className="text-sm text-gray-900">891 100 919</Typography>
                  </div>
                  <div>
                    <Typography variant="p" className="text-xs font-medium text-green-700">RCS</Typography>
                    <Typography variant="p" className="text-sm text-gray-900">Bordeaux</Typography>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Typography variant="h3" className="mb-4 text-xl font-semibold text-green-700">
                Délégué à la Protection des Données (DPO)
              </Typography>
              <Typography variant="p" className="mb-4 text-gray-700">
                SEGMENT.C a désigné un délégué à la protection des données que vous pouvez contacter :
              </Typography>
              <div className="space-y-3 rounded-lg bg-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <Mail className="size-5 text-green-600" />
                  <div>
                    <Typography variant="p" className="text-xs font-medium text-gray-500">Email DPO</Typography>
                    <Link href="mailto:dpo@segment-c.com" className="text-green-600 hover:underline">
                      dpo@segment-c.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* Article 2 - Données collectées */}
        <section id="donnees" className="mb-12 scroll-mt-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-3">
              <Database className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Données Personnelles Collectées
            </Typography>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Typography variant="h3" className="mb-4 text-xl font-semibold text-green-700">
                1. Données saisies et envoyées via les formulaires
              </Typography>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "Civilité, nom, prénom",
                  "Adresse postale",
                  "Adresse email",
                  "Numéro de téléphone",
                  "Tranche horaire préférée",
                  "Société et fonction",
                  "Description du projet",
                  "Message ou demande spécifique"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 rounded-lg bg-green-50 p-3">
                    <CheckCircle className="mt-0.5 size-5 flex-shrink-0 text-green-600" />
                    <Typography variant="p" className="text-sm text-gray-700">{item}</Typography>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Typography variant="h3" className="mb-4 text-xl font-semibold text-green-700">
                2. Données collectées automatiquement
              </Typography>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  { icon: Globe, text: "Adresse IP" },
                  { icon: Settings, text: "Type de navigateur et OS" },
                  { icon: Eye, text: "Pages visitées et durée" },
                  { icon: ChevronRight, text: "Source de trafic" },
                  { icon: Cookie, text: "Données des cookies" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
                    <item.icon className="size-5 text-green-600" />
                    <Typography variant="p" className="text-sm text-gray-700">{item.text}</Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* Article 3 - Finalités */}
        <section id="finalites" className="mb-12 scroll-mt-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-3">
              <FileCheck className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Finalités du Traitement
            </Typography>
          </div>
          
          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-green-50">
                  <tr>
                    <th className="border-b border-green-200 px-4 py-3 text-left text-sm font-semibold text-green-900">
                      Finalité du traitement
                    </th>
                    <th className="border-b border-green-200 px-4 py-3 text-left text-sm font-semibold text-green-900">
                      Base juridique
                    </th>
                    <th className="border-b border-green-200 px-4 py-3 text-left text-sm font-semibold text-green-900">
                      Données traitées
                    </th>
                    <th className="border-b border-green-200 px-4 py-3 text-left text-sm font-semibold text-green-900">
                      Durée de conservation
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Gestion des demandes de contact via formulaire
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Intérêt légitime
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Civilité, nom, prénom, email, téléphone, adresse, message
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-sm">
                      <div className="space-y-1">
                        <div className="font-medium text-green-700">Clients : 3 ans</div>
                        <div className="text-gray-600">Prospects : 3 ans</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-green-50/30 hover:bg-green-50">
                    <td className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Gestion des demandes de devis
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Exécution du contrat
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Civilité, nom, prénom, email, téléphone, détails projet
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-sm">
                      <div className="space-y-1">
                        <div className="font-medium text-green-700">Clients : 3 ans</div>
                        <div className="text-gray-600">Prospects : 3 ans</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Prospection commerciale
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Intérêt légitime
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Nom, prénom, email, téléphone, historique
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-sm">
                      <div className="space-y-1">
                        <div className="font-medium text-green-700">Clients : 3 ans</div>
                        <div className="text-gray-600">Prospects : 3 ans</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-green-50/30 hover:bg-green-50">
                    <td className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Gestion de la relation client
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Exécution du contrat
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Toutes données nécessaires
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-sm">
                      <div className="font-medium text-green-700">Durée relation + 5 ans</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Mesure d'audience et statistiques
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Intérêt légitime
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Données navigation anonymisées, IP
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-sm">
                      <div className="font-medium text-green-700">13 mois maximum</div>
                    </td>
                  </tr>
                  <tr className="bg-green-50/30">
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Enquêtes de satisfaction
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Intérêt légitime
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Nom, prénom, email, avis
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="font-medium text-green-700">Durée publication</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* Article 4 - Destinataires */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-3">
              <Users className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Destinataires des Données
            </Typography>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Personnel autorisé de SEGMENT.C",
                icon: UserCheck,
                items: [
                  "Équipe commerciale",
                  "Service client",
                  "Direction"
                ],
                note: "Tous les employés valident un engagement de confidentialité"
              },
              {
                title: "Sous-traitants",
                icon: Server,
                items: [
                  "Hébergeur web",
                  "Service emailing",
                  "Outils d'analyse (Google Analytics)",
                  "CRM"
                ],
                note: "Agissent uniquement sur instructions de SEGMENT.C"
              },
              {
                title: "Partenaires commerciaux",
                icon: Users,
                items: [
                  "Revendeurs locaux",
                  "Installateurs partenaires"
                ],
                note: "Uniquement avec votre consentement préalable"
              },
              {
                title: "Obligations légales",
                icon: FileText,
                items: [
                  "Autorités judiciaires",
                  "Administration fiscale"
                ],
                note: "Si requis par la loi ou procédure judiciaire"
              }
            ].map((section, idx) => (
              <div key={idx} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-green-100 p-2">
                    <section.icon className="size-5 text-green-600" />
                  </div>
                  <Typography variant="h3" className="text-lg font-semibold text-gray-900">
                    {section.title}
                  </Typography>
                </div>
                <ul className="mb-4 space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 size-4 flex-shrink-0 text-green-600" />
                      <Typography variant="p" className="text-sm text-gray-700">{item}</Typography>
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg bg-blue-50 p-3">
                  <Typography variant="p" className="text-xs text-blue-900">
                    {section.note}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* Article 5 - Transferts */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-3">
              <Globe className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Transferts de Données
            </Typography>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm">
              <Typography variant="h3" className="mb-3 text-xl font-semibold text-green-700">
                Localisation des données
              </Typography>
              <Typography variant="p" className="mb-3 text-gray-700">
                Les serveurs d'hébergement du site sont exclusivement situés au sein de l'<strong className="text-green-700">Union Européenne</strong>.
              </Typography>
              <div className="flex items-start gap-2 rounded-lg bg-green-100 p-4">
                <CheckCircle className="mt-0.5 size-5 flex-shrink-0 text-green-600" />
                <Typography variant="p" className="text-sm text-green-900">
                  SEGMENT.C s'engage à ne procéder à <strong>aucun transfert de données à caractère personnel</strong> vers un État non membre de l'Union Européenne, sauf dans le respect des garanties appropriées prévues par le RGPD.
                </Typography>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Typography variant="h3" className="mb-3 text-xl font-semibold text-gray-900">
                Cas particuliers
              </Typography>
              <div className="flex items-start gap-2 rounded-lg bg-amber-50 p-4">
                <AlertCircle className="mt-0.5 size-5 flex-shrink-0 text-amber-600" />
                <Typography variant="p" className="text-sm text-gray-700">
                  Certains outils tiers (comme Google Analytics) peuvent stocker des données aux États-Unis. Dans ce cas, ces transferts sont encadrés par des clauses contractuelles types approuvées par la Commission européenne.
                </Typography>
              </div>
            </div>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* Article 6 - Sécurité */}
        <section id="securite" className="mb-12 scroll-mt-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-3">
              <Lock className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Sécurité des Données Personnelles
            </Typography>
          </div>
          
          <Typography variant="p" className="mb-6 text-gray-700">
            SEGMENT.C met en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté aux risques :
          </Typography>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Typography variant="h3" className="mb-4 flex items-center gap-2 text-xl font-semibold text-green-700">
                <Key className="size-5" />
                Mesures techniques
              </Typography>
              <ul className="space-y-3">
                {[
                  { title: "Chiffrement HTTPS/TLS", desc: "Protocole sécurisé avec TLS 1.2+" },
                  { title: "Certificat SSL", desc: "Échanges chiffrés entre navigateur et serveurs" },
                  { title: "Serveurs sécurisés", desc: "Pare-feu et protection anti-DDoS" },
                  { title: "Sauvegardes régulières", desc: "Copies quotidiennes des données" },
                  { title: "Contrôle d'accès", desc: "Authentification forte et limitation" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-lg bg-green-50 p-3">
                    <CheckCircle className="mt-0.5 size-5 flex-shrink-0 text-green-600" />
                    <div>
                      <Typography variant="p" className="font-semibold text-gray-900">{item.title}</Typography>
                      <Typography variant="p" className="text-sm text-gray-600">{item.desc}</Typography>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Typography variant="h3" className="mb-4 flex items-center gap-2 text-xl font-semibold text-green-700">
                <Settings className="size-5" />
                Mesures organisationnelles
              </Typography>
              <ul className="space-y-3">
                {[
                  "Formation du personnel à la protection des données",
                  "Politique interne de confidentialité",
                  "Processus de gestion des incidents",
                  "Audits réguliers de sécurité"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
                    <CheckCircle className="mt-0.5 size-5 flex-shrink-0 text-green-600" />
                    <Typography variant="p" className="text-sm text-gray-700">{item}</Typography>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-start gap-2 rounded-lg bg-amber-50 p-3">
                <AlertCircle className="mt-0.5 size-5 flex-shrink-0 text-amber-600" />
                <Typography variant="p" className="text-xs text-amber-900">
                  Malgré ces mesures, aucun système n'est infaillible. En cas de violation de données, nous vous en informerons conformément au RGPD.
                </Typography>
              </div>
            </div>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* Article 7 - Vos droits */}
        <section id="droits" className="mb-12 scroll-mt-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-3">
              <Shield className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Vos Droits sur vos Données Personnelles
            </Typography>
          </div>
          
          <Typography variant="p" className="mb-6 text-gray-700">
            Conformément aux dispositions du RGPD et de la loi Informatique et Libertés, vous disposez des droits suivants :
          </Typography>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Droit d'accès",
                desc: "Obtenir la confirmation que vos données font l'objet d'un traitement et en obtenir une copie"
              },
              {
                icon: FileCheck,
                title: "Droit de rectification",
                desc: "Obtenir la rectification de données inexactes ou compléter des données incomplètes"
              },
              {
                icon: AlertCircle,
                title: "Droit à l'effacement",
                desc: "Obtenir la suppression de vos données personnelles dans certains cas"
              },
              {
                icon: Lock,
                title: "Droit à la limitation",
                desc: "Demander le gel temporaire du traitement de vos données"
              },
              {
                icon: Database,
                title: "Droit à la portabilité",
                desc: "Recevoir vos données dans un format structuré et les transmettre à un autre responsable"
              },
              {
                icon: UserCheck,
                title: "Droit d'opposition",
                desc: "Vous opposer au traitement de vos données fondé sur l'intérêt légitime"
              },
              {
                icon: Clock,
                title: "Directives post-mortem",
                desc: "Définir des directives relatives à vos données après votre décès"
              },
              {
                icon: Settings,
                title: "Retrait du consentement",
                desc: "Retirer votre consentement à tout moment si le traitement est fondé dessus"
              },
              {
                icon: FileText,
                title: "Réclamation CNIL",
                desc: "Adresser une réclamation à la CNIL si vos droits ne sont pas respectés"
              }
            ].map((right, idx) => (
              <div key={idx} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-lg bg-green-100 p-2">
                    <right.icon className="size-5 text-green-600" />
                  </div>
                  <Typography variant="h3" className="font-semibold text-gray-900">
                    {right.title}
                  </Typography>
                </div>
                <Typography variant="p" className="text-sm text-gray-700">
                  {right.desc}
                </Typography>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 size-6 flex-shrink-0 text-blue-600" />
              <div>
                <Typography variant="h3" className="mb-2 font-semibold text-blue-900">
                  Réclamation auprès de la CNIL
                </Typography>
                <Typography variant="p" className="mb-3 text-sm text-blue-900">
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL :
                </Typography>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe className="size-4 text-blue-600" />
                    <Link href="https://www.cnil.fr/fr/plaintes" className="text-sm font-medium text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">
                      www.cnil.fr/fr/plaintes
                    </Link>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-4 flex-shrink-0 text-blue-600" />
                    <Typography variant="p" className="text-sm text-blue-900">
                      CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* Article 8 - Exercice des droits */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-3">
              <Mail className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Modalités d'Exercice de vos Droits
            </Typography>
          </div>
          
          <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-8 shadow-sm">
            <Typography variant="p" className="mb-6 text-gray-700">
              Pour exercer l'un de vos droits, vous pouvez nous contacter :
            </Typography>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-5">
                <div className="mb-3 flex items-center gap-3">
                  <Mail className="size-5 text-green-600" />
                  <Typography variant="h3" className="font-semibold text-gray-900">Par email</Typography>
                </div>
                <Link href="mailto:contact@segment-c.com" className="text-green-600 hover:underline">
                  contact@segment-c.com
                </Link>
                <Typography variant="p" className="mt-1 text-sm text-gray-600">
                  Objet : "Exercice de mes droits RGPD"
                </Typography>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5">
                <div className="mb-3 flex items-center gap-3">
                  <MapPin className="size-5 text-green-600" />
                  <Typography variant="h3" className="font-semibold text-gray-900">Par courrier</Typography>
                </div>
                <Typography variant="p" className="text-sm text-gray-700">
                  SEGMENT.C<br />
                  Service Protection des Données<br />
                  390 Allée de Saussets<br />
                  33127 SAINT-JEAN-D'ILLAC
                </Typography>
              </div>
            </div>

            <div className="mb-6 rounded-lg bg-white p-5">
              <Typography variant="h3" className="mb-3 font-semibold text-gray-900">
                Informations à fournir
              </Typography>
              <ul className="space-y-2">
                {[
                  "Une copie d'une pièce d'identité en cours de validité",
                  "La précision du droit que vous souhaitez exercer",
                  "Votre adresse email ou postale pour vous répondre"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight className="mt-0.5 size-4 flex-shrink-0 text-green-600" />
                    <Typography variant="p" className="text-sm text-gray-700">{item}</Typography>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-3 rounded-lg bg-green-100 p-4">
              <Clock className="mt-0.5 size-5 flex-shrink-0 text-green-600" />
              <div>
                <Typography variant="p" className="font-semibold text-green-900">Délai de réponse</Typography>
                <Typography variant="p" className="text-sm text-green-800">
                  Nous nous engageons à vous répondre dans un délai maximum d'<strong>un mois</strong>. Ce délai peut être prolongé de deux mois en cas de demande complexe.
                </Typography>
              </div>
            </div>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* Article 9 - Cookies */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-3">
              <Cookie className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Cookies et Technologies Similaires
            </Typography>
          </div>
          
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <Typography variant="p" className="text-gray-700">
              Le site www.segment-c.com utilise des cookies et technologies similaires. Pour plus d'informations, consultez notre{' '}
              <Link href="/politique-cookies" className="font-medium text-green-600 hover:underline">
                Politique de Cookies
              </Link>.
            </Typography>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* Article 10 - Modifications */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-3">
              <FileText className="size-6 text-green-700" />
            </div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900">
              Modifications de la Politique
            </Typography>
          </div>
          
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <Typography variant="p" className="mb-3 text-gray-700">
              SEGMENT.C se réserve le droit de modifier cette politique à tout moment. En cas de modification substantielle, vous en serez informé par un avis sur le site ou par email si nous disposons de votre adresse.
            </Typography>
            <Typography variant="p" className="text-sm text-gray-600">
              La date de dernière mise à jour est indiquée en haut de cette page.
            </Typography>
          </div>
        </section>

        <div className="my-8 border-t border-gray-200" />

        {/* Contact Final */}
        <section id="contact" className="mb-12 scroll-mt-20">
          <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 via-white to-green-50 p-8 shadow-sm">
            <div className="mb-6 text-center">
              <Typography variant="h2" className="mb-2 text-2xl font-bold text-gray-900">
                Des Questions ?
              </Typography>
              <Typography variant="p" className="text-gray-600">
                Pour toute question concernant cette politique ou le traitement de vos données personnelles
              </Typography>
            </div>
            
            <div className="grid gap-4 md:grid-cols-4">
              <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="mb-3 rounded-full bg-green-100 p-3">
                  <Mail className="size-6 text-green-600" />
                </div>
                <Typography variant="p" className="mb-2 text-sm font-semibold text-gray-900">Email</Typography>
                <Link href="mailto:contact@segment-c.com" className="text-sm text-green-600 hover:underline">
                  contact@segment-c.com
                </Link>
              </div>
              
              <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="mb-3 rounded-full bg-green-100 p-3">
                  <Phone className="size-6 text-green-600" />
                </div>
                <Typography variant="p" className="mb-2 text-sm font-semibold text-gray-900">Téléphone</Typography>
                <Typography variant="p" className="text-sm text-gray-700">[Votre numéro]</Typography>
              </div>
              
              <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="mb-3 rounded-full bg-green-100 p-3">
                  <MapPin className="size-6 text-green-600" />
                </div>
                <Typography variant="p" className="mb-2 text-sm font-semibold text-gray-900">Courrier</Typography>
                <Typography variant="p" className="text-xs text-gray-700">
                  390 Allée de Saussets<br />
                  33127 SAINT-JEAN-D'ILLAC
                </Typography>
              </div>
              
              <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="mb-3 rounded-full bg-green-100 p-3">
                  <Shield className="size-6 text-green-600" />
                </div>
                <Typography variant="p" className="mb-2 text-sm font-semibold text-gray-900">DPO</Typography>
                <Link href="mailto:dpo@segment-c.com" className="text-sm text-green-600 hover:underline">
                  dpo@segment-c.com
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 rounded-xl bg-green-50 p-6 text-center">
          <Typography variant="p" className="font-medium text-green-900">
            SEGMENT.C s'engage à respecter la confidentialité et la sécurité de vos données personnelles.
          </Typography>
        </footer>
      </SectionLayout>
    </>
  );
};

export default termsPage;