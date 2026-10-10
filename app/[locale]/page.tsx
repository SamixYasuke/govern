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
      <Header />
      <main>
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
