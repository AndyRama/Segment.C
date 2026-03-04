import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import { combineWithParentMetadata } from "@/lib/metadata";
import type { PageParams } from "@/types/next";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const generateMetadata = combineWithParentMetadata({
  title: "Devis",
  description: "Liste des devis",
});

const statusColor: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  nouveau: "default",
  en_cours: "outline",
  traite: "secondary",
  refuse: "destructive",
};

const statusLabel: Record<string, string> = {
  nouveau: "Nouveau",
  en_cours: "En cours",
  traite: "Traité",
  refuse: "Refusé",
};

export default async function RoutePage(props: PageParams<{ orgSlug: string }>) {
  const params = await props.params;

  const devis = await prisma.devis.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: { id: true, name: true, email: true, image: true },
      },
      products: {
        include: { product: { select: { name: true, category: true } } },
      },
    },
  });

  return (
    <Layout size="lg">
      <LayoutHeader>
        <LayoutTitle>Devis</LayoutTitle>
      </LayoutHeader>
      <LayoutContent className="flex flex-col gap-4 lg:gap-6">
        <p className="text-sm text-muted-foreground">
          {devis.length} devis au total
        </p>

        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Projet</TableHead>
                <TableHead>Produits</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Créé le</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {devis.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground py-10">
                    Aucun devis trouvé.
                  </TableCell>
                </TableRow>
              ) : (
                devis.map((d) => (
                  <TableRow key={d.id}>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{d.nomComplet}</span>
                        <span className="text-xs text-muted-foreground">{d.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {d.clientType}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate text-sm text-muted-foreground">
                      {d.descriptionProjet}
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-medium">{d.products.length}</span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusColor[d.status] ?? "outline"}>
                        {statusLabel[d.status] ?? d.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {new Date(d.createdAt).toLocaleDateString("fr-FR")}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/orgs/${params.orgSlug}/devis/${d.id}`}>
                          Voir
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </LayoutContent>
    </Layout>
  );
}