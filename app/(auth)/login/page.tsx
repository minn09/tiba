"use client"

import { useState } from "react"
import { signIn } from "@/actions/auth"

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    try {
      setLoading(true)
      setError(null)
      await signIn(
        form.get("email") as string,
        form.get("password") as string
      )
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message)
      } else {
        setError("Error desconocido")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Contraseña" required />
      {error && <p>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Cargando..." : "Iniciar sesión"}
      </button>
    </form>
  )
}
