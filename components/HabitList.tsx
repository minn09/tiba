'use client'

import { useHabits } from '@/hooks/useHabits'
import HabitCard from './HabitCard'

export default function HabitList() {
  const { data: habits, isLoading, isError } = useHabits()

  if (isLoading) return <p>Cargando...</p>   // solo se ve si no hubo prefetch
  if (isError) return <p>Error al cargar</p>

  return (
    <div className="space-y-5 p-5">
      <h1 className="text-2xl font-bold">Mis Hábitos</h1>
      <ul>
        {habits?.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit} />
        ))}
      </ul>
    </div>
  )
}
