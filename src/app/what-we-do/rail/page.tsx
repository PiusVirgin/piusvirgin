'use client';

import { useState } from "react";

import BookingCTA from "@/components/rail/booking-cta";
import Destinations from "@/components/rail/destinations";
import Experience from "@/components/rail/experience";
import Hero from "@/components/rail/hero";
import Journey from "@/components/rail/journey";
import Safety from "@/components/rail/safety";
import WhyRail from "@/components/rail/why-rail";
import BookingModal from "@/components/rail/booking-modal";

export default function RailPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <>
      <Hero />
      <WhyRail />
      <Experience />
      <Journey />
      <Safety />
      <Destinations />
      <BookingCTA onBook={() => setBookingOpen(true)} />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
