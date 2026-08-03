"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pius-red/5 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      <div
        className="
        relative
        mx-auto
        max-w-7xl
        px-6
        pt-28
        pb-16
        lg:min-h-[90vh]
        lg:flex
        lg:items-center
        lg:px-8
      "
      >
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span
              className="
              inline-flex
              rounded-full
              border
              border-pius-red/20
              bg-pius-red/5
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.22em]
              text-pius-red
            "
            >
              Who We Are
            </span>

            <h1
              className="
              mt-6
              max-w-xl
              text-4xl
              font-black
              leading-tight
              text-slate-900
              sm:text-5xl
              lg:text-7xl
            "
            >
              Building Trust.
              <br />
              Delivering
              <span className="text-pius-red"> Excellence.</span>
            </h1>

            <p
              className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-600
              lg:text-lg
              lg:leading-9
            "
            >
              Since 2000, PiusVirgin Communications Limited has remained
              committed to delivering world-class solutions across logistics,
              transportation, media, publishing, technology and human
              development.
            </p>

            <div
              className="
              mt-10
              flex
              flex-col
              gap-4

              sm:flex-row
            "
            >
              <Link
                href="/what-we-do"
                className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-pius-red
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:scale-[1.02]

                sm:w-auto
              "
              >
                Explore Our Services
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/who-we-are/our-history"
                className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-slate-300
                px-8
                py-4
                font-semibold
                transition
                hover:border-pius-red
                hover:text-pius-red

                sm:w-auto
              "
              >
                Our History
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="relative order-1 lg:order-2"
          >
            <div
              className="
              overflow-hidden
              rounded-[32px]
              shadow-2xl
              lg:rounded-[42px]
            "
            >
              <Image
                src="/images/ceo2.png"
                alt="Chief Festus Okorie"
                width={700}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            {/* CEO CARD */}

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
              relative
              mx-auto
              -mt-10
              w-[90%]

              rounded-3xl
              bg-white
              p-5

              shadow-xl

              lg:absolute
              lg:bottom-8
              lg:left-8
              lg:mt-0
              lg:w-auto
              lg:max-w-sm
            "
            >
              <p
                className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-pius-red
              "
              >
                Founder & CEO
              </p>

              <h3
                className="
                mt-2
                text-2xl
                font-black
                leading-tight
              "
              >
                Chief Festus Okorie
              </h3>

              <p
                className="
                mt-3
                text-sm
                leading-7
                text-slate-500
              "
              >
                Leading PiusVirgin Communications Limited with a commitment to
                integrity, innovation and service since 2000.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
