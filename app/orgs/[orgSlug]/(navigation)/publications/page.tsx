import { getPosts } from "@/features/posts/post-manager";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
  LayoutActions,
} from "@/features/page/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar, Clock, ExternalLink, Eye, PenLine, CheckCircle2, Circle } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/format/date";
import { calculateReadingTime } from "@/features/posts/calculate-reading-time";
import type { PageParams } from "@/types/next";

// Planning statique des 52 articles
const PLANNING = [
  { semaine: "S1",  publie: true,  theme: "Matériaux",            titre: "Quel materiau choisir pour vos fenêtres à Bordeaux ?",                                 		   							   intention: "Transactionnelle" },
  { semaine: "S2",  publie: true,  theme: "Performance",          titre: "Tout comprendre sur l isolation thermique de vos menuiseries sw et uw",                      						      intention: "Éducationnel" },
  { semaine: "S3",  publie: true,  theme: "Type (Baie)",          titre: "Baie Vitrée Coulissante vs. à Galandage : Laquelle installer chez vous en Gironde ?",                         intention: "Comparatif/Achat" },
  { semaine: "S4",  publie: true,  theme: "Local (Climat)",       titre: "Fenêtres resistantes aux embruns votre guide pour votre maison sur le Bassin d Arcachon",                     intention: "Locale/Spécifique" },
  { semaine: "S5",  publie: true,  theme: "Aides",                titre: "MaPrimeRenov et Menuiserie guide complet pour financer vos travaux de fenetres.",                             intention: "Transactionnelle" },
  { semaine: "S6",  publie: true,  theme: "Double Vitrage",       titre: "Qu est-ce que le Double Vitrage ? Les 3 erreurs a eviter lors du choix",                       		            intention: "Éducationnel" },
  { semaine: "S7",  publie: true,  theme: "Rénovation",           titre: "Remplacer ses anciennes fenêtres : Quel budget prévoir pour une maison à Mérignac ?",                         intention: "Information/Local" },
  { semaine: "S8",  publie: true,  theme: "La Pose",              titre: "Pose de Fenêtre, pourquoi faire appel a un artisan professionnel plutot qu a un poseur seul ?",  	            intention: "Autorité/Confiance" },
  { semaine: "S9",  publie: true,  theme: "Tendance",             titre: "Les couleurs tendance pour les cadres de fenêtres en 2026 - architecture bordelaise",            				      intention: "Inspiration" },
  { semaine: "S10", publie: true,  theme: "Entretien",            titre: "Guide d entretien pour les fenêtres ALU et PVC, 5 gestes pour une longevite maximale",           		          intention: "Entretien" },
  { semaine: "S11", publie: true,  theme: "Type (Ouvrant)",       titre: "Fenêtre Oscillo-Battante ou à Soufflet ? Comparatif des systèmes d'ouverture.",                    	          intention: "Information" },
  { semaine: "S12", publie: false, theme: "Isolation",            titre: "Comment le simple changement de vos fenêtres peut réduire votre facture de chauffage de 20%.",                intention: "Bénéfice/Achat" },
  { semaine: "S13", publie: false, theme: "Résumé T1",            titre: "Les 10 questions à poser à votre menuisier avant de signer un devis de fenêtres.",                            intention: "Récapitulatif" },
  { semaine: "S14", publie: false, theme: "Portes d'Entrée",      titre: "Les 5 critères essentiels pour choisir une porte d'entrée blindée et sécurisée.",                  	          intention: "Achat/Sécurité" },
  { semaine: "S15", publie: false, theme: "Matériaux (Porte)",    titre: "Quel matériau pour votre porte d'entrée : PVC, Bois, Acier ou Aluminium ?",                       	          intention: "Comparatif" },
  { semaine: "S16", publie: false, theme: "Portes de Garage",     titre: "Le guide complet des Portes de Garage : Sectionnelle, Enroulable ou Basculante ?",                  	        intention: "Transactionnel" },
  { semaine: "S17", publie: false, theme: "Sécurité",             titre: "Comment renforcer la sécurité de votre habitation avec une serrure 3 points et un vitrage anti-effraction ?", intention: "Sécurité" },
  { semaine: "S18", publie: false, theme: "Tendance",             titre: "Portes d'entrée design : Les modèles qui s'adaptent au style architectural de Bordeaux.",                     intention: "Inspiration/Locale" },
  { semaine: "S19", publie: false, theme: "Portail (Choix)",      titre: "Portails : Battant ou Coulissant ? Quel est le meilleur choix pour l'accès de votre propriété ?",             intention: "Transactionnel" },
  { semaine: "S20", publie: false, theme: "Portail (Auto.)",      titre: "L'automatisme de Portail : Guide d'installation et de maintenance de la motorisation.",                       intention: "Technique" },
  { semaine: "S21", publie: false, theme: "Portes (Isolation)",   titre: "Isolation phonique et thermique de votre porte d'entrée : L'impact sur votre confort.",                       intention: "Éducationnel" },
  { semaine: "S22", publie: false, theme: "Rénovation",           titre: "Rénover une ancienne porte de garage : Coûts, étapes et aides possibles.",                                    intention: "Information/Achat" },
  { semaine: "S23", publie: false, theme: "Local (Exemple)",      titre: "Nos plus belles réalisations de portes d'entrée sur mesure à Pessac et Cestas.",                              intention: "Local/Preuve Sociale" },
  { semaine: "S24", publie: false, theme: "Portes (Design)",      titre: "Portes d'intérieur ou d'extérieur : Choisir le bon vitrage pour la lumière et l'intimité.",                   intention: "Information" },
  { semaine: "S25", publie: false, theme: "Entretien",            titre: "Comment entretenir vos Portails et Portes de Garage pour éviter la rouille et les pannes ?",                  intention: "Entretien" },
  { semaine: "S26", publie: false, theme: "Résumé T2",            titre: "7 erreurs courantes à éviter lors de l'achat et de l'installation d'un portail ou d'une porte.",              intention: "Récapitulatif" },
  { semaine: "S27", publie: false, theme: "Volets",               titre: "Volets Roulants vs. Volets Battants : Le match des systèmes en Nouvelle-Aquitaine.",                          intention: "Comparatif/Achat" },
  { semaine: "S28", publie: false, theme: "Volets (Motorisation)",titre: "Motorisation de Volets : Les avantages et le coût d'un système électrique ou solaire.",                       intention: "Transactionnel" },
  { semaine: "S29", publie: false, theme: "Sécurité",             titre: "Comment les volets roulants renforcent la sécurité contre les intrusions ?",                                  intention: "Sécurité" },
  { semaine: "S30", publie: false, theme: "Pergolas",             titre: "Guide : Comment choisir et installer une Pergola Bioclimatique pour votre extérieur ?",                       intention: "Produit Connexe" },
  { semaine: "S31", publie: false, theme: "Local",                titre: "Pergola et permis de construire : Les réglementations à connaître en Gironde (PLU).",                         intention: "Locale/Législation" },
  { semaine: "S32", publie: false, theme: "Entretien",            titre: "Réparer ou Remplacer : Que faire face à un volet roulant bloqué ou cassé ?",                                  intention: "Entretien/Service" },
  { semaine: "S33", publie: false, theme: "Vérandas (Isolation)", titre: "La véranda, une pièce de vie toute l'année : Les secrets d'une isolation thermique réussie.",                 intention: "Information" },
  { semaine: "S34", publie: false, theme: "Vérandas (Type)",      titre: "Quel type de véranda choisir : Aluminium, Bois ou Mixte ? Avantages et Prix.",                                intention: "Comparatif/Achat" },
  { semaine: "S35", publie: false, theme: "Extension",            titre: "Le coût d'une extension de maison (véranda) : Les facteurs qui font varier le budget.",                       intention: "Information/Achat" },
  { semaine: "S36", publie: false, theme: "Lumière",              titre: "Comment améliorer la luminosité d'une pièce sombre avec l'installation d'une baie vitrée ?",                  intention: "Solution/Bénéfice" },
  { semaine: "S37", publie: false, theme: "Qualité",              titre: "Le Label NF et le marquage CE en menuiserie : Vos garanties qualité.",                                        intention: "Confiance/Autorité" },
  { semaine: "S38", publie: false, theme: "Saisonnier",           titre: "Préparer l'été : Les solutions de menuiserie pour maintenir votre maison au frais.",                          intention: "Saisonnier" },
  { semaine: "S39", publie: false, theme: "Résumé T3",            titre: "Devis Menuiserie : Comment décrypter les lignes de prix (pose, matériaux, TVA) ?",                            intention: "Récapitulatif" },
  { semaine: "S40", publie: false, theme: "Local / Confiance",    titre: "L'importance de choisir un Artisan Menuisier Local près de St Jean d'Illac ou Bordeaux.",                     intention: "Confiance/Locale" },
  { semaine: "S41", publie: false, theme: "Service Client",       titre: "SAV Menuiserie : Les services et garanties offerts par Segment.C après l'installation.",                      intention: "Service/Fidélisation" },
  { semaine: "S42", publie: false, theme: "Local / Zones",        titre: "Nos zones d'intervention détaillées : De Bordeaux à Arcachon, qui couvre Segment.C ?",                        intention: "Locale/Détail" },
  { semaine: "S43", publie: false, theme: "Preuve Sociale",       titre: "Cas Client : Témoignage détaillé d'une rénovation complète des menuiseries au Cap Ferret.",                   intention: "Preuve Sociale" },
  { semaine: "S44", publie: false, theme: "Innovation",           titre: "La Domotique en menuiserie : Gérer vos volets et portails à distance via smartphone.",                        intention: "Innovation" },
  { semaine: "S45", publie: false, theme: "Législation",          titre: "Que dit la loi ? Normes d'accessibilité et de sécurité pour les menuiseries (PMR).",                          intention: "Législation" },
  { semaine: "S46", publie: false, theme: "Processus",            titre: "Le processus de travail de Segment.C : Les 4 étapes claires de la prise de contact à la pose finale.",        intention: "Confiance/Processus" },
  { semaine: "S47", publie: false, theme: "Saisonnier",           titre: "Guide de l'hivernage : Comment préparer vos menuiseries pour affronter le froid et l'humidité.",              intention: "Saisonnier" },
  { semaine: "S48", publie: false, theme: "Marque",               titre: "Pourquoi Segment.C ? Nos engagements qualité, garantie et service client en Gironde.",                        intention: "Marque/Différenciation" },
  { semaine: "S49", publie: false, theme: "Maintenance",          titre: "Entretien Préventif : 5 conseils pour optimiser l'efficacité énergétique de vos fenêtres avant l'hiver.",     intention: "Audit/Économie" },
  { semaine: "S50", publie: false, theme: "Couverture FAQ",       titre: "FAQ complète : Les 10 questions les plus fréquentes posées à notre équipe (et nos réponses).",                intention: "Couverture FAQ" },
  { semaine: "S51", publie: false, theme: "Rétrospective",        titre: "Bilan 2025 : Les grandes tendances qui ont marqué le secteur de la menuiserie et ce qui arrive en 2026.",     intention: "Rétrospective" },
  { semaine: "S52", publie: false, theme: "Conversion / Offre",   titre: "Offre spéciale de début d'année : Préparez vos projets 2026 avec une consultation gratuite.",                 intention: "Transactionnel" },
];

export default async function PublicationsAdminPage(
  props: PageParams<{ orgSlug: string }>
) {
  const params = await props.params;
  const posts = await getPosts();

  // Matcher les articles du planning avec les posts réels par titre approximatif
  const postsMap = new Map(
    posts.map((p) => [p.attributes.title.toLowerCase().slice(0, 30), p])
  );

  const publishedCount = PLANNING.filter((p) => p.publie).length;
  const totalCount = PLANNING.length;

  return (
    <Layout size="lg">
      <LayoutHeader>
        <LayoutTitle>Planning des publications</LayoutTitle>
      </LayoutHeader>

      <LayoutActions className="flex items-center gap-3">
        {/* Compteurs */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium text-xs">
            <CheckCircle2 className="h-3.5 w-3.5" />
            {publishedCount} publiés
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium text-xs">
            <Circle className="h-3.5 w-3.5" />
            {totalCount - publishedCount} à venir
          </span>
        </div>

        {/* Barre de progression globale */}
        <div className="flex items-center gap-2 ml-2">
          <div className="w-32 bg-muted rounded-full h-1.5">
            <div
              className="h-1.5 rounded-full bg-emerald-500 transition-all"
              style={{ width: `${(publishedCount / totalCount) * 100}%` }}
            />
          </div>
          <span className="text-xs text-muted-foreground">
            {Math.round((publishedCount / totalCount) * 100)}%
          </span>
        </div>
      </LayoutActions>

      <LayoutContent>
        <div className="rounded-lg border bg-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-16">Sem.</TableHead>
                <TableHead className="w-20">Statut</TableHead>
                <TableHead className="w-36">Thème</TableHead>
                <TableHead>Titre de l'article</TableHead>
                <TableHead className="w-36">Intention SEO</TableHead>
                <TableHead className="w-28 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PLANNING.map((article) => {
                // Chercher si un post correspondant existe
                const matchedPost = posts.find((p) =>
                  p.attributes.title.toLowerCase().includes(
                    article.titre.toLowerCase().slice(0, 20)
                  )
                );

                return (
                  <TableRow
                    key={article.semaine}
                    className={article.publie ? "bg-emerald-50/30 hover:bg-emerald-50/50" : "hover:bg-muted/30"}
                  >
                    <TableCell className="font-mono text-xs text-muted-foreground font-semibold">
                      {article.semaine}
                    </TableCell>

                    <TableCell>
                      {article.publie ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
                          <CheckCircle2 className="h-3 w-3" />
                          Publié
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                          <Circle className="h-3 w-3" />
                          Planifié
                        </span>
                      )}
                    </TableCell>

                    <TableCell>
                      <Badge variant="outline" className="text-xs font-normal">
                        {article.theme}
                      </Badge>
                    </TableCell>

                    <TableCell className="max-w-[400px]">
                      <p className="text-sm font-medium leading-snug line-clamp-2">
                        {article.titre}
                      </p>
                    </TableCell>

                    <TableCell>
                      <span className="text-xs text-muted-foreground">
                        {article.intention}
                      </span>
                    </TableCell>

                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        {matchedPost ? (
                          <>
                            <Button asChild variant="ghost" size="sm" className="h-7 px-2">
                              <Link href={`/orgs/${params.orgSlug}/publications/${matchedPost.slug}`}>
                                <Eye className="h-3.5 w-3.5" />
                              </Link>
                            </Button>
                            <Button asChild variant="ghost" size="sm" className="h-7 px-2">
                              <Link href={`/posts/${matchedPost.slug}`} target="_blank">
                                <ExternalLink className="h-3.5 w-3.5" />
                              </Link>
                            </Button>
                          </>
                        ) : (
                          <Button asChild variant="ghost" size="sm" className="h-7 px-2 text-muted-foreground">
                            <Link href={`/orgs/${params.orgSlug}/publications/new?semaine=${article.semaine}&titre=${encodeURIComponent(article.titre)}`}>
                              <PenLine className="h-3.5 w-3.5" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </LayoutContent>
    </Layout>
  );
}