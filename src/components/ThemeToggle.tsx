"use client";

import { Moon, Sun } from "lucide-react";
import { useContext, useEffect, useState } from "react";

import { ThemeContext } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const context = useContext(ThemeContext);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !context) {
    return (
      <div
        className="
          h-11
          w-11
          rounded-full
          border
          border-white/10
          bg-white/5
        "
      />
    );
  }

  const { toggle, theme } = context;

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-(--border)
      bg-(--card)
      text-(--foreground)
      backdrop-blur-xl
      transition-all
      duration-300
      hover:scale-105
      hover:bg-(--foreground)/10
    "
    >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
