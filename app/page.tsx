import HeroSection from "./_components/Herosection";
import Header from "./_components/Header";
import MeetSection from "./_components/MeetSection";
import FeaturesSection from "./_components/FeaturesSection";
import ClaritySection from "./_components/ClaritySection";
import BuiltForScaleSection from "./_components/BuiltForScaleSection";
import TestimonialsSection from "./_components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MeetSection />
        <FeaturesSection />
        <ClaritySection />
        <BuiltForScaleSection />
        <TestimonialsSection />
      </main>
    </>
  );
}
