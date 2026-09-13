import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
const priavateRoutes = [
  "/private", "/admin", "/secrite", "dashboard"
]
//! is Admin.
const adminRoutes = ["/dashboard"]

export async function proxy(req) {
  const token = await getToken({ req });
  const reqPath = req.nextUrl.pathname
  const isAuthencated = Boolean(token);
  const isUser = token?.role === 'user'
  const isAdmin = token?.role === 'admin'
  //? private routes
  const isPrivateRoute = priavateRoutes.some(route => reqPath.startsWith(route))
  //! admin routes.
  const admin = adminRoutes.some(route=>reqPath.startsWith(route))

  //? My condition..
  if (!isAuthencated && isPrivateRoute) {
    const loginUrl = new URL('/api/auth/signin', req.url)
    loginUrl.searchParams.set("callbackUrl", reqPath)
    return NextResponse.redirect(loginUrl)
  }
  //? Forbidden condition.
  if(isAuthencated && !isAdmin && admin){
    return NextResponse.rewrite (new URL('/forbidden', req.url))
  }




  //  console.log({ isAuthencated, isUser, reqPath, isPrivateRoute, isAdmin,admin });
 
}

export const config = {
  matcher: [
    "/private/:path*",
    "/admin/:path*",
    "/secrite/:path*",
    "/dashboard/:path*",
  ],
};