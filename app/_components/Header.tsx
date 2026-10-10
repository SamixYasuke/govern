"use client";

import { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Selector from "./Selector";
import { useLocaleContext } from "@/i18n/LocaleProvider";
import {
  isValidLocale,
  localeCookieName,
  localeMeta,
  locales,
  type Locale,
} from "@/i18n/config";

const NAV_KEYS = ["product", "cards", "pricing", "company"] as const;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const { locale, t } = useLocaleContext();

  const switchLocale = (next: string) => {
    if (!isValidLocale(next) || next === locale) return;
    try {
      document.cookie = `${localeCookieName}=${next}; path=/; max-age=31536000`;
      localStorage.setItem(localeCookieName, next);
    } catch {
      // ignore
    }
    router.prefetch(`/${next}`);
    startTransition(() => {
      const rest = pathname?.split("/").slice(2).join("/") ?? "";
      router.replace(`/${next}${rest ? `/${rest}` : ""}`, { scroll: false });
    });
  };

  const languageOptions = locales.map((l: Locale) => ({
    label: localeMeta[l].label,
    value: l,
  }));

  const navItems = NAV_KEYS.map((k) => ({ key: k, label: t(`header.${k}`) }));
  const languageLabel = t("header.selectLanguage");

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="relative flex justify-between items-center w-full py-4 px-5 sm:px-8 md:py-6 lg:px-30">
      <div className="flex items-center gap-8 lg:gap-20">
        <div>
          <Link
            href={`/${locale}`}
            aria-label="Govern home"
            className="font-geist font-normal text-xl leading-7 tracking-[-0.02em] text-[#25292F] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#043D6E]"
          >
            <span
              aria-hidden="true"
              className="font-boldonse font-normal text-base leading-7 tracking-[-0.02em]"
            >
              GO
            </span>
            vern
          </Link>
        </div>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="hidden md:flex items-center gap-6 lg:gap-10">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  className="text-[#2F353C] hover:text-[#2F353C]/70 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#043D6E]"
                  href="#"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="flex gap-2 sm:gap-4 items-center">
        <li className="hidden xs:block sm:block">
          <Selector
            btnName={localeMeta[locale].short}
            dropdownSubtitle={languageLabel}
            ariaLabel={`${languageLabel}: ${localeMeta[locale].label}`}
            dropdownOptions={languageOptions}
            value={locale}
            pending={isPending}
            onSelect={switchLocale}
          />
        </li>
        <li className="hidden sm:block">
          <button
            type="button"
            aria-label="Show QR code to download the app"
            className="bg-[#F7F7F7] hover:bg-[#F7F7F7]/60 transition-colors rounded-full w-12 h-12 flex justify-center items-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#043D6E]"
          >
            <Image
              src={"/icons/qr.svg"}
              alt=""
              aria-hidden="true"
              width={14.3}
              height={14.3}
            />
          </button>
        </li>
        <li className="hidden sm:block">
          <button
            type="button"
            className="text-white py-2.5 px-5 md:py-3 md:px-8 border-2 border-white rounded-[32px] font-geist font-medium text-sm md:text-base leading-6 tracking-[-0.02em] bg-linear-[178.36deg,#25292F_47.33%,#758295_143.08%] cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#043D6E]"
          >
            {t("header.getStarted")}
          </button>
        </li>
        <li className="md:hidden">
          <button
            type="button"
            aria-label={menuOpen ? t("header.closeMenu") : t("header.openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="bg-[#F7F7F7] rounded-full w-11 h-11 flex justify-center items-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#043D6E]"
          >
            {menuOpen ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </li>
      </ul>
      {menuOpen && (
        <div className="absolute inset-x-4 top-full z-50 md:hidden">
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="bg-white rounded-3xl border border-[#CDD8E2] shadow-xl p-6 flex flex-col gap-5"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="text-[#2F353C] font-geist font-medium text-base block py-1 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#043D6E]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-[#CDD8E2] pt-4 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <span id="mobile-lang-label" className="font-geist text-sm text-[#808080]">
                  {languageLabel}
                </span>
                <Selector
                  btnName={localeMeta[locale].short}
                  dropdownSubtitle={languageLabel}
                  ariaLabel={`${languageLabel}: ${localeMeta[locale].label}`}
                  dropdownOptions={languageOptions}
                  value={locale}
                  pending={isPending}
                  onSelect={(v) => {
                    switchLocale(v);
                    setMenuOpen(false);
                  }}
                />
              </div>
              <button
                type="button"
                className="text-white py-3 px-8 rounded-[32px] font-geist font-medium text-base bg-linear-[178.36deg,#25292F_47.33%,#758295_143.08%] cursor-pointer w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#043D6E]"
              >
                {t("header.getStarted")}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
