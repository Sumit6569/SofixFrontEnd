
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TechTrendsSection from "@/components/home/TechTrendsSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PartnersSection from "@/components/home/PartnersSection";
import CtaSection from "@/components/home/CtaSection";
import ChatSupport from "@/components/support/ChatSupport";
import CaseStudiesSection from "@/components/home/PortfolioSection";
import AnalyticsPreviewSection from "@/components/home/AnalyticsPreviewSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <CaseStudiesSection />
        <IndustriesSection />
        <AnalyticsPreviewSection />
        <TechTrendsSection />
        <TestimonialsSection />
        <PartnersSection />
        <CtaSection />
      </main>
      
      <Footer />
      <ChatSupport />
    </div>
  );
};

export default Index;
