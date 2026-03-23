import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'es']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  // Check cookie first
  const cookieLang = request.cookies.get('lang')?.value
  if (cookieLang && locales.includes(cookieLang)) return cookieLang

  // Check Accept-Language header
  const acceptLang = request.headers.get('accept-language') || ''
  const preferred = acceptLang.split(',')[0].split('-')[0].toLowerCase()
  if (locales.includes(preferred)) return preferred

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip internal paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/team') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check if path already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Redirect to locale path (308 = permanent redirect, preserves POST method and transfers link equity)
  const locale = getLocale(request)
  const newUrl = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
  return NextResponse.redirect(newUrl, 308)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
