import React from "react";
import Link from "next/link";
import { Typography } from "@/components/nowts/typography";

const ctaStats = [
  {
    value: "Gratuit",
    label: "Visite et devis offerts"
  },
  {
    value: "48h",
    label: "Réponse rapide garantie"
  },
  {
    value: "10 ans",
    label: "Garantie constructeur"
  }
];

export function CTASection() {
  return (
    <section id="devis" className="relative bg-blue-600 dark:bg-blue-700 py-20 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-0">
        <Typography variant="h2" className="mb-6 text-4xl font-bold md:text-5xl">
          Prêt à protéger votre habitation ?
        </Typography>
        <Typography variant="p" className="mb-8 text-xl opacity-90">
          Contactez Segment-C pour un devis gratuit et personnalisé. 
          Nos experts sont à votre disposition pour tous vos projets de volets.
        </Typography>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-700 transition-all hover:bg-gray-50 hover:shadow-xl"
          >
            Demander un devis gratuit
          </Link>
          <Link
            href="tel:+33671787253"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold transition-all hover:border-white/50 hover:bg-white/10"
          >
            06 71 78 72 53
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          {ctaStats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl bg-white/10 backdrop-blur-sm p-6 border border-white/20"
            >
              <div className="mb-2 text-2xl font-bold">{stat.value}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center text-sm">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <span>✓</span>
            <span>Fabrication française</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <span>✓</span>
            <span>Installation professionnelle</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <span>✓</span>
            <span>SAV réactif</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <span>✓</span>
            <span>Garantie 10 ans</span>
          </div>
        </div>
      </div>
    </section>
  );
}