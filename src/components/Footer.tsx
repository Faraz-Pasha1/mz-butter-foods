"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";
import { PolicyModal, PolicyType } from "@/components/PolicyModal";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/SocialIcons";

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  // Take the main product titles for Section 2
  const shopProducts = products.slice(0, 6);

  return (
    <>
      <footer className="bg-[#1C0E07] text-amber-50/90 pt-16 pb-12 border-t border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 4 Footer Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* 1st Section: Logo & Brand Bio */}
            <div className="space-y-4">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500/50 bg-white p-1">
                  <Image
                    src="/images/logo.png"
                    alt={siteConfig.name}
                    fill
                    className="object-contain p-0.5 group-hover:scale-105 transition-transform"
                    priority
                  />
                </div>
                <div>
                  <span className="font-extrabold text-2xl text-white tracking-tight block">
                    Mz Butter
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    &amp; Foods
                  </span>
                </div>
              </Link>
              <p className="text-xs text-amber-100/70 leading-relaxed max-w-sm">
                Pure sweet cream butter, dense velvet fresh cream, and traditional slow-simmered danedar desi ghee. 100% farm milk, zero adulterants, fresh delivery directly to your home.
              </p>
              {/* <div className="pt-2 flex items-center gap-2 text-xs text-amber-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Natural Grass-Fed Dairy</span>
              </div> */}
            </div>

            {/* 2nd Section: Heading "Shop" (Product titles direct to product description page) */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-amber-400 mb-5 pb-1 border-b border-amber-800/40 inline-block">
                Shop Our Dairy
              </h3>
              <ul className="space-y-2.5 text-xs">
                {shopProducts.map((prod) => (
                  <li key={prod.id}>
                    <Link
                      href={`/products/${prod.slug || prod.id}`}
                      className="text-amber-100/80 hover:text-amber-300 transition-colors flex items-center justify-between group"
                    >
                      <span className="line-clamp-1">{prod.name}</span>
                      <span className="text-[10px] text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/products"
                    className="text-amber-400 font-bold hover:text-amber-300 flex items-center gap-1 transition-colors"
                  >
                    <span>View All Dairy Products</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3rd Section: Heading "Policies" (Terms & Condition, Shipping Policy, Return / Refund Policy) */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-amber-400 mb-5 pb-1 border-b border-amber-800/40 inline-block">
                Our Policies
              </h3>
              <ul className="space-y-3 text-xs">
                <li>
                  <button
                    onClick={() => setActivePolicy("terms")}
                    className="text-amber-100/80 hover:text-amber-300 transition-colors flex items-center gap-2 cursor-pointer text-left"
                  >
                    <span>• Terms &amp; Conditions</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy("shipping")}
                    className="text-amber-100/80 hover:text-amber-300 transition-colors flex items-center gap-2 cursor-pointer text-left"
                  >
                    <span>• Delivery &amp; Shipping Policy</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy("returns")}
                    className="text-amber-100/80 hover:text-amber-300 transition-colors flex items-center gap-2 cursor-pointer text-left"
                  >
                    <span>• Return &amp; Refund Policy</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicy("privacy")}
                    className="text-amber-100/80 hover:text-amber-300 transition-colors flex items-center gap-2 cursor-pointer text-left"
                  >
                    <span>• Privacy Policy</span>
                  </button>
                </li>
                <li className="pt-2">
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-amber-200/90 pt-2 border-t border-amber-800/40">
                    <Link href="/recipes" className="hover:text-amber-400 transition-colors">
                      • Recipes
                    </Link>
                    <Link href="/careers" className="hover:text-amber-400 transition-colors">
                      • Careers
                    </Link>
                    {/* <Link href="/about" className="hover:text-amber-400 transition-colors">
                      • Our Heritage
                    </Link> */}
                  </div>
                </li>
              </ul>
            </div>

            {/* 4th Section: Socials, Contact #, Address #, Email address */}
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-amber-400 mb-5 pb-1 border-b border-amber-800/40 inline-block">
                Connect &amp; Contact
              </h3>

              {/* Social links */}
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello MZ Butter & Foods! I would like to place an order or inquire about your products.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all border border-emerald-500/30"
                  aria-label="Chat with MZ Butter & Foods on WhatsApp"
                  title="Chat with MZ Butter & Foods on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all border border-blue-500/30"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-pink-600/20 text-pink-400 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-all border border-pink-500/30"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Contact Information */}
              <ul className="space-y-2.5 text-xs text-amber-100/80">
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block">WhatsApp &amp; Call:</strong>
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}`}
                      className="hover:text-amber-300"
                    >
                      {siteConfig.phone}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block">Email Address:</strong>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="hover:text-amber-300"
                    >
                      {siteConfig.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block">Facility:</strong>
                    {siteConfig.address}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{siteConfig.openingHours}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      <PolicyModal
        policyType={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </>
  );
};
