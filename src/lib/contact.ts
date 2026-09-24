import { z } from "zod";
import { siteContent } from "@/content/site-content";

const clientTypeField = siteContent.contact.form.fields.find(
  (field) => field.name === "clientType",
);

export const clientTypeOptions =
  clientTypeField && "options" in clientTypeField
    ? clientTypeField.options
    : (["Emerging business", "Small business", "Medium-sized business"] as const);

export const contactSchema = z.object({
  fullName: z.string().trim().min(1, "This field is required"),
  company: z.string().trim().optional(),
  clientType: z.enum(clientTypeOptions),
  email: z.email("Enter a valid email address"),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(1, "This field is required"),
});

export type ContactValues = z.infer<typeof contactSchema>;
