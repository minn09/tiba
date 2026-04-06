"use client"

import { useHabits } from "@/hooks/useHabits"
import HabitCard from "./HabitCard"
import { AlertCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HabitList() {
  const { data: habits, isLoading, isError, refetch, isFetching } = useHabits()

  if (isLoading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground">Cargando hábitos...</p>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 p-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <AlertCircle className="h-10 w-10 text-destructive" />
          <h2 className="text-lg font-semibold">Error al cargar</h2>
          <p className="text-sm text-muted-foreground">
            No pudimos cargar tus hábitos. Intenta de nuevo.
          </p>
        </div>
        <Button onClick={() => refetch()} disabled={isFetching}>
          <RefreshCw
            className={`h-4 w-4 ${isFetching ? "animate-spin" : ""}`}
          />
          Reintentar
        </Button>
      </div>
    )
  }

  if (!habits?.length) {
    return (
      <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 p-6">
        <div className="text-center">
          <h2 className="text-lg font-semibold">No hay hábitos</h2>
          <p className="text-sm text-muted-foreground">
            Crea tu primer hábito para comenzar.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-5 p-5">
      <h1 className="text-2xl font-bold">Mis Hábitos</h1>
      <ul className="space-y-4">
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </ul>
    </div>
  )
}
