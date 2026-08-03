"use client";

import { useEffect, useState } from "react";
import slugify from "slugify";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CoverUpload from "./cover-upload";
import RichTextEditor from "./rich-text-editor";
import { createNewsAction, updateNewsAction } from "@/actions/news.actions";
import { toast } from "sonner";

interface NewsFormProps {
  initialData?: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage: string | null;
    category: string;
    author: string;
    featured: boolean;
    published: boolean;
    readTime: number | null;
  };
}

export default function NewsForm({ initialData }: NewsFormProps) {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? "");
  const [content, setContent] = useState(initialData?.content ?? "");
  const [coverImage, setCoverImage] = useState(initialData?.coverImage ?? "");
  const [category, setCategory] = useState(initialData?.category ?? "");
  const [author, setAuthor] = useState(initialData?.author ?? "");
  const [featured, setFeatured] = useState(initialData?.featured ?? false);
  const [published, setPublished] = useState(initialData?.published ?? true);
  const [readTime, setReadTime] = useState(initialData?.readTime ?? 5);

  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (initialData) return;

    setSlug(
      slugify(title, {
        lower: true,
        strict: true,
        trim: true,
      }),
    );
  }, [title, initialData]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitting(true);

    try {
      const result = initialData
        ? await updateNewsAction(initialData.id, {
            title,
            slug,
            excerpt,
            content,
            coverImage,
            category,
            author,
            featured,
            published,
            readTime,
          })
        : await createNewsAction({
            title,
            slug,
            excerpt,
            content,
            coverImage,
            category,
            author,
            featured,
            published,
            readTime,
          });

      if (result.success) {
        toast.success("Article published successfully!");

        setTimeout(() => {
          router.replace("/admin/news");
        }, 800);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error(error);

      toast.error("An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-2">
          <label>Title</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Article title"
          />
        </div>

        <div className="space-y-2">
          <label>Slug</label>
          <Input value={slug} readOnly className="bg-muted" />
        </div>
      </div>

      <div className="space-y-2">
        <label>Excerpt</label>

        <textarea
          rows={4}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div className="space-y-2">
        <label>Content</label>

        <RichTextEditor value={content} onChange={setContent} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-2">
          <label>Category</label>
          <Input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Logistics"
          />
        </div>

        <div className="space-y-2">
          <label>Author</label>
          <Input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Prime Dev"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
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

      <div className="space-y-2">
        <label>Read Time (minutes)</label>

        <Input
          type="number"
          value={readTime}
          onChange={(e) => setReadTime(Number(e.target.value))}
        />
      </div>

      <div className="space-y-2">
        <label>Cover Image</label>

        <CoverUpload value={coverImage} onChange={setCoverImage} />
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="secondary" type="button">
          Save Draft
        </Button>

        <Button type="submit" disabled={submitting}>
          {submitting ? "Publishing..." : "Publish Article"}
        </Button>
      </div>
    </form>
  );
}
