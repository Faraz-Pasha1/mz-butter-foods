"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { X, ShieldCheck, Truck, RefreshCw } from "lucide-react";

export type PolicyType = "terms" | "shipping" | "returns" | null;

interface PolicyModalProps {
  policyType: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policyType, onClose }) => {
  if (!policyType) return null;

  const policy = siteConfig.policies[policyType];
  if (!policy) return null;

  const getIcon = () => {
    switch (policyType) {
      case "terms":
        return <ShieldCheck className="w-6 h-6 text-amber-600" />;
      case "shipping":
        return <Truck className="w-6 h-6 text-amber-600" />;
      case "returns":
        return <RefreshCw className="w-6 h-6 text-amber-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden z-10 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-amber-100 bg-amber-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              {getIcon()}
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#29150B]">
                {policy.title}
              </h3>
              <p className="text-xs text-amber-800/70">
                Mz Butter &amp; foods official customer policy
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-sm text-gray-700 leading-relaxed whitespace-pre-line space-y-4">
          {policy.content}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-amber-100 bg-amber-50/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
