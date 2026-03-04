import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { revalidatePath } from "next/cache";

export const generateMetadata = combineWithParentMetadata({
  title: "Détail du devis",
  description: "Détail du devis client",
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

export default async function RoutePage(
  props: PageParams<{ orgSlug: string; devisId: string }>
) {
  const params = await props.params;

  const devis = await prisma.devis.findUnique({
    where: { id: params.devisId },
    include: {
      user: {
        select: { id: true, name: true, email: true, image: true },
      },
      products: {
        include: {
          product: {
            select: {
              id: true,
              name: true,
              category: true,
              material: true,
              image: true,
              priceRange: true,
            },
          },
        },
      },
    },
  });

  if (!devis) notFound();

  // Server actions
  async function updateStatus(formData: FormData) {
    "use server";
    const status = formData.get("status") as string;
    await prisma.devis.update({
      where: { id: params.devisId },
      data: { status },
    });
    revalidatePath(`/orgs/${params.orgSlug}/users/devis/${params.devisId}`);
  }

  async function deleteDevis() {
    "use server";
    await prisma.devis.delete({ where: { id: params.devisId } });
    redirect(`/orgs/${params.orgSlug}/users/devis`);
  }

  return (
    <Layout size="lg">
      <LayoutHeader>
        <LayoutTitle>Devis #{devis.id.slice(-8).toUpperCase()}</LayoutTitle>
      </LayoutHeader>
      <LayoutActions className="flex gap-2">
        {/* Changer le statut */}
        <form action={updateStatus} className="flex gap-2 items-center">
          <Select name="status" defaultValue={devis.status}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nouveau">Nouveau</SelectItem>
              <SelectItem value="en_cours">En cours</SelectItem>
              <SelectItem value="traite">Traité</SelectItem>
              <SelectItem value="refuse">Refusé</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" variant="outline" size="sm">
            Sauvegarder
          </Button>
        </form>

        {/* Supprimer */}
        <form action={deleteDevis}>
          <Button type="submit" variant="destructive" size="sm">
            Supprimer
          </Button>
        </form>
      </LayoutActions>

      <LayoutContent className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Infos client */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Client</CardTitle>
              <CardDescription>Informations du demandeur</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {devis.user && (
                <div className="flex items-center gap-3 pb-3 border-b">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={devis.user.image ?? undefined} />
                    <AvatarFallback>
                      {devis.user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{devis.user.name}</p>
                    <p className="text-xs text-muted-foreground">{devis.user.email}</p>
                  </div>
                </div>
              )}
              <Row label="Nom complet" value={devis.nomComplet} />
              <Row label="Email" value={devis.email} />
              <Row label="Téléphone" value={devis.telephone ?? "—"} />
              <Row label="Type" value={
                <Badge variant="outline" className="capitalize">{devis.clientType}</Badge>
              } />
              {devis.clientType === "professionnel" && (
                <>
                  <Row label="Entreprise" value={devis.nomEntreprise ?? "—"} />
                  <Row label="Fonction" value={devis.fonction ?? "—"} />
                  <Row label="Secteur" value={devis.secteurActivite ?? "—"} />
                  <Row label="Taille" value={devis.tailleEntreprise ?? "—"} />
                </>
              )}
            </CardContent>
          </Card>

          {/* Détails du projet */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Projet</CardTitle>
              <CardDescription>Description et caractéristiques</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Row label="Statut" value={
                <Badge variant={statusColor[devis.status] ?? "outline"}>
                  {statusLabel[devis.status] ?? devis.status}
                </Badge>
              } />
              <Row label="Type de projet" value={devis.typeProjet ?? "—"} />
              <Row label="Nature travaux" value={devis.natureTravaux ?? "—"} />
              <Row label="Type construction" value={devis.typeConstruction ?? "—"} />
              <Row label="Type bâtiment" value={devis.typeBatiment ?? "—"} />
              <Row label="Besoins RGE" value={devis.besoinsRGE ?? "—"} />
              <div className="flex flex-col gap-1 pt-1">
                <span className="text-xs text-muted-foreground">Description</span>
                <p className="text-sm">{devis.descriptionProjet}</p>
              </div>
            </CardContent>
          </Card>

          {/* Métadonnées */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Métadonnées</CardTitle>
              <CardDescription>Informations système</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Row label="ID" value={<code className="text-xs">{devis.id}</code>} />
              <Row label="Créé le" value={new Date(devis.createdAt).toLocaleDateString("fr-FR", {
                day: "2-digit", month: "long", year: "numeric",
              })} />
              <Row label="Mis à jour le" value={new Date(devis.updatedAt).toLocaleDateString("fr-FR", {
                day: "2-digit", month: "long", year: "numeric",
              })} />
            </CardContent>
          </Card>
        </div>

        {/* Produits associés */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              Produits associés
              <Badge variant="secondary" className="ml-2">{devis.products.length}</Badge>
            </CardTitle>
            <CardDescription>Produits sélectionnés dans ce devis</CardDescription>
          </CardHeader>
          <CardContent>
            {devis.products.length === 0 ? (
              <p className="text-sm text-muted-foreground">Aucun produit associé.</p>
            ) : (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {devis.products.map((dp) => (
                  <div
                    key={dp.id}
                    className="flex items-center gap-3 rounded-lg border p-3"
                  >
                    {dp.product.image && (
                      <img
                        src={dp.product.image}
                        alt={dp.product.name}
                        className="h-12 w-12 rounded object-cover"
                      />
                    )}
                    <div className="flex flex-col gap-1 min-w-0">
                      <p className="text-sm font-medium truncate">{dp.product.name}</p>
                      <p className="text-xs text-muted-foreground capitalize">
                        {dp.product.category.toLowerCase().replace(/_/g, " ")}
                        {" · "}
                        {dp.product.material.toLowerCase()}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Qté : {dp.quantity} · {dp.product.priceRange}
                      </p>
                      {dp.notes && (
                        <p className="text-xs italic text-muted-foreground">{dp.notes}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}

// Composant helper pour afficher une ligne label/valeur
function Row({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-2">
      <span className="text-xs text-muted-foreground shrink-0">{label}</span>
      <span className="text-sm text-right">{value}</span>
    </div>
  );
}
