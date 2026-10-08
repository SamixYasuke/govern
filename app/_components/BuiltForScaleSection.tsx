import Image from "next/image";

interface IArchivementCardProps {
  imgSrc: string;
  title: string;
  width: number;
  height: number;
}

const awards = [
  {
    image: "/landing_page/customer-satisfaction-award.png",
    alt: "govern customer-satisfaction",
    width: 80,
    height: 86,
    title: "Customer Satisfaction — Gold",
  },
  {
    image: "/landing_page/fintech-breakthrough.png",
    alt: "govern fintech-breakthrough",
    width: 92,
    height: 80,
    title: "Best Consumer Virtual Card 2025",
  },
  {
    image: "/landing_page/consumer-award.png",
    alt: "govern consumer-award",
    width: 80,
    height: 88,
    title: "Consumer Guardian Badge",
  },
];

const ArchivementCard = ({
  imgSrc = "",
  title = "",
  width = 0,
  height = 0,
}: IArchivementCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-[#F7F7F7] w-40 h-40 rounded-[64px] flex justify-center items-center">
        <Image
          src={imgSrc}
          alt="govern fintech-breakthrough"
          width={width}
          height={height}
          className="pointer-events-none"
        />
      </div>
      <div>
        <p className="font-geist font-normal text-[14px] leading-5.5 text-center text-[#2F353C]">
          {title}
        </p>
      </div>
    </div>
  );
};

const BuiltForScaleSection = () => {
  return (
    <section className="bg-white p-30 w-full">
      <div className="flex flex-col gap-8 items-center w-full">
        <div className="w-full flex flex-col gap-2.5 justify-center items-center w-full">
          <div>
            <h4 className="font-boldonse font-normal text-[32px] leading-16 text-center">
              BUILT FOR SCALE. TRUSTED WORLDWIDE.
            </h4>
          </div>
          <div className="w-118">
            <p className="font-geist text-base leading-6 text-center text-[#2F353C]">
              Govern is designed for individuals, teams, and global companies
              that move money across borders every day.
            </p>
          </div>
        </div>
        <div className="flex justify-between max-w-198 w-full">
          {awards.map((award, index) => (
            <ArchivementCard
              key={index}
              imgSrc={award.image}
              title={award.title}
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
