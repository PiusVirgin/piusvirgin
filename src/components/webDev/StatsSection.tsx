import Container from "@/components/layout/container";

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Responsive Designs" },
  { value: "24/7", label: "Support Available" },
];

export default function StatsSection() {
  return (
    <section className="border-y bg-muted/30 py-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-4xl font-bold">{stat.value}</h3>

              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
