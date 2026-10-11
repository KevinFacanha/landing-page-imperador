export interface GoogleReview {
  id: string;
  reviewerName: string;
  reviewerPhotoUrl: string | null;
  rating: number;
  comment: string;
  date: string;
  url: string | null;
}

export interface GoogleReviewsResponse {
  averageRating: number | null;
  totalReviewCount: number | null;
  reviews: GoogleReview[];
}
