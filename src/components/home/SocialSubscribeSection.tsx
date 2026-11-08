
"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ExternalLink, Users, Sparkles } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

export const SocialSubscribeSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#FAF7F0] border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">

          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Dairy Family</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#29150B] tracking-tight">
            Follow &amp; Subscribe on Social Media
          </h2>

          <p className="text-xs sm:text-base text-gray-600 mt-2">
            Get daily glimpses of collection, morning butter churning, and mouthwatering recipe.
          </p>
        </div>

        {/* 2 Social Cards Grid - Always One Line */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">

          {/* FACEBOOK CARD */}
          <div className="min-w-0 bg-white rounded-xl sm:rounded-3xl p-2.5 sm:p-6 lg:p-8 border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">

            <div className="space-y-3 sm:space-y-4">

              {/* Facebook Header */}
              <div className="flex items-center justify-between gap-1">

                <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">

                  <div className="w-8 h-8 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                    <FacebookIcon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[11px] sm:text-lg font-black text-[#29150B] leading-tight">
                      Official Facebook Page
                    </h3>

                    <span className="text-[9px] sm:text-xs text-blue-700 font-bold block mt-0.5">
                      MZ Butter &amp; Foods
                    </span>
                  </div>

                </div>

                <div className="hidden sm:flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full font-medium shrink-0">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <span>Official Page</span>
                </div>

              </div>

              {/* Facebook Banner Image */}
              <div className="relative rounded-lg sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-video bg-blue-50 border border-blue-100">

                <Image
                  src="/images/Hero1.webp"
                  alt="MZ Butter & Foods Facebook community"
                  fill
                  sizes="(max-width: 640px) 50vw, 400px"
                  className="object-cover"
                  unoptimized
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              </div>

            </div>

            {/* Facebook Button */}
            <div className="mt-3 sm:mt-6 pt-3 sm:pt-4 border-t border-amber-50">

              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-9 sm:min-h-12 py-2 sm:py-3 px-1 sm:px-5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[9px] sm:text-xs flex items-center justify-center gap-1 sm:gap-2 shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <FacebookIcon className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />

                <span className="text-center leading-tight">
                  Visit Facebook Page
                </span>

                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              </a>

            </div>

          </div>

          {/* INSTAGRAM CARD */}
          <div className="min-w-0 bg-white rounded-xl sm:rounded-3xl p-2.5 sm:p-6 lg:p-8 border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">

            <div className="space-y-3 sm:space-y-4">

              {/* Instagram Header */}
              <div className="flex items-center justify-between gap-1">

                <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">

                  <div className="w-8 h-8 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white flex items-center justify-center shadow-md">
                    <InstagramIcon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[11px] sm:text-lg font-black text-[#29150B] leading-tight">
                      Official Instagram Feed
                    </h3>

                    <span className="text-[9px] sm:text-xs text-pink-700 font-bold block mt-0.5">
                      @mz_foods01
                    </span>
                  </div>

                </div>

                <div className="hidden sm:flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full font-medium shrink-0">
                  <Users className="w-3.5 h-3.5 text-pink-600" />
                  <span>@mz_foods01</span>
                </div>

              </div>

              {/* Instagram Banner Image */}
              <div className="relative rounded-lg sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-video bg-pink-50 border border-pink-100">

                <Image
                  src="/images/logo.webp"
                  alt="MZ Butter & Foods Instagram feed"
                  fill
                  sizes="(max-width: 640px) 50vw, 400px"
                  className="object-cover"
                  unoptimized
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              </div>

            </div>

            {/* Instagram Button */}
            <div className="mt-3 sm:mt-6 pt-3 sm:pt-4 border-t border-amber-50">

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-9 sm:min-h-12 py-2 sm:py-3 px-1 sm:px-5 rounded-full bg-gradient-to-r from-amber-500 via-pink-600 to-purple-600 hover:opacity-95 text-white font-extrabold text-[9px] sm:text-xs flex items-center justify-center gap-1 sm:gap-2 shadow-md shadow-pink-600/20 transition-all cursor-pointer"
              >
                <InstagramIcon className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />

                <span className="text-center leading-tight">
                  Visit Instagram Profile
                </span>

                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
