"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { GoogleRating } from "@/components/google-rating";
import { useGoogleReviews } from "@/components/google-reviews-provider";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "America/Sao_Paulo",
});

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { data, status } = useGoogleReviews();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-background px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Depoimentos
          </p>

          <h2 className="mt-6 text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Veja o que dizem nossos viajantes.
          </h2>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            <GoogleRating
              rating={data?.averageRating ?? null}
              className="text-amber-500"
              starClassName="size-5"
            />
            {data?.averageRating != null && (
              <span className="font-medium text-foreground">
                {data.averageRating.toLocaleString("pt-BR", {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}
              </span>
            )}
            <span>
              {data?.totalReviewCount != null
                ? `${data.totalReviewCount.toLocaleString("pt-BR")} avaliações no Google`
                : "Avaliações no Google"}
            </span>
          </div>
        </div>

        {status === "success" && data && data.reviews.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3">
            {data.reviews.map((review, index) => (
              <article
                key={review.id}
                className={`flex min-h-72 flex-col justify-between rounded-2xl border border-border p-8 transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div>
                  <GoogleRating
                    rating={review.rating}
                    className="mb-5 text-amber-500"
                    starClassName="size-4"
                  />
                  {review.url ? (
                    <a
                      href={review.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg leading-relaxed text-foreground hover:underline"
                    >
                      “{review.comment}”
                    </a>
                  ) : (
                    <p className="text-lg leading-relaxed text-foreground">
                      “{review.comment}”
                    </p>
                  )}
                </div>

                <div className="mt-10 flex items-center gap-4 border-t border-border pt-5">
                  {review.reviewerPhotoUrl ? (
                    <Image
                      src={review.reviewerPhotoUrl}
                      alt={`Foto de ${review.reviewerName}`}
                      width={48}
                      height={48}
                      unoptimized
                      className="h-12 w-12 flex-shrink-0 rounded-full border border-border object-cover"
                    />
                  ) : (
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-border bg-muted text-sm font-medium text-muted-foreground"
                      aria-hidden="true"
                    >
                      {review.reviewerName.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-foreground">{review.reviewerName}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {dateFormatter.format(new Date(review.date))}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
