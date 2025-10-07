/**
 * Utilitaires pour la gestion des slugs de produits
 */

/**
 * Crée un slug URL-friendly à partir d'un nom de produit
 * @param name - Le nom du produit
 * @returns Le slug normalisé
 */
export const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize("NFD") // Décompose les caractères accentués
    .replace(/[\u0300-\u036f]/g, "") // Enlève les accents
    .replace(/[^a-z0-9]+/g, "-") // Remplace les caractères spéciaux par des tirets
    .replace(/^-+|-+$/g, ""); // Enlève les tirets en début et fin
};

/**
 * Décode un slug pour retrouver un nom de produit
 * Note: Cette fonction est approximative car la conversion slug -> nom perd de l'information
 * @param slug - Le slug à décoder
 * @returns Un nom approximatif
 */
export const decodeSlug = (slug: string): string => {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * Vérifie si un slug est valide
 * @param slug - Le slug à vérifier
 * @returns true si le slug est valide
 */
export const isValidSlug = (slug: string): boolean => {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
};

/**
 * Compare deux slugs pour voir s'ils correspondent
 * @param slug1 - Premier slug
 * @param slug2 - Deuxième slug
 * @returns true si les slugs sont identiques
 */
export const compareSlug = (slug1: string, slug2: string): boolean => {
  return createSlug(slug1) === createSlug(slug2);
};

/**
 * Exemples d'utilisation:
 * 
 * createSlug("Porte d'entrée IRIS") => "porte-d-entree-iris"
 * createSlug("LAMPARO Aluminium") => "lamparo-aluminium"
 * createSlug("Porte Vitrée Élégante") => "porte-vitree-elegante"
 * 
 * isValidSlug("porte-d-entree-iris") => true
 * isValidSlug("Porte d'entrée") => false
 */