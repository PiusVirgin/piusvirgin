"use client";

import { motion } from "framer-motion";
import FadeInAlways from "@/components/motion/FadeInAlways";

type BookingCTAProps = {
  onBook: () => void;

};

export default function BookingCTA({ onBook }: BookingCTAProps) {
  return (
    <section className="relative overflow-hidden py-10 md:py-30">
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
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

          bg-pius-red/10

          blur-[180px]
        "
        />

        <h2
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

          text-black/3
        "
        >
          BOOK NOW
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Ready To Travel?
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
            Your next journey
            <br />
            starts here.
          </h2>
        </FadeInAlways>

        <FadeInAlways delay={0.2}>
          <p
            className="
            mx-auto

            mt-8

            max-w-2xl

            text-lg

            leading-relaxed

            text-muted-foreground
          "
          >
            Book your railway journey in minutes and enjoy a comfortable,
            reliable and secure travel experience.
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.3}>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={onBook}
            className="
              mt-12

              rounded-full

              bg-pius-red

              px-10

              py-5

              text-lg

              font-semibold

              text-white

              shadow-xl

              transition-colors

              hover:bg-pius-red/90
            "
          >
            Book Your Journey
          </motion.button>
        </FadeInAlways>
      </div>
    </section>
  );
}
