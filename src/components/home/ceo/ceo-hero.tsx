import Container from "@/components/layout/container";
import CEOContent from "./ceo-content";
import CEOImage from "./ceo-image";

export default function CEOHero() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <Container>
        <div
          className="
    grid
    items-center
    gap-24

    lg:grid-cols-[1.05fr_.95fr]
  "
        >
          <CEOContent />
          <CEOImage />
        </div>
      </Container>
    </section>
  );
}
