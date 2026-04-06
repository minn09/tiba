import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getHabits, createHabit, deleteHabit } from "@/lib/query/habits"
import { HabitFormOutput } from "@/types/habit"

const HABITS_KEY = ["habits"]

export function useHabits() {
  return useQuery({
    queryKey: HABITS_KEY,
    queryFn: getHabits,
  })
}

export function useCreateHabit() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (habit: HabitFormOutput) => createHabit(habit),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: HABITS_KEY }),
  })
}

export function useDeleteHabit() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => deleteHabit(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: HABITS_KEY }),
    onError: (error) => {
      console.error("❌ onError:", error)
    },
  })
}
