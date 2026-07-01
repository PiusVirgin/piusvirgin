"use client";

import { motion } from "framer-motion";

interface OverlayProps {
  close: () => void;
}

export default function Overlay({ close }: OverlayProps) {
  return (
    <motion.div
      onClick={close}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.4,
      }}
      className="
        fixed inset-0 z-50
        bg-black/60
        backdrop-blur-md
      "
    />
  );
}
