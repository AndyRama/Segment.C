export const SiteConfig = {
  title: "Segment.C",
  description: "Porte ouverte sur vos fenêtres",
  prodUrl: "https://www.segment-c.com",
  appId: "Segment.C",
  domain: "segment-c.com",
  appIcon: "/images/icon.png",
  company: {
    name: "Segment.C",
    address: "390 all de saussets - 3 hameau 33127 -St Jean d'Illac",
  },
  brand: {
    primary: "#4bb484", // You can adjust this to your brand color
  },
  team: {
    image: "",
    website: "https://www.segment-c.com",
    twitter: "",
    name: "Rui Decarvalho",
  },
  features: {
    /**
     * If enable, you need to specify the logic of upload here : src/features/images/uploadImageAction.tsx
     * You can use Vercel Blob Storage : https://vercel.com/docs/storage/vercel-blob
     * Or you can use Cloudflare R2 : https://mlv.sh/cloudflare-r2-tutorial
     * Or you can use AWS S3 : https://mlv.sh/aws-s3-tutorial
     */
    enableImageUpload: false as boolean,
    /**
     * If enable, the user will be redirected to `/orgs` when he visits the landing page at `/`
     * The logic is located in middleware.ts
     */
    enableLandingRedirection: true as boolean,
  },
};
