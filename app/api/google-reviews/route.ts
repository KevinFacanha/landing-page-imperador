import { NextResponse } from "next/server";

import type { GoogleReview, GoogleReviewsResponse } from "@/lib/google-reviews";

export const dynamic = "force-dynamic";

const CACHE_CONTROL = "public, s-maxage=300, stale-while-revalidate=60";

const starRatings: Record<string, number> = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

interface GoogleApiReview {
  reviewId?: string;
  reviewer?: {
    displayName?: string;
    profilePhotoUrl?: string;
  };
  starRating?: string;
  comment?: string;
  createTime?: string;
  updateTime?: string;
  reviewUrl?: string;
}

interface GoogleReviewsApiResponse {
  averageRating?: number;
  totalReviewCount?: number;
  reviews?: GoogleApiReview[];
}

function getServerConfig() {
  const config = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    accountId: process.env.GOOGLE_ACCOUNT_ID,
    locationId: process.env.GOOGLE_LOCATION_ID,
  };

  if (Object.values(config).some((value) => !value)) {
    throw new Error("Google Business Profile configuration is incomplete");
  }

  return config as Record<keyof typeof config, string>;
}

async function getAccessToken(config: ReturnType<typeof getServerConfig>) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: config.clientId,
      client_secret: config.clientSecret,
      refresh_token: config.refreshToken,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Google OAuth request failed with status ${response.status}`);
  }

  const payload = (await response.json()) as { access_token?: string };
  if (!payload.access_token) {
    throw new Error("Google OAuth response did not include an access token");
  }

  return payload.access_token;
}

function normalizeReview(review: GoogleApiReview): GoogleReview | null {
  const comment = review.comment?.trim();
  const rating = review.starRating ? starRatings[review.starRating] : undefined;
  const date = review.updateTime ?? review.createTime;

  if (!comment || !rating || !date) return null;

  return {
    id: review.reviewId ?? `${review.reviewer?.displayName ?? "anonymous"}-${date}`,
    reviewerName: review.reviewer?.displayName?.trim() || "Viajante do Google",
    reviewerPhotoUrl: review.reviewer?.profilePhotoUrl ?? null,
    rating,
    comment,
    date,
    url: review.reviewUrl ?? null,
  };
}

export async function GET() {
  try {
    const config = getServerConfig();
    const accessToken = await getAccessToken(config);
    const reviewsUrl = new URL(
      `https://mybusiness.googleapis.com/v4/accounts/${encodeURIComponent(config.accountId)}/locations/${encodeURIComponent(config.locationId)}/reviews`,
    );
    reviewsUrl.searchParams.set("pageSize", "50");
    reviewsUrl.searchParams.set("orderBy", "updateTime desc");

    const response = await fetch(reviewsUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Google reviews request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as GoogleReviewsApiResponse;
    const reviews = (payload.reviews ?? [])
      .map(normalizeReview)
      .filter((review): review is GoogleReview => review !== null)
      .slice(0, 3);

    const result: GoogleReviewsResponse = {
      averageRating:
        typeof payload.averageRating === "number" ? payload.averageRating : null,
      totalReviewCount:
        typeof payload.totalReviewCount === "number" ? payload.totalReviewCount : null,
      reviews,
    };

    return NextResponse.json(result, {
      headers: { "Cache-Control": CACHE_CONTROL },
    });
  } catch (error) {
    console.error(
      "[google-reviews] Unable to load Google Business Profile reviews:",
      error instanceof Error ? error.message : "Unknown server error",
    );

    const fallback: GoogleReviewsResponse = {
      averageRating: null,
      totalReviewCount: null,
      reviews: [],
    };

    return NextResponse.json(fallback, {
      status: 502,
      headers: { "Cache-Control": "no-store" },
    });
  }
}
