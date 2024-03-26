import { z } from "zod";

const availabilityInputSchema = z.object({
  checkIn: z.string(),
  checkOut: z.string(),
  guests: z.number(),
});

export type AvailabilityInput = z.infer<typeof availabilityInputSchema>;
