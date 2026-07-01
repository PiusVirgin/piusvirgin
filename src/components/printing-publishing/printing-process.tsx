"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { printingProcessSteps } from "@/lib/printingProcessData";

export default function PrintingProcess() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden py-40">
      {/* Background Glow */}

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

        {/* Giant Number */}

        <motion.h2
          key={active}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 0.05,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            absolute

            right-10
            top-20

            text-[26vw]

            font-black

            leading-none

            tracking-[-0.08em]

            text-foreground

            pointer-events-none
          "
        >
          {printingProcessSteps[active].id}
        </motion.h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Our Process
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h2
            className="
            mt-6

            max-w-3xl

            text-5xl

            font-black

            leading-[0.9]

            tracking-[-0.05em]

            md:text-7xl
          "
          >
            From concept
            <br />
            to publication.
          </h2>
        </FadeInAlways>

        <div className="mt-28">
          {printingProcessSteps.map((step, index) => {
            const activeStep = index === active;

            return (
              <motion.div
                key={step.id}
                onMouseEnter={() => setActive(index)}
                whileHover={{
                  x: 10,
                }}
                className="
                  group

                  relative

                  grid

                  gap-8

                  border-b

                  border-border

                  py-14

                  md:grid-cols-[180px_1fr]
                "
              >
                {/* Left */}

                <div>
                  <p
                    className={`
                    text-6xl
                    font-black
                    transition-all

                    ${activeStep ? "text-pius-red" : "text-muted-foreground"}

                  `}
                  >
                    {step.id}
                  </p>
                </div>

                {/* Right */}

                <div>
                  <h3
                    className={`
                    text-4xl

                    font-bold

                    transition-colors

                    ${activeStep ? "text-pius-red" : ""}
                  `}
                  >
                    {step.title}
                  </h3>

                  <motion.p
                    animate={{
                      opacity: activeStep ? 1 : 0.45,
                    }}
                    className="
                      mt-6

                      max-w-2xl

                      text-lg

                      leading-relaxed

                      text-muted-foreground
                    "
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Timeline */}

                <motion.div
                  animate={{
                    height: activeStep ? "100%" : "0%",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="
                    absolute

                    left-0
                    top-0

                    w-[3px]

                    bg-pius-red
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
