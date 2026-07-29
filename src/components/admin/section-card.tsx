import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
}

export default function SectionCard({ title, children }: SectionCardProps) {
  return (
    <div className="rounded-2xl border bg-background p-6">
      <h2 className="mb-6 text-lg font-semibold">{title}</h2>

      <div className="space-y-5">{children}</div>
    </div>
  );
}
