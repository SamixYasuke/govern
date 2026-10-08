import FeatureCard from "../../components/ui/feature-card";

const FeaturesSection = () => {
  return (
    <section className="w-full mx-auto p-30 bg-white">
      <div className="flex items-center justify-between">
        <FeatureCard
          iconSrc="/icons/wallet-money-animated.svg"
          cardHeaderText="CARD BALANCE"
          cardSubText="Updated in real time"
          className="flex-2 pointer-events-none"
        />
        <div className="w-px self-stretch bg-[#CDD8E2] mx-6 shrink-0" />
        <FeatureCard
          iconSrc="/icons/add-square-animated.svg"
          cardHeaderText="ADD MONEY"
          cardSubText="Top up in seconds"
          className="flex-2 pointer-events-none"
        />
        <div className="w-px self-stretch bg-[#CDD8E2] mx-6 shrink-0" />
        <FeatureCard
          iconSrc="/icons/card-animated.svg"
          cardHeaderText="MANAGE CARD"
          cardSubText="Customize instantly"
          className="flex-2 pointer-events-none"
        />
        <div className="w-px self-stretch bg-[#CDD8E2] mx-6 shrink-0" />
        <FeatureCard
          iconSrc="/icons/bill-list-animated.svg"
          cardHeaderText="RECENTS"
          cardSubText="Instant records for payments"
          className="flex-2 pointer-events-none"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
