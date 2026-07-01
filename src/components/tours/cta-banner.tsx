import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      className="
      mt-20
      rounded-[40px]
      bg-gradient-to-r
      from-primary
      to-primary/70
      px-10
      py-20
      text-center
      text-white
    "
    >
      <h2 className="mb-4 text-4xl font-bold">
        Ready For Your Next Adventure?
      </h2>

      <p className="mx-auto mb-8 max-w-2xl">
        Let us help you create unforgettable memories across Nigeria and West
        Africa.
      </p>

      <Link
        href="/contact"
        className="
          inline-flex
          rounded-full
          bg-white
          px-8
          py-4
          font-semibold
          text-black
        "
      >
        Contact Us
      </Link>
    </section>
  );
}
