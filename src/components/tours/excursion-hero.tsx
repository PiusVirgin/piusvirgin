"use client";

import Link from "next/link";
import { ArrowDownRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/tours/excursion-train-poster.jpg"
      >
        <source
          src="/assets/tours/train-hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

      {/* Subtle Brand Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-end px-6 pb-20 pt-32 lg:px-8 lg:pb-24">
        <div className="max-w-4xl text-white">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-pius-red" />

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/75">
              Tours & Excursions
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              max-w-4xl
              text-5xl
              font-black
              leading-[0.95]
              tracking-tight
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Study, Explore
            <br />
            <span className="text-pius-red">& Experience.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.6,
            }}
            className="
              mt-8
              max-w-2xl
              text-base
              leading-7
              text-white/80
              sm:text-lg
              sm:leading-8
            "
          >
            Study Guide and Holiday Train Rides for
            Students, Families and Business Executives.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#excursion-request"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-pius-red
                px-7
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-pius-red/90
              "
            >
              Plan Your Excursion

              <ArrowDownRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:translate-y-1
                "
              />
            </Link>

            <a
              href="#about-excursion"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/30
                bg-white/10
                px-7
                py-4
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-white/60
                hover:bg-white/20
              "
            >
              <Play size={16} fill="currentColor" />

              Discover The Experience
            </a>
          </motion.div>

          {/* Small Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
            }}
            className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/50"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-pius-red" />

            Educational • Corporate • Family Experiences
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent" />
    </section>
  );
}
