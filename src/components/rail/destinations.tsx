"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { destinations } from "@/lib/rail";

export default function Destinations() {
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="relative py-40">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <FadeInAlways>
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Our Routes
            </p>
          </FadeInAlways>

          <FadeInAlways delay={0.1}>
            <h2
              className="
            mt-6
            max-w-5xl
            text-3xl
           
            font-black

            leading-[0.9]
            tracking-tighter

            md:text-7xl
          "
            >
              Connecting cities.
              <br />
              Connecting people.
            </h2>
          </FadeInAlways>
          <div className="mt-24 grid gap-20 lg:grid-cols-[1fr_400px]">
            {/* Right */}
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
                        src={destinations[active].image}
                        alt={destinations[active].city}
                        fill
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                      <div className="absolute bottom-10 left-10">
                        <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                          Featured
                        </p>

                        <h3 className="mt-4 text-5xl font-black text-white">
                          {destinations[active].city}
                        </h3>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Left */}
            <div>
              {destinations.map((route, index) => {
                const isActive = active === index;

                return (
                  <motion.div
                    key={route.city}
                    onMouseEnter={() => setActive(index)}
                    whileHover={{
                      x: 12,
                    }}
                    className="
                  group

                  cursor-pointer

                  border-b

                  border-border

                  py-10
                "
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <motion.div
                          animate={{
                            width: isActive ? 120 : 40,
                          }}
                          className="mb-6 h-0.75 bg-pius-red"
                        />

                        <h3
                          className={`
                        text-3xl
                        font-bold
                        transition-colors

                        ${isActive ? "text-pius-red" : ""}
                      `}
                        >
                          {route.city}
                        </h3>

                        <p className="mt-4 text-muted-foreground">
                          {route.description}
                        </p>

                        <p className="mt-6 text-sm uppercase tracking-[0.35em]">
                          {route.time}
                        </p>
                      </div>

                      <ArrowUpRight
                        className="
                      transition-transform

                      duration-500

                      group-hover:rotate-45
                    "
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
