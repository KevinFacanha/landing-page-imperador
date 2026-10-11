"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { GoogleReviewsResponse } from "@/lib/google-reviews";

type ReviewsStatus = "loading" | "success" | "error";

interface GoogleReviewsContextValue {
  data: GoogleReviewsResponse | null;
  status: ReviewsStatus;
}

const GoogleReviewsContext = createContext<GoogleReviewsContextValue>({
  data: null,
  status: "loading",
});

let reviewsRequest: Promise<GoogleReviewsResponse> | null = null;

function requestGoogleReviews() {
  if (!reviewsRequest) {
    reviewsRequest = fetch("/api/google-reviews", {
      headers: { Accept: "application/json" },
    }).then(async (response) => {
      if (!response.ok) throw new Error("Reviews are unavailable");
      return (await response.json()) as GoogleReviewsResponse;
    });
  }

  return reviewsRequest;
}

export function GoogleReviewsProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<GoogleReviewsResponse | null>(null);
  const [status, setStatus] = useState<ReviewsStatus>("loading");

  useEffect(() => {
    let isActive = true;

    requestGoogleReviews()
      .then((reviews) => {
        if (!isActive) return;
        setData(reviews);
        setStatus("success");
      })
      .catch(() => {
        if (!isActive) return;
        setStatus("error");
      });

    return () => {
      isActive = false;
    };
  }, []);

  const value = useMemo(() => ({ data, status }), [data, status]);

  return (
    <GoogleReviewsContext.Provider value={value}>
      {children}
    </GoogleReviewsContext.Provider>
  );
}

export function useGoogleReviews() {
  return useContext(GoogleReviewsContext);
}
