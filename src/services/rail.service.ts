import { prisma } from "@/lib/prisma";

interface GetRailInquiriesOptions {
  page?: number;
  limit?: number;
  status?: string;
  sort?: string;
  search?: string;
}

export async function createRailInquiry(data: {
  fullName: string;
  email: string;
  phone: string;
  country?: string | null;

  departure: string;
  destination: string;

  travelDate: Date;

  passengers: number;

  message?: string | null;
}) {
  return prisma.railInquiry.create({
    data,
  });
}


export async function getRailInquiries({
  page = 1,
  limit = 10,
  status = "all",
  sort = "newest",
  search = "",
}: GetRailInquiriesOptions = {}) {
  const skip = (page - 1) * limit;

  const where = {
    ...(status !== "all" && {
      status,
    }),

    ...(search && {
      OR: [
        {
          fullName: {
            contains: search,
          },
        },
        {
          email: {
            contains: search,
          },
        },
      ],
    }),
  };

  const [requests, total] = await prisma.$transaction([
    prisma.railInquiry.findMany({
      where,
      skip,
      take: limit,

      orderBy: {
        createdAt: sort === "oldest" ? "asc" : "desc",
      },
    }),

    prisma.railInquiry.count({
      where,
    }),
  ]);

  return {
    requests,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}


export async function getRailInquiry(id: string) {
    return prisma.railInquiry.findUnique({
      where: {
        id,
      },
    });
  }


export async function updateRailInquiryStatus(id: string, status: string) {
  return prisma.railInquiry.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
}

export async function deleteRailInquiry(id: string) {
  return prisma.railInquiry.delete({
    where: {
      id,
    },
  });
}
