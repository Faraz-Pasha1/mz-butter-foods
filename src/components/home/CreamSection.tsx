"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, ShoppingBag } from "lucide-react";

export const CreamSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FFFDF9] via-[#FAF4E6] to-[#FFFDF9] border-t border-amber-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* b. Left Side: Cream Details */}
          <div className="lg:col-span-6 space-y-6">
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Velvet Farm Fresh Cream</span>
            </div> */}

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#29150B] tracking-tight leading-tight">
              Mz Butter
            </h2>

            <p className="text-base text-gray-700 leading-relaxed">
              We are committed to delivering quality butter with rich taste, creamy texture and consistent product standards. Our focus is on maintaining quality at every stage, from raw material handling and processing to packaging and storage.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "Provides energy for daily activities.",
                "Contains fat-soluble vitamins A, E and K.",
                "Enhances the taste and texture of meals, baking and desserts.",
                "Supports Brain Function",
                "Helps Absorb Vitamins",
                "Improves Food Taste",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-600/15 text-amber-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-amber-700 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#29150B]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/products?category=butter"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm shadow-lg shadow-amber-600/25 transition-all hover:scale-105 active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Now</span>
              </Link>
              {/* <Link
                href="/products?category=butter"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-amber-50 text-amber-900 font-bold text-sm border border-amber-300 shadow-xs transition-colors"
              >
                <span>View More</span>
                <ArrowRight className="w-4 h-4" />
              </Link> */}
            </div>
          </div>

          {/* a. Right Side: Image of butter */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-square bg-amber-100">
              <Image
                src="/images/butterbenefitssection.webp"
                alt="Mz butter"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating Testimonial Tag */}
              {/* <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-amber-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    Artisanal Whipping Quality
                  </span>
                  <h4 className="text-sm font-extrabold text-[#29150B] mt-0.5">
                    100% Sweet Buffalo &amp; Cow Milk Cream
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-emerald-700 block bg-emerald-50 px-2 py-0.5 rounded-md">
                    Farm Fresh
                  </span>
                </div>
              </div> */}
            </div>

            {/* Decorative background blur ring */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
