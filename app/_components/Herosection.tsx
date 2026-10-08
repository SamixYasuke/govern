import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero-section" className="w-full my-16">
      <div className="flex flex-col items-center gap-8 w-full max-w-249 mx-auto px-4">
        <div className="relative w-67.25 h-51 mx-auto">
          <Image
            src="/landing_page/wallet-animated.svg"
            alt="Animated wallet on Govern hero section"
            fill
            className="object-contain pointer-events-none"
          />
          <Image
            src={"/icons/star-large.svg"}
            alt="star-large"
            width={44.79999923706055}
            height={44.79999923706055}
            className="absolute top-22 left-[calc(100%-275px)] pointer-events-none"
          />
          <Image
            src={"/icons/star-small.svg"}
            alt="star-small"
            width={26}
            height={26}
            className="absolute top-[167.2px] left-[177.82px] pointer-events-none"
          />
        </div>
        <div className="flex flex-col items-center gap-6 w-full max-w-172.5">
          <h1 className="font-boldonse text-[40px] leading-16 text-center text-[#25292F]">
            YOUR MONEY. ONE CARD. TOTAL CONTROL.
          </h1>
          <p className="font-geist text-base leading-6 text-center max-w-98">
            Spend, send, and manage money globally — with clarity, security, and
            zero friction.
          </p>
          <button className="flex justify-center items-center bg-linear-[178.36deg,#25292F_47.33%,#758295_143.08%] cursor-pointer w-63.5 h-12 border-2 rounded-[32px] px-8 py-3">
            <div className="flex items-center gap-1.5">
              <Image
                src="/icons/apple-logo.svg"
                alt="Apple App Store icon"
                width={12}
                height={15}
                className="pointer-events-none"
              />
              <div className="border-r h-4 border-white" />
              <Image
                src="/icons/playstore-logo.svg"
                alt="Google Play Store icon"
                width={12}
                height={15}
                className="pointer-events-none"
              />
              <p className="text-white font-geist font-medium text-base leading-6">
                Download the app
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
