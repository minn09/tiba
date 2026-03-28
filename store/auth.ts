"use client"

import { create } from "zustand"
import type { AuthState } from "@/types/auth"

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  status: "unauthenticated",

  setUser: (user) =>
    set({
      user,
      status: user ? "authenticated" : "unauthenticated",
    }),
}))
