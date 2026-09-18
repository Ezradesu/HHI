import { FinalCTASection } from "./components/FinalCTASection";
import { HeroSection } from "./components/HeroSection";
import { HowWeWorkSection } from "./components/HowWeWorkSection";
import { LogoMarquee } from "./components/LogoMarquee";
import { MeetOurTeamSection } from "./components/MeetOurTeamSection";
import { Navbar } from "./components/Navbar";
import { ReasonToChooseSection } from "./components/ReasonToChooseSection";
import { ServiceSection } from "./components/ServiceSection";
import { SiteFooter } from "./components/SiteFooter";

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
        <MeetOurTeamSection />
        <FinalCTASection />
      </main>

      <SiteFooter />
    </div>
  );
}
