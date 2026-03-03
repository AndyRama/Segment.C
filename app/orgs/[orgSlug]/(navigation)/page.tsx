import { buttonVariants } from "@/components/ui/button";
import {
  Layout,
  LayoutActions,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
// import { hasPermission } from "@/lib/auth/auth-org";
import type { PageParams } from "@/types/next";
import Link from "next/link";
import InformationCards from "./information-cards";
// import { SubscribersChart } from "./subscribers-charts";

export default async function RoutePage(
  props: PageParams<{
    orgSlug: string;
  }>,
) {
  const params = await props.params;

  return (
    <Layout size="lg">
      <LayoutHeader>
        <LayoutTitle>Dashboard</LayoutTitle>
      </LayoutHeader>
      <LayoutActions>

        <Link 
          href="https://docs.google.com/spreadsheets/d/1jUHgkaWQPNGZ87FPYpu56Js5__9jEphcNMpWxgYTjmc/edit?usp=sharing"
          target="_blank"
          className={buttonVariants({ variant: "outline" })}
        >
          Planning Articles 2026
        </Link>  
      </LayoutActions>
      <LayoutContent className="flex flex-col gap-4 lg:gap-8">
        <InformationCards />
        {/* <SubscribersChart /> */}
      </LayoutContent>
    </Layout>
  );
}
