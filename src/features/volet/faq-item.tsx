import React from "react";
import { Typography } from "@/components/nowts/typography";

type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group rounded-xl border-2 border-green-200 dark:border-green-800 bg-white dark:bg-slate-950 p-6 shadow-sm transition-all hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg">
      <summary className="flex cursor-pointer items-center justify-between font-semibold text-green-900 dark:text-green-100">
        <span>{question}</span>
        <span className="ml-4 transition-transform group-open:rotate-180">
          <svg
            className="h-5 w-5 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </summary>
      <Typography
        variant="p"
        className="mt-4 text-muted-foreground leading-relaxed"
      >
        {answer}
      </Typography>
    </details>
  );
}