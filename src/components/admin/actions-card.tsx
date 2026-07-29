import { ReactNode } from "react";

interface ActionsCardProps {
  children: ReactNode;
}

export default function ActionsCard({ children }: ActionsCardProps) {
  return (
    <div
      className="sticky lg:sticky
    lg:top-24 rounded-2xl border bg-background p-6"
    >
      <h2 className="mb-6 text-lg font-semibold">Actions</h2>

      <div className="space-y-3">{children}</div>
    </div>
  );
}
