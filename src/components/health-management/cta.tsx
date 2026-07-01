"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import FadeInAlways from "@/components/motion/FadeInAlways";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-40">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
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

        <h2
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

            text-foreground/5
          "
        >
          WELLNESS
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Begin Today
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
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
            Better health starts
            <br />
            with one conversation.
          </h2>
        </FadeInAlways>

        <FadeInAlways delay={0.2}>
          <p
            className="
              mx-auto
              mt-8

              max-w-2xl

              text-lg

              leading-relaxed

              text-muted-foreground
            "
          >
            Whether you need health education, seminars or professional wellness
            services, we're ready to support your journey toward a healthier
            future.
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.3}>
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
              Schedule a Consultation
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </FadeInAlways>
      </div>
    </section>
  );
}
