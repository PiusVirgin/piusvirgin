"use client";

import { Input } from "@/components/ui/input";

interface Props {
  title: string;
  slug: string;
  excerpt: string;
  onTitleChange: (value: string) => void;
  onExcerptChange: (value: string) => void;
}

export default function ArticleDetailsCard({
  title,
  slug,
  excerpt,
  onTitleChange,
  onExcerptChange,
}: Props) {
  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Article Details</h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Basic information about this article.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block font-medium">Title</label>

          <Input
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="Article title"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Slug</label>

          <Input value={slug} readOnly className="bg-muted" />
        </div>

        <div>
          <label className="mb-2 block font-medium">Excerpt</label>

          <textarea
            rows={5}
            value={excerpt}
            onChange={(e) => onExcerptChange(e.target.value)}
            className="
              w-full
              rounded-xl
              border
              p-4
              outline-none
              focus:ring-2
              focus:ring-primary
            "
          />
        </div>
      </div>
    </div>
  );
}
