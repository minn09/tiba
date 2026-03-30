import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import HabitList from '@/components/HabitList'
import { habitsQueryOptions } from '@/lib/query/habitsQueryOptions'

export default async function Habits() {
  const queryClient = new QueryClient()

  // Ejecuta la query en el servidor y la mete al cache
  await queryClient.prefetchQuery(habitsQueryOptions)

  return (
    // Serializa el cache del servidor y lo envía al cliente
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HabitList />
    </HydrationBoundary>
  )
}
