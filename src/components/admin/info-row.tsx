interface InfoRowProps {
  label: string;
  value?: string | null;
}

export default function InfoRow({
  label,
  value,
}: InfoRowProps) {
  return (
    <div className="flex items-start justify-between gap-8 border-b pb-4 last:border-none last:pb-0">
      <span className="text-sm text-muted-foreground">{label}</span>

      <span
        className="text-right 
break-all font-medium"
      >
        {value || "-"}
      </span>
    </div>
  );
}
