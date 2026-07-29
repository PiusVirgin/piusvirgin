"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItemProps {
  title: string;
  href: string;
  icon: React.ElementType;
}

export default function NavItem({ title, href, icon: Icon }: NavItemProps) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300",
        active
          ? "bg-primary text-white shadow-md"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      <Icon size={18} />
      <span>{title}</span>
    </Link>
  );
}
