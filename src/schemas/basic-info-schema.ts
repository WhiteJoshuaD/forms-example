import { z } from "zod";

export const basicInfoSchema = z.object({
  name: z.string().min(1, "Required"),
  amaActivityFormat: z.string().min(1, "Required"),
  deliveryMethod: z.string().min(1, "Required"),
});

export type BasicInfo = z.infer<typeof basicInfoSchema>;
