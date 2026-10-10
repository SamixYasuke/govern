import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import { locales } from "@/i18n/config";
import { LocaleShell } from "./LocaleShell";
import { ogImage, siteDescription, siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// NOTE: Static export (not generateMetadata) so /[locale] stays prefetchable.
// Per-locale <title> is synced client-side by LocaleProvider.
export const metadata: Metadata = {
  description: siteDescription,
  keywords: [
    "Govern",
    "global payments",
    "multi-currency card",
    "virtual card",
    "send money",
    "fintech",
    "Nigeria",
    "Yoruba",
    "Igbo",
    "Hausa",
  ],
  alternates: {
    languages: {
      en: `${siteUrl}/en`,
      yo: `${siteUrl}/yo`,
      ig: `${siteUrl}/ig`,
      ha: `${siteUrl}/ha`,
      "x-default": `${siteUrl}/en`,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Govern",
    title: "Govern — Global payments",
    description: siteDescription,
    images: [
      {
        url: ogImage.url,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Govern — Global payments",
    description: siteDescription,
    images: [
      {
        url: ogImage.url,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
      },
    ],
  },
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
