import Container from "@/components/layout/container";

export default function AboutSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-primary font-medium">About Us</span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Websites Built For Real Business Growth
          </h2>

          <p className="mt-8 text-lg text-muted-foreground">
            A website should do more than look good.
          </p>

          <p className="mt-4 text-lg text-muted-foreground">
            It should help people understand what you do, trust your business,
            and take action.
          </p>

          <p className="mt-4 text-lg text-muted-foreground">
            Every project we build focuses on clarity, performance,
            accessibility, and user experience.
          </p>

          <p className="mt-4 text-lg text-muted-foreground">
            Whether you're launching a startup, modernizing an existing brand,
            or creating a new digital product, we help you build an online
            presence that works.
          </p>
        </div>
      </Container>
    </section>
  );
}
