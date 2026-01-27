"use client";

import React from "react";
import { cn } from "@/lib/utils";

import {HeroSection} from "@/features/pergolas/hero";
import {BenefitsSection} from "@/features/pergolas/benefits-section";
import {ModelsSection} from "@/features/pergolas/models-section";
import {OptionsSection} from "@/features/pergolas/options-section";
import {GallerySection} from "@/features/pergolas/gallery-section";
import {ProcessSection} from "@/features/pergolas/process-section";
import {CTASection} from "@/features/pergolas/cta-section";
import {FAQSection} from "@/features/pergolas/faq-section";


type PergolasPageProps = {
  className?: string;
};

export default function PergolasPage({ className }: PergolasPageProps) {
  return (
    <div className={cn("w-full", className)}>
      <HeroSection />
      <BenefitsSection />
      <ModelsSection />
      <OptionsSection />
      <ProcessSection />
      <GallerySection />
      <CTASection />
      <FAQSection />
    </div>
  );
}