"use client";

import { useEffect, useState } from "react";
import slugify from "slugify";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createNewsAction, updateNewsAction } from "@/actions/news.actions";
import { toast } from "sonner";
import NewsStudio from "./studio/news-studio";

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
      <NewsStudio
        title={title}
        slug={slug}
        excerpt={excerpt}
        content={content}
        coverImage={coverImage}
        category={category}
        author={author}
        featured={featured}
        published={published}
        readTime={readTime}
        setTitle={setTitle}
        setExcerpt={setExcerpt}
        setContent={setContent}
        setCoverImage={setCoverImage}
        setCategory={setCategory}
        setAuthor={setAuthor}
        setFeatured={setFeatured}
        setPublished={setPublished}
        setReadTime={setReadTime}
      />

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
