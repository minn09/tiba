import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteHabit } from "@/lib/query/habits"

export function useDeleteHabit() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deleteHabit(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["habits"] })
    },
    onError: (error) => {
      console.error("❌ onError:", error)
    },
  })
}
