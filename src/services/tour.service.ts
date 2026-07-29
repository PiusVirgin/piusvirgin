import { prisma } from "@/lib/prisma";

export async function createTourInquiry(data: {
  name: string;
  email: string;
  phone: string;
  country?: string | null;
  tour: string;
  travelDate: Date;
  guests: number;
  message?: string | null;
}) {
  return prisma.tourInquiry.create({
    data,
  });
}

export async function getTourInquiries() {
  return prisma.tourInquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getTourInquiry(id: string) {
  return prisma.tourInquiry.findUnique({
    where: {
      id,
    },
  });
}

export async function updateTourInquiry(
  id: string,
  data: {
    status: string;
  }
) {
  return prisma.tourInquiry.update({
    where: {
      id,
    },
    data,
  });
}

export async function updateTourInquiryStatus(
  id: string,
  status: string
) {
  return prisma.tourInquiry.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
}

export async function deleteTourInquiry(id: string) {
  return prisma.tourInquiry.delete({
    where: {
      id,
    },
  });
}
