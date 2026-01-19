import type { Metadata } from "next";
import CommitmentSection from "@/components/Commitment";
import FAQSection from "@/components/Faqs";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChoose from "@/components/WhyChoose";
import HeroSection from "@/components/Hero";
import NewsletterSection from "@/components/Newsletter";
import TestimonialSection from "@/components/Testimonial";

export const metadata: Metadata = {
  description:
    "Browse Himalayan salt, lamps, and bath salts. Prices are listed in USD. Request a product by email.",
};

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-crescent-dark-brown">
      <HeroSection />
      <WhyChoose />
      <FeaturedProducts />
      <CommitmentSection />
      <TestimonialSection />
      <FAQSection />
      <NewsletterSection />
    </div>
  );
}
