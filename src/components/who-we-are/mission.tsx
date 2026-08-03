"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Decorative Background */}

      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-pius-red/5 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: .7,
          }}
          viewport={{ once: true }}
        >
          <span
            className="
              inline-flex
              rounded-full
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
            Our Mission
          </span>

          <h2
            className="
              mt-8
              text-4xl
              font-black
              leading-tight
              text-slate-900
              md:text-6xl
            "
          >
            Capturing
            <br />

            Today&apos;s Events

            <span className="block text-pius-red">
              For Tomorrow&apos;s History.
            </span>
          </h2>

          <div className="mt-10 h-1 w-24 rounded-full bg-pius-red" />

          <p
            className="
              mt-10
              text-lg
              leading-9
              text-slate-600
            "
          >
            Our Mission is to Capture Today&apos;s Events For Tomorrow&apos;s
            History paying attention to details.
          </p>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: .7,
          }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[38px] shadow-2xl">
            <Image
              src="/images/mission2.png"
              alt="Our Mission"
              width={700}
              height={850}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating Card */}

          {/* <div
            className="
              absolute
              -right-6
              bottom-8

              rounded-3xl
              bg-white

              px-6
              py-5

              shadow-xl
            "
          >
            <p className="text-xs uppercase tracking-[0.25em] text-pius-red">
              Since
            </p>

            <h3 className="mt-2 text-3xl font-black">
              2000
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Capturing stories
              <br />
              that matter.
            </p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
