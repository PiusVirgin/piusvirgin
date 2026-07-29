"use client";

import { article } from "@/lib/news";
import ShareButtons from "./ShareButtons";

export default function ArticleContent() {
  return (
    <section className="pb-32">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-16
          px-6
          lg:grid-cols-[80px_1fr]
        "
      >
        <ShareButtons />

        <article
          className="
            prose
            prose-lg
            max-w-none
          "
        >
          {/* We'll improve this tomorrow */}
        </article>
      </div>
    </section>
  );
}
