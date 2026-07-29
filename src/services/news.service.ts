import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

// export type CreateNewsData = Prisma.NewsCreateInput;

interface GetNewsOptions {
  page?: number;
  limit?: number;
  status?: string;
  category?: string;
  sort?: string;
  search?: string;
}

// interface CreateNewsData {
//   title: string;
//   slug: string;
//   excerpt: string;
//   content: string;
//   coverImage: string | null;
//   category: string;
//   author: string;
//   featured: boolean;
//   published: boolean;
//   readTime: number | null;
//   publishedAt?: Date | null;
// }

export async function createNews(data: Prisma.NewsCreateInput) {
  return prisma.news.create({
    data,
  });
}

export async function getNews({
  page = 1,
  limit = 10,
  status = "all",
  category = "all",
  sort = "newest",
  search = "",
}: GetNewsOptions = {}) {
  const skip = (page - 1) * limit;

  //   ...(status !== "all" && {

  //     published: status === "published",
  //   }),

  //   ...(category !== "all" && {
  //     category,
  //   }),

  //   ...(search && {
  //     OR: [
  //       {
  //         title: {
  //           contains: search,
  //           // mode: "insensitive",
  //         },
  //       },
  //       {
  //         excerpt: {
  //           contains: search,
  //           // mode: "insensitive",
  //         },
  //       },
  //     ],
  //   }),
  // };

  const where = {
    ...(status !== "all" && {
      published: status === "published",
    }),

    ...(category !== "all" && {
      category,
    }),

    ...(search && {
      OR: [
        {
          title: {
            contains: search,
            // mode: "insensitive",
          },
        },
        {
          excerpt: {
            contains: search,
          },
        },
        {
          author: {
            contains: search,
          },
        },
        {
          category: {
            contains: search,
          },
        },
      ],
    }),
  };

  const [articles, total] = await prisma.$transaction([
    prisma.news.findMany({
      where,
      skip,
      take: limit,

      orderBy: {
        createdAt: sort === "oldest" ? "asc" : "desc",
      },
    }),

    prisma.news.count({
      where,
    }),
  ]);

  return {
    articles,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

export async function getNewsArticle(id: string) {
  return prisma.news.findUnique({
    where: {
      id,
    },
  });
}

export async function updateNews(id: string, data: Prisma.NewsUpdateInput) {
  return prisma.news.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteNews(id: string) {
  return prisma.news.delete({
    where: { id },
  });
}

// For public face

export async function getPublishedNews() {
  return prisma.news.findMany({
    where: {
      published: true,
      publishedAt: {
        not: null,
      },
    },

    orderBy: {
      publishedAt: "desc",
    },

    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      coverImage: true,
      category: true,
      author: true,
      featured: true,
      readTime: true,
      publishedAt: true,
    },
  });
}

export async function getFeaturedNews() {
  return prisma.news.findFirst({
    where: {
      published: true,
      featured: true,
    },

    orderBy: {
      publishedAt: "desc",
    },
  });
}

export async function getNewsBySlug(slug: string) {
  return prisma.news.findFirst({
    where: {
      slug,
      published: true,
    },
  });
}

export async function getRelatedNews(category: string, currentId: string) {
  let related = await prisma.news.findMany({
    where: {
      published: true,
      category,
      NOT: {
        id: currentId,
      },
    },
    take: 3,
    orderBy: {
      publishedAt: "desc",
    },
  });

  if (related.length < 3) {
    const extra = await prisma.news.findMany({
      where: {
        published: true,
        NOT: {
          id: currentId,
        },
      },
      take: 3 - related.length,
      orderBy: {
        publishedAt: "desc",
      },
    });

    const existingIds = new Set(related.map((a) => a.id));

    related = [...related, ...extra.filter((a) => !existingIds.has(a.id))];
  }

  return related;
}
