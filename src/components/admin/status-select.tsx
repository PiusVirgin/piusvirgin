"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StatusSelectProps {
  id: string;
  status: string;

  onStatusChange: (
    id: string,
    status: string,
  ) => Promise<{
    success: boolean;
    message?: string;
  }>;
}

export default function StatusSelect({
  id,
  status,
  onStatusChange,
}: StatusSelectProps) {
  const [isPending, startTransition] = useTransition();

  function handleChange(value: string) {
    startTransition(async () => {
      const result = await onStatusChange(id, value);

      if (!result.success) {
        toast.error(result.message ?? "Failed to update status.");
        return;
      }

      toast.success(result.message ?? "Status updated successfully.");
    });
  }

  return (
    <Select
      defaultValue={status}
      onValueChange={handleChange}
      disabled={isPending}
    >
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="new">New</SelectItem>

        <SelectItem value="contacted">Contacted</SelectItem>

        <SelectItem value="in_progress">In Progress</SelectItem>

        <SelectItem value="completed">Completed</SelectItem>
      </SelectContent>
    </Select>
  );
}
