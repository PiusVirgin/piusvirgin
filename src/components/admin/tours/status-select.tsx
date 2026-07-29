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

import { updateTourStatus } from "@/actions/tour.actions";

interface StatusSelectProps {
  id: string;
  status: string;
}

export default function StatusSelect({ id, status }: StatusSelectProps) {
  const [isPending, startTransition] = useTransition();

  function handleChange(value: string) {
    startTransition(async () => {
      const result = await updateTourStatus(id, value);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success("Status updated.");
    });
  }

  return (
    <Select
      defaultValue={status}
      onValueChange={handleChange}
      disabled={isPending}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="new">New</SelectItem>

        <SelectItem value="contacted">Contacted</SelectItem>

        <SelectItem value="confirmed">Confirmed</SelectItem>

        <SelectItem value="cancelled">Cancelled</SelectItem>
      </SelectContent>
    </Select>
  );
}
