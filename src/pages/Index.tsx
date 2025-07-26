import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomePageHero } from "@/components/HomePageHero";
import { HomePageMenu } from "@/components/HomePageMenu";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HomePageHero />
      <HomePageMenu />
      <Footer />
    </div>
  );
};

export default Index;
