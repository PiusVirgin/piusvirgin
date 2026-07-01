"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { railFeatures } from "@/lib/rail";

export default function WhyRail() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-40">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
absolute

left-[-250px]

top-0

h-[700px]
w-[700px]

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
            top-10

            -translate-x-1/2

            whitespace-nowrap

            text-[15vw]

            font-black

            tracking-[-0.08em]

            text-foreground
          "
        >
          RAIL
        </motion.h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Why Choose Rail
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
            Travel smarter.
            <br />
            Travel safer.
          </h2>
        </FadeInAlways>

        <div className="mt-24 grid gap-20 lg:grid-cols-[1fr_400px]">
          {/* LEFT */}

          <div>
            {railFeatures.map((feature, index) => {
              const isActive = active === index;

              return (
                <motion.div
                  key={feature.id}
                  onMouseEnter={() => setActive(index)}
                  whileHover={{
                    scale: 1.01,
                  }}
                  transition={{ duration: 0.25 }}
                  className="group cursor-pointer border-b border-border py-12"
                >
                  <div className="flex  gap-2 md:gap-8">
                    <span
                      className={`text-xl font-bold transition-colors ${
                        isActive ? "text-pius-red" : "text-muted-foreground"
                      }`}
                    >
                      {feature.id}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between  gap-4">
                        <h3
                          className={`text-2xl font-bold transition-colors ${
                            isActive ? "text-pius-red" : ""
                          }`}
                        >
                          {feature.title}
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
                          opacity: isActive ? 1 : 0.55,
                        }}
                        className="
                          mt-5

                          max-w-xl

                          text-sl
                          md:text-lg

                          leading-relaxed

                          text-muted-foreground
                        "
                      >
                        {feature.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT */}

          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div
                className="
                  relative

                  h-[650px]

                  overflow-hidden

                  rounded-[40px]

                  border

                  border-border
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
                      duration: 0.5,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={railFeatures[active].image}
                      alt={railFeatures[active].title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    <div className="absolute bottom-10 left-10">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                        Featured
                      </p>

                      <h3 className="mt-4 text-5xl font-black text-white">
                        {railFeatures[active].title}
                      </h3>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
