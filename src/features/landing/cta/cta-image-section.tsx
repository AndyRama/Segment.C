"use client";

import { Typography } from "@/components/nowts/typography";
import { buttonVariants } from "@/components/ui/button"; 
import { SectionLayout } from "../section-layout";
import { useSession } from "@/lib/auth-client";
import QuoteRequestModule from "@/features/landing/quote-request-module"; 

export const CTAImageSection = () => {
  const { data: session } = useSession();
  // const imageUrl = "https://images.unsplash.com/photo-1549419163-9efd3a11f264?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  return (
    <div
      style={{
        backgroundImage:
          `url(images/camion.jpg)`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-[1px]"></div>
      <SectionLayout
        variant="image"
        className="relative z-10 flex min-h-[500px] flex-col items-center justify-center gap-6 text-white drop-shadow-lg"
      >
        <Typography
          variant="h2"
          className="text-center text-4xl sm:text-5xl font-extrabold"
        >
          Prêt à démarrer votre projet ?
        </Typography>
        <Typography className="text-center text-lg font-medium max-w-2xl">
          Remplissez ce formulaire pour planifier notre premier échange et définir les contours de votre futur projet.
        </Typography>
        <QuoteRequestModule 
          className="mt-4 text-gray-900 font-bold bg-white hover:bg-white/90 shadow-xl transition-transform hover:scale-[1.02] px-8 py-4 rounded-lg text-lg"
        />
      </SectionLayout>
    </div>
  );
};