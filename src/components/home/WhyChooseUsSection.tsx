"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Shield, HeartHandshake, Truck } from "lucide-react";

interface ReasonCard {
  id: string;
  number: string;
  headline: string;
  details: string;
  image: string;
  icon: React.ReactNode;
}

const reasons: ReasonCard[] = [
  {
    id: "r1",
    number: "01",
    headline: "Farm Purity & Raw Quality",
    details: "We source rich, pure farm milk directly to preserve natural freshness, rich fat content, and authentic dairy flavor in every batch.",
    image: "/images/whyChoose1.webp",
    icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />,
  },
  {
    id: "r2",
    number: "02",
    headline: "Slow Churning Excellence",
    details: "Combining heritage slow-churning techniques with modern precision to deliver unmatched rich texture, golden color, and superior aroma.",
    image: "/images/whyChoose2.webp",
    icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />,
  },
  {
    id: "r3",
    number: "03",
    headline: "Uncompromised Safety & Quality",
    details: "Processed in state-of-the-art clean environments strictly aligned with food safety standards and 100% Halal compliance.",
    image: "/images/whyChoose3.webp",
    icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />,
  },
  {
    id: "r4",
    number: "04",
    headline: "Commercial & Industrial Supply",
    details: "Engineered to meet the high-performance demands of food manufacturers, industrial bakeries, and food service providers with absolute consistency.",
    image: "/images/whyChoose4.webp",
    icon: <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />,
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#1C0E07] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Choose Us
          </h2>
          {/* <p className="text-xs sm:text-base text-amber-100/70 mt-2 sm:mt-3">
            Hover or tap any card to reveal how we preserve dairy perfection without compromise.
          </p> */}
        </div>

        {/* 4 Square Block Cards: 2 in one line on Mobile and Desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-5xl mx-auto">
          {reasons.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20 bg-[#160A04] cursor-pointer"
            >
              {/* Background Image: always visible */}
              <Image
                src={item.image}
                alt={item.headline}
                fill
                sizes="(max-width: 768px) 50vw, 50vw"
                className="object-cover opacity-100 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                unoptimized
              />

              {/* Base Dark Gradient Overlay for typography contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/10 pointer-events-none" />

              {/* Hover Dark Scrim Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/55 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top Badge with Number and Icon */}
              <div className="absolute top-2.5 left-2.5 sm:top-6 sm:left-6 z-20 flex items-center gap-1.5 sm:gap-2">
                <span className="text-[10px] sm:text-xs font-mono font-black text-amber-400 bg-black/60 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1.5 rounded-full border border-amber-500/30">
                  {item.number}
                </span>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-amber-500/30">
                  {item.icon}
                </div>
              </div>

              {/* Default State: Headline in BIG FONT on Bottom Right */}
              <div className="absolute bottom-2.5 right-2.5 sm:bottom-6 sm:right-6 z-20 text-right transition-all duration-300 group-hover:opacity-0 group-hover:invisible group-hover:translate-y-4 pointer-events-none">
                <span className="text-sm sm:text-3xl lg:text-5xl font-black tracking-tight text-white drop-shadow-lg block leading-tight">
                  {item.headline}
                </span>
                <span className="text-[9px] sm:text-xs text-amber-400/90 font-medium tracking-wide mt-1 block">
                  Explore &rarr;
                </span>
              </div>

              {/* Hover / Tap State: Reveal details */}
              <div className="absolute inset-0 z-30 p-3 sm:p-6 lg:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500 space-y-1 sm:space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] sm:text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                      #{item.number}
                    </span>
                    <span className="text-[9px] sm:text-xs bg-amber-500 text-black font-extrabold px-1.5 sm:px-2.5 py-0.5 rounded-full">
                      Guaranteed
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-2xl font-black text-white tracking-tight">
                    {item.headline}
                  </h3>

                  <p className="text-[10px] sm:text-sm text-amber-100/90 leading-tight sm:leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                    {item.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
