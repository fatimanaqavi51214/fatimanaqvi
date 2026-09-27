import { NextResponse } from 'next/server';

const DEFAULT_LOCALE = 'ur';
const SUPPORTED_LOCALES = ['ur', 'ar', 'es', 'fa', 'en'];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/login'
  ) {
    return NextResponse.next();
  }

  // --- AUTH CHECK FOR VAULT/DOCUMENTS ---
  const isProtected = pathname.includes('/vault') || pathname.includes('/document') || pathname.includes('/category');
  
  if (isProtected) {
    const token = request.cookies.get('auth_token')?.value;
    if (token !== 'valid') {
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  // --- END AUTH CHECK ---

  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  request.nextUrl.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
