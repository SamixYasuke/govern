import Image from "next/image";

const MeetSection = () => {
  return (
    <section
      id="meet-section"
      className="w-full relative py-20 px-30 bg-[linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),linear-gradient(0deg,#087ADB,#087ADB)]"
    >
      <div className="flex flex-col gap-16">
        <div className="max-w-121.75 flex flex-col gap-6 mx-auto">
          <div className="max-w-121.75 flex flex-col gap-2">
            <div>
              <h2 className="font-boldonse font-normal text-[32px] text-center text-white leading-15.5 tracking-[0%]">
                MEET THE GOVERN CARD
              </h2>
            </div>
            <div className="max-w-98 mx-auto">
              <p className="font-geist font-normal text-base text-white leading-6 tracking-[0%] text-center">
                A digital-first card designed for modern payments.  Track
                balances, manage spending, and stay in control, wherever you
                are.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button className="font-geist font-medium text-base text-[#171717] leading-6 tracking-[-0.02em] bg-[#F7F7F7] rounded-[32px] py-3 px-8 border-2 border-white/20 cursor-pointer">
              Get a card
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            className="translate-x-5 pointer-events-none"
            width={414.0968933105469}
            height={232.40130615234375}
            src="/icons/card.png"
            alt="Govern meet card pic"
          />
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="/icons/cloud-large-one.svg"
          alt=""
          width={182}
          height={39}
          className="absolute top-22 left-0 animate-cloud-right animation-duration-[45s] [animation-delay:-12s]"
        />
        <Image
          src="/icons/cloud-large-two.svg"
          alt=""
          width={182}
          height={39}
          className="absolute top-72 left-0 animate-cloud-left animation-duration-[60s] [animation-delay:-35s]"
        />
        <Image
          src="/icons/cloud-small.svg"
          alt=""
          width={66}
          height={20}
          className="absolute top-20 left-0 animate-cloud-right animation-duration-[80s] [animation-delay:-50s]"
        />
      </div>
    </section>
  );
};

export default MeetSection;
