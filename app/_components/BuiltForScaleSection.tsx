"use client";

import Image from "next/image";
import { useT } from "@/i18n/LocaleProvider";

interface IArchivementCardProps {
  imgSrc: string;
  title: string;
  alt: string;
  verifiedLabel: string;
  width: number;
  height: number;
}

const ArchivementCard = ({
  imgSrc = "",
  title = "",
  alt = "",
  verifiedLabel = "",
  width = 0,
  height = 0,
}: IArchivementCardProps) => {
  return (
    <div className="flex flex-row items-center gap-4 md:flex-col md:gap-2 w-full md:w-auto bg-[#F7F7F7] md:bg-transparent border border-[#EDF2F7] md:border-0 rounded-[20px] md:rounded-none p-4 sm:p-5 md:p-0 text-left md:text-center">
      <div className="bg-white md:bg-[#F7F7F7] w-16 h-16 sm:w-18 sm:h-18 md:w-40 md:h-40 rounded-2xl md:rounded-[64px] flex justify-center items-center shrink-0 shadow-[0_1px_2px_rgba(23,23,23,0.06)] md:shadow-none overflow-hidden">
        <Image
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className="pointer-events-none w-10 h-10 sm:w-11 sm:h-11 md:w-auto md:h-auto object-contain"
        />
      </div>
      <div className="min-w-0 flex-1 md:flex-none">
        <p className="font-geist font-medium md:font-normal text-[15px] md:text-[14px] leading-6 md:leading-5.5 text-left md:text-center text-[#171717] md:text-[#2F353C]">
          {title}
        </p>
        <p className="md:hidden font-geist font-normal text-[13px] leading-5 text-[#808080] mt-0.5">
          {verifiedLabel}
        </p>
      </div>
      <div className="md:hidden text-[#CDD8E2] shrink-0" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </div>
    </div>
  );
};

const BuiltForScaleSection = () => {
  const t = useT();
  const awards = [
    {
      image: "/landing_page/customer-satisfaction-award.png",
      alt: "govern customer-satisfaction",
      width: 80,
      height: 86,
      title: t("scale.award1"),
    },
    {
      image: "/landing_page/fintech-breakthrough.png",
      alt: "govern fintech-breakthrough",
      width: 92,
      height: 80,
      title: t("scale.award2"),
    },
    {
      image: "/landing_page/consumer-award.png",
      alt: "govern consumer-award",
      width: 80,
      height: 88,
      title: t("scale.award3"),
    },
  ];

  return (
    <section className="bg-white px-5 py-12 sm:px-8 md:p-30 w-full overflow-x-clip">
      <div className="flex flex-col gap-8 items-center w-full max-w-249 mx-auto">
        <div className="flex flex-col gap-3 justify-center items-center w-full">
          <span className="md:hidden inline-flex items-center gap-1.5 rounded-full bg-[#043D6E]/5 border border-[#043D6E]/10 px-3 py-1 font-geist text-[12px] font-medium tracking-wide text-[#043D6E]">
            <span className="size-1.5 rounded-full bg-[#043D6E]" />
            {t("scale.badge")}
          </span>
          <div>
            <h4 className="font-boldonse font-normal text-[26px] leading-11 sm:text-3xl md:text-[32px] md:leading-16 text-center text-balance">
              {t("scale.title")}
            </h4>
          </div>
          <div className="w-full max-w-118 px-2 sm:px-0">
            <p className="font-geist text-[15px] sm:text-base leading-6 text-center text-[#5B6470] md:text-[#2F353C]">
              {t("scale.subtitle")}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 sm:gap-3.5 md:gap-6 md:justify-between w-full max-w-198 md:mx-auto">
          {awards.map((award, index) => (
            <ArchivementCard
              key={index}
              imgSrc={award.image}
              alt={award.alt}
              title={award.title}
              verifiedLabel={t("scale.verified")}
              height={award.height}
              width={award.width}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltForScaleSection;
