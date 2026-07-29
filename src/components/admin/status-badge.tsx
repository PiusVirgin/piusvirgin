import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: string;
}

const styles: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",

  contacted: "bg-yellow-100 text-yellow-700",

  confirmed: "bg-green-100 text-green-700",

  cancelled: "bg-red-100 text-red-700",

  in_progress: "bg-orange-100 text-orange-700",

  completed: "bg-green-100 text-green-700",
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  return (
    <Badge
      className={
        styles[status] ??
        "bg-muted text-foreground"
      }
    >
      {status
        .replaceAll("_", " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())}
    </Badge>
  );
}
