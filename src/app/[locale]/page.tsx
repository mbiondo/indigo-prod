import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomeProps) {
  // We await params but don't need to use locale here since components handle it
  await params;
  
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}