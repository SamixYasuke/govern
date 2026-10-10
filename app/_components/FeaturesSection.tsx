"use client";

import FeatureCard from "../../components/ui/feature-card";
import { useT } from "@/i18n/LocaleProvider";

const FeaturesSection = () => {
  const t = useT();
  return (
    <section
      aria-label="Product features"
      className="w-full mx-auto px-5 py-12 sm:px-8 md:p-30 bg-white overflow-x-clip"
    >
      <div
        role="list"
        className="flex flex-col gap-3 sm:gap-3.5 md:gap-0 md:flex-row md:items-center md:justify-between max-w-249 mx-auto"
      >
        <div role="listitem" className="flex-1 min-w-0">
          <FeatureCard
            iconSrc="/icons/wallet-money-animated.svg"
            cardHeaderText={t("features.balanceTitle")}
            cardSubText={t("features.balanceSub")}
            className="pointer-events-none"
          />
        </div>
        <div aria-hidden="true" className="hidden md:block w-px self-stretch bg-[#CDD8E2] mx-6 shrink-0" />
        <div role="listitem" className="flex-1 min-w-0">
          <FeatureCard
            iconSrc="/icons/add-square-animated.svg"
            cardHeaderText={t("features.addTitle")}
            cardSubText={t("features.addSub")}
            className="pointer-events-none"
          />
        </div>
        <div aria-hidden="true" className="hidden md:block w-px self-stretch bg-[#CDD8E2] mx-6 shrink-0" />
        <div role="listitem" className="flex-1 min-w-0">
          <FeatureCard
            iconSrc="/icons/card-animated.svg"
            cardHeaderText={t("features.manageTitle")}
            cardSubText={t("features.manageSub")}
            className="pointer-events-none"
          />
        </div>
        <div aria-hidden="true" className="hidden md:block w-px self-stretch bg-[#CDD8E2] mx-6 shrink-0" />
        <div role="listitem" className="flex-1 min-w-0">
          <FeatureCard
            iconSrc="/icons/bill-list-animated.svg"
            cardHeaderText={t("features.recentsTitle")}
            cardSubText={t("features.recentsSub")}
            className="pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
