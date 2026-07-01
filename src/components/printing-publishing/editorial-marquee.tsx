"use client";

import { motion } from "framer-motion";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { editorialRows } from "@/lib/printingEditorialMarqueeData";

export default function EditorialMarquee() {
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
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInAlways>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-muted-foreground
              "
            >
              Everything We Print
            </p>
          </FadeInAlways>

          <FadeInAlways delay={0.1}>
            <h2
              className="
                mt-6

                max-w-4xl

                text-3xl
                font-black

                leading-[0.9]
                tracking-[-0.05em]

                md:text-7xl
              "
            >
              Crafted for every
              <br />
              communication need.
            </h2>
          </FadeInAlways>
        </div>

        <div className="mt-28 space-y-10">
          {editorialRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              animate={{
                x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 35 + rowIndex * 8,
              }}
              className="flex w-max"
            >
              {[...row, ...row].map((item, index) => (
                <div
                  key={index}
                  className="
                    mx-5

                    flex
                    items-center
                    gap-5

                    whitespace-nowrap
                  "
                >
                  <h3
                    className="
                      text-[10vw]

                      font-black

                      leading-none

                      tracking-[-0.06em]

                      text-transparent

                      [-webkit-text-stroke:1px_rgba(120,120,120,.25)]

                      transition-all

                      hover:text-pius-red
                      hover:[-webkit-text-stroke:0px]
                    "
                  >
                    {item}
                  </h3>

                  <div
                    className="
                      h-4
                      w-4

                      rounded-full

                      bg-pius-red
                    "
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
