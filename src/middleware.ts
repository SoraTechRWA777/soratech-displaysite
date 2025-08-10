import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Security + caching headers
export function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Security headers
  res.headers.set('X-Content-Type-Options', 'nosniff')
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  res.headers.set('X-Frame-Options', 'DENY')
  res.headers.set('X-XSS-Protection', '0')
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  // Basic CSP (tuned for this static site)
  const self = "'self'"
  const csp = [
    `default-src ${self}`,
    `script-src ${self}`,
    `style-src ${self} 'unsafe-inline'`,
    `img-src ${self} data: blob:`,
    `font-src ${self} data:`,
    `connect-src ${self}`,
    `frame-ancestors 'none'`,
    `base-uri ${self}`,
    `form-action ${self}`,
  ].join('; ')
  res.headers.set('Content-Security-Policy', csp)

  // Aggressive cache for versioned static assets under /assets/
  if (req.nextUrl.pathname.startsWith('/assets/')) {
    res.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  return res
}

export const config = {
  matcher: ['/((?!api).*)'],
}


