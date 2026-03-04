import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import {
  Layout,
  LayoutActions,
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
import { Eye, Plus } from "lucide-react";
import type { ProductCategory } from "@/generated/prisma";

export const generateMetadata = combineWithParentMetadata({
  title: "Produits",
  description: "Gestion des produits",
});

const ALLOWED_CATEGORIES: ProductCategory[] = [
  "FENETRE",
  "PORTE",
  "PORTE_ENTRER",
  "PORTE_VITRAGE",
  "BAIE_VITREE",
  "PORTE_GARAGE",
];

const categoryLabel: Record<string, string> = {
  FENETRE: "Fenêtre",
  PORTE: "Porte",
  PORTE_ENTRER: "Porte d'entrée",
  PORTE_VITRAGE: "Porte vitrée",
  BAIE_VITREE: "Baie vitrée",
  PORTE_GARAGE: "Porte de garage",
};

const materialColor: Record<string, "default" | "secondary" | "outline"> = {
  ALUMINIUM: "default",
  PVC: "secondary",
  BOIS: "outline",
  ACIER: "outline",
  MIXTE: "secondary",
  BOIS_ALUMINIUM: "outline",
};

const filterTabs = [
  { label: "Tous", value: "" },
  { label: "Fenêtres", value: "FENETRE" },
  { label: "Portes", value: "PORTE" },
  { label: "Baies vitrées", value: "BAIE_VITREE" },
  { label: "Garages", value: "PORTE_GARAGE" },
];

export default async function RoutePage(
  props: PageParams<{ orgSlug: string }>
) {
  const params = await props.params;
  const searchParams = await (props as any).searchParams;
  const categoryFilter = searchParams?.category as string | undefined;

  // Résoudre les catégories selon le filtre
  let whereCategories: ProductCategory[] = ALLOWED_CATEGORIES;

  if (categoryFilter === "PORTE") {
    whereCategories = ["PORTE", "PORTE_ENTRER", "PORTE_VITRAGE"];
  } else if (categoryFilter === "FENETRE") {
    whereCategories = ["FENETRE"];
  } else if (categoryFilter === "BAIE_VITREE") {
    whereCategories = ["BAIE_VITREE"];
  } else if (categoryFilter === "PORTE_GARAGE") {
    whereCategories = ["PORTE_GARAGE"];
  }

  const products = await prisma.product.findMany({
    where: { category: { in: whereCategories } },
    orderBy: [{ category: "asc" }, { name: "asc" }],
    select: {
      id: true,
      name: true,
      category: true,
      material: true,
      seller: true,
      priceRange: true,
      rating: true,
      isActive: true,
      isNew: true,
      isPopular: true,
    },
  });

  return (
    <Layout size="lg">
      <LayoutHeader>
        <LayoutTitle>Produits</LayoutTitle>
      </LayoutHeader>
      <LayoutActions>
        <Button asChild variant="default" size="sm">
          <Link href={`/orgs/${params.orgSlug}/produits/new`}>
            <Plus className="h-4 w-4 mr-2" />
            Ajouter
          </Link>
        </Button>
      </LayoutActions>

      <LayoutContent className="flex flex-col gap-4 lg:gap-6">
        {/* Filtres tabs */}
        <div className="flex gap-2 flex-wrap">
          {filterTabs.map((tab) => (
            <Button
              key={tab.value}
              asChild
              variant={
                (categoryFilter ?? "") === tab.value ? "default" : "outline"
              }
              size="sm"
            >
              <Link
                href={`/orgs/${params.orgSlug}/produits${
                  tab.value ? `?category=${tab.value}` : ""
                }`}
              >
                {tab.label}
              </Link>
            </Button>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          {products.length} produit{products.length > 1 ? "s" : ""}
        </p>

        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Catégorie</TableHead>
                <TableHead>Matériau</TableHead>
                <TableHead>Vendeur</TableHead>
                <TableHead>Prix</TableHead>
                <TableHead>Note</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={9}
                    className="text-center text-muted-foreground py-10"
                  >
                    Aucun produit trouvé.
                  </TableCell>
                </TableRow>
              ) : (
                products.map((product) => (
                  <TableRow key={product.id}>
                    {/* Nom */}
                    <TableCell className="font-medium max-w-[160px] truncate">
                      {product.name}
                    </TableCell>

                    {/* Catégorie */}
                    <TableCell className="text-sm text-muted-foreground">
                      {categoryLabel[product.category] ?? product.category}
                    </TableCell>

                    {/* Matériau */}
                    <TableCell>
                      <Badge
                        variant={materialColor[product.material] ?? "outline"}
                        className="capitalize text-xs"
                      >
                        {product.material.replace(/_/g, " ")}
                      </Badge>
                    </TableCell>

                    {/* Vendeur */}
                    <TableCell className="text-sm">
                      {product.seller ?? "—"}
                    </TableCell>

                    {/* Prix */}
                    <TableCell className="text-sm text-muted-foreground max-w-[100px] truncate">
                      {product.priceRange}
                    </TableCell>

                    {/* Note */}
                    <TableCell className="text-sm">
                      ⭐ {product.rating.toFixed(1)}
                    </TableCell>

                    {/* Statut */}
                    <TableCell>
                      <Badge
                        variant={product.isActive ? "default" : "secondary"}
                      >
                        {product.isActive ? "Actif" : "Inactif"}
                      </Badge>
                    </TableCell>

                    {/* Tags */}
                    <TableCell>
                      <div className="flex gap-1 flex-wrap">
                        {product.isNew && (
                          <Badge variant="outline" className="text-xs">
                            Nouveau
                          </Badge>
                        )}
                        {product.isPopular && (
                          <Badge variant="outline" className="text-xs">
                            Populaire
                          </Badge>
                        )}
                        {!product.isNew && !product.isPopular && (
                          <span className="text-muted-foreground text-xs">—</span>
                        )}
                      </div>
                    </TableCell>

                    {/* Actions */}
                    <TableCell className="text-right">
                      <Button asChild variant="ghost" size="icon">
                        <Link
                          href={`/orgs/${params.orgSlug}/produits/${product.id}`}
                        >
                          <Eye className="h-4 w-4" />
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