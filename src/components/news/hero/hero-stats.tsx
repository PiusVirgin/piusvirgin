export default function HeroStats() {
  const stats = [
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "500+",
      label: "Published Stories",
    },
    {
      value: "10k+",
      label: "Monthly Readers",
    },
  ];

  return (
    <div className="mt-14 grid grid-cols-3 gap-8 border-t pt-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-3xl font-bold">
            {stat.value}
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
