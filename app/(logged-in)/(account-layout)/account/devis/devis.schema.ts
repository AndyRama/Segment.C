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
  
  // Nouveaux champs pour projets de construction
  typeConstruction: z.enum(["je_fais_construire", "je_construis_moi_meme"]).optional(),
  typeBatiment: z.enum(["maison", "autre"]).optional(),
  natureTravaux: z.enum(["construction", "renovation"]).optional(),
  besoinsRGE: z.enum(["oui", "non", "ne_sait_pas"]).optional(),
  
  // Champs pour professionnel
  nomContact: z.string().min(1, "Le nom du contact est requis").optional(),
  nomEntreprise: z.string().min(1, "Le nom de l'entreprise est requis").optional(),
  fonction: z.string().optional(),
  secteurActivite: z.string().min(1, "Le secteur d'activité est requis").optional(),
  tailleEntreprise: z.string().optional(),
}).refine((data) => {
  // Validation conditionnelle pour les champs professionnels
  if (data.clientType === "professionnel") {
    const isValid = !!(data.nomContact && data.nomContact.trim().length > 0) &&
                   !!(data.nomEntreprise && data.nomEntreprise.trim().length > 0) &&
                   !!(data.secteurActivite && data.secteurActivite.trim().length > 0);
    
    if (!isValid) {
      console.log("Échec validation pro:", {
        nomContact: data.nomContact,
        nomEntreprise: data.nomEntreprise,
        secteurActivite: data.secteurActivite
      });
    }
    return isValid;
  }
  
  // Validation conditionnelle pour les champs particulier
  const isValidParticulier = !!(data.typeProjet && data.typeProjet.trim().length > 0);
  
  if (!isValidParticulier) {
    console.log("Échec validation particulier:", {
      typeProjet: data.typeProjet
    });
  }
  
  return isValidParticulier;
}, {
  message: "Veuillez remplir tous les champs obligatoires (*)",
  path: ["root"]
});

export type DevisFormType = z.infer<typeof DevisFormSchema>;