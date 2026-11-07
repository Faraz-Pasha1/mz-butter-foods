"use client";

import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductById } from "@/data/products";
import { ProductVariant, Review } from "@/types";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/ProductCard";
import {
  Star,
  Plus,
  Minus,
  ShoppingCart,
  ShieldCheck,
  Truck,
  Clock,
  Sparkles,
  Award,
  Leaf,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  HelpCircle,
  Info,
  ListChecks,
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const product = getProductById(resolvedParams.id);

  if (!product) {
    return notFound();
  }

  const { addToCart, setIsCartOpen } = useCart();

  // Gallery state
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Variant & Quantity state
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0] || { id: "def", label: "Standard", price: product.price }
  );
  const [quantity, setQuantity] = useState(0);

  // Tab Menu state: About, Benefits, Uses, FAQs
  const [activeTab, setActiveTab] = useState<"about" | "benefits" | "uses" | "faqs">("about");

  // Reviews state with dynamic addition & localStorage persistence
  const [reviewsList, setReviewsList] = useState<Review[]>(product.reviews || []);
  const [newRating, setNewRating] = useState(5);
  const [newAuthor, setNewAuthor] = useState("");
  const [newComment, setNewComment] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(`mz_reviews_${product.id}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviewsList(parsed);
        }
      }
    } catch {
      // fallback
    }
  }, [product.id]);

  const currentAverageRating =
    reviewsList.length > 0
      ? (
          reviewsList.reduce((acc, r) => acc + r.rating, 0) / reviewsList.length
        ).toFixed(1)
      : "0";

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: newAuthor.trim(),
      rating: newRating,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      comment: newComment.trim(),
      verified: true,
    };

    const updated = [newRev, ...reviewsList];
    setReviewsList(updated);
    try {
      localStorage.setItem(`mz_reviews_${product.id}`, JSON.stringify(updated));
    } catch {
      // fallback
    }

    setNewAuthor("");
    setNewComment("");
    setReviewSubmitted(true);
    setTimeout(() => setReviewSubmitted(false), 5000);
  };

  const handleAddToCart = () => {
    const qtyToAdd = quantity > 0 ? quantity : 1;
    addToCart(product, selectedVariant, qtyToAdd);
    if (quantity === 0) {
      setQuantity(1);
    }
  };

  // 4 Recommended products
  const recommendedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-[#FFFDF8] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
          <Link href="/" className="hover:text-amber-700">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-amber-700">Products</Link>
          <span>/</span>
          <Link href={`/products?category=${product.category}`} className="hover:text-amber-700 capitalize">
            {product.categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* ================= SECTION A: 2 Columns Product Hero ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Side: Product Images Slide with Thumbnails Underneath */}
          <div className="lg:col-span-7 space-y-4">
            {/* Big Size Image with Slide Controls */}
            <div className="relative aspect-4/3 sm:aspect-16/11 w-full rounded-3xl overflow-hidden bg-amber-50/50 border border-amber-200 shadow-lg">
              <Image
                src={product.images[activeImageIndex] || product.images[0]}
                alt={`${product.name} large view`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-all duration-300"
                unoptimized
              />

              {/* Slide prev/next buttons */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? product.images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        (prev + 1) % product.images.length
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Small Thumbnails Under the Big Size Image */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-amber-600 ring-2 ring-amber-500/30 scale-105"
                      : "border-amber-200/60 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Complete Product Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/70 px-2.5 py-0.5 rounded-full">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1 text-xs text-amber-600 font-bold">
                  <Star className={`w-3.5 h-3.5 ${reviewsList.length > 0 ? "fill-amber-500 text-amber-500" : "text-amber-300"}`} />
                  <span>{currentAverageRating}</span>
                  <span className="text-gray-400 font-normal">({reviewsList.length} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#29150B] tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Short 2 to 3 line small font details */}
              <p className="text-base sm:text-lg text-gray-700 mt-3 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Sale or discounted price in big font and old price in small font with cut mark */}
            <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200/60">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-black text-amber-700">
                  Rs. {selectedVariant.price.toLocaleString()}
                </span>
                {selectedVariant.originalPrice && (
                  <span className="text-base text-gray-400 line-through font-medium">
                    Rs. {selectedVariant.originalPrice.toLocaleString()}
                  </span>
                )}
                {selectedVariant.originalPrice && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Save Rs. {(selectedVariant.originalPrice - selectedVariant.price).toLocaleString()}
                  </span>
                )}
              </div>
              <span className="text-xs text-amber-900/70 block mt-1">
                Taxes included • 100% pure fresh dairy
              </span>
            </div>

            {/* Pack Size / Weight & Type Selection (No prices on buttons) */}
            {product.category === "butter" ? (
              <div className="space-y-4">
                {/* Weight selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Select Weight:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(["1kg", "10kg"] as const).map((w) => {
                      const isSelected = w === "10kg"
                        ? selectedVariant.label.toLowerCase().includes("10kg")
                        : selectedVariant.label.toLowerCase().includes("1kg") && !selectedVariant.label.toLowerCase().includes("10kg");
                      return (
                        <button
                          key={w}
                          type="button"
                          onClick={() => {
                            const isSalted = selectedVariant.label.toLowerCase().includes("salted") && !selectedVariant.label.toLowerCase().includes("unsalted");
                            const matched = product.variants.find((v) => {
                              const l = v.label.toLowerCase();
                              const matchesW = w === "10kg" ? l.includes("10kg") : l.includes("1kg") && !l.includes("10kg");
                              const matchesT = !isSalted ? l.includes("unsalted") : l.includes("salted") && !l.includes("unsalted");
                              return matchesW && matchesT;
                            });
                            if (matched) setSelectedVariant(matched);
                          }}
                          className={`py-3 px-4 rounded-xl border text-center font-bold text-sm transition-all cursor-pointer ${
                            isSelected
                              ? "border-amber-600 bg-amber-600 text-white shadow-md shadow-amber-600/20"
                              : "border-amber-200 bg-white hover:bg-amber-50 text-gray-800"
                          }`}
                        >
                          {w}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Type selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Select Type:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(["Unsalted", "Salted"] as const).map((t) => {
                      const isSelected = t === "Unsalted"
                        ? selectedVariant.label.toLowerCase().includes("unsalted")
                        : selectedVariant.label.toLowerCase().includes("salted") && !selectedVariant.label.toLowerCase().includes("unsalted");
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => {
                            const is10kg = selectedVariant.label.toLowerCase().includes("10kg");
                            const matched = product.variants.find((v) => {
                              const l = v.label.toLowerCase();
                              const matchesW = is10kg ? l.includes("10kg") : l.includes("1kg") && !l.includes("10kg");
                              const matchesT = t === "Unsalted" ? l.includes("unsalted") : l.includes("salted") && !l.includes("unsalted");
                              return matchesW && matchesT;
                            });
                            if (matched) setSelectedVariant(matched);
                          }}
                          className={`py-3 px-4 rounded-xl border text-center font-bold text-sm transition-all cursor-pointer ${
                            isSelected
                              ? "border-amber-600 bg-amber-600 text-white shadow-md shadow-amber-600/20"
                              : "border-amber-200 bg-white hover:bg-amber-50 text-gray-800"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Select Pack Weight:
                </label>
                <div className={`grid ${product.variants.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-3`}>
                  {product.variants.map((v) => {
                    const isSelected = selectedVariant.id === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariant(v)}
                        className={`py-3 px-4 rounded-xl border text-center font-bold text-sm transition-all cursor-pointer ${
                          isSelected
                            ? "border-amber-600 bg-amber-600 text-white shadow-md shadow-amber-600/20"
                            : "border-amber-200 bg-white hover:bg-amber-50 text-gray-800"
                        }`}
                      >
                        {v.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Counter for quantity and adjacent "Add to Cart" button */}
            <div className="flex items-center gap-3 pt-2">
              {/* Increment / Decrement Counter */}
              <div className="flex items-center border border-gray-300 rounded-full bg-white h-12 px-2 shadow-xs">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => (q > 0 ? q - 1 : 0))}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-extrabold text-[#29150B] font-mono">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Adjacent Add to Cart Button (No price) */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 h-12 rounded-full bg-gray-200 hover:bg-black text-gray-900 hover:text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer active:scale-98"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* ================= SECTION B: Under cart button: Trust badges ================= */}
            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-amber-100">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/50">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-xs font-bold text-amber-950">100% Pure Milkfat</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/50">
                <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-amber-950">Zero Preservatives</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/50">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-bold text-amber-950">Sealed Food-Grade</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/50">
                <Clock className="w-4 h-4 text-purple-600 shrink-0" />
                <span className="text-xs font-bold text-amber-950">Farm Fresh Churn</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION C: Menu Bar at Center (About, Benefits, Uses, FAQs) ================= */}
        <div className="mt-20">
          {/* Centered Tab Menu */}
          <div className="flex items-center justify-center border-b border-amber-200">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-8 pb-px">
              {[
                { id: "about", label: "About Product", icon: <Info className="w-4 h-4" /> },
                { id: "benefits", label: "Health Benefits", icon: <Sparkles className="w-4 h-4" /> },
                { id: "uses", label: "Culinary Uses", icon: <ListChecks className="w-4 h-4" /> },
                { id: "faqs", label: "Frequently Asked Questions", icon: <HelpCircle className="w-4 h-4" /> },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 py-4 px-3 sm:px-5 font-bold text-sm sm:text-base border-b-2 transition-all cursor-pointer ${
                      isActive
                        ? "border-amber-600 text-amber-700 font-black"
                        : "border-transparent text-gray-500 hover:text-amber-700 hover:border-amber-300"
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Medium in height Tab Content Block */}
          <div className="bg-white p-6 sm:p-10 rounded-b-3xl border-x border-b border-amber-200/80 shadow-xs min-h-[220px]">
            {activeTab === "about" && (
              <div className="max-w-3xl mx-auto space-y-4">
                <h3 className="text-xl font-bold text-[#29150B]">Craftsmanship &amp; Heritage</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{product.fullDescription}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {product.about.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "benefits" && (
              <div className="max-w-3xl mx-auto space-y-4">
                <h3 className="text-xl font-bold text-[#29150B]">Wholesome Dairy Nutrition</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.benefits.map((ben, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0 font-bold text-xs">
                        {idx + 1}
                      </div>
                      <p className="text-sm sm:text-base text-gray-800">{ben}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "uses" && (
              <div className="max-w-3xl mx-auto space-y-4">
                <h3 className="text-xl font-bold text-[#29150B]">Chef &amp; Home Recommendations</h3>
                <div className="space-y-3">
                  {product.uses.map((useItem, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/40 border border-amber-100">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="text-sm sm:text-base text-gray-800 font-medium">{useItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "faqs" && (
              <div className="max-w-3xl mx-auto space-y-4">
                <h3 className="text-xl font-bold text-[#29150B]">Common Inquiries</h3>
                <div className="space-y-3">
                  {product.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/50">
                      <h4 className="text-sm sm:text-base font-bold text-[#29150B] flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-amber-700 shrink-0" />
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-sm sm:text-base text-gray-700 mt-2 pl-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= SECTION D: Big Full Width Landscape Image ================= */}
        <div className="mt-16">
          <div className="relative w-full h-[320px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-amber-100">
            <Image
              src={product.landscapeBanner}
              alt={`${product.name} artisanal farm landscape`}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8 sm:p-12">
              <div className="max-w-2xl text-white space-y-2">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-black">
                  Artisanal Churn Heritage
                </span>
                <h3 className="text-2xl sm:text-4xl font-black">
                  Rooted in Pure Pastoral Pastures
                </h3>
                <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
                  Our livestock roam freely on natural green grass, drinking pure canal water and receiving zero synthetic growth chemicals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION E: Key Features Image Section (Portrait Full Width Showcase) ================= */}
        <div className="mt-16">
          <div className="bg-[#1C0E07] text-white rounded-3xl p-8 sm:p-12 overflow-hidden border border-amber-500/20 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 relative">
                <div className="relative aspect-3/4 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-xl">
                  <Image
                    src={product.portraitFeature}
                    alt={`${product.name} portrait craft feature`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-amber-500 text-black text-xs font-black px-3 py-1 rounded-full">
                    Artisan Selected Batch
                  </span>
                </div>
              </div>

              <div className="md:col-span-7 space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Key Distinctive Features
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Why {product.name} Excels
                </h3>
                <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed">
                  Every gram of our product is monitored from the initial skimming temperature to the packaging line. We preserve natural microbial diversity and rich dairy aroma that mass industrial production strips away.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-bold text-amber-300 text-sm">Natural Unrefined Aroma</h4>
                    <p className="text-xs text-amber-100/70 mt-1">No artificial chemical essences or butter fragrances added.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-bold text-amber-300 text-sm">Freshly Preserved</h4>
                    <p className="text-xs text-amber-100/70 mt-1">Carefully processed to maintain peak natural freshness.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION F: Review & Rating Section & Comments ================= */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-md">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-amber-100 gap-4">
              <div>
                <h3 className="text-2xl font-black text-[#29150B]">
                  Customer Reviews &amp; Ratings
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Verified feedback from households, chefs, and bakers.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-black text-amber-700">{currentAverageRating}</div>
                <div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${
                          reviewsList.length > 0 && s <= Math.round(Number(currentAverageRating))
                            ? "fill-amber-500 text-amber-500"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 block mt-0.5">
                    {reviewsList.length === 0
                      ? "No reviews yet. Be the first to rate!"
                      : `Based on ${reviewsList.length} verified rating${reviewsList.length === 1 ? "" : "s"}`}
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Review Form */}
            <div className="my-8 p-6 rounded-2xl bg-amber-50/60 border border-amber-200">
              <h4 className="text-sm font-extrabold text-[#29150B] mb-2">
                Leave a Verified Review
              </h4>
              <p className="text-xs text-gray-600 mb-4">
                Share your taste experience with our {product.name}.
              </p>

              {reviewSubmitted && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Thank you! Your review and rating have been posted.</span>
                </div>
              )}

              <form onSubmit={handleReviewSubmit} className="space-y-4">
                {/* Star Picker */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Select Your Rating:
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1 text-amber-500 hover:scale-125 transition-transform cursor-pointer"
                        aria-label={`Rate ${star} stars`}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newRating ? "fill-amber-500 text-amber-500" : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-amber-800 ml-2">
                      {newRating} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="Enter your name..."
                    className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Your Review &amp; Comments:
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write about the taste, aroma, texture, and packaging..."
                    className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                >
                  Submit Review
                </button>
              </form>
            </div>

            {/* List of Reviews */}
            {reviewsList.length === 0 ? (
              <div className="py-8 text-center text-gray-500 text-sm bg-amber-50/40 rounded-2xl border border-dashed border-amber-200 p-6">
                <Star className="w-8 h-8 text-amber-300 mx-auto mb-2" />
                <p className="font-bold text-gray-700">Currently no reviews yet</p>
                <p className="text-xs text-gray-500 mt-1">
                  Be the first to rate! Select your rating star, write your comment and name above.
                </p>
              </div>
            ) : (
              <div className="space-y-4 divide-y divide-amber-100">
                {reviewsList.map((rev) => (
                  <div key={rev.id} className="pt-4 first:pt-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#29150B]">{rev.author}</span>
                        {rev.verified && (
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                            Verified Buyer
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-400">{rev.date}</span>
                    </div>

                    <div className="flex items-center gap-0.5 text-amber-500 mb-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${
                            s <= rev.rating ? "fill-amber-500 text-amber-500" : "text-gray-200"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {rev.comment}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ================= SECTION G: Trust Section (Food Product Icons with Titles) ================= */}
        <div className="mt-16 py-12 px-6 rounded-3xl bg-[#FAF7F0] border border-amber-200/80">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
                Purity Standards
              </span>
              <h3 className="text-2xl font-black text-[#29150B] mt-1">
                The Mz Dairy Food Safety Promise
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 mb-3 shadow-xs">
                  <Award className="w-7 h-7" />
                </div>
                <h4 className="font-extrabold text-sm text-[#29150B]">100% Pure Milk</h4>
                <p className="text-xs text-gray-500 mt-1">Zero palm oil or adulterants</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 mb-3 shadow-xs">
                  <Truck className="w-7 h-7" />
                </div>
                <h4 className="font-extrabold text-sm text-[#29150B]">Fast Delivery</h4>
                <p className="text-xs text-gray-500 mt-1">Reliable doorstep delivery</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 mb-3 shadow-xs">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h4 className="font-extrabold text-sm text-[#29150B]">Hygienic Seals</h4>
                <p className="text-xs text-gray-500 mt-1">Tamper-evident food containers</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 mb-3 shadow-xs">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h4 className="font-extrabold text-sm text-[#29150B]">Traditional Method</h4>
                <p className="text-xs text-gray-500 mt-1">Authentic danedar granular ghee</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION H: Other Product Section ("Recommended for you" 4 cards) ================= */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                Pair With Your Dairy
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#29150B] mt-1">
                Recommended for you
              </h3>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-amber-700 hover:underline"
            >
              View Full Collection &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {recommendedProducts.map((recProd) => (
              <ProductCard key={recProd.id} product={recProd} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
