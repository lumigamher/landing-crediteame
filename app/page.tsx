import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { LoanSimulatorSection } from "@/components/loan-simulator-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { InvestmentSection } from "@/components/investment-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <LoanSimulatorSection />
      <TestimonialsSection />
      <FAQSection />
      <CtaSection />
      <InvestmentSection />
      <Footer />
    </main>
  )
}
