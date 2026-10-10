import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/dictionaries";
import { LocaleProvider } from "@/i18n/LocaleProvider";

/**
 * Async shell that resolves the locale inside a <Suspense> boundary
 * (see layout.tsx). Awaiting `params` here — rather than in the layout
 * itself — keeps navigation instant under Partial Prefetching.
 */
export async function LocaleShell({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const messages = getMessages(typedLocale);

  return (
    <LocaleProvider locale={typedLocale} messages={messages}>
      {children}
    </LocaleProvider>
  );
}
