"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, CheckCircle, X, ArrowRight } from "lucide-react";
import Link from "next/link";

export const ToastNotification: React.FC = () => {
  const { toast, hideToast, setIsCartOpen } = useCart();

  if (!toast || !toast.show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full animate-fade-in px-4">
      <div className="bg-[#29150B] text-white p-4 rounded-2xl shadow-2xl border border-amber-500/30 flex items-center gap-4 relative overflow-hidden backdrop-blur-md">
        <div className="absolute top-0 left-0 h-1 bg-amber-500 w-full animate-[shrink_4s_linear]" />
        
        <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40">
          <CheckCircle className="w-6 h-6 text-amber-400" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
              Item Added
            </span>
            <span className="text-xs text-amber-200/80">
              Total items in cart: <strong className="text-white font-bold">{toast.quantity}</strong>
            </span>
          </div>
          <p className="text-sm font-medium text-gray-100 truncate mt-1">
            {toast.message}
          </p>
          <div className="mt-2 flex items-center gap-3">
            <button
              onClick={() => {
                hideToast();
                setIsCartOpen(true);
              }}
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors underline underline-offset-2 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              View Cart Drawer
            </button>
            <span className="text-gray-500 text-xs">•</span>
            <Link
              href="/cart"
              onClick={hideToast}
              className="text-xs text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              Go to Cart Page <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        <button
          onClick={hideToast}
          aria-label="Close notification"
          className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer self-start"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
