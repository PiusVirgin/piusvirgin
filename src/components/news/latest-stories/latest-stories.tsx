"use client";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { latestStories, trendingStories } from "@/lib/news";
import NewsCard from "../news-card/news-card";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LatestStories() {
  return (
    <section className="relative py-40">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Latest Stories
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h2
            className="
              mt-6

              text-5xl

              font-black

              leading-[0.9]

              tracking-[-0.05em]

              md:text-7xl
            "
          >
            Fresh updates
            <br />
            every day.
          </h2>
        </FadeInAlways>

        <div className="mt-24 grid gap-20 lg:grid-cols-[1fr_340px]">
          {/* LEFT */}

          <div className="grid gap-10 md:grid-cols-2">
            {latestStories.map((story, index) => (
              <FadeInAlways key={story.id} delay={index * 0.1}>
                <NewsCard story={story} />
              </FadeInAlways>
            ))}
          </div>

          {/* RIGHT */}

          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <p
                className="
                  text-xs

                  uppercase

                  tracking-[0.35em]

                  text-muted-foreground
                "
              >
                Trending
              </p>

              <div className="mt-10 space-y-8">
                {trendingStories.map((story, index) => (
                  <motion.div
                    key={story.id}
                    whileHover={{ x: 8 }}
                    className="
                      group

                      border-b

                      border-border

                      pb-8
                    "
                  >
                    <div className="flex gap-5">
                      <span
                        className="
                          text-5xl

                          font-black

                          text-pius-red/20

                          transition-colors

                          group-hover:text-pius-red
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p
                          className="
                            text-xs

                            uppercase

                            tracking-[0.35em]

                            text-pius-red
                          "
                        >
                          {story.category}
                        </p>

                        <Link href="#">
                          <h3
                            className="
                              mt-3

                              font-bold

                              leading-snug

                              transition-colors

                              group-hover:text-pius-red
                            "
                          >
                            {story.title}
                          </h3>
                        </Link>

                        <Link
                          href="#"
                          className="
                            mt-4

                            inline-flex

                            items-center

                            gap-2

                            text-sm

                            font-medium
                          "
                        >
                          Read
                          <ArrowUpRight
                            size={16}
                            className="
                              transition-transform

                              group-hover:rotate-45
                            "
                          />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
