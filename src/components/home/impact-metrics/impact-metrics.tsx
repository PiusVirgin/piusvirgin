import ImpactStory from "./impact-story";

export default function ImpactMetrics() {
  return (
    <section
      className="
        relative

        bg-linear-to-b
        from-background
        via-secondary/20
        to-background
        bg-[#030e9c]
      "
    >
      <div
        className="
    mx-auto
    max-w-360

    px-6
    lg:px-10

    pt-10

    flex
    flex-col
    items-center
  "
      >
        <span
          className="
      text-xs
      uppercase
      tracking-[0.25em]
      text-primary
    "
        >
          Impact
        </span>

        <h2
          className="
      mt-6

      max-w-4xl

      text-center

      text-4xl
      font-bold

      md:text-5xl
      lg:text-7xl
    "
        >
          Built On Experience.
          <br />
          Driven By Results.
        </h2>
      </div>

      <ImpactStory />
    </section>
  );
}
