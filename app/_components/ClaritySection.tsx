"use client";

import { ArrowRight01Icon, ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import dynamic from "next/dynamic";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { useT } from "@/i18n/LocaleProvider";

const ClaritySwiper = dynamic(() => import("./ClaritySwiper"), {
  ssr: false,
});

const ClaritySection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const t = useT();

  return (
    <section
      aria-labelledby="clarity-heading"
      className="w-full overflow-x-clip bg-[#F7F7F7] px-5 py-10 sm:px-8 md:p-30"
    >
      <div className="flex flex-col gap-8 md:gap-12">
        <div className="max-w-249 w-full flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <div>
            <h2
              id="clarity-heading"
              className="font-boldonse text-[26px] leading-11 sm:text-3xl md:text-[32px] font-normal md:leading-16 text-[#171717] text-balance"
            >
              {t("clarity.title")}
            </h2>
          </div>

          <div className="flex items-center gap-2.5" role="group" aria-label="Carousel controls">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="h-10 w-10 md:h-12 md:w-12 cursor-pointer rounded-[100px] bg-white p-2.5 md:p-3 transition-colors duration-75 ease-in-out hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#043D6E]"
              aria-label={t("clarity.prev")}
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="h-10 w-10 md:h-12 md:w-12 cursor-pointer rounded-[100px] bg-white p-2.5 md:p-3 transition-colors duration-75 ease-in-out hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#043D6E]"
              aria-label={t("clarity.next")}
            >
              <HugeiconsIcon icon={ArrowRight01Icon} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="relative w-full overflow-visible">
          <ClaritySwiper swiperRef={swiperRef} />
        </div>
      </div>
    </section>
  );
};

export default ClaritySection;
