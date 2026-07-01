interface ServiceRailProps {
  total: number;
  active: number;
}

export default function ServiceRail({ total, active }: ServiceRailProps) {
  return (
    <div
      className="
        flex
        flex-col

        gap-6
      "
    >
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className="
            flex
            items-center
            gap-4
          "
        >
          <span
            className={`
              text-sm
              font-semibold

              transition-all

              ${active === index ? "text-primary" : "text-muted-foreground"}
            `}
          >
            {(index + 1).toString().padStart(2, "0")}
          </span>

          <div
            className={`
              h-0.5
              w-12

              transition-all

              ${active === index ? "bg-primary" : "bg-border"}
            `}
          />
        </div>
      ))}
    </div>
  );
}
