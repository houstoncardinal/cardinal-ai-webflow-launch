import * as z from "zod";

// Transformation form validation schema
export const transformationFormSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name can only contain letters, spaces, hyphens, and apostrophes" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .toLowerCase(),
  phone: z.string()
    .trim()
    .regex(/^[\d\s()+-]+$/, { message: "Please enter a valid phone number" })
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  company: z.string()
    .trim()
    .max(100, { message: "Company name must be less than 100 characters" })
    .optional(),
  projectType: z.string()
    .min(1, { message: "Please select a project type" }),
  budget: z.string()
    .min(1, { message: "Please select a budget range" }),
  timeline: z.string()
    .min(1, { message: "Please select a timeline" }),
  description: z.string()
    .trim()
    .min(20, { message: "Please provide at least 20 characters describing your project" })
    .max(2000, { message: "Description must be less than 2000 characters" }),
  features: z.array(z.string()).optional(),
  industry: z.string()
    .min(1, { message: "Please select your industry" }),
  currentWebsite: z.string()
    .trim()
    .url({ message: "Please enter a valid URL" })
    .optional()
    .or(z.literal('')),
  goals: z.string()
    .trim()
    .max(2000, { message: "Goals must be less than 2000 characters" })
    .optional()
});

export type TransformationFormValues = z.infer<typeof transformationFormSchema>;
