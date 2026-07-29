"use client";

import BookingDialog from "@/components/shared/booking/booking-dialog";
import RailBookingForm from "./rail-booking-form";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({
  open,
  onClose,
}: BookingModalProps) {
  return (
    <BookingDialog
      open={open}
      onOpenChange={(value) => {
        if (!value) onClose();
      }}
      title="Book Your Journey"
      subtitle="Fill in your travel information."

      sidebarTitle={
        <>
          Your next
          <br />
          journey
          <br />
          begins.
        </>
      }

      sidebarDescription="
Complete the form and our booking team will confirm your trip."
    >
      <RailBookingForm onSuccess={onClose} />
    </BookingDialog>
  );
}
