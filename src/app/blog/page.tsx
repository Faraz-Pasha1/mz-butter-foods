import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Clock, ArrowRight, BookOpen, Sparkles } from "lucide-react";

export default function BlogIndexPage() {
  return (
    <div className="bg-[#FFFDF8] py-12 sm:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dairy Journal &amp; Culinary Recipes</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#29150B] tracking-tight">
            The Mz Butter Journal
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            Expert insights on pure dairy nutrition, traditional slow-simmered desi ghee, and professional baking techniques from our kitchen.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-amber-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 group"
            >
              <div className="relative aspect-16/10 w-full bg-amber-100 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-amber-900 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>{post.readTime}</span>
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h2 className="text-xl font-extrabold text-[#29150B] group-hover:text-amber-700 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-amber-50 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">
                    By {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:text-amber-800"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
