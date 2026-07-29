interface FeaturedMetaProps {
  author: string;
  readTime: number | null;
  publishedAt: Date | null;
}

export default function FeaturedMeta({
  author,
  readTime,
  publishedAt,
}: FeaturedMetaProps) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/80">
      <span>{author}</span>

      <span>•</span>

      <span>{readTime ?? 5} min read</span>

      <span>•</span>

      <span>
        {publishedAt ? new Date(publishedAt).toLocaleDateString() : ""}
      </span>
    </div>
  );
}
