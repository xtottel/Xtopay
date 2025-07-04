"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiCalendar,
  FiClock,
  //  FiSearch
} from "react-icons/fi";
import blogPosts from "@/data/blog-posts.json"; // Import your blog data
import BlogHero from "./components/BlogHero";
import { NewsletterCTA } from "./components/NewsletterCTA";

export default function BlogPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Blog Hero Section */}
      <BlogHero />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-8 text-[#4e3b7d]">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <div className="h-48 relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#e0c9a4] bg-opacity-20 text-[#4e3b7d] text-xs px-2 py-1 rounded-full font-semibold">
                        {post.category}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="flex items-center text-xs text-gray-500">
                        <FiClock className="mr-1" /> {post.readTime}
                      </span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-bold text-gray-800 hover:text-[#4e3b7d] transition mb-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center">
                        <FiCalendar className="mr-1" /> {post.date}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm text-[#4e3b7d] font-medium hover:underline"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-[#4e3b7d] text-white rounded-md">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
     <NewsletterCTA />
    </div>
  );
}
