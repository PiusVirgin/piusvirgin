"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { printingServices } from "@/lib/printingServicesData";

export default function PrintingServices() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden py-40">
      {/* Background */}

      <div className="absolute inset-0">
        <div
          className="
          absolute
          right-[-10%]
          top-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-pius-red/5
          blur-[180px]
        "
        />

        <motion.h2
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 0.03,
          }}
          className="
          absolute

          left-1/2
          top-10

          -translate-x-1/2

          whitespace-nowrap

          text-[18vw]

          font-black

          tracking-[-0.08em]

          text-foreground
        "
        >
          SERVICES
        </motion.h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Our Expertise
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
            Creative solutions
            <br />
            designed to
            <br />
            communicate.
          </h2>
        </FadeInAlways>

        <div
          className="
mt-24
flex
flex-col
gap-16

lg:flex-row
"
        >
          {/* LEFT */}

          <div className="flex-1">
            {printingServices.map((service, index) => {
              const isActive = index === active;

              return (
                <motion.div
                  key={service.id}
                  onMouseEnter={() => setActive(index)}
                  whileHover={{
                    x: 10,
                  }}
                  className="
                  group

                  cursor-pointer

                  border-b

                  border-border

                  py-10
                "
                >
                  <div className="flex gap-8">
                    <span
                      className={`
                      text-xl
                      font-bold
                      transition-all

                      ${isActive ? "text-pius-red" : "text-muted-foreground"}

                    `}
                    >
                      {service.id}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3
                          className="
                          text-4xl

                          font-bold

                          transition-all

                          group-hover:text-pius-red
                        "
                        >
                          {service.title}
                        </h3>

                        <ArrowUpRight
                          className="
                          transition-transform

                          duration-500

                          group-hover:rotate-45
                        "
                        />
                      </div>

                      <motion.p
                        animate={{
                          opacity: isActive ? 1 : 0.5,
                        }}
                        className="
                        mt-5

                        max-w-xl

                        text-lg

                        leading-relaxed

                        text-muted-foreground
                      "
                      >
                        {service.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* IMAGE */}

          <div
            className="
hidden

lg:block

w-[480px]
shrink-0
"
          >
            <div
              className="
sticky
top-28

h-[650px]

overflow-hidden

rounded-[40px]
"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
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
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={printingServices[active].image}
                    alt={printingServices[active].title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <div className="absolute bottom-8 left-8">
                    <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                      Featured Service
                    </p>

                    <h3 className="mt-4 text-5xl font-black text-white">
                      {printingServices[active].title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
