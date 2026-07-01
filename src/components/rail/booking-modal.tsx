"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function BookingModal({ open, onClose }: BookingModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-[999]

              bg-black/50

              backdrop-blur-md
            "
          />

          {/* MODAL */}

          <div
            className="
    fixed
    inset-0
    z-[1000]

    overflow-y-auto

    p-4
    md:p-8

    flex
    items-start
    lg:items-center
    justify-center
  "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 40,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
              relative

              w-full
              max-w-5xl

              my-6
              lg:my-0

              overflow-hidden

              rounded-[36px]

              border
              border-white/10

              bg-background

              shadow-2xl
              "
            >
              <div className="grid lg:grid-cols-[420px_1fr]">
                {/* LEFT PANEL */}

                <div
                  className="
                  relative

                  overflow-hidden

                  bg-pius-red

                  px-6
                  py-10

                  text-white

                  md:px-12
                  md:py-14
                  "
                >
                  <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                  <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                    Railway Booking
                  </p>

                  <h2
                    className="
                    mt-8

                    text-3xl
                    md:text-5xl

                    font-black

                    leading-none
                  "
                  >
                    Your next
                    <br />
                    journey
                    <br />
                    begins.
                  </h2>

                  <p className="mt-8 leading-relaxed text-white/80 w-full">
                    Complete the form and our booking team will confirm your
                    trip.
                  </p>
                </div>

                {/* RIGHT */}

                <div className="relative p-8 md:p-12">
                  <div className="sticky top-4 z-30 flex justify-end">
                    <button
                      onClick={onClose}
                      className="
absolute

right-14


top-[-240]


z-20

rounded-full

bg-background/90

p-3

backdrop-blur

transition

hover:bg-muted

md:right-6
md:top-6
"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black">
                    Book Your Journey
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    Fill in your travel information.
                  </p>

                  {/* FORM */}

                  <form className="mt-10 space-y-4">
                    <motion.input
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      placeholder="Full Name"
                      className="
                      w-full

                      rounded-2xl

                      border

                      border-border

                      bg-transparent

                      px-4

                      py-4

                      outline-none

                      focus:border-pius-red
                    "
                    />

                    <motion.input
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      placeholder="Email Address"
                      className="
                      w-full

                      rounded-2xl

                      border

                      border-border

                      bg-transparent

                      px-5

                      py-4

                      outline-none

                      focus:border-pius-red
                    "
                    />

                    <motion.input
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      placeholder="Phone Number"
                      className="
                      w-full

                      rounded-2xl

                      border

                      border-border

                      bg-transparent

                      px-5

                      py-4

                      outline-none

                      focus:border-pius-red
                    "
                    />

                    <div className="grid gap-5 md:grid-cols-2">
                      <motion.input
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        placeholder="Departure"
                        className="
                        rounded-2xl
                        border
                        border-border
                        px-5
                        py-4
                      "
                      />

                      <motion.input
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        placeholder="Destination"
                        className="
                        rounded-2xl
                        border
                        border-border
                        px-5
                        py-4
                      "
                      />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <motion.input
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 }}
                        type="date"
                        className="
                        rounded-2xl
                        border
                        border-border
                        px-5
                        py-4
                      "
                      />

                      <motion.input
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        type="number"
                        placeholder="Passengers"
                        className="
                        rounded-2xl
                        border
                        border-border
                        px-5
                        py-4
                      "
                      />
                    </div>

                    <button
                      className="
                      w-full

                      rounded-full

                      bg-pius-red

                      py-5

                      font-semibold

                      text-white

                      transition

                      hover:opacity-90
                    "
                    >
                      Book Journey →
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
