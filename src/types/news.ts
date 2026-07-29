// types/news.ts

import { Prisma } from "@prisma/client";

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

export interface PublicNews {
  id: string;
  title: string;
  slug: string;
  excerpt: string;

  coverImage: string | null;

  category: string;
  author: string;

  featured: boolean;

  publishedAt: Date | null;

  readTime: number | null;
}


// export type PublicNews = Prisma.NewsGetPayload<{
//   select: {
//     id: true;
//     title: true;
//     slug: true;
//     excerpt: true;
//     coverImage: true;
//     category: true;
//     author: true;
//     featured: true;
//     readTime: true;
//     publishedAt: true;
//   };
// }>;
