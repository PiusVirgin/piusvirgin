import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NewsCardProps {
  article: any;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group overflow-hidden rounded-3xl border bg-background transition hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-6">
        <span className="text-primary text-xs font-semibold uppercase tracking-widest">
          {article.category}
        </span>

        <h3 className="line-clamp-2 text-2xl font-bold group-hover:text-primary transition-colors">
          {article.title}
        </h3>

        <p className="line-clamp-3 text-muted-foreground">{article.excerpt}</p>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{article.author}</span>

          <span>{article.readTime} mins</span>
        </div>

        {/* <span className="inline-flex font-semibold text-primary">
          Read Story →
        </span> */}

        <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">
          Read Article
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
