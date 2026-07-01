interface Props {
  service: {
    title: string;
    content: string[];
    highlights: string[];
  };
}

export default function TransportContent({ service }: Props) {
  return (
    <div>
      <h2 className="mb-8 text-4xl font-bold">Overview</h2>

      <div className="space-y-6">
        {service.content.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="mb-6 text-2xl font-bold">Key Benefits</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {service.highlights.map((item) => (
            <div key={item} className="rounded-2xl border p-5">
              ✓ {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
