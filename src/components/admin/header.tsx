import { auth } from "../../../auth";

import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import LogoutButton from "./logout-button";

export default  async function AdminHeader() {
  const session = await auth();

  return (
    <header
      className="
      sticky top-0 z-20
      flex flex-col gap-4
      border-b bg-background
      px-6 py-5
      lg:h-20
      lg:flex-row
      lg:items-center
      lg:justify-between
    "
    >
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <p className="text-sm text-muted-foreground">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <LogoutButton />
        
        <div className="relative hidden lg:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <Input
            placeholder="Search..."
            className="w-full
l           g:w-72 pl-10"
          />
        </div>

        <button className="rounded-xl border p-2 hover:bg-muted transition-colors">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3 rounded-xl border px-3 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
            {session?.user?.name?.charAt(0)}
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold">{session?.user?.name}</p>

            <p className="text-xs text-muted-foreground">
              {(session?.user as any)?.role}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
