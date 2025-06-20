import { NextResponse } from "next/server";

export function middleware(request: any) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const { pathname } = request.nextUrl;

  if (!isAuthenticated && pathname === "/") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};