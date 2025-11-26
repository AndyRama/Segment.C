import { combineWithParentMetadata } from "@/lib/metadata";

export const generateMetadata = combineWithParentMetadata({
  title: "Page suivi de travaux",
  description: "Créer et suiver vos demandes de travaux",
});

export default async function TravauxPage() {

  return (
    <>
      <div className="mx-auto">
        <h2>Page suivi des travaux travaux</h2>
      </div>
    </>
  );
}
