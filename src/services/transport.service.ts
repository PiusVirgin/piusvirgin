import { prisma } from "@/lib/prisma";
import { InquiryStatus } from "@/lib/constants/inquiry";

interface GetTransportRequestsOptions {
  page?: number;
  limit?: number;
  status?: string;
  sort?: string;
  search?: string;
}

export async function getTransportRequests({
  page = 1,
  limit = 10,
  status = "all",
  sort = "newest",
  search = "",
}: GetTransportRequestsOptions = {}) {
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
    prisma.transportInquiry.findMany({
      where,
      skip,
      take: limit,

      orderBy: {
        createdAt: sort === "oldest" ? "asc" : "desc",
      },
    }),

    prisma.transportInquiry.count({
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

export async function getTransportRequest(id: string) {
  return prisma.transportInquiry.findUnique({
    where: {
      id,
    },
  });
}

export async function updateTransportStatus(id: string, status: string) {
  return prisma.transportInquiry.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
}

