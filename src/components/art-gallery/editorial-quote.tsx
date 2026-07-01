"use client";

import { motion } from "framer-motion";

import FadeInAlways from "@/components/motion/FadeInAlways";

export default function EditorialQuote() {
  return (
    <section className="relative overflow-hidden py-56">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <motion.h2
          initial={{
            opacity: 0,
            scale: 1.2,
          }}
          whileInView={{
            opacity: 0.03,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            pointer-events-none

            absolute

            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            whitespace-nowrap

            text-[18vw]

            font-black

            tracking-[-0.08em]

            text-foreground
          "
        >
          CREATE
        </motion.h2>

        <div
          className="
            absolute

            left-1/2
            top-1/2

            h-[700px]
            w-[700px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-pius-red/10

            blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <FadeInAlways>
          <p
            className="
              text-xs

              uppercase

              tracking-[0.35em]

              text-muted-foreground
            "
          >
            Editorial Thought
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.15}>
          <blockquote
            className="
              mt-12

              text-4xl

              font-black

              leading-tight

              tracking-[-0.04em]

              md:text-6xl

              lg:text-7xl
            "
          >
            “Art enables us
            <br />
            to find ourselves
            <br />
            and lose ourselves
            <br />
            at the same time.”
          </blockquote>
        </FadeInAlways>

        <FadeInAlways delay={0.3}>
          <p
            className="
              mx-auto

              mt-12

              max-w-2xl

              text-lg

              leading-relaxed

              text-muted-foreground
            "
          >
            Every exhibition begins with a single idea. Every collection tells a
            story. Every visitor leaves with a different perspective.
          </p>
        </FadeInAlways>
      </div>
    </section>
  );
}
