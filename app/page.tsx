import { HeroSection } from "./components/HeroSection";
import { HowWeWorkSection } from "./components/HowWeWorkSection";
import { LogoMarquee } from "./components/LogoMarquee";
import { Navbar } from "./components/Navbar";
import { ReasonToChooseSection } from "./components/ReasonToChooseSection";
import { ServiceSection } from "./components/ServiceSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Navbar />

      <main>
        <HeroSection />

        <LogoMarquee />
        <ServiceSection />
        <ReasonToChooseSection />
        <HowWeWorkSection />
      </main>
    </div>
  );
}
