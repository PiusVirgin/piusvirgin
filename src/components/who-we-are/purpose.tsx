"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Purpose() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Background Decoration */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
        <Quote
          size={420}
          strokeWidth={1}
          className="text-pius-red"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
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
          Our Purpose
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .15 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-10
            max-w-4xl
            text-4xl
            font-black
            leading-tight
            text-slate-900
            md:text-6xl
          "
        >
          To help people and their organizations succeed.
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 100 }}
          transition={{ duration: .6, delay: .3 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-10
            h-1
            rounded-full
            bg-pius-red
          "
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8, delay: .45 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-10
            max-w-3xl
            text-lg
            leading-9
            text-slate-600
          "
        >
          Applying what we do best to help companies reach their goals is what
          drives us. When we can help someone make their organization
          successful, we're successful.
        </motion.p>
      </div>
    </section>
  );
}
