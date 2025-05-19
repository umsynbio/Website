'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
export default function Members() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Meet the Michigan Synthetic Biology Team
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our team page is currently under construction. Check back soon to meet our talented team members!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105"
            >
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 