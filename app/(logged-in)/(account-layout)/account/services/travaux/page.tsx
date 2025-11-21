import { combineWithParentMetadata } from "@/lib/metadata";

export const generateMetadata = combineWithParentMetadata({
  title: "Prise de rendez-vous",
  description: "Créer et suiver vos demandes de travaux",
});

export default async function TravauxPage() {

  return (
    <>
      <div className="mx-auto">
        <h2>test page rdv travaux</h2>
      </div>
    </>
  );
}
