"use client";

import React from "react";
import { cn } from "@/lib/utils";

import {HeroSection} from "@/features/portails/hero";
import {BenefitsSection} from "@/features/portails/benefits-section";
import {ModelsSection} from "@/features/portails/models-section";
import {ProcessSection} from "@/features/portails/process-section";
import {GallerySection} from "@/features/portails/gallery-section";
import {CTASection} from "@/features/portails/cta-section";
import {FAQSection} from "@/features/portails/faq-section";
import {MaterialsSection} from "@/features/portails/materials-section";


type PortailsPageProps = {
  className?: string;
};

export default function PortailsPage({ className }: PortailsPageProps) {
  return (
    <div className={cn("w-full", className)}>
      <HeroSection />
      <BenefitsSection />
      <ModelsSection />
      <MaterialsSection />
      <GallerySection />
      <ProcessSection />
      <CTASection />
      <FAQSection />
    </div>
  );
}