import { getPosts } from "@/features/posts/post-manager";
import type { MetadataRoute } from "next";

const VILLES_URLS = [
  // Bordeaux Métropole
  "/bordeaux", "/merignac", "/le-bouscat", "/talence",
  "/pessac", "/gradignan", "/cestas",
  // Rive Droite & Médoc
  "/saint-jean-d-illac", "/saint-medard-en-jalles", "/martignas-sur-jalle",
  // Bassin d'Arcachon
  "/arcachon", "/andernos-les-bains", "/cap-ferret", "/biganos",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const staticPages: MetadataRoute.Sitemap = [
    // Pages principales
    { url: "https://segment-c.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://segment-c.com/home", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://segment-c.com/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://segment-c.com/posts", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://segment-c.com/villes", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Produits
    { url: "https://segment-c.com/fenetres", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://segment-c.com/baie", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://segment-c.com/portes", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://segment-c.com/portails", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://segment-c.com/pergolas", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://segment-c.com/volet", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Partenaires
    { url: "https://segment-c.com/partenaire/c2r", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://segment-c.com/partenaire/orial", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://segment-c.com/partenaire/proferm", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://segment-c.com/partenaire/swao", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://segment-c.com/partenaire/sybaie", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },

    // Légal
    { url: "https://segment-c.com/legal/mentions-legales", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: "https://segment-c.com/legal/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: "https://segment-c.com/plan-du-site", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const villePages: MetadataRoute.Sitemap = VILLES_URLS.map((path) => ({
    url: `https://segment-c.com${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://segment-c.com/posts/${post.slug}`,
    lastModified: new Date(post.attributes.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...villePages, ...postPages];
}