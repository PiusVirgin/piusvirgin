import { notFound } from "next/navigation";

import NewsForm from "@/components/admin/news/news-form";
import { getNewsArticle } from "@/services/news.service";

interface EditNewsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditNewsPage({ params }: EditNewsPageProps) {
  const { id } = await params;

  const article = await getNewsArticle(id);

  if (!article) {
    notFound();
  }

  return (
    <NewsForm
      initialData={{
        id: article.id,
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        content: article.content,
        coverImage: article.coverImage,
        category: article.category,
        author: article.author,
        featured: article.featured,
        published: article.published,
        readTime: article.readTime,
      }}
    />
  );
}
