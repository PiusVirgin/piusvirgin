"use client";

import Link from "next/link";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { navigation } from "@/lib/navigation";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="
          w-full
          sm:w-105
          bg-background
          border-l
          border-border
          p-0
        "
      >
        <div className="h-full flex flex-col">
          {/* Header */}

          <div className="border-b border-border p-6">
            <SheetTitle className="text-left font-heading text-xl">
              Menu
            </SheetTitle>

            <p className="mt-2 text-sm text-muted-foreground">
              Explore Josh Caleb Will Petroleum.
            </p>
          </div>

          {/* Navigation */}

          <div className="flex-1 overflow-y-auto p-6">
            <Accordion type="single" collapsible className="space-y-2">
              {navigation.map((item) => {
                const hasSubmenu = item.submenu && item.submenu.length > 0;

                if (!hasSubmenu) {
                  return (
                    <Link
                      key={item.title}
                      href={item.href ?? "/"}
                      onClick={onClose}
                      className="
                        flex
                        w-full
                        items-center
                        rounded-xl
                        px-4
                        py-4
                        text-base
                        font-medium
                        transition-colors
                        hover:bg-secondary
                      "
                    >
                      {item.title}
                    </Link>
                  );
                }

                return (
                  <AccordionItem
                    key={item.title}
                    value={item.title}
                    className="
                      rounded-2xl
                      border
                      border-border
                      px-4
                      overflow-hidden
                      bg-card

                    "
                  >
                    <AccordionTrigger
                      className="
                        text-base
                        font-medium
                      "
                    >
                      {item.title}
                    </AccordionTrigger>

                    <AccordionContent>
                      <div className="space-y-2 pb-2">
                        {item.href && (
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="
                              flex
                              items-center
                              justify-between
                              rounded-xl
                              border
                              border-border
                              bg-secondary
                              p-3
                              font-medium
                              transition-all
                              hover:bg-secondary/80
                              "
                          >
                            <>
                              <span>Overview</span>
                              <span>→</span>
                            </>
                          </Link>
                        )}
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={onClose}
                            className="
                              block
                              rounded-lg
                              p-3
                              transition-colors
                              hover:bg-secondary
                            "
                          >
                            <div className="font-medium">{subItem.title}</div>

                            <div
                              className="
                                mt-1
                                text-sm
                                text-muted-foreground
                              "
                            >
                              {subItem.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* Footer CTA */}

          <div
            className="
              border-t
              border-border
              p-6
            "
          >
            <Link
              href="/who-we-are/contact-us"
              onClick={onClose}
              className="
                flex
                h-12
                items-center
                justify-center
                rounded-full
                bg-primary
                text-primary-foreground
                font-medium
              "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
