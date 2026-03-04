import { Button } from "@/components/ui/button";
import {
  Layout,
  LayoutActions,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import { hasPermission } from "@/lib/auth/auth-org";
import { combineWithParentMetadata } from "@/lib/metadata";
import { serverToast } from "@/lib/server-toast";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { prisma } from "@/lib/prisma";
import { Settings } from "lucide-react";
import Link from "next/link";

export const generateMetadata = combineWithParentMetadata({
  title: "Users",
  description: "Manage users",
});

const statusDevisColor: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  nouveau: "default",
  en_cours: "outline",
  traite: "secondary",
  refuse: "destructive",
};

const statusDevisLabel: Record<string, string> = {
  nouveau: "Nouveau",
  en_cours: "En cours",
  traite: "Traité",
  refuse: "Refusé",
};

export default async function RoutePage(props: PageParams<{ orgSlug: string }>) {
  const params = await props.params;

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      members: {
        include: { organization: true },
      },
      devis: {
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          status: true,
          nomComplet: true,
          createdAt: true,
        },
      },
    },
  });

  return (
    <Layout size="lg">
      <LayoutHeader>
        <LayoutTitle>Users</LayoutTitle>
      </LayoutHeader>
      <LayoutActions className="flex gap-2">
        {(await hasPermission({ users: ["delete"] })) && (
          <Button variant="outline">Delete</Button>
        )}
        {(await hasPermission({ users: ["create"] })) && (
          <form>
            <Button
              formAction={async () => {
                "use server";
                await serverToast("Important information", "error");
              }}
              variant="default"
            >
              Create
            </Button>
          </form>
        )}
      </LayoutActions>
      <LayoutContent className="flex flex-col gap-4 lg:gap-6">
        <p className="text-sm text-muted-foreground">
          {users.length} utilisateur{users.length > 1 ? "s" : ""} au total
        </p>

        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Utilisateur</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Organisation</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead>Email vérifié</TableHead>
                <TableHead>Devis</TableHead>
                <TableHead>Dernier devis</TableHead>
                <TableHead>Créé le</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={9}
                    className="text-center text-muted-foreground py-10"
                  >
                    Aucun utilisateur trouvé.
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => {
                  const firstMember = user.members[0];
                  const totalDevis = user.devis.length;
                  const lastDevis = user.devis[0];

                  return (
                    <TableRow key={user.id}>
                      {/* Avatar + Nom */}
                      <TableCell className="flex items-center gap-3 font-medium">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.image ?? undefined} />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()
                              .slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        {user.name}
                      </TableCell>

                      {/* Email */}
                      <TableCell className="text-muted-foreground">
                        {user.email}
                      </TableCell>

                      {/* Organisation */}
                      <TableCell>
                        {firstMember?.organization.name ?? (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </TableCell>

                      {/* Rôle */}
                      <TableCell>
                        {firstMember?.role ? (
                          <Badge variant="outline" className="capitalize">
                            {firstMember.role}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </TableCell>

                      {/* Email vérifié */}
                      <TableCell>
                        <Badge variant={user.emailVerified ? "default" : "secondary"}>
                          {user.emailVerified ? "Vérifié" : "En attente"}
                        </Badge>
                      </TableCell>

                      {/* Nombre de devis */}
                      <TableCell>
                        {totalDevis > 0 ? (
                          <span className="font-medium">{totalDevis}</span>
                        ) : (
                          <span className="text-muted-foreground">0</span>
                        )}
                      </TableCell>

                      {/* Statut du dernier devis */}
                      <TableCell>
                        {lastDevis ? (
                          <div className="flex flex-col gap-1">
                            <Badge variant={statusDevisColor[lastDevis.status] ?? "outline"}>
                              {statusDevisLabel[lastDevis.status] ?? lastDevis.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {new Date(lastDevis.createdAt).toLocaleDateString("fr-FR")}
                            </span>
                          </div>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </TableCell>

                      {/* Date création user */}
                      <TableCell className="text-muted-foreground">
                        {new Date(user.createdAt).toLocaleDateString("fr-FR")}
                      </TableCell>

                      {/* Actions */}
                      <TableCell className="text-right">
                        <Button asChild variant="ghost" size="icon">
                          <Link
                            href={`/orgs/${params.orgSlug}/devis?userId=${user.id}`}
                            title="Voir les devis"
                          >
                            <Settings className="h-4 w-4" />
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