"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

interface UpdateStatusButtonProps {
  id: string;
  status: string;
  children: React.ReactNode;
}

export default function UpdateStatusButton({
  id,
  status,
  children,
}: UpdateStatusButtonProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  async function updateStatus() {
    try {
      const response = await fetch(`/api/admin/transport/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      toast.success("Status updated successfully.");

      startTransition(() => {
        router.refresh();
      });
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to update request."
      );
    }
  }

  return (
    <Button
      variant="secondary"
      className="w-full"
      disabled={isPending}
      onClick={updateStatus}
    >
      {isPending ? "Updating..." : children}
    </Button>
  );
}
