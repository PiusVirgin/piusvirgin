"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, Phone, Clock3 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-pius-red/5 blur-3xl" />

        <div className="absolute -right-24 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          md:px-6
          py-24
          lg:px-8
        "
      >
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-pius-red
              "
            >
              Contact Us
            </span>

            <h1
              className="
                mt-8
                text-4xl
                font-black
                leading-tight
                text-slate-900

                sm:text-3xl
                lg:text-7xl
              "
            >
              Let's Start a
              <br />
              <span className="text-pius-red">Conversation.</span>
            </h1>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-9
                text-slate-600
              "
            >
              Whether you're looking for transportation, logistics, media,
              publishing, technology or business consulting, our team is always
              ready to listen and provide the right solution for your needs.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="#contact-form"
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
                Send Us A Message
                <ArrowDownRight size={18} />
              </Link>

              <Link
                href="tel:+2349050577818"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-slate-300
                  px-8
                  py-4
                  font-semibold
                  transition
                  hover:border-pius-red
                  hover:text-pius-red
                "
              >
                <Phone size={18} />
                Call Us
              </Link>
            </div>

            {/* Stats */}

            <div
              className="
                mt-16
                grid
                gap-8
                border-t
                border-slate-200
                pt-8

                sm:grid-cols-3
              "
            >
              <div>
                <h3 className="text-3xl font-black text-pius-red">25+</h3>

                <p className="mt-2 text-sm text-slate-500">
                  Years of Excellence
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-pius-red">2</h3>

                <p className="mt-2 text-sm text-slate-500">Office Locations</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-pius-red">24hrs</h3>

                <p className="mt-2 text-sm text-slate-500">Response Time</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div
              className="
                overflow-hidden
                rounded-[42px]
                shadow-[0_30px_80px_rgba(0,0,0,.15)]
              "
            >
              <Image
                src="/images/service-news.png"
                alt="PiusVirgin Office"
                width={900}
                height={900}
                priority
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            {/* Floating Card */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="
                absolute

                left-6
                bottom-6

                max-w-xs

                rounded-3xl
                bg-white
                p-6

                shadow-2xl
                hidden
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-pius-red/10
                  "
                >
                  <Clock3 className="text-pius-red" size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-pius-red">
                    Need Immediate Help?
                  </p>

                  <h3 className="font-bold text-slate-900">Call Our Team</h3>
                </div>
              </div>

              <div className="mt-5 border-t pt-5">
                <p className="text-2xl font-black text-pius-red">
                  +234 905 057 7818
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Monday – Friday
                  <br />
                  8:00 AM – 5:00 PM
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
