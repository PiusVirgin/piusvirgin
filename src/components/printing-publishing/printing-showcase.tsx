"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { printingShowcaseData } from "@/lib/printing-showcase";

export default function PrintingShowcase() {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Glow */}

      <div
        className="
absolute
left-1/2
top-1/2

h-[800px]
w-[800px]

-translate-x-1/2
-translate-y-1/2

rounded-full

bg-pius-red/5

blur-[250px]
"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Featured Publications
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
            Designed to leave
            <br />a lasting impression.
          </h2>
        </FadeInAlways>

        <div className="mt-28 space-y-48">
          {printingShowcaseData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
grid

gap-20

items-center

lg:grid-cols-2
"
            >
              {/* Image */}

              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: index % 2 === 0 ? -2 : 2,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
relative

aspect-[4/5]

overflow-hidden

rounded-[40px]

shadow-2xl
"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-110"
                />
              </motion.div>

              {/* Content */}

              <div>
                <p
                  className="
text-sm

uppercase

tracking-[0.35em]

text-pius-red
"
                >
                  {item.category}
                </p>

                <h3
                  className="
mt-6

text-5xl

font-black

leading-none

tracking-[-0.05em]
"
                >
                  {item.title}
                </h3>

                <p
                  className="
mt-8

text-lg

leading-relaxed

text-muted-foreground
"
                >
                  {item.description}
                </p>

                <div
                  className="
mt-10

flex

items-center

gap-10
"
                >
                  <span className="text-muted-foreground">{item.year}</span>

                  <span
                    className="
text-xs

uppercase

tracking-[0.3em]
"
                  >
                    Publication #{item.id}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
