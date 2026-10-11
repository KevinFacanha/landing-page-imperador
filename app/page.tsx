import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AboutFounderSection } from "@/components/sections/about-founder-section";
import { CadasturSection } from "@/components/sections/cadastur-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";
import { GoogleReviewsProvider } from "@/components/google-reviews-provider";

export default function Home() {
  return (
    <GoogleReviewsProvider>
      <main className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <PhilosophySection />
        <FeaturedProductsSection />
        <TechnologySection />
        <GallerySection />
        <CollectionSection />
        <TestimonialsSection />
        <AboutFounderSection />
        <CadasturSection />
        <FaqSection />
        <FooterSection />
      </main>
    </GoogleReviewsProvider>
  );
}
