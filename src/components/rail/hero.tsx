"use client";

import Link from "next/link";
import Image from "next/image";
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
          right-[-15%]
          top-[-10%]

          h-[850px]
          w-[850px]

          rounded-full

          bg-pius-red/15

          blur-[220px]
        "
        />

        <div
          className="
          absolute
          left-[-15%]
          bottom-[-20%]

          h-[700px]
          w-[700px]

          rounded-full

          bg-pius-red/10

          blur-[200px]
        "
        />

        {/* Railway Grid */}

        <div
          className="
          absolute
          inset-0

          bg-[linear-gradient(to_right,rgba(120,120,120,.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,.07)_1px,transparent_1px)]

          bg-size-[90px_90px]

          opacity-20
        "
        />

        {/* Watermark */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 100,
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

          whitespace-nowrap

          text-[18vw]

          font-black

          tracking-[-0.08em]

          text-black/4
        "
        >
          RAILWAYS
        </motion.h2>
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="
        relative
        z-10

        mx-auto

        grid

        max-w-7xl

        gap-20

        px-6

        py-32

        lg:grid-cols-2
        lg:items-center
      "
      >
        {/* LEFT */}

        <div>
          <FadeInAlways>
            <p
              className="
              text-xs

              uppercase

              tracking-[0.35em]

              text-muted-foreground
            "
            >
              Railway • Excursions • Adventure
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

              xl:text-[9rem]
            "
            >
              EXPLORE
              <br />
              NIGERIA
              <br />
              BY RAIL
            </h1>
          </FadeInAlways>

          <FadeInAlways delay={0.2}>
            <p
              className="
              mt-10

              max-w-2xl

              text-lg

              leading-relaxed

              text-muted-foreground

              md:text-xl
            "
            >
              Experience safe, comfortable and unforgettable railway journeys
              connecting people, businesses and communities across Nigeria.
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
                Book Your Journey
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/what-we-do"
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
                Explore Experiences
              </Link>
            </div>
          </FadeInAlways>

          {/* Small Stats */}

          <FadeInAlways delay={0.45}>
            <div className="mt-20 flex flex-wrap gap-8">
              <div>
                <h3 className="text-2xl md:text-4xl font-black">100%</h3>

                <p className="mt-2 text-muted-foreground">Safety First</p>
              </div>

              <div>
                <h3 className="text-2xl md:text-4xl font-black">20+</h3>

                <p className="mt-2 text-muted-foreground">Destinations</p>
              </div>

              <div>
                <h3 className="text-2xl md:text-4xl font-black">24/7</h3>

                <p className="mt-2 text-muted-foreground">Support</p>
              </div>
            </div>
          </FadeInAlways>
        </div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 120,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="relative"
        >
          {/* Train */}

          <div
            className="
            relative

            aspect-[4/5]

            overflow-hidden

            rounded-[42px]

            border

            border-border

            bg-card

            shadow-[0_40px_120px_rgba(0,0,0,.12)]
          "
          >
            <Image
              src="/images/train-hero.png"
              alt="Rail Experience"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-10 left-10 hidden">
              <p
                className="
                text-xs

                uppercase

                tracking-[0.35em]

                text-white/70
              "
              >
                Featured Journey
              </p>

              <h3
                className="
                mt-4

                text-5xl

                font-black

                text-white
              "
              >
                Lagos
                <br />
                to
                <br />
                Ibadan
              </h3>
            </div>
          </div>

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
            }}
            className="
            absolute

            -left-14

            bottom-20

            hidden

            w-72

            rounded-[30px]

            border

            border-border

            bg-background/80

            p-7

            shadow-2xl

            backdrop-blur-3xl


          "
          >
            <p
              className="
              text-xs

              uppercase

              tracking-[0.35em]

              text-muted-foreground
            "
            >
              Route
            </p>

            <h4 className="mt-5 text-3xl font-bold">
              Lagos
              <br />
              →
              <br />
              Ibadan
            </h4>

            <div className="mt-8 flex justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>

                <h5 className="font-bold">2 hrs</h5>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Comfort</p>

                <h5 className="font-bold">Premium</h5>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        className="
        absolute

        bottom-10

        left-1/2

        hidden

        -translate-x-1/2

        items-center

        gap-5

        lg:flex
      "
      >
        <div className="h-px w-20 bg-border" />

        <p
          className="
          text-xs

          uppercase

          tracking-[0.35em]

          text-muted-foreground
        "
        >
          Board The Journey
        </p>

        <div className="h-px w-20 bg-border" />
      </motion.div>
    </section>
  );
}
