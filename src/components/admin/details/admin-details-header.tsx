import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ReactNode } from "react";

interface AdminDetailsHeaderProps {
  title: string;
  subtitle?: string;

  backHref: string;
  backLabel: string;

  children?: ReactNode;
}

export default function AdminDetailsHeader({
  title,
  subtitle,
  backHref,
  backLabel,
  children,
}: AdminDetailsHeaderProps) {
  return (
    <div className="space-y-6">
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />

        Back to {backLabel}
      </Link>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <h1 className="font-heading text-4xl font-bold">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        {children && (
          <div className="flex flex-wrap items-center gap-3">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
