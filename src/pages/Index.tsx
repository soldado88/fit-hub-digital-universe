import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BioSection } from "@/components/BioSection";
import { ProtocolsSection } from "@/components/ProtocolsSection";
import { ConsultationsSection } from "@/components/ConsultationsSection";
import { ChallengeSection } from "@/components/ChallengeSection";
import { BlogSection } from "@/components/BlogSection";
import { ShopSection } from "@/components/ShopSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ContactsSection } from "@/components/ContactsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BioSection />
      <ProtocolsSection />
      <ConsultationsSection />
      <ChallengeSection />
      <BlogSection />
      <ShopSection />
      <SocialProofSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
