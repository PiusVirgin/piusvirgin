"use client";

import { motion } from "framer-motion";

import FadeInAlways from "@/components/motion/FadeInAlways";

import { companyStory } from "@/lib/our-history";

export default function Story() {
  return (
    <section className="relative py-40">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Our Journey
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
            Every great
            <br />
            journey begins
            <br />
            with purpose.
          </h2>
        </FadeInAlways>

        <div className="mt-28">
          {companyStory.map((item, index) => (
            <motion.div
              key={index}
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
                delay: index * 0.15,
              }}
              className="
                border-t

                border-border

                py-14
              "
            >
              <div className="grid gap-10 lg:grid-cols-[180px_1fr]">
                {/* Left */}

                <div>
                  <p
                    className="
                      text-sm

                      font-bold

                      uppercase

                      tracking-[0.35em]

                      text-pius-red
                    "
                  >
                    {item.year}
                  </p>
                </div>

                {/* Right */}

                <div>
                  <h3
                    className="
                      text-3xl

                      font-bold

                      md:text-4xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-6

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
