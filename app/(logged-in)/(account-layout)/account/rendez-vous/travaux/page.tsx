// import { getRequiredUser } from "@/lib/auth/auth-user";
import { combineWithParentMetadata } from "@/lib/metadata";

export const generateMetadata = combineWithParentMetadata({
  title: "Prise de rendez-vous",
  description: "Créer et suiver vos demandes de travaux",
});

export default async function TravauxPage() {
  // const user = await getRequiredUser();

  return (
    <>
      <div className="mx-auto">
        <h2>test page rdv travaux</h2>
      </div>
    </>
  );
}
