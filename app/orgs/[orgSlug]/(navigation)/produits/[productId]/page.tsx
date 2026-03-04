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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const generateMetadata = combineWithParentMetadata({
  title: "Détail produit",
  description: "Gestion du produit",
});

const categoryLabel: Record<string, string> = {
  FENETRE: "Fenêtre",
  PORTE: "Porte",
  PORTE_ENTRER: "Porte d'entrée",
  PORTE_VITRAGE: "Porte vitrée",
  BAIE_VITREE: "Baie vitrée",
  PORTE_GARAGE: "Porte de garage",
  PERGOLA: "Pergola",
  VERANDA: "Véranda",
  PORTAIL: "Portail",
  VOLET: "Volet",
};

export default async function RoutePage(
  props: PageParams<{ orgSlug: string; productId: string }>
) {
  const params = await props.params;

  const product = await prisma.product.findUnique({
    where: { id: params.productId },
  });

  if (!product) notFound();

  // Server Actions
  async function updateProduct(formData: FormData) {
    "use server";
    await prisma.product.update({
      where: { id: params.productId },
      data: {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        priceRange: formData.get("priceRange") as string,
        dimensions: formData.get("dimensions") as string,
        performance: formData.get("performance") as string,
        epaisseur: formData.get("epaisseur") as string,
        isActive: formData.get("isActive") === "true",
        isNew: formData.get("isNew") === "true",
        isPopular: formData.get("isPopular") === "true",
      },
    });
    revalidatePath(`/orgs/${params.orgSlug}/produits/${params.productId}`);
  }

  async function deleteProduct() {
    "use server";
    await prisma.product.delete({ where: { id: params.productId } });
    redirect(`/orgs/${params.orgSlug}/produits`);
  }

  return (
    <Layout size="lg">
      <LayoutHeader>
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="icon">
            <Link href={`/orgs/${params.orgSlug}/produits`}>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <LayoutTitle>{product.name}</LayoutTitle>
        </div>
      </LayoutHeader>

      <LayoutActions className="flex gap-2">
        {/* Sauvegarder vert (submit du form édition via form attribute) */}
        <Button
            type="submit"
            form="edit-product-form"
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
            size="sm"
        >
            Sauvegarder
        </Button>

        {/* Supprimer */}
        <form action={deleteProduct}>
            <Button type="submit" variant="destructive" size="sm">
            Supprimer
            </Button>
        </form>
        </LayoutActions>

      <LayoutContent className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Image + Infos rapides */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Aperçu</CardTitle>
              <CardDescription>
                {categoryLabel[product.category] ?? product.category}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {product.image && (
                <img
                  src={`/${product.image.replace(/^\//, "")}`}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md bg-muted"
                  onError={undefined}
                />
              )}
              <div className="flex flex-wrap gap-2">
                <Badge variant={product.isActive ? "default" : "secondary"}>
                  {product.isActive ? "Actif" : "Inactif"}
                </Badge>
                {product.isNew && <Badge variant="outline">Nouveau</Badge>}
                {product.isPopular && (
                  <Badge variant="outline">Populaire</Badge>
                )}
              </div>
              <Row label="Vendeur" value={product.seller ?? "—"} />
              <Row
                label="Matériau"
                value={product.material.replace(/_/g, " ")}
              />
              <Row label="Note" value={`⭐ ${product.rating.toFixed(1)}`} />
              <Row
                label="Uw / Performance"
                value={product.uw ?? product.performance ?? "—"}
              />
              {product.vitrage && (
                <Row label="Vitrage" value={product.vitrage} />
              )}
              {product.ouverture && (
                <Row
                  label="Ouverture"
                  value={product.ouverture.replace(/_/g, " ")}
                />
              )}
            </CardContent>
          </Card>

          {/* Caractéristiques techniques */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Technique</CardTitle>
              <CardDescription>Dimensions & performances</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Row label="Dimensions" value={product.dimensions ?? "—"} />
              <Row label="Épaisseur" value={product.epaisseur ?? "—"} />
              <Row label="Performance" value={product.performance ?? "—"} />
              <Row label="Prix" value={product.priceRange} />
              <div className="flex flex-col gap-1 pt-2">
                <span className="text-xs text-muted-foreground">Description</span>
                <p className="text-sm leading-relaxed">{product.description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Couleurs & Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Options</CardTitle>
              <CardDescription>Couleurs et caractéristiques</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground">
                  Couleurs disponibles
                </span>
                <div className="flex flex-wrap gap-1">
                  {product.colors.length > 0 ? (
                    product.colors.map((color) => (
                      <Badge key={color} variant="outline" className="text-xs">
                        {color}
                      </Badge>
                    ))
                  ) : (
                    <span className="text-muted-foreground text-sm">—</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground">
                  Caractéristiques
                </span>
                <ul className="flex flex-col gap-1">
                  {product.features.length > 0 ? (
                    product.features.map((f) => (
                      <li key={f} className="text-sm flex items-start gap-2">
                        <span className="text-muted-foreground mt-0.5">•</span>
                        {f}
                      </li>
                    ))
                  ) : (
                    <span className="text-muted-foreground text-sm">—</span>
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Formulaire d'édition */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Modifier le produit</CardTitle>
            <CardDescription>
              Mettez à jour les informations modifiables
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="edit-product-form" action={updateProduct} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Nom */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input id="name" name="name" defaultValue={product.name} />
                </div>

                {/* Prix */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="priceRange">Fourchette de prix</Label>
                  <Input
                    id="priceRange"
                    name="priceRange"
                    defaultValue={product.priceRange}
                  />
                </div>

                {/* Dimensions */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="dimensions">Dimensions</Label>
                  <Input
                    id="dimensions"
                    name="dimensions"
                    defaultValue={product.dimensions ?? ""}
                  />
                </div>

                {/* Épaisseur */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="epaisseur">Épaisseur</Label>
                  <Input
                    id="epaisseur"
                    name="epaisseur"
                    defaultValue={product.epaisseur ?? ""}
                  />
                </div>

                {/* Performance */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="performance">Performance thermique</Label>
                  <Input
                    id="performance"
                    name="performance"
                    defaultValue={product.performance ?? ""}
                  />
                </div>

                {/* Statut */}
                <div className="flex flex-col gap-2">
                  <Label>Statut</Label>
                  <Select name="isActive" defaultValue={String(product.isActive)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">Actif</SelectItem>
                      <SelectItem value="false">Inactif</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* isNew */}
                <div className="flex flex-col gap-2">
                  <Label>Nouveau</Label>
                  <Select name="isNew" defaultValue={String(product.isNew)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">Oui</SelectItem>
                      <SelectItem value="false">Non</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* isPopular */}
                <div className="flex flex-col gap-2">
                  <Label>Populaire</Label>
                  <Select
                    name="isPopular"
                    defaultValue={String(product.isPopular)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">Oui</SelectItem>
                      <SelectItem value="false">Non</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  defaultValue={product.description}
                  rows={4}
                />
              </div>
            </form>
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-2">
      <span className="text-xs text-muted-foreground shrink-0">{label}</span>
      <span className="text-sm text-right">{value}</span>
    </div>
  );
}
