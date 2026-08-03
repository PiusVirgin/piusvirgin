"use client";

import CoverUpload from "./cover-upload";
import { Input } from "@/components/ui/input";

interface Props {
  coverImage: string;
  setCoverImage: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  author: string;
  setAuthor: (value: string) => void;

  featured: boolean;
  setFeatured: (value: boolean) => void;

  published: boolean;
  setPublished: (value: boolean) => void;

  readTime: number;
  setReadTime: (value: number) => void;
}

export default function PublishingSidebar({
  coverImage,
  setCoverImage,
  category,
  setCategory,
  author,
  setAuthor,
  featured,
  setFeatured,
  published,
  setPublished,
  readTime,
  setReadTime,
}: Props) {
  return (
    <div className="sticky top-24">
      <div className="rounded-2xl border bg-background p-6 shadow-sm">
        <h2 className="text-xl font-bold">Publishing</h2>

        <p className="mt-1 mb-6 text-sm text-muted-foreground">
          Configure how this article is published.
        </p>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block font-medium">Cover Image</label>

            <CoverUpload value={coverImage} onChange={setCoverImage} />
          </div>

          <div>
            <label className="mb-2 block font-medium">Category</label>

            <Input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Author</label>

            <Input value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>

          <div>
            <label className="mb-2 block font-medium">Read Time</label>

            <Input
              type="number"
              value={readTime}
              onChange={(e) => setReadTime(Number(e.target.value))}
            />
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
            />
            Featured Article
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />
            Publish Immediately
          </label>
        </div>
      </div>
    </div>
  );
}
