"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ReactNode } from "react";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  title: string;
  subtitle: string;

  sidebarTitle: ReactNode;
  sidebarDescription: ReactNode;

  children: ReactNode;
}

export default function BookingDialog({
  open,
  onOpenChange,
  title,
  subtitle,
  sidebarTitle,
  sidebarDescription,
  children,
}: BookingDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
    p-0

    overflow-hidden

    sm:max-w-6xl

    max-h-[92vh]

    rounded-[36px]

    border-0
  "
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>

        <div
          className="
    grid

    max-h-[92vh]

    lg:grid-cols-[420px_1fr]
  "
        >
          {/* LEFT SIDE */}

          <div
            className="
              relative

              overflow-hidden

              bg-pius-red

              px-8
              py-8

              md:px-8
              md:py-14

              text-white
            "
          >
            <div
              className="
                absolute

                -top-24
                -right-24

                h-72
                w-72

                rounded-full

                bg-white/10

                blur-3xl
              "
            />

            <p
              className="
                text-xs

                uppercase

                tracking-[0.35em]

                text-white/70
              "
            >
              Booking
            </p>

            <h2
              className="
                mt-8

                text-2xl
                md:text-4xl


                font-black

                leading-tight
              "
            >
              {sidebarTitle}
            </h2>

            <p
              className="
                mt-8

                leading-relaxed

                text-white/80
              "
            >
              {sidebarDescription}
            </p>
          </div>

          {/* RIGHT SIDE */}

          <div
            className="
    relative

    flex

    flex-col

    bg-background

    overflow-hidden
  "
          >
            <Button
              size="icon"
              variant="ghost"
              className="
                absolute

                right-6
                top-6

                rounded-full
              "
              onClick={() => onOpenChange(false)}
            >
              <X className="h-5 w-5" />
            </Button>

            <div
              className="
    flex-1

    overflow-y-auto

    px-8
    py-10

    md:px-12
  "
            >
              <h3 className="text-3xl font-black">{title}</h3>

              <p className="mt-2 text-muted-foreground">{subtitle}</p>

              <div className="mt-10">{children}</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
