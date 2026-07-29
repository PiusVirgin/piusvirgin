"use client";

import Image from "next/image";


import { PublicNews } from "@/types/news";

interface NewsHeroProps {
  articles: PublicNews[];
}

export default function HeroCollage({
  articles,
}: NewsHeroProps) {
  return (
    <div className="relative hidden h-[600px] lg:block">
      {articles[0] && (
        <div className="absolute left-0 top-0 h-[360px] w-[260px] rotate-[-6deg] overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src={articles[0].coverImage!}
            alt={articles[0].title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {articles[1] && (
        <div className="absolute right-0 top-20 h-[300px] w-[220px] rotate-[5deg] overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src={articles[1].coverImage!}
            alt={articles[1].title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {articles[2] && (
        <div className="absolute bottom-0 left-28 h-[280px] w-[240px] rotate-[-2deg] overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src={articles[2].coverImage!}
            alt={articles[2].title}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
