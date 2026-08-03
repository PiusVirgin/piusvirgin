"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32">
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-pius-red/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-pius-red
            "
          >
            What's Next
          </span>

          <h2
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-4xl
              font-black
              leading-tight
              text-white
              md:text-7xl
            "
          >
            Ready to Experience
            <br />
            the PiusVirgin Difference?
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-9
              text-slate-300
            "
          >
            Discover how our multidisciplinary expertise transforms ideas into
            lasting impact across transportation, logistics, publishing,
            technology, media, and human development.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/what-we-do"
              className="
                inline-flex
                items-center
                gap-3

                rounded-full

                bg-pius-red

                px-8
                py-4

                font-semibold

                text-white

                transition-all
                duration-300

                hover:scale-105
                hover:bg-red-700
              "
            >
              Explore Our Services
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/who-we-are/contact-us"
              className="
                inline-flex
                items-center

                rounded-full

                border
                border-white/20

                px-8
                py-4

                font-semibold

                text-white

                transition-all
                duration-300

                hover:border-pius-red
                hover:bg-white/5
              "
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
