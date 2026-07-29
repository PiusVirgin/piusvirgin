import Container from "@/components/layout/container";
import Link from "next/link";

export default function NewsHero() {
  return (
    <section className="border-b bg-muted/30 py-24">
      <Container>
        <div className="max-w-4xl space-y-8">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Media
          </span>

          <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
            PIUSVIRGIN
            <br />
            NEWS ONLINE
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
            Our team of professionals are driven to educate, inform, entertain,
            collaborate, and deliver on the value that we promise:
            <strong> Capturing Today's Events For Tomorrow's History.</strong>
          </p>

          <p className="max-w-3xl leading-8 text-muted-foreground">
            It is our responsibility to ensure every editorial decision is
            informed by data—not guesswork—while remaining true to the culture
            and values that define PiusVirgin.
          </p>

          <Link
            href="#latest-news"
            className="inline-flex rounded-xl bg-primary px-6 py-3 text-primary-foreground"
          >
            Explore News
          </Link>
        </div>
      </Container>
    </section>
  );
}
