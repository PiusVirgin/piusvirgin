import { transportFeatures } from "@/data/transportFeatures";

export default function TransportFeatures() {
  return (
    <section className="py-20">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {transportFeatures.map((item) => (
          <div
            key={item.title}
            className="
              rounded-3xl
              border
              bg-card
              p-8
              backdrop-blur-xl
            "
          >
            <h3 className="mb-4 text-xl font-bold">{item.title}</h3>

            <p className="text-muted-foreground">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
