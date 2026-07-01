"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { printingServices } from "@/lib/printingServicesData";

export default function PrintingServices() {
  const [active, setActive] = useState(0);
  const [mobileImage, setMobileImage] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    setMobileImage(index);
  };

  return (
    <section className="relative py-40 overflow-x-hidden">
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            right-[-300px]
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

            grid
            gap-20

            lg:grid-cols-[minmax(0,1fr)_480px]
            lg:items-start
          "
        >
          {/* LEFT */}

          <div>
            {printingServices.map((service, index) => {
              const activeCard = active === index;

              return (
                <motion.div
                  key={service.id}
                  onMouseEnter={() => {
                    setActive(index);
                    setMobileImage(index);
                  }}
                  onMouseLeave={() => setMobileImage(null)}
                  onMouseMove={(e) => handleMove(e, index)}
                  whileHover={{ x: 12 }}
                  transition={{ duration: 0.25 }}
                  className="
                  relative
                  group
                  cursor-pointer
                  border-b
                  border-border
                  py-12
                  "
                >
                  <div className="flex gap-8">
                    <span
                      className={`
                        mt-2
                        text-lg
                        font-bold
                        transition-colors

                        ${
                          activeCard ? "text-pius-red" : "text-muted-foreground"
                        }
                      `}
                    >
                      {service.id}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-6">
                        <h3
                          className={`
                            text-3xl
                            md:text-4xl
                            font-bold
                            transition-colors

                            ${activeCard ? "text-pius-red" : ""}
                          `}
                        >
                          {service.title}
                        </h3>

                        <ArrowUpRight
                          className="
                            shrink-0

                            transition-transform
                            duration-500

                            group-hover:rotate-45
                          "
                        />
                      </div>

                      <motion.p
                        animate={{
                          opacity: activeCard ? 1 : 0.55,
                        }}
                        transition={{
                          duration: 0.3,
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
                  <AnimatePresence>
                    {mobileImage === index && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        style={{
                          left: mouseX,
                          top: mouseY,
                        }}
                        className="
        absolute
        z-50

        pointer-events-none

        md:hidden
      "
                      >
                        <div
                          className="
          relative

          h-32
          w-28

          -translate-x-1/2
          -translate-y-1/2

          overflow-hidden

          rounded-2xl

          shadow-2xl
        "
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT */}

          <div className="hidden lg:block">
            <div
              className="
                sticky
                top-32
              "
            >
              <div
                className="
                  relative

                  h-[650px]
                  overflow-hidden

                  rounded-[38px]

                  border
                  border-border

                  bg-card
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
                      duration: 0.55,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={printingServices[active].image}
                      alt={printingServices[active].title}
                      fill
                      priority
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    <div className="absolute bottom-10 left-10">
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.35em]
                          text-white/70
                        "
                      >
                        Featured Service
                      </p>

                      <h3
                        className="
                          mt-4

                          text-5xl
                          font-black

                          text-white
                        "
                      >
                        {printingServices[active].title}
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
