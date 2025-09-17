import { Typography } from "@/components/nowts/typography";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { SectionLayout } from "../section-layout";

export const CTAImageSection = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(images/camion.png)",
        backgroundSize: "cover",
      }}
    >
      <SectionLayout
        variant="image"
        className="flex min-h-[500px] flex-col items-center justify-center gap-4 text-white drop-shadow-md"
      >
        <Typography
          variant="h2"
          className="text-center text-5xl font-extrabold"
        >
          Prêt à démarrer votre projet ?
        </Typography>
        <Typography className="text-center font-bold">
          Lorem ipsum dolor sit amet consectetur
        </Typography>
        <Link href="/auth/signin?callbackUrl=%2Faccount%2Fdevis" className={buttonVariants({ size: "lg" })}>
          Demande de devis
        </Link>
      </SectionLayout>
    </div>
  );
};
