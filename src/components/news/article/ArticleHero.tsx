"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { article } from "@/lib/news";
import ArticleMeta from "./ArticleMeta";

export default function ArticleHero() {
  return (
    <section className="pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Category */}

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            inline-flex
            rounded-full
            bg-pius-red/10
            px-5
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.3em]
            text-pius-red
          "
        >
          {article.category}
        </motion.span>

        {/* Title */}

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="
            mt-8
            text-5xl
            font-black
            leading-tight
            md:text-7xl
          "
        >
          {article.title}
        </motion.h1>

        {/* Excerpt */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            mt-8
            max-w-3xl
            text-xl
            leading-relaxed
            text-muted-foreground
          "
        >
          {article.excerpt}
        </motion.p>
      </div>

      {/* Hero Image */}

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="
          mx-auto
          mt-16
          max-w-7xl
          px-6
        "
      >
        <div
          className="
            relative
            aspect-[16/8]
            overflow-hidden
            rounded-[36px]
          "
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>
      <ArticleMeta/>
    </section>
  );
}
