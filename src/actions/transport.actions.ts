"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { updateTransportStatus } from "@/services/transport.service";

export async function deleteTransportRequest(id: string) {
  try {
    await prisma.transportInquiry.delete({
      where: {
        id,
      },
    });

    revalidatePath("/admin/transport");
    revalidatePath("/admin/dashboard");

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to delete request.",
    };
  }
}

// export async function updateTransportStatus(id: string, status: string) {
//   await prisma.transportInquiry.update({
//     where: {
//       id,
//     },

//     data: {
//       status,
//     },
//   });

//   revalidatePath("/admin/dashboard");
//   revalidatePath("/admin/transport");
//   revalidatePath(`/admin/transport/${id}`);
// }


export async function updateTransportInquiryStatus(
  id: string,
  status: string,
) {
  try {
    await updateTransportStatus(id, status);

    revalidatePath("/admin/transport");
    revalidatePath(`/admin/transport/${id}`);

    return {
      success: true,
      message: "Status updated successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Unable to update status.",
    };
  }
}
