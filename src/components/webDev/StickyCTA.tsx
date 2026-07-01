"use client";

import { motion } from "framer-motion";

export default function StickyCTA() {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="
        fixed
        bottom-6
        right-6
        z-50
        px-5
        py-3
        rounded-full
        bg-primary
        text-white
        shadow-xl
        font-medium
        hover:scale-105
        transition-transform
      "
    >
      Start Project
    </motion.a>
  );
}
