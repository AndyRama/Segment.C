import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { Typography } from "../../components/nowts/typography";
import { ContactSupportDialog } from "../contact/support/contact-support-dialog";

type Page400Props = PropsWithChildren<{
  title?: string;
}>;

export function Error400(props: Page400Props) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col">
        <Typography variant="code">400</Typography>
        <CardTitle>{props.title ?? "Requête incorrecte"}</CardTitle>
        <CardDescription>
          Il semble que nous rencontrons quelques difficultés techniques. Pas d'inquiétude,
          notre équipe y travaille. En attendant, essayez de rafraîchir la page ou
          de nous rendre visite un peu plus tard.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-row gap-2">
        <Link href="/" className={buttonVariants({ variant: "invert" })}>
          Retourner à l'accueil
        </Link>
        <ContactSupportDialog />
      </CardFooter>
    </Card>
  );
}