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
    <div className="rounded-3xl border bg-background shadow-sm">
      <div className="border-b px-8 py-7">
        <h2 className="text-2xl font-bold">Article Details</h2>

        <p className="mt-2 text-muted-foreground">
          Give your article a memorable title and summary.
        </p>
      </div>

      <div className="space-y-8 p-8">
        <div className="space-y-3">
          <label className="font-semibold">Title</label>

          <Input
            value={title}
            placeholder="Write your article title..."
            onChange={(e) => onTitleChange(e.target.value)}
            className="h-14 rounded-xl text-lg"
          />
        </div>

        <div className="space-y-3">
          <label className="font-semibold">Slug</label>

          <div className="rounded-xl border bg-muted px-5 py-4 text-muted-foreground">
            {slug}
          </div>
        </div>

        <div className="space-y-3">
          <label className="font-semibold">Excerpt</label>

          <textarea
            rows={5}
            value={excerpt}
            onChange={(e) => onExcerptChange(e.target.value)}
            placeholder="Short summary of the article..."
            className="
              w-full
              rounded-xl
              border
              p-4
              outline-none
              resize-none
              transition
              focus:border-primary
            "
          />
        </div>
      </div>
    </div>
  );
}
