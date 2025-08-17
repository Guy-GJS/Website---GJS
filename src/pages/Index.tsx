import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { WhyUsSection } from "@/components/why-us-section";
import { FAQSection } from "@/components/faq-section";
import { AboutSection } from "@/components/about-section";

import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import Navigation from "@/components/navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <WhyUsSection />
      <FAQSection />

      <ContactSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
