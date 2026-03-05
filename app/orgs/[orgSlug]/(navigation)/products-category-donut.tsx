"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ChartConfig } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// ── Données issues de la seed ──────────────────────────────────────────────
// portesData + fenetresData comptés par catégorie

const chartData = [
  {
    category: "porte_entrer",
    count: 185,
    fill: "var(--color-porte_entrer)",
  },
  {
    category: "porte_vitrage",
    count: 95,
    fill: "var(--color-porte_vitrage)",
  },
  {
    category: "fenetre",
    count: 15,
    fill: "var(--color-fenetre)",
  },
  {
    category: "baie_vitree",
    count: 4,
    fill: "var(--color-baie_vitree)",
  },
];

const chartConfig = {
  count: {
    label: "Produits",
  },
  porte_entrer: {
    label: "Porte d'entrée",
    color: "var(--chart-1)",
  },
  porte_vitrage: {
    label: "Porte vitrée",
    color: "var(--chart-2)",
  },
  fenetre: {
    label: "Fenêtre",
    color: "var(--chart-3)",
  },
  baie_vitree: {
    label: "Baie vitrée",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function ProductsCategoryDonut() {
  const total = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.count, 0),
    [],
  );

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Répartition des produits</CardTitle>
        <CardDescription>Par catégorie — catalogue complet</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy ?? 0) + 24}
                          className="fill-muted-foreground text-sm"
                        >
                          produits
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="category" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/3 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-1 text-sm pt-0">
        <div className="flex flex-col gap-1 w-full">
          {chartData.map((item) => {
            const label = chartConfig[item.category as keyof typeof chartConfig];
            const pct = ((item.count / total) * 100).toFixed(1);
            return (
              <div
                key={item.category}
                className="flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className="inline-block h-2 w-2 rounded-full shrink-0"
                    style={{ background: item.fill }}
                  />
                  <span className="text-muted-foreground">
                    {"label" in label ? label.label : ""}
                  </span>
                </div>
                <span className="font-medium tabular-nums">
                  {item.count}{" "}
                  <span className="text-muted-foreground font-normal">
                    ({pct}%)
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}