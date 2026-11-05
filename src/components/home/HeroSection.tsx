"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Volume2,
  VolumeX,
  Play,
  Pause,
} from "lucide-react";

interface SlideData {
  type: "video" | "image";
  mediaUrl: string;
  posterUrl?: string;
  categoryTag: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const slides: SlideData[] = [
  // Slide 1: Video Slide
  // {
  //   type: "video",
  //   mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  //   posterUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1600&q=80",
  //   categoryTag: "Farm Fresh Dairy Heritage",
  //   title: "100% Pure Dairy Churned Daily from Fresh Farm Milk",
  //   subtitle: "From pasture to jar — experience the golden standard of unadulterated butter, fresh velvet cream, and fragrant desi ghee.",
  //   buttonText: "Shop All Dairy Creations",
  //   buttonLink: "/products",
  // },
  // Slide 1: All Products
  {
    type: "image",
    mediaUrl: "/images/Hero1.jfif",
    categoryTag: "All Dairy & Sweets",
    title: "Pure, Simple Butter Crafted for Professionals",
    subtitle: "",
    buttonText: "Shop",
    buttonLink: "/products?category=alldairy&sweets",
  },


  // Slide 2: Butter Slide
  {
    type: "image",
    mediaUrl: "/images/hero section 2.jfif",
    categoryTag: "Butter",
    title: "Pure, Simple Butter Crafted for Professionals",
    subtitle: "",
    buttonText: "Shop Butter Range",
    buttonLink: "/products?category=butter",
  },
  // Slide 3: Cream Slide
  {
    type: "image",
    mediaUrl: "/images/Desi Ghee.jpeg",
    categoryTag: "Desi Ghee",
    title: "Desi Ghee for Rich Aroma & Authentic Taste",
    subtitle: "",
    buttonText: "Shop Desi Ghee",
    buttonLink: "/products?category=ghee",
  },
  // Slide 4: Desi Ghee Slide
  {
    type: "image",
    mediaUrl: "/images/arwa cream.jpg",
    categoryTag: "Cream",
    title: "Pure Creamy Perfection for Your Sweet Creations",
    subtitle: "",
    buttonText: "Shop Cream",
    buttonLink: "/products?category=cream",
  },
  // Slide 5: Chocolate & Chip Slide
  {
    type: "image",
    mediaUrl: "/images/chocolates.jpg",
    categoryTag: "Chocolate",
    title: "Premium Chocolates for Master Bakers",
    subtitle: "",
    buttonText: "Shop Chocolate & Chip",
    buttonLink: "/products?category=chocolate",
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto advance slides every 6 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section className="relative w-full h-[90vh] min-h-[580px] max-h-[850px] bg-black overflow-hidden select-none">
      {/* Slides Container */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            {/* Background Media */}
            {slide.type === "video" ? (
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  src={slide.mediaUrl}
                  poster={slide.posterUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                {/* Video controls */}
                <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
                  <button
                    onClick={toggleSound}
                    className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={toggleVideoPlay}
                    className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
                    aria-label="Toggle playback"
                  >
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={slide.mediaUrl}
                  alt={slide.title}
                  fill
                  priority={index <= 1}
                  className="object-cover scale-105 transition-transform duration-10000"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent sm:from-black/45 sm:via-black/15 sm:to-transparent" />
              </div>
            )}

            {/* Slide Content Overlay */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                <div className="max-w-2xl text-left space-y-4">
                  {/* Category Tag */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    <span>{slide.categoryTag}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  {slide.subtitle && (
                    <p className="text-base sm:text-lg text-amber-100/95 leading-relaxed font-normal max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                      {slide.subtitle}
                    </p>
                  )}

                  {/* Call to Action Button */}
                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <Link
                      href={slide.buttonLink}
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-[#1C0E07] font-black text-sm tracking-wide shadow-xl shadow-amber-500/30 transition-all duration-300 hover:gap-3.5 hover:scale-105 active:scale-95"
                    >
                      <span>{slide.buttonText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wide backdrop-blur-md border border-white/20 transition-all"
                    >
                      <span>Our Purity Process</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20 hover:scale-110 active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20 hover:scale-110 active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${idx === currentSlide
              ? "w-8 h-2.5 bg-amber-400"
              : "w-2.5 h-2.5 bg-white/50 hover:bg-white/90"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
