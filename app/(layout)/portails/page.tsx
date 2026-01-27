"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  HeroSection,
  BenefitsSection,
  ModelsSection,
  MaterialsSection,
  GallerySection,
  ProcessSection,
  CTASection,
  FAQSection,
} from "@/features/portails";

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