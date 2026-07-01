"use client";

import { motion } from "framer-motion";

export default function ToursIntro() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-32 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-sm uppercase tracking-[0.3em] text-primary">
          Explore • Experience • Connect
        </span>

        <h2 className="mt-6 text-4xl font-bold md:text-6xl">
          Travel Beyond Destinations
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground">
          Our tours are designed to showcase the beauty, culture, heritage and
          diversity of Nigeria and West Africa through unforgettable
          experiences.
        </p>
      </motion.div>
    </section>
  );
}
