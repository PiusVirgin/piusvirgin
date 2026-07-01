const values = [
  {
    title: "Integrity",
    description: "We uphold honesty and transparency in every transaction.",
  },
  {
    title: "Reliability",
    description: "Dependable logistics solutions delivered consistently.",
  },
  {
    title: "Customer Focus",
    description: "Every solution is tailored around client needs.",
  },
  {
    title: "Teamwork",
    description: "Collaboration drives our success and innovation.",
  },
];

export default function TransportValues() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-16 text-center text-4xl font-bold">
          What We Stand For
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="
                rounded-3xl
                border
                p-8
                backdrop-blur-xl
                transition-all
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <h3 className="mb-4 text-2xl font-semibold">{value.title}</h3>

              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
