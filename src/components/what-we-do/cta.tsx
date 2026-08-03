"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32">
      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-pius-red/10 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            inline-flex
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-pius-red
          "
        >
          Let's Work Together
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .15 }}
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

          <span className="text-pius-red">
            Something Great?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-9
            text-slate-300
          "
        >
          Whether you need professional printing,
          transportation,
          web development,
          consulting,
          human development,
          or any of our specialized services,
          our experienced team is ready to help you
          move your vision forward.
        </motion.p>

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
            href="/who-we-are/contact-us"
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
            Start Your Journey

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
              border-white/15
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

            Call Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}
