import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2),
  cv: z.string().min(2).max(50),
  transmission: z.string().min(2),
  people: z.string().min(1),
  photo: z.string().min(2).max(100),
  priceDay: z.string().min(2).max(50),
  engine: z.string().min(2),
  type: z.string().min(2),
  isPublish: z.boolean(),
});
