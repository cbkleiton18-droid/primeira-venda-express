import HeroSection from "@/components/SalesPage/HeroSection";
import AuthoritySection from "@/components/SalesPage/AuthoritySection";
import TestimonialsSection from "@/components/SalesPage/TestimonialsSection";
import BenefitsSection from "@/components/SalesPage/BenefitsSection";
import ModulesSection from "@/components/SalesPage/ModulesSection";
import MentorSection from "@/components/SalesPage/MentorSection";
import MoreTestimonialsSection from "@/components/SalesPage/MoreTestimonialsSection";
import QualificationSection from "@/components/SalesPage/QualificationSection";
import ValueStackSection from "@/components/SalesPage/ValueStackSection";
import OfferSection from "@/components/SalesPage/OfferSection";
import GuaranteeSection from "@/components/SalesPage/GuaranteeSection";
import FAQSection from "@/components/SalesPage/FAQSection";
import FooterCTA from "@/components/SalesPage/FooterCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AuthoritySection />
      <TestimonialsSection />
      <BenefitsSection />
      <ModulesSection />
      <MentorSection />
      <MoreTestimonialsSection />
      <QualificationSection />
      <ValueStackSection />
      <GuaranteeSection />
      <FAQSection />
      <FooterCTA />
    </main>
  );
};

export default Index;
