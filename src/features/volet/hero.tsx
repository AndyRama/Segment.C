import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/nowts/typography";
import { ShieldCheck, Check, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-20 lg:px-0">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-72 w-72 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute right-0 bottom-0 h-96 w-96 bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/30 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
            <ShieldCheck className="h-4 w-4" />
            Sécurité & Isolation
          </div>
          
          <div className="space-y-4">
            <Typography variant="h1" className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Volets Roulants
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                & Battants
              </span>
            </Typography>
            
            <Typography variant="p" className="text-lg text-muted-foreground leading-relaxed">
              Protégez et isolez votre habitation avec nos volets sur mesure. 
              Roulants motorisés ou battants traditionnels, choisissez la solution 
              parfaite alliant sécurité, confort et esthétique.
            </Typography>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#devis"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white transition-all hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="#modeles"
              className="inline-flex items-center justify-center rounded-lg border-2 border-blue-200 dark:border-blue-800 px-8 py-4 text-base font-semibold text-blue-700 dark:text-blue-400 transition-all hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30"
            >
              Découvrir nos modèles
            </Link>
          </div>

          {/* Key Features Pills */}
          <div className="flex flex-wrap gap-3 pt-4">
            {["Fabrication française", "Installation en Gironde", "Motorisation disponible"].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/30 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
              >
                <Check className="h-4 w-4" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl lg:h-[600px] ring-1 ring-blue-200/50 dark:ring-blue-800/50">
            <Image
              src="/images/volet-hero.jpg"
              alt="Volet roulant moderne"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent" />
          </div>
          
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 rounded-xl bg-white dark:bg-slate-950 p-6 shadow-xl border-2 border-blue-200 dark:border-blue-800 lg:p-8">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-3">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">100+</div>
                <div className="text-sm text-muted-foreground">Volets installés</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}