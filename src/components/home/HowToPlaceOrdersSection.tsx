"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useCart } from "@/context/CartContext";
import {
  MessageCircle,
  ShoppingCart,
  QrCode,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";

export const HowToPlaceOrdersSection: React.FC = () => {
  const { setIsCartOpen } = useCart();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Effortless Ordering</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-black text-[#29150B] tracking-tight">
            Guide to Place Your Order
          </h2>
          {/* <p className="text-sm sm:text-base text-gray-600 mt-2">
            Choose the ordering method that suits you best — 100% WhatsApp confirmed, zero complex checkout forms!
          </p> */}
        </div>

        {/* 2 Medium Size Blocks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Block 1: WhatsApp & Instagram Order by QR Code */}
          <div className="bg-gradient-to-br from-amber-50/80 via-white to-amber-100/50 rounded-3xl p-8 border border-amber-200 shadow-lg flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  Option 1: Quick QR Scan
                </span>
                <span className="text-xs text-gray-400 font-mono">Instant Chat</span>
              </div>

              <h3 className="text-2xl font-black text-[#29150B]">
                Order via WhatsApp &amp; Instagram QR Code
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                Scan the QR code with your smartphone camera to immediately open our verified WhatsApp chat or Instagram DM. Our dairy specialists will assist you with batch availability and custom quantities.
              </p>

              {/* QR Code Graphic Display Container */}
              <div className="py-4 flex flex-col sm:flex-row items-center justify-center gap-6 bg-white/80 p-5 rounded-2xl border border-amber-100 shadow-inner">
                {/* WhatsApp QR Simulation */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 bg-white p-2 rounded-2xl border-2 border-emerald-500 shadow-sm flex flex-col items-center justify-center">
                    {/* SVG Stylized QR Pattern */}
                    <div className="w-full h-full bg-[#E8F5E9] rounded-xl flex flex-col items-center justify-center p-2 text-emerald-700">
                      <QrCode className="w-16 h-16 text-emerald-700 mb-1" />
                      <span className="text-[9px] font-bold tracking-tight">SCAN WHATSAPP</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Order</span>
                  </div>
                </div>

                {/* Instagram QR Simulation */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 bg-white p-2 rounded-2xl border-2 border-pink-500 shadow-sm flex flex-col items-center justify-center">
                    <div className="w-full h-full bg-[#FCE4EC] rounded-xl flex flex-col items-center justify-center p-2 text-pink-700">
                      <QrCode className="w-16 h-16 text-pink-700 mb-1" />
                      <span className="text-[9px] font-bold tracking-tight">SCAN INSTAGRAM</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-pink-700">
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram DM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-100">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello Mz Butter & Foods! I would like to place an order.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat Directly ({siteConfig.phone})</span>
              </a>
            </div>
          </div>

          {/* Block 2: Website Add to Cart and Then WhatsApp Link */}
          <div className="bg-gradient-to-br from-[#29150B] via-[#351C0F] to-[#1C0E07] text-white rounded-3xl p-8 border border-amber-500/30 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                  Option 2: Website Cart
                </span>
                <span className="text-xs text-amber-200/60 font-mono">Most Popular</span>
              </div>

              <h3 className="text-2xl font-black text-white">
                Website Add to Cart &amp; WhatsApp Checkout
              </h3>

              <p className="text-sm text-amber-100/80 leading-relaxed">
                Browse our full catalog, pick your preferred pack sizes, and let our website generate an itemized invoice sent straight to our WhatsApp dispatch team in 1 click!
              </p>

              {/* 3 Step Flow */}
              <div className="space-y-3 py-2">
                {[
                  {
                    step: "1",
                    title: "Browse & Select Weight Options",
                    desc: "Choose between 500g and 1kg pack sizes and tap Add to Cart.",
                  },
                  {
                    step: "2",
                    title: "Review Cart & Order Total",
                    desc: "Check subtotal, view free cold-delivery status, or add delivery address.",
                  },
                  {
                    step: "3",
                    title: "Click WhatsApp Order Button",
                    desc: "Website opens WhatsApp with your prefilled itemized cart ready to send!",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                    <div className="w-6 h-6 rounded-full bg-amber-500 text-black font-black text-xs flex items-center justify-center shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{s.title}</h4>
                      <p className="text-[11px] text-amber-200/70 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/products"
                className="flex-1 py-3.5 px-5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all text-center"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Shop Catalog Now</span>
              </Link>
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="py-3.5 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/20 transition-colors cursor-pointer"
              >
                <span>Open Cart</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
