"use client";

import { useRef } from "react";
import SplitType from "split-type";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

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
}: RevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const split = new SplitType(ref.current, {
      types: "lines",
    });

    split.lines?.forEach((line) => {
      line.style.overflow = "hidden";
    });

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
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          end: "bottom 50%",
          scrub: true,
        },
      },
    );

    return () => split.revert();
  });

  return (
    <Component ref={ref} className={className}>
     {children}
    </Component>
  );
}
