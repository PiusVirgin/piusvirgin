"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type FeaturedHeroProps = {
  story: {
    title: string;
    category: string;
    image: string;
    author: string;
    date: string;
    readTime: string;
  };
};

export default function FeaturedHero({ story }: FeaturedHeroProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className="
        overflow-hidden
        rounded-[36px]
        border
        border-border
        bg-card
      "
    >
      <div className="grid lg:grid-cols-2">
        {/* Image */}

        <div className="relative h-[350px] lg:h-[520px]">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="
              object-cover
              transition
              duration-700
              hover:scale-105
            "
          />
        </div>

        {/* Content */}

        <div
          className="
            flex
            flex-col
            justify-center
            p-8
            md:p-12
          "
        >
          <span
            className="
              w-fit
              rounded-full
              bg-pius-red/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-widest
              text-pius-red
            "
          >
            {story.category}
          </span>

          <h2
            className="
              mt-8
              text-3xl
              font-black
              leading-tight
              md:text-5xl
            "
          >
            {story.title}
          </h2>

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
              text-sm
              text-muted-foreground
            "
          >
            <span>{story.author}</span>

            <span>•</span>

            <span>{story.date}</span>

            <span>•</span>

            <span>{story.readTime}</span>
          </div>

          <Link
            href="#"
            className="
              mt-12
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-full
              bg-pius-red
              px-6
              py-4
              font-medium
              text-white
              transition
              hover:scale-105
            "
          >
            Read Story
            <ArrowUpRight
              size={18}
              className="transition group-hover:rotate-45"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
