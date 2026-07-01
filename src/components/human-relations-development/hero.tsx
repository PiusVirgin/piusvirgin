"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeInAlways from "@/components/motion/FadeInAlways";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-40">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            right-[-250px]
            top-[-150px]

            h-[700px]
            w-[700px]

            rounded-full

            bg-pius-red/5

            blur-[180px]
          "
        />

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            absolute

            left-1/2
            top-8

            -translate-x-1/2

            whitespace-nowrap

            text-[15vw]

            font-black

            tracking-[-0.08em]

            text-foreground
          "
        >
          PEOPLE
        </motion.h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <FadeInAlways>
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Mentoring • Counselling • Education • Consulting
              </p>
            </FadeInAlways>

            <FadeInAlways delay={0.1}>
              <h1
                className="
                  mt-8

                  text-5xl
                  font-black

                  leading-[0.9]

                  tracking-[-0.05em]

                  md:text-7xl
                "
              >
                We build the city
                <br />
                in vain if we do
                <br />
                not first build
                <br />
                the man.
              </h1>
            </FadeInAlways>

            <FadeInAlways delay={0.2}>
              <p
                className="
                  mt-10

                  max-w-xl

                  text-lg

                  leading-relaxed

                  text-muted-foreground
                "
              >
                Empowering individuals, strengthening teams, and developing
                organizations through world-class mentoring, education,
                consulting and professional development programs.
              </p>
            </FadeInAlways>

            <FadeInAlways delay={0.3}>
              <div className="mt-12 flex flex-wrap gap-5">
                <button
                  className="
                    rounded-full

                    bg-pius-red

                    px-8
                    py-4

                    font-semibold

                    text-white

                    transition

                    hover:scale-105
                  "
                >
                  Get Started
                </button>

                <button
                  className="
                    rounded-full

                    border

                    border-border

                    px-8
                    py-4

                    font-semibold

                    transition

                    hover:border-pius-red
                    hover:text-pius-red
                  "
                >
                  View Programs
                </button>
              </div>
            </FadeInAlways>
          </div>

          {/* RIGHT */}

          <FadeInAlways delay={0.2}>
            <div
              className="
                relative

                aspect-[4/5]

                overflow-hidden

                rounded-[36px]
              "
            >
              <Image
                src="/images/human-relations-hero.jpg"
                alt="Human Relations & Development"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Floating Quote Card */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="
                  absolute

                  bottom-8
                  left-8

                  max-w-xs

                  rounded-3xl

                  bg-white/90

                  p-6

                  backdrop-blur
                "
              >
                <p className="text-sm uppercase tracking-[0.3em] text-pius-red">
                  Our Mission
                </p>

                <p className="mt-4 leading-relaxed">
                  Helping individuals and organizations unlock their full
                  potential through continuous learning and leadership
                  development.
                </p>
              </motion.div>
            </div>
          </FadeInAlways>
        </div>
      </div>
    </section>
  );
}
