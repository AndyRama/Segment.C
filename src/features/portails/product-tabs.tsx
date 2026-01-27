import React from "react";
import { cn } from "@/lib/utils";

type ProductTabsProps = {
  activeTab: "portails" | "clotures";
  onTabChange: (tab: "portails" | "clotures") => void;
};

export function ProductTabs({ activeTab, onTabChange }: ProductTabsProps) {
  return (
    <div className="mb-12 flex justify-center">
      <div className="inline-flex rounded-xl border-2 border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20 p-1.5">
        <button
          onClick={() => onTabChange("portails")}
          className={cn(
            "rounded-lg px-8 py-3 text-base font-semibold transition-all",
            activeTab === "portails"
              ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-500/25"
              : "text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300"
          )}
        >
          Portails
        </button>
        <button
          onClick={() => onTabChange("clotures")}
          className={cn(
            "rounded-lg px-8 py-3 text-base font-semibold transition-all",
            activeTab === "clotures"
              ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-500/25"
              : "text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300"
          )}
        >
          Clôtures
        </button>
      </div>
    </div>
  );
}