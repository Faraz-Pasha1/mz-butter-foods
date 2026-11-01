"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { siteConfig } from "@/config/site";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  MessageCircle,
  Clock,
  Sparkles,
} from "lucide-react";

export default function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    shippingFee,
    grandTotal,
    totalItems,
    generateWhatsAppLink,
  } = useCart();

  // Customer Delivery Info Form state
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerCity, setCustomerCity] = useState("Lahore");
  const [customerNotes, setCustomerNotes] = useState("");

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    // Generate prefilled WhatsApp link with customer details
    const link = generateWhatsAppLink({
      name: customerName,
      phone: customerPhone,
      address: customerAddress,
      city: customerCity,
      notes: customerNotes,
    });
    window.open(link, "_blank");
  };

  const freeShippingLeft = Math.max(0, siteConfig.freeShippingThreshold - subtotal);
  const freeShippingPercent = Math.min(
    100,
    (subtotal / siteConfig.freeShippingThreshold) * 100
  );

  return (
    <div className="bg-[#FFFDF8] py-12 sm:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-full mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Checkout</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#29150B] tracking-tight">
            Your Dairy Basket &amp; Order Review
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            No login, passwords, or credit card required. Finalize your order details and send directly via WhatsApp!
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="max-w-md mx-auto text-center py-16 px-6 bg-white rounded-3xl border border-amber-100 shadow-md">
            <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Your basket is empty</h2>
            <p className="text-xs text-gray-500 mt-2 mb-6">
              You haven&apos;t added any butter, fresh cream, or desi ghee to your basket yet.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm shadow-md transition-all"
            >
              <span>Explore Dairy Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Side: Product List & Quantities */}
            <div className="lg:col-span-7 space-y-6">
              {/* Free Shipping Alert Bar */}
              <div className="bg-amber-100/60 p-4 rounded-2xl border border-amber-200">
                <div className="flex items-center justify-between text-xs font-bold text-amber-950 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-amber-700" />
                    {freeShippingLeft === 0 ? (
                      <span className="text-emerald-700 font-extrabold">
                        Congratulations! You have qualified for FREE Cold Delivery! 🎉
                      </span>
                    ) : (
                      <span>
                        Add <strong>Rs. {freeShippingLeft.toLocaleString()}</strong> more for FREE Chilled Delivery!
                      </span>
                    )}
                  </span>
                </div>
                <div className="w-full bg-amber-200/80 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${freeShippingPercent}%` }}
                  />
                </div>
              </div>

              {/* Items Card Table */}
              <div className="bg-white rounded-3xl border border-amber-200/80 shadow-md overflow-hidden divide-y divide-amber-100">
                <div className="p-5 bg-amber-50/50 flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-[#29150B] flex items-center gap-2">
                    <span>Selected Items</span>
                    <span className="bg-amber-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {totalItems}
                    </span>
                  </h3>
                  <button
                    onClick={clearCart}
                    className="text-xs text-red-600 hover:text-red-700 font-bold cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-amber-50 shrink-0 border border-amber-100">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <Link
                          href={`/products/${item.product.slug || item.product.id}`}
                          className="font-bold text-sm text-[#29150B] hover:text-amber-700 transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <span className="inline-block text-xs font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md mt-1">
                          Weight: {item.selectedVariant.label}
                        </span>
                        <div className="text-xs text-gray-500 mt-1">
                          Unit: Rs. {item.selectedVariant.price.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 pt-2 sm:pt-0">
                      {/* Increasement / Decreasement counter */}
                      <div className="flex items-center border border-amber-200 rounded-full bg-amber-50/60 h-9 px-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.cartItemId, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center text-amber-900 hover:bg-amber-200/60 rounded-full transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-9 text-center text-xs font-extrabold text-[#29150B] font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.cartItemId, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center text-amber-900 hover:bg-amber-200/60 rounded-full transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <div className="text-right min-w-[90px]">
                        <span className="text-sm font-extrabold text-amber-700 block">
                          Rs. {(item.selectedVariant.price * item.quantity).toLocaleString()}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-[11px] text-gray-400 hover:text-red-500 flex items-center gap-1 justify-end ml-auto mt-0.5 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Details Form */}
              <div className="bg-white rounded-3xl border border-amber-200/80 p-6 shadow-md space-y-4">
                <div className="flex items-center gap-2 border-b border-amber-100 pb-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-black font-black text-xs flex items-center justify-center">
                    📍
                  </span>
                  <h3 className="text-base font-extrabold text-[#29150B]">
                    Delivery Information (Optional for WhatsApp Invoice)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Imran Khan"
                      className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/30 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      WhatsApp / Contact Number
                    </label>
                    <input
                      type="text"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="e.g. 0300 1234567"
                      className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/30 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Complete House / Street Address
                    </label>
                    <input
                      type="text"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="House #, Street #, Sector / Colony"
                      className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/30 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={customerCity}
                      onChange={(e) => setCustomerCity(e.target.value)}
                      placeholder="Lahore"
                      className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/30 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Special Delivery Notes / Instructions
                  </label>
                  <input
                    type="text"
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    placeholder="e.g. Ring the bell twice, keep cold, deliver before 10 AM"
                    className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/30 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Order Summary & WhatsApp Link */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl border border-amber-200/80 p-6 sm:p-8 shadow-xl sticky top-28 space-y-6">
                <div>
                  <h3 className="text-xl font-black text-[#29150B]">
                    Order Summary
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Review your order total and dispatch method
                  </p>
                </div>

                {/* Breakdown */}
                <div className="space-y-3 text-sm divide-y divide-amber-100">
                  <div className="flex justify-between text-gray-600 pt-1">
                    <span>Items Subtotal ({totalItems} items)</span>
                    <span className="font-bold text-gray-900">
                      Rs. {subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600 pt-3">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-amber-700" />
                      <span>Cold-Chain Insulated Shipping</span>
                    </span>
                    <span className="font-bold text-gray-900">
                      {shippingFee === 0 ? (
                        <span className="text-emerald-600 font-extrabold">FREE</span>
                      ) : (
                        `Rs. ${shippingFee.toLocaleString()}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-lg font-black text-[#29150B] pt-4">
                    <span>Total Estimated Amount</span>
                    <span className="text-2xl text-amber-700">
                      Rs. {grandTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* WhatsApp Order Button */}
                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppOrder}
                    className="w-full py-4 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/30 transition-all cursor-pointer hover:scale-[1.02] active:scale-98"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Order via WhatsApp</span>
                  </button>

                  <p className="text-center text-[11px] text-gray-500 leading-relaxed">
                    Clicking opens WhatsApp with your complete order breakdown pre-formatted. You can review and hit send!
                  </p>
                </div>

                {/* Trust Guarantees */}
                <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-amber-200/60 space-y-2 text-xs text-amber-950">
                  <div className="flex items-center gap-2 font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Safe &amp; Fresh Guarantee</span>
                  </div>
                  <ul className="text-[11px] text-gray-600 space-y-1 pl-6 list-disc">
                    <li>Pay cash / transfer upon physical cold handover.</li>
                    <li>Inspect packaging before accepting delivery.</li>
                    <li>Official WhatsApp number: {siteConfig.phone}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
