import Container from "@/components/layout/container";

const services = ["Blogging", "Advertising", "Public Relations"];

export default function NewsCategories() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((item) => (
            <div
              key={item}
              className="rounded-2xl border bg-background p-8 transition hover:border-primary"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
