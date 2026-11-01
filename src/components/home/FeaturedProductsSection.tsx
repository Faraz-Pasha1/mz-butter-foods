"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";

export const FeaturedProductsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Display all products in the carousel
  const carouselProducts = products;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            {/* <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Customer Favorites</span>
            </div> */}
            <h2 className="text-3xl sm:text-4xl font-black text-[#29150B] tracking-tight">
              Featured Products
            </h2>
            {/* <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-xl">
              Swipe through our 9 most cherished butter blocks, rich creams, and fragrant ghee jars.
            </p> */}
          </div>

          <div className="flex items-center gap-3">
            {/* Carousel navigation arrow buttons */}
            <button
              onClick={scrollLeft}
              className="w-11 h-11 rounded-full border border-amber-200 bg-amber-50/60 hover:bg-amber-100 text-amber-900 flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-11 h-11 rounded-full border border-amber-200 bg-amber-50/60 hover:bg-amber-100 text-amber-900 flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 ml-3 transition-colors"
            >
              <span>See All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 9 Product Carousel Horizontal Slider */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {carouselProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
