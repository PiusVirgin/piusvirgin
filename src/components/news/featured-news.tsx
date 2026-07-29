import Image from "next/image";
import Link from "next/link";

interface FeaturedNewsProps {
  article: any;
}

export default function FeaturedNews({ article }: FeaturedNewsProps) {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <Link
        href={`/news/${article.slug}`}
        className="grid gap-10 lg:grid-cols-2"
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {article.category}
          </span>

          <h2 className="mt-4 text-5xl font-bold leading-tight">
            {article.title}
          </h2>

          <p className="mt-6 text-muted-foreground">{article.excerpt}</p>

          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <span>{article.author}</span>

            <span>•</span>

            <span>{article.readTime} min read</span>
          </div>

          <span className="mt-10 text-primary font-semibold">Read Story →</span>
        </div>
      </Link>
    </section>
  );
}
