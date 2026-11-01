"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Award, HeartPulse, Sparkles } from "lucide-react";

export const ProductTestSection: React.FC = () => {
  const trustPoints = [
    {
      title: "Perfect Whipping, Beautiful Results",
      desc: "Create smooth, fluffy toppings and beautiful dessert finishes with ease.",
      icon: <Award className="w-8 h-8 text-amber-600 shrink-0" />,
    },
    {
      title: "Smooth & Creamy Texture",
      desc: "Enjoy a creamy texture that helps bring your dessert ideas to life.",
      icon: <ShieldCheck className="w-8 h-8 text-amber-600 shrink-0" />,
    },
    {
      title: "Trusted in Every Kitchen",
      desc: "A delightful choice for home bakers and professionals creating memorable desserts.",
      icon: <Sparkles className="w-8 h-8 text-amber-600 shrink-0" />,
    },
    {
      title: "Care in Every Pack",
      desc: "Choose quality and care for your everyday baking and special occasions.",
      icon: <HeartPulse className="w-8 h-8 text-amber-600 shrink-0" />,
    },
  ];

  return (
    <section className="py-20 bg-[#FAF7F0] border-y border-amber-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* a. Heading of Slogan */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Tested &amp; Guaranteed Purity</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#29150B] tracking-tight leading-tight">
            Quality You Can Trust
          </h2>
          {/* <p className="text-sm sm:text-base text-amber-900/80 mt-3 max-w-2xl mx-auto">
            Every block of butter, jar of ghee, and tub of velvet cream passes rigorous food purity tests before reaching your kitchen table.
          </p> */}
        </div>

        {/* 2-Column Layout: Left Image of Mix Products, Right Trusted 2x2 Square Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* b. Left Side: Image of Mix Products */}
          <div className="lg:col-span-5 relative flex flex-col">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-amber-100 flex-1 min-h-[380px] lg:min-h-full">
              <Image
                src="/images/arwa whipping cream.jpeg"
                alt="Mz Butter & foods mixed dairy products assortment"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Decorative background element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-200/50 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-amber-300/40 rounded-full blur-2xl -z-10" />
          </div>

          {/* c. Right Side: 4 Square Cards (2 in one line, 2 in next) with Big Badge Icons */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-3xl border border-amber-200/80 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between aspect-square group cursor-pointer"
                >
                  {/* Top: Large Badge Icon and Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 group-hover:bg-amber-600 flex items-center justify-center border border-amber-200/80 transition-all duration-300 shadow-xs group-hover:scale-105 group-hover:shadow-md">
                      <span className="[&>svg]:w-7 [&>svg]:h-7 sm:[&>svg]:w-8 sm:[&>svg]:h-8 [&>svg]:text-amber-600 group-hover:[&>svg]:text-white transition-colors">
                        {point.icon}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-800/60 bg-amber-100/50 px-2.5 py-1 rounded-full border border-amber-200/40">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Bottom: Title & Description */}
                  <div className="space-y-2 mt-auto">
                    <h3 className="text-base sm:text-lg font-black text-[#29150B] group-hover:text-amber-700 transition-colors leading-snug">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed line-clamp-3">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="pt-1 flex items-center justify-between">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors underline underline-offset-4"
              >
                <span>Read more about our traditional farm churning method</span>
                <span>→</span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
