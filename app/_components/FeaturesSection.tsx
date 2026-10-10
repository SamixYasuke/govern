"use client";

import FeatureCard from "../../components/ui/feature-card";
import { useT } from "@/i18n/LocaleProvider";

const FeaturesSection = () => {
  const t = useT();
  return (
    <section className="w-full mx-auto px-5 py-12 sm:px-8 md:p-30 bg-white overflow-x-clip">
      <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-0 md:flex-row md:items-center md:justify-between max-w-249 mx-auto">
        <FeatureCard
          iconSrc="/icons/wallet-money-animated.svg"
          cardHeaderText={t("features.balanceTitle")}
          cardSubText={t("features.balanceSub")}
          className="flex-1 pointer-events-none"
        />
        <div className="hidden md:block w-px self-stretch bg-[#CDD8E2] mx-6 shrink-0" />
        <FeatureCard
          iconSrc="/icons/add-square-animated.svg"
          cardHeaderText={t("features.addTitle")}
          cardSubText={t("features.addSub")}
          className="flex-1 pointer-events-none"
        />
        <div className="hidden md:block w-px self-stretch bg-[#CDD8E2] mx-6 shrink-0" />
        <FeatureCard
          iconSrc="/icons/card-animated.svg"
          cardHeaderText={t("features.manageTitle")}
          cardSubText={t("features.manageSub")}
          className="flex-1 pointer-events-none"
        />
        <div className="hidden md:block w-px self-stretch bg-[#CDD8E2] mx-6 shrink-0" />
        <FeatureCard
          iconSrc="/icons/bill-list-animated.svg"
          cardHeaderText={t("features.recentsTitle")}
          cardSubText={t("features.recentsSub")}
          className="flex-1 pointer-events-none"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
