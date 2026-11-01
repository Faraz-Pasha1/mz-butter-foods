"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { siteConfig } from "@/config/site";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    shippingFee,
    grandTotal,
    totalItems,
    generateWhatsAppLink,
  } = useCart();

  if (!isCartOpen) return null;

  const freeShippingLeft = Math.max(0, siteConfig.freeShippingThreshold - subtotal);
  const freeShippingPercent = Math.min(
    100,
    (subtotal / siteConfig.freeShippingThreshold) * 100
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-5 border-b border-amber-100 flex items-center justify-between bg-amber-50/50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-700" />
              <h2 className="text-lg font-extrabold text-[#29150B]">
                Your Dairy Cart
              </h2>
              <span className="bg-amber-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-amber-100/50 transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-amber-100/40 border-b border-amber-200/40">
            <div className="flex items-center justify-between text-xs text-amber-950 font-medium mb-1.5">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-amber-700" />
                {freeShippingLeft === 0 ? (
                  <span className="text-emerald-700 font-bold">
                    You unlocked FREE Cold-Chain Delivery! 🎉
                  </span>
                ) : (
                  <span>
                    Add <strong>Rs. {freeShippingLeft.toLocaleString()}</strong> more for FREE Cold Delivery
                  </span>
                )}
              </span>
            </div>
            <div className="w-full bg-amber-200/80 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-amber-600 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${freeShippingPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-amber-100">
            {cart.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-gray-900">
                  Your cart is currently empty
                </h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto mt-1 mb-6">
                  Explore our pure churned butter, fresh velvet cream, and fragrant desi ghee.
                </p>
                <Link
                  href="/products"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-colors"
                >
                  <span>Browse All Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.cartItemId} className="py-4 flex gap-4 first:pt-0">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-amber-50 shrink-0 border border-amber-100">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-gray-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="inline-block text-[11px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md mt-1">
                        Size: {item.selectedVariant.label}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-amber-200 rounded-full bg-amber-50/50">
                        <button
                          onClick={() =>
                            updateQuantity(item.cartItemId, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center text-amber-900 hover:bg-amber-200/60 rounded-full transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-gray-800 font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.cartItemId, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center text-amber-900 hover:bg-amber-200/60 rounded-full transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-sm font-extrabold text-amber-700">
                        Rs. {(item.selectedVariant.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout Actions */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-amber-100 bg-amber-50/40">
              <div className="space-y-1.5 mb-4 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Cold-Chain Delivery</span>
                  <span className="font-semibold text-gray-900">
                    {shippingFee === 0 ? (
                      <span className="text-emerald-600 font-bold">FREE</span>
                    ) : (
                      `Rs. ${shippingFee.toLocaleString()}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-[#29150B] pt-2 border-t border-amber-200">
                  <span>Estimated Total</span>
                  <span className="text-amber-700 font-black">
                    Rs. {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp Order Button */}
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all mb-2 cursor-pointer active:scale-98"
              >
                <span>Order Now via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* View Full Cart Page Button */}
              <Link
                href="/cart"
                onClick={() => setIsCartOpen(false)}
                className="w-full py-2.5 px-4 rounded-full bg-amber-100 hover:bg-amber-200/80 text-amber-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Review Cart &amp; Enter Address</span>
              </Link>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-gray-500">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>100% Purity Guarantee • Pay on Delivery</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
