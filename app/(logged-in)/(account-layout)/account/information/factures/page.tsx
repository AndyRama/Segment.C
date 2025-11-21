import { combineWithParentMetadata } from "@/lib/metadata";

export const generateMetadata = combineWithParentMetadata({
  title: "Prise de rendez-vous",
  description: "Créer et suiver vos demandes de travaux",
});

export default async function FacturesPage() {

  return (
    <>
      <div className="mx-auto">
        <h2>Factures</h2>
      </div>
    </>
  );
}
