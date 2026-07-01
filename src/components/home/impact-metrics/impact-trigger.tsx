
"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ImpactTrigger({
  index,
  setActiveIndex,
}: {
  index: number;
  setActiveIndex: (index: number) => void;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.2,
  });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return <div ref={ref} className="h-screen" />;
}
