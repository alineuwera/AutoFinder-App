import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const { pathname } = request.nextUrl;

  if (!isAuthenticated && pathname === "/") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/login", "/auth/register", "/dashboard/:path*"]
  // Apply middleware to the root path and auth paths
};