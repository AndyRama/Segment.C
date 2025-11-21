import { combineWithParentMetadata } from "@/lib/metadata";

export const generateMetadata = combineWithParentMetadata({
  title: "Prise de rendez-vous",
  description: "Créer et suiver vos demandes de travaux",
});

export default async function MetragePage() {
  return (
    <>
      <div className="mx-auto">
        <h2>test page rdv metrage ou upload Photo</h2>
      </div>
    </>
  );
}
