
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
} from "lucide-react";

interface SlideData {
  type: "video" | "image";
  mediaUrl: string;
  mobileMediaUrl?: string;
  mobileVideoUrl?: string;
  posterUrl?: string;
  title: string;
  buttonText: string;
  buttonLink: string;
}

const slides: SlideData[] = [
  // 1. Video Slide
  {
    type: "video",
    mediaUrl: "/images/HeroVideo.mp4",
    posterUrl: "/images/productpagelandscapebutter.webp",
    title: "",
    buttonText: "Shop All",
    buttonLink: "/products",
  },

  // 2. All Products
  {
    type: "image",
    mediaUrl: "/images/heroallproduct.webp",
    mobileMediaUrl: "/images/heroallmobile.webp",
    title: "",
    buttonText: "Shop Now",
    buttonLink: "/products?category=alldairy&sweets",
  },

  // 3. Butter
  {
    type: "image",
    mediaUrl: "/images/herobutter.jpg",
    mobileMediaUrl: "/images/herobuttermobile.png",
    title: "",
    buttonText: "Shop Now",
    buttonLink: "/products?category=butter",
  },

  // 4. Desi Ghee
  {
    type: "image",
    mediaUrl: "/images/herodesighee.jpg",
    mobileMediaUrl: "/images/herodesigheemobile.jpg",
    title: "",
    buttonText: "Shop Now",
    buttonLink: "/products?category=ghee",
  },

  // 5. Cream
  {
    type: "image",
    mediaUrl: "/images/herocream.jpg",
    mobileMediaUrl: "/images/herowhipcreammobile.jpg",
    title: "",
    buttonText: "Shop Now",
    buttonLink: "/products?category=cream",
  },

  // 6. Chocolate & Chips
  {
    type: "image",
    mediaUrl: "/images/herochocolates.jpg",
    mobileMediaUrl: "/images/herochocolatemobile.jpg",
    title: "",
    buttonText: "Shop Now",
    buttonLink: "/products?category=chocolate",
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  // AUTOPLAY SLIDER
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9500);

    return () => clearInterval(timer);
  }, [isPlaying]);

  // VIDEO PLAYBACK ON SLIDE CHANGE
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (currentSlide === 0 && isPlaying) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  }, [currentSlide, isPlaying]);

  // PREVIOUS SLIDE
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // NEXT SLIDE
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // VIDEO SOUND
  const toggleSound = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // VIDEO PLAY / PAUSE
  const toggleVideoPlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => { });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      className="
        relative w-full overflow-hidden select-none bg-black

        /* MOBILE - PORTRAIT */
        h-[75svh] min-h-[480px] max-h-[750px]

        /* TABLET - LANDSCAPE */
        md:h-[65vh] md:min-h-[400px] md:max-h-[600px]

        /* LAPTOP / DESKTOP - LANDSCAPE */
        lg:h-[82vh] lg:min-h-[450px] lg:max-h-[750px]
      "
    >
      {/* SLIDES CONTAINER */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={index}
            className={`
              absolute inset-0
              transition-opacity duration-1000 ease-in-out
              ${isActive
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
              }
            `}
          >
            {/* VIDEO SLIDE */}
            {slide.type === "video" ? (
              <div className="absolute inset-0 w-full h-full">

                <video
                  ref={videoRef}
                  src={slide.mediaUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  poster={slide.posterUrl || undefined}
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover object-center
                  "
                />

                {/* VIDEO OVERLAY */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/30
                  via-black/15
                  to-transparent
                  pointer-events-none
                " />

                {/* VIDEO CONTROLS */}
                <div className="
                  absolute bottom-5 right-5
                  sm:bottom-6 sm:right-6
                  z-30 flex items-center gap-2
                ">

                  {/* SOUND BUTTON */}
                  <button
                    onClick={toggleSound}
                    className="
                      p-2.5 rounded-full
                      bg-black/30 hover:bg-black/50
                      text-white backdrop-blur-md
                      transition-colors cursor-pointer
                    "
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>

                  {/* PLAY / PAUSE BUTTON */}
                  <button
                    onClick={toggleVideoPlay}
                    className="
                      p-2.5 rounded-full
                      bg-black/30 hover:bg-black/50
                      text-white backdrop-blur-md
                      transition-colors cursor-pointer
                    "
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>

                </div>
              </div>
            ) : (

              /* IMAGE SLIDES */
              <div className="absolute inset-0 w-full h-full">

                <picture className="absolute inset-0 block w-full h-full">

                  {/* MOBILE PORTRAIT IMAGE */}
                  {slide.mobileMediaUrl && (
                    <source
                      media="(max-width: 767px)"
                      srcSet={slide.mobileMediaUrl}
                    />
                  )}

                  {/* TABLET / DESKTOP LANDSCAPE IMAGE */}
                  <Image
                    src={slide.mediaUrl}
                    alt={slide.title || "MZ Butter & Foods"}
                    fill
                    priority={index === 1}
                    sizes="100vw"
                    className="
                      object-cover
                      object-center
                    "
                    unoptimized
                  />

                </picture>

                {/* IMAGE OVERLAY */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-black/10
                  via-transparent
                  to-transparent
                  pointer-events-none
                " />

              </div>
            )}

            {/* SLIDE CONTENT OVERLAY */}
            <div className="
              absolute inset-0 z-20
              flex flex-col items-center justify-end
              pb-8 sm:pb-12 lg:pb-16
              pointer-events-none
            ">

              {/* TITLE */}
              {slide.title && (
                <div className="
                  absolute top-8 sm:top-12
                  left-0 w-full px-6 text-center
                ">
                  <h1 className="
                    text-2xl sm:text-4xl lg:text-5xl
                    font-black text-white
                    tracking-tight leading-[1.1]
                    drop-shadow-lg
                  ">
                    {slide.title}
                  </h1>
                </div>
              )}

              {/* SHOP BUTTON */}
              {slide.type === "image" && (
                <Link
                  href={slide.buttonLink}
                  className="
                    pointer-events-auto
                    inline-flex items-center justify-center
                    px-8 py-3.5
                    rounded-full
                    bg-transparent
                    border-2 border-grey
                    text-grey font-black text-sm
                    tracking-wide
                    transition-all duration-300
                    hover:bg-amber-500
                    hover:border-amber-500
                    hover:text-black
                    hover:scale-105
                    active:scale-95
                  "
                >
                  {slide.buttonText}
                </Link>
              )}

            </div>
          </div>
        );
      })}

      {/* PREVIOUS SLIDE BUTTON */}
      <button
        onClick={handlePrev}
        className="
          absolute left-3 sm:left-4
          top-1/2 -translate-y-1/2
          z-30
          w-9 h-9 sm:w-12 sm:h-12
          rounded-full
          bg-black/40 hover:bg-black/70
          text-white backdrop-blur-md
          flex items-center justify-center
          transition-all cursor-pointer
          border border-white/20
          hover:scale-110 active:scale-95
        "
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* NEXT SLIDE BUTTON */}
      <button
        onClick={handleNext}
        className="
          absolute right-3 sm:right-4
          top-1/2 -translate-y-1/2
          z-30
          w-9 h-9 sm:w-12 sm:h-12
          rounded-full
          bg-black/40 hover:bg-black/70
          text-white backdrop-blur-md
          flex items-center justify-center
          transition-all cursor-pointer
          border border-white/20
          hover:scale-110 active:scale-95
        "
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

    </section>
  );
};













// ----------------------------OLD CODE -------------------------

// _____________________________________________________________
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   ChevronLeft,
//   ChevronRight,

//   Volume2,
//   VolumeX,
//   Play,
//   Pause,
// } from "lucide-react";

// interface SlideData {
//   type: "video" | "image";
//   mediaUrl: string;
//   posterUrl?: string;
//   title: string;
//   buttonText: string;
//   buttonLink: string;
// }

// const slides: SlideData[] = [
//   // Slide 1: Video Slide
//   {
//     type: "video",
//     mediaUrl: "/images/HeroVideo.mp4",
//     posterUrl: "",

//     title: "",

//     buttonText: "Shop All",
//     buttonLink: "/products",
//   },
//   // Slide 1: All Products
//   {
//     type: "image",
//     mediaUrl: "/images/heroallproduct.webp",

//     title: "",

//     buttonText: "Shop Now",
//     buttonLink: "/products?category=alldairy&sweets",
//   },


//   // Slide 2: Butter Slide
//   {
//     type: "image",
//     mediaUrl: "/images/herobutter.jpg",

//     title: "",

//     buttonText: "Shop Now",
//     buttonLink: "/products?category=butter",
//   },
//   // Slide 3: Cream Slide
//   {
//     type: "image",
//     mediaUrl: "/images/herodesighee.jpg",

//     title: "",

//     buttonText: "Shop Now",
//     buttonLink: "/products?category=ghee",
//   },
//   // Slide 4: Desi Ghee Slide
//   {
//     type: "image",
//     mediaUrl: "/images/herocream.jpg",

//     title: "",

//     buttonText: "Shop Now",
//     buttonLink: "/products?category=cream",
//   },
//   // Slide 5: Chocolate & Chip Slide
//   {
//     type: "image",
//     mediaUrl: "/images/herochocolates.jpg",

//     title: "",

//     buttonText: "Shop Now",
//     buttonLink: "/products?category=chocolate",
//   },
// ];

// export const HeroSection: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(true);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   // Auto advance slides every 6 seconds
//   useEffect(() => {
//     if (!isPlaying) return;
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 9500);
//     return () => clearInterval(timer);
//   }, [isPlaying]);

//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const toggleSound = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setIsMuted(videoRef.current.muted);
//     }
//   };

//   const toggleVideoPlay = () => {
//     if (videoRef.current) {
//       if (videoRef.current.paused) {
//         videoRef.current.play();
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   };

//   return (
//     // <section className="relative w-full h-[80vh] min-h-[450px] max-h-[750px] bg-black overflow-hidden select-none">
//     <section className="
//       relative w-full
//       h-[65svh] min-h-[400px] max-h-[650px]
//       sm:h-[75vh] sm:min-h-[450px]
//       lg:h-[80vh] lg:max-h-[750px]
//       bg-white overflow-hidden select-none
//     ">
//       {/* Slides Container */}
//       {slides.map((slide, index) => {
//         const isActive = index === currentSlide;

//         return (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
//               }`}
//           >
//             {/* Background Media */}
//             {slide.type === "video" ? (
//               <div className="relative w-full h-full">
//                 <video
//                   ref={videoRef}
//                   src={slide.mediaUrl}
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   // className="w-full h-full object-cover scale-105"
//                   className="
//                     absolute inset-0
//                     w-full h-full
//                     object-cover
//                     object-center
//                   "
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/15 to-transparent" />

//                 {/* Video controls */}
//                 <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
//                   <button
//                     onClick={toggleSound}
//                     className="p-2 rounded-full bg-black/20 hover:bg-black/20 text-white backdrop-blur-xs transition-colors cursor-pointer"
//                     aria-label={isMuted ? "Unmute video" : "Mute video"}
//                   >
//                     {isMuted ? (
//                       <VolumeX className="w-4 h-4" />
//                     ) : (
//                       <Volume2 className="w-4 h-4" />
//                     )}
//                   </button>
//                   <button
//                     onClick={toggleVideoPlay}
//                     className="p-2 rounded-full bg-black/10 hover:bg-black/20 text-white backdrop-blur-xs transition-colors cursor-pointer"
//                     aria-label="Toggle playback"
//                   >
//                     <Play className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="relative w-full h-full">
//                 {/* <Image
//                   src={slide.mediaUrl}
//                   alt={slide.title}
//                   fill
//                   priority={index <= 1}
//                   className="object-contain scale-105 transition-transform duration-10000"
//                   unoptimized
//                 /> */}
//                 <Image
//                   src={slide.mediaUrl}
//                   alt={slide.title || "MZ Butter & Foods"}
//                   fill
//                   priority={index <= 1}
//                   sizes="100vw"
//                   className="
//                     object-cover
//                     object-center
//                     transition-transform duration-10000
//                   "
//                   unoptimized
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-black/5 to-transparent sm:from-black/25 sm:via-black/5 sm:to-transparent" />
//               </div>
//             )}

//             {/* Slide Content Overlay */}
//             {/* Slide Content Overlay */}
//             <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-8 sm:pb-12 lg:pb-16">

//               {/* Title - Top Center */}
//               {slide.title && (
//                 <div className="absolute top-8 sm:top-12 left-0 w-full px-6 text-center">
//                   <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
//                     {slide.title}
//                   </h1>
//                 </div>
//               )}

//               {/* Shop Button - Bottom Center */}
//               <Link
//                 href={slide.buttonLink}
//                 className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent border-2 border-black text-black font-black text-sm tracking-wide shadow-none transition-all duration-300 hover:bg-amber-500 hover:border-amber-500 hover:text-black hover:scale-105 active:scale-95"
//               >
//                 {slide.buttonText}
//               </Link>

//             </div>
//           </div>
//         );
//       })}

//       {/* Slide Navigation Arrows */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20 hover:scale-110 active:scale-95"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>

//       <button
//         onClick={handleNext}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20 hover:scale-110 active:scale-95"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>

//       {/* Slide Indicators / Dots */}
//       {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentSlide(idx)}
//             className={`transition-all duration-300 rounded-full cursor-pointer ${idx === currentSlide
//               ? "w-8 h-2.5 bg-amber-400"
//               : "w-2.5 h-2.5 bg-white/50 hover:bg-white/90"
//               }`}
//             aria-label={Go to slide ${idx + 1}}
//           />
//         ))}
//       </div> */}
//     </section>
//   );
// };