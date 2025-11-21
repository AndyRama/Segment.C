import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Layout } from "@/features/page/layout";
import { getUsersOrgs } from "@/query/org/get-users-orgs.query";
import { Home } from "lucide-react";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { AccountSidebar } from "./account-sidebar";

export async function AccountNavigation({ children }: PropsWithChildren) {
  const userOrganizations = await getUsersOrgs();
  
  return (
    <SidebarProvider>
      <AccountSidebar userOrgs={userOrganizations} />
      <SidebarInset className="border-accent border">
        <header className="flex h-16 shrink-0 items-center gap-2">
          <Layout size="lg">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Button asChild variant="outline" size="sm">
                <Link href="/home" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                   Accueil
                </Link>
              </Button>
            </div>
          </Layout>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}