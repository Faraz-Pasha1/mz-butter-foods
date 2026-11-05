"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, HeartPulse, Sparkles } from "lucide-react";

export const ProductTestSection: React.FC = () => {
  const trustPoints = [
    {
      title: "Perfect Whipping & Peak Texture",
      desc: "Whip up smooth, stable peaks effortlessly to give your desserts a professional, bakery-style finish every time.",
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />,
      image: "/images/Cream1.jpg",
      alt: "Arwa Whipping Cream for perfect bakery results",
    },
    {
      title: "Rich & Velvety Taste",
      desc: " Indulge in a rich, velvety consistency that melts in your mouth and elevates the flavor of any sweet creation.     ",
      icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />,
      image: "/images/cream2.jpg",
      alt: "Smooth and creamy pure churned butter",
    },
    {
      title: "Precision Decorating",
      desc: "Perfect for piping crisp borders, rosettes, and intricate designs on cakes, tarts, and pastries with absolute ease.A delightful choice for home bakers and professionals creating memorable desserts.",
      icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />,
      image: "/images/cream3.jpg",
      alt: "Pure cream trusted in commercial and home kitchens",
    },
    {
      title: "Crafted for Excellence",
      desc: "A reliable choice for home bakers and professional pastry chefs alike, designed to deliver exceptional baking resultsChoose quality and care for your everyday baking and special occasions.",
      icon: <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />,
      image: "/images/cream4.jpg",
      alt: "Care in every pack of fresh chilled butter",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F0] border-y border-amber-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#29150B] tracking-tight leading-tight">
            Quality You Can Trust
          </h2>
        </div>

        {/* 2-Column Layout: Left Featured Showcase, Right 4 Cards (2 in one line on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Left Side: Featured Showcase Banner */}
          <div className="lg:col-span-5 relative flex flex-col">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-amber-100 flex-1 min-h-[260px] sm:min-h-[360px] lg:min-h-full">
              <Image
                src="/images/arwa whipping cream.jpeg"
                alt="Mz Butter & foods mixed dairy products assortment"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-amber-300 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-xs">
                  Pure Churned Goodness
                </span>
                <p className="text-sm sm:text-lg font-black mt-2 leading-tight drop-shadow-md">
                  Crafted for Pastry Chefs &amp; Quality Kitchens
                </p>
              </div>
            </div>

            {/* Decorative background blurs */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-200/50 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-amber-300/40 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Side: 4 Cards (2 in a line on mobile & desktop) with Product Images */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white p-3 sm:p-5 rounded-2xl sm:rounded-3xl border border-amber-200/80 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  {/* Top: Card Image corresponding to Heading */}
                  <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-amber-50 mb-3 border border-amber-100/70 shrink-0">
                    <Image
                      src={point.image}
                      alt={point.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 25vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Top corner index badge */}
                    <div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full border border-amber-200/50 shadow-2xs">
                      {point.icon}
                      <span className="text-[10px] font-mono font-bold text-amber-900">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Bottom: Title & Description */}
                  <div className="space-y-1 sm:space-y-1.5 flex-1 flex flex-col justify-between">
                    <h3 className="text-xs sm:text-base font-black text-[#29150B] group-hover:text-amber-700 transition-colors leading-snug line-clamp-2">
                      {point.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
