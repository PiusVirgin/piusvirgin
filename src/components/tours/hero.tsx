"use client";

import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/assets/tours/train-hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-end px-6 pb-20 pt-32 lg:px-8 lg:pb-24">
        <div className="max-w-4xl text-white">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              mb-6
              text-xs
              font-semibold
              uppercase
              tracking-[0.4em]
              text-white/70
            "
          >
            Discover Africa
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="
              max-w-3xl
              text-5xl
              font-black
              leading-[0.95]
              tracking-tight
              sm:text-6xl
              lg:text-8xl
            "
          >
            Tours &
            <br />
            <span className="text-pius-red">
              Excursions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="
              mt-8
              max-w-xl
              text-lg
              leading-8
              text-white/80
              sm:text-xl
            "
          >
            Study Guide / Holiday Train Ride
            <br />
            For Students, Families & Business Executives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10"
          >
            <Link
              href="#excursion-request"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-pius-red
                px-7
                py-4
                font-semibold
                text-white
                transition
                duration-300
                hover:scale-105
              "
            >
              Plan Your Excursion

              <ArrowDownRight size={18} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
