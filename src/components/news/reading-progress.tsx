"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      const percentage = (scrollTop / documentHeight) * 100;

      setProgress(Math.min(100, Math.max(0, percentage)));
    }

    updateProgress();

    window.addEventListener("scroll", updateProgress);

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-transparent">
      <div
        className="h-full
        rounded-full
        bg-gradient-to-r
        from-primary
        via-sky-500
        to-cyan-400
        shadow-[0_0_15px_rgba(59,130,246,.5)]
        transition-[width]
        duration-75 "
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
