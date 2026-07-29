"use client";

import {
  ClipboardList,
  Clock3,
  CheckCircle2,
  PackageCheck,
} from "lucide-react";

import StatCard from "@/components/admin/stat-card";
import { useDashboard } from "@/lib/hooks/use-dashboard";
import RecentRequests from "@/components/admin/recent-requests";

export default function DashboardPage() {
  const { data, loading } = useDashboard();

  if (loading) {
    return <p>Loading dashboard...</p>;
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Requests"
          value={data.stats.total}
          icon={<ClipboardList className="text-primary" />}
        />

        <StatCard
          title="New"
          value={data.stats.new}
          icon={<Clock3 className="text-primary" />}
        />

        <StatCard
          title="Contacted"
          value={data.stats.contacted}
          icon={<PackageCheck className="text-primary" />}
        />

        <StatCard
          title="Completed"
          value={data.stats.completed}
          icon={<CheckCircle2 className="text-primary" />}
        />
      </div>
      <RecentRequests requests={data.recent} />
    </div>
  );
}
