import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductsDigital } from "@/components/ProductsDigital";
import { ProductsPhysical } from "@/components/ProductsPhysical";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductsDigital />
      <ProductsPhysical />
      <Footer />
    </div>
  );
};

export default Index;
