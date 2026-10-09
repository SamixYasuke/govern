import ArrowRight02Icon from "@hugeicons/core-free-icons/ArrowRight02Icon";
import { HugeiconsIcon } from "@hugeicons/react";

const JoinOthers = () => {
  return (
    <section className="bg-white p-30 w-full">
      <div className="max-w-198 flex flex-col gap-6 mx-auto">
        <div>
          <h4 className="font-boldonse font-weight text-[32px] leading-16 text-center">
            JOIN OVER 25 MILLION PEOPLE{" "}
            <span className="text-[#043D6E]">GOVERN</span>ING THEIR MONEY
            BETTER{" "}
          </h4>
        </div>
        <div>
          <div className="flex justify-center items-center gap-6">
            <button className="bg-linear-[178.36deg,#25292F_47.33%,#758295_143.08%] cursor-pointer py-3 px-8 border-2 border-[#FFFFFF1A] rounded-[32px]">
              <p className="text-white font-geist font-medium leading-6 tracking-[-2%]">
                Create your account
              </p>
            </button>
            <button className="bg-[#F7F7F7] cursor-pointer py-3 px-8 border-2 border-[#FFFFFF1A] rounded-[32px] flex gap-2.5 group">
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
