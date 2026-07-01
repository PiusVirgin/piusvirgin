"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import FadeInAlways from "@/components/motion/FadeInAlways";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        {/* Glow */}

        <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-pius-red/10 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-pius-red/5 blur-[180px]" />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(to_right,rgba(120,120,120,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,.08)_1px,transparent_1px)]
            bg-size-[80px_80px]

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
            opacity: 0.03,
            y: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          className="
            absolute
            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            whitespace-nowrap

            text-[16vw]

            font-black

            tracking-[-0.08em]
          "
        >
          GALLERY
        </motion.h2>
      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Art Gallery
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h1
            className="
              mt-8

              text-[2.8rem]

              font-black

              leading-[0.82]

              tracking-[-0.07em]

              md:text-[5rem]

            "
          >
            WHERE
            <br />
            ART MEETS
            <br />
            IMAGINATION
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
            A curated destination celebrating creativity, culture and visual
            storytelling through inspiring exhibitions, artistic collaborations
            and immersive experiences.
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.3}>
          <div className="mt-14 flex flex-wrap gap-5">
            <Link
              href="/who-we-are/contact-us"
              className="
                inline-flex

                h-14

                items-center

                gap-2

                rounded-full

                bg-pius-red

                px-8

                text-white

                transition-all

                hover:gap-4
              "
            >
              Explore Gallery
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </FadeInAlways>
      </div>
    </section>
  );
}
