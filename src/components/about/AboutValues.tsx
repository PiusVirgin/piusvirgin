"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Vision",
    desc: "To deliver world-class services that exceed expectations globally.",
  },
  {
    title: "Mission",
    desc: "To document today’s experiences and build value for tomorrow’s impact.",
  },
  {
    title: "Purpose",
    desc: "To help people and organizations succeed through structured execution.",
  },
  {
    title: "Philosophy",
    desc: "We believe in truth, clarity, and data-driven decision making.",
  },
];

export default function AboutValues() {
  return (
    <section className="px-6 pb-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-6xl mb-14">Mission, Vision & Values</h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <h3 className="text-xl mb-3">{v.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed text-sm">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
