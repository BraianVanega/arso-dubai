import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GrowthAreasSection } from "@/components/sections/GrowthAreasSection";
import { Hero } from "@/components/sections/Hero";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TransparencyBanner } from "@/components/sections/TransparencyBanner";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60 focus:rounded-sm focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <MethodologySection />
        <GrowthAreasSection />
        <TransparencyBanner />
        <ComplianceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
