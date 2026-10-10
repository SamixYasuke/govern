import Image from "next/image";

interface IFeatureCard {
  className?: string;
  iconSrc: string;
  cardHeaderText: string;
  cardSubText: string;
}

const FeatureCard = ({
  className = "",
  iconSrc = "",
  cardHeaderText = "",
  cardSubText = "",
}: IFeatureCard) => {
  return (
    <div
      className={`group flex flex-row items-center gap-4 rounded-[20px] bg-[#F7F7F7] border border-[#EDF2F7] p-4 sm:p-5 md:border-0 md:bg-transparent md:rounded-none md:p-0 md:py-8 md:flex-col md:items-start md:gap-6 ${className}`}
    >
      <div className="bg-white rounded-2xl md:rounded-none p-2.5 md:p-0 shadow-[0_1px_2px_rgba(23,23,23,0.06)] md:shadow-none shrink-0">
        <Image
          src={iconSrc}
          alt=""
          aria-hidden="true"
          width={48}
          height={48}
          className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12"
        />
      </div>
      <div className="min-w-0 text-left">
        <h3
          className="font-boldonse font-normal text-[15px] sm:text-base md:text-xl leading-7 md:leading-12 text-[#171717] tracking-wide
        "
        >
          {cardHeaderText}
        </h3>
        <p className="font-geist font-normal text-sm md:text-base leading-5 md:leading-6 text-[#5B6470] md:text-[#171717] mt-0.5 md:mt-0">
          {cardSubText}
        </p>
      </div>
      <div aria-hidden="true" className="ml-auto md:hidden text-[#CDD8E2] group-active:text-[#043D6E] transition-colors">
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </div>
    </div>
  );
};

export default FeatureCard;
