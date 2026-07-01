"use client";

export default function TransportQuoteForm({
  serviceTitle,
}: {
  serviceTitle: string;
}) {
  return (
    <form className="space-y-4">
      <input placeholder="Full Name" className="w-full rounded-xl border p-3" />

      <input placeholder="Email" className="w-full rounded-xl border p-3" />

      <input
        placeholder="Phone Number"
        className="w-full rounded-xl border p-3"
      />

      <textarea
        placeholder={`Tell us about your ${serviceTitle} needs`}
        className="min-h-[150px] w-full rounded-xl border p-3"
      />

      <button
        className="
        w-full
        rounded-xl
        bg-[var(--color-red)]
        py-3
        text-white
        transition
        hover:opacity-90
        "
      >
        Submit Inquiry
      </button>
    </form>
  );
}
