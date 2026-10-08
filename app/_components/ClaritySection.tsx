"use client";

import { ArrowRight01Icon, ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import dynamic from "next/dynamic";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

const ClaritySwiper = dynamic(() => import("./ClaritySwiper"), {
  ssr: false,
});

const ClaritySection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full overflow-x-clip bg-[#F7F7F7] p-30">
      <div className="flex flex-col gap-12">
        <div className="max-w-249 flex items-center justify-between">
          <div>
            <h4 className="font-boldonse text-[32px] font-normal leading-16 text-[#171717]">
              THE CLARITY YOU NEED
            </h4>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="h-12 w-12 cursor-pointer rounded-[100px] bg-white p-3 transition-colors duration-75 ease-in-out hover:bg-white/70"
              aria-label="Previous slide"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="h-12 w-12 cursor-pointer rounded-[100px] bg-white p-3 transition-colors duration-75 ease-in-out hover:bg-white/70"
              aria-label="Next slide"
            >
              <HugeiconsIcon icon={ArrowRight01Icon} />
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
