import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get('next-auth.session-token')?.value
  if(!sessionToken){
    const { pathname } = request.nextUrl
    return NextResponse.rewrite(new URL(`/api/auth/signin?callbackUrl=${pathname}`, request.url))
  }

  const response = NextResponse.next()
  return response
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/todo/:path*', "/posts/create", "/posts/drafts", "/posts/p/:path*"]
 }