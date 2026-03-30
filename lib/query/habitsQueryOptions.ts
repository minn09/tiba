import { getHabits } from "./habits"

export const habitsQueryOptions = {
  queryKey: ["habits"],
  queryFn: getHabits,
}
