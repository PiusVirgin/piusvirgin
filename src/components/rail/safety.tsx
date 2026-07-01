"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { safetyFeatures } from "@/lib/rail";

export default function Safety() {
  return (
    <section className="relative overflow-hidden py-40">
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
          absolute
          right-[-200px]
          bottom-[-150px]

          h-[650px]
          w-[650px]

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
          top-0

          -translate-x-1/2

          whitespace-nowrap

          text-[18vw]

          font-black

          tracking-[-0.08em]
        "
        >
          SECURITY
        </motion.h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Safety & Security
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h2
            className="
            mt-6

            max-w-5xl

            text-5xl

            font-black

            leading-[0.9]

            tracking-[-0.05em]

            md:text-7xl
          "
          >
            Every journey is
            <br />
            protected from
            <br />
            departure to arrival.
          </h2>
        </FadeInAlways>

        {/* IMAGE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
          relative

          mt-24

          h-[520px]

          overflow-hidden

          rounded-[40px]
        "
        >
          <Image
            src="/images/rail-security.jpg"
            alt="Rail Security"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="
            absolute

            bottom-10
            left-10

            max-w-lg
          "
          >
            <h3 className="text-3xl md:text-5xl font-black text-white">
              Travel with complete confidence.
            </h3>

            <p className="mt-6 text-white/80">
              Our integrated safety systems, trained personnel and operational
              procedures are designed to keep every passenger protected.
            </p>
          </motion.div>
        </motion.div>

        {/* FEATURES */}

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {safetyFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                group

                rounded-[32px]

                border

                border-border

                bg-card

                p-8

                transition-all

                hover:border-pius-red/30
                hover:shadow-2xl
              "
              >
                <div
                  className="
                  flex

                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-2xl

                  bg-pius-red/10

                  transition-all

                  group-hover:rotate-6
                  group-hover:bg-pius-red
                "
                >
                  <Icon
                    size={30}
                    className="text-pius-red group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl md:text-3xl font-bold">{item.title}</h3>

                <p
                  className="
                  mt-5

                  leading-relaxed

                  text-muted-foreground
                "
                >
                  {item.description}
                </p>

                <div
                  className="
                  mt-8

                  flex

                  items-center

                  gap-2

                  font-semibold

                  text-pius-red
                "
                >
                  Learn More
                  <ArrowUpRight
                    className="
                    transition-transform

                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
