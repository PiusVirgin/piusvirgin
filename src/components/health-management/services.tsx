"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { healthServices } from "@/lib/health";

export default function Services() {
  return (
    <section id="services" className="relative py-40">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            What We Offer
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
            Supporting healthier
            <br />
            lives through
            <br />
            education.
          </h2>
        </FadeInAlways>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {healthServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group

                relative

                overflow-hidden

                rounded-[32px]

                border

                border-border

                bg-card

                p-10

                transition-all
                duration-500

                hover:border-pius-red
              "
            >
              {/* Glow */}

              <div
                className="
                  absolute

                  right-[-80px]
                  top-[-80px]

                  h-48
                  w-48

                  rounded-full

                  bg-pius-red/10

                  blur-3xl

                  opacity-0

                  transition-opacity
                  duration-500

                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    flex

                    items-center

                    justify-between
                  "
                >
                  <span
                    className="
                      text-sm

                      font-bold

                      tracking-[0.35em]

                      text-pius-red
                    "
                  >
                    {service.id}
                  </span>

                  <ArrowUpRight
                    className="
                      transition-transform
                      duration-500

                      group-hover:rotate-45
                    "
                  />
                </div>

                <h3 className="mt-10 text-3xl font-bold">{service.title}</h3>

                <p
                  className="
                    mt-6

                    leading-relaxed

                    text-muted-foreground
                  "
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
