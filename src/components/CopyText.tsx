"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CopyTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  animateOnScroll?: boolean;
}

export default function CopyText({
  children,
  className,
  delay = 0,
  duration = 1.2,
  stagger = 0.08,
  animateOnScroll = true,
}: CopyTextProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const split = new SplitText(container.current, {
        type: "lines",
        linesClass: "overflow-hidden",
      });

      gsap.set(split.lines, {
        yPercent: 120,
        opacity: 0,
      });

      const animation = gsap.to(split.lines, {
        yPercent: 0,
        opacity: 1,
        duration,
        stagger,
        delay,
        ease: "power4.out",
      });

      if (animateOnScroll) {
        ScrollTrigger.create({
          trigger: container.current,
          start: "top 85%",
          once: true,
          animation,
        });
      }

      return () => {
        split.revert();
      };
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className={clsx(
        "relative overflow-hidden will-change-transform",
        className,
      )}
    >
      {children}
    </div>
  );
}
