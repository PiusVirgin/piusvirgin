"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type StoryCardProps = {
  story: {
    title: string;
    category: string;
    image: string;
    readTime: string;
  };
};

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <motion.article whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Link href="#" className="group block">
        <div
          className="
            relative
            aspect-[4/3]
            overflow-hidden
            rounded-3xl
          "
        >
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="
              object-cover
              transition
              duration-700
              group-hover:scale-110
            "
          />
        </div>

        <p
          className="
            mt-5
            text-xs
            font-semibold
            uppercase
            tracking-[0.3em]
            text-pius-red
          "
        >
          {story.category}
        </p>

        <h3
          className="
            mt-3
            text-xl
            font-bold
            leading-snug
            transition-colors
            group-hover:text-pius-red
          "
        >
          {story.title}
        </h3>

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            text-sm
            text-muted-foreground
          "
        >
          <span>{story.readTime}</span>

          <ArrowUpRight
            className="
              transition-transform
              group-hover:rotate-45
            "
            size={18}
          />
        </div>
      </Link>
    </motion.article>
  );
}
