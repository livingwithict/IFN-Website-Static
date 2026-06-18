// types.ts
export interface NewsArticle {
  id: string;
  title: string;
  thumbnail: string | null;
  source: string;
  url: string;
  date: string; // ISO format string from the API
}