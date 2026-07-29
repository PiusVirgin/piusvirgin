"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { deleteNewsAction } from "@/actions/news.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DeleteDialog from "../delete-dialog";

interface NewsActionsProps {
  news: {
    id: string;
  };
}

export default function NewsActions({ news }: NewsActionsProps) {

  const router = useRouter();
  const [open, setOpen] = useState(false);



  async function handleDelete() {
    const confirmed = window.confirm("Delete this article?");

    if (!confirmed) return;

    const result = await deleteNewsAction(news.id);

    if (result.success) {
      toast.success("Article deleted.");

      router.refresh();
    } else {
      toast.error(result.message);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button size="icon" variant="ghost" asChild>
        <Link href={`/admin/news/${news.id}/edit`}>
          <Pencil size={18} />
        </Link>
      </Button>

      <Button size="icon" variant="ghost" onClick={() => setOpen(true)}>
        <Trash2 size={18} />
      </Button>

      <DeleteDialog
        open={open}
        onOpenChange={setOpen}
        title="Delete Article?"
        description="This article will be permanently removed."
        onConfirm={async () => {
          const result = await deleteNewsAction(news.id);

          if (!result.success) {
            toast.error(result.message);
            return;
          }

          toast.success("Article deleted.");

          router.refresh();
        }}
      />
    </div>
  );
}
