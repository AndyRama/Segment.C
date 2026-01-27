import React, { useState } from "react";
import { Typography } from "@/components/nowts/typography";
import { ProductTabs } from "./product-tabs";
import { VoletsRoulantsContent } from "./volets-roulant";
import { VoletsBattantsContent } from "./volets-battant";

export function ModelsSection() {
  const [activeTab, setActiveTab] = useState<"roulants" | "battants">("roulants");

  return (
    <section id="modeles" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 dark:bg-green-950/50 px-4 py-2 text-sm font-medium text-green-700 dark:text-green-400">
            Nos produits
          </div>
          <Typography variant="h2" className="mb-4 text-4xl font-bold">
            Nos gammes de volets
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choisissez parmi notre large sélection de volets roulants et battants fabriqués en France
          </Typography>
        </div>

        <ProductTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {activeTab === "roulants" ? <VoletsRoulantsContent /> : <VoletsBattantsContent />}
        </div>
      </div>
    </section>
  );
}