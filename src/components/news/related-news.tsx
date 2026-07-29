import Container from "@/components/layout/container";

import NewsCard from "./news-card";

interface RelatedNewsProps {
  articles: any[];
}

export default function RelatedNews({ articles }: RelatedNewsProps) {
  if (!articles.length) return null;

  return (
    <section className="py-24 border-t">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Related Stories</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
