import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import {
  Layout,
  LayoutActions,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import { Badge } from "@/components/ui/badge";
import { combineWithParentMetadata } from "@/lib/metadata";
import type { PageParams } from "@/types/next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle2, Circle, Clock, User, Building2, Phone, Mail } from "lucide-react";
import Link from "next/link";

export const generateMetadata = combineWithParentMetadata({
  title: "Détail devis",
  description: "Suivi du projet client",
});

const ETAPES = [
  { key: "prise_contact",       label: "Prise de contact",    icon: "👋" },
  { key: "visite_technique",    label: "Visite technique",    icon: "🔍" },
  { key: "devis_envoye",        label: "Devis envoyé",        icon: "📄" },
  { key: "devis_accepte",       label: "Devis accepté",       icon: "✅" },
  { key: "commande_fournisseur",label: "Commande fournisseur",icon: "📦" },
  { key: "pose_planifiee",      label: "Pose planifiée",      icon: "📅" },
  { key: "pose_terminee",       label: "Pose terminée",       icon: "🏠" },
  { key: "sav_garantie",        label: "SAV / Garantie",      icon: "🛡️" },
];

const statusConfig: Record<string, { label: string; bg: string; text: string; dot: string }> = {
  nouveau:   { label: "Nouveau",    bg: "bg-blue-50",    text: "text-blue-700",   dot: "bg-blue-500" },
  en_cours:  { label: "En cours",   bg: "bg-amber-50",   text: "text-amber-700",  dot: "bg-amber-500" },
  traite:    { label: "Traité",     bg: "bg-emerald-50", text: "text-emerald-700",dot: "bg-emerald-500" },
  refuse:    { label: "Refusé",     bg: "bg-red-50",     text: "text-red-700",    dot: "bg-red-500" },
};

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 border-b border-border/50 last:border-0">
      <span className="text-xs text-muted-foreground shrink-0 pt-0.5">{label}</span>
      <span className="text-sm text-right font-medium">{value}</span>
    </div>
  );
}

export default async function RoutePage(
  props: PageParams<{ orgSlug: string; devisId: string }>
) {
  const params = await props.params;

  const devis = await prisma.devis.findUnique({
    where: { id: params.devisId },
    include: {
      user: { select: { id: true, name: true, email: true, image: true } },
      products: {
        include: {
          product: { select: { id: true, name: true, category: true, material: true, image: true, priceRange: true } },
        },
      },
      timeline: { orderBy: { createdAt: "asc" } },
    },
  });

  if (!devis) notFound();

  const isEnCours = devis.status === "en_cours";
  const isTraite = devis.status === "traite";
  const isNouveau = devis.status === "nouveau";

  // Map timeline existante par étape
  const timelineMap = new Map(devis.timeline.map((t) => [t.etape, t]));

  // Server actions
  async function updateStatus(formData: FormData) {
    "use server";
    const status = formData.get("status") as string;
    await prisma.devis.update({ where: { id: params.devisId }, data: { status } });
    revalidatePath(`/orgs/${params.orgSlug}/devis/${params.devisId}`);
  }

  async function toggleEtape(formData: FormData) {
    "use server";
    const etape = formData.get("etape") as string;
    const note = formData.get("note") as string;
    const existing = await prisma.devisTimeline.findFirst({
      where: { devisId: params.devisId, etape },
    });

    if (existing?.completedAt) {
      // Désactiver
      await prisma.devisTimeline.update({
        where: { id: existing.id },
        data: { completedAt: null, note: note || null },
      });
    } else if (existing) {
      await prisma.devisTimeline.update({
        where: { id: existing.id },
        data: { completedAt: new Date(), note: note || null },
      });
    } else {
      await prisma.devisTimeline.create({
        data: {
          devisId: params.devisId,
          etape,
          completedAt: new Date(),
          note: note || null,
        },
      });
    }
    revalidatePath(`/orgs/${params.orgSlug}/devis/${params.devisId}`);
  }

  async function deleteDevis() {
    "use server";
    await prisma.devis.delete({ where: { id: params.devisId } });
    redirect(`/orgs/${params.orgSlug}/devis`);
  }

  const cfg = statusConfig[devis.status] ?? statusConfig.nouveau;

  return (
    <Layout size="lg">
      <LayoutHeader>
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="icon">
            <Link href={`/orgs/${params.orgSlug}/devis`}>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="flex flex-col gap-1">
            <LayoutTitle>
              Devis #{devis.id.slice(-8).toUpperCase()}
            </LayoutTitle>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold w-fit ${cfg.bg} ${cfg.text}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
              {cfg.label}
            </span>
          </div>
        </div>
      </LayoutHeader>

      <LayoutActions className="flex gap-2 items-center">
        {/* Changer statut */}
        <form action={updateStatus} className="flex gap-2 items-center">
          <Select name="status" defaultValue={devis.status}>
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nouveau">Nouveau</SelectItem>
              <SelectItem value="en_cours">En cours</SelectItem>
              <SelectItem value="traite">Traité</SelectItem>
              <SelectItem value="refuse">Refusé</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" variant="outline" size="sm" className="border-emerald-500 text-emerald-700 hover:bg-emerald-50">
            Mettre à jour
          </Button>
        </form>

        <form action={deleteDevis}>
          <Button type="submit" variant="destructive" size="sm">Supprimer</Button>
        </form>
      </LayoutActions>

      <LayoutContent className="flex flex-col gap-6">

        {/* === VUE EN COURS : Timeline centrale === */}
        {(isEnCours || isNouveau) && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

            {/* Timeline */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-600" />
                    Suivi du projet
                  </CardTitle>
                  <CardDescription>
                    Cochez les étapes au fur et à mesure de l'avancement
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {ETAPES.map((etape, index) => {
                      const tl = timelineMap.get(etape.key);
                      const done = !!tl?.completedAt;
                      const isLast = index === ETAPES.length - 1;

                      return (
                        <form key={etape.key} action={toggleEtape}>
                          <input type="hidden" name="etape" value={etape.key} />
                          <div className={`flex items-start gap-4 p-4 transition-colors ${done ? "bg-emerald-50/50" : "hover:bg-muted/30"}`}>
                            {/* Indicateur vertical */}
                            <div className="flex flex-col items-center gap-1 pt-0.5 shrink-0">
                              <button
                                type="submit"
                                className="focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-full"
                                title={done ? "Marquer comme non fait" : "Marquer comme fait"}
                              >
                                {done ? (
                                  <CheckCircle2 className="h-6 w-6 text-emerald-600 fill-emerald-100" />
                                ) : (
                                  <Circle className="h-6 w-6 text-muted-foreground/40" />
                                )}
                              </button>
                              {!isLast && (
                                <div className={`w-0.5 h-6 rounded-full ${done ? "bg-emerald-300" : "bg-border"}`} />
                              )}
                            </div>

                            {/* Contenu */}
                            <div className="flex-1 flex flex-col gap-2 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-lg leading-none">{etape.icon}</span>
                                  <span className={`text-sm font-medium ${done ? "text-emerald-700" : "text-foreground"}`}>
                                    {etape.label}
                                  </span>
                                </div>
                                {done && tl?.completedAt && (
                                  <span className="text-xs text-muted-foreground shrink-0">
                                    {new Date(tl.completedAt).toLocaleDateString("fr-FR", {
                                      day: "2-digit", month: "short", year: "numeric",
                                    })}
                                  </span>
                                )}
                              </div>

                              {/* Note optionnelle */}
                              {done && tl?.note && (
                                <p className="text-xs text-muted-foreground italic bg-white rounded px-2 py-1 border">
                                  {tl.note}
                                </p>
                              )}

                              {/* Input note si en cours de complétion */}
                              {!done && (
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="text"
                                    name="note"
                                    placeholder="Note optionnelle..."
                                    className="flex-1 text-xs border rounded px-2 py-1 bg-background focus:outline-none focus:ring-1 focus:ring-emerald-400"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </form>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Colonne droite — infos client + projet */}
            <div className="flex flex-col gap-4">
              <ClientCard devis={devis} />
              <ProjetCard devis={devis} />
            </div>
          </div>
        )}

        {/* === VUE TRAITÉ : Historique + récap === */}
        {isTraite && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

            {/* Historique timeline (lecture seule) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b">
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Historique du projet
                  </CardTitle>
                  <CardDescription>
                    Toutes les étapes complétées pour ce dossier
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {ETAPES.map((etape, index) => {
                      const tl = timelineMap.get(etape.key);
                      const done = !!tl?.completedAt;
                      const isLast = index === ETAPES.length - 1;

                      return (
                        <div
                          key={etape.key}
                          className={`flex items-start gap-4 p-4 ${done ? "" : "opacity-40"}`}
                        >
                          <div className="flex flex-col items-center gap-1 pt-0.5 shrink-0">
                            {done ? (
                              <CheckCircle2 className="h-6 w-6 text-emerald-600 fill-emerald-100" />
                            ) : (
                              <Circle className="h-6 w-6 text-muted-foreground/30" />
                            )}
                            {!isLast && (
                              <div className={`w-0.5 h-6 rounded-full ${done ? "bg-emerald-300" : "bg-border"}`} />
                            )}
                          </div>

                          <div className="flex-1 flex flex-col gap-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span className="text-lg leading-none">{etape.icon}</span>
                                <span className={`text-sm font-medium ${done ? "text-emerald-700" : "text-muted-foreground"}`}>
                                  {etape.label}
                                </span>
                              </div>
                              {done && tl?.completedAt && (
                                <span className="text-xs text-muted-foreground shrink-0 bg-emerald-50 px-2 py-0.5 rounded-full">
                                  {new Date(tl.completedAt).toLocaleDateString("fr-FR", {
                                    day: "2-digit", month: "long", year: "numeric",
                                  })}
                                </span>
                              )}
                            </div>
                            {tl?.note && (
                              <p className="text-xs text-muted-foreground italic bg-muted/30 rounded px-2 py-1">
                                {tl.note}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Produits associés */}
              {devis.products.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Produits du dossier
                      <Badge variant="secondary" className="ml-2">{devis.products.length}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {devis.products.map((dp) => (
                        <div key={dp.id} className="flex items-center gap-3 rounded-lg border p-3 bg-muted/20">
                          {dp.product.image && (
                            <img
                              src={`/${dp.product.image.replace(/^\//, "")}`}
                              alt={dp.product.name}
                              className="h-10 w-10 rounded object-cover bg-muted"
                            />
                          )}
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <p className="text-sm font-medium truncate">{dp.product.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {dp.product.category.replace(/_/g, " ")} · Qté {dp.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Colonne droite */}
            <div className="flex flex-col gap-4">
              {/* Badge dossier clôturé */}
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span className="font-semibold text-emerald-800 text-sm">Dossier traité</span>
                </div>
                <p className="text-xs text-emerald-700">
                  Ce projet a été complété avec succès. Toutes les étapes ont été enregistrées dans l'historique.
                </p>
                <p className="text-xs text-muted-foreground">
                  Mis à jour le {new Date(devis.updatedAt).toLocaleDateString("fr-FR", {
                    day: "2-digit", month: "long", year: "numeric",
                  })}
                </p>
              </div>

              <ClientCard devis={devis} />
              <ProjetCard devis={devis} />
            </div>
          </div>
        )}

        {/* === VUE REFUSÉ === */}
        {devis.status === "refuse" && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="rounded-xl border border-red-200 bg-red-50 p-6 flex flex-col gap-2">
                <span className="font-semibold text-red-800">Devis refusé</span>
                <p className="text-sm text-red-700">
                  Ce devis a été marqué comme refusé. Vous pouvez modifier son statut pour le rouvrir.
                </p>
              </div>
              <ClientCard devis={devis} />
            </div>
            <ProjetCard devis={devis} />
          </div>
        )}

      </LayoutContent>
    </Layout>
  );
}

// ─── Composants helper ───────────────────────────────────────────────────────

type DevisWithRelations = Awaited<ReturnType<typeof prisma.devis.findUnique>> & {
  user?: { id: string; name: string; email: string; image: string | null } | null;
  products: any[];
  timeline: any[];
};

function ClientCard({ devis }: { devis: any }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <User className="h-4 w-4 text-muted-foreground" />
          Client
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-0">
        {devis.user && (
          <div className="flex items-center gap-3 pb-3 mb-3 border-b">
            <Avatar className="h-9 w-9">
              <AvatarImage src={devis.user.image ?? undefined} />
              <AvatarFallback>
                {devis.user.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">{devis.user.name}</p>
              <p className="text-xs text-muted-foreground">{devis.user.email}</p>
            </div>
          </div>
        )}
        <Row label="Nom" value={devis.nomComplet} />
        <Row label="Email" value={
          <a href={`mailto:${devis.email}`} className="text-blue-600 hover:underline flex items-center gap-1">
            <Mail className="h-3 w-3" />
            {devis.email}
          </a>
        } />
        {devis.telephone && (
          <Row label="Téléphone" value={
            <a href={`tel:${devis.telephone}`} className="text-blue-600 hover:underline flex items-center gap-1">
              <Phone className="h-3 w-3" />
              {devis.telephone}
            </a>
          } />
        )}
        <Row label="Type" value={
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
            devis.clientType === "professionnel"
              ? "bg-violet-100 text-violet-700"
              : "bg-sky-100 text-sky-700"
          }`}>
            {devis.clientType === "professionnel" ? "🏢 Professionnel" : "👤 Particulier"}
          </span>
        } />
        {devis.clientType === "professionnel" && devis.nomEntreprise && (
          <Row label="Entreprise" value={
            <span className="flex items-center gap-1">
              <Building2 className="h-3 w-3" />
              {devis.nomEntreprise}
            </span>
          } />
        )}
      </CardContent>
    </Card>
  );
}

function ProjetCard({ devis }: { devis: any }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Projet</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-0">
        <Row label="Créé le" value={new Date(devis.createdAt).toLocaleDateString("fr-FR", {
          day: "2-digit", month: "long", year: "numeric",
        })} />
        {devis.typeProjet && <Row label="Type" value={devis.typeProjet} />}
        {devis.natureTravaux && <Row label="Travaux" value={devis.natureTravaux} />}
        {devis.besoinsRGE && <Row label="RGE" value={devis.besoinsRGE} />}
        <div className="flex flex-col gap-1 pt-2 mt-1">
          <span className="text-xs text-muted-foreground">Description</span>
          <p className="text-sm leading-relaxed text-foreground">{devis.descriptionProjet}</p>
        </div>
      </CardContent>
    </Card>
  );
}