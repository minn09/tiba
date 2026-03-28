export type HabitFrequency = "daily" | "weekly" | "monthly"
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type HexColor = `#${string}`

interface HabitBase {
  id: string
  userId: string
  name: string
  description?: string
  appearance: {
    color: HexColor
    icon: string // emoji o nombre de lucide icon
  }
  frequency: HabitFrequency
  completions: Completion[]
  targetDays?: DayOfWeek[]
  createdAt: string
}

export type Habit =
  | (HabitBase & { status: "active" })
  | (HabitBase & { status: "archived"; archivedAt: string })

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
