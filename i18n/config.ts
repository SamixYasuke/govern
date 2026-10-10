export const locales = ["en", "yo", "ig", "ha"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeCookieName = "govern-locale";

export const localeMeta: Record<Locale, { label: string; short: string }> = {
  en: { label: "English", short: "EN" },
  yo: { label: "Yoruba", short: "YO" },
  ig: { label: "Igbo", short: "IG" },
  ha: { label: "Hausa", short: "HA" },
};

export function isValidLocale(value: string | null | undefined): value is Locale {
  return value != null && (locales as readonly string[]).includes(value);
}
