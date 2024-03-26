import { z } from "zod";

const taxSchema = z.object({
  id: z.string(),
  name: z.string(),
  amount: z.number(),
});

export type Tax = z.infer<typeof taxSchema>;

const priceSchema = z.object({
  id: z.string(),
  subTotal: z.number(),
  currency: z.string(),
  //TODO: We need to add fees into this
  taxes: z.array(taxSchema).optional(),
});

export type Price = z.infer<typeof priceSchema>;

const roomSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  pictures: z.array(z.string()),
  price: priceSchema,
});

export type Room = z.infer<typeof roomSchema>;
