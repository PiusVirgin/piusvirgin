"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type NewsCardProps = {
  story: {
    id: number;
    image: string;
    category: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
  };
};

export default function NewsCard({ story }: NewsCardProps) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="
        group

        overflow-hidden

        rounded-[32px]

        border

        border-border

        bg-background

        transition-shadow

        hover:shadow-2xl
      "
    >
      {/* IMAGE */}

      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="
            object-cover

            transition-transform

            duration-700

            group-hover:scale-110
          "
        />

        <div className="absolute left-5 top-5">
          <span
            className="
              rounded-full

              bg-white/90

              px-4

              py-2

              text-[10px]
              md:text-xs

              font-semibold

              uppercase

              tracking-[0.25em]

              text-pius-red

              backdrop-blur
            "
          >
            {story.category}
          </span>
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-4 md:p-8">
        <h3
          className="
            text-[20px]

            md:text-3xl
            font-black

            leading-tight

            transition-colors

            group-hover:text-pius-red
          "
        >
          {story.title}
        </h3>

        <p
          className="
            mt-5

            leading-relaxed

            text-muted-foreground
          "
        >
          {story.excerpt}
        </p>

        <div
          className="
            mt-8

            flex

            items-center

            justify-between
          "
        >
          <div>
            <p className="text-sm font-medium">{story.date}</p>

            <p className="text-sm text-muted-foreground">{story.readTime}</p>
          </div>

          <Link
            href="#"
            className="
              flex

              h-12
              w-12

              items-center

              justify-center

              rounded-full

              bg-pius-red

              text-white

              transition-transform

              duration-300

              group-hover:rotate-45
            "
          >
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
