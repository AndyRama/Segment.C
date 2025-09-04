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
  typeProjet: z.string().optional(),
  
  // Nouveaux champs pour projets de construction
  typeConstruction: z.enum(["je_fais_construire", "je_construis_moi_meme"]).optional(),
  typeBatiment: z.enum(["maison", "autre"]).optional(),
  natureTravaux: z.enum(["construction", "renovation"]).optional(),
  besoinsRGE: z.enum(["oui", "non", "ne_sait_pas"]).optional(),
  
  // Champs pour professionnel
  nomContact: z.string().optional(),
  nomEntreprise: z.string().optional(),
  fonction: z.string().optional(),
  secteurActivite: z.string().optional(),
  tailleEntreprise: z.string().optional(),
}).superRefine((data, ctx) => {
  // Validation pour professionnels
  if (data.clientType === "professionnel") {
    if (!data.nomContact || data.nomContact.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Le nom du contact est requis",
        path: ["nomContact"],
      });
    }
    
    if (!data.nomEntreprise || data.nomEntreprise.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Le nom de l'entreprise est requis",
        path: ["nomEntreprise"],
      });
    }
    
    if (!data.secteurActivite || data.secteurActivite.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Le secteur d'activité est requis",
        path: ["secteurActivite"],
      });
    }
    
    if (!data.typeProjet || data.typeProjet.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Le type de projet est requis",
        path: ["typeProjet"],
      });
    }
  }
  
  // Validation pour particuliers
  if (data.clientType === "particulier") {
    if (!data.typeProjet || data.typeProjet.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Le type de projet est requis",
        path: ["typeProjet"],
      });
    }
  }
});

export type DevisFormType = z.infer<typeof DevisFormSchema>;