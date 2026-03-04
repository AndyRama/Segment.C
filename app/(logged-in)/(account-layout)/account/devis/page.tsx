import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
  LayoutActions, 
} from "@/features/page/layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, CheckCircle2, XCircle, Inbox } from "lucide-react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const statusConfig: Record<string, {
  label: string;
  bg: string;
  text: string;
  dot: string;
  icon: React.ReactNode;
}> = {
  nouveau:  {
    label: "Nouveau",
    bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500",
    icon: <Inbox className="h-4 w-4" />,
  },
  en_cours: {
    label: "En cours",
    bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500",
    icon: <Clock className="h-4 w-4" />,
  },
  traite:   {
    label: "Traité",
    bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
  refuse:   {
    label: "Refusé",
    bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500",
    icon: <XCircle className="h-4 w-4" />,
  },
};

export default async function DevisPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) redirect("/auth/signin");

  const devisList = await prisma.devis.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    include: {
      timeline: { orderBy: { createdAt: "asc" } },
      products: {
        include: {
          product: { select: { name: true, category: true } },
        },
      },
    },
  });

  return (
    <Layout size="lg">
      <LayoutHeader>
        <LayoutTitle>Mes demandes</LayoutTitle>
      </LayoutHeader>
      <LayoutActions>
        <Button asChild>
          <Link href="/account/devis/new" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nouveau devis
          </Link>
        </Button>
      </LayoutActions>
      <LayoutContent className="flex flex-col gap-4">
        {devisList.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <Inbox className="h-10 w-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm">Vous n'avez pas encore de demande de devis.</p>
          </div>
        ) : (
          devisList.map((devis) => {
            const cfg = statusConfig[devis.status] ?? statusConfig.nouveau;
            const completedSteps = devis.timeline.filter((t) => t.completedAt).length;
            const totalSteps = 8;
            const progress = Math.round((completedSteps / totalSteps) * 100);

            return (
              <Link key={devis.id} href={`/account/devis/${devis.id}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer border hover:border-foreground/20">
                  <CardContent className="p-5 flex flex-col gap-3">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm">
                          Devis #{devis.id.slice(-8).toUpperCase()}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {devis.descriptionProjet}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.text}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                          {cfg.label}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    {/* Barre de progression */}
                    {devis.status !== "refuse" && (
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            Avancement du projet
                          </span>
                          <span className="text-xs font-semibold text-foreground">
                            {completedSteps}/{totalSteps} étapes
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full transition-all ${
                              devis.status === "traite"
                                ? "bg-emerald-500"
                                : "bg-amber-400"
                            }`}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {devis.products.length > 0
                          ? `${devis.products.length} produit${devis.products.length > 1 ? "s" : ""}`
                          : "Aucun produit"}
                      </span>
                      <span>
                        {new Date(devis.createdAt).toLocaleDateString("fr-FR", {
                          day: "2-digit", month: "long", year: "numeric",
                        })}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })
        )}
      </LayoutContent>
    </Layout>
  );
}