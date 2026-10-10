import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { isValidLocale, locales, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/dictionaries";
import { LocaleProvider } from "@/i18n/LocaleProvider";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Govern — Global payments",
  description: "Spend, send, and manage money globally.",
};

export default async function LocaleLayout({
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
