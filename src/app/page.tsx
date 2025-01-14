import Footer from "@/components/common/Footer";
import FooterInfos from "@/components/common/FooterInfos";
import Header from "@/components/common/Header";
import SectionLinks from "@/components/common/SectionLinks";
import AdvertiseForFreeSection from "@/components/specific/AdvertiseForFreeSection";
import AmentiesSection from "@/components/specific/AmentiesSection";
import CarouselSection from "@/components/specific/CarouselSection";
import FindAPlaceSection from "@/components/specific/FindAPlaceSection";
import ForBuyersSection from "@/components/specific/ForBuyersSection";
import ForCompaniesSection from "@/components/specific/ForCompaniesSection";
import Hero from "@/components/specific/Hero";
import PortugalSection from "@/components/specific/PortugalSection";
import ReasonsSection from "@/components/specific/ReasonsSection";
import StatesSection from "@/components/specific/StatesSection";
import Image from "next/image";

export default function Home() {
  return (
   <div className="w-full h-full">
      <Header />
      <Hero />
      <CarouselSection />
      <FindAPlaceSection />
      <AmentiesSection />
      <AdvertiseForFreeSection />
      <StatesSection />
      <PortugalSection />
      <ReasonsSection />
      <ForBuyersSection />
      <ForCompaniesSection />
      <SectionLinks />
      <FooterInfos />
      <Footer />
   </div>
  );
}
