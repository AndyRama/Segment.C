import { getRequiredUser } from "@/lib/auth/auth-user";
import { combineWithParentMetadata } from "@/lib/metadata";
import { ContactForm } from "@/features/landing/formulaire";


export const generateMetadata = combineWithParentMetadata({
  title: "Devis",
  description: "Demande de devis",
});

export default async function DevisPage() {
  const user = await getRequiredUser();

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <ContactForm />
    </div>
  );
}
