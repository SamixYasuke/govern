"use client";

import Image from "next/image";
import { useT } from "@/i18n/LocaleProvider";

const MeetSection = () => {
  const t = useT();
  return (
    <section
      id="meet-section"
      aria-labelledby="meet-heading"
      className="w-full relative py-12 px-5 sm:px-8 md:py-20 lg:px-30 bg-[linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),linear-gradient(0deg,#087ADB,#087ADB)] overflow-x-clip"
    >
      <div className="flex flex-col gap-10 md:gap-16">
        <div className="max-w-121.75 flex flex-col gap-6 mx-auto w-full">
          <div className="max-w-121.75 flex flex-col gap-2 w-full">
            <div>
              <h2
                id="meet-heading"
                className="font-boldonse font-normal text-[26px] leading-11 sm:text-3xl sm:leading-13 md:text-[32px] text-center text-white md:leading-15.5 tracking-[0%] text-balance"
              >
                {t("meet.title")}
              </h2>
            </div>
            <div className="max-w-98 mx-auto w-full">
              <p className="font-geist font-normal text-base text-white leading-6 tracking-[0%] text-center px-2 sm:px-0">
                {t("meet.subtitle")}
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              type="button"
              className="font-geist font-medium text-base text-[#171717] leading-6 tracking-[-0.02em] bg-[#F7F7F7] rounded-[32px] py-3 px-8 border-2 border-white/20 cursor-pointer w-full max-w-[280px] sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t("meet.cta")}
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center px-2">
          <Image
            className="translate-x-0 md:translate-x-5 pointer-events-none w-full max-w-[320px] sm:max-w-[400px] md:max-w-none md:w-auto h-auto"
            width={414.0968933105469}
            height={232.40130615234375}
            src="/icons/card.png"
            alt={t("meet.cardAlt")}
            sizes="(max-width: 768px) 320px, 414px"
          />
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <Image
          src="/icons/cloud-large-one.svg"
          alt=""
          width={182}
          height={39}
          className="absolute top-10 md:top-22 left-0 w-24 md:w-[182px] h-auto animate-cloud-right motion-reduce:animate-none animation-duration-[45s] [animation-delay:-12s]"
        />
        <Image
          src="/icons/cloud-large-two.svg"
          alt=""
          width={182}
          height={39}
          className="absolute top-48 md:top-72 left-0 w-24 md:w-[182px] h-auto animate-cloud-left motion-reduce:animate-none animation-duration-[60s] [animation-delay:-35s]"
        />
        <Image
          src="/icons/cloud-small.svg"
          alt=""
          width={66}
          height={20}
          className="absolute top-8 md:top-20 left-0 w-10 md:w-[66px] h-auto animate-cloud-right motion-reduce:animate-none animation-duration-[80s] [animation-delay:-50s]"
        />
      </div>
    </section>
  );
};

export default MeetSection;
