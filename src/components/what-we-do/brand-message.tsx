"use client";

import { motion } from "framer-motion";

export default function BrandMessage() {
  return (
    <section className="relative overflow-hidden bg-white py-26">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pius-red/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-8">
        <motion.span
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.35em]
            text-pius-red
          "
        >
          Since 2000
        </motion.span>

        <motion.h2
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-10
            text-3xl md:text-5xl
            font-black
            leading-tight
            tracking-tight
            text-slate-900

            md:text-7xl
          "
        >
          One Company.
          <br />
          <span className="text-pius-red">Many Solutions.</span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-12
            max-w-3xl
            text-xl
            leading-10
            text-slate-600
          "
        >
          For over two decades, PiusVirgin Communications Limited has remained
          committed to serving individuals, businesses, institutions, and
          communities through innovative solutions, professional expertise, and
          unwavering integrity.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.45,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-20
            grid
            gap-12

            sm:grid-cols-3
          "
        >
          <div>
            <h3 className="text-3xl md:text-5xl font-black text-pius-red">25+</h3>

            <p className="mt-3 text-slate-600">Years of Excellence</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-5xl font-black text-pius-red">7+</h3>

            <p className="mt-3 text-slate-600">Professional Divisions</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-5xl font-black text-pius-red">
              Serving Communities Since 2000
            </h3>

            {/* <p className="mt-3 text-slate-600">
              {" "}
              Serving Communities Since 2000
            </p> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
