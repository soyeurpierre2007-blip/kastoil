import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OriginesSection from "@/components/OriginesSection";
import ProblemsSection from "@/components/ProblemsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CompositionSection from "@/components/CompositionSection";
import GallerySection from "@/components/GallerySection";
import HowToSection from "@/components/HowToSection";
import ReviewsSection from "@/components/ReviewsSection";
import OrderSection from "@/components/OrderSection";
import FAQSection from "@/components/FAQSection";
import TikTokSection from "@/components/TikTokSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0B0E11] min-h-screen">
      <Navbar />
      <HeroSection />
      <OriginesSection />
      <ProblemsSection />
      <BenefitsSection />
      <CompositionSection />
      <GallerySection />
      <HowToSection />
      <ReviewsSection />
      <OrderSection />
      <FAQSection />
      <TikTokSection />
      <Footer />
    </main>
  );
}
