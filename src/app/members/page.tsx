'use client';

import { motion } from 'framer-motion';
import MemberGrid from '@/components/members/MemberGrid';
import { members } from '@/data/members';

export default function Members() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Meet the Michigan Synthetic Biology Team
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Learn more about our members. 
          </p>
        </motion.div>

        <div className="mt-12">
          <MemberGrid members={members} />
        </div>
      </div>
    </div>
  );
}