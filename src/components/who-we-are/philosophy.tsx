"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const principles = [
  "Respect Tradition",
  "Responsible Leadership",
  "Modern Technology",
  "Truth & Integrity",
  "Customer Success",
];

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
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
            Our Philosophy
          </span>

          <h2
            className="
              mt-8
              text-4xl
              font-black
              leading-tight
              text-slate-900
              md:text-6xl
            "
          >
            Tradition.
            <br />
            Technology.
            <br />
            Truth.
          </h2>

          <div className="mt-12 space-y-4">
            {principles.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-4

                  rounded-2xl

                  border

                  bg-white

                  px-5
                  py-4

                  shadow-sm
                "
              >
                <CheckCircle2 className="text-pius-red" />

                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <p
            className="
              mt-12
              text-lg
              leading-9
              text-slate-600
            "
          >
            Our business philosophy is carefully built around what we love our
            tradition woven to responsibly mobilize and utilize human and modern
            technological resources to identify the truth in any given business
            task and provide solution to our customers’ needs.
          </p>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[42px] shadow-2xl">
            <Image
              src="/images/philosophy.png"
              alt="PiusVirgin Team"
              width={700}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="
              absolute

              -bottom-8
              left-8

              rounded-3xl

              bg-white

              px-6
              py-5

              shadow-xl
            "
          >
            <p className="text-xs uppercase tracking-[0.25em] text-pius-red">
              Built On
            </p>

            <h3 className="mt-2 text-3xl font-black">Integrity</h3>

            <p className="mt-2 text-sm text-slate-500">
              Guiding every project,
              <br />
              every decision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
