import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Clock,
  Inbox,
  XCircle,
  PackageCheck,
} from "lucide-react";

const ETAPES = [
  { key: "prise_contact",        label: "Prise de contact",     icon: "👋", desc: "Votre demande a été reçue et prise en charge." },
  { key: "visite_technique",     label: "Visite technique",     icon: "🔍", desc: "Un technicien se déplace pour évaluer votre projet." },
  { key: "devis_envoye",         label: "Devis envoyé",         icon: "📄", desc: "Votre devis détaillé vous a été transmis." },
  { key: "devis_accepte",        label: "Devis accepté",        icon: "✅", desc: "Vous avez validé le devis. La commande va débuter." },
  { key: "commande_fournisseur", label: "Commande fournisseur", icon: "📦", desc: "Les produits ont été commandés auprès du fournisseur." },
  { key: "pose_planifiee",       label: "Pose planifiée",       icon: "📅", desc: "La date de pose a été fixée avec votre accord." },
  { key: "pose_terminee",        label: "Pose terminée",        icon: "🏠", desc: "Les travaux sont terminés. Votre projet est réalisé." },
  { key: "sav_garantie",         label: "SAV / Garantie",       icon: "🛡️", desc: "Votre installation est couverte par notre garantie." },
];

const statusConfig: Record<string, { label: string; bg: string; text: string; dot: string }> = {
  nouveau:  { label: "Nouveau",   bg: "bg-blue-50",    text: "text-blue-700",    dot: "bg-blue-500" },
  en_cours: { label: "En cours",  bg: "bg-amber-50",   text: "text-amber-700",   dot: "bg-amber-500" },
  traite:   { label: "Traité",    bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  refuse:   { label: "Refusé",    bg: "bg-red-50",     text: "text-red-700",     dot: "bg-red-500" },
};

export default async function AccountDevisDetailPage(props: {
  params: Promise<{ devisId: string }>;
}) {
  const { devisId } = await props.params;
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) redirect("/auth/signin");

  const devis = await prisma.devis.findUnique({
    where: { id: devisId },
    include: {
      timeline: { orderBy: { createdAt: "asc" } },
      products: {
        include: {
          product: { select: { name: true, category: true, image: true } },
        },
      },
    },
  });

  // Sécurité : le devis doit appartenir au client connecté
  if (!devis || devis.userId !== session.user.id) notFound();

  const timelineMap = new Map(devis.timeline.map((t) => [t.etape, t]));
  const completedSteps = devis.timeline.filter((t) => t.completedAt).length;
  const progress = Math.round((completedSteps / ETAPES.length) * 100);
  const cfg = statusConfig[devis.status] ?? statusConfig.nouveau;

  // Trouver l'étape en cours (première non complétée)
  const currentEtapeIndex = ETAPES.findIndex(
    (e) => !timelineMap.get(e.key)?.completedAt
  );

  return (
    <Layout size="lg">
      <LayoutHeader>
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="icon">
            <Link href="/account/devis">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="flex flex-col gap-1">
            <LayoutTitle>
              Devis #{devis.id.slice(-8).toUpperCase()}
            </LayoutTitle>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold w-fit ${cfg.bg} ${cfg.text}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} animate-pulse`} />
              {cfg.label}
            </span>
          </div>
        </div>
      </LayoutHeader>

      <LayoutContent className="flex flex-col gap-6">

        {/* Barre de progression globale */}
        {devis.status !== "refuse" && (
          <Card>
            <CardContent className="p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold">Avancement de votre projet</p>
                  <p className="text-xs text-muted-foreground">
                    {completedSteps === ETAPES.length
                      ? "Toutes les étapes sont complétées 🎉"
                      : currentEtapeIndex >= 0
                      ? `Étape en cours : ${ETAPES[currentEtapeIndex].label}`
                      : "Projet terminé"}
                  </p>
                </div>
                <span className={`text-2xl font-bold ${
                  progress === 100 ? "text-emerald-600" : "text-amber-600"
                }`}>
                  {progress}%
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    progress === 100 ? "bg-emerald-500" : "bg-amber-400"
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground text-right">
                {completedSteps} / {ETAPES.length} étapes complétées
              </p>
            </CardContent>
          </Card>
        )}

        {/* Message si refusé */}
        {devis.status === "refuse" && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-5 flex items-start gap-3">
            <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800 text-sm">Demande non retenue</p>
              <p className="text-xs text-red-700 mt-1">
                Votre demande de devis n'a pas pu aboutir. N'hésitez pas à nous contacter pour plus d'informations.
              </p>
            </div>
          </div>
        )}

        {/* Message si traité */}
        {devis.status === "traite" && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 flex items-start gap-3">
            <PackageCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-emerald-800 text-sm">Projet terminé avec succès</p>
              <p className="text-xs text-emerald-700 mt-1">
                Votre projet a été réalisé. Merci de votre confiance ! Votre installation est couverte par notre garantie.
              </p>
            </div>
          </div>
        )}

        {/* Timeline lecture seule */}
        <Card className="overflow-hidden">
          <CardHeader className={`border-b ${
            devis.status === "traite"
              ? "bg-gradient-to-r from-emerald-50 to-teal-50"
              : devis.status === "refuse"
              ? "bg-red-50"
              : "bg-gradient-to-r from-amber-50 to-orange-50"
          }`}>
            <CardTitle className="text-base flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              Suivi de votre projet
            </CardTitle>
            <CardDescription>
              Retrouvez ici toutes les étapes de l'avancement de votre dossier
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {ETAPES.map((etape, index) => {
                const tl = timelineMap.get(etape.key);
                const done = !!tl?.completedAt;
                const isCurrent = index === currentEtapeIndex && devis.status !== "traite" && devis.status !== "refuse";
                const isLast = index === ETAPES.length - 1;

                return (
                  <div
                    key={etape.key}
                    className={`flex items-start gap-4 p-4 transition-colors ${
                      done
                        ? "bg-emerald-50/40"
                        : isCurrent
                        ? "bg-amber-50/60"
                        : "opacity-50"
                    }`}
                  >
                    {/* Icône + ligne verticale */}
                    <div className="flex flex-col items-center gap-1 pt-0.5 shrink-0">
                      {done ? (
                        <CheckCircle2 className="h-6 w-6 text-emerald-600 fill-emerald-100" />
                      ) : isCurrent ? (
                        <div className="h-6 w-6 rounded-full border-2 border-amber-400 bg-amber-50 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                        </div>
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground/30" />
                      )}
                      {!isLast && (
                        <div className={`w-0.5 h-6 rounded-full ${
                          done ? "bg-emerald-300" : "bg-border"
                        }`} />
                      )}
                    </div>

                    {/* Contenu */}
                    <div className="flex-1 flex flex-col gap-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg leading-none">{etape.icon}</span>
                          <span className={`text-sm font-medium ${
                            done
                              ? "text-emerald-700"
                              : isCurrent
                              ? "text-amber-700"
                              : "text-muted-foreground"
                          }`}>
                            {etape.label}
                          </span>
                          {isCurrent && (
                            <span className="text-xs px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium">
                              En cours
                            </span>
                          )}
                        </div>
                        {done && tl?.completedAt && (
                          <span className="text-xs text-muted-foreground shrink-0 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                            {new Date(tl.completedAt).toLocaleDateString("fr-FR", {
                              day: "2-digit", month: "long", year: "numeric",
                            })}
                          </span>
                        )}
                      </div>

                      {/* Description de l'étape */}
                      {(done || isCurrent) && (
                        <p className="text-xs text-muted-foreground">{etape.desc}</p>
                      )}

                      {/* Note admin si présente */}
                      {done && tl?.note && (
                        <p className="text-xs italic bg-white border rounded px-2 py-1 text-muted-foreground">
                          💬 {tl.note}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

      </LayoutContent>
    </Layout>
  );
}