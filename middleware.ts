import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow public routes
  if (pathname === "/login" || pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next()
  }

  // Get user role from session (in a real app, this would come from a JWT or session cookie)
  const userRole = request.cookies.get("user-role")?.value

  // Role-based routing protection
  if (pathname.startsWith("/superadmin")) {
    if (userRole !== "superadmin") {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  } else if (pathname.startsWith("/cdo")) {
    if (userRole !== "cdo") {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  } else if (pathname.startsWith("/auditor")) {
    if (userRole !== "auditor") {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  } else if (pathname.startsWith("/external-auditor")) {
    if (userRole !== "external") {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
