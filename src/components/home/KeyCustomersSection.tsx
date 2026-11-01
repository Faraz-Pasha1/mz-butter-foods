"use client";

import React from "react";
import Image from "next/image";
import { customers } from "@/data/customers";
import { Award, MapPin, Sparkles } from "lucide-react";

export const KeyCustomersSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Trusted Culinary Partners</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-black text-[#29150B] tracking-tight">
            Our Key Customers
          </h2>
          {/* <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
            From Michelin-caliber pastry chefs and artisanal French bakeries to beloved heritage sweet shops and luxury cafes.
          </p> */}
        </div>

        {/* 20 Cards: 5 Image Cards in One Line (5 columns on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {customers.map((cust) => (
            <div
              key={cust.id}
              className="group bg-white rounded-2xl border border-amber-100/90 p-1 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1"
            >
              {/* Image Card Container */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-amber-50 mb-1 border border-amber-50">
                <Image
                  src={cust.image}
                  alt={cust.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* <span className="absolute bottom-2 left-2 text-[9px] bg-white/90 backdrop-blur-xs font-bold text-amber-900 px-1.5 py-0.5 rounded-md shadow-2xs">
                  {cust.since}
                </span> */}
              </div>

              {/* Title & Metadata */}
              {/* <h3 className="font-extrabold text-sm text-[#29150B] group-hover:text-amber-700 transition-colors line-clamp-1">
                {cust.name}
              </h3> */}
              {/* <p className="text-xs font-semibold text-amber-800/80 mt-0.5 line-clamp-1">
                {cust.category}
              </p> */}
              {/* <div className="mt-2 flex items-center justify-center gap-1 text-[10px] text-gray-400">
                <MapPin className="w-2.5 h-2.5 text-amber-600 shrink-0" />
                <span className="truncate">{cust.location}</span>
              </div> */}
            </div>
          ))}
        </div>

        {/* Bottom Trust Stat Bar */}
        {/* <div className="mt-12 p-6 rounded-3xl bg-amber-600 text-white flex flex-col sm:flex-row items-center justify-around gap-6 text-center shadow-xl shadow-amber-600/20">
          <div>
            <span className="text-3xl font-black block">1,500+</span>
            <span className="text-xs text-amber-100 uppercase tracking-wider font-semibold">
              Daily Household Deliveries
            </span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-amber-500/50" />
          <div>
            <span className="text-3xl font-black block">85+</span>
            <span className="text-xs text-amber-100 uppercase tracking-wider font-semibold">
              Commercial Bakery Clients
            </span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-amber-500/50" />
          <div>
            <span className="text-3xl font-black block">100%</span>
            <span className="text-xs text-amber-100 uppercase tracking-wider font-semibold">
              Purity &amp; Safety Rating
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
};
