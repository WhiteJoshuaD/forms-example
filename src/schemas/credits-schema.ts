import { z } from "zod";

export const creditsSchema = z.object({
  creditName: z.string().min(1, "Required"),
  creditAmount: z.string().min(1, "Required"),
});

export type Credits = z.infer<typeof creditsSchema>;
