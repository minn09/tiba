import { useQuery } from "@tanstack/react-query"
import { habitsQueryOptions } from "@/lib/query/habitsQueryOptions"
export function useHabits() {
  return useQuery(habitsQueryOptions)
}
