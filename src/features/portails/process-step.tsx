import React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";

type ProcessStepProps = {
  step: string;
  title: string;
  description: string;
  color: string;
  showConnector?: boolean;
};

export function ProcessStep({ step, title, description, color, showConnector = false }: ProcessStepProps) {
  return (
    <div className="relative group">
      <div className={cn(
        "absolute -inset-1 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 blur transition-opacity",
        color
      )} />
      <div className="relative rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 bg-white dark:bg-slate-950 p-6 transition-all group-hover:border-transparent">
        <div className={cn(
          "mb-4 text-6xl font-bold bg-gradient-to-br bg-clip-text text-transparent",
          color
        )}>
          {step}
        </div>
        <Typography variant="h3" className="mb-3 text-xl font-semibold">
          {title}
        </Typography>
        <Typography variant="p" className="text-muted-foreground leading-relaxed">
          {description}
        </Typography>
      </div>
      {showConnector && (
        <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-gradient-to-r from-emerald-300 to-green-300 dark:from-emerald-700 dark:to-green-700 lg:block" />
      )}
    </div>
  );
}