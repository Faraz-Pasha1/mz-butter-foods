import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "@/data/recipes";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";
import {
  Clock,
  Users,
  ChefHat,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  MessageCircle,
  Share2,
  ShoppingBag,
  Flame,
} from "lucide-react";

interface RecipePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return recipes.map((r) => ({
    slug: r.slug,
  }));
}

export default async function RecipeDetailPage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    notFound();
  }

  const featuredProduct = products.find(
    (p) => p.slug === recipe.featuredProductSlug || p.id === recipe.featuredProductId
  );

  const otherRecipes = recipes.filter((r) => r.slug !== recipe.slug).slice(0, 3);

  const whatsappMessage = `Hello Mz Butter & Foods! I am cooking your recipe: *${recipe.title}*.\nI would like to order the featured pure dairy ingredients (${recipe.featuredProductName}) to my address via cold delivery.`;

  return (
    <div className="bg-[#FFFDF8] min-h-screen py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
          <Link href="/" className="hover:text-amber-700">
            Home
          </Link>
          <span>/</span>
          <Link href="/recipes" className="hover:text-amber-700">
            Recipes
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold truncate max-w-xs">
            {recipe.shortTitle}
          </span>
        </nav>

        {/* Recipe Header */}
        <div className="max-w-3xl mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <ChefHat className="w-3.5 h-3.5 text-amber-700" />
            <span>Farm Kitchen Recipe</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#29150B] tracking-tight leading-tight">
            {recipe.title}
          </h1>

          <p className="text-base sm:text-lg text-amber-900/80 leading-relaxed italic">
            &ldquo;{recipe.tagline}&rdquo;
          </p>

          <p className="text-base text-gray-700 leading-relaxed pt-1">
            {recipe.description}
          </p>

          {/* Key Stats Bar */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-amber-200/70 text-xs sm:text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>Prep: <strong>{recipe.prepTime}</strong></span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-700" />
              <span>Cook: <strong>{recipe.cookTime}</strong></span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-700" />
              <span>Yield: <strong>{recipe.servings}</strong></span>
            </div>
            <span>•</span>
            <span className="font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full text-xs">
              {recipe.difficulty} Level
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-16/9 sm:aspect-21/9 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-amber-100 mb-12">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between text-white gap-3">
            <span className="text-xs uppercase tracking-widest font-black text-amber-300">
              Authentic Dairy Kitchen Creation
            </span>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg transition-transform active:scale-95 cursor-pointer self-start sm:self-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order Ingredients on WhatsApp ({siteConfig.phone})</span>
            </a>
          </div>
        </div>

        {/* Main Content: 2 Columns (Left: Ingredients & Featured Product, Right: Step-by-Step Instructions) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Ingredients + Featured Dairy */}
          <div className="lg:col-span-5 space-y-8">
            {/* Featured Product Card */}
            {featuredProduct && (
              <div className="bg-gradient-to-br from-amber-500/10 via-white to-amber-100/30 p-6 rounded-3xl border-2 border-amber-300/80 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-wider text-amber-800">
                    The Essential Star Ingredient
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-amber-100 shrink-0 border border-amber-200">
                    <Image
                      src={featuredProduct.images[0] || "/images/logo.png"}
                      alt={featuredProduct.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-[#29150B] line-clamp-1">
                      {featuredProduct.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-0.5 line-clamp-1">
                      {featuredProduct.tagline}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="font-black text-amber-700 text-base">
                        Rs. {featuredProduct.price.toLocaleString()}
                      </span>
                      <Link
                        href={`/products/${featuredProduct.slug || featuredProduct.id}`}
                        className="text-xs font-bold text-amber-900 bg-amber-200/70 hover:bg-amber-300 px-3 py-1 rounded-full transition-colors flex items-center gap-1"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>View Product</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Ingredients Checklist */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-200/80 shadow-sm">
              <h2 className="text-2xl font-black text-[#29150B] mb-2">
                Ingredients
              </h2>
              <p className="text-xs text-gray-500 mb-6">
                All measurements for {recipe.servings}. Best prepared with chilled, farm-fresh dairy.
              </p>

              <ul className="space-y-3.5">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-800 leading-snug">
                    <div className="w-5 h-5 rounded-md border-2 border-amber-400 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5 text-amber-700">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>

              {/* Nutrition Summary */}
              {recipe.nutrition && (
                <div className="mt-8 pt-6 border-t border-amber-100 bg-[#FAF7F0] -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 rounded-b-3xl">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-3">
                    Approximate Nutrition Per Serving:
                  </h3>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white p-2.5 rounded-xl border border-amber-200/60">
                      <span className="block text-xs text-gray-400">Calories</span>
                      <span className="font-extrabold text-sm text-[#29150B]">
                        {recipe.nutrition.calories}
                      </span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-amber-200/60">
                      <span className="block text-xs text-gray-400">Dairy Fat</span>
                      <span className="font-extrabold text-sm text-amber-700">
                        {recipe.nutrition.butterfat}
                      </span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-amber-200/60">
                      <span className="block text-xs text-gray-400">Protein</span>
                      <span className="font-extrabold text-sm text-[#29150B]">
                        {recipe.nutrition.protein}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Step-by-Step Instructions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-amber-200/80 shadow-sm space-y-8">
              <div className="border-b border-amber-100 pb-4">
                <h2 className="text-2xl sm:text-3xl font-black text-[#29150B]">
                  Method &amp; Preparation
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Follow each culinary step for pristine, golden results.
                </p>
              </div>

              <div className="space-y-8">
                {recipe.instructions.map((inst) => (
                  <div key={inst.step} className="flex items-start gap-4 sm:gap-6">
                    <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md shadow-amber-600/20">
                      {inst.step}
                    </div>
                    <div className="space-y-1.5 flex-1 pt-0.5">
                      <h3 className="font-bold text-lg text-[#29150B]">
                        {inst.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {inst.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chef Secrets Box */}
            <div className="bg-amber-50/80 p-6 sm:p-8 rounded-3xl border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-amber-800">
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />
                <h3 className="font-black text-base uppercase tracking-wider">
                  Mz Dairy Master Chef Secrets
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-amber-950 leading-relaxed pl-2">
                {recipe.chefTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp Quick Order Callout */}
            <div className="p-6 rounded-3xl bg-[#1C0E07] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-amber-500/20">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">
                  Fresh Delivery to Your Door
                </span>
                <h4 className="text-lg font-black text-white mt-1">
                  Ready to make this delicious dish?
                </h4>
                <p className="text-xs text-amber-100/70 mt-0.5">
                  Send your order via WhatsApp at <strong>{siteConfig.phone}</strong> for morning delivery.
                </p>
              </div>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 py-3 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-transform active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp ({siteConfig.phone})</span>
              </a>
            </div>
          </div>
        </div>

        {/* More Recipes */}
        <div className="mt-20 pt-12 border-t border-amber-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                More Culinary Creations
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#29150B] mt-1">
                Explore More Dairy Recipes
              </h3>
            </div>
            <Link
              href="/recipes"
              className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1"
            >
              <span>View All Recipes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherRecipes.map((other) => (
              <Link
                key={other.id}
                href={`/recipes/${other.slug}`}
                className="group bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-amber-50">
                  <Image
                    src={other.image}
                    alt={other.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#29150B] group-hover:text-amber-700 transition-colors line-clamp-1">
                      {other.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {other.tagline}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-amber-50 flex items-center justify-between text-[11px] text-gray-400">
                    <span>{other.prepTime} prep</span>
                    <span className="text-amber-700 font-bold group-hover:translate-x-0.5 transition-transform">
                      Cook &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
