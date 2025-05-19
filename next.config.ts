import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  env: {
    year: "2025",
    student_count: "36",
    NEXT_PUBLIC_BASE_PATH: '/~umichsynbio',
  },
  images:{
    unoptimized: true,
  },
  basePath: '/~umichsynbio',
  assetPrefix: '/~umichsynbio',
};

export default nextConfig;
