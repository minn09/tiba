"use server"

import { createClient } from "@/lib/supabase/server"

export async function getHabits() {
  const supabase = await createClient()
  const { data, error } = await supabase.from("habits").select()

  if (error) throw new Error(error.message) // TanStack Query necesita un throw para marcar error
  return data
}
