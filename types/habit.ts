export type HabitFrequency = "daily" | "weekly" | "monthly"

export interface Habit {
  id: string | number
  name: string
  description: string
  icon: string // Emojis o nombre de icono
  color: string // Hexadecimal o clase de CSS
  frequency: HabitFrequency
  targetDays: string | number
  created_at: string // ISO date string
}

export interface HabitCardProps {
  habit: Habit
}
