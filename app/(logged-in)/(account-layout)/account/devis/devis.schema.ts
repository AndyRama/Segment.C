import { z } from "zod";

export const DevisFormSchema = z.object({
  // Type de client (particulier ou professionnel)
  clientType: z.enum(["particulier", "professionnel"]),
  
  // Champs communs
  nomComplet: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  descriptionProjet: z.string().min(10, "La description doit contenir au moins 10 caractères"),
  
  // Champs pour particulier
  typeProjet: z.string().optional(), // pour "Type de projet"
  
  // Champs pour professionnel
  nomContact: z.string().optional(), // "Nom du contact"
  nomEntreprise: z.string().optional(),
  fonction: z.string().optional(), // "Votre fonction"
  secteurActivite: z.string().optional(),
  tailleEntreprise: z.string().optional(),
}).refine((data) => {
  // Validation conditionnelle pour les champs professionnels
  if (data.clientType === "professionnel") {
    return data.nomContact && data.nomEntreprise && data.secteurActivite;
  }
  // Validation conditionnelle pour les champs particulier
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (data.clientType === "particulier") {
    return data.typeProjet;
  }
  return true;
}, {
  message: "Tous les champs requis doivent être remplis selon le type de client",
  path: ["root"]
});

export type DevisFormType = z.infer<typeof DevisFormSchema>;