import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BioSection } from "@/components/BioSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BioSection />
      <Footer />
    </div>
  );
};

export default Index;
