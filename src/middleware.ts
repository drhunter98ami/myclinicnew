import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["ar", "en"];
const defaultLocale = "ar";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the URL already has a language (e.g., /en/about or /ar/about)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // If no language is present, redirect to the default (Arabic)
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal Next.js paths, API routes, and ALL files with extensions (like A.png)
    '/((?!_next|api|.*\\..*).*)',
  ],
};