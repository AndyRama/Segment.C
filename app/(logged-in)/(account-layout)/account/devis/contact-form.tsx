"use client";

import { Typography } from "@/components/nowts/typography";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LoadingButton } from "@/features/form/submit-button";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import type { User } from "better-auth";
import type { DevisFormType } from "./devis.schema";
import { DevisFormSchema } from "./devis.schema";
import { createDevisAction } from "./devis.actions";

type ContactFormProps = {
  defaultUser: User;
};

export const ContactForm = ({ defaultUser }: ContactFormProps) => {
  const [clientType, setClientType] = useState<"particulier" | "professionnel">("particulier");
  const [isPending, startTransition] = useTransition();

  const form = useZodForm({
    schema: DevisFormSchema,
    defaultValues: {
      clientType: "particulier",
      nomComplet: defaultUser.name || "",
      email: defaultUser.email,
      telephone: "",
      descriptionProjet: "",
      typeProjet: "",
      typeConstruction: undefined,
      typeBatiment: undefined,
      natureTravaux: undefined,
      besoinsRGE: undefined,
      nomContact: "",
      nomEntreprise: "",
      fonction: "",
      secteurActivite: "",
      tailleEntreprise: "",
    },
  });

  const handleClientTypeChange = (type: "particulier" | "professionnel") => {
    setClientType(type);
    form.setValue("clientType", type);
    
    // Reset des champs spécifiques au type précédent
    if (type === "particulier") {
      form.setValue("nomContact", "");
      form.setValue("nomEntreprise", "");
      form.setValue("fonction", "");
      form.setValue("secteurActivite", "");
      form.setValue("tailleEntreprise", "");
    } else {
      // Ne pas reset typeProjet car maintenant utilisé aussi par les pros
      form.setValue("typeConstruction", undefined);
      form.setValue("typeBatiment", undefined);
      form.setValue("natureTravaux", undefined);
      form.setValue("besoinsRGE", undefined);
    }
  };

  const handleSubmit = (data: DevisFormType) => {
    startTransition(async () => {
      const result = await createDevisAction(data);
      
      if (result.success) {
        toast.success(result.message);
        form.reset({
          clientType: "particulier",
          nomComplet: defaultUser.name || "",
          email: defaultUser.email,
          telephone: "",
          descriptionProjet: "",
          typeProjet: "",
          typeConstruction: undefined,
          typeBatiment: undefined,
          natureTravaux: undefined,
          besoinsRGE: undefined,
          nomContact: "",
          nomEntreprise: "",
          fonction: "",
          secteurActivite: "",
          tailleEntreprise: "",
        });
        setClientType("particulier");
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <Form
      form={form}
      onSubmit={handleSubmit}
      disabled={isPending}
    >
      <Card>
        <CardHeader>
          <CardTitle>Nouvelle demande de devis</CardTitle>
          <Typography className="text-muted-foreground">
            Décrivez votre projet pour recevoir un devis personnalisé
          </Typography>
        </CardHeader>
        
        <CardContent className="flex flex-col gap-4">
          {/* Sélecteur de type de client */}
          <div className="flex gap-4 mb-4">
            <button
              type="button"
              onClick={() => handleClientTypeChange("particulier")}
              className={`px-4 py-2 rounded-md transition-colors ${
                clientType === "particulier"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              disabled={isPending}
            >
              • Particulier
            </button>
            <button
              type="button"
              onClick={() => handleClientTypeChange("professionnel")}
              className={`px-4 py-2 rounded-md transition-colors ${
                clientType === "professionnel"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              disabled={isPending}
            >
              • Professionnel
            </button>
          </div>

          {/* Champs spécifiques aux particuliers */}
          {clientType === "particulier" && (
            <>
              <FormField
                control={form.control}
                name="nomComplet"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom complet *</FormLabel>
                    <FormControl>
                      <Input placeholder="Nom Prénom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input placeholder="contact@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="telephone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone</FormLabel>
                    <FormControl>
                      <Input placeholder="06 12 34 56 78" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="typeProjet"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type de projet *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un type de projet" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fenetre">Fenêtre</SelectItem>
                        <SelectItem value="porte">Porte d'entrée</SelectItem>
                        <SelectItem value="baie-vitree">Baie vitrée</SelectItem>
                        <SelectItem value="volets">Volets</SelectItem>
                        <SelectItem value="persiennes">Persiennes</SelectItem>
                        <SelectItem value="pergolas">Pergolas</SelectItem>
                        <SelectItem value="veranda">Véranda</SelectItem>
                        <SelectItem value="menuiserie">Menuiserie</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Champs spécifiques à la construction */}
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 space-y-4">
                <Typography className="font-semibold text-green-800">
                  🏗️ Informations spécifiques à votre projet
                </Typography>

                <FormField
                  control={form.control}
                  name="typeConstruction"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mon projet de construction</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre situation" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="je_fais_construire">Je fais construire</SelectItem>
                          <SelectItem value="je_construis_moi_meme">Je construis moi-même</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="typeBatiment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mon projet concerne</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez le type de bâtiment" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="maison">Une maison</SelectItem>
                          <SelectItem value="autre">Autre type de bâtiment</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="natureTravaux"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nature des travaux</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez la nature des travaux" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="construction">En construction</SelectItem>
                          <SelectItem value="renovation">En rénovation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="besoinsRGE"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mon projet a-t-il besoin de certification RGE ?</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez une option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="oui">Oui</SelectItem>
                          <SelectItem value="non">Non</SelectItem>
                          <SelectItem value="ne_sait_pas">Je ne sais pas</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <Typography className="text-sm text-green-700">
                    <strong>Info RGE :</strong> La certification RGE (Reconnu Garant de l'Environnement) 
                    est nécessaire pour bénéficier de certaines aides financières lors de travaux 
                    d'amélioration énergétique.
                  </Typography>
                </div>
              </div>
            </>
          )}

          {/* Champs spécifiques aux professionnels */}
          {clientType === "professionnel" && (
            <>
              <FormField
                control={form.control}
                name="nomContact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom du contact *</FormLabel>
                    <FormControl>
                      <Input placeholder="Nom du responsable" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input placeholder="contact@entreprise.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nomEntreprise"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom de l'entreprise *</FormLabel>
                    <FormControl>
                      <Input placeholder="Nom de votre entreprise" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="typeProjet"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type de projet *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un type de projet" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fenetre">Fenêtre</SelectItem>
                        <SelectItem value="porte">Porte d'entrée</SelectItem>
                        <SelectItem value="baie-vitree">Baie vitrée</SelectItem>
                        <SelectItem value="volets">Volets</SelectItem>
                        <SelectItem value="persiennes">Persiennes</SelectItem>
                        <SelectItem value="pergolas">Pergolas</SelectItem>
                        <SelectItem value="veranda">Véranda</SelectItem>
                        <SelectItem value="menuiserie">Menuiserie</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fonction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre fonction</FormLabel>
                    <FormControl>
                      <Input placeholder="Directeur, Manager..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="telephone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone</FormLabel>
                    <FormControl>
                      <Input placeholder="06 12 34 56 78" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="secteurActivite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Secteur d'activité *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un secteur" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="hotellerie-restauration">Hôtellerie & Restauration</SelectItem>
                        <SelectItem value="commerce-retail">Commerce & Retail</SelectItem>
                        <SelectItem value="bureaux-tertiaire">Bureaux & Tertiaire</SelectItem>
                        <SelectItem value="sante-medical">Santé & Médical</SelectItem>
                        <SelectItem value="industrie-logistique">Industrie & Logistique</SelectItem>
                        <SelectItem value="immobilier-syndic">Immobilier & Syndics</SelectItem>
                        <SelectItem value="education-formation">Éducation & Formation</SelectItem>
                        <SelectItem value="sport-loisirs">Sport & Loisirs</SelectItem>
                        <SelectItem value="services-publics">Services Publics</SelectItem>
                        <SelectItem value="artisanat-local">Artisanat & Commerce Local</SelectItem>
                        <SelectItem value="banque-assurance">Banque & Assurance</SelectItem>
                        <SelectItem value="transport-automobile">Transport & Automobile</SelectItem>
                        <SelectItem value="agriculture-cooperative">Agriculture & Coopératives</SelectItem>
                        <SelectItem value="technologie-startup">Technologie & Startups</SelectItem>
                        <SelectItem value="autre">Autre secteur</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tailleEntreprise"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Taille de l'entreprise</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez la taille" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employés</SelectItem>
                        <SelectItem value="11-50">11-50 employés</SelectItem>
                        <SelectItem value="51-200">51-200 employés</SelectItem>
                        <SelectItem value="200+">200+ employés</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {/* Description du projet (commun) */}
          <FormField
            control={form.control}
            name="descriptionProjet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description du projet *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Décrivez votre projet en détail : objectifs, budget approximatif, délais souhaités, fonctionnalités attendues..."
                    className="min-h-[120px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Section garanties */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <Typography className="font-semibold mb-2 text-green-800">
              ✅ Garanties incluses :
            </Typography>
            <ul className="text-sm text-green-700 space-y-1">
              <li>✅ Devis détaillé gratuit sous 24h - 48h</li>
              <li>✅ Accompagnement et suivi personnalisé</li>
              <li>✅ Résultats mesurables et plans adaptés</li>
              <li>✅ Garantie de qualité et respect des délais</li>
            </ul>
          </div>
        </CardContent>

        <CardFooter>
          <LoadingButton
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
            loading={isPending}
          >
            ⭐ Envoyer ma demande de devis
          </LoadingButton>
        </CardFooter>
      </Card>

      <Typography className="text-center text-sm text-muted-foreground mt-4">
        Votre demande sera traitée dans les plus brefs délais par notre équipe.
      </Typography>
    </Form>
  );
};