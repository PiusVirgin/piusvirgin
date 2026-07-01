"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import FadeInAlways from "@/components/motion/FadeInAlways";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-40">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            absolute

            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            whitespace-nowrap

            text-[20vw]

            font-black

            tracking-[-0.08em]

            text-foreground
          "
        >
          GROWTH
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

            bg-pius-red/5

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
            Ready To Begin?
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
            Ready to invest
            <br />
            in your people?
          </h2>
        </FadeInAlways>

        <FadeInAlways delay={0.2}>
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
            Great organizations are built by developing great people. Let us
            help your team grow through mentoring, education, consulting and
            transformational learning experiences.
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.3}>
          <div className="mt-14 flex flex-wrap justify-center gap-5">
            <Link
              href="/who-we-are/contact-us"
              className="
                inline-flex

                items-center
                gap-2

                rounded-full

                bg-pius-red

                px-8
                py-4

                font-semibold

                text-white

                transition-all
                duration-300

                hover:gap-4
                hover:shadow-[0_20px_60px_rgba(220,38,38,.35)]
              "
            >
              Let's Talk

              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/services"
              className="
                inline-flex

                items-center

                rounded-full

                border

                border-border

                px-8
                py-4

                transition

                hover:bg-muted
              "
            >
              Explore More Services
            </Link>
          </div>
        </FadeInAlways>
      </div>
    </section>
  );
}
