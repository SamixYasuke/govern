"use client";

import type { ReactNode } from "react";
import { useLocaleContext } from "@/i18n/LocaleProvider";

/** Remounts + fades content on locale change for a smooth switch. */
export function LocaleFade({ children }: { children: ReactNode }) {
  const { locale } = useLocaleContext();
  return (
    <div
      key={locale}
      className="animate-in fade-in-0 duration-200 ease-out"
    >
      {children}
    </div>
  );
}
