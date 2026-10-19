import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CompanyInfoSection from "../components/CompanyInfoSection";
import HomeSections from "../components/HomeSections";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HomeSections />
      <CompanyInfoSection />
      <ContactSection />
    </>
  );
}