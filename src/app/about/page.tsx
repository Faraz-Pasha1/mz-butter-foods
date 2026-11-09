import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { customers } from "@/data/customers";
import {
  Sparkles,
  Award,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Truck,
  Leaf,
} from "lucide-react";

export default function AboutPage() {
  const partners = customers.slice(0, 10);

  return (
    <div className="bg-[#FFFDF8] min-h-screen">
      {/* 1. Header with Professional Image & Heading of About */}
      <section className="relative py-20 sm:py-28 bg-[#1C0E07] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/aboutbanner.jpg"
            alt="Mz Butter & foods farm pasture"
            fill
            priority
            className="object-cover opacity-35 scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C0E07] via-[#1C0E07]/60 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          {/* <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/20 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Our Farm Heritage &amp; Craft</span>
          </div> */}

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            About Mz Butter &amp; Foods
          </h1>

          <p className="text-sm sm:text-lg text-amber-100/80 max-w-2xl mx-auto leading-relaxed">

          </p>
        </div>
      </section>

      {/* 2. 3 Paragraph Details */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
          {/* <p className="first-letter:text-5xl first-letter:font-black first-letter:text-amber-700 first-letter:mr-2 first-letter:float-left">
            Founded with an uncompromising devotion to pastoral purity, <strong>{siteConfig.name}</strong> was born from a simple observation: modern supermarket dairy has lost its soul. In an era dominated by high-speed industrial homogenization, synthetic color additives, and cheap palm-oil substitutions, real churned butter and fragrant danedar desi ghee have become tragic rarities. We embarked on a journey back to the roots of traditional dairy craftsmanship.
          </p> */}

          <p>
            MZ Butter and Foods, established in 2016, carries forward a legacy rooted in tradition and family values. Named in honour of our grandparents, Majeed and Zaitoon, the company was founded with a commitment to excellence in the processing of premium butter and other dairy products. We believe that great taste starts with quality. We focus on delivering rich flavour, a smooth and creamy texture, and reliable product quality to meet the needs of our customers.Bringing Quality and Creaminess to Every Table.
          </p>

          {/* <p>
            Today, Mz Butter &amp; Foods is proud to supply hundreds of premier French patisseries, artisanal sourdough bakeries, luxury hotel kitchens, and thousands of health-conscious households. From the cloud-like peaks of our fresh velvet cream to the intoxicating aroma of our slow-simmered danedar desi ghee, we invite you to rediscover what pure dairy was always meant to be.
          </p> */}
        </div>
      </section>

      {/* 3. Full Width Image Full Height Screen */}
      <section className="relative w-full h-screen min-h-[550px] max-h-[850px] bg-black overflow-hidden my-6">
        <Image
          src="/images/aboutpic.webp"
          alt="Mz Butter & foods dairy craftsmanship"
          fill
          className="object-cover scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 flex items-center justify-center p-6 text-center">
          <div className="max-w-3xl space-y-4 text-white">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold bg-black/40 px-3.5 py-1.5 rounded-full border border-white/20">
              The Churning Standard
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black drop-shadow-md">
              Where True Craftsmanship Meets Modern Hygiene
            </h2>
            <p className="text-sm sm:text-base text-amber-100/90 max-w-xl mx-auto leading-relaxed">
              We slow down the process so nature does what industrial factories cannot: develop deep, nutty flavor and crystalline granular texture.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Mission & Vision Sections */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Our Mission */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-amber-200/80 shadow-md space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-[#29150B] font-serif tracking-tight">
            Our Commitment to Quality & Food Safety
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Quality and food safety are at the heart of our operations. We follow controlled processing practices, maintain hygienic production conditions and conduct routine quality checks to ensure product consistency and safety. From processing to final packaging, we focus on maintaining cleanliness, proper handling and quality standards.
          </p>
        </div>

        {/* Our Vision */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-amber-200/80 shadow-md space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-[#29150B] font-serif tracking-tight">
            Our Vision
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Our vision is to be a global leader in the dairy industry, recognized for our unwavering commitment to quality, innovation, and customer satisfaction. We aim to penetrate new international markets by forming strategic partnerships, adapting to diverse consumer preferences, and adhering to global quality and safety standards.
          </p>
        </div>
      </section>

      {/* 6. Trust Badges */}
      <section className="py-20 bg-[#FAF7F0] border-t border-amber-200/60 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
              Verified Standards
            </span>
            <h3 className="text-3xl font-black text-[#29150B] mt-1">
              Our Core Trust Badges
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-xs text-center flex flex-col items-center">
              <Award className="w-10 h-10 text-amber-600 mb-3" />
              <h4 className="font-extrabold text-sm text-[#29150B]">Food Safety Certified</h4>
              <p className="text-xs text-gray-500 mt-1">Maintain GMP according to Standards</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-xs text-center flex flex-col items-center">
              <Leaf className="w-10 h-10 text-emerald-600 mb-3" />
              <h4 className="font-extrabold text-sm text-[#29150B]">Grass-Fed Pasture</h4>
              <p className="text-xs text-gray-500 mt-1">Natural diet for high butterfat lipids</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-xs text-center flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-3" />
              <h4 className="font-extrabold text-sm text-[#29150B]">Hygienic Process</h4>
              <p className="text-xs text-gray-500 mt-1">Sealed & Hygienic processing</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-xs text-center flex flex-col items-center">
              <Truck className="w-10 h-10 text-purple-600 mb-3" />
              <h4 className="font-extrabold text-sm text-[#29150B]">Express Delivery</h4>
              <p className="text-xs text-gray-500 mt-1">Prompt arrival guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Key Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Commercial Collaborations
            </span>
            <h3 className="text-3xl font-black text-[#29150B] mt-1">
              Our Key Customers
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Trusted by top bakeries, patisseries, hotels, and food manufacturers who depend on our 100% pure dairy quality.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {partners.map((p) => (
              <div
                key={p.id}
                className="group p-4 sm:p-5 rounded-2xl bg-white border border-amber-200/80 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col items-center justify-between hover:-translate-y-1"
              >
                <div className="relative w-full h-24 sm:h-28 rounded-xl bg-[#FAF7F2] border border-amber-100/70 p-3 flex items-center justify-center overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="mt-3 text-center w-full">
                  <h4 className="font-extrabold text-xs sm:text-sm text-[#29150B] line-clamp-1">
                    {p.name}
                  </h4>
                  {p.category && (
                    <span className="text-[10px] sm:text-[11px] text-amber-800/80 font-medium line-clamp-1 mt-0.5 block">
                      {p.category}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-black text-sm shadow-lg shadow-amber-600/25 transition-all"
            >
              <span>Partner With Us For Bulk Commercial Supply</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
