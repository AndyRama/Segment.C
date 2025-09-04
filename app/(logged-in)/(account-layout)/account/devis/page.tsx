import { getRequiredUser } from "@/lib/auth/auth-user";
import { combineWithParentMetadata } from "@/lib/metadata";
import { ContactForm } from "./contact-form";
import { DevisList } from "./devis-list";
import { getUserDevisAction } from "./devis.actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const generateMetadata = combineWithParentMetadata({
  title: "Devis",
  description: "Gérez vos demandes de devis - Créer et suivre vos demandes",
});

export default async function DevisPage() {
  const user = await getRequiredUser();
  const userDevis = await getUserDevisAction();

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Gestion des devis</h1>
        <p className="text-gray-600">
          Créez et suivez vos demandes de devis personnalisées
        </p>
      </div>
      
      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="create">Nouveau devis</TabsTrigger>
          <TabsTrigger value="list">
            Vos devis ({userDevis.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="create" className="mt-6">
          <ContactForm defaultUser={user} />
        </TabsContent>
        
        <TabsContent value="list" className="mt-6">
          <DevisList devisList={userDevis} />
        </TabsContent>
      </Tabs>
    </div>
  );
}