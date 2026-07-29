import { NextResponse } from "next/server";
import { InquiryStatus } from "@/lib/constants/inquiry";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [total, recent, newCount, contactedCount, completedCount] =
      await Promise.all([
        prisma.transportInquiry.count(),

        prisma.transportInquiry.findMany({
          orderBy: {
            createdAt: "desc",
          },
          take: 5,
        }),

        prisma.transportInquiry.count({
          where: {
            status: InquiryStatus.NEW,
          },
        }),

        prisma.transportInquiry.count({
          where: {
            status: InquiryStatus.CONTACTED,
          },
        }),

        prisma.transportInquiry.count({
          where: {
            status: InquiryStatus.COMPLETED,
          },
        }),
      ]);

    return NextResponse.json({
      success: true,

      stats: {
        total,
        new: newCount,
        contacted: contactedCount,
        completed: completedCount,
      },

      recent,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to load dashboard.",
      },
      {
        status: 500,
      },
    );
  }
}
