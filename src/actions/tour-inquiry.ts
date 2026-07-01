"use server";

export async function submitTourInquiry(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const travelDate = formData.get("travelDate");
  const guests = formData.get("guests");
  const message = formData.get("message");
  const tour = formData.get("tour");

  console.log({
    name,
    email,
    phone,
    travelDate,
    guests,
    message,
    tour,
  });

  return {
    success: true,
    message: "Inquiry submitted successfully",
  };
}
