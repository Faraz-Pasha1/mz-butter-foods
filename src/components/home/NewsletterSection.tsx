"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, Send, Sparkles } from "lucide-react";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsLoading(true);

    // Simulate reliable submission / sheet integration
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");
    }, 600);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#29150B] to-[#1C0E07] text-white relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Exclusive VIP Dairy Updates</span>
        </div>

        {/* a. Heading in middle of the screen */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-2xl mx-auto">
          Join our community with subscribe for update
        </h2>

        <p className="text-sm sm:text-base text-amber-100/80 mt-3 max-w-xl mx-auto leading-relaxed">
          Be the first to hear about fresh seasonal churn batches, special holiday discounts, and secret culinary dessert recipes.
        </p>

        {/* Email Subscribe Section */}
        <div className="mt-8 max-w-lg mx-auto">
          {isSubmitted ? (
            <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 flex items-center justify-center gap-3 animate-fade-in">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <div className="text-left">
                <h4 className="text-sm font-bold text-white">
                  Welcome to Mz Butter Community!
                </h4>
                <p className="text-xs text-emerald-200/90 mt-0.5">
                  Your email has been recorded. Check your inbox for your welcome opening deal!
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400/70" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/10 border border-amber-400/30 text-white placeholder:text-amber-200/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-md"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="py-3.5 px-8 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-black text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer shrink-0 disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Subscribing...</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-[11px] text-amber-200/50 mt-3">
            We value your privacy. No spam, only pure dairy updates. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};
