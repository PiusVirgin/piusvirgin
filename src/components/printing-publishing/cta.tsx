"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import FadeInAlways from "@/components/motion/FadeInAlways";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-52">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0">
        {/* Main Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute

            left-1/2
            top-1/2

            h-[900px]
            w-[900px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-pius-red

            blur-[240px]
          "
        />

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
            y: 60,
          }}
          whileInView={{
            opacity: 0.04,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{
            once: true,
          }}
          className="
            absolute

            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            whitespace-nowrap

            text-[22vw]

            font-black

            tracking-[-0.08em]

            text-foreground

            pointer-events-none
            select-none
          "
        >
          CREATE
        </motion.h2>

        {/* Floating Papers */}

        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [-8, -3, -8],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="
            absolute

            left-[10%]
            top-28

            hidden

            h-56
            w-40

            rounded-3xl

            border

            border-border

            bg-background/80

            shadow-2xl

            backdrop-blur-xl

            lg:block
          "
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [8, 3, 8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
            absolute

            bottom-28
            right-[10%]

            hidden

            h-72
            w-52

            rounded-3xl

            border

            border-border

            bg-background/80

            shadow-2xl

            backdrop-blur-xl

            lg:block
          "
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <FadeInAlways>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-muted-foreground
            "
          >
            Let's Build Something Extraordinary
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h2
            className="
              mt-8

              text-5xl

              font-black

              leading-[0.88]

              tracking-[-0.06em]

              md:text-7xl

              xl:text-[7rem]
            "
          >
            READY TO CREATE
            <br />
            SOMETHING
            <br />
            REMARKABLE?
          </h2>
        </FadeInAlways>

        <FadeInAlways delay={0.2}>
          <p
            className="
              mx-auto

              mt-10

              max-w-3xl

              text-xl

              leading-relaxed

              text-muted-foreground
            "
          >
            Every publication begins with an idea.
            <br />
            Together we'll transform yours into something people will read,
            remember and proudly share.
          </p>
        </FadeInAlways>
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="
    mt-10

    text-sm

    uppercase

    tracking-[0.4em]

    text-pius-red
  "
        >
          Ideas → Design → Print → Publish
        </motion.p>

        <FadeInAlways delay={0.3}>
          <div className="mt-16 flex flex-wrap justify-center gap-5">
            <Link
              href="/who-we-are/contact-us"
              className="
                group

                inline-flex

                h-16

                items-center

                gap-3

                rounded-full

                bg-pius-red

                px-10

                text-lg
                font-semibold

                text-white

                shadow-xl

                transition-all

                duration-500

                hover:scale-105

                hover:gap-5
              "
            >
              Start Your Project
              <ArrowUpRight
                className="
                  transition-transform

                  duration-500

                  group-hover:rotate-45
                "
              />
            </Link>

            <Link
              href="/what-we-do"
              className="
                inline-flex

                h-16

                items-center

                rounded-full

                border

                border-border

                bg-background/70

                px-10

                text-lg

                backdrop-blur-xl

                transition-all

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
