import type { User } from "@supabase/supabase-js"

export type AuthStatus = "authenticated" | "unauthenticated"

export interface AuthState {
  user: User | null
  status: AuthStatus

  // solo usado para hidratar desde el server
  setUser: (user: User | null) => void

  // signIn/signUp/signOut son Server Actions — no viven en el store
}
