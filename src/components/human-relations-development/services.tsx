"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { hrdServices } from "@/lib/hrd";

export default function Services() {
  return (
    <section className="relative py-40">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            What We Do
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
            Helping people.
            <br />
            Empowering organizations.
          </h2>
        </FadeInAlways>

        <div className="mt-28 space-y-28">
          {hrdServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{
                opacity: 0,
                y: 80,
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
              className="
                border-t

                border-border

                pt-14
              "
            >
              <div
                className="
                  grid

                  gap-12

                  lg:grid-cols-[420px_1fr]
                "
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-pius-red">
                    0{index + 1}
                  </p>

                  <h3 className="mt-6 text-4xl font-black">{service.title}</h3>

                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="
                    relative

                    aspect-[16/10]

                    overflow-hidden

                    rounded-[32px]
                  "
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
