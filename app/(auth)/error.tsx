"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold">¡Algo salió mal!</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {error.message || "Ha ocurrido un error inesperado."}
        </p>
        {error.digest && (
          <p className="mt-1 text-xs text-muted-foreground">
            ID: {error.digest}
          </p>
        )}
      </div>
      <div className="flex gap-2">
        <Button onClick={reset}>Reintentar</Button>
        <Link href="/login">
          <Button variant="outline">Volver al login</Button>
        </Link>
      </div>
    </div>
  )
}
