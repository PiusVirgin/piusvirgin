"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { printingStats } from "@/lib/printingStatsData";

export default function Impact() {
  return (
    <section className="relative overflow-hidden py-40">
      {/* Background */}

      <div className="absolute inset-0">
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

          blur-[220px]
        "
        />

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
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
          IMPACT
        </motion.h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Our Impact
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h2
            className="
            mt-6

            max-w-4xl

            text-5xl

            font-black

            leading-[0.9]

            tracking-[-0.05em]

            md:text-7xl
          "
          >
            Numbers that
            <br />
            reflect excellence.
          </h2>
        </FadeInAlways>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {printingStats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
                rotate: index % 2 === 0 ? -1 : 1,
              }}
              className="
              group

              relative

              overflow-hidden

              rounded-[36px]

              border

              border-border

              bg-card/70

              p-10

              backdrop-blur-xl

              transition-all

              duration-500

              hover:border-pius-red/40
            "
            >
              <div
                className="
                absolute

                right-0
                top-0

                h-40
                w-40

                rounded-full

                bg-pius-red/10

                blur-[80px]

                transition-opacity

                duration-500

                group-hover:opacity-100
              "
              />

              <h3
                className="
                relative

                text-6xl

                font-black

                tracking-[-0.06em]

                md:text-7xl
              "
              >
                <CountUp
                  end={item.value}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {item.suffix}
              </h3>

              <h4
                className="
                mt-6

                text-2xl

                font-bold
              "
              >
                {item.label}
              </h4>

              <p
                className="
                mt-5

                max-w-md

                leading-relaxed

                text-muted-foreground
              "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
