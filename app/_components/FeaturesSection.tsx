import FeatureCard from "../../components/ui/feature-card";

const FeaturesSection = () => {
  return (
    <section>
      <div>
        <FeatureCard
          iconSrc="/icons/wallet-money-animated.svg"
          cardHeaderText="CARD BALANCE"
          cardSubText="Updated in real time"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
