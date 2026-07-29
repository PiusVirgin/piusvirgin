"use client";

import {  Link2 } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ShareButtons() {
  const icons = [FaFacebook, FaTwitter, FaLinkedin, Link2];

  return (
    <div
      className="
        sticky
        top-28
        hidden
        lg:flex
        flex-col
        gap-4
      "
    >
      {icons.map((Icon, i) => (
        <button
          key={i}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-border
            bg-card
            transition
            hover:bg-pius-red
            hover:text-white
          "
        >
          <Icon size={18} />
        </button>
      ))}
    </div>
  );
}
