import { redirect } from "next/navigation";

// NOTE: `middleware.ts` intercepts "/" first and redirects to the user's
// preferred locale (cookie → Accept-Language → default). This page only
// exists as a static fallback so "/" can prerender; it never runs when
// middleware is active. Keep it free of cookies()/headers() so the build
// can statically prerender it under Cache Components.
export default function RootPage() {
  redirect("/en");
}
