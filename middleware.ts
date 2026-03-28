// src/middleware.ts
import { NextResponse, type NextRequest } from "next/server"
import { createClient } from "@/lib/supabase/middleware"

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({ request })
  const supabase = createClient(request, response)

  // Refresca la sesión — SIEMPRE llamar antes de cualquier redirect
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { pathname } = request.nextUrl
  const isAuthRoute =
    pathname.startsWith("/(auth)") ||
    pathname === "/login" ||
    pathname === "/register"

  // Sin sesión → redirigir a login
  if (!user && !isAuthRoute) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Con sesión → no dejar entrar a auth routes
  if (user && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return response
}

export const config = {
  matcher: [
    // Excluir archivos estáticos y rutas de API de Supabase
    "/((?!_next/static|_next/image|favicon.ico|api/auth|.*\\.(?:svg|png|jpg|ico|css|js)$).*)",
  ],
}
