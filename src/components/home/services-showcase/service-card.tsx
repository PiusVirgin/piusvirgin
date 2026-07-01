"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  service: {
    number: string;
    title: string;
    description: string;
    image: string;
    href: string;
  };

  index: number;

  setActiveIndex: (index: number) => void;
}

export default function ServiceCard({
  index,
  setActiveIndex,
}: ServiceCardProps) {
  return (
    <motion.div
      onViewportEnter={() => setActiveIndex(index)}
      className="h-[80vh]"
    />
  );
}
