import { combineWithParentMetadata } from "@/lib/metadata";

export const generateMetadata = combineWithParentMetadata({
  title: "Prise de rendez-vous",
  description: "Créer et suiver vos demandes de travaux",
});

export default async function CommandesPage() {

  return (
    <>
      <div className="mx-auto">
        <h2>Commande</h2>
      </div>
    </>
  );
}
