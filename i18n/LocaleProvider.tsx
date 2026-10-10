"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import type { Locale } from "./config";
import type { Messages } from "./dictionaries";

type LocaleContextValue = {
  locale: Locale;
  messages: Messages;
  t: (path: string) => string;
  tArray: (path: string) => string[];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getByPath(obj: unknown, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>(
      (acc, key) => (typeof acc === "object" && acc !== null
        ? (acc as Record<string, unknown>)[key]
        : undefined),
      obj,
    );
}

const localeTitles: Record<Locale, string> = {
  en: "Govern — Global payments",
  yo: "Govern — Isanwo agbaye",
  ig: "Govern — Ịkwụ ụgwọ ụwa",
  ha: "Govern — Biyan kuɗi na duniya",
};

export function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: ReactNode;
}) {
  // Keep <html lang> + <title> in sync for SEO + screen readers. Smooth: no reload needed.
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = localeTitles[locale] ?? localeTitles.en;
    try {
      localStorage.setItem("govern-locale", locale);
    } catch {
      // ignore storage errors (private mode)
    }
  }, [locale]);

  const t = useCallback(
    (path: string) => {
      const value = getByPath(messages, path);
      return typeof value === "string" ? value : path;
    },
    [messages],
  );

  const tArray = useCallback(
    (path: string) => {
      const value = getByPath(messages, path);
      return Array.isArray(value) ? (value as string[]) : [];
    },
    [messages],
  );

  const value = useMemo(
    () => ({ locale, messages, t, tArray }),
    [locale, messages, t, tArray],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocaleContext(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocaleContext must be used within LocaleProvider");
  return ctx;
}

export function useT() {
  return useLocaleContext().t;
}
