import React from "react";
import { siteConfig } from "@/config/site";
import { Heart } from "lucide-react";

export const Copyright: React.FC = () => {
  return (
    <div className="bg-[#120804] text-amber-200/60 py-4 px-4 text-xs border-t border-amber-950/60">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-amber-100">{siteConfig.name}</strong>. All rights reserved.
          </p>
          <p className="text-[11px] text-amber-400/70 mt-0.5">
            {siteConfig.tagline}
          </p>
        </div>
        {/* <div className="flex items-center gap-1.5 text-[11px] text-amber-200/70">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          <span>for dairy lovers • 100% Purity Certified</span>
        </div> */}
      </div>
    </div>
  );
};
