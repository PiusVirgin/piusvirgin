import Container from "@/components/layout/container";
import HeroContent from './hero-content'
import HeroCollage from "./hero-collage";

import { PublicNews } from "@/types/news";

interface NewsHeroProps {
  articles: PublicNews[];
}

const NewsHeroPage = ({ articles }: NewsHeroProps) => {
  return (
    <section className="relative overflow-hidden py-28">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <HeroContent />
          <HeroCollage articles={articles.slice(0, 3)} />
        </div>
      </Container>
    </section>
  );
};

export default NewsHeroPage;
