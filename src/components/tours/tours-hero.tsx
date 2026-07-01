"use client";

import { motion } from "framer-motion";

export default function ToursHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <img
        src="/assets/Nigeria-Railway-Corporation.jpg"
        alt="Tours and Excursions"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-white/70">
            Discover Africa
          </p>

          <h1 className="max-w-6xl text-6xl font-bold text-white md:text-8xl">
            Tours &
            <br />
            Excursions
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
