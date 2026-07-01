"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import FadeInAlways from "@/components/motion/FadeInAlways";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glow */}
        <div
          className="
            absolute
            right-[-10%]
            top-[-10%]
            h-187.5
            w-187.5
            rounded-full
            bg-pius-red/20
            blur-[220px]
          "
        />

        <div
          className="
            absolute
            bottom-[-15%]
            left-[-10%]
            h-162.5
            w-162.5
            rounded-full
            bg-pius-red/10
            blur-[220px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(to_right,rgba(120,120,120,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,.08)_1px,transparent_1px)]
            bg-size-[80px_80px]

            dark:opacity-40
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
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            select-none
            whitespace-nowrap

            text-[18vw]
            font-black
            tracking-[-0.08em]

            text-black/3

          "
        >
          EDITORIAL
        </motion.h2>
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-375

          px-6

          py-32

          lg:px-12
          2xl:px-20
        "
      >
        <div className="max-w-6xl">
          <FadeInAlways direction="up">
            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-muted-foreground
              "
            >
              Printing • Publishing • Creative Communication
            </p>
          </FadeInAlways>

          <FadeInAlways delay={0.1}>
            <h1
              className="
                mt-8

                text-[4rem]
                font-black

                leading-[0.82]
                tracking-[-0.06em]

                md:text-[7rem]
                xl:text-[10rem]
                2xl:text-[11rem]
              "
            >
              ADVANCED
              <br />
              WRITING
              <br />
              PRINTING &
              <br />
              PUBLISHING
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
              We transform ideas into publications that educate, inspire and
              elevate brands—from books and magazines to corporate profiles,
              advertising campaigns and premium print experiences.
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
                  duration-300

                  hover:gap-4
                  hover:shadow-[0_20px_60px_rgba(220,38,38,.35)]
                "
              >
                Start Your Project
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="#services"
                className="
                  inline-flex
                  h-14
                  items-center
                  rounded-full

                  border
                  border-border

                  px-8

                  transition-all

                  hover:bg-muted
                "
              >
                Explore Services
              </Link>
            </div>
          </FadeInAlways>
        </div>

        {/* ================= FLOATING CARD ================= */}

        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [-1, 1, -1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="
            absolute

            right-[5vw]
            top-[18vh]

            hidden

            xl:block
          "
        >
          <div
            className="
              w-[320px]

              rounded-[32px]

              border
              border-border

              bg-background/60

              p-7

              backdrop-blur-3xl

              shadow-[0_30px_100px_rgba(0,0,0,0.12)]

              dark:shadow-[0_30px_100px_rgba(0,0,0,0.45)]
            "
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Featured Publication
            </p>

            <div className="mt-8 aspect-4/5 rounded-3xl bg-linear-to-br from-pius-red via-pius-red/80 to-black" />

            <h3 className="mt-8 text-2xl font-bold">
              Corporate
              <br />
              Publications
            </h3>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Premium magazines, annual reports, books, journals and editorial
              publications crafted with world-class design standards.
            </p>
          </div>
        </motion.div>

        {/* ================= SCROLL INDICATOR ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.3,
          }}
          className="
            absolute

            bottom-12
            left-6

            hidden

            lg:flex

            items-center
            gap-5
          "
        >
          <div className="h-px w-20 bg-border" />

          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-muted-foreground
            "
          >
            Scroll to Discover
          </p>
        </motion.div>
      </div>
    </section>
  );
}
