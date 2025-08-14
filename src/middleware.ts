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

  // Basic CSP (dev allows inline/eval for Next dev overlay & HMR; prod uses nonce)
  const self = "'self'"
  const isDev = process.env.NODE_ENV !== 'production'
  let csp: string
  if (isDev) {
    const scriptSrc = `script-src ${self} 'unsafe-inline' 'unsafe-eval' blob:`
    const connectSrc = `connect-src ${self} ws: http: https:`
    csp = [
      `default-src ${self}`,
      scriptSrc,
      `style-src ${self} 'unsafe-inline'`,
      `img-src ${self} data: blob:`,
      `font-src ${self} data:`,
      connectSrc,
      `frame-ancestors 'none'`,
      `base-uri ${self}`,
      `form-action ${self}`,
    ].join('; ')
  } else {
    // Generate per-request nonce and let Next attach it to its inline scripts
    // This avoids allowing unsafe-inline/eval in production
    const nonce = crypto.randomUUID().replace(/-/g, '')
    res.headers.set('x-nonce', nonce)
    const scriptSrc = `script-src ${self} 'nonce-${nonce}' blob:`
    const connectSrc = `connect-src ${self}`
    csp = [
      `default-src ${self}`,
      scriptSrc,
      `style-src ${self} 'unsafe-inline'`,
      `img-src ${self} data: blob:`,
      `font-src ${self} data:`,
      connectSrc,
      `frame-ancestors 'none'`,
      `base-uri ${self}`,
      `form-action ${self}`,
    ].join('; ')
  }
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


