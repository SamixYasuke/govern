"use client";

import ArrowRight02Icon from "@hugeicons/core-free-icons/ArrowRight02Icon";
import { HugeiconsIcon } from "@hugeicons/react";
import { useT } from "@/i18n/LocaleProvider";

const JoinOthers = () => {
  const t = useT();
  return (
    <section
      aria-labelledby="join-heading"
      className="bg-white px-5 py-12 sm:px-8 md:p-30 w-full"
    >
      <div className="max-w-198 flex flex-col gap-6 mx-auto w-full">
        <div>
          <h2
            id="join-heading"
            className="font-boldonse font-weight text-[26px] leading-11 sm:text-3xl md:text-[32px] md:leading-16 text-center text-balance"
          >
            {t("join.prefix")}{" "}
            <span className="text-[#043D6E]">{t("join.highlight")}</span>
            {t("join.suffix")}
          </h2>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-6">
            <button
              type="button"
              className="bg-linear-[178.36deg,#25292F_47.33%,#758295_143.08%] cursor-pointer py-3 px-8 border-2 border-[#FFFFFF1A] rounded-[32px] w-full sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#043D6E]"
            >
              <span className="text-white font-geist font-medium leading-6 tracking-[-2%] whitespace-nowrap">
                {t("join.create")}
              </span>
            </button>
            <button
              type="button"
              className="bg-[#F7F7F7] cursor-pointer py-3 px-8 border-2 border-[#FFFFFF1A] rounded-[32px] flex gap-2.5 justify-center items-center group w-full sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#043D6E]"
            >
              <span className="text-[#171717] font-geist font-medium leading-6 tracking-[-2%]">
                {t("join.compare")}
              </span>
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                aria-hidden="true"
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOthers;
