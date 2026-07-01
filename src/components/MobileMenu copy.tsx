"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

import Overlay from "./Overlay";
import FadeInAlways from "./motion/FadeInAlways";


const navItems = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

interface MobileMenuProps {
  close: () => void;
}

export default function MobileMenu({ close }: MobileMenuProps) {
  return (
    <>
      <Overlay close={close} />

      <motion.div
        initial={{
          opacity: 0,
          x: 100,
          filter: "blur(12px)",
        }}
        animate={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          x: 100,
          filter: "blur(12px)",
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          right-4
          top-4
          z-60
          flex
          h-[calc(100vh-2rem)]
          w-[92%]
          max-w-xl
          flex-col
          rounded-4xl
          border
          border-white/10
          bg-neutral-950/95
          p-8
          backdrop-blur-3xl
        "
      >
        <div className="mb-16 flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            Navigation
          </p>

          <button
            onClick={close}
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full
              border border-white/10
              bg-white/5
              transition-all
              duration-300
              hover:bg-white/10
            "
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-6">
          {navItems.map((item, index) => (
            <FadeInAlways key={item.title} delay={index * 0.08} direction="up">
              <Link
                href={item.href}
                onClick={close}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/5
                  pb-4
                  text-4xl
                  font-semibold
                  tracking-tight
                  text-white
                  transition-all
                  duration-500
                  hover:border-white/20
                  hover:text-white/70
                "
              >
                <span>{item.title}</span>

                <span
                  className="
                    translate-x-4
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                >
                  →
                </span>
              </Link>
            </FadeInAlways>
          ))}
        </nav>

        <div className="mt-auto flex items-center gap-6 pt-10">
          <a
            href="#"
            className="text-sm text-white/40 transition hover:text-white"
          >
            Twitter
          </a>

          <a
            href="#"
            className="text-sm text-white/40 transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="text-sm text-white/40 transition hover:text-white"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </>
  );
}
