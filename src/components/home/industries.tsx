"use client";

import { motion } from "framer-motion";

import FadeInAlways from "@/components/motion/FadeInAlways";

import { homeIndustriesData } from "@/lib/homeIndustriesData";

export default function HomeIndustries() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-175
          w-175
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-pius-red/5
          blur-[180px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}

        <FadeInAlways direction="up">
          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-muted-foreground
            "
          >
            Industries
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1} direction="up">
          <h2
            className="
              mt-6
              max-w-5xl
              text-3xl
              font-black
              leading-[0.95]
              tracking-tight

              md:text-7xl
            "
          >
            Built for organizations across every sector.
          </h2>
        </FadeInAlways>

        <FadeInAlways delay={0.2} direction="up">
          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-muted-foreground
            "
          >
            We partner with institutions, businesses and organizations across
            multiple industries to deliver measurable results.
          </p>
        </FadeInAlways>

        {/* Bento Grid */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homeIndustriesData.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[36px]

                  border
                  border-black/10



                  bg-white/70


                  backdrop-blur-2xl

                  p-8
                "
              >
                {/* Hover Glow */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0

                    transition-opacity
                    duration-500

                    group-hover:opacity-100

                    bg-linear-to-br
                    from-(pius-red)/10
                    to-transparent
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center

                      rounded-3xl

                      bg-pius-red
                      text-white
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <h3
                    className="
                      mt-8
                      text-3xl
                      font-bold
                    "
                  >
                    {industry.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-relaxed
                      text-muted-foreground
                    "
                  >
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
