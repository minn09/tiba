"use client"

import { useState } from "react"
import { signUp } from "@/actions/auth"

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    try {
      setLoading(true)
      setError(null)
      await signUp(
        form.get("email") as string,
        form.get("password") as string,
        form.get("name") as string
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
      <input name="name" type="text" placeholder="Nombre" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Contraseña" required />
      {error && <p>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Cargando..." : "Crear cuenta"}
      </button>
    </form>
  )
}
