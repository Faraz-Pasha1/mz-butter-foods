"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface CategoryShowcase {
  title: string;
  category: string;
  image: string;
  badge: string;
  description: string;
  link: string;
}

const categories: CategoryShowcase[] = [
  {
    title: "Butter",
    category: "butter",
    image: "/images/Butter salted 2.webp",
    badge: "",
    description: "",
    link: "/products?category=butter",
  },
  {
    title: "Cream",
    category: "cream",
    image: "/images/arwa whipping cream.webp",
    badge: "",
    description: "",
    link: "/products?category=cream",
  },
  {
    title: "Ghee",
    category: "ghee",
    image: "/images/Desi Ghee.webp",
    badge: "",
    description: "",
    link: "/products?category=ghee",
  },
  {
    title: "Chocolate & Chips",
    category: "chocolate",
    image: "/images/Chocolate chip.webp",
    badge: "",
    description: "",
    link: "/products?category=chocolate",
  },
];

export const OurProductsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FEFBF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with "View All" link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dairy Collections</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#29150B] tracking-tight">
              Our Core Product Categories
            </h2>
            {/* <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-xl">
              Handcrafted in small batches from whole, pasture-fed buffalo and cow milk.
            </p> */}
          </div>

          {/* e. View all link (direct to products page) */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-amber-700 hover:text-amber-800 transition-colors group cursor-pointer"
          >
            <span>View All Products</span>
            <span className="w-8 h-8 rounded-full bg-amber-100 group-hover:bg-amber-200 flex items-center justify-center transition-colors">
              <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>

        {/* 4 Category Cards: 2 cards in one line on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.link}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-amber-100/80 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1.5"
            >
              {/* Image Container on Top */}
              <div className="relative aspect-4/3 w-full bg-amber-50 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {cat.badge && (
                  <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/90 backdrop-blur-xs text-amber-900 text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-xs">
                    {cat.badge}
                  </span>
                )}
              </div>

              {/* Title and Details Under the Image */}
              <div className="p-3.5 sm:p-5 flex flex-col flex-1 justify-between text-center bg-white">
                <div>
                  <h3 className="text-base sm:text-xl lg:text-2xl font-black text-[#29150B] group-hover:text-amber-700 transition-colors">
                    {cat.title}
                  </h3>
                  {cat.description && (
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  )}
                </div>

                {/* <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-amber-50 flex items-center justify-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-bold text-amber-700 group-hover:text-amber-800">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                </div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
