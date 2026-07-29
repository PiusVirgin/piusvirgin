import { NextResponse } from "next/server";

import { updateInquiryStatusSchema } from "@/lib/validations/admin";
import { updateTransportStatus } from "@/services/transport.service";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const body = await request.json();

    const { status } = updateInquiryStatusSchema.parse(body);

    const inquiry = await updateTransportStatus(id, status);

    return NextResponse.json({
      success: true,
      inquiry,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message ?? "Unable to update request.",
      },
      {
        status: 400,
      }
    );
  }
}
