"use client";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  const opacity = useTransform(scrollYProgress, [0, 1], [0.04, 0.12]);

  // const y = useTransform(scrollYProgress, [0, 1], [120, 0]);

  const y = useTransform(scrollYProgress, [0, 1], [200, -50]);

  const letters = "PIUSVIRGIN".split("");

  return (
    <>
      <div
        className="
    absolute
    top-0
    left-1/2
    h-px
    w-[70%]
    -translate-x-1/2
    bg-linear-to-r
    from-transparent
    via-pius-red/50
    to-transparent
  "
      />
      <footer
        ref={footerRef}
        className="relative overflow-hidden border-t border-black/10"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{
              scale: useTransform(scrollYProgress, [0, 1], [0.5, 1]),

              opacity: useTransform(scrollYProgress, [0, 1], [0, 0.08]),
            }}
            className="
    absolute
    left-1/2
    top-0

    h-225
    w-225

    -translate-x-1/2
    rounded-full

    bg-pius-red
    blur-[200px]
  "
          />

          {/* Giant Brand Text */}
          <motion.div
            style={{
              scale,
              opacity,
              y,
            }}
            className="
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2

    whitespace-nowrap

    text-[20vw]
    font-black
    tracking-[-0.08em]
    text-black
    pointer-events-none
    select-none
  "
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  y: 200,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.8,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
          {/* Top Section */}
          <div className="grid gap-20 lg:grid-cols-[1.5fr_1fr_1fr]">
            {/* Brand Side */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p
                className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-muted-foreground
              "
              >
                Since 2000
              </p>

              <div
                className="
    mt-6
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-pius-red/20
    bg-pius-red/5
    px-4
    py-2
  "
              >
                <div className="h-2 w-2 rounded-full bg-green-500" />

                <span className="text-xs uppercase tracking-[0.2em]">
                  Operating Nationwide
                </span>
              </div>

              <h2
                className="
                mt-6
                text-3xl
                font-black
                leading-[0.9]

                md:text-7xl
              "
              >
                Building
                <br />
                Tomorrow's
                <br />
                Possibilities.
              </h2>

              <p
                className="
                mt-8
                max-w-md
                text-lg
                leading-relaxed
                text-muted-foreground
              "
              >
                Delivering trusted solutions across logistics, communications,
                publishing, digital innovation and human development.
              </p>

              <Link
                href="/who-we-are/contact-us"
                className="
                mt-10
                inline-flex
                items-center
                gap-2

                rounded-full

                bg-pius-red
                px-7
                py-4

                text-white

                transition-all
                duration-300

                hover:gap-4
                hover:shadow-[0_0_40px_rgba(220,38,38,.35)]
              "
              >
                Start a Conversation
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p
                className="
                mb-8
                text-xs
                uppercase
                tracking-[0.3em]
                text-muted-foreground
              "
              >
                Explore
              </p>

              <div className="space-y-5">
                <Link
                  href="/who-we-are"
                  className="
                  block
                  transition-colors
                  hover:text-pius-red
                "
                >
                  Who We Are
                </Link>

                <Link
                  href="/what-we-do"
                  className="
                  block
                  transition-colors
                  hover:text-pius-red
                "
                >
                  What We Do
                </Link>

                <Link
                  href="/news"
                  className="
                  block
                  transition-colors
                  hover:text-pius-red
                "
                >
                  News
                </Link>

                <Link
                  href="/logistics-transportation"
                  className="
                  block
                  transition-colors
                  hover:text-pius-red
                "
                >
                  Logistics & Transport
                </Link>

                <Link
                  href="/who-we-are/contact-us"
                  className="
                  block
                  transition-colors
                  hover:text-pius-red
                "
                >
                  Contact
                </Link>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p
                className="
                mb-8
                text-xs
                uppercase
                tracking-[0.3em]
                text-muted-foreground
              "
              >
                Connect
              </p>

              <div className="space-y-5 text-muted-foreground">
                <p>Lagos, Nigeria</p>

                <p>hello@piusvirgin.com</p>

                <p>+234 XXX XXX XXXX</p>
              </div>

              <div className="mt-10 flex gap-4">
                <motion.a
                  whileHover={{
                    y: -4,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  href="#"
                  className="
                  group relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full

                  border
                  border-black/10


                  transition-all

                  hover:border-pius-red
                  hover:text-pius-red
                "
                >
                  <span
                    className="
    absolute
    -bottom-1
    left-0
    h-px
    w-0
    bg-pius-red
    transition-all
    duration-300
    group-hover:w-full
  "
                  />
                  <FaFacebook size={18} />
                </motion.a>

                <motion.a
                  whileHover={{
                    y: -4,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  href="#"
                  className="
                  group relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full

                  border
                  border-black/10


                  transition-all

                  hover:border-pius-red
                  hover:text-pius-red
                "
                >
                  <span
                    className="
    absolute
    -bottom-1
    left-0
    h-px
    w-0
    bg-pius-red
    transition-all
    duration-300
    group-hover:w-full
  "
                  />
                  <FaInstagram size={18} />
                </motion.a>

                <motion.a
                  whileHover={{
                    y: -4,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  href="#"
                  className="
                  group relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full

                  border
                  border-black/10


                  transition-all

                  hover:border-pius-red
                  hover:text-pius-red
                "
                >
                  <span
                    className="
    absolute
    -bottom-1
    left-0
    h-px
    w-0
    bg-pius-red
    transition-all
    duration-300
    group-hover:w-full
  "
                  />
                  <FaLinkedin size={18} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="my-16 h-px bg-black/10" />

          {/* Bottom Bar */}
          <div
            className="
            flex
            flex-col
            gap-4

            text-sm
            text-muted-foreground

            md:flex-row
            md:justify-between
          "
          >
            <div className="flex flex-wrap gap-6">
              <span>
                © {new Date().getFullYear()} PiusVirgin Communications
              </span>

              <Link href="/privacy-policy">Privacy Policy</Link>

              <Link href="/terms">Terms</Link>
            </div>

            <p>Capturing today's events for tomorrow's history.</p>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
              }}
              className="
      absolute
      h-1
      w-1
      rounded-full
      bg-pius-red

    "
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 13) % 100}%`,
              }}
            />
          ))}
        </div>
      </footer>
    </>
  );
}
