"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function JourneyExperience() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-pius-red" />

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
                The PVCL Experience
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <h2 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Experience the journey{" "}
              <span className="text-pius-red">in motion.</span>
            </h2>
          </motion.div>
        </div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-14"
        >
          <div className="group relative aspect-video overflow-hidden rounded-2xl bg-black sm:rounded-3xl">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              poster="/assets/tours/excursion-train-poster.jpg"
            >
              <source
                src="/assets/tours/excursion-train.mp4"
                type="video/mp4"
              />
              Your browser does not support the video element.
            </video>

            {/* Cinematic overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Video label */}
            <div className="pointer-events-none absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                PiusVirgin Communication Limited
              </p>

              <p className="mt-2 text-sm text-white/60">Tours & Excursions</p>
            </div>
          </div>
        </motion.div>

        {/* Supporting Content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-lg leading-8 text-white/60 sm:text-xl sm:leading-9"
          >
            From the railway station to the destination, every journey becomes
            an opportunity to learn, connect and experience something beyond the
            ordinary.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            href="#excursion-request"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-white/20
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:border-pius-red
              hover:bg-pius-red
            "
          >
            Plan Your Excursion
            <ArrowDownRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:translate-y-1
              "
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
