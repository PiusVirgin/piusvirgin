"use client";

import { motion } from "framer-motion";
import FadeInAlways from "@/components/motion/FadeInAlways";

export default function Closing() {
  return (
    <section className="relative overflow-hidden py-44">
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

            bg-pius-red/8

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
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            whitespace-nowrap

            text-[18vw]

            font-black

            tracking-[-0.08em]

            text-foreground
          "
        >
          PEOPLE
        </motion.h2>
      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-pius-red">
            Our Culture
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
            Culture is not
            <br />
            what we say.
            <br />
            It's what we do.
          </h2>
        </FadeInAlways>

        <FadeInAlways delay={0.2}>
          <p
            className="
              mx-auto

              mt-10

              max-w-3xl

              text-lg

              leading-relaxed

              text-muted-foreground

              md:text-xl
            "
          >
            Every conversation, every project and every partnership reflects our
            commitment to excellence, collaboration and helping people succeed.
            These values define who we are and guide everything we do.
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.3}>
          <div
            className="
              mt-20

              flex

              flex-wrap

              justify-center

              gap-4
            "
          >
            {[
              "People First",
              "Purpose Driven",
              "Integrity",
              "Excellence",
              "Innovation",
            ].map((item) => (
              <span
                key={item}
                className="
                  rounded-full

                  border

                  border-border

                  px-6

                  py-3

                  text-sm

                  uppercase

                  tracking-[0.25em]
                "
              >
                {item}
              </span>
            ))}
          </div>
        </FadeInAlways>
      </div>
    </section>
  );
}
