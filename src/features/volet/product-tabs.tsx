import React from "react";
import { cn } from "@/lib/utils";

type ProductTabsProps = {
  activeTab: "roulants" | "battants";
  onTabChange: (tab: "roulants" | "battants") => void;
};

export function ProductTabs({ activeTab, onTabChange }: ProductTabsProps) {
  return (
    <div className="mb-12 flex justify-center">
      <div className="inline-flex rounded-xl border-2 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20 p-1.5">
        <button
          onClick={() => onTabChange("roulants")}
          className={cn(
            "rounded-lg px-8 py-3 text-base font-semibold transition-all",
            activeTab === "roulants"
              ? "bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg shadow-green-500/25"
              : "text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300"
          )}
        >
          Volets Roulants
        </button>
        <button
          onClick={() => onTabChange("battants")}
          className={cn(
            "rounded-lg px-8 py-3 text-base font-semibold transition-all",
            activeTab === "battants"
              ? "bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg shadow-green-500/25"
              : "text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300"
          )}
        >
          Volets Battants
        </button>
      </div>
    </div>
  );
}