"use client";

import { navigation } from "@/lib/navigation";

import NavItem from "./nav-item";

export default function DesktopNav() {
  return (
    <nav
      className="
        hidden
        lg:flex
        items-center
        gap-1
      "
    >
      {navigation.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </nav>
  );
}
