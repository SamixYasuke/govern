import Image from "next/image";

const DesignSection = () => {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className="py-10 px-5 sm:px-8 md:py-20 lg:px-30 bg-[#043D6E] h-20 sm:h-24 md:h-29.5 relative overflow-hidden"
    >
      <div className="absolute inset-0 flex w-max animate-design-pan motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div key={copy} className="relative h-full w-screen shrink-0">
            <Image
              src="/landing_page/bg.svg"
              alt=""
              fill
              priority={false}
              aria-hidden="true"
              className="h-full w-full object-cover pointer-events-none"
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignSection;
