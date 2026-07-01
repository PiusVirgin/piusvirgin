"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Direction = "up" | "down" | "left" | "right";

interface FadeInAlwaysProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  fullWidth?: boolean;
  blur?: boolean;
}

const directionOffset = {
  up: { y: 80, x: 0 },
  down: { y: -80, x: 0 },
  left: { x: 80, y: 0 },
  right: { x: -80, y: 0 },
};

export default function FadeInAlways({
  children,
  delay = 0,
  duration = 1,
  direction = "up",
  className,
  fullWidth,
  blur = true,
}: FadeInAlwaysProps) {
  const offset = directionOffset[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        filter: blur ? "blur(12px)" : "blur(0px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx(
        "relative overflow-hidden",
        fullWidth && "w-full",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
