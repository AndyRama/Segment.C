"use client";

import { Typography } from "@/components/nowts/typography";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2, Eye, Calendar } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";
import { deleteDevisAction } from "./devis.actions";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

type Devis = {
  id: string;
  clientType: string;
  nomComplet: string;
  nomEntreprise: string | null;
  email: string;
  status: string;
  createdAt: Date;
  descriptionProjet: string;
};

type DevisListProps = {
  devisList: Devis[];
};

const getStatusBadge = (status: string) => {
  const statusConfig = {
    nouveau: { label: "Nouveau", variant: "default" as const, color: "bg-blue-100 text-blue-800" },
    en_cours: { label: "En cours", variant: "secondary" as const, color: "bg-yellow-100 text-yellow-800" },
    traite: { label: "Traité", variant: "default" as const, color: "bg-green-100 text-green-800" },
    refuse: { label: "Refusé", variant: "destructive" as const, color: "bg-red-100 text-red-800" },
  };
  
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.nouveau;
  
  return (
    <Badge className={config.color}>
      {config.label}
    </Badge>
  );
};

const getClientTypeBadge = (clientType: string) => {
  return (
    <Badge variant="outline">
      {clientType === "particulier" ? "👤 Particulier" : "🏢 Professionnel"}
    </Badge>
  );
};

export const DevisList = ({ devisList }: DevisListProps) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = (devisId: string) => {
    startTransition(async () => {
      const result = await deleteDevisAction(devisId);
      
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  if (devisList.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="text-6xl mb-4">📋</div>
          <Typography className="text-xl font-semibold mb-2">
            Aucune demande de devis
          </Typography>
          <Typography className="text-muted-foreground text-center max-w-md">
            Vous n'avez pas encore fait de demande de devis. 
            Créez votre première demande pour recevoir un devis personnalisé !
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Typography className="text-lg font-semibold">
          Vos demandes de devis ({devisList.length})
        </Typography>
      </div>
      
      <div className="grid gap-4">
        {devisList.map((devis) => (
          <Card key={devis.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-lg">
                    {devis.nomEntreprise ?? devis.nomComplet}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    {getClientTypeBadge(devis.clientType)}
                    {getStatusBadge(devis.status)}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0"
                    title="Voir les détails"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                        disabled={isPending}
                        title="Supprimer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Supprimer la demande de devis</AlertDialogTitle>
                        <AlertDialogDescription>
                          Êtes-vous sûr de vouloir supprimer cette demande de devis ? 
                          Cette action est irréversible.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(devis.id)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Supprimer
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    Créé le {format(new Date(devis.createdAt), "d MMMM yyyy 'à' HH:mm", { 
                      locale: fr 
                    })}
                  </span>
                </div>
                
                <div>
                  <Typography className="text-sm font-medium mb-1">
                    Email de contact :
                  </Typography>
                  <Typography className="text-sm text-muted-foreground">
                    {devis.email}
                  </Typography>
                </div>
                
                <div>
                  <Typography className="text-sm font-medium mb-1">
                    Description du projet :
                  </Typography>
                  <Typography className="text-sm text-muted-foreground line-clamp-3">
                    {devis.descriptionProjet}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};