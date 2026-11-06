"use client";

import React, { useState, useEffect } from "react";
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
  Send,
  MapPin,
  User,
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

  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; address?: string }>({});

  // Restore saved name and address from localStorage on mount
  useEffect(() => {
    try {
      const savedName = localStorage.getItem("mz_customer_name");
      const savedAddress = localStorage.getItem("mz_customer_address");
      const savedPhone = localStorage.getItem("mz_customer_phone");
      if (savedName) setCustomerName(savedName);
      if (savedAddress) setCustomerAddress(savedAddress);
      if (savedPhone) setCustomerPhone(savedPhone);
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  if (!isCartOpen) return null;

  const freeShippingLeft = Math.max(0, siteConfig.freeShippingThreshold - subtotal);
  const freeShippingPercent = Math.min(
    100,
    (subtotal / siteConfig.freeShippingThreshold) * 100
  );

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; address?: string } = {};

    if (!customerName.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!customerAddress.trim()) {
      newErrors.address = "Please enter your delivery address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Save to localStorage for convenience
    try {
      localStorage.setItem("mz_customer_name", customerName.trim());
      localStorage.setItem("mz_customer_address", customerAddress.trim());
      if (customerPhone.trim()) {
        localStorage.setItem("mz_customer_phone", customerPhone.trim());
      }
    } catch {
      // LocalStorage fallback
    }

    const link = generateWhatsAppLink({
      name: customerName.trim(),
      address: customerAddress.trim(),
      phone: customerPhone.trim(),
      city: "Karachi",
    });

    window.open(link, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full">
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-amber-100 flex items-center justify-between bg-amber-50/60 shrink-0">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-700" />
              <h2 className="text-base sm:text-lg font-extrabold text-[#29150B]">
                Your Dairy Cart
              </h2>
              <span className="bg-amber-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-amber-100/60 transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-4 sm:px-5 py-2.5 bg-amber-100/50 border-b border-amber-200/50 shrink-0">
            <div className="flex items-center justify-between text-[11px] sm:text-xs text-amber-950 font-medium mb-1.5">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                {freeShippingLeft === 0 ? (
                  <span className="text-emerald-700 font-bold">
                    You unlocked FREE Delivery! 🎉
                  </span>
                ) : (
                  <span>
                    Add <strong>Rs. {freeShippingLeft.toLocaleString()}</strong> more for FREE Delivery (Above Rs. 5,000)
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

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
            {cart.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-gray-900">
                  Your cart is currently empty
                </h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto mt-1 mb-6">
                  Explore our pure butter, fresh cream, desi ghee, and chocolates.
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
              <>
                {/* 1. Cart Items List */}
                <div className="divide-y divide-amber-100">
                  {cart.map((item) => (
                    <div key={item.cartItemId} className="py-3.5 flex gap-3.5 first:pt-0">
                      <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden bg-amber-50 shrink-0 border border-amber-100">
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
                            <h4 className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-1">
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
                          <span className="inline-block text-[10px] sm:text-[11px] font-semibold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md mt-0.5">
                            {item.selectedVariant.label}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-amber-200 rounded-full bg-amber-50/60 h-7 px-1">
                            <button
                              onClick={() =>
                                updateQuantity(item.cartItemId, item.quantity - 1)
                              }
                              className="w-5 h-5 flex items-center justify-center text-amber-900 hover:bg-amber-200/60 rounded-full transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-bold text-gray-800 font-mono">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.cartItemId, item.quantity + 1)
                              }
                              className="w-5 h-5 flex items-center justify-center text-amber-900 hover:bg-amber-200/60 rounded-full transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Item Price Total */}
                          <span className="text-xs sm:text-sm font-extrabold text-amber-700">
                            Rs. {(item.selectedVariant.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 2. Order Summary Breakdown */}
                <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200/70 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-bold text-[#29150B] pb-1.5 border-b border-amber-200/50">
                    <span>Order Summary</span>
                    <span className="text-amber-800 font-mono">{totalItems} Item(s)</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900">
                      Rs. {subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Charges</span>
                    <span className="font-semibold text-gray-900">
                      {shippingFee === 0 ? (
                        <span className="text-emerald-600 font-bold">FREE</span>
                      ) : (
                        `Rs. ${shippingFee.toLocaleString()}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base font-extrabold text-[#29150B] pt-2 border-t border-amber-200">
                    <span>Grand Total</span>
                    <span className="text-amber-700 font-black">
                      Rs. {grandTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* 3. Required Details: Name & Address Form */}
                <div className="p-4 bg-white rounded-2xl border-2 border-amber-300/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-amber-100">
                    <span className="text-xs font-black uppercase text-amber-900 tracking-wider flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      Delivery Details
                    </span>
                    <span className="text-[10px] font-bold text-red-600">
                      * Required Fields
                    </span>
                  </div>

                  {/* Name field */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3 text-gray-500" />
                        Full Name <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => {
                        setCustomerName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="e.g. Muhammad Ali"
                      className={`w-full px-3 py-2 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? "border-red-500 bg-red-50/50 focus:ring-red-400"
                          : "border-amber-200 bg-amber-50/30 focus:ring-amber-500"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-600 font-bold mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Address field */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gray-500" />
                        Complete Delivery Address <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <textarea
                      rows={2}
                      value={customerAddress}
                      onChange={(e) => {
                        setCustomerAddress(e.target.value);
                        if (errors.address) setErrors((prev) => ({ ...prev, address: undefined }));
                      }}
                      placeholder="House / Flat #, Street #, Area / Block, City"
                      className={`w-full px-3 py-2 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.address
                          ? "border-red-500 bg-red-50/50 focus:ring-red-400"
                          : "border-amber-200 bg-amber-50/30 focus:ring-amber-500"
                      }`}
                    />
                    {errors.address && (
                      <p className="text-[11px] text-red-600 font-bold mt-1">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  {/* Optional WhatsApp/Phone */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                      Contact Number (Optional)
                    </label>
                    <input
                      type="text"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="e.g. 0300 1234567"
                      className="w-full px-3 py-1.5 rounded-xl border border-amber-200 bg-amber-50/30 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer CTA */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-amber-100 bg-amber-50/60 shrink-0 space-y-2.5">
              {/* WhatsApp Order Button */}
              <button
                type="button"
                onClick={handleSendWhatsAppOrder}
                className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer active:scale-98"
              >
                <Send className="w-4 h-4 fill-white" />
                <span>Send Order via WhatsApp</span>
              </button>

              {/* View Full Cart Page Button */}
              <Link
                href="/cart"
                onClick={() => setIsCartOpen(false)}
                className="w-full py-2 px-4 rounded-full bg-white hover:bg-amber-100 text-amber-950 font-bold text-xs flex items-center justify-center gap-1.5 border border-amber-200 transition-colors"
              >
                <span>View Full Cart Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 pt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>Pay on Delivery • 100% Pure Fresh Dairy</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
