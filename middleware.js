import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // If user has no role, redirect to role selection
    if (!token?.role && !path.startsWith('/auth/select-role')) {
      return NextResponse.redirect(new URL('/auth/select-role', req.url));
    }

    // Admin routes
    if (path.startsWith('/admin') && token?.role !== 'admin') {
      return NextResponse.redirect(new URL('/auth/unauthorized', req.url));
    }

    // Hospital routes
    if (path.startsWith('/hospital') && token?.role !== 'hospital') {
      return NextResponse.redirect(new URL('/auth/unauthorized', req.url));
    }

    // Donor routes
    if (path.startsWith('/donor') && token?.role !== 'donor') {
      return NextResponse.redirect(new URL('/auth/unauthorized', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    '/admin/:path*',
    '/hospital/:path*',
    '/donor/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico|auth/signin|auth/error|auth/select-role).*)',
  ],
}; 