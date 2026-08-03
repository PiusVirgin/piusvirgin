"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Decoration */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pius-red/5 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[38px] shadow-2xl">
            <Image
              src="/images/vision.png"
              alt="Our Vision"
              width={700}
              height={850}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating Accent */}

          <div
            className="
              absolute
              bottom-[-90px]
              left-8
              rounded-3xl
              bg-pius-red
              px-7
              py-6
              text-white
              shadow-xl
              hidden
              md:block
            "
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/80">
              Since
            </p>

            <h3 className="mt-2 text-4xl font-black">
              2000
            </h3>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-pius-red/10
              px-4
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-pius-red
            "
          >
            Our Vision
          </span>

          <h2
            className="
              mt-8
              text-3xl
              font-black
              leading-tight
              text-slate-900
              md:text-6xl
            "
          >
            Creating lasting value for the next generation.
          </h2>

          <div className="mt-10 h-1 w-24 rounded-full bg-pius-red" />

          <p
            className="
              mt-10
              text-lg
              leading-9
              text-slate-600
            "
          >
            Our Vision is to provide world class services to the next generation
            of our global community with added values that exceed their
            expectation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
