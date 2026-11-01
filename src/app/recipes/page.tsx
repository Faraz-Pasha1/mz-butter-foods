"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { recipes } from "@/data/recipes";
import { siteConfig } from "@/config/site";
import {
  Clock,
  Users,
  ChefHat,
  Sparkles,
  ArrowRight,
  Search,
  ChevronDown,
  MessageCircle,
  UtensilsCrossed,
} from "lucide-react";

export default function RecipesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredRecipes = recipes.filter((rec) => {
    if (searchQuery.trim() === "") return true;
    const query = searchQuery.toLowerCase();
    return (
      rec.title.toLowerCase().includes(query) ||
      rec.description.toLowerCase().includes(query) ||
      rec.featuredProductName.toLowerCase().includes(query)
    );
  });

  const handleDropdownSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value;
    if (slug) {
      router.push(`/recipes/${slug}`);
    }
  };

  return (
    <div className="bg-[#FFFDF9] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-amber-700">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Artisanal Dairy Recipes</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">
            <ChefHat className="w-3.5 h-3.5 text-amber-700" />
            <span>Farm to Kitchen Culinary Recipes</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#29150B] tracking-tight leading-tight">
            Handcrafted Dairy Recipes
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
            Discover culinary magic made possible with 100% pure churned butter, unhomogenized velvet cream, and fragrant danedar desi ghee.
          </p>

          {/* Controls: Recipe Dropdown (Only Recipe Name Shown) & Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3">
            {/* Dropdown - Only Recipe Name Shown */}
            <div className="w-full sm:w-72 relative">
              <select
                aria-label="Select Recipe"
                defaultValue=""
                onChange={handleDropdownSelect}
                className="w-full appearance-none pl-10 pr-10 py-3.5 rounded-full border border-amber-300 bg-white shadow-xs text-xs sm:text-sm font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer hover:border-amber-400 transition-colors"
              >
                <option value="" disabled>
                  Select a Recipe...
                </option>
                {recipes.map((rec) => (
                  <option key={rec.id} value={rec.slug}>
                    {rec.title}
                  </option>
                ))}
              </select>
              <UtensilsCrossed className="w-4 h-4 text-amber-700/70 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <ChevronDown className="w-4 h-4 text-amber-700 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
            </div>

            {/* Search Input */}
            <div className="w-full flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recipe or ingredient..."
                className="w-full pl-11 pr-4 py-3.5 rounded-full border border-amber-200/90 bg-white shadow-xs text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
              <Search className="w-4 h-4 text-amber-700/60 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Recipes Grid (No Categories) */}
        {filteredRecipes.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-amber-100 p-8 max-w-xl mx-auto">
            <p className="text-base font-bold text-gray-800">
              No recipes match your search
            </p>
            <p className="text-xs text-gray-500 mt-1 mb-4">
              Try searching for &quot;croissant&quot;, &quot;alfredo&quot;, &quot;butter&quot;, or &quot;cream&quot;.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-5 py-2.5 rounded-full bg-amber-600 text-white font-bold text-xs cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((rec) => (
              <div
                key={rec.id}
                className="group bg-white rounded-3xl border border-amber-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5"
              >
                {/* Image Container - No Category Badges */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-amber-100">
                  <Image
                    src={rec.image}
                    alt={rec.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-white text-xs font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-300" />
                    <span>
                      {rec.prepTime} prep • {rec.cookTime} cook
                    </span>
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Featured Dairy Tag */}
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/50 mb-2">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span>Features: {rec.featuredProductName}</span>
                    </div>

                    <Link href={`/recipes/${rec.slug}`}>
                      <h2 className="text-xl font-black text-[#29150B] group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
                        {rec.title}
                      </h2>
                    </Link>

                    <p className="text-sm text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      {rec.description}
                    </p>
                  </div>

                  {/* Metadata & Actions */}
                  <div className="pt-4 border-t border-amber-100 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-amber-700" />
                        <span>{rec.servings}</span>
                      </span>
                      <span>•</span>
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        {rec.difficulty}
                      </span>
                    </div>

                    <Link
                      href={`/recipes/${rec.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 group/link"
                    >
                      <span>Cook Recipe</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* WhatsApp Dairy Box Assistance Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#29150B] via-[#351C0F] to-[#1C0E07] text-white shadow-2xl border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
              Need Dairy Ingredients For These Recipes?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Order Your Fresh Recipe Bundle Direct via WhatsApp
            </h3>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              Message us directly at <strong>{siteConfig.phone}</strong> and we will pack your custom pure butter, cream, and ghee order with guaranteed cold delivery!
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              "Hello Mz Butter & Foods! I would like to order fresh dairy ingredients for your recipes."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 py-4 px-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center gap-2 shadow-xl shadow-emerald-600/30 transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp ({siteConfig.phone})</span>
          </a>
        </div>
      </div>
    </div>
  );
}
