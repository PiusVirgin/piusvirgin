"use client";

import { servicesShowcase } from "@/lib/services-showcase";
import { AnimatePresence, motion } from "framer-motion";
import StickyAnimationCard from "./sticky-animation-card";
import { useState } from "react";

export default function ShowStickyAnimationCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesShowcase[activeIndex];
  return (
    <>
      {/* Desktop */}
      <div
        className="
           hidden
           lg:flex

           mt-24

           flex-col

           gap-0
         "
      >
        <div
          className="
    sticky
    top-32

    hidden
    lg:grid

    h-[650px]

    grid-cols-[420px_1fr]
    gap-12

    items-center
  "
        >
          {/* LEFT */}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -40,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
      relative

      h-full

      rounded-[40px]

      border
      border-border

      bg-card

      p-10

      shadow-[0_30px_80px_rgba(0,0,0,.05)]
    "
            >
              <motion.div
                key={activeService.number}
                initial={{
                  opacity: 0,
                  scale: 1.3,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="
                    text-8xl
                    font-black
                    text-primary/10

      "
              >
                {activeService.number}
              </motion.div>

              <h3
                className="
        mt-6

        text-4xl
        font-bold
      "
              >
                {activeService.title}
              </h3>

              <p
                className="
        mt-6

        leading-relaxed

        text-muted-foreground
      "
              >
                {activeService.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT */}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.image}
              initial={{
                opacity: 0,
                scale: 1.08,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
      relative
      overflow-hidden
      rounded-[40px]
      border
      border-border
    "
            >
              <img
                src={activeService.image}
                alt={activeService.title}
                className="
        h-[650px]
        w-full

        object-cover
      "
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="relative z-10 hidden lg:block">
          {servicesShowcase.map((service, index) => (
            <StickyAnimationCard
              key={service.number}
              service={service}
              index={index}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden mt-16">
        {servicesShowcase.map((service, index) => (
          <div
            key={service.number}
            className="sticky top-20 mb-6  rounded-[32px]
            border
            border-border
            bg-card
            overflow-hidden
            shadow-xl"
            style={{
              zIndex: index + 1,
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="
          h-64
          w-full
          object-cover
        "
            />

            <div className="p-6">
              <div
                className="
            text-5xl
            font-black

            text-primary/10
          "
              >
                {service.number}
              </div>

              <h3
                className="
            mt-3

            text-2xl
            font-bold
          "
              >
                {service.title}
              </h3>

              <p
                className="
            mt-4

            text-muted-foreground
          "
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
