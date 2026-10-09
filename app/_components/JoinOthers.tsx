import ArrowRight02Icon from "@hugeicons/core-free-icons/ArrowRight02Icon";
import { HugeiconsIcon } from "@hugeicons/react";

const JoinOthers = () => {
  return (
    <section className="bg-white px-5 py-12 sm:px-8 md:p-30 w-full">
      <div className="max-w-198 flex flex-col gap-6 mx-auto w-full">
        <div>
          <h4 className="font-boldonse font-weight text-[26px] leading-11 sm:text-3xl md:text-[32px] md:leading-16 text-center text-balance">
            JOIN OVER 25 MILLION PEOPLE{" "}
            <span className="text-[#043D6E]">GOVERN</span>ING THEIR MONEY
            BETTER{" "}
          </h4>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-6">
            <button className="bg-linear-[178.36deg,#25292F_47.33%,#758295_143.08%] cursor-pointer py-3 px-8 border-2 border-[#FFFFFF1A] rounded-[32px] w-full sm:w-auto">
              <p className="text-white font-geist font-medium leading-6 tracking-[-2%] whitespace-nowrap">
                Create your account
              </p>
            </button>
            <button className="bg-[#F7F7F7] cursor-pointer py-3 px-8 border-2 border-[#FFFFFF1A] rounded-[32px] flex gap-2.5 justify-center items-center group w-full sm:w-auto">
              <p className="text-[#171717] font-geist font-medium leading-6 tracking-[-2%]">
                Compare pricing
              </p>
              <HugeiconsIcon
                icon={ArrowRight02Icon}
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
