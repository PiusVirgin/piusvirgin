import { z } from "zod";

export const updateInquiryStatusSchema = z.object({
  status: z.enum([
    "new",
    "contacted",
    "in_progress",
    "completed",
  ]),
});
