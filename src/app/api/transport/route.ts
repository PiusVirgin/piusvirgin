import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { prisma } from "@/lib/prisma";
import { transportApiSchema } from "@/lib/validations/transport";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedData = transportApiSchema.parse(body);

    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0] ?? "Unknown";

    const userAgent = request.headers.get("user-agent") ?? "Unknown";

    await prisma.transportInquiry.create({
      data: {
        ...validatedData,
        ipAddress,
        userAgent,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form data.",
          errors: error.flatten(),
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting your inquiry.",
      },
      { status: 500 },
    );
  }
}
