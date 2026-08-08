"use client";

import ArticleDetailsCard from "../article-details-card";
import PublishingSidebar from "../publishing-sidebar";
import RichTextEditor from "../rich-text-editor";

interface NewsStudioProps {
  title: string;
  slug: string;
  excerpt: string;
  content: string;

  coverImage: string;

  category: string;
  author: string;

  featured: boolean;
  published: boolean;

  readTime: number;

  setTitle: (v: string) => void;
  setExcerpt: (v: string) => void;

  setContent: (v: string) => void;

  setCoverImage: (v: string) => void;

  setCategory: (v: string) => void;
  setAuthor: (v: string) => void;

  setFeatured: (v: boolean) => void;
  setPublished: (v: boolean) => void;

  setReadTime: (v: number) => void;
}

export default function NewsStudio({
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

  setTitle,
  setExcerpt,

  setContent,

  setCoverImage,

  setCategory,
  setAuthor,

  setFeatured,
  setPublished,

  setReadTime,
}: NewsStudioProps) {
  return (
    <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
      {/* LEFT */}

      <div className="space-y-8">
        <ArticleDetailsCard
          title={title}
          slug={slug}
          excerpt={excerpt}
          onTitleChange={setTitle}
          onExcerptChange={setExcerpt}
        />

        <div className="rounded-3xl border bg-background shadow-sm overflow-hidden">
          <div className="border-b px-8 py-7">
            <h2 className="text-2xl font-bold">Article Content</h2>

            <p className="mt-2 text-muted-foreground">
              This is where your complete story comes to life.
            </p>
          </div>

          <RichTextEditor value={content} onChange={setContent} />
        </div>
      </div>

      {/* RIGHT */}

      <PublishingSidebar
        coverImage={coverImage}
        setCoverImage={setCoverImage}
        category={category}
        setCategory={setCategory}
        author={author}
        setAuthor={setAuthor}
        featured={featured}
        setFeatured={setFeatured}
        published={published}
        setPublished={setPublished}
        readTime={readTime}
        setReadTime={setReadTime}
      />
    </div>
  );
}
