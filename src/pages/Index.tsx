import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";

import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { CTABannerSection } from "@/components/sections/CTABannerSection";
import { EngineeringSection } from "@/components/sections/EngineeringSection";
import { ThoughtLeadershipSection } from "@/components/sections/ThoughtLeadershipSection";
import { InsightsSection } from "@/components/sections/InsightsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        <WhyChooseUsSection />
        <CTABannerSection />
        <EngineeringSection />
        <ThoughtLeadershipSection />
        <InsightsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
