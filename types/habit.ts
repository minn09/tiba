import * as z from "zod"

export const habitSchema = z.object({
  id: z.string().min(1).optional(),
  userId: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  color: z.string().min(1).default("#ff0000"),
  icon: z.string().min(1).default("🔥"),
  frequency: z.enum(["daily", "weekly", "monthly"]),
  targetDays: z
    .array(z.union([z.string(), z.number()]))
    .min(1, "Select at least one day")
    .transform((val) => val.map(Number)),
  createdAt: z.date().optional(),
})

export type HabitFormOutput = z.output<typeof habitSchema>
export type HabitFormInput = z.input<typeof habitSchema>
