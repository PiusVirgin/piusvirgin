import Image from "next/image";

import Container from "@/components/layout/container";
// import ArticleShare from "./article/article-share";

interface ArticleHeaderProps {
  article: {
    title: string;
    category: string;
    author: string;
    readTime: number | null;
    publishedAt: Date | null;
    coverImage: string | null;
  };
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {article.category}
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-7xl">
            {article.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>{article.author}</span>

            <span>•</span>

            <span>
              {article.publishedAt
                ? new Date(article.publishedAt).toLocaleDateString()
                : ""}
            </span>

            <span>•</span>

            <span>{article.readTime} min read</span>
          </div>

          {article.coverImage && (
            <div className="relative mt-12 aspect-[16/8] overflow-hidden rounded-3xl">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
