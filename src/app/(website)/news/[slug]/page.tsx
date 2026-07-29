import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { getNewsBySlug, getRelatedNews } from "@/services/news.service";

import ArticleHeader from "@/components/news/article-header";
import ArticleContent from "@/components/news/article-content";
import RelatedNews from "@/components/news/related-news";
import ReadingProgress from "@/components/news/reading-progress";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}


export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = await getNewsBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000";

  return {
    title: article.title,
    description: article.excerpt,

    authors: [
      {
        name: article.author,
      },
    ],

    keywords: [
      article.category,
      article.author,
      "PIUSVIRGIN",
      "News",
    ],

    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${baseUrl}/news/${article.slug}`,
      type: "article",

      images: article.coverImage
        ? [article.coverImage]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,

      images: article.coverImage
        ? [article.coverImage]
        : [],
    },
  };
}


export default async function NewsDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const article = await getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = await getRelatedNews(article.category, article.id);

  return (
    <>
      <ReadingProgress />
      <ArticleHeader article={article} />
      <ArticleContent title={article.title} content={article.content} />
      <RelatedNews articles={related} />
    </>
  );
}
