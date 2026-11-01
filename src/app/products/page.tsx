"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductCategory } from "@/types";
import {
  Sparkles,
  SlidersHorizontal,
  ArrowUpDown,
  Search,
  Filter,
} from "lucide-react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortOption, setSortOption] = useState<string>("popular");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories: { label: string; value: string }[] = [
    { label: "All Dairy & Sweets", value: "all" },
    { label: "Butter", value: "butter" },
    { label: "Fresh Cream", value: "cream" },
    { label: "Desi Ghee", value: "ghee" },
    { label: "Chocolate & Chip", value: "chocolate" },
  ];

  // Filter & Sort
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q)
      );
    }

    // Sort option
    if (sortOption === "price-low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, sortOption, searchQuery]);

  return (
    <div className="py-12 sm:py-16 bg-[#FFFDF8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Farm Churned Freshness</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#29150B] tracking-tight">
            Our Complete Product Collection
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            Every product is hand-crafted from 100% pure milk. Available in multiple pack sizes with direct cold-chain delivery.
          </p>
        </div>

        {/* Filter & Category Menu Bar */}
        <div className="bg-white rounded-3xl p-5 border border-amber-200/80 shadow-md mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Navigation Bar */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.value;
                return (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                        : "bg-amber-50/70 text-amber-900/80 hover:bg-amber-100"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search and Sort Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Search Box */}
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="pl-9 pr-4 py-2 rounded-full bg-amber-50/60 border border-amber-200 text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full sm:w-48"
                />
              </div>

              {/* Price Sort Filter (price for high low) */}
              <div className="flex items-center gap-2 bg-amber-50/60 border border-amber-200 rounded-full px-3 py-1.5">
                <ArrowUpDown className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="text-xs font-semibold text-gray-600">Sort:</span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  aria-label="Sort products by price or rating"
                  className="bg-transparent text-xs font-bold text-[#29150B] focus:outline-none cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Filter Count & Status */}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-amber-50">
            <span>
              Showing <strong>{filteredProducts.length}</strong> delicious products
            </span>
            {(selectedCategory !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="text-amber-700 font-bold hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid: Adheres strictly to user's card specifications */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-amber-100 p-8">
            <h3 className="text-lg font-bold text-gray-800">No products match your filter</h3>
            <p className="text-xs text-gray-500 mt-1 mb-4">
              Try selecting a different category or clearing your search term.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-full bg-amber-600 text-white font-bold text-xs"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AllProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center">
          <p className="text-sm font-bold text-amber-700">Loading Dairy Collection...</p>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
