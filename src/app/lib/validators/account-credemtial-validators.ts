import { z } from "zod";

export const AuthSchemaValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be 8 characters" }),
});
