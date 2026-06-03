import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CompanyInfoSection from "../components/CompanyInfoSection";

import FounderSection from "../components/FounderSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CompanyInfoSection />

      <FounderSection />
      <ContactSection />
    </>
  );
}