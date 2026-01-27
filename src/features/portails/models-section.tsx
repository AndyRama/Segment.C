import React, { useState } from "react";
import { Typography } from "@/components/nowts/typography";
import { ProductTabs } from "./product-tabs";
import { PortailsContent } from "./portails-content";
import { CloturesContent } from "./clotures-content";

export function ModelsSection() {
  const [activeTab, setActiveTab] = useState<"portails" | "clotures">("portails");

  return (
    <section id="modeles" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-950/50 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
            Nos produits
          </div>
          <Typography variant="h2" className="mb-4 text-4xl font-bold">
            Nos gammes de portails et clôtures
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choisissez parmi notre large sélection de modèles ou créez le vôtre sur mesure
          </Typography>
        </div>

        <ProductTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {activeTab === "portails" ? <PortailsContent /> : <CloturesContent />}
        </div>
      </div>
    </section>
  );
}