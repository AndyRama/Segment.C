"use client";

import React from "react";
import { cn } from "@/lib/utils";
// import {
//   HeroSection,
//   BenefitsSection,
//   ModelsSection,
//   MaterialsSection,
//   ProcessSection,
//   GallerySection,
//   CTASection,
//   FAQSection,
// } from "@/components/volets";

import {HeroSection} from "@/features/volet/hero";
import {BenefitsSection} from "@/features/volet/benefits-section";
import {ModelsSection} from "@/features/volet/models-section";
import {MaterialsSection} from "@/features/volet/materials-section";
import {ProcessSection} from "@/features/volet/process-section";
import {GallerySection} from "@/features/volet/gallery-section";
import {CTASection} from "@/features/volet/cta-section";
import {FAQSection} from "@/features/volet/faq-section";

type VoletsPageProps = {
  className?: string;
};

export default function VoletsPage({ className }: VoletsPageProps) {
  return (
    <div className={cn("w-full", className)}>
      <HeroSection />
      <BenefitsSection />
      <ModelsSection />
      <MaterialsSection />
      <ProcessSection />
      <GallerySection />
      <CTASection />
      <FAQSection />
    </div>
  );
}