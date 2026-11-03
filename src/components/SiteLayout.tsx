"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Copyright } from "@/components/Copyright";
import { CartDrawer } from "@/components/CartDrawer";
import { SearchModal } from "@/components/SearchModal";
import { ToastNotification } from "@/components/ToastNotification";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";

export const SiteLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF8] text-[#231F20] selection:bg-amber-500 selection:text-white">
      {/* 1. Header with Announcement Bar & Nav */}
      <Header onOpenSearch={() => setSearchOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* 12. Footer Section */}
      <Footer />

      {/* 13. Copyright Section */}
      <Copyright />

      {/* Global Interactive Overlays */}
      <CartDrawer />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ToastNotification />
      <WhatsAppFloating />
    </div>
  );
};
