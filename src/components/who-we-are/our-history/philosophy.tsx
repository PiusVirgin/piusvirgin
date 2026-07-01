"use client";

import { motion } from "framer-motion";
import FadeInAlways from "@/components/motion/FadeInAlways";

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden py-40">
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
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

            text-[14vw]

            font-black

            tracking-[-0.08em]

            text-foreground
          "
        >
          PHILOSOPHY
        </motion.h2>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Our Philosophy
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.15}>
          <h2
            className="
              mt-10

              text-5xl

              font-black

              leading-[0.9]

              tracking-[-0.05em]

              md:text-7xl
            "
          >
            Built on tradition.
            <br />
            Driven by innovation.
          </h2>
        </FadeInAlways>

        <FadeInAlways delay={0.25}>
          <p
            className="
              mx-auto

              mt-12

              max-w-3xl

              text-lg

              leading-relaxed

              text-muted-foreground

              md:text-xl
            "
          >
            Our business philosophy is carefully built around what we love—
            responsibly mobilizing human talent and modern technological
            resources to identify the truth in every business task while
            delivering practical solutions that create lasting value for our
            customers.
          </p>
        </FadeInAlways>

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: 160,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="
            mx-auto

            mt-16

            h-[2px]

            bg-pius-red
          "
        />

        <FadeInAlways delay={0.4}>
          <p
            className="
              mt-12

              text-sm

              uppercase

              tracking-[0.45em]

              text-muted-foreground
            "
          >
            Since 2000 • Building Trust • Creating Impact
          </p>
        </FadeInAlways>
      </div>
    </section>
  );
}
