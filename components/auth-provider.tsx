"use client"

import { useEffect } from "react"
import type { User } from "@supabase/supabase-js"
import { useAuthStore } from "@/store/auth"
import { createClient } from "@/lib/supabase/client"

interface AuthProviderProps {
  initialUser: User | null
  children: React.ReactNode
}

export function AuthProvider({ initialUser, children }: AuthProviderProps) {
  const setUser = useAuthStore((s) => s.setUser)

  // Hidratar el store con la sesión del server
  useEffect(() => {
    setUser(initialUser)
  }, [initialUser, setUser])

  // Mantener sincronía si el token expira o el usuario cierra sesión en otra pestaña
  useEffect(() => {
    const supabase = createClient()
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => setUser(session?.user ?? null)
    )
    return () => subscription.unsubscribe()
  }, [setUser])

  return <>{children}</>
}
