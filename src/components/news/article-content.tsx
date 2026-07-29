import Container from "@/components/layout/container";
import ArticleShare from "./article/article-share";

interface ArticleContentProps {
  title: string;
  content: string;
}

export default function ArticleContent({
  title,
  content,
}: ArticleContentProps) {
  return (
    <section className="pb-24">
      <Container>
        <article
          className="prose prose-lg mx-auto max-w-4xl dark:prose-invert"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />

        <ArticleShare title={title} />
      </Container>
    </section>
  );
}
