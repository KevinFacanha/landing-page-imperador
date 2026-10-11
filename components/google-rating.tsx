"use client";

import { Star } from "lucide-react";

interface GoogleRatingProps {
  rating: number | null;
  className?: string;
  starClassName?: string;
}

export function GoogleRating({
  rating,
  className = "",
  starClassName = "size-4",
}: GoogleRatingProps) {
  const safeRating = rating === null ? 0 : Math.max(0, Math.min(5, rating));

  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      aria-label={rating === null ? "Avaliação indisponível" : `${rating.toFixed(1)} de 5 estrelas`}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = Math.max(0, Math.min(1, safeRating - star + 1)) * 100;

        return (
          <span key={star} className={`relative inline-flex ${starClassName}`} aria-hidden="true">
            <Star className="absolute inset-0 size-full fill-current opacity-30" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
              <Star className={`size-full max-w-none fill-current ${starClassName}`} />
            </span>
          </span>
        );
      })}
    </span>
  );
}
