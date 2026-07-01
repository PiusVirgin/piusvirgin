"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import FadeInAlways from "@/components/motion/FadeInAlways";

export default function Experience() {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Glow */}

      <div
        className="
absolute
left-[-200px]
bottom-[-100px]

h-[700px]
w-[700px]

rounded-full

bg-pius-red/5

blur-[200px]
"
      />

      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
grid
gap-24

items-center

lg:grid-cols-2
"
        >
          {/* IMAGE */}

          <FadeInAlways direction="left">
            <div className="relative">
              <div
                className="
relative

h-[700px]

overflow-hidden

rounded-[40px]
"
              >
                <Image
                  src="/images/rail-exp.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Card */}

              <motion.div
                initial={{
                  y: 30,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="
absolute
-right-5
md:-right-10
bottom-12

rounded-[28px]

bg-white
p-4
md:p-8

shadow-2xl
"
              >
                <p
                  className="
text-xs

uppercase

tracking-[0.35em]

text-muted-foreground
"
                >
                  Trusted Since
                </p>

                <h3
                  className="
mt-3

text-2xl
md:text-6xl

font-black

text-pius-red
"
                >
                  2000
                </h3>
              </motion.div>
            </div>
          </FadeInAlways>

          {/* CONTENT */}

          <div>
            <FadeInAlways>
              <p
                className="
uppercase

tracking-[0.35em]

text-xs

text-muted-foreground
"
              >
                Premium Rail Experience
              </p>
            </FadeInAlways>

            <FadeInAlways delay={0.1}>
              <h2
                className="
mt-6

text-3xl
md:text-5xl

font-black

leading-[0.9]

tracking-[-0.05em]

md:text-7xl
"
              >
                Travel
                <br />
                Beyond
                <br />
                Expectations.
              </h2>
            </FadeInAlways>

            <FadeInAlways delay={0.2}>
              <p
                className="
mt-8

max-w-xl

text-lg

leading-relaxed

text-muted-foreground
"
              >
                Our rail transportation services combine safety, reliability and
                comfort to provide passengers with exceptional travel
                experiences while supporting national mobility and economic
                development.
              </p>
            </FadeInAlways>

            {/* Stats */}

            <div
              className="
mt-14

grid

grid-cols-2

gap-8
"
            >
              {[
                {
                  value: "100%",
                  label: "Safety Focus",
                },
                {
                  value: "24/7",
                  label: "Operational Support",
                },
                {
                  value: "20+",
                  label: "Years Experience",
                },
                {
                  value: "∞",
                  label: "Passenger Satisfaction",
                },
              ].map((item, index) => (
                <FadeInAlways key={item.label} delay={0.3 + index * 0.1}>
                  <div>
                    <h3
                      className="
                      text-3xl
md:text-5xl

font-black

text-pius-red
"
                    >
                      {item.value}
                    </h3>

                    <p
                      className="
mt-2

text-muted-foreground
"
                    >
                      {item.label}
                    </p>
                  </div>
                </FadeInAlways>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
