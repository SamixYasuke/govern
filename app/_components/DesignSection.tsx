import Image from "next/image";

const DesignSection = () => {
  return (
    <section className="py-20 px-30 bg-[#043D6E] h-29.5 relative">
      <Image
        src="/landing_page/bg.svg"
        alt="bg"
        fill
        className="h-full pointer-events-none"
      />
    </section>
  );
};

export default DesignSection;
