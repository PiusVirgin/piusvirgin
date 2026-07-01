// types/news.ts

export interface NewsArticle {
  id: string;
  slug: string;

  title: string;
  excerpt: string;

  category: "Politics" | "Business" | "Transport" | "Tourism" | "Education";

  author: string;

  publishedAt: string;

  readTime: string;

  featured?: boolean;

  coverImage: string;

  gallery?: string[];

  tags: string[];

  content: string[];
}
