import { createSupabaseServerClient } from "./supabase-server"
import { cookies } from "next/headers"
export const db = {
  habits: {
    getAll: async (userId: string) => {
      const cookieStore = await cookies()
      const supabase = createSupabaseServerClient(cookieStore)
      return supabase.from("habits").select().eq("user_id", userId)
    },
    create: async (data: { name: string; user_id: string }) => {
      const cookieStore = await cookies()
      const supabase = createSupabaseServerClient(cookieStore)
      return supabase.from("habits").insert(data)
    },
  },
  completions: {},
}
