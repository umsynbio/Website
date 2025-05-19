import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  env: {
    year: "2025",
    student_count: "36",
  },
  images:{
    unoptimized: true,
  }
};

export default nextConfig;
