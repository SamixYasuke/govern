"use client";

import Image from "next/image";
import { useT } from "@/i18n/LocaleProvider";

const HeroSection = () => {
  const t = useT();
  return (
    <section
      id="hero-section"
      aria-labelledby="hero-heading"
      className="w-full my-10 md:my-16 overflow-x-clip"
    >
      <div className="flex flex-col items-center gap-8 w-full max-w-249 mx-auto px-5 sm:px-8">
        <div aria-hidden="true" className="relative w-48 h-36 sm:w-56 sm:h-44 md:w-67.25 md:h-51 mx-auto">
          <Image
            src="/landing_page/wallet-animated.svg"
            alt=""
            fill
            className="object-contain pointer-events-none"
            sizes="(max-width: 768px) 192px, 269px"
          />
          <Image
            src={"/icons/star-large.svg"}
            alt=""
            width={44.79999923706055}
            height={44.79999923706055}
            className="absolute -right-4 top-2 sm:-right-6 md:top-22 md:left-[calc(100%-275px)] md:right-auto w-7 h-7 md:w-11 md:h-11 pointer-events-none"
          />
          <Image
            src={"/icons/star-small.svg"}
            alt=""
            width={26}
            height={26}
            className="absolute right-2 bottom-0 md:top-[167.2px] md:left-[177.82px] md:right-auto md:bottom-auto w-4.5 h-4.5 md:w-[26px] md:h-[26px] pointer-events-none"
          />
        </div>
        <span id="hero-wallet-desc" className="sr-only">
          {t("hero.walletAlt")}
        </span>
        <div className="flex flex-col items-center gap-6 w-full max-w-172.5">
          <h1
            id="hero-heading"
            className="font-boldonse text-[28px] leading-10 sm:text-3xl sm:leading-12 md:text-[40px] md:leading-16 text-center text-[#25292F] text-balance"
          >
            {t("hero.title")}
          </h1>
          <p className="font-geist text-base leading-6 text-center max-w-98 px-2 sm:px-0">
            {t("hero.subtitle")}
          </p>
          <button
            type="button"
            aria-label={t("hero.download")}
            className="flex justify-center items-center bg-linear-[178.36deg,#25292F_47.33%,#758295_143.08%] cursor-pointer w-full max-w-[300px] sm:w-63.5 sm:max-w-none h-12 border-2 rounded-[32px] px-8 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#043D6E]"
          >
            <span className="flex items-center gap-1.5">
              <Image
                src="/icons/apple-logo.svg"
                alt=""
                aria-hidden="true"
                width={12}
                height={15}
                className="pointer-events-none"
              />
              <span aria-hidden="true" className="border-r h-4 border-white" />
              <Image
                src="/icons/playstore-logo.svg"
                alt=""
                aria-hidden="true"
                width={12}
                height={15}
                className="pointer-events-none"
              />
              <span className="text-white font-geist font-medium text-base leading-6">
                {t("hero.download")}
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
