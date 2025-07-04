"use client";

import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: {
    type: string;
    text: string;
    author?: string;
  }[];
  author: {
    name: string;
    role: string;
    image: string;
  };
  relatedPosts: number[];
}

export default function ArticleHero({ post }: { post: BlogPost }) {
  return (
    <section
      aria-labelledby="article-hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16"
    >
      {/* Dynamic Glow - Blue like blog hero */}
      <div className="absolute top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <Container>
        <div className="relative max-w-4xl mx-auto z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <span className="inline-flex items-center bg-gray-700 text-blue-400 text-sm px-4 py-2 rounded-full font-medium">
              {post.category}
            </span>
          </motion.div>

          <motion.h1
            id="article-hero-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {post.excerpt}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 text-gray-300"
          >
            <span className="flex items-center text-sm sm:text-base">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </span>
            <span className="flex items-center text-sm sm:text-base">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}