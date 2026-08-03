"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-pius-red">
            Who We Are
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
            More Than A Company.
            <br />A Legacy Built On Service.
          </h2>
        </motion.div>

        {/* Content */}

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[40px] shadow-2xl">
              <Image
                src="/images/about-story.png"
                alt="PiusVirgin Team"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 left-8 rounded-3xl bg-white px-8 py-6 shadow-xl hidden md:block">
              <h3 className="text-5xl font-black text-pius-red">25+</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Years Delivering
                <br />
                Trusted Solutions
              </p>
            </div>
          </motion.div>

          {/* TEXT */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-9 text-slate-600">
              Founded in 2000 by <strong>Chief Festus Okorie</strong>,
              PiusVirgin Communications Limited has evolved into a
              multidisciplinary organization dedicated to serving individuals,
              businesses and institutions across Nigeria and beyond.
            </p>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Our expertise spans transportation, logistics, media, publishing,
              marketing, technology, consulting and human development. Every
              project reflects our commitment to excellence, professionalism and
              innovation.
            </p>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              For over two decades, our mission has remained unchanged—
              delivering dependable solutions while building lasting
              relationships founded on trust, integrity and measurable results.
            </p>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-3 gap-6 border-t pt-10">
              <div>
                <h4 className="text-2xl md:text-3xl font-black text-pius-red">
                  25+
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  Years of Excellence
                </p>
              </div>

              <div>
                <h4 className="text-2xl md:text-3xl font-black text-pius-red">
                  7+
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  Business Divisions
                </p>
              </div>

              <div>
                <h4 className="text-2xl md:text-3xl font-black text-pius-red">
                  1000+
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  Successful Projects
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
