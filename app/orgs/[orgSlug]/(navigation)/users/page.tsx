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

export const generateMetadata = combineWithParentMetadata({
  title: "Users",
  description: "Manage users",
});

export default async function RoutePage(props: PageParams) {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      members: {
        include: { organization: true },
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
        {/* Compteur */}
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
                <TableHead>Créé le</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center text-muted-foreground py-10"
                  >
                    Aucun utilisateur trouvé.
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => {
                  // Un user peut être membre de plusieurs orgs — on prend la première
                  const firstMember = user.members[0];

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

                      {/* Rôle dans l'org */}
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
                        <Badge
                          variant={
                            user.emailVerified ? "default" : "secondary"
                          }
                        >
                          {user.emailVerified ? "Vérifié" : "En attente"}
                        </Badge>
                      </TableCell>

                      {/* Date création */}
                      <TableCell className="text-muted-foreground">
                        {new Date(user.createdAt).toLocaleDateString("fr-FR")}
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