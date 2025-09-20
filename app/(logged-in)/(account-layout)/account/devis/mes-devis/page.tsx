import { getRequiredUser } from "@/lib/auth/auth-user";
import { combineWithParentMetadata } from "@/lib/metadata";
import { DevisList } from "../devis-list";
import { getUserDevisAction } from "../devis.actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export const generateMetadata = combineWithParentMetadata({
  title: "Mes devis",
  description: "Consultez et gérez toutes vos demandes de devis",
});

export default async function MesDevisPage() {
  const user = await getRequiredUser();
  const userDevis = await getUserDevisAction();

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-2xl font-bold">Mes devis</h1>
          <p className="text-gray-600">
            Consultez et gérez toutes vos demandes de devis
          </p>
        </div>

        <Button asChild>
          <Link href="/account/devis" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nouveau devis
          </Link>
        </Button>
      </div>

      <DevisList devisList={userDevis} />
    </div>
  );
}
