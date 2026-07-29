"use client";

import { formatDistanceToNow } from "date-fns";

interface Inquiry {
  id: string;
  fullName: string;
  service: string;
  pickup: string;
  destination: string;
  status: string;
  createdAt: string;
}

interface RecentRequestsProps {
  requests: Inquiry[];
}

export default function RecentRequests({ requests }: RecentRequestsProps) {
  if (!requests.length) {
    return (
      <div className="rounded-2xl border bg-background p-10 text-center">
        <h3 className="text-lg font-semibold">No requests yet</h3>

        <p className="mt-2 text-muted-foreground">
          New transport inquiries will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-background">
      <div className="border-b px-6 py-5">
        <h2 className="text-xl font-semibold">Recent Requests</h2>
      </div>

      <table className="w-full">
        <thead className="bg-muted/40">
          <tr className="text-left text-sm">
            <th className="px-6 py-4">Customer</th>
            <th>Service</th>
            <th>Route</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((request) => (
            <tr
              key={request.id}
              className="border-t transition-colors hover:bg-muted/30"
            >
              <td className="px-6 py-5 font-medium">{request.fullName}</td>

              <td>{request.service}</td>

              <td>
                {request.pickup} → {request.destination}
              </td>

              <td>
                <StatusBadge status={request.status} />
              </td>

              <td className="text-muted-foreground">
                {formatDistanceToNow(new Date(request.createdAt), {
                  addSuffix: true,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    new: "bg-blue-100 text-blue-700",
    contacted: "bg-yellow-100 text-yellow-700",
    in_progress: "bg-purple-100 text-purple-700",
    completed: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status as keyof typeof styles] ?? "bg-gray-100 text-gray-700"
      }`}
    >
      {status.replace("_", " ")}
    </span>
  );
}
