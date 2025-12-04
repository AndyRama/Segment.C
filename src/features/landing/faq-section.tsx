"use client";

import { Typography } from "@/components/nowts/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClientMarkdown } from "../markdown/client-markdown";
import { SectionLayout } from "./section-layout";

type Faq = {
  question: string;
  answer: string;
};

type FeaturesPreviewProps = {
  faq: Faq[];
};

export const FAQSection = (props: FeaturesPreviewProps) => {
  // Créer un tableau avec tous les items ouverts par défaut
  const defaultOpenItems = props.faq.map((_, i) => `item-${i}`);

  return (
    <SectionLayout size="lg" className="flex px-2 md:px-4 max-lg:flex-col">
      <div className="flex-1 space-y-2">
        <Typography className="text-primary font-extrabold uppercase">
          FAQ
        </Typography>
        <Typography variant="h2" className="text-2xl md:text-5xl">
          Questions fréquemment posées
        </Typography>
      </div>
      <div className="flex-1">
        <Accordion type="multiple" defaultValue={defaultOpenItems}>
          {props.faq.map((e, i) => {
            return (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger className="text-left text-lg cursor-pointer hover:text-primary transition-colors">
                  {e.question}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <ClientMarkdown>{e.answer}</ClientMarkdown>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </SectionLayout>
  );
};