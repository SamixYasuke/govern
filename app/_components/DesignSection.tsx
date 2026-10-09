import Image from "next/image";

const DesignSection = () => {
  return (
    <section className="py-10 px-5 sm:px-8 md:py-20 lg:px-30 bg-[#043D6E] h-20 sm:h-24 md:h-29.5 relative overflow-hidden">
      <Image
        src="/landing_page/bg.svg"
        alt="bg"
        fill
        className="h-full w-full object-cover pointer-events-none"
        sizes="100vw"
      />
    </section>
  );
};

export default DesignSection;
