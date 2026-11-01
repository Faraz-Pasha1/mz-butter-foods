"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { Product } from "@/types";
import { Search, X, ArrowRight, Tag } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase().trim();
    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden z-10 flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-amber-100 bg-amber-50/50">
          <Search className="w-6 h-6 text-amber-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Butter, Fresh Cream, Desi Ghee, Chocolate..."
            className="w-full text-base sm:text-lg bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-gray-400 hover:text-gray-600 p-1"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors ml-1"
            aria-label="Close search modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        {!query && (
          <div className="p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-900/60 block mb-3">
              Popular Searches:
            </span>
            <div className="flex flex-wrap gap-2">
              {["Pure Creamery Butter", "Desi Ghee", "Fresh Cream", "Bilona Cow Ghee", "Chocolate Spread", "Garlic Butter"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-amber-100/60 text-amber-900 hover:bg-amber-200 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Tag className="w-3 h-3 text-amber-600" />
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results List */}
        <div className="overflow-y-auto p-4 divide-y divide-amber-50">
          {query && results.length === 0 && (
            <div className="py-12 text-center text-gray-500">
              <p className="text-base font-medium">No dairy products found for &quot;{query}&quot;</p>
              <p className="text-xs text-gray-400 mt-1">
                Try searching for Butter, Cream, Ghee, or Chocolate.
              </p>
            </div>
          )}

          {results.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug || product.id}`}
              onClick={onClose}
              className="flex items-center gap-4 p-3 rounded-2xl hover:bg-amber-50/80 transition-colors group"
            >
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-amber-100 shrink-0">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block">
                  {product.categoryLabel}
                </span>
                <h4 className="text-sm font-bold text-gray-900 group-hover:text-amber-700 transition-colors truncate">
                  {product.name}
                </h4>
                <p className="text-xs text-gray-500 truncate mt-0.5">
                  {product.tagline}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-sm font-extrabold text-amber-700 block">
                  Rs. {product.price.toLocaleString()}
                </span>
                <span className="text-[11px] text-gray-400 flex items-center gap-1 justify-end group-hover:text-amber-600">
                  View <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
