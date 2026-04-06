"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { AuthState } from "@/types/auth"

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      status: "unauthenticated",

      setUser: (user) =>
        set({
          user,
          status: user ? "authenticated" : "unauthenticated",
        }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user }),
    }
  )
)
