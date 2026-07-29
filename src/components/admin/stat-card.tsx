import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: number;
  icon: ReactNode;
}

export default function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>

          <h2 className="mt-3 text-4xl font-bold">{value}</h2>
        </div>

        <div className="rounded-xl bg-primary/10 p-4">{icon}</div>
      </div>
    </div>
  );
}
