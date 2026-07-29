import { getPublishedNews } from "@/services/news.service";

import NewsHero from "@/components/news/hero/hero";
import FeaturedNews from "@/components/news/featured/featured-news";
import NewsGrid from "@/components/news/news-grid";
import Newsletter from "@/components/news/newsletter/newsletter";

const NewsPage = async () => {

  const articles = await getPublishedNews();
  const featured = articles.find((article) => article.featured) ?? articles[0];
  const remaining = articles.filter((article) => article.id !== featured?.id);


  return (
    <main className="space-y-24 pb-24">
      <NewsHero articles={articles} />
      {featured && <FeaturedNews article={featured} />}
      <NewsGrid articles={remaining} />
      <Newsletter />
    </main>
  );
}

export default NewsPage
