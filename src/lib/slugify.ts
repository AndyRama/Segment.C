export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")                    // décompose les caractères accentués
    .replace(/[\u0300-\u036f]/g, "")     // supprime les diacritiques (accents)
    .replace(/[æ]/g, "ae")
    .replace(/[œ]/g, "oe")
    .replace(/[ç]/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")       // supprime les caractères spéciaux
    .trim()
    .replace(/\s+/g, "-")               // remplace les espaces par des tirets
    .replace(/-+/g, "-");               // supprime les tirets multiples
};