import { getHabits, createHabit, deleteHabit } from "./habits"
import type { HabitFormOutput } from "@/types/habit"

export const queryKeys = {
  habits: ["habits"] as const,
}

export const habitsQueryOptions = {
  queryKey: queryKeys.habits,
  queryFn: getHabits,
  staleTime: 60 * 1000,
  gcTime: 5 * 60 * 1000,
  retry: 1,
}

export async function createHabitWithQuery(habit: HabitFormOutput) {
  const data = await createHabit(habit)
  return data
}

export async function deleteHabitWithQuery(id: string) {
  const data = await deleteHabit(id)
  return data
}
