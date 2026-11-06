"use client";

import React, { useState, useEffect } from "react";
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
  const [customerCity, setCustomerCity] = useState("Karachi");
  const [customerNotes, setCustomerNotes] = useState("");
  const [formErrors, setFormErrors] = useState<{ name?: string; address?: string }>({});

  // Sync with localStorage so inputs in drawer or cart page are preserved
  useEffect(() => {
    try {
      const savedName = localStorage.getItem("mz_customer_name");
      const savedAddress = localStorage.getItem("mz_customer_address");
      const savedPhone = localStorage.getItem("mz_customer_phone");
      if (savedName) setCustomerName(savedName);
      if (savedAddress) setCustomerAddress(savedAddress);
      if (savedPhone) setCustomerPhone(savedPhone);
    } catch {
      // LocalStorage fallback
    }
  }, []);

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    const errors: { name?: string; address?: string } = {};

    if (!customerName.trim()) {
      errors.name = "Full Name is required for delivery";
    }
    if (!customerAddress.trim()) {
      errors.address = "Complete Delivery Address is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const el = document.getElementById("delivery-info-form");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setFormErrors({});

    // Save to localStorage
    try {
      localStorage.setItem("mz_customer_name", customerName.trim());
      localStorage.setItem("mz_customer_address", customerAddress.trim());
      if (customerPhone.trim()) {
        localStorage.setItem("mz_customer_phone", customerPhone.trim());
      }
    } catch {
      // LocalStorage fallback
    }

    // Generate prefilled WhatsApp link with customer details
    const link = generateWhatsAppLink({
      name: customerName.trim(),
      phone: customerPhone.trim(),
      address: customerAddress.trim(),
      city: customerCity.trim(),
      notes: customerNotes.trim(),
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
            No login or credit card needed. Enter your delivery info and send directly to our WhatsApp!
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
                        Congratulations! You have qualified for FREE Delivery! 🎉
                      </span>
                    ) : (
                      <span>
                        Add <strong>Rs. {freeShippingLeft.toLocaleString()}</strong> more for FREE Delivery! (Free above Rs. 5,000)
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
                          Unit Price: Rs. {item.selectedVariant.price.toLocaleString()}
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
                          className="text-[11px] text-gray-400 hover:text-red-500 flex items-center gap-1 justify-end ml-auto mt-0.5 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Details Form (Required: Name & Address) */}
              <div
                id="delivery-info-form"
                className="bg-white rounded-3xl border border-amber-200/80 p-6 shadow-md space-y-4"
              >
                <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black font-black text-xs flex items-center justify-center">
                      📍
                    </span>
                    <h3 className="text-base font-extrabold text-[#29150B]">
                      Delivery Details
                    </h3>
                  </div>
                  <span className="text-xs text-red-600 font-bold">* Name &amp; Delivery Address Required</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => {
                        setCustomerName(e.target.value);
                        if (formErrors.name) setFormErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="e.g. Imran Khan"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        formErrors.name
                          ? "border-red-500 bg-red-50/40 focus:ring-red-400"
                          : "border-amber-200 bg-amber-50/30 focus:ring-amber-500"
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-600 font-semibold mt-1">{formErrors.name}</p>
                    )}
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
                      Complete Delivery Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={customerAddress}
                      onChange={(e) => {
                        setCustomerAddress(e.target.value);
                        if (formErrors.address) setFormErrors((prev) => ({ ...prev, address: undefined }));
                      }}
                      placeholder="House #, Street #, Sector / Area"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        formErrors.address
                          ? "border-red-500 bg-red-50/40 focus:ring-red-400"
                          : "border-amber-200 bg-amber-50/30 focus:ring-amber-500"
                      }`}
                    />
                    {formErrors.address && (
                      <p className="text-xs text-red-600 font-semibold mt-1">{formErrors.address}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={customerCity}
                      onChange={(e) => setCustomerCity(e.target.value)}
                      placeholder="Karachi"
                      className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/30 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Special Delivery Instructions (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    placeholder="e.g. Ring bell twice, deliver in evening"
                    className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/30 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Detailed Checkout Summary & WhatsApp Link */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl border border-amber-200/80 p-6 sm:p-7 shadow-xl sticky top-28 space-y-5">
                <div>
                  <h3 className="text-xl font-black text-[#29150B]">
                    Checkout Summary
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Itemized products, delivery fee, and grand total
                  </p>
                </div>

                {/* Itemized Table: Product name, Product quantity, Product price, Total amount */}
                <div className="bg-amber-50/50 rounded-2xl p-3 border border-amber-200/60">
                  <div className="grid grid-cols-12 text-[11px] font-black uppercase text-amber-950 pb-2 border-b border-amber-200/60 tracking-wider">
                    <span className="col-span-5">Product Name</span>
                    <span className="col-span-2 text-center">Qty</span>
                    <span className="col-span-2 text-right">Price</span>
                    <span className="col-span-3 text-right">Total</span>
                  </div>

                  <div className="divide-y divide-amber-100/80 max-h-56 overflow-y-auto">
                    {cart.map((item) => {
                      const itemTotal = item.selectedVariant.price * item.quantity;
                      return (
                        <div
                          key={item.cartItemId}
                          className="grid grid-cols-12 text-xs py-2 items-center gap-1"
                        >
                          <div className="col-span-5 pr-1">
                            <span className="font-bold text-[#29150B] block truncate" title={item.product.name}>
                              {item.product.name}
                            </span>
                            <span className="text-[10px] text-amber-800/80 font-medium">
                              {item.selectedVariant.label}
                            </span>
                          </div>
                          <div className="col-span-2 text-center font-bold text-gray-700">
                            {item.quantity}
                          </div>
                          <div className="col-span-2 text-right text-[11px] text-gray-600">
                            Rs. {item.selectedVariant.price.toLocaleString()}
                          </div>
                          <div className="col-span-3 text-right font-extrabold text-amber-800 text-[11px]">
                            Rs. {itemTotal.toLocaleString()}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Subtotal, Delivery Charges & Grand Total */}
                <div className="space-y-2.5 text-sm divide-y divide-amber-100 pt-1">
                  <div className="flex justify-between text-gray-700 pt-1">
                    <span className="font-medium">Total Amount (Subtotal)</span>
                    <span className="font-black text-gray-900">
                      Rs. {subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-700 pt-2.5">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Truck className="w-4 h-4 text-amber-700" />
                      <span>Delivery Charges</span>
                    </span>
                    <span className="font-black">
                      {shippingFee === 0 ? (
                        <span className="text-emerald-600 font-extrabold">FREE (Order above Rs. 5000)</span>
                      ) : (
                        `Rs. ${shippingFee.toLocaleString()} /=`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-base font-black text-[#29150B] pt-3">
                    <span>Grand Total</span>
                    <span className="text-2xl text-amber-700 font-black">
                      Rs. {grandTotal.toLocaleString()} /=
                    </span>
                  </div>
                </div>

                {/* Error Banner if missing details */}
                {(formErrors.name || formErrors.address) && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2">
                    <span>⚠️ Please enter your Name and Delivery Address before ordering!</span>
                  </div>
                )}

                {/* WhatsApp Order Button */}
                <div className="space-y-3 pt-1">
                  <button
                    type="button"
                    onClick={handleWhatsAppOrder}
                    className="w-full py-4 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/30 transition-all cursor-pointer hover:scale-[1.02] active:scale-98"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Order via WhatsApp</span>
                  </button>

                  <p className="text-center text-[11px] text-gray-500 leading-relaxed">
                    Clicking sends your complete invoice with product list, delivery address, and grand total to WhatsApp number <strong className="text-emerald-700">{siteConfig.phone}</strong>.
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
