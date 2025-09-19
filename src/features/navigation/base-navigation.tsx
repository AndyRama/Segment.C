import Image from "next/image";
import { motion, useTransform } from "framer-motion";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SidebarMenuButtonLink } from "@/components/ui/sidebar-utils";
import { Layout } from "@/features/page/layout";
import { SiteConfig } from "@/site-config";
import { Building2, Home, User } from "lucide-react";
import type { PropsWithChildren } from "react";
import { SidebarUserButton } from "../sidebar/sidebar-user-button";

export function BaseNavigation({ children }: PropsWithChildren) {
  return (
    <SidebarProvider id="app-sidebar">
      <BaseSidebar />
      <SidebarInset className="border-accent border">
        <header className="flex h-16 shrink-0 items-center gap-2">
          <Layout size="lg">
            <SidebarTrigger className="-ml-1" />
          </Layout>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

const BaseSidebar = () => {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <div className="mb-4 flex flex-row items-center gap-2">
          <Image
            src={SiteConfig.appIcon}
            alt="logo enterprise Segment.C"
            width={32}
            height={32}
          />
          <motion.div
            style={{
              scale: useTransform(
                scrollYBoundedProgressDelayed,
                [0, 1],
                [1, 0.9],
              ),
            }}
            className="flex origin-left items-center"
          >
            <Link href="/" className="text-base font-bold text-green-500">
              {SiteConfig.title}
            </Link>
          </motion.div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButtonLink href="/orgs">
              <Building2 />
              <span>Organization</span>
            </SidebarMenuButtonLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButtonLink href="/home">
              <Home />
              <span>Home</span>
            </SidebarMenuButtonLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButtonLink href="/account">
              <User />
              <span>Account</span>
            </SidebarMenuButtonLink>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="flex flex-col gap-2">
        <SidebarUserButton />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
