import Link from "next/link";

export default function TransportCTA() {
  return (
    <section
      className="
      rounded-[40px]
      border
      p-12
      text-center
      "
    >
      <h2 className="mb-4 text-4xl font-bold">Need Logistics Support?</h2>

      <p className="mb-8 text-muted-foreground">
        Our team is ready to help with reliable, scalable transportation
        solutions.
      </p>

      <Link
        href="/contact"
        className="
        rounded-full
        bg-[var(--color-red)]
        px-8
        py-4
        text-white
        "
      >
        Contact Us
      </Link>
    </section>
  );
}
