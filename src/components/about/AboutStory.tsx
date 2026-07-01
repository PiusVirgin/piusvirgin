"use client";

import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[var(--muted)] mb-4">
            Our Story
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight">
            From idea to a multi-disciplinary communications company
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg leading-relaxed text-[var(--muted)]"
        >
          <p>
            PiusVirgin Communications Limited is built on a simple belief —
            clarity creates trust, and trust creates growth.
          </p>

          <p>
            Founded in 2000, the company has evolved across media, logistics,
            transport, marketing, publishing, and digital development.
          </p>

          <p>
            Today, we help organizations communicate better, operate smarter,
            and present themselves with confidence in a digital-first world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
