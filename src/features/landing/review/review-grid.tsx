"use client";
import { useState } from "react";
import { SectionLayout } from "../section-layout";
import type { ReviewItemProps } from "./review-item";
import { ReviewItem } from "./review-item";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

type ReviewGridProps = {
  reviews: ReviewItemProps[];
  initialReviewsCount?: number;
};

export const ReviewGrid = ({ reviews, initialReviewsCount = 3 }: ReviewGridProps) => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedReviews = showAll ? reviews : reviews.slice(0, initialReviewsCount);
  const hasMoreReviews = reviews.length > initialReviewsCount;

  const toggleReviews = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="space-y-8">
      <SectionLayout className="m-auto max-w-5xl columns-1 gap-4 md:columns-2 xl:columns-3">
        {displayedReviews.map((review) => (
          <ReviewItem
            {...review}
            key={review.image}
            className="mb-4 break-inside-avoid-column"
          />
        ))}
      </SectionLayout>
      
      {hasMoreReviews && (
        <div className="flex justify-end mt-[-10]">
          <Button
            variant="outline"
            size="lg"
            onClick={toggleReviews}
            className="group border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            {showAll ? (
              <>
                Voir moins d'avis
                <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </>
            ) : (
              <>
                Voir tous les avis ({reviews.length - initialReviewsCount} de plus)
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};