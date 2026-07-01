"use client";

import { submitTourInquiry } from "@/actions/tour-inquiry";
import { useState } from "react";

interface InquiryFormProps {
  tourTitle: string;
}

export default function InquiryForm({
  tourTitle,
}: InquiryFormProps) {
  const [loading, setLoading] = useState(false);

  async function action(formData: FormData) {
    setLoading(true);

    await submitTourInquiry(formData);

    setLoading(false);

    alert("Inquiry submitted successfully");
  }

  return (
    <form
      action={action}
      className="space-y-4"
    >
      <input
        type="hidden"
        name="tour"
        value={tourTitle}
      />

      <input
        required
        name="name"
        placeholder="Full Name"
        className="w-full rounded-xl border px-4 py-3"
      />

      <input
        required
        type="email"
        name="email"
        placeholder="Email Address"
        className="w-full rounded-xl border px-4 py-3"
      />

      <input
        required
        name="phone"
        placeholder="Phone Number"
        className="w-full rounded-xl border px-4 py-3"
      />

      <input
        required
        type="date"
        name="travelDate"
        className="w-full rounded-xl border px-4 py-3"
      />

      <input
        type="number"
        name="guests"
        placeholder="Number of Guests"
        className="w-full rounded-xl border px-4 py-3"
      />

      <textarea
        rows={5}
        name="message"
        placeholder="Special Requests"
        className="w-full rounded-xl border px-4 py-3"
      />

      <button
        disabled={loading}
        className="w-full rounded-xl bg-primary px-4 py-3 font-semibold text-white"
      >
        {loading ? "Submitting..." : "Send Inquiry"}
      </button>
    </form>
  );
}
