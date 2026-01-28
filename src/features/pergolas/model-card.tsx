import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/nowts/typography";
import { Check, ExternalLink } from "lucide-react";

type ModelCardProps = {
  name: string;
  description: string;
  features: string[];
  image: string;
  price: string;
  link: string;
  highlighted?: boolean;
};

export function ModelCard({ 
  name, 
  description, 
  features, 
  image, 
  price, 
  link,
  highlighted = false 
}: ModelCardProps) {
  return (
    <div className={`group relative rounded-2xl overflow-hidden transition-all ${
      highlighted 
        ? 'border-2 border-green-400 dark:border-green-600 shadow-xl shadow-green-500/20' 
        : 'border-2 border-green-200 dark:border-green-800'
    } bg-white dark:bg-slate-950 hover:shadow-2xl hover:shadow-green-500/20`}>
      {highlighted && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-green-600 to-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Populaire
        </div>
      )}
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent" />
        <Typography variant="h3" className="absolute bottom-4 left-6 text-2xl font-bold text-white">
          {name}
        </Typography>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <Typography variant="p" className="text-muted-foreground leading-relaxed">
          {description}
        </Typography>

        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price */}
        {/* <div className="pt-4 border-t border-green-100 dark:border-green-900">
          <Typography variant="p" className="text-sm text-muted-foreground mb-2">
            À partir de
          </Typography>
          <div className="flex items-baseline gap-2">
            <Typography variant="h3" className="text-3xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
              {price}
            </Typography>
            <span className="text-sm text-muted-foreground">TTC</span>
          </div>
        </div> */}

        {/* CTA Buttons */}
        <div className="flex gap-3 pt-4">
          <Link
            href="#devis"
            className="flex-1 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-700 px-4 py-3 text-sm font-semibold text-white transition-all hover:from-green-700 hover:to-orange-700 hover:shadow-lg"
          >
            Demander un devis
          </Link>
          <ExternalLink className="h-4 w-4" />
          {/* <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border-2 border-green-200 dark:border-green-800 px-4 py-3 text-sm font-semibold text-green-700 dark:text-green-400 transition-all hover:border-green-600 hover:bg-green-50 dark:hover:bg-green-950/30"
          >
          </Link> */}
        </div>
      </div>
    </div>
  );
}