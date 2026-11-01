"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Order Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    // Prepare mailto or WhatsApp link for immediate submission
    const subject = encodeURIComponent(`[Website Contact] ${formData.subject} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    // Open user's default email client
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <div className="bg-[#FFFDF8] py-12 sm:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customer Care &amp; Inquiries</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#29150B] tracking-tight">
            Get in Touch With Our Dairy Team
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Have questions regarding batch availability, bulk restaurant supply, or custom delivery schedules? We are always here to help.
          </p>
        </div>

        {/* 2 Columns: Contact Form & Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-amber-200/80 p-6 sm:p-10 shadow-lg">
            <h2 className="text-xl font-extrabold text-[#29150B] mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              Fill in your details below and our team will get back to you promptly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 animate-fade-in space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
                  <h3 className="font-extrabold text-base">
                    Message Prepared Successfully!
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  Your email client has opened with your message addressed to <strong>{siteConfig.email}</strong>. If your email client didn’t launch automatically, you can also send your inquiry straight to our WhatsApp chat.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Mz Butter, my name is ${formData.name}. I sent an inquiry: ${formData.message}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp Instead</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Tariq Mehmood"
                      className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/20 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/20 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="e.g. 0300 1234567"
                      className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/20 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      aria-label="Inquiry subject"
                      className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/20 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                    >
                      <option value="Order Inquiry">Order Inquiry</option>
                      <option value="Bakery Bulk Supply">Commercial / Bakery Bulk Supply</option>
                      <option value="Quality Question">Product Quality Question</option>
                      <option value="Delivery Schedule">Delivery Schedule</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us what you need or ask any questions..."
                    className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/20 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm shadow-lg shadow-amber-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to {siteConfig.email}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info & WhatsApp Fast Track */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick WhatsApp Connect Banner */}
            <div className="bg-emerald-600 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-200 font-bold block">
                    Fastest Response
                  </span>
                  <h3 className="text-xl font-black">Direct WhatsApp Chat</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-6">
                Need immediate answers regarding morning delivery times or stock? Message our farm dispatch directly on WhatsApp.
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-full bg-white text-emerald-800 hover:bg-emerald-50 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Chat Now ({siteConfig.phone})</span>
              </a>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white rounded-3xl border border-amber-200/80 p-6 sm:p-8 shadow-md space-y-5">
              <h3 className="font-extrabold text-base text-[#29150B] border-b border-amber-100 pb-3">
                Official Contact Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#29150B] block">Phone &amp; WhatsApp:</strong>
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}`}
                      className="text-amber-700 font-semibold hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#29150B] block">Email Inbox:</strong>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-amber-700 font-semibold hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#29150B] block">Dairy Processing Facility:</strong>
                    <span>{siteConfig.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#29150B] block">Operating Hours:</strong>
                    <span>{siteConfig.openingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-amber-100 flex items-center gap-2 text-xs text-amber-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Government Food Purity &amp; Safety Registered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
