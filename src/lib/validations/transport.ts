import { z } from "zod";

export const transportQuoteSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),

  company: z.string().optional(),

  email: z.string().email("Enter a valid email"),

  phone: z.string().min(8, "Enter a valid phone number"),

  pickup: z.string().min(2, "Pickup location is required"),

  destination: z.string().min(2, "Destination is required"),

  cargo: z.string().optional(),

  shipmentDate: z.string().optional(),

  message: z.string().min(10, "Please tell us about your shipment."),
});

export type TransportQuoteValues = z.infer<typeof transportQuoteSchema>;

export const transportApiSchema = transportQuoteSchema.extend({
  service: z.string(),
});
