"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function QuickBit() {
  return (
    <section id="quick-bit" className="bg-white py-28">
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
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
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
            About PiusVirgin
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
            A Quick Bit About
            <br />
            PiusVirgin
            <br />
            Communications Limited
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
            Founded by Festus Okorie in 2000, PiusVirgin Communications Limited
            is registered with the Corporate Affairs Commission in Nigeria; as
            though with assemblage of professionals in marketing and media,
            transport and logistics, web design and development, computer
            programming, printing and publishing, news gathering and reporting,
            Mentoring and human development, it is our responsibility to make
            sure our decisions are informed by data and not a guessing game, and
            that we never lose sight of the culture and values that got us here.
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
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
          }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[40px] shadow-2xl">
            <Image
              src="/images/quick-bit.png"
              alt="PiusVirgin Communications"
              width={700}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating Card */}

          <div
            className="
              absolute
              -bottom-8
              left-8

              rounded-3xl
              bg-white

              px-6
              py-5

              shadow-xl
            "
          >
            <p className="text-xs uppercase tracking-[0.25em] text-pius-red">
              Established
            </p>

            <h3 className="mt-2 text-4xl font-black text-slate-900">2000</h3>

            <p className="mt-2 text-sm text-slate-500">
              Over two decades of
              <br />
              professional excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
