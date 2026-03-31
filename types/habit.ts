import * as z from "zod"

export const habitSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  // Usamos .catch() o aseguramos que el default sea interpretado como string no-nulo
  color: z.string().min(1).default("#ff0000"),
  icon: z.string().min(1).default("🔥"),
  frequency: z.enum(["daily", "weekly", "monthly"]),
  // Transformación para que el formulario use strings y el submit reciba numbers
  targetDays: z
    .array(z.union([z.string(), z.number()]))
    .min(1, "Select at least one day")
    .transform((val) => val.map(Number)),
  createdAt: z.date().optional(),
})

// Este es el tipo que usará React Hook Form
export type HabitFormOutput = z.output<typeof habitSchema>
export type HabitFormInput = z.input<typeof habitSchema>
export type User = {
  id: string
  email: string
  name: string
  createdAt: string
}

export type Completion = {
  id: string
  habitId: string
  date: string // 'YYYY-MM-DD'
  completedAt: string // ISO timestamp
}
