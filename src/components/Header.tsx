"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { useCart } from "@/context/CartContext";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  Phone,
  Sparkles,
  ChevronDown,
  ChefHat,
  ArrowRight,
} from "lucide-react";
import { recipes } from "@/data/recipes";

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileRecipesOpen, setMobileRecipesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full shadow-xs bg-white/95 backdrop-blur-md">
      {/* 1.a Announcement Bar */}
      <div className="bg-[#29150B] text-amber-100 text-xs py-2 px-4 border-b border-amber-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-pulse" />
            <span className="font-medium tracking-wide text-center sm:text-left text-[11px] sm:text-xs">
              {siteConfig.announcement}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] text-amber-200/80">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Order: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 1.b Menu Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* i. Left Side – Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-18 h-18 rounded-full overflow-hidden border-2 border-amber-500/30 group-hover:border-amber-500 transition-colors bg-white shadow-xs">
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                fill
                className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              {/* <span className="font-extrabold text-xl text-[#29150B] tracking-tight group-hover:text-amber-700 transition-colors">
                Mz Butter
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 -mt-1">
                &amp; Foods
              </span> */}
            </div>
          </Link>

          {/* ii. Middle – Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {siteConfig.navLinks.map((link) => {
              const isRecipes = link.href === "/recipes";
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (isRecipes) {
                return (
                  <div key={link.href} className="relative group/recipe py-2">
                    <Link
                      href="/recipes"
                      className={`text-sm font-semibold tracking-wide transition-colors relative py-1 flex items-center gap-1.5 ${
                        isActive
                          ? "text-amber-700 font-bold"
                          : "text-gray-700 hover:text-amber-700"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover/recipe:rotate-180 text-amber-700/70" />
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 rounded-full" />
                      )}
                    </Link>

                    {/* Dropdown Menu (Around 5 recipe pages, direct to the recipe page) */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 opacity-0 translate-y-2 pointer-events-none group-hover/recipe:opacity-100 group-hover/recipe:translate-y-0 group-hover/recipe:pointer-events-auto transition-all duration-200 z-50">
                      <div className="bg-white rounded-2xl shadow-2xl border border-amber-200/90 overflow-hidden p-2">
                        {/* Dropdown Header */}
                        <div className="px-3 py-2 bg-amber-50/70 rounded-xl mb-1 flex items-center justify-between border border-amber-100">
                          <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 uppercase tracking-wider">
                            <ChefHat className="w-3.5 h-3.5 text-amber-700" />
                            <span>Featured Recipes</span>
                          </div>
                          <Link
                            href="/recipes"
                            className="text-[11px] font-bold text-amber-700 hover:underline"
                          >
                            All ({recipes.length})
                          </Link>
                        </div>

                        {/* Recipe Links (Only recipe names shown) */}
                        <div className="divide-y divide-amber-50 max-h-72 overflow-y-auto">
                          {recipes.map((rec) => (
                            <Link
                              key={rec.id}
                              href={`/recipes/${rec.slug}`}
                              className="py-2.5 px-3 rounded-xl hover:bg-amber-50/80 flex items-center justify-between transition-colors group/item"
                            >
                              <span className="text-xs font-bold text-[#29150B] group-hover/item:text-amber-700 transition-colors truncate">
                                {rec.title}
                              </span>
                              <ArrowRight className="w-3.5 h-3.5 text-amber-600 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all shrink-0 ml-2" />
                            </Link>
                          ))}
                        </div>

                        {/* Dropdown Footer CTA */}
                        <div className="mt-1 pt-2 border-t border-amber-100 px-3 py-1.5 flex items-center justify-between text-[11px] text-gray-500">
                          <span>100% Pure Farm Dairy</span>
                          <Link
                            href="/recipes"
                            className="font-bold text-amber-700 hover:text-amber-800"
                          >
                            Browse All &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-amber-700 font-bold"
                      : "text-gray-700 hover:text-amber-700"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* iii. Right – Search icon & Cart Icon */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Icon (opens live search modal) */}
            <button
              onClick={onOpenSearch}
              title="Search products"
              aria-label="Search products"
              className="p-2.5 rounded-full text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Icon with Counter Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              title="Open Shopping Cart"
              aria-label="Open Shopping Cart"
              className="relative p-2.5 rounded-full text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              title="Toggle mobile menu"
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-amber-100 px-6 py-5 shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-2">
            {siteConfig.navLinks.map((link) => {
              const isRecipes = link.href === "/recipes";
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (isRecipes) {
                return (
                  <div key={link.href} className="border-b border-amber-50 pb-1">
                    <div className="flex items-center justify-between py-2 px-3">
                      <Link
                        href="/recipes"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-base font-semibold ${
                          isActive ? "text-amber-700 font-bold" : "text-gray-800"
                        }`}
                      >
                        Recipes
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileRecipesOpen(!mobileRecipesOpen)}
                        className="p-1 text-gray-500 hover:text-amber-700"
                        aria-label="Toggle recipe submenu"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileRecipesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Mobile Recipe Submenu (Only recipe names shown) */}
                    {mobileRecipesOpen && (
                      <div className="pl-4 pr-2 py-2 space-y-1 bg-amber-50/50 rounded-xl my-1 border border-amber-100">
                        {recipes.map((rec) => (
                          <Link
                            key={rec.id}
                            href={`/recipes/${rec.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-2 text-xs font-semibold text-gray-800 hover:text-amber-700 hover:bg-amber-100/60 rounded-lg truncate"
                          >
                            {rec.title}
                          </Link>
                        ))}
                        <Link
                          href="/recipes"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block pt-2 pb-1 px-2 text-xs font-bold text-amber-800 underline"
                        >
                          View All Recipes &rarr;
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-amber-50 text-amber-700 font-bold"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-5 pt-4 border-t border-amber-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-50 text-amber-900 font-medium text-sm cursor-pointer"
            >
              <Search className="w-4 h-4 text-amber-700" />
              <span>Search Dairy Products</span>
            </button>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Direct WhatsApp Order ({siteConfig.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
