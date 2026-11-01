"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { QrCode, ExternalLink, Users, Sparkles } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

export const SocialSubscribeSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF7F0] border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Dairy Family</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#29150B] tracking-tight">
            Follow &amp; Subscribe on Social Media
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Get daily glimpses of farm milk collection, morning butter churning, and mouthwatering recipe reels!
          </p>
        </div>

        {/* 2 Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* a. Facebook Page Image with QR Code */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                    <FacebookIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#29150B]">
                      Official Facebook Page
                    </h3>
                    <span className="text-xs text-blue-700 font-bold block">
                      @mzbutterfoods
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full font-medium">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <span>25K+ Followers</span>
                </div>
              </div>

              {/* Facebook Page Banner Image with QR Overlay */}
              <div className="relative rounded-2xl overflow-hidden aspect-16/9 bg-blue-50 border border-blue-100">
                <Image
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80"
                  alt="Mz Butter & foods Facebook community"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* QR Code Inset Box */}
                <div className="absolute bottom-3 right-3 bg-white p-2 rounded-xl shadow-lg border border-amber-200 flex items-center gap-2">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex flex-col items-center justify-center p-1 text-blue-700">
                    <QrCode className="w-9 h-9" />
                    <span className="text-[8px] font-black mt-0.5">SCAN FB</span>
                  </div>
                  <div className="hidden sm:block text-left pr-1">
                    <span className="text-[9px] uppercase tracking-wider text-gray-400 block font-bold">
                      Scan Camera
                    </span>
                    <span className="text-xs font-black text-blue-700">
                      Follow Page
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-4 text-white">
                  <span className="text-xs font-bold block drop-shadow-md">
                    Live Farm Video Updates
                  </span>
                  <span className="text-[10px] text-amber-200 drop-shadow-xs">
                    Weekly recipe live streams
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-50">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <FacebookIcon className="w-4 h-4" />
                <span>Visit Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* b. Instagram Page Image with QR Code */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white flex items-center justify-center shadow-md">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#29150B]">
                      Official Instagram Feed
                    </h3>
                    <span className="text-xs text-pink-700 font-bold block">
                      @mzbutterfoods
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full font-medium">
                  <Users className="w-3.5 h-3.5 text-pink-600" />
                  <span>42K+ Foodies</span>
                </div>
              </div>

              {/* Instagram Feed Image with QR Overlay */}
              <div className="relative rounded-2xl overflow-hidden aspect-16/9 bg-pink-50 border border-pink-100">
                <Image
                  src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80"
                  alt="Mz Butter & foods Instagram feed"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* QR Code Inset Box */}
                <div className="absolute bottom-3 right-3 bg-white p-2 rounded-xl shadow-lg border border-amber-200 flex items-center gap-2">
                  <div className="w-16 h-16 bg-pink-50 rounded-lg flex flex-col items-center justify-center p-1 text-pink-700">
                    <QrCode className="w-9 h-9" />
                    <span className="text-[8px] font-black mt-0.5">SCAN IG</span>
                  </div>
                  <div className="hidden sm:block text-left pr-1">
                    <span className="text-[9px] uppercase tracking-wider text-gray-400 block font-bold">
                      Scan Camera
                    </span>
                    <span className="text-xs font-black text-pink-700">
                      Follow Reels
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-4 text-white">
                  <span className="text-xs font-bold block drop-shadow-md">
                    Baking &amp; Cooking Reels
                  </span>
                  <span className="text-[10px] text-pink-200 drop-shadow-xs">
                    Tag #MzButterFoods
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-50">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-amber-500 via-pink-600 to-purple-600 hover:opacity-95 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-pink-600/20 transition-all cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Visit Instagram Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
