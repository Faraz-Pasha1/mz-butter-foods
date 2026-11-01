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
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80"
            alt="Mz Butter & foods farm pasture"
            fill
            priority
            className="object-cover opacity-35 scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C0E07] via-[#1C0E07]/60 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/20 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Our Farm Heritage &amp; Craft</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            About Mz Butter &amp; Foods
          </h1>

          <p className="text-sm sm:text-lg text-amber-100/80 max-w-2xl mx-auto leading-relaxed">
            Reviving the authentic taste, golden color, and heavenly aroma of pure, unadulterated farm dairy.
          </p>
        </div>
      </section>

      {/* 2. 3 Paragraph Details */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
          <p className="first-letter:text-5xl first-letter:font-black first-letter:text-amber-700 first-letter:mr-2 first-letter:float-left">
            Founded with an uncompromising devotion to pastoral purity, <strong>{siteConfig.name}</strong> was born from a simple observation: modern supermarket dairy has lost its soul. In an era dominated by high-speed industrial homogenization, synthetic color additives, and cheap palm-oil substitutions, real churned butter and fragrant danedar desi ghee have become tragic rarities. We embarked on a journey back to the roots of traditional dairy craftsmanship.
          </p>

          <p>
            Every single batch of our butter, fresh cream, and desi ghee originates from healthy, pasture-raised cattle fed on clean, natural green clover and canal-irrigated grass. We collect the whole milk within hours of dawn, gently separate the sweet cream at controlled low temperatures, and churn it using time-honored artisanal methods. We never add artificial yellow food dyes, chemical stabilizers, starch, or preservatives — what you taste is 100% pure, honest milkfat in its most magnificent form.
          </p>

          <p>
            Today, Mz Butter &amp; Foods is proud to supply hundreds of premier French patisseries, artisanal sourdough bakeries, luxury hotel kitchens, and thousands of health-conscious households. From the cloud-like peaks of our fresh velvet cream to the intoxicating aroma of our slow-simmered danedar desi ghee, we invite you to rediscover what pure dairy was always meant to be.
          </p>
        </div>
      </section>

      {/* 3. Full Width Image Full Height Screen */}
      <section className="relative w-full h-screen min-h-[550px] max-h-[850px] bg-black overflow-hidden my-6">
        <Image
          src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1800&q=80"
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

      {/* 4. Our Mission Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Big Heading of Mission with Background Image */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl min-h-[340px] flex items-end p-8 border border-amber-500/30">
            <Image
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80"
              alt="Our Mission background"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                Core Purpose
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                Our Mission
              </h2>
            </div>
          </div>

          {/* Right Side: Mission Details */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-amber-200/80 shadow-md flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-black text-[#29150B]">
              Restoring Uncompromising Integrity to Every Breakfast Table
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Our mission is to lead Pakistan&apos;s clean food revolution by providing authentic, unadulterated dairy products directly from local pasture farms to families. We exist to protect consumers from deceptive industrial processing, hydrogenated fats, and synthetic additives.
            </p>
            <div className="space-y-2.5 pt-2">
              {[
                "Preserve authentic slow-simmering and churn traditions.",
                "Guarantee 100% traceability from trusted pasture farms.",
                "Provide cold-chain doorstep delivery that protects natural freshness.",
                "Support fair compensation and sustainable care for dairy cattle.",
              ].map((m, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Vision Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Big Heading of Vision with Background Image */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl min-h-[340px] flex items-end p-8 border border-amber-500/30">
            <Image
              src="https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=900&q=80"
              alt="Our Vision background"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                The Future
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                Our Vision
              </h2>
            </div>
          </div>

          {/* Right Side: Vision Details */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-amber-200/80 shadow-md flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-black text-[#29150B]">
              Becoming the Benchmark of Pure Artisanal Food Across the Region
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We envision a culinary landscape where every household has instant access to real, wholesome, farm-fresh dairy without question or doubt. Our vision expands to pioneering artisanal chocolate spreads made without palm oil, heirloom bilona ghee varieties, and fostering transparency across the agricultural supply chain.
            </p>
            <div className="space-y-2.5 pt-2">
              {[
                "Setting the regional gold standard for 82% butterfat creamery butter.",
                "Educating generations on the holistic health benefits of traditional desi ghee.",
                "Fostering zero-waste, eco-conscious cold packaging and glass container recycling.",
              ].map((v, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-800 font-medium">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
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
              <h4 className="font-extrabold text-sm text-[#29150B]">100% Purity Certified</h4>
              <p className="text-xs text-gray-500 mt-1">Free from palm oil, starch, and dyes</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-xs text-center flex flex-col items-center">
              <Leaf className="w-10 h-10 text-emerald-600 mb-3" />
              <h4 className="font-extrabold text-sm text-[#29150B]">Grass-Fed Pasture</h4>
              <p className="text-xs text-gray-500 mt-1">Natural diet for high butterfat lipids</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-xs text-center flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-3" />
              <h4 className="font-extrabold text-sm text-[#29150B]">Hygienic Cold Churn</h4>
              <p className="text-xs text-gray-500 mt-1">Sealed stainless-steel processing</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-xs text-center flex flex-col items-center">
              <Truck className="w-10 h-10 text-purple-600 mb-3" />
              <h4 className="font-extrabold text-sm text-[#29150B]">Cold-Chain Express</h4>
              <p className="text-xs text-gray-500 mt-1">Chilled arrival guaranteed</p>
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
              Our Key Culinary Partners
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Trusted by top bakeries, patisseries, and dessert artisans who depend on our 82% butterfat consistency.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {partners.map((p) => (
              <div
                key={p.id}
                className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 text-center flex flex-col items-center hover:bg-amber-100/70 transition-colors"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white mb-2 shadow-xs">
                  <Image src={p.image} alt={p.name} fill className="object-cover" unoptimized />
                </div>
                <h4 className="font-bold text-xs text-[#29150B] line-clamp-1">{p.name}</h4>
                <span className="text-[10px] text-amber-800/80 line-clamp-1">{p.category}</span>
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
