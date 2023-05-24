import { z } from "zod";

export const ContactEmailValidator = z.object({
  name: z.string().nonempty("Please tell us your name"),
  email: z.string().nonempty().email(),
  subject: z.string().nonempty("Please specify a subject"),
  message: z.string().nonempty("Please write us couple of words"),
});

export type ContactEmailType = z.infer<typeof ContactEmailValidator>;
