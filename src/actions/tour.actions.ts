"use server";

import { revalidatePath } from "next/cache";
import { createTourInquiry,deleteTourInquiry, updateTourInquiry, updateTourInquiryStatus } from "@/services/tour.service";


export interface TourInquiryFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  tour: string;
  travelDate: string;
  guests: number;
  message: string;
}

export async function submitTourInquiryAction(
  data: TourInquiryFormData
) {
  try {
    await createTourInquiry({
      ...data,
      travelDate: new Date(data.travelDate),
    });

    revalidatePath("/tours");

    return {
      success: true,
      message: "Inquiry submitted successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to submit inquiry.",
    };
  }
}

//Admin action


// export async function updateTourStatus(
//   id: string,
//   status: string
// ) {
//   try {
//     await updateTourInquiry(id, {
//       status,
//     });

//     revalidatePath("/admin/tours");

//     return {
//       success: true,
//     };
//   } catch {
//     return {
//       success: false,
//       message: "Failed to update status.",
//     };
//   }
// }

export async function updateTourStatus(
  id: string,
  status: string
) {
  try {
    await updateTourInquiryStatus(id, status);

    revalidatePath("/admin/tours");

    revalidatePath(`/admin/tours/${id}`);

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

export async function deleteTourInquiryAction(id: string) {
  try {
    await deleteTourInquiry(id);

    revalidatePath("/admin/tours");

    return {
      success: true,
    };
  } catch {
    return {
      success: false,
      message: "Failed to delete inquiry.",
    };
  }
}
