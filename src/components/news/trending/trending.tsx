"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { trendingStories } from "@/lib/news";

export default function Trending() {
  return (
    <section className="relative py-40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Trending
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
            What everyone
            <br />
            is reading.
          </h2>
        </FadeInAlways>

        <div className="mt-24 space-y-14">
          {trendingStories.map((story, index) => (
            <motion.div
              key={story.id}
              whileHover={{ x: 12 }}
              transition={{ duration: 0.3 }}
              className="
                group

                grid

                gap-8

                border-b

                border-border

                pb-14

                md:grid-cols-[120px_1fr_auto]
              "
            >
              {/* NUMBER */}

              <h3
                className="
                  text-6xl

                  font-black

                  text-pius-red/20

                  transition-colors

                  duration-300

                  group-hover:text-pius-red
                "
              >
                {String(index + 1).padStart(2, "0")}
              </h3>

              {/* CONTENT */}

              <div>
                <span
                  className="
                    text-xs

                    uppercase

                    tracking-[0.35em]

                    text-pius-red
                  "
                >
                  {story.category}
                </span>

                <h3
                  className="
                    mt-5

                    text-3xl

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

                    max-w-3xl

                    leading-relaxed

                    text-muted-foreground
                  "
                >
                  {story.excerpt}
                </p>
              </div>

              {/* BUTTON */}

              <Link
                href="#"
                className="
                  flex

                  h-14
                  w-14

                  items-center

                  justify-center

                  self-start

                  rounded-full

                  border

                  transition-all

                  duration-300

                  group-hover:bg-pius-red

                  group-hover:text-white

                  group-hover:rotate-45
                "
              >
                <ArrowUpRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
