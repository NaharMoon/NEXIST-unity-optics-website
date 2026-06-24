import { BenefitsSection } from "@/components/home/benefits-section";
import { CollectionsSection } from "@/components/home/collections-section";
import { FaceShapeSection } from "@/components/home/face-shape-section";
import { HeroSection } from "@/components/home/hero-section";
import { LensTechnologySection } from "@/components/home/lens-technology-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { OfferBanner } from "@/components/home/offer-banner";
import { TryOnSection } from "@/components/home/try-on-section";
import { TrendingFramesSection } from "@/components/home/trending-frames-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <HeroSection />
      <CollectionsSection />
      <TryOnSection />
      <TrendingFramesSection />
      <FaceShapeSection />
      <LensTechnologySection />
      <OfferBanner />
      <BenefitsSection />
      <NewsletterSection />
      <SiteFooter />
    </main>
  );
}
