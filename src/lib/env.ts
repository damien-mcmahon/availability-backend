import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  AVAILABILITY_ENDPOINT: z.string(),
});

export type Env = z.infer<typeof envSchema>;

export const env: Env = envSchema.parse(process.env);
