"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import FadeInAlways from "@/components/motion/FadeInAlways";

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden py-40">
      {/* Atmosphere */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-225
          w-225
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-(pius-red)/10
          blur-[220px]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-linear-to-b
          from-transparent
          via-(--pius-red)/3
          to-transparent
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div
          className="
            rounded-[48px]

            border
            border-black/10



            bg-white/60


            backdrop-blur-3xl

            px-8
            py-20

            md:px-16
            md:py-28
          "
        >
          {/* Small Label */}

          <FadeInAlways direction="up">
            <p
              className="
                text-center
                text-xs
                uppercase
                tracking-[0.35em]
                text-muted-foreground
              "
            >
              Let's Build Together
            </p>
          </FadeInAlways>

          {/* Main Heading */}

          <FadeInAlways delay={0.1} direction="up">
            <h2
              className="
                mx-auto
                mt-8
                max-w-5xl

                text-center

                text-3xl
                font-black
                leading-[0.95]
                tracking-tight

                md:text-7xl
                xl:text-8xl
              "
            >
              Ready to move
              <br />
              your organization
              <br />
              forward?
            </h2>
          </FadeInAlways>

          {/* Description */}

          <FadeInAlways delay={0.2} direction="up">
            <p
              className="
                mx-auto
                mt-10
                max-w-3xl

                text-center

                text-lg
                leading-relaxed

                text-muted-foreground
              "
            >
              Whether logistics, transportation, media, publishing,
              communications or digital innovation — we create solutions that
              help organizations grow, operate efficiently and achieve
              meaningful impact.
            </p>
          </FadeInAlways>

          {/* Buttons */}

          <FadeInAlways delay={0.3} direction="up">
            <div
              className="
                mt-14

                flex
                flex-col
                items-center
                justify-center
                gap-4

                sm:flex-row
              "
            >
              <Link
                href="/contact"
                className="
                  group

                  inline-flex
                  items-center
                  gap-3

                  rounded-full

                  bg-pius-red

                  px-8
                  py-4

                  font-medium
                  text-white

                  transition-all
                "
              >
                Start a Project
                <ArrowUpRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>

              <Link
                href="/about"
                className="
                  rounded-full

                  border
                  border-black/10



                  px-8
                  py-4

                  transition-all

                  hover:bg-black/5

                "
              >
                Learn More About Us
              </Link>
            </div>
          </FadeInAlways>

          {/* Bottom Trust Line */}

          <FadeInAlways delay={0.4} direction="up">
            <p
              className="
                mt-14

                text-center
                text-sm

                uppercase
                tracking-[0.25em]

                text-muted-foreground
              "
            >
              Serving organizations across Nigeria and beyond since 2000
            </p>
          </FadeInAlways>
        </div>
      </div>
    </section>
  );
}
