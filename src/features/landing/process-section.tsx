"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { 
  Calculator, 
  Palette, 
  Hammer, 
  CheckCircle, 
  Phone, 
  Clock,
  User,
  Home
} from "lucide-react";

type ProcessSectionProps = {
  className?: string;
}

type StepProps = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  details: string[];
}

export const ProcessSection = ({ className }: ProcessSectionProps) => {
  const steps: StepProps[] = [
    {
      number: 1,
      title: "Devis gratuit",
      description: "Je me déplaçe chez vous pour étudier votre projet. Pour une demande de devis gratuit, crée votre compte et remplissez le formulaire.",
      icon: <Calculator className="size-8" />,
      duration: "1-2 jours",
      details: [
        "Prise de mesures précises",
        "Étude de faisabilité",
        "Conseils personnalisés",
        "Devis détaillé gratuit"
      ]
    },
    {
      number: 2,
      title: "Mesure technique",
      description: "Conception et validation des plans selon vos besoins, prise de mesure et choix des matériaux et finitions.",
      icon: <Palette className="size-8" />,
      duration: "3-5 jours",
      details: [
        "Plans techniques détaillés",
        "Choix des matériaux",
        "Sélection des finitions",
        "Validation du projet"
      ]
    },
    {
      number: 3,
      title: "Réalisation",
      description: "Commande de vos menuiseries chez notre fournisseurs qui ont un savoir-faire artisanal.",
      icon: <Hammer className="size-8" />,
      duration: "2-4 semaines",
      details: [
        "Fabrication en atelier",
        "Contrôle qualité",
        "Finitions soignées",
        "Tests de fonctionnement"
      ]
    },
    {
      number: 4,
      title: "Pose professionnelle",
      description: "Installation professionnelle avec finitions parfaites et nettoyage complet du chantier.",
      icon: <CheckCircle className="size-8" />,
      duration: "1-3 jours",
      details: [
        "Pose par nos équipes",
        "Réglages et ajustements",
        "Nettoyage du chantier",
        "Garantie et SAV"
      ]
    }
  ];

  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-20", className)}>
      <ProcessHeader />
      <ProcessSteps steps={steps} />
      <ProcessSummary />
    </section>
  );
};

const ProcessHeader = () => (
  <div className="mb-16 space-y-4 text-center">
    <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
      Mon Processus
    </Typography>
    <Typography variant="large" className="mx-auto max-w-4xl text-muted-foreground">
      De votre idée à la réalisation, découvrez les 4 étapes de notre accompagnement personnalisé
    </Typography>
  </div>
);

const ProcessSteps = ({ steps }: { steps: StepProps[] }) => (
  <div className="relative">
    {/* Ligne de connexion */}
    <div className="absolute top-8 left-0 right-0 hidden lg:block">
      <div className="relative mx-auto max-w-5xl px-8">
        <div className="h-0.5 w-full bg-gradient-to-r from-green-500/30 via-green-500 to-green-500/30"></div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <ProcessStep key={step.number} step={step} index={index} />
      ))}
    </div>
  </div>
);

const ProcessStep = ({ step, index }: { step: StepProps; index: number }) => {
  const delay = index * 0.2;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.6 }
      }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Numéro de l'étape */}
      <div className="relative z-10 mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/25">
        {step.number}
      </div>
      
      {/* Contenu de l'étape */}
      <div className="space-y-4 text-center">
        <div className="mb-3 flex justify-center text-green-600">
          {step.icon}
        </div>
        
        <Typography variant="h3" className="text-xl font-semibold">
          {step.title}
        </Typography>
        
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Clock size={16} className="text-green-600" />
          <span>{step.duration}</span>
        </div>
        
        <Typography variant="p" className="leading-relaxed text-muted-foreground">
          {step.description}
        </Typography>
        
        {/* Détails en hover */}
        <div className="mt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="space-y-2 rounded-lg bg-green-50 p-4 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            {step.details.map((detail, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle size={14} className="shrink-0 text-green-600" />
                <span className="text-green-800 dark:text-green-200">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProcessSummary = () => (
  <div className="mt-16 space-y-6 rounded-2xl bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 text-center border border-green-200 dark:border-green-800">
    <Typography variant="h3" className="text-2xl font-semibold text-green-800 dark:text-green-200">
      Prêt à démarrer votre projet ?
    </Typography>
    
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
        <Phone size={20} className="text-green-600" />
        <span>Appelez-nous pour un devis gratuit</span>
      </div>
      <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
        <User size={20} className="text-green-600" />
        <span>Conseils personnalisés</span>
      </div>
      <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
        <Home size={20} className="text-green-600" />
        <span>Déplacement à domicile</span>
      </div>
    </div>
    
    <div className="flex flex-col justify-center gap-4 sm:flex-row">
      <Link
        href="/contact"
        className={cn(
          buttonVariants({ size: "lg", variant: "default" }),
          "bg-green-600 hover:bg-green-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
        )}
      >
        Demander un devis gratuit
      </Link>
      
      <Link
        href="tel:0600000000"
        className={cn(
          buttonVariants({ size: "lg", variant: "outline" }),
          "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        )}
      >
        06.00.00.00.00
      </Link>
    </div>
  </div>
);