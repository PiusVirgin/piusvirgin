"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        relative
        isolate
        flex
        min-h-[80vh]
        items-center
        overflow-hidden
      "
    >
      {/* Background */}

      <div
        className="
          absolute
          inset-0
          bg-[url('/images/history-hero.png')]
          bg-cover
          bg-center
        "
      />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-slate-950/90
          via-slate-950/70
          to-slate-950/40
        "
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-28 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .8,
          }}
          className="max-w-3xl"
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-white/15
              bg-white/10
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-pius-red
            "
          >
            Our History
          </span>

          <h1
            className="
              mt-8
              text-4xl
              font-black
              leading-tight
              text-white
              md:text-7xl
            "
          >
            More Than Two
            <br />

            Decades of
            <span className="text-pius-red">
              {" "}
              Purpose.
            </span>
          </h1>

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-9
              text-slate-200
            "
          >
            Since 2000, PiusVirgin Communications Limited has grown through
            innovation, integrity, and an unwavering commitment to helping
            people, businesses, and communities succeed.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="#quick-bit"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-pius-red
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              Read Our Story

              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
