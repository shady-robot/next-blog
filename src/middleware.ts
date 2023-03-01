// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
  const { pathname, protocol } = request.nextUrl
  let key = "next-auth.session-token"
  //https://next-auth.js.org/configuration/options#usesecurecookies
  if(protocol == "https:"){
    key = `__Secure-${key}`
  }
  const isAuthenticated = request.cookies.has(key)
  if(!isAuthenticated){
    return NextResponse.rewrite(new URL(`/api/auth/signin?callbackUrl=${pathname}`, request.url))
  }
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/todo/:path*', "/posts/create", "/posts/drafts", "/posts/p/:path*"]
 }