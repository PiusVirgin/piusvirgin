"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CEOImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.9,
        delay: 0.3,
      }}
      className="relative mx-auto w-full max-w-[520px]"
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          rounded-[48px]
          bg-pius-red/10
          blur-3xl
        "
      />

      {/* Image */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-slate-200
          bg-white
          shadow-[0_30px_80px_rgba(0,0,0,.12)]
        "
      >
        <Image
          src="/images/ceo.png"
          alt="Chief Festus Okorie"
          width={700}
          height={900}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Experience Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
        }}
        className="
          absolute

          left-1/2
          -bottom-8

          -translate-x-1/2

          sm:left-8
          sm:translate-x-0

          rounded-3xl
          bg-white

          px-6
          py-5

          shadow-2xl

          border
          border-slate-100

          z-20
        "
      >
        <div className="flex items-center gap-4">
          <div>
            <h3 className="text-4xl font-black leading-none text-pius-red">
              25+
            </h3>

            <span className="text-xs uppercase tracking-[0.25em] text-pius-red">
              Years
            </span>
          </div>

          <div className="h-12 w-px bg-slate-200" />

          <div>
            <p className="text-sm font-semibold text-slate-900">Excellence</p>

            <p className="text-xs text-slate-500">Since 2000</p>
          </div>
        </div>
      </motion.div>

      {/* Projects Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
        }}
        className="
          absolute

          hidden
          lg:block

          -right-8
          top-24

          rounded-3xl
          bg-white

          px-6
          py-5

          border
          border-slate-100

          shadow-2xl
        "
      >
        <h3 className="text-4xl font-black leading-none text-pius-red">
          1000+
        </h3>

        <p className="mt-2 text-sm font-medium text-slate-900">
          Successful Projects
        </p>

        <span className="text-xs text-slate-500">
          Across Multiple Industries
        </span>
      </motion.div>
    </motion.div>
  );
}
