"use client";

import Image from "next/image";
import { Clock3, CalendarDays } from "lucide-react";
import { article } from "@/lib/news";

export default function ArticleMeta() {
  return (
    <section className="py-10">
      <div
        className="
          mx-auto
          flex
          max-w-5xl
          flex-wrap
          items-center
          justify-between
          gap-6
          px-6
        "
      >
        {/* Author */}

        <div className="flex items-center gap-4">
          <Image
            src={article.avatar}
            alt={article.author}
            width={56}
            height={56}
            className="rounded-full"
          />

          <div>
            <p className="font-semibold">{article.author}</p>

            <p className="text-sm text-muted-foreground">
              PiusVirgin Editorial
            </p>
          </div>
        </div>

        {/* Meta */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-6
            text-sm
            text-muted-foreground
          "
        >
          <span className="flex items-center gap-2">
            <CalendarDays size={16} />
            {article.date}
          </span>

          <span className="flex items-center gap-2">
            <Clock3 size={16} />
            {article.readTime}
          </span>
        </div>
      </div>
    </section>
  );
}
