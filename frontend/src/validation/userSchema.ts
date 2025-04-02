import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type UserInput = z.infer<typeof userSchema>;
