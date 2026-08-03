"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HistoryCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32">
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-pius-red/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-700/10 blur-3xl" />

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
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-pius-red/20
              bg-pius-red/10
              px-4
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-pius-red
            "
          >
            Since 2000
          </span>

          <h2
            className="
              mt-8
              text-4xl
              font-black
              leading-tight
              text-white
              md:text-6xl
            "
          >
            Ready To Build
            <br />
            The Future
            <span className="text-pius-red"> Together?</span>
          </h2>

          <p
            className="
              mx-auto
              mt-10
              max-w-3xl
              text-lg
              leading-9
              text-slate-300
            "
          >
            For more than 25 years, PiusVirgin Communications Limited has
            helped businesses, institutions and communities move forward
            through innovative logistics, media, publishing, technology and
            professional consulting services.
          </p>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-9
              text-slate-400
            "
          >
            We'd be honoured to help you write the next chapter of your
            success story.
          </p>

          <div
            className="
              mt-14
              flex
              flex-col
              items-center
              justify-center
              gap-5
              sm:flex-row
            "
          >
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
                transition
                hover:scale-105
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
                transition
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
