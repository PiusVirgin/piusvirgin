"use client";

import { useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  delay?: number;
  stagger?: number;
  start?: string;
}

export default function RevealText({
  children,
  className = "",
  as: Component = "p",
  stagger = 0.2,
  start = "top 85%",
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 1. Register plugin ONLY in browser
    gsap.registerPlugin(ScrollTrigger);

    if (!ref.current) return;

    // 2. Split text only after mount
    const split = new SplitType(ref.current, {
      types: "lines",
      lineClass: "line-wrapper", // helps with overflow
    });

    split.lines?.forEach((line) => {
      line.style.overflow = "hidden";
    });

    // 3. Animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        split.lines,
        {
          opacity: 0.15,
          yPercent: 100,
          color: "#8a8a8a",
        },
        {
          opacity: 1,
          yPercent: 0,
          color: "#d7d7d0",
          stagger: stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: start,
            end: "bottom 50%",
            scrub: true,
          },
        },
      );
    }, ref);

    // 4. Cleanup
    return () => {
      ctx.revert(); // kills all gsap + scrolltriggers
      split.revert();
    };
  }, []); // empty deps = run once on mount

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
