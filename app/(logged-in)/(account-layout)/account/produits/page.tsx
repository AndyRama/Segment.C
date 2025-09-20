import CardGrid from "@/features/landing/card-grid";
import { getRequiredUser } from "@/lib/auth/auth-user";
import { combineWithParentMetadata } from "@/lib/metadata";

export const generateMetadata = combineWithParentMetadata({
  title: "Produits",
  description: "Commander un produit - Créer et suiver vos demandes",
});

export default async function DevisPage() {
  const user = await getRequiredUser();

  return (
    <>
      <div className="mx-auto flex flex-col gap-6">
        <CardGrid initialVisibleCount={8} />
      </div>
    </>
  );
}
