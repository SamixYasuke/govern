import HeroSection from "./_components/Herosection";
import Header from "./_components/Header";
import MeetSection from "./_components/MeetSection";
import FeaturesSection from "./_components/FeaturesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MeetSection />
        <FeaturesSection />
      </main>
    </>
  );
}
