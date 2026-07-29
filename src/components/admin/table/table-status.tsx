interface TableStatusProps {
  status: string;
}

const variants = {
  new: "bg-blue-100 text-blue-700",

  contacted: "bg-yellow-100 text-yellow-700",

  in_progress: "bg-purple-100 text-purple-700",

  completed: "bg-green-100 text-green-700",
};

export default function TableStatus({ status }: TableStatusProps) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium capitalize ${
        variants[status as keyof typeof variants] ?? "bg-gray-100 text-gray-700"
      }`}
    >
      {status.replace("_", " ")}
    </span>
  );
}
