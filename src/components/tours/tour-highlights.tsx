import { CheckCircle2 } from "lucide-react";

interface Props {
  highlights: string[];
}

export default function TourHighlights({ highlights }: Props) {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold">Tour Highlights</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {highlights.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-2xl border p-4"
          >
            <CheckCircle2 className="mt-1 text-primary" size={18} />

            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
