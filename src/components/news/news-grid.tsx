import Container from "@/components/layout/container";

import NewsCard from "./news-card";

interface NewsGridProps {
  articles: any[];
}

export default function NewsGrid({ articles }: NewsGridProps) {
  return (
    <section id="latest-news" className="py-20">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Latest Stories
            </span>

            <h2 className="mt-3 text-4xl font-black">Recent Articles</h2>

            <p className="mt-4 max-w-2xl text-muted-foreground">
              Stay informed with our latest stories, insights, announcements and
              updates across every sector we serve.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
