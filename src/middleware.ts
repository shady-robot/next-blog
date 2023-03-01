// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useSession } from "next-auth/react";
import { useCurrentUser } from './hooks/useCurrentUser';


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // const { data: session, status } = useSession();
  console.log("Being")

  const user = useCurrentUser();
  const isAuthenticated = !!user;
  console.log("Is Authenticated", isAuthenticated)
  // if(!session){
    const allCookies = request.cookies.getAll()
    console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
    return NextResponse.redirect(new URL('/api/auth/signin', request.url))
  // }
  // }else{

  // }
  // }
  // return NextResponse.redirect(new URL('/about-2', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  // matcher: '/about/:path*',
  matcher: '/posts/dynamic'
}