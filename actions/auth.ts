"use server"

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export async function signIn(email: string, password: string) {
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw new Error(error.message)

  redirect("/") // el middleware ya protege la ruta destino
}

export async function signUp(email: string, password: string, name: string) {
  const supabase = await createClient()

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  })
  if (error) throw new Error(error.message)

  redirect("/login?message=Revisa tu correo para confirmar tu cuenta")
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/login")
}
