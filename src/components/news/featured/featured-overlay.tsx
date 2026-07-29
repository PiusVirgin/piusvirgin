import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import FeaturedMeta from "./featured-meta";

import { PublicNews } from "@/types/news";

interface FeaturedOverlayProps {
  article: PublicNews;
}

export default function FeaturedOverlay({
  article,
}: FeaturedOverlayProps) {
  return (
    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black via-black/40 to-transparent">
      <div className="max-w-3xl p-10 text-white">
        <span className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest">
          {article.category}
        </span>

        <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
          {article.title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-white/80">
          {article.excerpt}
        </p>

        <FeaturedMeta
          author={article.author}
          readTime={article.readTime}
          publishedAt={article.publishedAt}
        />

        <Button
          asChild
          className="mt-8"
          size="lg"
        >
          <Link href={`/news/${article.slug}`}>
            Read Full Story

            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
