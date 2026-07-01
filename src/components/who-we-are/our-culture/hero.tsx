"use client";

import { motion } from "framer-motion";
import FadeInAlways from "@/components/motion/FadeInAlways";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
          absolute

          left-[-200px]
          top-[-150px]

          h-[700px]
          w-[700px]

          rounded-full

          bg-pius-red/10

          blur-[180px]
        "
        />

        <motion.h2
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 0.04,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            absolute

            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            whitespace-nowrap

            text-[17vw]

            font-black

            tracking-[-0.08em]

            text-foreground
          "
        >
          CULTURE
        </motion.h2>
      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 mt-20">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Who We Are
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h1
            className="
              mt-8

              max-w-6xl

              text-[2.5rem]

              font-black

              leading-[0.85]

              tracking-[-0.06em]

              md:text-[6rem]

            "
          >
            Great companies
            <br />
            are built by
            <br />
            great people.
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
            At PiusVirgin Communications Limited, our culture is shaped by
            passion, collaboration, integrity and a shared commitment to helping
            people and organizations succeed.
          </p>
        </FadeInAlways>
      </div>
    </section>
  );
}
