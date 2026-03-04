import { getRequiredUser } from "@/lib/auth/auth-user";
import { combineWithParentMetadata } from "@/lib/metadata";
import { ContactForm } from "./contact-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText } from "lucide-react";

export const generateMetadata = combineWithParentMetadata({
  title: "Nouveau devis",
  description: "Créez votre demande de devis personnalisée",
});

export default async function NewDevisPage() {
  const user = await getRequiredUser();

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <div className="flex justify-end">
        <Button asChild variant="outline">
          <Link href="/account/devis" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Voir mes devis
          </Link>
        </Button>
      </div>

      <ContactForm defaultUser={user} />
    </div>
  );
}