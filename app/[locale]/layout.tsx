import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import { locales } from "@/i18n/config";
import { LocaleShell } from "./LocaleShell";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Govern — Global payments",
  description: "Spend, send, and manage money globally.",
};

// NOTE: Do not await `params` here — that blocks instant navigation under
// Partial Prefetching. The promise is forwarded untouched to <LocaleShell>,
// which resolves it inside a <Suspense> boundary.
export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <LocaleShell params={params}>{children}</LocaleShell>
    </Suspense>
  );
}
