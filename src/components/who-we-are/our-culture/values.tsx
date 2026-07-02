"use client";

import { motion } from "framer-motion";
import FadeInAlways from "@/components/motion/FadeInAlways";

import { coreValues } from "@/lib/our-culture";

export default function Values() {
  return (
    <section className="relative overflow-hidden py-40">
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.025 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            absolute

            left-1/2
            top-24

            -translate-x-1/2

            whitespace-nowrap

            text-[16vw]

            font-black

            tracking-[-0.08em]

            text-foreground
          "
        >
          VALUES
        </motion.h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Our Core Values
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h2
            className="
              mt-6

              max-w-5xl

              text-3xl

              font-black

              leading-[0.9]

              tracking-[-0.05em]

              md:text-7xl
            "
          >
            The values
            <br />
            behind every
            <br />
            decision.
          </h2>
        </FadeInAlways>

        <div className="mt-28 space-y-10">
          {coreValues.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.015,
              }}
              className="
                group

                relative

                overflow-hidden

                rounded-[40px]

                border

                border-border

                bg-background

                p-8

                md:p-14
              "
            >
              {/* Huge Background Number */}

              <span
                className="
                  absolute

                  right-6
                  top-2

                  text-[7rem]

                  font-black

                  leading-none

                  text-pius-red/5

                  transition-all

                  duration-500

                  group-hover:text-pius-red/10

                  md:text-[10rem]
                  hidden
                  md:block
                "
              >
                {item.number}
              </span>

              <div className="relative z-10">
                <p
                  className="
                    text-sm

                    uppercase

                    tracking-[0.35em]

                    text-pius-red
                  "
                >
                  {item.subtitle}
                </p>

                <h3
                  className="
                    mt-5

                    text-3xl

                    font-black

                    transition-colors

                    duration-500

                    group-hover:text-pius-red

                    md:text-6xl
                  "
                >
                  {item.value}
                </h3>

                <motion.div
                  whileHover={{
                    width: 180,
                  }}
                  className="
                    mt-8

                    h-[2px]

                    w-20

                    bg-pius-red
                  "
                />

                <p
                  className="
                    mt-8

                    max-w-3xl

                    text-lg

                    leading-relaxed

                    text-muted-foreground
                  "
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
