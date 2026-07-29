import AdminListing from "@/components/admin/listing/admin-listing";
import { newsColumns } from "@/components/admin/news/news-columns";
import NewsFilters from "@/components/admin/news/news-filters";

import { getNews } from "@/services/news.service";

interface NewsPageProps {
  searchParams: Promise<{
    page?: string;
    search?: string;
    status?: string;
    sort?: string;
  }>;
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const params = await searchParams;

  const page = Number(params.page ?? 1);

  const result = await getNews({
    page,
    search: params.search,
    status: params.status,
    sort: params.sort,
  });

  return (
    <AdminListing
      title="News"
      description="Manage all published articles."
      searchPlaceholder="Search articles..."
      filters={<NewsFilters />}
      columns={newsColumns}
      data={result.articles}
      page={result.page}
      totalPages={result.totalPages}
      searchParams={params}
      createHref="/admin/news/create"
      createLabel="New Article"
    />
  );
}
