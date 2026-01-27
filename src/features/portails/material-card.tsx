import React from "react";
import Image from "next/image";
import { Typography } from "@/components/nowts/typography";
import { Check } from "lucide-react";

type MaterialCardProps = {
  name: string;
  description: string;
  features: string[];
  image: string;
};

export function MaterialCard({ name, description, features, image }: MaterialCardProps) {
  return (
    <div className="group rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 bg-white dark:bg-slate-950 overflow-hidden transition-all hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent" />
        <Typography variant="h3" className="absolute bottom-4 left-4 text-2xl font-bold text-white">
          {name}
        </Typography>
      </div>
      
      <div className="p-6 space-y-4">
        <Typography variant="p" className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </Typography>
        
        <div className="grid grid-cols-2 gap-2">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              <Check className="h-3 w-3 text-emerald-600 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}