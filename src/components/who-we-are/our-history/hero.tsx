"use client";

import { motion } from "framer-motion";
import FadeInAlways from "@/components/motion/FadeInAlways";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow */}

        <div
          className="
            absolute
            right-[-200px]
            top-[-120px]

            h-[700px]
            w-[700px]

            rounded-full

            bg-pius-red/10

            blur-[180px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(to_right,rgba(120,120,120,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,.08)_1px,transparent_1px)]

            bg-[size:80px_80px]

            opacity-20
          "
        />

        {/* Watermark */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 0.04,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            absolute

            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            whitespace-nowrap

            text-[17vw]

            font-black

            tracking-[-0.08em]

            text-foreground
          "
        >
          HISTORY
        </motion.h2>
      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 mt-[80px]">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Since 2000
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h1
            className="
              mt-8

              max-w-6xl

              text-[2.6rem]

              font-black

              leading-[0.85]

              tracking-[-0.06em]

              md:text-[5rem]

            "
          >
            Building people.
            <br />
            Building businesses.
            <br />
            Building tomorrow.
          </h1>
        </FadeInAlways>

        <FadeInAlways delay={0.2}>
          <p
            className="
              mt-10

              max-w-3xl

              text-lg

              leading-relaxed

              text-muted-foreground

              md:text-xl
            "
          >
            Founded in 2000 by Festus Okorie, PiusVirgin Communications Limited
            has grown into a multidisciplinary organization committed to helping
            businesses, institutions and communities succeed through innovation,
            professionalism and lasting partnerships.
          </p>
        </FadeInAlways>
      </div>

      {/* Bottom Line */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
        }}
        className="
          absolute

          bottom-12

          left-1/2

          hidden

          -translate-x-1/2

          lg:flex

          items-center

          gap-6
        "
      >
        <div className="h-px w-24 bg-border" />

        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
          Our Story
        </p>

        <div className="h-px w-24 bg-border" />
      </motion.div>
    </section>
  );
}
