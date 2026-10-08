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
    <div className={`py-8 flex flex-col gap-6 ${className}`}>
      <div>
        <Image
          src={iconSrc}
          alt={`animated ${iconSrc} icon`}
          width={48}
          height={48}
        />
      </div>
      <div>
        <h5
          className="font-boldonse font-normal text-xl leading-12 text-[#171717]
        "
        >
          {cardHeaderText}
        </h5>
        <p className="font-geist font-normal text-base leading-6 text-[#171717]">
          {cardSubText}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
