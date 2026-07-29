"use client";

import AdminLogo from "./logo";
import NavItem from "./nav-item";

import { adminNavigation } from "@/lib/constants/admin-navigation";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r bg-background">
      <div className="border-b px-6 py-6">
        <AdminLogo />
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {adminNavigation.map((item) => (
          <NavItem
            key={item.href}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </nav>
    </aside>
  );
}
