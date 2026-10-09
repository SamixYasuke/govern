import FeatureCard from "../../components/ui/feature-card";

const FeaturesSection = () => {
  return (
    <section className="w-full mx-auto px-5 py-12 sm:px-8 md:p-30 bg-white overflow-x-clip">
      <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-0 md:flex-row md:items-center md:justify-between max-w-249 mx-auto">
        <FeatureCard
          iconSrc="/icons/wallet-money-animated.svg"
          cardHeaderText="CARD BALANCE"
          cardSubText="Updated in real time"
          className="flex-1 pointer-events-none"
        />
        <div className="hidden md:block w-px self-stretch bg-[#CDD8E2] mx-6 shrink-0" />
        <FeatureCard
          iconSrc="/icons/add-square-animated.svg"
          cardHeaderText="ADD MONEY"
          cardSubText="Top up in seconds"
          className="flex-1 pointer-events-none"
        />
        <div className="hidden md:block w-px self-stretch bg-[#CDD8E2] mx-6 shrink-0" />
        <FeatureCard
          iconSrc="/icons/card-animated.svg"
          cardHeaderText="MANAGE CARD"
          cardSubText="Customize instantly"
          className="flex-1 pointer-events-none"
        />
        <div className="hidden md:block w-px self-stretch bg-[#CDD8E2] mx-6 shrink-0" />
        <FeatureCard
          iconSrc="/icons/bill-list-animated.svg"
          cardHeaderText="RECENTS"
          cardSubText="Instant records for payments"
          className="flex-1 pointer-events-none"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
