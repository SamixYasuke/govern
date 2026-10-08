import Image from "next/image";

interface IFeatureCard {
  iconSrc: string;
  cardHeaderText: string;
  cardSubText: string;
}

const FeatureCard = ({
  iconSrc = "",
  cardHeaderText = "",
  cardSubText = "",
}: IFeatureCard) => {
  <div className="py-8 flex flex-col gap-6">
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
  </div>;
};

export default FeatureCard;
