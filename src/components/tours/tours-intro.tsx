"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function ToursIntro() {
  return (
    <section
      id="about-excursion"
      className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-40"
    >
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-pius-red/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-pius-red" />

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-pius-red">
            Tours & Excursions
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Creating journeys that{" "}
              <span className="text-pius-red">
                educate, connect and inspire.
              </span>
            </h2>
          </motion.div>

          {/* Supporting Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="lg:pt-2"
          >
            <p className="text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              Study Guide / Holiday Train Ride for Students, Families & Business
              Executives.
            </p>

            <a
              href="#excursion-request"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                text-sm
                font-semibold
                text-slate-900
                transition-colors
                hover:text-pius-red
              "
            >
              Plan an excursion
              <ArrowDownRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:translate-y-1
                "
              />
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 h-px origin-left bg-slate-200 lg:mt-20"
        />

        {/* Official Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-12 grid gap-10 lg:grid-cols-[0.35fr_1fr]"
        >
          {/* Small Label */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Our Approach
            </p>
          </div>

          {/* CEO's Content */}
          <div className="max-w-4xl space-y-7 text-lg leading-9 text-slate-600 sm:text-xl sm:leading-10">
            <p>
              PiusVirgin Communication Limited (PVCL) surpasses our competitors
              in meeting the standard of all that our business consists of in
              the industry today.
            </p>

            <p>
              We provide institutions, deserving establishments and private
              sectors with periodical excursions to historical attractive
              locations in grand style in choice transportation modules.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
