import { z } from "zod";

/**
 * ***************************************************
 * Availability Room Schema - This defines the data received from the external API
 * ***************************************************
 */

const availabilityMediaSchema = z.object({
  id: z.string(),
  url: z.string(),
  type: z.string(),
});

const taxFeeSchema = z.object({
  id: z.string(),
  name: z.string(),
  amount: z.number(),
  currency: z.string(),
  description: z.string(),
  chargeType: z.enum([
    "per_night",
    "per_stay",
    "per_person",
    "per_room",
    "per_person_per_night",
  ]),
});

const availabilityPriceSchema = z.object({
  id: z.string(),
  name: z.string(),
  amount: z.number(),
  currency: z.string(),
  digits: z.number(),
  fees: z.array(taxFeeSchema).optional(),
  taxes: z.array(taxFeeSchema).optional(),
});

const availabilityRateSchema = z.object({
  id: z.string(),
  name: z.string(),
  rateCode: z.string(),
  description: z.string(),
  price: availabilityPriceSchema,
});

export const availabilityRoomSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  description: z.string(),
  maxOccupancy: z.number(),
  media: z.array(availabilityMediaSchema),
  rates: z.array(availabilityRateSchema),
});

export const availabilityRoomListSchema = z.array(availabilityRoomSchema);

export type AvailabilityRoom = z.infer<typeof availabilityRoomSchema>;
