"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { editorPick } from "@/lib/news";

export default function EditorPick() {
  return (
    <section className="relative py-40">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Editor's Pick
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h2
            className="
              mt-6

              max-w-4xl

              text-3xl

              font-black

              leading-[0.9]

              tracking-[-0.05em]

              md:text-7xl
            "
          >
            Stories shaping
            <br />
            conversations.
          </h2>
        </FadeInAlways>

        <div
          className="
            mt-24

            grid

            items-center

            gap-16

            lg:grid-cols-2
          "
        >
          {/* IMAGE */}

          <FadeInAlways delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="
                group

                relative

                aspect-[4/5]

                overflow-hidden

                rounded-[40px]
              "
            >
              <Image
                src={editorPick.image}
                alt={editorPick.title}
                fill
                className="
                  object-cover

                  transition-transform

                  duration-700

                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute left-8 top-8">
                <span
                  className="
                    rounded-full

                    bg-white/15

                    px-5

                    py-2

                    text-xs

                    uppercase

                    tracking-[0.35em]

                    text-white

                    backdrop-blur
                  "
                >
                  {editorPick.category}
                </span>
              </div>
            </motion.div>
          </FadeInAlways>

          {/* CONTENT */}

          <FadeInAlways delay={0.3}>
            <div>
              <p
                className="
                  text-sm

                  uppercase

                  tracking-[0.35em]

                  text-pius-red
                "
              >
                {editorPick.date}
              </p>

              <h3
                className="
                  mt-6
                  text-2xl

                  md:text-4xl

                  font-black

                  leading-tight

                  lg:text-6xl
                "
              >
                {editorPick.title}
              </h3>

              <p
                className="
                  mt-8

                  text-lg

                  leading-relaxed

                  text-muted-foreground
                "
              >
                {editorPick.description}
              </p>

              <Link
                href="#"
                className="
                  group

                  mt-12

                  inline-flex

                  items-center

                  gap-4

                  rounded-full

                  bg-pius-red

                  px-8

                  py-5

                  font-semibold

                  text-white

                  transition-all

                  duration-300

                  hover:gap-6
                "
              >
                Read Story
                <ArrowUpRight
                  className="
                    transition-transform

                    duration-300

                    group-hover:rotate-45
                  "
                />
              </Link>
            </div>
          </FadeInAlways>
        </div>
      </div>
    </section>
  );
}
