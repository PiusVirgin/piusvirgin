"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { heroSlides } from "@/lib/home-hero";

import HeroSlide from "./hero-slide";
import HeroNavigation from "./hero-navigation";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative
      "
    >
      <AnimatePresence mode="wait">
        <HeroSlide
          key={heroSlides[activeIndex].id}
          slide={heroSlides[activeIndex]}
        />
      </AnimatePresence>

      <HeroNavigation
        slides={heroSlides}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
    </section>
  );
}
