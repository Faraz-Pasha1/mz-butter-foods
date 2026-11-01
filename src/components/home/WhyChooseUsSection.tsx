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
    headline: "Farm Purity",
    details: "We source strictly from healthy, pasture-fed cows and buffaloes. Every batch is 100% natural milk without synthetic hormone injections, artificial thickeners, or chemical preservatives.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80",
    icon: <Sparkles className="w-5 h-5 text-amber-400" />,
  },
  {
    id: "r2",
    number: "02",
    headline: "Slow Churned",
    details: "We reject high-speed industrial homogenization. Our butter and desi ghee are clarified slowly over low flame, letting the milk solids gently caramelize to unlock prized golden grains and heavenly nutty aromas.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    icon: <Shield className="w-5 h-5 text-amber-400" />,
  },
  {
    id: "r3",
    number: "03",
    headline: "Uncompromised Safety",
    details: "Processed in state-of-the-art hygienic cleanrooms with food-grade stainless steel churns. Packed in tamper-evident sealed tubs and heavy glass jars to preserve wholesome dairy goodness.",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80",
    icon: <HeartHandshake className="w-5 h-5 text-amber-400" />,
  },
  {
    id: "r4",
    number: "04",
    headline: "Cold Delivery",
    details: "Dispatched from our farm cold facility straight to your door in specialized insulated cooler packs. Your butter stays firm, cream stays velvety, and aroma stays freshly locked in.",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80",
    icon: <Truck className="w-5 h-5 text-amber-400" />,
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#1C0E07] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            Why Mz Butter &amp; Foods
          </span> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-4">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base text-amber-100/70 mt-3">
            Hover over any card to reveal how we preserve dairy perfection without compromise.
          </p>
        </div>

        {/* 4 Square Block Cards: 2 Up and 2 Down Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20 bg-[#160A04] cursor-pointer"
            >
              {/* Background Image: always shown with low but visible opacity (whether hovered or not) */}
              <Image
                src={item.image}
                alt={item.headline}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-100 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                unoptimized
              />

              {/* Base Dark Gradient Overlay to ensure typography contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25 pointer-events-none" />

              {/* Hover Dark Scrim Overlay for deep hover contrast */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/55 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top Badge with Number and Icon */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                <span className="text-xs font-mono font-black text-amber-400 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-500/30">
                  {item.number}
                </span>
                <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-amber-500/30">
                  {item.icon}
                </div>
              </div>

              {/* Default State: Headline in BIG FONT on Bottom Right */}
              <div className="absolute bottom-6 right-6 z-20 text-right transition-all duration-300 group-hover:opacity-0 group-hover:invisible group-hover:translate-y-4 pointer-events-none">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-lg block leading-none">
                  {item.headline}
                </span>
                <span className="text-xs text-amber-400/90 font-medium tracking-wide mt-2 block">
                  Hover to explore &rarr;
                </span>
              </div>

              {/* Hover State: On hover show complete details on top of the visible low-opacity background image */}
              <div className="absolute inset-0 z-30 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                      Feature #{item.number}
                    </span>
                    <span className="text-xs bg-amber-500 text-black font-extrabold px-2.5 py-0.5 rounded-full">
                      Guaranteed
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {item.headline}
                  </h3>

                  <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-normal">
                    {item.details}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-amber-400">
                    <span>100% Mz Butter Certified Standard</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
