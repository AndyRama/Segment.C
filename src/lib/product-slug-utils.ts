/**
 * ✅ SOLUTION COMPLÈTE AU PROBLÈME "PORTE NON TROUVÉE"
 * 
 * Utilitaires centralisés pour gérer la conversion nom ↔ slug ↔ ID
 * de manière cohérente dans toute l'application
 */

// ================================
// FONCTIONS PRINCIPALES
// ================================

/**
 * Convertit un nom de produit en slug URL-friendly
 * Exemple: "ASTEN-19" → "asten-19"
 * Exemple: "ALESIA 60" → "alesia-60"
 */
export const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')  // Remplace les espaces par des tirets
    .replace(/[^a-z0-9-]/g, '');  // Supprime les caractères spéciaux sauf tirets et chiffres
};

/**
 * Convertit un slug en ID de base de données pour les portes
 * Exemple: "asten-19" → "porte-asten-19"
 */
export const slugToPorteId = (slug: string): string => {
  return `porte-${slug}`;
};

/**
 * Extrait le slug d'un ID de porte
 * Exemple: "porte-asten-19" → "asten-19"
 */
export const porteIdToSlug = (id: string): string => {
  return id.replace(/^porte-/, '');
};

/**
 * Convertit un nom de produit directement en ID de base de données
 * Exemple: "ASTEN-19" → "porte-asten-19"
 */
export const nameToPorteId = (name: string): string => {
  const slug = createSlug(name);
  return slugToPorteId(slug);
};

// ================================
// FONCTIONS POUR LES FENÊTRES (bonus)
// ================================

export const slugToFenetreId = (slug: string): string => {
  return `fenetre-${slug}`;
};

export const fenetreIdToSlug = (id: string): string => {
  return id.replace(/^fenetre-/, '');
};

export const nameToFenetreId = (name: string): string => {
  const slug = createSlug(name);
  return slugToFenetreId(slug);
};

// ================================
// EXEMPLES D'UTILISATION
// ================================

/**
 * EXEMPLE 1: Dans votre page de détail ([slug]/page.tsx)
 * 
 * export default function PorteDetailPage({ params }: { params: { slug: string } }) {
 *   const productId = slugToPorteId(params.slug);
 *   // Maintenant cherchez avec productId: "porte-asten-19"
 *   const product = await prisma.product.findUnique({
 *     where: { id: productId }
 *   });
 * }
 */

/**
 * EXEMPLE 2: Dans votre composant de liste
 * 
 * <Link href={`/portes/${createSlug(porte.name)}`}>
 *   {porte.name}
 * </Link>
 */

/**
 * EXEMPLE 3: Vérification de cohérence avec seed.ts
 * 
 * // Dans seed.ts, vous avez:
 * id: `porte-${porte.name.toLowerCase().replace(/\s+/g, "-")}`
 * 
 * // Avec cette fonction nameToPorteId, vous obtenez la même chose:
 * nameToPorteId("ASTEN-19") // → "porte-asten-19"
 */