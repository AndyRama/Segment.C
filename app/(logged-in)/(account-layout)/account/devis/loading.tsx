import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function NouveauDevisLoading() {
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center">
        <Skeleton className="h-8 w-48 mx-auto mb-2" />
        <Skeleton className="h-4 w-80 mx-auto" />
      </div>

      {/* Bouton "Voir mes devis" */}
      <div className="flex justify-end mb-4">
        <Skeleton className="h-10 w-36" />
      </div>
      
      {/* Formulaire de contact */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-56 mb-2" />
          <Skeleton className="h-4 w-96" />
        </CardHeader>
        
        <CardContent className="flex flex-col gap-4">
          {/* Sélecteur de type de client */}
          <div className="flex gap-4 mb-4">
            <Skeleton className="h-10 w-32 rounded-md" />
            <Skeleton className="h-10 w-36 rounded-md" />
          </div>

          {/* Champs du formulaire */}
          <div className="space-y-4">
            <div>
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
            
            <div>
              <Skeleton className="h-4 w-16 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
            
            <div>
              <Skeleton className="h-4 w-20 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
            
            <div>
              <Skeleton className="h-4 w-28 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>

            {/* Section informations spécifiques */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 space-y-4">
              <Skeleton className="h-5 w-72" />
              
              <div>
                <Skeleton className="h-4 w-40 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
              
              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
              
              <div>
                <Skeleton className="h-4 w-36 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
              
              <div>
                <Skeleton className="h-4 w-64 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Info RGE */}
              <div className="bg-green-50 p-3 rounded border border-green-200">
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-5/6 mb-1" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>

            {/* Description du projet */}
            <div>
              <Skeleton className="h-4 w-40 mb-2" />
              <Skeleton className="h-32 w-full" />
            </div>

            {/* Section garanties */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Skeleton className="h-5 w-40 mb-2" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-72" />
                <Skeleton className="h-4 w-68" />
                <Skeleton className="h-4 w-64" />
                <Skeleton className="h-4 w-60" />
              </div>
            </div>
          </div>
        </CardContent>

        {/* Footer avec bouton submit */}
        <div className="p-6 pt-0">
          <Skeleton className="h-12 w-full" />
        </div>
      </Card>

      {/* Texte de fin */}
      <Skeleton className="h-4 w-80 mx-auto" />
    </div>
  );
}