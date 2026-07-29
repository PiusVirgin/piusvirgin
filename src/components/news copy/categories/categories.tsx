"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { categories } from "@/lib/news";

export default function Categories() {
  return (
    <section className="relative py-40">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Browse by Category
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h2
            className="
              mt-6

              max-w-4xl

              text-5xl

              font-black

              leading-[0.9]

              tracking-[-0.05em]

              md:text-7xl
            "
          >
            Explore stories
            <br />
            that matter.
          </h2>
        </FadeInAlways>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <FadeInAlways key={category.title} delay={index * 0.08}>
              <motion.div
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <Link
                  href={category.href}
                  className="
                    group

                    flex

                    h-full

                    flex-col

                    justify-between

                    rounded-[32px]

                    border

                    border-border

                    bg-background

                    p-10

                    transition-all

                    duration-500

                    hover:border-pius-red

                    hover:bg-pius-red

                    hover:text-white
                  "
                >
                  <div>
                    <p
                      className="
                        text-xs

                        uppercase

                        tracking-[0.35em]

                        text-pius-red

                        transition-colors

                        group-hover:text-white/70
                      "
                    >
                      Category
                    </p>

                    <h3
                      className="
                        mt-6

                        text-3xl

                        font-black

                        leading-tight
                      "
                    >
                      {category.title}
                    </h3>

                    <p
                      className="
                        mt-6

                        max-w-sm

                        leading-relaxed

                        text-muted-foreground

                        transition-colors

                        group-hover:text-white/80
                      "
                    >
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-14 flex items-center justify-between">
                    <span className="font-medium">Explore Stories</span>

                    <div
                      className="
                        flex

                        h-14
                        w-14

                        items-center

                        justify-center

                        rounded-full

                        border

                        transition-all

                        duration-300

                        group-hover:rotate-45

                        group-hover:bg-white

                        group-hover:text-pius-red
                      "
                    >
                      <ArrowUpRight />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </FadeInAlways>
          ))}
        </div>
      </div>
    </section>
  );
}
