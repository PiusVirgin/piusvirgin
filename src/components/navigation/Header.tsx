"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import FadeInAlways from "../motion/FadeInAlways";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{
          y: hidden ? -120 : 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed top-0 left-0 z-50
          w-full
          px-4 md:px-8
          py-4
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            rounded-full
            border border-white/10
            bg-white/5
            px-5
            py-3
            backdrop-blur-2xl
            shadow-[0_8px_30px_rgb(0,0,0,0.12)]
          "
        >
          <FadeInAlways direction="right">
            <Link
              href="/"
              className="relative block h-10 w-[140px] md:h-12 md:w-[180px]"
            >
              <Image
                src="/assets/fullLogo.png"
                alt="Pius Virgin"
                fill
                priority
                className="object-contain"
              />
            </Link>
          </FadeInAlways>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <FadeInAlways direction="left">
              <button
                onClick={() => setOpen(true)}
                className="
                group
                flex
                items-center
                gap-3
                rounded-full
                px-5
                py-3
                text-sm
                font-medium
                transition-all
                duration-500
                hover:border-white/20
                border border-(--border)
                bg-(--card)
                text-(--foreground)
                hover:bg-(--foreground)/10
              "
              >
                <span>Menu</span>

                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-(--foreground) transition-transform duration-300 group-hover:-translate-y-1" />
                  <span className="h-1.5 w-1.5 rounded-full bg-(--foreground) transition-transform duration-300 delay-75 group-hover:-translate-y-1" />
                  <span className="h-1.5 w-1.5 rounded-full bg-(--foreground) transition-transform duration-300 delay-150 group-hover:-translate-y-1" />
                </div>
              </button>
            </FadeInAlways>
          </div>
        </div>
      </motion.header>

      <AnimatePresence mode="wait">
        {open && <MobileMenu close={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
