"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src="/assets/slide1.jpg"
        alt="About hero"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <p className="uppercase tracking-[0.3em] text-white/70 mb-6 text-sm">
            Who We Are
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-none">
            Building trust through clarity, structure & impact
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
