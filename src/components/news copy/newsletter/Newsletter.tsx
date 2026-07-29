"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section
      className="
        relative

        overflow-hidden

        bg-pius-blue

        py-28

        text-white
      "
    >
      {/* Decorative */}

      <div
        className="
          absolute

          -left-20

          top-10

          h-72

          w-72

          rounded-full

          bg-white/5

          blur-3xl
        "
      />

      <div
        className="
          absolute

          right-0

          bottom-0

          h-80

          w-80

          rounded-full

          bg-pius-red/20

          blur-3xl
        "
      />

      <div
        className="
          relative

          mx-auto

          flex

          max-w-3xl

          flex-col

          items-center

          px-6

          text-center
        "
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            text-sm

            font-semibold

            uppercase

            tracking-[0.35em]

            text-white/70
          "
        >
          Newsletter
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="
            mt-8

            text-4xl

            font-black

            md:text-6xl
          "
        >
          Stay Ahead.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="
            mt-8

            max-w-xl

            text-lg

            leading-relaxed

            text-white/75
          "
        >
          Receive company news, transportation updates, marketing insights,
          industry reports and exclusive stories directly in your inbox.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="
            mt-12

            flex

            w-full

            max-w-xl

            flex-col

            gap-4

            sm:flex-row
          "
        >
          <input
            type="email"
            placeholder="Enter your email..."
            className="
              h-14

              flex-1

              rounded-full

              border

              border-white/20

              bg-white/10

              px-6

              text-white

              placeholder:text-white/50

              backdrop-blur-md

              outline-none

              focus:border-white
            "
          />

          <button
            className="
              flex

              h-14

              items-center

              justify-center

              gap-2

              rounded-full

              bg-pius-red

              px-8

              font-semibold

              transition-all

              hover:scale-105
            "
          >
            Subscribe
            <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
