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

export default async function DevisPage() {
  const user = await getRequiredUser();

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      {/* <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Nouveau devis</h1>
        <p className="text-gray-600">
          Créez votre demande de devis personnalisée
        </p>
      </div> */}

      <div className="flex justify-end mb-4">
        <Button asChild variant="outline">
          <Link href="/account/devis/mes-devis" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Voir mes devis
          </Link>
        </Button>
      </div>
      
      <ContactForm defaultUser={user} />
    </div>
  );
}