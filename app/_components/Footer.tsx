"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocaleContext } from "@/i18n/LocaleProvider";

const socials = [
  { src: "/icons/linkedin.svg", alt: "LinkedIn", href: "#" },
  { src: "/icons/tiktok.svg", alt: "TikTok", href: "#" },
  { src: "/icons/instagram.svg", alt: "Instagram", href: "#" },
  { src: "/icons/x.svg", alt: "X", href: "#" },
];

const Footer = () => {
  const { locale, t, tArray } = useLocaleContext();

  const footerLinks: Record<string, { name: string; link: string }[]> = {
    [t("footer.products")]: [
      { name: t("footer.cards"), link: "#" },
      { name: t("footer.payments"), link: "#" },
      { name: t("footer.pricing"), link: "#" },
    ],
    [t("footer.company")]: [
      { name: t("footer.about"), link: "#" },
      { name: t("footer.careers"), link: "#" },
      { name: t("footer.press"), link: "#" },
    ],
    [t("footer.support")]: [
      { name: t("footer.help"), link: "#" },
      { name: t("footer.contact"), link: "#" },
      { name: t("footer.security"), link: "#" },
    ],
    [t("footer.legal")]: [
      { name: t("footer.privacy"), link: "#" },
      { name: t("footer.terms"), link: "#" },
    ],
  };

  const legalLinks = tArray("footer.legalLinks");
  const disclosures = tArray("footer.disclosures");

  return (
    <footer className="relative overflow-hidden bg-[#043D6E] px-4 pt-10 sm:px-8 md:pt-20 lg:px-30 [--fs:clamp(2.75rem,17.5vw,12rem)] pb-[clamp(5rem,calc(var(--fs)*1.25),15rem)]">
      <div className="relative z-10 mx-auto flex w-full max-w-249 flex-col gap-8 rounded-[24px] bg-white p-6 sm:p-8 md:gap-12 md:rounded-[40px] md:p-16">
        <div
          id="grid"
          className="grid w-full grid-cols-2 place-content-center gap-8 md:grid-cols-4 md:gap-10"
        >
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title} className="flex flex-col gap-6">
              <h6 className="font-geist text-base font-medium leading-6 text-[#171717]">
                {title}
              </h6>
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      className="font-geist text-sm font-normal leading-5.5 text-[#171717]"
                      href={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="socials" className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={`/${locale}`}
              className="font-geist text-xl font-normal leading-7 tracking-[-0.02em] text-[#25292F]"
            >
              <span className="font-boldonse text-base font-normal leading-7 tracking-[-0.02em]">
                GO
              </span>
              vern
            </Link>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socials.map((s) => (
                <Link
                  key={s.alt}
                  href={s.href}
                  className="flex h-10 w-10 items-center justify-center rounded-[100px] bg-[#F7F7F7] transition-colors duration-75 ease-in-out hover:bg-[#F7F7F7]/70 md:h-12 md:w-12"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={16}
                    height={16}
                    className="pointer-events-none"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div
            id="horizontal-rule"
            className="w-full max-w-217 border-t border-[#CDD8E2]"
          />

          <div id="law" className="flex flex-col gap-6">
            <div
              id="hori"
              className="flex flex-wrap gap-x-4 gap-y-2 md:justify-between"
            >
              <div className="flex gap-1 p-1">
                <Image src="/icons/uk-icon.svg" alt="" width={16} height={16} />
                <p className="font-geist text-[12px] font-normal leading-5 tracking-[-0.02em] text-[#2F353C]">
                  {t("footer.uk")}
                </p>
              </div>
              {legalLinks.map((label) => (
                <div key={label} className="flex gap-1 p-1">
                  <p className="font-geist text-[12px] font-normal leading-5 tracking-[-0.02em] text-[#2F353C]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div id="article" className="flex w-full max-w-217 flex-col gap-8">
              {disclosures.map((text) => (
                <p
                  key={text.slice(0, 24)}
                  className="font-geist text-[12px] font-normal leading-6 text-[#171717]"
                >
                  {text}
                </p>
              ))}
            </div>

            <div id="copyright">
              <p className="font-geist text-[12px] font-normal leading-5 text-[#808080]">
                © Govern Ltd {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 z-20 select-none bottom-[calc(var(--fs)*0.04)]s">
        <h6 className="text-center font-boldonse font-normal leading-none tracking-[-0.02em] whitespace-nowrap text-[#114775] text-(length:--fs)">
          GO
          <span className="font-bold">vern</span>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
