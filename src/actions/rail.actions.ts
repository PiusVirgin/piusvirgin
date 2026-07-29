"use server";

import { revalidatePath } from "next/cache";

import {
  createRailInquiry,
  deleteRailInquiry,
  updateRailInquiryStatus,
} from "@/services/rail.service";

export interface RailInquiryFormData {
  fullName: string;
  email: string;
  phone: string;

  country: string;

  departure: string;
  destination: string;

  travelDate: string;

  passengers: number;

  message: string;
}

export async function submitRailInquiryAction(data: RailInquiryFormData) {
  try {
    await createRailInquiry({
      ...data,
      travelDate: new Date(data.travelDate),
    });

    revalidatePath("/rail");

    return {
      success: true,
      message: "Rail booking submitted successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Unable to submit booking.",
    };
  }
}


export async function updateRailInquiryStatusAction(id: string, status: string) {
  try {
    await updateRailInquiryStatus(id, status);

    revalidatePath("/admin/rail");

    revalidatePath(`/admin/rail/${id}`);

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

export async function deleteRailInquiryAction(id: string) {
  try {
    await deleteRailInquiry(id);

    revalidatePath("/admin/rail");

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
