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
    <div className="group relative rounded-2xl border border-green-100 dark:border-green-900 bg-white dark:bg-slate-950 p-8 shadow-sm transition-all hover:border-green-300 dark:hover:border-green-700 hover:shadow-xl hover:shadow-green-500/10">
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