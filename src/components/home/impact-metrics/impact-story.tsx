"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import ImpactTrigger from "./impact-trigger";

const metrics = [
  {
    value: "15+",
    label: "Years Experience",
    description: "Delivering engineering and energy solutions across Nigeria.",
  },

  {
    value: "50+",
    label: "Projects Delivered",
    description:
      "Successfully executed across exploration and infrastructure sectors.",
  },

  {
    value: "24/7",
    label: "Operational Support",
    description:
      "Reliable service and technical support whenever clients need us.",
  },

  {
    value: "100%",
    label: "Safety Commitment",
    description:
      "Safety remains the foundation of every operation and project.",
  },

  {
    value: "FINAL",
    label: "SUMMARY",
    description: "",
  },
];

export default function ImpactStory() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeMetric = metrics[activeIndex];
  const isFinal = activeMetric.value === "FINAL";

  return (
    <section
      className="relative
    min-h-[600vh]
    "
    >
      {/* Sticky Screen */}

      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Background Word */}

        {/* <motion.div
          key={activeMetric.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            absolute

            text-[18vw]

            font-black

            uppercase

            leading-none

            text-primary/3

            select-none
          "
        >
          {activeMetric.value}
        </motion.div> */}

        <AnimatePresence mode="wait">
          {isFinal ? (
            <motion.div
              key="finale"
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="
        relative
        max-w-5xl
        px-6
        text-center
      "
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  staggerChildren: 0.15,
                }}
                className="
          flex
          flex-col
          gap-4
        "
              >
                {[
                  "15+ Years Experience",
                  "50+ Projects Delivered",
                  "24/7 Operational Support",
                  "100% Safety Commitment",
                ].map((item) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="
              text-xl
              md:text-2xl

              text-muted-foreground
            "
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>

              <div
                className="
          mx-auto
          my-12

          h-px
          w-40

          bg-primary/20
        "
              />

              <motion.h2
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                }}
                className="
          text-5xl
          font-black

          leading-[0.95]

          md:text-7xl
          lg:text-8xl
        "
              >
                One Partner.
                <br />
                Endless Possibilities.
              </motion.h2>
            </motion.div>
          ) : (
            <motion.div
              key={activeMetric.value}
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -80,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
              relative
              max-w-5xl
              px-6
              text-center
            "
            >
              <div
                className="
                text-8xl
                font-black

                text-primary

                md:text-[10rem]
                lg:text-[14rem]
              "
              >
                {activeMetric.value}
              </div>

              <h3
                className="
                mt-6

                text-3xl
                font-bold

                md:text-5xl
              "
              >
                {activeMetric.label}
              </h3>

              <p
                className="
                mx-auto
                mt-6

                max-w-2xl

                text-lg

                text-muted-foreground
              "
              >
                {activeMetric.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Triggers */}

      <div>
        {metrics.map((_, index) => (
          <ImpactTrigger
            key={index}
            index={index}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </section>
  );
}
