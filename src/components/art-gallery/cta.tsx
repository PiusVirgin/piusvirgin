"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import FadeInAlways from "@/components/motion/FadeInAlways";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-44">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute

            left-1/2
            top-1/2

            h-[800px]
            w-[800px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-pius-red/10

            blur-[220px]
          "
        />

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
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
          "
        >
          INSPIRE
        </motion.h2>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Become Part of the Story
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.15}>
          <h2
            className="
              mt-8

              text-5xl

              font-black

              leading-[0.9]

              tracking-[-0.05em]

              md:text-7xl
            "
          >
            Creativity deserves
            <br />
            to be shared.
          </h2>
        </FadeInAlways>

        <FadeInAlways delay={0.3}>
          <p
            className="
              mx-auto

              mt-10

              max-w-2xl

              text-lg

              leading-relaxed

              text-muted-foreground
            "
          >
            Whether you're an artist, collector, creative organization or
            cultural enthusiast, we'd love to connect and explore new
            opportunities together.
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.45}>
          <div className="mt-14 flex justify-center">
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

                font-medium

                text-white

                transition-all
                duration-300

                hover:gap-4

                hover:shadow-[0_20px_60px_rgba(220,38,38,.35)]
              "
            >
              Let's Connect
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </FadeInAlways>
      </div>
    </section>
  );
}
