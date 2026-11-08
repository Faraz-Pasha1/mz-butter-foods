"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, ProductVariant } from "@/types";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Plus, Minus, Star, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0] || { id: "default", label: "Standard", price: product.price }
  );
  const isButter = product.category === "butter";
  const [butterType, setButterType] = useState<"Unsalted" | "Salted">("Unsalted");
  const [butterWeight, setButterWeight] = useState<"1kg" | "10kg">("1kg");
  const [quantity, setQuantity] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const primaryImage = product.images[0] || "/images/logo.png";
  const hoverImage = product.images[1] || primaryImage;

  const handleDecrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleIncrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const qtyToAdd = quantity > 0 ? quantity : 1;
    addToCart(product, selectedVariant, qtyToAdd);
    if (quantity === 0) {
      setQuantity(1);
    }
  };

  return (
    <div
      className="group relative bg-white rounded-2xl border border-amber-100/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with 2nd image on hover */}
      <div className="relative w-full aspect-4/3 bg-amber-50/40 overflow-hidden cursor-pointer">
        <Link href={`/products/${product.slug || product.id}`}>
          {/* Primary Image */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={primaryImage}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
          </div>

          {/* Secondary Hover Image */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={hoverImage}
              alt={`${product.name} alternate view`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center scale-105"
              unoptimized
            />
          </div>
        </Link>

        {/* Hover Cart / Quick View Button Overlay */}
        <div
          className={`absolute top-3 right-3 z-20 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <button
            onClick={handleAddToCart}
            title="Quick Add to Cart"
            aria-label="Quick Add to Cart"
            className="w-10 h-10 rounded-full bg-gray-100 text-gray-800 hover:bg-black hover:text-white shadow-lg flex items-center justify-center transition-all duration-200 cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
          <Link
            href={`/products/${product.slug || product.id}`}
            title="View Details"
            aria-label="View Details"
            className="w-10 h-10 rounded-full bg-white/95 text-gray-700 hover:bg-black hover:text-white shadow-lg flex items-center justify-center transition-all duration-200"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>

        {/* Rating chip */}
        <div className="absolute bottom-2 left-2 z-10 bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
          <Star className={`w-3 h-3 ${product.rating > 0 ? "fill-amber-400 text-amber-400" : "text-amber-200"}`} />
          <span>{product.rating > 0 ? product.rating.toFixed(1) : "0"}</span>
          <span className="text-gray-300">({product.reviewsCount})</span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Centered Title */}
          <Link href={`/products/${product.slug || product.id}`}>
            <h3 className="text-center font-extrabold text-gray-900 text-sm sm:text-lg hover:text-amber-700 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-center text-xs sm:text-[15px] text-amber-900/80 line-clamp-1 sm:line-clamp-2 mt-0.5 sm:mt-1 italic leading-snug">
            {product.tagline}
          </p>

          {/* Centered Price with strike-through original price */}
          <div className="mt-2 sm:mt-2.5 flex items-center justify-center gap-1.5 sm:gap-2">
            <span className="text-center font-black text-amber-700 text-base sm:text-xl">
              Rs. {selectedVariant.price.toLocaleString()}
            </span>
            {selectedVariant.originalPrice && (
              <span className="text-[11px] sm:text-sm text-gray-400 line-through">
                Rs. {selectedVariant.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Action Controls Section */}
        <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-amber-100">
          {/* Button of Options */}
          <div className="mb-2.5 sm:mb-3">
            {isButter ? (
              <div className="flex flex-col gap-1.5 sm:grid sm:grid-cols-5 sm:gap-2">
                {/* Weight Options (1kg / 10kg) - 2 cols on desktop */}
                <div className="sm:col-span-2">
                  <div className="text-[10px] uppercase font-bold text-gray-500 mb-1 text-center tracking-wider">
                    Weight
                  </div>
                  <div className="grid grid-cols-2 gap-1 p-1 bg-amber-50/70 rounded-xl border border-amber-200/50">
                    {(["1kg", "10kg"] as const).map((w) => {
                      const isSelected = butterWeight === w;
                      return (
                        <button
                          key={w}
                          type="button"
                          onClick={() => {
                            setButterWeight(w);
                            const matched = product.variants.find((v) => {
                              const l = v.label.toLowerCase();
                              const matchesW = w === "10kg" ? l.includes("10kg") : l.includes("1kg") && !l.includes("10kg");
                              const matchesT = butterType === "Unsalted" ? l.includes("unsalted") : l.includes("salted") && !l.includes("unsalted");
                              return matchesW && matchesT;
                            });
                            if (matched) setSelectedVariant(matched);
                          }}
                          className={`text-[11px] sm:text-xs py-1.5 px-0.5 rounded-lg font-bold transition-all text-center cursor-pointer ${
                            isSelected
                              ? "bg-amber-600 text-white shadow-xs"
                              : "text-amber-900/80 hover:bg-amber-100/80"
                          }`}
                        >
                          {w}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Salted / Unsalted Options - 3 cols on desktop */}
                <div className="sm:col-span-3">
                  <div className="text-[10px] uppercase font-bold text-gray-500 mb-1 text-center tracking-wider">
                    Type
                  </div>
                  <div className="grid grid-cols-2 gap-1 p-1 bg-amber-50/70 rounded-xl border border-amber-200/50">
                    {(["Unsalted", "Salted"] as const).map((t) => {
                      const isSelected = butterType === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => {
                            setButterType(t);
                            const matched = product.variants.find((v) => {
                              const l = v.label.toLowerCase();
                              const matchesW = butterWeight === "10kg" ? l.includes("10kg") : l.includes("1kg") && !l.includes("10kg");
                              const matchesT = t === "Unsalted" ? l.includes("unsalted") : l.includes("salted") && !l.includes("unsalted");
                              return matchesW && matchesT;
                            });
                            if (matched) setSelectedVariant(matched);
                          }}
                          className={`text-[11px] sm:text-xs py-1.5 px-1 rounded-lg font-bold transition-all text-center cursor-pointer whitespace-nowrap tracking-tight ${
                            isSelected
                              ? "bg-amber-600 text-white shadow-xs"
                              : "text-amber-900/80 hover:bg-amber-100/80"
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
              <div
                className={`grid ${
                  product.variants.length === 1 ? "grid-cols-1" : "grid-cols-2"
                } gap-1.5 p-1 bg-amber-50/70 rounded-xl border border-amber-200/50`}
              >
                {product.variants.slice(0, 2).map((variant) => {
                  const isSelected = selectedVariant.id === variant.id;
                  return (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`text-[11px] sm:text-xs py-1.5 sm:py-2 px-1.5 rounded-lg font-bold transition-all text-center cursor-pointer ${
                        isSelected
                          ? "bg-amber-600 text-white shadow-xs"
                          : "text-amber-900/80 hover:bg-amber-100/80"
                      }`}
                    >
                      <span>{variant.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quantity Controls and Add to Cart Button */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Left Small Round Button: Decrease */}
            {/* <button
              type="button"
              onClick={handleDecrease}
              aria-label="Decrease quantity"
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full shrink-0 border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
            >
              <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button> */}

            {/* Middle: Add to Cart Button with Quantity indicator */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="group/btn flex-1 py-1.5 sm:py-2 px-1 sm:px-3 rounded-full bg-gray-200 hover:bg-black text-gray-900 hover:text-white font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1 sm:gap-1.5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer active:scale-98 min-w-0"
            >
              <ShoppingCart className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span className="truncate">Add to Cart</span>
              {/* <span className="bg-black/10 group-hover/btn:bg-white/20 text-inherit px-1 sm:px-1.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono shrink-0">
                {quantity}
              </span> */}
            </button>

            {/* Right Small Round Button: Increase */}
            {/* <button
              type="button"
              onClick={handleIncrease}
              aria-label="Increase quantity"
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full shrink-0 border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
            >
              <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
