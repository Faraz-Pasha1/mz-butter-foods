"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Award, CheckCircle2, ZoomIn, X } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  image: string;
  accreditation: string;
  highlights: string[];
}

const certificates: Certificate[] = [
  {
    id: "halal",
    title: "International Halal Certification",
    subtitle: "Certified 100% Pure & Shariah-Compliant",
    badge: "100% Halal Certified",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/images/certificate-halal.jpeg",
    accreditation: "International Halal Certification (IHC)",
    highlights: [
      "Strict compliance with international Islamic dietary laws",
      "Zero animal tallow, unverified gelatin, or prohibited additives",
      "Regular third-party verification & hygienic production audits",
      "Trusted for homes, commercial bakeries, and fine restaurants",
    ],
  },
  {
    id: "iso",
    title: "Food Safety Management System",
    subtitle: "ISO 22000:2018 Certification",
    badge: "EGAC & ACERTA Accredited",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    image: "/images/certificate-iso.jpeg",
    accreditation: "EGAC Accredited • ACERTA Middle East (CAB # 117001)",
    highlights: [
      "Certified under Food Safety Management System ISO 22000:2018",
      "Comprehensive HACCP hazard analysis and critical control points",
      "Strict cold-chain logistics and sealed tamper-evident packaging",
      "Microbiologically tested for pristine purity and fresh taste",
    ],
  },
];

export const CertificationSection: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF8] via-amber-50/25 to-[#FAF6EE] border-t border-amber-100/80 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200/15 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Certified Excellence & Safety</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 font-serif tracking-tight leading-tight">
            Our Quality & Halal Certifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            At MZ Butter & Foods, quality is never a compromise. Our state-of-the-art processing, cold-chain handling, and pure sourcing are accredited by leading international standards bodies.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-3xl border border-amber-100 shadow-md hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${cert.badgeColor}`}
                  >
                    <Award className="w-3.5 h-3.5" />
                    {cert.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    Official Certificate
                  </span>
                </div>

                {/* Certificate Image Frame */}
                <div
                  onClick={() => setActiveCert(cert)}
                  className="relative w-full aspect-square sm:aspect-4/3 rounded-2xl bg-gradient-to-b from-amber-50/50 to-amber-100/30 border border-amber-200/70 p-4 sm:p-6 mb-6 flex items-center justify-center cursor-pointer overflow-hidden group/img shadow-inner"
                  title="Click to zoom certificate"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover/img:scale-105"
                      unoptimized
                    />
                  </div>
                  {/* Zoom Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm backdrop-blur-xs">
                    <ZoomIn className="w-5 h-5 text-amber-300" />
                    <span>View Full Certificate</span>
                  </div>
                </div>

                {/* Certificate Details */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-amber-900/80 mt-1">
                  {cert.subtitle}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 font-medium">
                  {cert.accreditation}
                </p>

                {/* Highlights List */}
                <div className="mt-5 pt-5 border-t border-amber-100/80 space-y-2.5">
                  {cert.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View full button */}
              <button
                type="button"
                onClick={() => setActiveCert(cert)}
                className="mt-6 w-full py-2.5 px-4 rounded-xl border border-amber-200 bg-amber-50/60 hover:bg-amber-600 hover:text-white text-amber-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs hover:shadow-md"
              >
                <ZoomIn className="w-4 h-4" />
                <span>View Full Size Certificate</span>
              </button>
            </div>
          ))}
        </div>

        {/* Trust summary strip */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl border border-amber-200/70 p-4 sm:p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-amber-100">
            <div className="p-2">
              <span className="block text-2xl font-black text-amber-800 font-serif">100%</span>
              <span className="text-xs text-gray-600 font-medium">Pure Farm Dairy</span>
            </div>
            <div className="p-2">
              <span className="block text-2xl font-black text-emerald-700 font-serif">ISO</span>
              <span className="text-xs text-gray-600 font-medium">22000:2018 Certified</span>
            </div>
            <div className="p-2">
              <span className="block text-2xl font-black text-amber-800 font-serif">IHC</span>
              <span className="text-xs text-gray-600 font-medium">Halal Verified</span>
            </div>
            <div className="p-2">
              <span className="block text-2xl font-black text-emerald-700 font-serif">Cold-Chain</span>
              <span className="text-xs text-gray-600 font-medium">Fresh Doorstep Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen Certificate Preview Modal */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col p-4 sm:p-6 border border-amber-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h4 className="text-lg sm:text-xl font-black text-gray-900">
                  {activeCert.title}
                </h4>
                <p className="text-xs text-amber-800/80 font-medium">
                  {activeCert.accreditation}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                aria-label="Close certificate modal"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative w-full flex-1 min-h-[350px] sm:min-h-[480px] my-3 rounded-xl bg-amber-50/40 overflow-hidden flex items-center justify-center p-2">
              <Image
                src={activeCert.image}
                alt={activeCert.title}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-2 text-xs text-gray-500">
              <span>Verified Certificate Document</span>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
