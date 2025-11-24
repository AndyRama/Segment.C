"use client";

import { Typography } from "@/components/nowts/typography";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { SectionLayout } from "../section-layout";
import { useSession } from "@/lib/auth-client";
import QuoteRequestModule from "@/landing/quote-request-module";

export const CTAImageSection = () => {
  const { data: session } = useSession();

  return (
    <div
      style={{
        backgroundImage:
          "url(images/camion.jpg)",
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
          Remplissez ce formulaire pour planifier notre premier échange et définir les contours de votre futur projet.
        </Typography>

        <QuoteRequestModule />

      </SectionLayout>
    </div>
  );
};
