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

        {/* 20 Cards: Decreased Card Size with sleek multi-column grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2 sm:gap-3 max-w-6xl mx-auto">
          {customers.map((cust) => (
            <div
              key={cust.id}
              className="group bg-white rounded-xl border border-amber-100/80 p-1.5 sm:p-2 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center hover:-translate-y-0.5"
            >
              {/* Image Card Container */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-amber-50/50 flex items-center justify-center">
                <Image
                  src={cust.image}
                  alt={cust.name}
                  fill
                  sizes="(max-width: 640px) 30vw, (max-width: 1024px) 16vw, 12vw"
                  className="object-contain p-1 group-hover:scale-108 transition-transform duration-300"
                  unoptimized
                />
              </div>
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
