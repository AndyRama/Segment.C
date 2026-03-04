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
import { Eye, Plus, Star, Sparkles, TrendingUp } from "lucide-react";
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

// Couleurs par matériau — inspirées du design public
const materialStyles: Record<string, { bg: string; text: string; label: string }> = {
  ALUMINIUM:     { bg: "bg-sky-100",     text: "text-sky-700",     label: "Aluminium" },
  PVC:           { bg: "bg-violet-100",  text: "text-violet-700",  label: "PVC" },
  BOIS:          { bg: "bg-amber-100",   text: "text-amber-700",   label: "Bois" },
  ACIER:         { bg: "bg-slate-100",   text: "text-slate-700",   label: "Acier" },
  MIXTE:         { bg: "bg-emerald-100", text: "text-emerald-700", label: "Mixte" },
  BOIS_ALUMINIUM:{ bg: "bg-teal-100",    text: "text-teal-700",    label: "Bois / Alu" },
};

// Couleurs par fournisseur
const sellerStyles: Record<string, { bg: string; text: string; dot: string }> = {
  SWAO:    { bg: "bg-orange-50",  text: "text-orange-600",  dot: "bg-orange-400" },
  SYBAIE:  { bg: "bg-green-50",   text: "text-green-700",   dot: "bg-green-500" },
  C2R:     { bg: "bg-blue-50",    text: "text-blue-700",    dot: "bg-blue-500" },
  PROFERM: { bg: "bg-rose-50",    text: "text-rose-700",    dot: "bg-rose-400" },
  AUTRE:   { bg: "bg-gray-50",    text: "text-gray-600",    dot: "bg-gray-400" },
};

const categoryFilterTabs = [
  { label: "Tous", value: "" },
  { label: "Fenêtres", value: "FENETRE" },
  { label: "Portes", value: "PORTE" },
  { label: "Baies vitrées", value: "BAIE_VITREE" },
];

const sellerFilterTabs = [
  { label: "Tous les fournisseurs", value: "" },
  { label: "SWAO", value: "SWAO" },
  { label: "SYBAIE", value: "SYBAIE" },
  { label: "C2R", value: "C2R" },
  { label: "PROFERM", value: "PROFERM" },
];

export default async function RoutePage(
  props: PageParams<{ orgSlug: string }>
) {
  const params = await props.params;
  const searchParams = await (props as any).searchParams;
  const categoryFilter = searchParams?.category as string | undefined;
  const sellerFilter = searchParams?.seller as string | undefined;

  let whereCategories: ProductCategory[] = ALLOWED_CATEGORIES;
  if (categoryFilter === "PORTE") {
    whereCategories = ["PORTE", "PORTE_ENTRER", "PORTE_VITRAGE", "PORTE_GARAGE"];
  } else if (categoryFilter === "FENETRE") {
    whereCategories = ["FENETRE"];
  } else if (categoryFilter === "BAIE_VITREE") {
    whereCategories = ["BAIE_VITREE"];
  }

  const products = await prisma.product.findMany({
    where: {
      category: { in: whereCategories },
      ...(sellerFilter ? { seller: sellerFilter as any } : {}),
    },
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

  // Helper pour construire les liens avec les deux filtres
  const buildHref = (cat?: string, seller?: string) => {
    const params_str = new URLSearchParams();
    if (cat) params_str.set("category", cat);
    if (seller) params_str.set("seller", seller);
    const qs = params_str.toString();
    return `/orgs/${params.orgSlug}/produits${qs ? `?${qs}` : ""}`;
  };

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

        {/* Filtres catégorie */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 flex-wrap">
            {categoryFilterTabs.map((tab) => {
              const active = (categoryFilter ?? "") === tab.value;
              return (
                <Link
                  key={tab.value}
                  href={buildHref(tab.value || undefined, sellerFilter)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    active
                      ? "bg-foreground text-background border-foreground shadow-sm"
                      : "bg-background text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>

          {/* Filtres fournisseur */}
          <div className="flex gap-2 flex-wrap">
            {sellerFilterTabs.map((tab) => {
              const active = (sellerFilter ?? "") === tab.value;
              const style = tab.value ? sellerStyles[tab.value] : null;
              return (
                <Link
                  key={tab.value}
                  href={buildHref(categoryFilter, tab.value || undefined)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-all flex items-center gap-1.5 ${
                    active
                      ? style
                        ? `${style.bg} ${style.text} border-current`
                        : "bg-foreground text-background border-foreground"
                      : "bg-background text-muted-foreground border-border hover:border-current"
                  }`}
                >
                  {style && (
                    <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                  )}
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Compteur */}
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{products.length}</span>{" "}
          produit{products.length > 1 ? "s" : ""}
          {sellerFilter && (
            <span className="ml-1">
              — fournisseur{" "}
              <span className="font-medium">{sellerFilter}</span>
            </span>
          )}
        </p>

        {/* Tableau */}
        <div className="rounded-xl border bg-card overflow-hidden shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40 hover:bg-muted/40">
                <TableHead className="font-semibold text-foreground">Nom</TableHead>
                <TableHead className="font-semibold text-foreground">Catégorie</TableHead>
                <TableHead className="font-semibold text-foreground">Matériau</TableHead>
                <TableHead className="font-semibold text-foreground">Fournisseur</TableHead>
                <TableHead className="font-semibold text-foreground">Prix</TableHead>
                <TableHead className="font-semibold text-foreground">Note</TableHead>
                <TableHead className="font-semibold text-foreground">Statut</TableHead>
                <TableHead className="font-semibold text-foreground">Tags</TableHead>
                <TableHead className="text-right font-semibold text-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={9}
                    className="text-center text-muted-foreground py-16"
                  >
                    Aucun produit trouvé.
                  </TableCell>
                </TableRow>
              ) : (
                products.map((product) => {
                  const mat = materialStyles[product.material];
                  const sel = product.seller ? sellerStyles[product.seller] : null;
                  const ratingColor =
                    product.rating >= 4.8
                      ? "text-emerald-600"
                      : product.rating >= 4.5
                      ? "text-amber-500"
                      : "text-muted-foreground";

                  return (
                    <TableRow
                      key={product.id}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      {/* Nom */}
                      <TableCell className="font-medium max-w-[180px]">
                        <span className="truncate block">{product.name}</span>
                      </TableCell>

                      {/* Catégorie */}
                      <TableCell className="text-sm text-muted-foreground">
                        {categoryLabel[product.category] ?? product.category}
                      </TableCell>

                      {/* Matériau */}
                      <TableCell>
                        {mat ? (
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${mat.bg} ${mat.text}`}
                          >
                            {mat.label}
                          </span>
                        ) : (
                          <span className="text-muted-foreground text-xs">
                            {product.material}
                          </span>
                        )}
                      </TableCell>

                      {/* Fournisseur */}
                      <TableCell>
                        {sel && product.seller ? (
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${sel.bg} ${sel.text}`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${sel.dot}`} />
                            {product.seller}
                          </span>
                        ) : (
                          <span className="text-muted-foreground text-xs">—</span>
                        )}
                      </TableCell>

                      {/* Prix */}
                      <TableCell className="text-sm font-medium max-w-[110px]">
                        <span className="truncate block">{product.priceRange}</span>
                      </TableCell>

                      {/* Note */}
                      <TableCell>
                        <span className={`flex items-center gap-1 text-sm font-semibold ${ratingColor}`}>
                          <Star className="h-3.5 w-3.5 fill-current" />
                          {product.rating.toFixed(1)}
                        </span>
                      </TableCell>

                      {/* Statut */}
                      <TableCell>
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            product.isActive
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-gray-100 text-gray-500 border border-gray-200"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              product.isActive ? "bg-emerald-500" : "bg-gray-400"
                            }`}
                          />
                          {product.isActive ? "Actif" : "Inactif"}
                        </span>
                      </TableCell>

                      {/* Tags */}
                      <TableCell>
                        <div className="flex gap-1 flex-wrap">
                          {product.isNew && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200">
                              <Sparkles className="h-3 w-3" />
                              Nouveau
                            </span>
                          )}
                          {product.isPopular && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-600 border border-orange-200">
                              <TrendingUp className="h-3 w-3" />
                              Populaire
                            </span>
                          )}
                          {!product.isNew && !product.isPopular && (
                            <span className="text-muted-foreground text-xs">—</span>
                          )}
                        </div>
                      </TableCell>

                      {/* Actions */}
                      <TableCell className="text-right">
                        <Button asChild variant="ghost" size="icon" className="hover:bg-sky-50 hover:text-sky-600">
                          <Link href={`/orgs/${params.orgSlug}/produits/${product.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </LayoutContent>
    </Layout>
  );
}