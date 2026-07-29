import PageHeader from "@/components/admin/page-header";
import NewsForm from "@/components/admin/news/news-form";

export default function CreateNewsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Create News Article"
        description="Publish a new article to the website."
      />

      <NewsForm />
    </div>
  );
}
