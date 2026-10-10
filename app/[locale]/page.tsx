import Header from "../_components/Header";
import HeroSection from "../_components/Herosection";
import MeetSection from "../_components/MeetSection";
import FeaturesSection from "../_components/FeaturesSection";
import ClaritySection from "../_components/ClaritySection";
import BuiltForScaleSection from "../_components/BuiltForScaleSection";
import TestimonialsSection from "../_components/TestimonialsSection";
import DesignSection from "../_components/DesignSection";
import JoinOthers from "../_components/JoinOthers";
import Footer from "../_components/Footer";
import { LocaleFade } from "./LocaleFade";

export default function LocaleHome() {
  return (
    <LocaleFade>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#043D6E] focus:px-5 focus:py-2.5 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <HeroSection />
        <MeetSection />
        <FeaturesSection />
        <ClaritySection />
        <BuiltForScaleSection />
        <TestimonialsSection />
        <DesignSection />
        <JoinOthers />
      </main>
      <Footer />
    </LocaleFade>
  );
}
