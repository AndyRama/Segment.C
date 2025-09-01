import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PropsWithChildren } from "react";
import { Typography } from "../../components/nowts/typography";
import { ContactSupportDialog } from "../contact/support/contact-support-dialog";

type Error401Props = PropsWithChildren<{
  title?: string;
}>;

export function Error401(props: Error401Props) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col">
        <Typography variant="code">401</Typography>
        <CardTitle>{props.title ?? "Non autorisé"}</CardTitle>
        <CardDescription>
          Vous n'avez pas l'autorisation d'accéder à cette ressource. Veuillez vous connecter ou
          contacter votre administrateur si vous pensez qu'il s'agit d'une erreur.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-row gap-2">
        <ContactSupportDialog />
      </CardFooter>
    </Card>
  );
}