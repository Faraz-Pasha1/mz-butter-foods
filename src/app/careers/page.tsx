"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Briefcase,
  Upload,
  CheckCircle2,
  FileText,
  X,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  Send,
} from "lucide-react";

const careerPositions = [
  "General Application / Any Department",
  "Dairy Production Specialist & Churn Master",
  "Quality Assurance & Milk Chemist",
  "Cold-Chain Logistics & Dispatch Supervisor",
  "E-Commerce & WhatsApp Support Executive",
  "Sales & Retail Distribution Representative",
  "Accounts & Finance Executive",
  "Other (Mention in brief statement below)",
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "Karachi",
    position: "General Application / Any Department",
    experience: "1 - 2 Years",
    availability: "Immediate (Within 1 week)",
    coverLetter: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage("File size exceeds 10MB limit. Please upload a smaller resume file.");
        return;
      }
      setErrorMessage("");
      setResumeFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      setErrorMessage("Please attach your resume (PDF or DOCX format) before submitting.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    // Simulate server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-[#FFFDF8] min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-amber-700">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Careers at Mz Butter</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Join Our Artisanal Team</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#29150B] tracking-tight leading-tight">
            Work With Mz Butter &amp; Foods
          </h1>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl mx-auto">
            We are reviving Pakistan&apos;s heritage of unadulterated, 100% pure dairy. Fill in your details and submit your resume below to connect with our HR team.
          </p>
        </div>

        {/* Application Form Section */}
        <div id="application-form" className="scroll-mt-24">
          <div className="bg-white rounded-3xl p-6 sm:p-12 border-2 border-amber-200/80 shadow-xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Job Application &amp; CV Upload</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#29150B]">
                Submit Your Application
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Please provide your contact details, select your area of interest, and attach your resume. Our HR department reviews all applications within 48 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-300 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-emerald-900">
                  Application Successfully Submitted!
                </h3>
                <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. We have received your application and resume for <strong>{formData.position}</strong>. Our HR team will reach out to you via WhatsApp / Phone at <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Mz Butter HR! I have submitted my job application for "${formData.position}" under the name ${formData.fullName}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Notify HR on WhatsApp ({siteConfig.phone})</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setResumeFile(null);
                    }}
                    className="py-3 px-5 rounded-full bg-white hover:bg-gray-100 text-gray-700 font-semibold text-xs border border-gray-300 cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                    <X className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* 2-Column Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Muhammad Faraz"
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-[#FFFDF9] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-gray-900"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. faraz@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-[#FFFDF9] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-gray-900"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      WhatsApp / Mobile Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="e.g. 0331 9099009"
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-[#FFFDF9] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-gray-900"
                    />
                    <span className="text-[11px] text-gray-500 mt-1 block">
                      Our HR team reaches candidates primarily on WhatsApp.
                    </span>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Current City of Residence <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      placeholder="e.g. Karachi, Sindh"
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-[#FFFDF9] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-gray-900"
                    />
                  </div>

                  {/* Position / Area of Interest */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Position / Department <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.position}
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-[#FFFDF9] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-gray-900"
                    >
                      {careerPositions.map((pos) => (
                        <option key={pos} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Relevant Experience */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Relevant Years of Experience <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-[#FFFDF9] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-gray-900"
                    >
                      <option value="Fresh Graduate / Entry Level">Fresh Graduate / Entry Level</option>
                      <option value="1 - 2 Years">1 - 2 Years</option>
                      <option value="3 - 5 Years">3 - 5 Years</option>
                      <option value="5+ Years Senior / Specialist">5+ Years Senior / Specialist</option>
                    </select>
                  </div>
                </div>

                {/* Why do you want to serve at Mz Butter? */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Brief Statement: Why do you wish to join Mz Butter &amp; Foods?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.coverLetter}
                    onChange={(e) =>
                      setFormData({ ...formData, coverLetter: e.target.value })
                    }
                    placeholder="Tell us about your background, craftsmanship, and how you want to contribute to pure dairy standards..."
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-[#FFFDF9] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-gray-900"
                  />
                </div>

                {/* Resume / Attachment Section */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Attach Resume / Curriculum Vitae (CV) <span className="text-red-500">*</span>
                  </label>

                  <div className="relative border-2 border-dashed border-amber-300 hover:border-amber-500 rounded-2xl p-6 sm:p-8 bg-amber-50/40 text-center transition-colors">
                    {resumeFile ? (
                      <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-amber-200 shadow-xs max-w-md mx-auto">
                        <div className="flex items-center gap-3 text-left">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-bold text-xs text-gray-900 block truncate max-w-[200px]">
                              {resumeFile.name}
                            </span>
                            <span className="text-[10px] text-gray-500">
                              {(resumeFile.size / 1024).toFixed(1)} KB • Ready to submit
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setResumeFile(null)}
                          className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                          title="Remove file"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <input
                          type="file"
                          id="resume-upload"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex flex-col items-center justify-center pointer-events-none space-y-2">
                          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-1">
                            <Upload className="w-6 h-6" />
                          </div>
                          <p className="text-sm font-bold text-[#29150B]">
                            <span className="text-amber-700 underline">Click to upload</span> or drag and drop your resume
                          </p>
                          <p className="text-xs text-gray-500">
                            Supported Formats: PDF, DOCX, DOC (Maximum file size: 10MB)
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Your resume and data are kept strictly confidential.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm shadow-lg shadow-amber-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Uploading Resume...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Job Application</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Direct HR Inquiries Callout */}
        <div className="mt-12 text-center max-w-xl mx-auto space-y-2">
          <p className="text-xs text-gray-500">
            Have urgent questions regarding career applications at Mz Butter &amp; Foods?
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              "Hello Mz Butter & Foods HR! I have a question regarding career applications."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Connect directly with our HR team on WhatsApp ({siteConfig.phone}) &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
