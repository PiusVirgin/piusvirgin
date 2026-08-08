"use client";

import { useEffect, useRef } from "react";

interface ServiceCardProps {
  index: number;
  setActiveIndex: (index: number) => void;
}

export default function StickyAnimationCard({
  index,
  setActiveIndex,
}: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();

      const viewportCenter = window.innerHeight / 2;

      const elementCenter = rect.top + rect.height / 2;

      const distance = Math.abs(elementCenter - viewportCenter);

      // Store the distance on the element
      element.dataset.distance = String(distance);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-service-index={index}
      className="h-[80vh]"
    />
  );
}
