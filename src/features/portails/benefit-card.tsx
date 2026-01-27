import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";

type BenefitCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

export function BenefitCard({ icon: Icon, title, description, color }: BenefitCardProps) {
  return (
    <div className="group relative rounded-2xl border border-emerald-100 dark:border-emerald-900 bg-white dark:bg-slate-950 p-8 shadow-sm transition-all hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-xl hover:shadow-emerald-500/10">
      <div className={cn(
        "mb-4 inline-flex rounded-xl bg-gradient-to-br p-3 transition-all group-hover:scale-110",
        color
      )}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <Typography variant="h3" className="mb-3 text-xl font-semibold">
        {title}
      </Typography>
      <Typography variant="p" className="text-muted-foreground leading-relaxed">
        {description}
      </Typography>
    </div>
  );
}