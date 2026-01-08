import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 5 characters"),
  email: z
    .string()
    .email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .regex(/^\d+$/, "Phone must contain only numbers"),
});

export type CreateUserInput = z.infer<typeof userSchema>;
