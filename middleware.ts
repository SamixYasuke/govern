import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isValidLocale, localeCookieName, locales } from "./i18n/config";

function getLocaleFromAcceptLanguage(header: string | null): string | null {
  if (!header) return null;
  // e.g. "yo-NG,yo;q=0.9,en;q=0.8" -> "yo"
  const first = header.split(",")[0]?.split(";")[0]?.trim().toLowerCase() ?? "";
  const base = first.split("-")[0];
  return base || null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next internals / static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  // Root "/" -> redirect to preferred locale
  if (segments.length === 0) {
    const cookieLocale = request.cookies.get(localeCookieName)?.value;
    const acceptLocale = getLocaleFromAcceptLanguage(
      request.headers.get("accept-language"),
    );
    const target =
      (isValidLocale(cookieLocale) && cookieLocale) ||
      (isValidLocale(acceptLocale) && acceptLocale) ||
      defaultLocale;
    const url = request.nextUrl.clone();
    url.pathname = `/${target}`;
    const res = NextResponse.redirect(url);
    res.cookies.set(localeCookieName, target, { path: "/", maxAge: 31536000 });
    return res;
  }

  // Valid locale prefix -> persist cookie, continue
  if (isValidLocale(maybeLocale)) {
    const res = NextResponse.next();
    res.cookies.set(localeCookieName, maybeLocale, {
      path: "/",
      maxAge: 31536000,
    });
    return res;
  }

  // Unknown first segment that looks like a locale attempt -> redirect to default
  // Otherwise let it 404 normally, unless it's a locale-like 2-letter code
  if (maybeLocale && maybeLocale.length === 2) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};

// Silence unused import in some editors
void locales;
