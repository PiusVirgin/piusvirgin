import Image from "next/image";

import Container from "@/components/layout/container";

import FeaturedOverlay from "./featured-overlay";

import { PublicNews } from "@/types/news";

interface FeaturedNewsProps {
  article: PublicNews;
}

export default function FeaturedNews({
  article,
}: FeaturedNewsProps) {
  return (
    <section>
      <Container>
        <div className="relative h-[650px] overflow-hidden rounded-[40px]">
          <Image
            src={article.coverImage ?? "/placeholder.jpg"}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />

          <FeaturedOverlay article={article} />
        </div>
      </Container>
    </section>
  );
}
