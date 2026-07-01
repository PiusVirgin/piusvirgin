"use client";

import { motion } from "framer-motion";
import FadeInAlways from "@/components/motion/FadeInAlways";

import { cultureCards } from "@/lib/our-culture";

export default function HowWeWork() {
  return (
    <section className="relative py-40">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            How We Work
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
            Built on teamwork.
            <br />
            Focused on impact.
          </h2>
        </FadeInAlways>

        <div className="mt-24 space-y-8">
          {cultureCards.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group

                rounded-[36px]

                border

                border-border

                bg-background

                p-8

                transition-all

                duration-500

                hover:border-pius-red/40

                hover:shadow-2xl

                md:p-12
              "
            >
              <div className="grid gap-8 lg:grid-cols-[120px_1fr]">
                {/* Number */}

                <p
                  className="
                    text-sm

                    font-bold

                    tracking-[0.35em]

                    text-pius-red
                  "
                >
                  {item.number}
                </p>

                <div>
                  <h3
                    className="
                      text-3xl

                      font-black

                      transition-colors

                      group-hover:text-pius-red

                      md:text-5xl
                    "
                  >
                    {item.title}
                  </h3>

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
