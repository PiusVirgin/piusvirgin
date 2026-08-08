"use client";

import { motion } from "framer-motion";
import FadeInAlways from "@/components/motion/FadeInAlways";
import { railJourney } from "@/lib/rail";

export default function Journey() {
  return (
    <section className="relative py-20 md:py-30">
      <div className="mx-auto max-w-5xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Passenger Journey
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h2
            className="
            mt-6

            text-5xl

            font-black

            leading-[0.9]

            tracking-[-0.05em]

            md:text-7xl
          "
          >
            Every journey
            <br />
            begins with trust.
          </h2>
        </FadeInAlways>

        <div className="relative mt-28">
          {/* Vertical Line */}

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="
              absolute
              left-4
              top-0
              h-full
              w-px
              origin-top
              bg-border
            "
          />

          <div className="space-y-20">
            {railJourney.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                className="relative flex gap-10"
              >
                {/* Circle */}

                <div
                  className="
                    relative
                    z-10

                    mt-2

                    h-8
                    w-8

                    rounded-full

                    border-4

                    border-background

                    bg-pius-red
                  "
                />

                <div>
                  <p
                    className="
                    text-sm

                    font-bold

                    tracking-[0.3em]

                    text-pius-red
                  "
                  >
                    {item.step}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold">{item.title}</h3>

                  <p
                    className="
                    mt-5

                    max-w-xl

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
      </div>
    </section>
  );
}
