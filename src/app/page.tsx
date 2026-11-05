import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { OurProductsSection } from "@/components/home/OurProductsSection";
import { ProductTestSection } from "@/components/home/ProductTestSection";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { CreamSection } from "@/components/home/CreamSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { KeyCustomersSection } from "@/components/home/KeyCustomersSection";
import { SocialSubscribeSection } from "@/components/home/SocialSubscribeSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { CertificationSection } from "@/components/home/CertificationSection";

export default function HomePage() {
  return (
    <>
      {/* 2. Hero Section: 5 Slides (1 video, 4 category images with shop now buttons) */}
      <HeroSection />

      {/* 3. Our Product Sections: 4 product cards (Butter, Cream, Ghee, Chocolate & Chip) + View all link */}
      <OurProductsSection />

      {/* 4. Product Test Section: Slogan heading, left mix products image, right trusted 4 lines */}
      <ProductTestSection />

      {/* 5. Featured Product Section: 9 product carousel cards */}
      <FeaturedProductsSection />

      {/* 6. Cream Section: Right side cream image, left side details */}
      <CreamSection />

      {/* 7. Why Choose Us: 4 square block cards (2 up, 2 down), dark shade, big headline bottom-right, hover details */}
      <WhyChooseUsSection />

      {/* 8. Our Key Customers: 20 cards, 5 in one line on desktop */}
      <KeyCustomersSection />

      {/* 10. Subscribe our Facebook & Instagram with QR codes */}
      <SocialSubscribeSection />

      {/* 11. Subscribe Section: "Join our community with subscribe for update" */}
      <NewsletterSection />

      {/* 12. Quality & Halal Certifications Section (just before footer) */}
      <CertificationSection />
    </>
  );
}
