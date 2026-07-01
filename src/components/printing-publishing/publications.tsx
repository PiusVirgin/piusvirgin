"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { publications } from "@/lib/publicationsData";

const positions = [
  "md:translate-y-0 md:rotate-[-6deg]",
  "md:translate-y-24 md:rotate-[5deg]",
  "md:-translate-y-10 md:rotate-[8deg]",
  "md:translate-y-12 md:rotate-[-5deg]",
  "md:-translate-y-6 md:rotate-[3deg]",
  "md:translate-y-28 md:rotate-[-8deg]",
];

export default function Publications() {
  return (
    <section className="relative overflow-hidden py-40">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.04 }}
          transition={{ duration: 1.5 }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2

            whitespace-nowrap

            text-[18vw]
            font-black
            tracking-[-0.08em]

            text-foreground
          "
        >
          PUBLICATIONS
        </motion.div>

        <div
          className="
          absolute
          left-1/2
          top-0

          h-225
          w-225

          -translate-x-1/2

          rounded-full

          bg-pius-red/5

          blur-[220px]
        "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}

        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Featured Publications
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h2
            className="
            mt-6

            max-w-5xl

            text-3xl

            font-black

            leading-[1.1]

            tracking-tighter

            md:text-7xl
          "
          >
            Every publication
            <br />
            begins with
            <br />a great story.
          </h2>
        </FadeInAlways>

        <FadeInAlways delay={0.2}>
          <p
            className="
            mt-8

            max-w-2xl

            text-lg

            leading-relaxed

            text-muted-foreground
          "
          >
            From premium books and magazines to executive reports and marketing
            materials, every piece is carefully designed to leave a lasting
            impression.
          </p>
        </FadeInAlways>

        {/* Floating Editorial Wall */}

        <div
          className="
          relative

          mt-32

          grid

          grid-cols-1

          gap-10

          md:grid-cols-2

          xl:grid-cols-3
        "
        >
          {publications.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 120,
                rotate: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.8,
              }}
              whileHover={{
                y: -25,
                rotate: 0,
                scale: 1.03,
                zIndex: 50,
              }}
              className={`
                group
                relative

                ${positions[index]}

              `}
            >
              {/* Shadow */}

              <div
                className="
                absolute

                inset-0

                rounded-[34px]

                bg-black/10

                blur-3xl

                transition-all

                duration-500

                group-hover:blur-[70px]
              "
              />

              {/* Card */}

              <div
                className="
                relative

                overflow-hidden

                rounded-[34px]

                border

                border-border

                bg-card

                shadow-2xl
              "
              >
                {/* Image */}

                <div className="relative h-120 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                    object-cover

                    transition-transform

                    duration-700

                    group-hover:scale-110
                  "
                  />

                  {/* Reflection */}

                  <motion.div
                    initial={{
                      x: -250,
                    }}
                    whileHover={{
                      x: 500,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    className="
                    absolute

                    top-0

                    h-full

                    w-32

                    rotate-12

                    bg-white/30

                    blur-2xl
                  "
                  />

                  <div
                    className="
                    absolute

                    inset-0

                    bg-linear-to-t

                    from-black

                    via-black/20

                    to-transparent
                  "
                  />
                </div>

                {/* Content */}

                <div className="p-8">
                  <p
                    className="
                    text-xs

                    uppercase

                    tracking-[0.35em]

                    text-pius-red
                  "
                  >
                    {item.category}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <h3 className="text-3xl font-black">{item.title}</h3>

                    <motion.div
                      whileHover={{
                        rotate: 45,
                      }}
                      className="
                      flex

                      h-12
                      w-12

                      items-center
                      justify-center

                      rounded-full

                      bg-pius-red

                      text-white
                    "
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Statement */}

        <motion.div
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
          className="
          mt-30

          text-center
        "
        >
          <p
            className="
            text-sm

            uppercase

            tracking-[0.35em]

            text-muted-foreground
          "
          >
            Crafted with precision.
          </p>

          <h3
            className="
            mt-4

            text-3xl

            font-black

            leading-tight

            md:text-7xl
          "
          >
            Beautiful ideas
            <br />
            deserve beautiful print.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
