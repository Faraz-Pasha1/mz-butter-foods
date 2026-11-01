import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { Clock, ArrowLeft, Share2, Sparkles, ShoppingBag } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="bg-[#FFFDF8] py-12 sm:py-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Post Meta & Title */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#29150B] tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-amber-100">
            <span className="text-xs font-semibold text-gray-700">
              Published by <strong className="text-[#29150B]">{post.author}</strong>
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-16/9 w-full rounded-3xl overflow-hidden shadow-xl mb-12 border-4 border-white bg-amber-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-md text-gray-800 leading-relaxed space-y-6 text-base sm:text-lg whitespace-pre-line">
          {post.content}
        </div>

        {/* Call to Action Card */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#29150B] to-[#1C0E07] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
              Taste The Difference
            </span>
            <h3 className="text-xl font-bold">Experience Our Pure Dairy Firsthand</h3>
            <p className="text-xs text-amber-100/70">
              Chilled cold-chain delivery directly to your doorstep.
            </p>
          </div>
          <Link
            href="/products"
            className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Shop Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
