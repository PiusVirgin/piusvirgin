"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32">
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-pius-red/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            Let's Build Together
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
            Every Great
            <br />
            Partnership
            <span className="text-pius-red"> Begins With A Conversation.</span>
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
            Whether you need transportation, logistics, publishing, media,
            technology or business consulting, our team is ready to help you
            achieve your goals.
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
              href="tel:+2349050577818"
              className="
                inline-flex
                items-center
                gap-3
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
              <Phone size={18} />
              Call Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
